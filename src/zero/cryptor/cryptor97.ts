import PcmoeCryptor from "./pcmoe-cryptor";

/**
 * 兽音译者
 * 
 * @since 1.6.0
 */
export default class Cryptor97 extends PcmoeCryptor {
  prefix(): string {
    return "~呜嗷"
  }
  mode(): string {
    return "Roar"
  }
  version(): number {
    return 97
  }
}