# Calculator.js 
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

- A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)

- Work in the `index.js` file

#### Create a `Calculator` Class with

- Properties \
 PI = 3.141592653589793\
 E = 2.718281828459045

- Getters
```js
calculate.pi // Returns: 'PI (3.141592653589793)'

calculate.e // Returns: 'Euler's number (2.718281828459045)'
``` 
- Read more on: [Euler's Number](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Euler's%20number%20is%20an%20important,repeats%20(similar%20to%20pi).)

- Methods
```js
calculate.ratio(x,y,width)  //return: 'height is --- on ratio x:y'

calculate.percentage(x,y) // return the percentage of x in y.

calculate.add(x, y) // Returns the sum of x added to y.

calculate.subtract(x, y) // Returns the difference of x subtracted from y.

calculate.multiply(x, y) // Returns the product of x multiplied by y.

calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.elevate(x, y) // Returns the power of x elevated to y.

calculate.sqrt(x) // Returns the square root of x.
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Calculator Class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Calculator` Class should be defined |

### PI property

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | The property `PI` must be defined with the value `3.141592653589793` |

### E Propertx

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | The property `E` must be defined with the value `2.718281828459045` |

### Getter `pi`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `pi` must be defined as a getter that returns the string `PI (3.141592653589793)` |

### Getter `e`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `e` must be defined as a getter that returns the string `Euler's number (2.718281828459045)′ |

### `ratio` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `ratio` method must be defined, it takes 3 parameters (x,y and width) and returns this string with the calculated height filling the space: 'height is --- on ratio x:y'  |

### `percentage` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `percentage` method must be defined, it takes 2 parameters (x and y) and returns the percentage of x in y written as a string with the sign % |

### `add` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | the method 'add' must be defined, it takes 2 parameters (x and y) and returns the sum of them as a number |

### `subtract` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `subtract` method must be defined, it takes 2 parameters (x and y) and returns the difference between them as a number (expected: y - x) |

### `multiply` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `multiply` method must be defined, it takes 2 parameters (x and y) and returns the multiplication of them as a number |

### `divide` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `divide` method must be defined, it takes 2 parameters (x and y) and returns the division of them as a number |

### `modulation` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `modulation` method must be defined, it takes 2 parameters (x and y) and returns the remainder of x divided by y as a number |

### `elevate` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | `elevate` method must be defined, it takes 2 parameters (x and y) and returns the power of x elevated to y as a number |

### `sqrt` method

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `sqrt` method must be defined, it takes 1 parameter (x) and returns the square root of x |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Calculator)


[//]: # (autograding info end)