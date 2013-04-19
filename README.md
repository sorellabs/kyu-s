# Kyu-S

IT HAD TO BE DONE!!1


## Example

```lisp
(let fib { |n|
           (cond
             { (= 0 n) } { 0 }
             { (= 1 n) } { 1 }
             { (> 1 n) } { (+ (fib (- n 1)) (fib (- n 2))) })})

(fib 42)
```


## Installing

    $ npm install -g kyu-s


## Le Compiler

    $ kyu-s foo.kyu  # executes foo
    $ kyu-s -c foo.kyu > foo.js  # compiles foo


## Licence

WTFPL. IOW: you just do what the fuck you want to.
