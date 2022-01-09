import assert from 'assert'
import { add } from './index.js'

describe('add', () => {
  it('should 1 + 2 = 3 ', () => {
    assert.strictEqual(add(1,2), 3)
  })
})
