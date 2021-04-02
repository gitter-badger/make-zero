import { ajax } from 'jquery'
import { ICryptor } from '.'

const DEFAULT_TOKEN: string = 'D398E4D76D4E'

const originOpen = XMLHttpRequest.prototype.open

var corsApiHost = 'cors-anywhere.herokuapp.com'
var corsApiUrl = 'https://' + corsApiHost + '/'

// function newOpen() {
//   var args = [].splice.call(arguments)
//   var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1])
//   if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//     targetOrigin[1] !== corsApiHost) {
//     args[1] = corsApiUrl + args[1]
//   }
//   return originOpen.apply(this, args)
// }


// if (originOpen !== newOpen) {
//   XMLHttpRequest.prototype.open = newOpen
// }


/**
 * 
 * The cryptor which call apis on http://hi.pcmoe.net
 * 
 * The version is 97-99, and only open to Chinese users
 * 
 * Format:
 *  熊曰：/新佛曰：/... + cipher
 * 
 * @see http://hi.pcmoe.net/
 * @since 1.6.0
 */
export default abstract class PcmoeCryptor implements ICryptor {
  /**
   * The prefix of ciphertexts
   */
  abstract prefix(): string

  /**
   * One property of api request parameters
   */
  abstract mode(): string

  support(cipher: string): boolean {
    return cipher.startsWith(this.prefix())
  }

  abstract version(): number

  /**
   * Get the token for api from the password
   * This is a backdoor feature
   * 
   * The format is pcmoe+len(Token)+Token
   * 
   * e.g.
   *  pcmoe03EDF => EDF
   *  pcmoe12ED09293810A => null 
   * 
   * @param password 
   * @returns TOKEN, or null if not match the format
   */
  getTokenFromPassword(password: string): string {
    if (/^pcmoe[0-9]{2}[0-9A-Z]+$/.test(password)) {
      const length = parseInt(password.substr(5, 2))
      if (length + 5 + 2 === password.length) {
        return password.substring(7)
      }
    }
    return null
  }

  private getToken(password: string) {
    return this.getTokenFromPassword(password) || DEFAULT_TOKEN
  }

  encrypt(plain: string, password: string, callback: (cipher: string) => void): void {
    this.request(plain, this.getToken(password), true, callback)
  }

  decrypt(cipher: string, password: string, callback: (cipher: string) => void): void {
    this.request(cipher, this.getToken(password), true, callback)
  }

  request(inputText: string, token: string, enOrDe: boolean, callback: (text: string) => void) {
    var settings = {
      url: 'https://api.allorigins.win/post?url=https://hi.pcmoe.net/bear.php',
      method: 'get',
      timeout: 0,
      headers: {
        Accept: '*/*',
        // 'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-AU,en-CAq=0.9,en-USq=0.8,enq=0.7,zh-CNq=0.6,zhq=0.5',
        // Connection: 'keep-alive',
        // 'Content-Length': '31',
        'Content-type': 'application/x-www-form-urlencoded',
        // Host: 'hi.pcmoe.net',
        // Origin: 'http://hi.pcmoe.net',
        // Referer: 'http://hi.pcmoe.net/index.html',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Token': `token`
      },
      data: {
        mode: this.mode(),
        Code: enOrDe ? 'Encode' : 'Decode',
        txt: inputText
      }
    }

    ajax(settings).done((response) => {
      console.log(response)
      callback(response)
    })
  }
}