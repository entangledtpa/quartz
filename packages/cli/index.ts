#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { SetupArgv, setupQuartz } from './cmd/new'
import { BuildArgv, buildQuartz } from './cmd/build'
import { PreviewArgv, previewQuartz } from './cmd/preview'
import { version } from './package.json'

yargs(hideBin(process.argv))
  .scriptName("quartz")
  .version(version)
  .usage('$0 <cmd> [args]')
  .command('new', 'Setup a new Quartz', SetupArgv, setupQuartz)
  .command('build', 'Build Quartz into a bundle of static HTML files', BuildArgv, buildQuartz)
  .command('preview', 'Preview current Quartz locally', PreviewArgv, previewQuartz)
  .showHelpOnFail(false)
  .help()
  .strict()
  .demandCommand()
  .argv