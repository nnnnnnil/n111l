# TypeScript

TypeScript是JavaScript的超集，添加了静态类型检查。

## 一、基本类型
| 类型          | 详细描述                              | 示例代码                                                                                                      |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `number`    | 涵盖整数、浮点数、NaN、Infinity 等所有数字形式     | `const age: number = 25;` `const pi: number = 3.14;`                                                      |
| `string`    | 字符串类型，支持单引号、双引号和模板字符串             | `const name: string = "TypeScript";` `const desc: string = `Hello \${name}\`\`                            |
| `boolean`   | 布尔类型，仅有`true`和`false`两个值          | `const isDone: boolean = false;` `const hasPermission: boolean = true;`                                   |
| `null`      | 表示空值的独立类型，需显式指定                   | `const empty: null = null;`                                                                               |
| `undefined` | 表示未定义的独立类型，变量未初始化时的默认值            | `const undef: undefined = undefined;`                                                                     |
| `void`      | 用于描述函数没有返回值的情况                    | `function log(): void { console.log("hello"); }`                                                          |
| `never`     | 表示永不存在的类型，如抛出异常的函数、无限循环函数的返回值类型   | `function error(): never { throw new Error("err"); }` `function infiniteLoop(): never { while(true) {} }` |
| `object`    | 非原始类型的统称，包括对象、数组、函数等              | `const obj: object = { name: "ts" };` `const func: object = () => {};`                                    |
| `array`     | 数组类型，需明确指定元素类型，有两种声明方式            | `const list: number[] = [1, 2, 3];` 或 `const list: Array<number> = [1, 2, 3];`                            |
| `tuple`     | 具有固定长度和元素类型的数组，长度和类型必须严格匹配        | `const tuple: [string, number] = ["age", 25];`                                                            |
| `enum`      | 命名常量的集合，值可以自动递增或手动赋值，便于代码的可读性和维护性 | `enum Status { Ok = 200, Error = 500 }` `console.log(Status.Ok) // 200`                                   |
| `any`       | 任意类型，关闭类型检查，可赋值给任意变量，也可从任意变量赋值 | `let anyVal: any = 10;` `anyVal = "hello";` `anyVal = true;`                                              |
| `unknown`   | 未知类型，与`any`相似，但更安全，不能直接赋值给其他变量，需要类型断言或类型守卫 | `let unknownVal: unknown = 10;` `unknownVal = "hello";` `unknownVal = true;`                             |
| `never`     | 表示永不存在的类型，如抛出异常的函数、无限循环函数的返回值类型   | `function error(): never { throw new Error("err"); }` `function infiniteLoop(): never { while(true) {} }` |
| `bigint`    | 大整数类型，用于表示超过`Number`类型安全范围的整数           | `const bigNum: bigint = 100n;`                                                                             |
| `symbol`    | 符号类型，用于创建唯一的标识符，通常用于对象的属性键          | `const sym: symbol = Symbol("sym");`                                                                       |    

## 二、高级类型
1. 联合类型\
   联合类型表示一个值可以是多种类型中的任意一种，使用 `|` 来分隔不同的类型。通过联合类型，能够灵活地处理变量可能出现的多种类型情况。
   ```ts
   let unionVal: string | number = "hello";
   unionVal = 100;
   ```
2. 交叉类型\
   交叉类型表示一个值同时满足多种类型的情况，使用 `&` 来分隔不同的类型。通过交叉类型，能够将多个类型合并为一个类型，实现更复杂的类型组合。
   ```ts
   interface A {
     a: number;
   }
   interface B {
     b: string;
   }
   type AB = A & B;
   const ab: AB = { a: 1, b: "hello" };
   ```
3. 类型断言\
   类型断言用于告诉编译器变量的实际类型，从而避免类型错误。类型断言有两种方式：尖括号语法和 `as` 关键字。
   ```ts
   let someVal: unknown = "hello";
   let strLen: number = (someVal as string).length;
   ```
4. 类型别名\
   类型别名用于给类型起一个新的名称，方便在代码中使用。类型别名可以是任意类型，包括基本类型、联合类型、交叉类型等。
   ```ts
   type MyNumber = number;
   let num: MyNumber = 100;
   ```
5. 接口\
   接口用于定义对象的形状，包括属性和方法。接口可以用于描述函数的参数和返回值，也可以用于描述类的结构。
   ```ts
   interface Person {
     name: string;
     age: number;
   }
   function sayHello(person: Person) {
     console.log(`Hello, ${person.name}!`);
   }
   ```
   * 接口继承\
     接口可以继承其他接口，从而实现接口的扩展和复用。通过接口继承，能够定义出更复杂的类型结构，满足不同的需求。
     ```ts
     interface Animal {
       name: string;
     }
     interface Dog extends Animal {
       breed: string;
     }
     const dog: Dog = { name: "Buddy", breed: "Labrador" };
     ```
   * 接口合并\
     接口可以合并多个接口的定义，从而实现接口的扩展和复用。通过接口合并，能够定义出更复杂的类型结构，满足不同的需求。
     ```ts
     interface A {
       a: number;
     }
     interface A {
       b: string;
     }
     const a: A = { a: 1, b: "hello" };
     ```
   * 接口索引签名\
     接口可以定义索引签名，用于描述对象的动态属性。通过索引签名，能够定义出更灵活的类型结构，满足不同的需求。
     ```ts
     interface Dictionary {
       [key: string]: number;
     }
     const dict: Dictionary = { a: 1, b: 2, c: 3 };
     ```
