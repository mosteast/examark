export const RE_input_call = /@input\((?:([a-zA-Z][a-zA-Z0-9]*)(?:, )?)?(?:\[([^\)\]]*)\])?\)/g

export function parse_input(source: string): T_input_token[] {
  let match = RE_input_call.exec(source)
  const matches: RegExpExecArray[] = []
  while (match) {
    matches.push(match)
    match = RE_input_call.exec(source)
  }

  return matches.map((it, i) => {
    return {
      input: it[0],
      index: i,
      char_index: it.index,
      name: it[1],
      validators: it[2]?.split(',').map(v => v.trim()).filter(it => !! it),
    }
  })
}

export interface T_input_token {
  input: string // Input match
  index: number // Input index (order) in source
  char_index: number // Character index in source
  name?: string // Input name argument
  validators?: string[] // validator list
}
