const path = require('path')
const webpack = require('webpack')
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader-plugin')
const FileManagerWebpackPlugin = require('filemanager-webpack-plugin')

const manifest = require('./src/main.js')
const background = require('./src/chrome/config/background')
const contentListener = require('./src/chrome/config/content-listener')

const contentScript = require('./src/chrome/config/content-script')

const { env, variables } = require('./env')(__dirname)

const isDev = env === 'development'
const isProd = env === 'production'

const { name, version } = require('./package.json')

// @since 1.2.1 add url permission
let api = variables.BASE_URL_API
let feedbackEnabled = variables.FEEDBACK_ENABLED
if (!!api && !!manifest.permissions && feedbackEnabled === 'true') {
    api = api.substring(1, api.length - 1)
    if (!api.endsWith('/')) {
        api += '/'
    }
    manifest.permissions.push(api)
}

const entry = {}
// The output and input of the background.js
entry[background.script] = './src/background.ts'
entry[contentListener.script] = './src/content-listener.ts'
entry[contentScript.script] = './src/content-script.ts'


// Generate json files 
const generateJsonPlugins = [new GenerateJsonPlugin('manifest.json', manifest)]
// @since 1.2.0 Resolve the locale json files
const { chromeMessages } = require('./src/locale/index')
for (const localeName in chromeMessages) {
    const locale = chromeMessages[localeName]
    generateJsonPlugins.push(new GenerateJsonPlugin(path.join("_locales", localeName, "messages.json"), locale))
}
const manifestFirefoxName = 'manifest-firefox.json'
if (isDev) {
    // The manifest.json is different from Chrome's with add-on ID
    const firefoxManifestGeneratePlugin = new GenerateJsonPlugin(manifestFirefoxName, { ...manifest, browser_specific_settings: { gecko: { id: 'make-zero@zhy' } } })
    generateJsonPlugins.push(firefoxManifestGeneratePlugin)
}

const plugins = [
    new VueLoaderPlugin(),
    ...generateJsonPlugins,
    new CopyWebpackPlugin({ patterns: [{ from: __dirname + '/public', to: './static' }] }), // copy static resources
    // Define environment variables
    new webpack.DefinePlugin({
        'process.env': {
            ENV: env,
            ...variables
        }
    })
]

if (isProd) {
    const normalZipFilePath = `./market_packages/${name}-${version}.zip`
    const sourceCodeForFireFox = `./market_packages/${name}-${version}-src.zip`

    const srcDir = ['public', 'src', '.env.development', '.env.production', 'env.js', 'package.json', 'tsconfig.json', 'version_log.json', 'webpack.config.js']
    const copyMapper = srcDir.map(path => { return { source: `./${path}`, destination: `./firefox/${path}` } })

    plugins.push(
        new FileManagerWebpackPlugin({
            events: {
                onStart: [{ delete: ['./chrome_dir/*'] }],
                // Archive at the end
                onEnd: [
                    // Delete license files
                    { delete: ['./chrome_dir/*.LICENSE.txt'] },
                    // Define plugin to archive zip for differrent markets
                    {
                        delete: [normalZipFilePath],
                        archive: [
                            { source: './chrome_dir', destination: normalZipFilePath },
                        ]
                    },
                    // Archive srouce code for FireFox
                    {
                        copy: [
                            { source: './doc/for-fire-fox.md', destination: './firefox/README.md' },
                            { source: './doc/for-fire-fox.md', destination: './firefox/doc/for-fire-fox.md' },
                            ...copyMapper
                        ],
                        archive: [
                            { source: './firefox', destination: sourceCodeForFireFox },
                        ],
                        delete: ['./firefox']
                    }
                ]
            }
        })
    )
} else if (isDev) {
    const firefoxDevDir = './firefox_dev'
    // Generate FireFox dev files
    plugins.push(new FileManagerWebpackPlugin({
        events: {
            onEnd: [
                {
                    copy: [
                        { source: './dist_dev', destination: firefoxDevDir }
                    ],
                    delete: [`./dist_dev/${manifestFirefoxName}`, `${firefoxDevDir}/manifest.json`],
                    move: [
                        { source: `${firefoxDevDir}/${manifestFirefoxName}`, destination: `${firefoxDevDir}/manifest.json` }
                    ]
                }
            ]
        }
    }))
}

const options = {
    entry: {
        ...entry,
        'popup': './src/view/popup/index.js',
        'guide': './src/view/guide/index.js'
    },
    output: {
        path: path.join(__dirname, { 'production': 'chrome_dir', 'development': 'dist_dev' }[env] || 'dist_dev'),
        filename: '[name].js',
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                use: ['ts-loader', {
                    loader: 'ui-component-loader',
                    options: {
                        'element-ui': {
                            'camel2': '-'
                        }
                    }
                }]

            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                // exclude: /node_modules/,
                use: ['url-loader?limit=100000']
            }, {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: ['vue-loader']
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use:
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [
                                'component', {
                                    "libraryName": "element-ui",
                                    "styleLibraryName": "theme-chalk"
                                },
                                "element-ui"
                            ]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", '.ts', ".js", '.vue', 'css'],
    }
}

if (isDev) {
    // no eval with development, but generate *.map.js
    options.devtool = 'cheap-module-source-map'
}

module.exports = options