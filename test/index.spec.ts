import { expect } from 'chai'
import { convert } from '../lib/unit'

describe('test convertion', () => {
  it('should do nothing to numbers smaller than 1000', () => {
    const number = 999
    const abbreviated = convert(number)
    expect(abbreviated.num).to.equal(number)
  })

  it('should convert "thousand"', () => {
    const number = 1024
    const abbreviated = convert(number)
    expect(abbreviated.num).to.equal(1)
  })

  it('should convert "million"', () => {
    const number = 4200000
    const abbreviated = convert(number)
    expect(abbreviated.num).to.equal(4)
  })

  it('should get correct unit', () => {
    const number = 1024
    const abbreviated = convert(number)
    expect(abbreviated.unit).to.equal('k')
    const number = 4200000
    const abbreviated = convert(number)
    expect(abbreviated.unit).to.equal('m')
  })
})
