import { Command } from '@oclif/core'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'


export default class List extends Command {
  static args = {}
  static description = 'List all aliases'
  static examples = [
    `<%= config.bin %> <%= command.id %>
List of aliases:
`,
  ]
  static flags = {}

  async run(): Promise<void> {
    const homeDirectory = os.homedir()
    const filePath = path.join(homeDirectory, '.aliases')
    const aliases = fs.readFileSync(filePath, 'utf8')

    this.log(aliases)
  }
}
