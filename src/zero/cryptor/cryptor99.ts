import PcmoeCryptor from "./pcmoe-cryptor";

/**
 * 与熊论道
 * 
 * @since 1.6.0
 */
export default class Cryptor99 extends PcmoeCryptor {
  prefix(): string {
    return "熊曰："
  }
  mode(): string {
    return "Bear"
  }
  version(): number {
    return 99
  }
}