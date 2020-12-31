const copy0 = require('clipboard-copy')
export default function copy (txt, vueContext) {
  copy0(txt).then(r => {
    vueContext.$notify({
      message: vueContext.$t('button.copied'),
      duration: 1000,
      type: 'success'
    })
  }).catch(e => {
    console.log(e)
  })
}