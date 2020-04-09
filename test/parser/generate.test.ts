import { dir_root } from '@mosteast/e/root'
import { resolve } from 'path'
import { generate_file } from '../../src/parser/generate_file'

it('generate_file', async () => {
  const op = resolve(__dirname, './test_file/genereate_file.js')
  await generate_file(resolve(__dirname, './test_file/genereate_file.pegjs'), op)
  const parser = require(op)
  const r = parser.parse('1 + 1')
  expect(r).toBe(2)
})
