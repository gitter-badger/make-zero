import PcmoeCryptor from "../../../../src/zero/cryptor/pcmoe-cryptor"

class NoImplementionCryptor extends PcmoeCryptor {
  mode(): string {
    throw new Error("Method not implemented.")
  }
  prefix(): string {
    throw new Error("Method not implemented.")
  }
  version(): number {
    throw new Error("Method not implemented.")
  }
}

test('test-pcmoe-backdoor-token', () => {
  const cryptor = new NoImplementionCryptor()
  expect(cryptor.getTokenFromPassword('')).toBeNull()
  expect(cryptor.getTokenFromPassword('pcmoe01D')).toEqual('D')
})