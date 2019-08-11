type Payload = string | number

interface Config {
  symbols: string[]
  step: number
}

export default class Scale {
  raw: Payload
  symbols: string[] = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  step: number = 1000
  num: number = 0
  symbol: string = ''

  constructor(payload: Payload, config?: Config) {
    const { symbol, num } = this.convert(payload)
    this.raw = payload
    this.symbol = symbol
    this.num = num
    if (config) {
      this.symbols = config.symbols
      this.step = config.step
    }
  }

  convert(payload: Payload) {
    let num = typeof payload === 'string' ? Number(payload) : payload
    let idx = 0
    while (idx < this.symbols.length - 1 && Math.abs(num) >= this.step) {
      num = Math.round(num / this.step)
      idx += 1
    }
    return {
      num,
      symbol: this.symbols[idx]
    }
  }

  invalid() {
    return isNaN(Number(this.raw))
  }

  valid() {
    return !this.invalid()
  }

  output() {
    return this.valid() ? `${this.num}${this.symbol}` : undefined
  }
}
