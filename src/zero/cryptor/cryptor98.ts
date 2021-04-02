import PcmoeCryptor from "./pcmoe-cryptor";

/**
 * 新约佛论禅
 * 
 * @since 1.6.0
 */
export default class Cryptor98 extends PcmoeCryptor {
  prefix(): string {
    return "新佛曰："
  }
  mode(): string {
    return "Buddha"
  }
  version(): number {
    return 98
  }
}