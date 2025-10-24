import { Args, Command } from '@oclif/core'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

export default class Alias extends Command {
  static args = {
    alias: Args.string({ description: 'Alias for the command', required: true }),
    cmd: Args.string({ description: 'Command to alias', required: true }),
  }
  static description = 'Create an alias for a command'
  static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  async run(): Promise<void> {
    const { args } = await this.parse(Alias)
    const { alias, cmd } = args

    writeAliasToFile(alias, cmd)

    this.log(`Created alias ${alias} for command ${cmd}! (./src/commands/alias/index.ts)`)
  }
}

function writeAliasToFile(alias: string, cmd: string): void {
  const homeDirectory = os.homedir()
  const filePath = path.join(homeDirectory, '.aliases')
  const aliasFile = fs.appendFileSync(filePath, `alias ${alias}="${cmd}"\n`, {
    encoding: 'utf8',
    flag: 'a+',
  })

  console.log(aliasFile)
}    