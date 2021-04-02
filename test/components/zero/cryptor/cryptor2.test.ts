import { DEFAULT_PASSWORD } from "../../../../src/zero/cryptor-config"
import Cryptor2 from "../../../../src/zero/cryptor/cryptor2"

const cryptor = new Cryptor2()

test('test-cryptor2', done => {
  cryptor.decrypt('傀Yt}}~1F~c}u1100000', DEFAULT_PASSWORD, plain => {
    expect(plain).toEqual('Hello World  !!!!!')
    done()
  })
})