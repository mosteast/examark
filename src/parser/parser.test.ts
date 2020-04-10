import { parse_input } from './parser'

it('parser_input_call', async () => {
  const r = parse_input(`Yo
 yo
 @input(input1)
 @input(input2, [a, b, c])
 @input([c, d, e])
 @input([])
 yo___(a, b, c)yo`)

  expect(r).toHaveLength(4)
  expect(r[0].input).toBe('@input(input1)')
  expect(r[0].index).toBe(0)
  expect(r[0].name).toBe('input1')
  expect(r[0].validators).toBeFalsy()

  expect(r[1].input).toBe('@input(input2, [a, b, c])')
  expect(r[1].index).toBe(1)
  expect(r[1].name).toBe('input2')
  expect(r[1].validators).toStrictEqual([ 'a', 'b', 'c' ])

  expect(r[2].input).toBe('@input([c, d, e])')
  expect(r[2].index).toBe(2)
  expect(r[2].name).toBeFalsy()
  expect(r[2].validators).toStrictEqual([ 'c', 'd', 'e' ])

  expect(r[3].validators).toStrictEqual([])
})
