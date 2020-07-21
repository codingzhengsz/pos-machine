# Requirement
A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
   {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      price: 3
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      price: 3
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      price: 5
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      price: 15
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      price: 2
    },
    {
      barcode: 'ITEM000005',
      name: 'Instant Noodles',
      price: 4
    }
]
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.

# Task decomposition
1. 计算每一项的数量
  - Input：barcodes:[string]

  - Output：cartItem:[{barcode: string, quantity: int}]

    |      | 计算每一项的数量                                          |
    | ---- | --------------------------------------------------------- |
    | P    | 5min                                                      |
    | D    | 8min                                                      |
    | C    | 对于JavaScript的Map相关接口和操作不了解                   |
    | A    | 阅读MDN关于JavaScript相关的接口，并做好笔记。方便以后查阅 |


2. 补充每一项的数据
  - Input：cartItem:[{barcode: string, quantity: int}]

  - Output：cartItemDetails:[{barcode: string, itemName:string, quantity: int, price: int}]

    |      | 补充每一项的数据                                             |
    | ---- | ------------------------------------------------------------ |
    | P    | 5min                                                         |
    | D    | 3min                                                         |
    | C    | 在这个模块方面使用两个for循环去比较barcode会比较简单，但是会耗费太多运行时间 |
    | A    | 可以进行优化，借助map的特性，用空间去换取时间                |

3. 计算每一项的总价
  - Input：cartItemDetails:[{barcode: string, itemName:string, quantity: int, price: int}]

  - Output: cartItemDetailsWithTotalPrice:[{barcode: string, itemName:string, quantity: int, price: int, totalPrice: int}]

    |      | 计算每一项的总价                                             |
    | ---- | ------------------------------------------------------------ |
    | P    | 5min                                                         |
    | D    | 2min                                                         |
    | C    | 有了前面编程基础的铺垫，写这个模块的代码会快很多             |
    | A    | 需要去学习更多的JavaScript语法，这样编写的代码会有更高的质量，编码耗费的时间也会更少 |

4. 计算所有项的总价
  - Input：cartItemDetailsWithTotalPrice:[{barcode: string, itemName:string, quantity: int, price: int, totalPrice: int}]

  - Output: totalPrice: int

    |      | 计算所有项的总价                                             |
    | ---- | ------------------------------------------------------------ |
    | P    | 3min                                                         |
    | D    | 3min                                                         |
    | C    | 有了明确的输入和输出定义之后，编写代码的就很有逻辑           |
    | A    | 在变量的命名方面还是存在薄弱点，可以向同学请教他们的命名方法 |
5. 生成收据
  - Input：cartItemDetailsWithTotalPrice:[{barcode: string, itemName:string, quantity: int, price: int, totalPrice: int}], totalPrice: int

  - Output: receipt: string

    |      | 生成收据                                                     |
    | ---- | ------------------------------------------------------------ |
    | P    | 5min                                                         |
    | D    | 10min                                                        |
    | C    | 对于生成收据，要去验证跑单元测试需要调整某些细微的点，比如字符的问题，空格的问题 |
    | A    | 编写代码还是应该要小心，尽量避免写太快导致花更多的时间在检查字符问题 |

    

# ContextMap

