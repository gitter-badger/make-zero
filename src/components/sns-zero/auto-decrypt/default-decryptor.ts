/*
 * @Author: your name
 * @Date: 2020-12-28 22:25:33
 * @LastEditTime: 2020-12-30 19:07:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /search-gater/src/components/sns-zero/auto-decrypt/default-decryptor.ts
 */
import { AutoDecryptor } from ".";
import Cryptor from "../cryptor";
import $ = require('jquery')

export default class DefaultDecryptor implements AutoDecryptor {
  private cryptor: Cryptor = new Cryptor()

  support(host: string): boolean {
    return true
  }
  handle(): void {
    const _cryptor = this.cryptor
    this.decript($("p"))
    this.decript($("pre"))
    this.decript($('span'))
  }

  private decript(selector: JQuery) {
    const _cryptor = this.cryptor
    selector.filter((index, p) => _cryptor.support(p.innerText))
      .each((index, p) => { p.innerText = _cryptor.decrypt(p.innerText) })
  }

}