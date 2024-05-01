### Question 1

- Line 12 will log `3`. Since `i` was declared using the `var` keyword, the variable has function scope so it can be accessed anywhere within the function. The for loop terminates when `i >= prices.length`. Since `i` increments one by one, the for loop terminates when `i` is equal to `prices.length`. In this case, `prices` is a array of 3 integers. Thus, line 12 logs `3`.

### Question 2

- Line 13 will log `150`. Since `discountedPrice` was declared using the `var` keyword, the variable has function scope so it can be accessed anywhere within the function. So although it is declared in the for loop, the `var` keyword allows us to access it after the loop. We assign `discountedPrice` with the discounted price. Since the last element is `300` and the `discount` is `0.5`, `discountedPrice = 300 * (1 - 0.5)`, which is `150`. Thus, line 13 logs `150`.

### Question 3

- Line 14 will log `150`. Since `finalPrice` was declared using the `var` keyword, the variable has function scope so it can be accessed anywhere within the function. We assign `finalPrice` with the rounded discounted price. Since the `discountedPrice` for the last element is `150`, `Math.round(150 * 100) / 100` is `150`. Thus, line 14 logs `150`.

### Question 4

- The function will return an array with discounted prices according to the input, which will be `[50, 100, 150]` The function goes through each price in `prices` argument and calculates the discount based on the `discount` argument. Then, it pushes this discounted price to `discounted` array, which is has access to since it was declared with `var`. At the end, this array is returned. The `discount` here is 0.5 so the discount for each will be half of each price. Thus, the function will return `[50, 100, 150]`.

### Question 5

- The code causes an error. Since `i` is declared with the `let` keyword on line 6, it is scoped to the for loop it was defined in. Thus, since the `console.log` call is not within this block, it cannot access `i` and errors.

### Question 6

- The code causes an error. Since `discountedPrice` is declared with the `let` keyword on line 7, it is scoped to the for loop it was defined in. Thus, since the `console.log` call is not within this block, it cannot access `discountedPrice` and errors.

### Question 7

- Line 14 will log `150`. Since `finalPrice` was declared using the `let` keyword, the variable is scoped to the block it was defined in. Since it's defined in the function and not within any further block, it is scoped to the function. We assign `finalPrice` with the rounded discounted price. Since the `discountedPrice` for the last element is `150`, `Math.round(150 * 100) / 100` is `150`. Thus, line 14 logs `150`.

### Question 8

- The function will return an array with discounted prices according to the input, which will be `[50, 100, 150]` The `discounted` array is declared using the `let` keyword so it's scoped to the block it was defined in. Since it's defined in the function and not within any further block, it is scoped to the function. Thus, everything in the function can access it. The function goes through each price in `prices` argument and calculates the discount based on the `discount` argument. Then, it pushes this discounted price to `discounted` array. At the end, this array is returned. The `discount` here is 0.5 so the discount for each will be half of each price. Thus, the function will return `[50, 100, 150]`.

### Question 9

- The code causes an error. Since `i` is declared with the `let` keyword on line 6, it is scoped to the for loop it was defined in. Thus, since the `console.log` call is not within this block, it cannot access `i` and errors.

### Question 10

- Line 12 will log `3`. Since `length` is declared with the `const` keyword, it is scoped to the block it was defined in. Since it's defined in the function and not within any further block, it is scoped to the function. Therefore, everything int he function can access it. Since `length` is declared and never reassigned, it follows the requirements of `const`. Thus, it will hold the length of the `prices` array, which is `3`. Thus, it logs `3`.

### Question 11

- The function will return an array with discounted prices according to the input, which will be `[50, 100, 150]` The `discounted` array is declared using the `const` keyword so it's scoped to the block it was defined in. Since it's defined in the function and not within any further block, it is scoped to the function. Thus, everything in the function can access it. The function goes through each price in `prices` argument and calculates the discount based on the `discount` argument. Then, it pushes this discounted price to `discounted` array. Although we are adding things to the `discounted` array, `discounted` isn't being reassigned as we are changing the array it holds instead. The `const` keyword only dictates a constant reference. At the end, this array is returned. The `discount` here is 0.5 so the discount for each will be half of each price. Thus, the function will return `[50, 100, 150]`.

