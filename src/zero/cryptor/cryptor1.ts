import { ICryptor } from '.'
import { password2Number, ring } from './algorithm/string-process'

/**
 * The first cryptor
 * 
 * @since 1.0.0
 */
export default class Cryptor1 implements ICryptor {
  support(cipher: string): boolean {
    return cipher.startsWith(this.prefix())
  }

  /**
   * The prefix of cipher
   */
  prefix() {
    return 'z01'
  }

  version(): number {
    return 1
  }

  encrypt(plain: string, password: string, callback: (cipher: string) => void): void {
    callback(this.ring(plain, password))
  }

  decrypt(cipher: string, password: string, callback: (plain: string) => void): void {
    callback(this.ring(cipher, password))
  }

  private ring(msg: string, psw: string): string {
    const pn = password2Number(psw)
    return ring(pn, msg)
  }
}