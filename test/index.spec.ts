import { expect } from 'chai'
import Abbreviate from '../lib'

describe('test data structure', () => {
  it('should validate payload', () => {
    const number = 'a12'
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.valid()).false
  })

  it('should save raw number', () => {
    const number = 65536
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.raw).to.equal(number)
  })

  it('should save raw string as raw number', () => {
    const number = '65536'
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.raw).to.equal(number)
  })
})

describe('test convertion', () => {
  it('should do nothing to numbers smaller than 1000', () => {
    const number = 999
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.num).to.equal(number)
  })

  it('should convert thousands', () => {
    const number = 1024
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.num).to.equal(1)
  })

  it('should convert millions', () => {
    const number = 4200000
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.num).to.equal(4)
  })

  it('should get correct unit', () => {
    let number = 1024
    let abbreviated = new Abbreviate(number)
    expect(abbreviated.unit).to.equal('k')
    number = 4200000
    abbreviated = new Abbreviate(number)
    expect(abbreviated.unit).to.equal('m')
  })

  it('should convert decimal', () => {
    const number = 3141.52
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.unit).to.equal('k')
    expect(abbreviated.num).to.equal(1)
    expect(abbreviated.raw).to.equal(abbreviated)
  })

  it('should convert negative numbers', () => {
    const number = -90000
    const abbreviated = new Abbreviate(number)
    expect(abbreviated.num).to.equal(-90)
    expect(abbreviated.unit).to.equal('k')
  })
})
