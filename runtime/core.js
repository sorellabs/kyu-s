// -- Core runtime --
function $POUND(a) { return a.length }
function $CIRCUMFLEX(a, b) { return Math.pow(a, b) }
function $TIMES(a, b) { return a * b }
function $PLUS(a, b) { return a + b }
function $SLASH(a, b) { return a / b }
function $MINUS(a, b) { return a - b }
function $EQUAL(a, b) { return a === b }
function $TILDE$EQUAL(a, b) { return a == b }
function $LT(a, b) { return a < b }
function $LT$EQUAL(a, b) { return a <= b }
function $GT(a, b) { return a > b }
function $GT$EQUAL(a, b) { return a >= b }
function not(a) { return !a }
function or(a, b) { return a || b }
function and(a, b) { return a && b }
// -- End of runtime --