### Question 12

A. `student.name`

B. `student['Grad Year']`

C. `student.greeting()`

D. `student['Favorite Teacher'].name`

E. `student.courseLoad[0]`

### Question 13

A. `"32"`. We get this output because integers map to their string representations. So the integer 2 became `"2"`, allowing for string concatenation.

B. `1`. We get a integer output representing the difference between 3 and 2. This is because strings also map to their integer, converting the `"3"` into the integer 3.

C. `3`. We get the integer 3. `null` maps to `0` so `3 + 0 = 3`.

D. `"3null"`. We get a string output. A string plus `null` concatenates the string with `"null"`.

E. `4`. We get the integer 4. `true` maps to `1` so `3 + 1 = 4`.

F. `0`. We get the integer 0. `false` and `null` map to `0` so `0 + 0 = 0`.

G. `"3undefined"`. We get a string output. A string plus `undefined` concatenates the string with `"undefined"`.

H. `NaN`. We get a Not-A-Number output. We cannot subtract a string with undefined so we get this Not-A-Number output instead.

### Question 14

A. `true`. We get this output because strings map to their integer representations. Since `1` is a string, `"2"` is converted to `2`. So 2 > 1..

B. `false`. Both are string so they are compared by Unicode. Since `"12"` starts with a `"1"`, it is compared with the `"2"` first. `"1"` is smaller than `"2"` so this is `false`

C. `true`. `==` is for loose equality, which compares the values after type coersion. So, the string `'2'` becomes the integer `2` since strings map to their int representations. `2` equal `2` so this is `true`.

D. `false`. `===` is for strict equality, so it doesn't perform any type coersion. Since we are comparing integer and string, they are not equal even if they are both 2.

E. `false`. `==` is for loose equality, which compares the values after type coersion. So, the boolean `true` becomes the integer `1` since `true` maps to `1`. `1` is not equal to `2` so this outputs `false`.

F. `true`. `===` is for strict equality, so it doesn't perform any type coersion. However, we convert the integer `2` to a boolean. Since any non-zero integer becomes `true` when converted to a boolean, `Boolean(2)` becomes `true`. Thus, `true === true` is `true`.

### Question 15

- `==` is for loose equality, which compares the values after type coersion. As seen in the previous question, it can compare different types and still get true if the different types map to the same things. For example, `"2" == 2` is `true` because the integer `2` becomes its string representation `"2"`, making them equal. On the other hand, `===` is for strict equality, so it doesn't perform any type coersion. Different types will always not be equal even if they have the same mappings after converting to the same type. So `"2" === 2` will be `false` as we compare a string and an integer.

### Question 16
- In file `part2-question16.js`.

### Question 17

- The result is `[2,4,6]`. The `modifyArray` function takes in two arguments: an array `[1,2,3]` and a callback function `doSomething`. `doSomething` takes in a number and returns the number multiplied by 2. In `modifyArray` it creates `newArr` and goes through the input array `[1,2,3]`. For each element, the element is passed into the callback function and the result is pushed into the `newArr`. Since the callback function returns twice the number, each element is doubled and pushed into the `newArr`. At the end, `newArr` is returned. For this reason, each element should have doubled and pushed into the `newArr`, resulting in `[2,4,6]`.

### Question 18
- In file `part2-question18.js`

### Question 19

- The output is:
  
  `1`
  
  `4`
  
  `3`
  
  `2`

  `1` is printed first. Then, the `setTimout` function for logging `2` is asynchronous and delayed for 1000 milliseconds. The `setTimeout` function for logging `3` is also asynchronous even if it's delayed 0 milliseconds. `4` is then logged since it is synchronous. It then goes in order through the asynchronous functions, logging `3` first then `2` due to their delays.