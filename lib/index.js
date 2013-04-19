/// Module kyu-s
//
// IT HAD TO BE DONE!!1

var ometa    = require('ometa-js')
var parser   = require('./grammar')
var compiler = require('./compiler')

function parse(s) {
  return parser.matchAll(s, 'program') }

function compileAST(ast) {
  return compiler.match(ast, 'cc') }

function compile(s) {
  return compileAST(parse(s)) }



//// -- Exports --------------------------------------------------------
module.exports = {
  compile    : compile,
  compileAST : compileAST,
  parse      : parse
}