6. 泛型\
   泛型用于定义函数、接口、类等的类型参数，使得代码更加灵活和可复用。泛型可以在定义时指定类型参数，也可以在使用时根据实际情况推断类型参数。
   ```ts
   function identity<T>(arg: T): T {
     return arg;
   }
   const num = identity<number>(100);
   const str = identity<string>("hello");
   ```
   * 泛型约束\
     泛型约束用于限制泛型类型的范围，确保泛型类型符合特定的条件。通过泛型约束，可以在编译时捕获类型错误，避免运行时错误。
     ```ts
     function identity<T extends number>(arg: T): T {
       return arg;
     }
     const num = identity<number>(100);
     const str = identity<string>("hello"); // 编译错误
     ```
     * 泛型约束接口\
       泛型约束接口用于定义泛型类型的约束条件，确保泛型类型符合特定的接口定义。通过泛型约束接口，可以在编译时捕获类型错误，避免运行时错误。
       ```ts
       interface Lengthwise {
         length: number;
       }
       function identity<T extends Lengthwise>(arg: T): T {
         return arg;
       }
       const str = identity<string>("hello");
     * 

## 三、内置高级类型
1. `Partial<T>`
   `Partial<T>` 用于将类型 `T` 的所有属性设为可选。
   ```ts
   interface Person {
     name: string;
     age: number;
   }
   const person: Partial<Person> = { name: "hello" };
   ```
   * 源码实现
   ```ts
   type Partial<T> = {
     [P in keyof T]?: T[P];
   };
   ```
2. `Required<T>`
   `Required<T>` 用于将类型 `T` 的所有属性设为必填。
   ```ts
   interface Person {
     name?: string;
     age?: number;
   }
   const person: Required<Person> = { name: "hello", age: 18 };
   ```
   * 源码实现
   ```ts
   type Required<T> = {
     [P in keyof T]-?: T[P];
   };
   ```
3. `Readonly<T>`
   `Readonly<T>` 用于将类型 `T` 的所有属性设为只读。
   ```ts
   interface Person {
     name: string;
     age: number;
   }
   const person: Readonly<Person> = { name: "hello", age: 18 };
   person.name = "world"; // 编译错误
   ```
   * 源码实现
   ```ts
   type Readonly<T> = {
     readonly [P in keyof T]: T[P];
   };
   ```
4. `Pick<T, K>`
   `Pick<T, K>` 用于从类型 `T` 中选择出属性 `K`，并返回一个新的类型。
   ```ts
   interface Person {
     name: string;
     age: number;
     sex: string;
   }
   const person: Pick<Person, "name" | "age"> = { name: "hello", age: 18 };
   ```
   * 源码实现
   ```ts
   type Pick<T, K extends keyof T> = {
     [P in K]: T[P];
   };
   ```
5. `Omit<T, K>`
   `Omit<T, K>` 用于从类型 `T` 中排除属性 `K`，并返回一个新的类型。
   ```ts
   interface Person {
     name: string;
     age: number;
     sex: string;
   }
   const person: Omit<Person, "sex"> = { name: "hello", age: 18 };
   ```
   * 源码实现
   ```ts
   type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
   ```
6. `Record<K, T>`
    `Record<K, T>` 用于创建一个对象类型，其属性键为类型 `K`，属性值为类型 `T`。
    ```ts
    type T = Record<string, number>; // { [key: string]: number }
    ```
    * 源码实现
    ```ts
    type Record<K extends keyof any, T> = {
      [P in K]: T;
    };
    ```
7. `Exclude<T, U>`
   `Exclude<T, U>` 用于从类型 `T` 中排除类型 `U`，并返回一个新的类型。
   ```ts
   type T = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
   ```
   * 源码实现
   ```ts
   type Exclude<T, U> = T extends U ? never : T;
   ``` 
8. `Extract<T, U>`
   `Extract<T, U>` 用于从类型 `T` 中提取类型 `U`，并返回一个新的类型。
   ```ts
   type T = Extract<"a" | "b" | "c", "a" | "b">; // "a" | "b"
   ```
   * 源码实现
   ```ts
   type Extract<T, U> = T extends U ? T : never;
   ```
9. `NonNullable<T>`
   `NonNullable<T>` 用于从类型 `T` 中排除 `null` 和 `undefined`，并返回一个新的类型。
   ```ts
   type T = NonNullable<string | number | null | undefined>; // string | number
   ```
   * 源码实现
   ```ts
   type NonNullable<T> = T extends null | undefined ? never : T;
   ```
10. `Parameters<T>`
   `Parameters<T>` 用于获取函数类型 `T` 的参数类型，并返回一个元组类型。
   ```ts
   type T = Parameters<(a: number, b: string) => void>; // [number, string]
   ```
   * 源码实现
   ```ts
   type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
   ```
11. `ConstructorParameters<T>`
    `ConstructorParameters<T>` 用于获取构造函数类型 `T` 的参数类型，并返回一个元组类型。
    ```ts
    type T = ConstructorParameters<new (a: number, b: string) => void>; // [number, string]
    ```
    * 源码实现
    ```ts
    type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
    ```
12. `ReturnType<T>`
    `ReturnType<T>` 用于获取函数类型 `T` 的返回类型，并返回一个新的类型。
    ```ts
    type T = ReturnType<(a: number, b: string) => void>; // void
    ```
    * 源码实现
    ```ts
    type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
    ```
13. `InstanceType<T>`
    `InstanceType<T>` 用于获取构造函数类型 `T` 的实例类型，并返回一个新的类型。
    ```ts
    type T = InstanceType<new (a: number, b: string) => void>; // void
    ```
    * 源码实现
    ```ts
    type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never;
    ```

## 四、其他
1. 类型别名（Type Aliases）与接口（Interfaces）的区别
   * 类型别名\
     用于为类型定义一个新的名称，**可以是原始类型、联合类型、交叉类型、函数类型等**。类型别名的定义使用 `type` 关键字。
     ```ts
     type ID = string | number; // 为联合类型创建别名
     type Point = { x: number; y: number }; // 为对象类型创建别名
     type Func = (a: number) => string; // 为函数类型创建别名
     ```
   * 接口\
     用于定义对象的结构，**只能定义对象的属性和方法**，不能定义原始类型、联合类型等非对象类型。接口的定义使用 `interface` 关键字。
     ```ts
     interface Point { x: number; y: number } // 仅能定义对象结构
     interface Func { (a: number): string } // 可定义函数类型（视为特殊对象）
     ```
    * 扩展方式\
       类型别名无法直接 “继承”，但可通过**交叉类型（**`&`**）** 实现类似扩展的效果，将多个类型合并为一个新类型。
      ```ts
      type Point2D = { x: number; y: number };
      // 扩展为 3D 点（合并 Point2D 和 z 属性）
      type Point3D = Point2D & { z: number };
      ```
      接口支持通过 `extends` 关键字**直接继承**其他接口，语法更简洁，是接口扩展的标准方式。
      ```ts
      interface Animal {
        name: string;
      }
      interface Dog extends Animal {
        breed: string;
      }
      const dog: Dog = { name: "Buddy", breed: "Labrador" };
      ```
      * 重复定义\
        类型别名同一作用域内**不允许重复定义同名的类型别名**，会直接报错（类型别名是 “唯一标识符”）。
        ```ts
        type User = { name: string };
        type User = { age: number }; // 报错：标识符“User”重复
        ```
        接口同一作用域内**允许重复定义同名接口**，TypeScript 会自动合并它们的属性和方法（称为 “接口合并”）。
        ```ts
        interface User { name: string }
        interface User { age: number } // 自动合并
        // 合并后等价于：interface User { name: string; age: number }
        const user: User = { name: "Alice", age: 20 }; // 合法
        ```
        **接口合并的注意事项**
          1. 接口合并时，属性的类型必须兼容，否则会报错。
          2. 接口合并时，方法的参数类型和返回类型必须兼容，否则会报错。

       * 两者的使用场景\
          优先使用接口（**`interface`**）的场景
          1. 描述对象的结构（如 API 响应、类的实例等）。
          2. 需要通过 `extends` 扩展或实现接口合并。
          3. 定义类的类型（类可通过 `implements` 实现接口）。

          优先使用类型别名（**`type`**）的场景
          1. 描述联合类型、交叉类型、元组类型等复杂组合类型。
          2. 为基本类型（如 `string`、`number`）创建别名以增强可读性。
          3. 需要定义函数类型或映射类型（如结合 `keyof`、`in` 等关键字）。

2. any与unknown的区别
   * any
     1. 类型检查被禁用，任何类型都可以赋值给 `any` 类型的变量。
     2. 可以调用 `any` 类型的方法和属性，而无需进行类型检查。
     3. 不能直接访问 `any` 类型的属性，需要先进行类型断言。
   * unknown
     1. 类型检查被禁用，任何类型都可以赋值给 `unknown` 类型的变量。
     2. 不能调用 `unknown` 类型的方法和属性，需要先进行类型断言。
     3. 不能将 `unknown` 类型的变量赋值给其他类型的变量，需要先进行类型断言。
