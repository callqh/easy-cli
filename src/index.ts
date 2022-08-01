import sade from 'sade'
import pkg from '../package.json'

const prog = sade('my-cli')

prog.version(pkg.version)
  .option('--global, -g', 'An example global flag')
  .option('-c, --config', 'Provide path to custom config', 'foo.config.js')

prog.parse(process.argv)
