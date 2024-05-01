### Question 1

- Line 9 logs `values added: 20`. add is `true` and `num1` and `num2` are added to be stored in `result`. Since `result` was declared with `var` it's scope is the entire function, allowing us to access anywhere access its declaration in the function. Thus, the `result` holds `20` and is logged.

### Question 2

- Line 13 logs `final result: 20`. Since add is `true`, the else doesn't return and skip line 13. Since `result` was declared with `var` it's scope is the entire function, allowing us to access anywhere access its declaration in the function. The log is still within the function so line 13 can access it. It prints out the result, which is `20` as 10 + 10 = 20.

### Question 3

- Line 9 logs `values added: 20`. Since add is `true` so we go into the if condition's body. `result` is bound to the if condition's body as it is declared with `let`. Then, `num1` and `num2` are added to be stored in `result`, `result` holds `20`. The `console.log` call is within the if condition's body so it can access `result`.

### Question 4

- The code causes an error. Since the `console.log` call is not within the if condition's body, it cannot access `result` because it was initialized with the `let` keyword. Only those within the if condition's body can access `result`. Thus, to line 13, there is no such variable named `result`.

### Question 5

- The code causes an error. Since `result` is now a const, it cannot be reassigned. On line 7, we attempt to reassign `result` with the sum of `num1` and `num2`. Thus, this will return an error.

### Question 6

- The code causes an error. Since `result` is now a const, it cannot be reassigned. On line 7, we attempt to reassign `result` with the sum of `num1` and `num2`. Thus, this will return an error. In addition, `result` is scoped by the if condition's body, which the line 13 is not within, meaning it can't access `result` too.
