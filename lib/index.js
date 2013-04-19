/// Module kyu-s
//
// IT HAD TO BE DONE!!1

var fs       = require('fs')
var ometa    = require('ometa-js')
var parser   = require('./grammar')
var compiler = require('./compiler')

function read(n) {
  return fs.readFileSync(n, 'utf-8') }

function parse(s) {
  return parser.matchAll(s, 'program') }

function compileAST(ast) {
  return compiler.match(ast, 'cc') }

function compile(s) {
  return read(__dirname + '/../runtime/core.js') + ';\n' + compileAST(parse(s)) }



//// -- Exports --------------------------------------------------------
module.exports = {
  compile    : compile,
  compileAST : compileAST,
  parse      : parse
}