import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import * as fs from 'fs'

async function run(): Promise<void> {
  try {
    const path = await tc.downloadTool(
      'https://github.com/fwilhe2/studious-guacamole/releases/download/2020-09-18T19-23-39UTC/app-linux.kexe'
    )
    fs.chmodSync(path, 0o775)
    core.addPath(path)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
