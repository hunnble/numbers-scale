import { test, runIfMain } from "https://deno.land/std/testing/mod.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Scale } from "https://unpkg.com/numbers-scale@0.1.3/lib/index.ts"

test(function testScale() {
  const number = 1000000000
  const scale = new Scale(number)

  assertEquals(scale.output(), '1G')
  assertEquals(scale.raw, 1000000000)
  assertEquals(scale.num, 1)
  assertEquals(scale.symbol, 'G')
  assertEquals(scale.valid(), true)
  scale.num
  scale.symbol
  scale.valid()
})

runIfMain(import.meta)
