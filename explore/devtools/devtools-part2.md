1. The bug was that the `num1` and `num2` variables were taking in strings instead of numbers. This caused the `calculateSum` to concatenate strings instead of adding numbers together.
2. I fixed it by converting the values from the elements from strings into numbers using the `Number` constructor.