import { expect } from 'chai'
import Scale from '../lib'

describe('test data structure', () => {
  it('should validate payload', () => {
    const number = 'a12'
    const scale = new Scale(number)
    expect(scale.valid()).to.be.false
  })

  it('should save raw number', () => {
    const number = 65536
    const scale = new Scale(number)
    expect(scale.raw).to.equal(number)
  })

  it('should save raw string as raw number', () => {
    const number = '65536'
    const scale = new Scale(number)
    expect(scale.raw).to.equal(number)
  })
})

describe('test convertion', () => {
  it('should do nothing to numbers smaller than 1000', () => {
    const number = 999
    const scale = new Scale(number)
    expect(scale.num).to.equal(number)
  })

  it('should convert thousands', () => {
    const number = 1024
    const scale = new Scale(number)
    expect(scale.num).to.equal(1)
  })

  it('should convert millions', () => {
    const number = 4200000
    const scale = new Scale(number)
    expect(scale.num).to.equal(4)
  })

  it('should get correct symbol', () => {
    let number = 1024
    let scale = new Scale(number)
    expect(scale.symbol).to.equal('k')
    number = 4200000
    scale = new Scale(number)
    expect(scale.symbol).to.equal('M')
  })

  it('should convert decimal', () => {
    const number = 3141.52
    const scale = new Scale(number)
    expect(scale.symbol).to.equal('k')
    expect(scale.num).to.equal(3)
    expect(scale.raw).to.equal(number)
  })

  it('should convert negative numbers', () => {
    const number = -90000
    const scale = new Scale(number)
    expect(scale.num).to.equal(-90)
    expect(scale.symbol).to.equal('k')
  })

  it('should convert huge numbers', () => {
    const number = 9000000000000
    const scale = new Scale(number)
    expect(scale.num).to.equal(9)
    expect(scale.symbol).to.equal('T')
  })

  it('should convert zero', () => {
    const number = 0
    const scale = new Scale(number)
    expect(scale.num).to.equal(0)
    expect(scale.symbol).to.equal('')
  })
})

describe('test output', () => {
  it('should return string format', () => {
    const number = 1024
    const scale = new Scale(number)
    expect(scale.output()).to.equal('1k')
  })

  it('should return undefined when raw number is invalid', () => {
    const number = '11a'
    const scale = new Scale(number)
    expect(scale.output()).to.be.undefined
  })
})
