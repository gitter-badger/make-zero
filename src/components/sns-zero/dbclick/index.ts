import IDomCompleteHandler from "../../../chrome/interface/i-dom-complete-hanler";
import DefaultDecryptor from "./default-decryptor";
import WeiboDecryptor from './weibo-decryptor'

/**
 * Show the float button while the user moves its mouse on <p> tags within ciphertexts
 * @author zhy
 */
export default class DomDecryptorComposite implements IDomCompleteHandler {
  private host: string
  private composites: DomDecryptor[]

  public constructor() {
    this.composites = []

    this.composites.push(new WeiboDecryptor())
    this.composites.push(new DefaultDecryptor())
  }

  support(host: string, href: string): boolean {
    this.host = host
    return host !== "wx2.qq.com"
  }

  handle(): void {
    for (const decryptor of this.composites) {
      if (decryptor.support(this.host)) {
        decryptor.handle()
        return
      }
    }
  }
}

export interface DomDecryptor {
  support(host: string): boolean
  handle(): void
}