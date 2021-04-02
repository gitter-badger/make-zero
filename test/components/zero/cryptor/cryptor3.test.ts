import { DEFAULT_PASSWORD } from "../../../../src/zero/cryptor-config"
import Cryptor3 from "../../../../src/zero/cryptor/cryptor3"

const cryptor = new Cryptor3()

function randomStr() {
  let str = ""
  for (let length = 16; length; length--) {
    str += String.fromCharCode(Math.random() * 2 ^ 16)
  }
  return str
}

test('test-cryptor3', done => {
  const str = randomStr()
  cryptor.encrypt(str, DEFAULT_PASSWORD, cipher => {
    cryptor.decrypt(cipher, DEFAULT_PASSWORD, plain => {
      expect(str).toEqual(plain)
      done()
    })
  })
})