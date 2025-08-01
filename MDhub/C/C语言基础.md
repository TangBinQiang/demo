---
outline: deep
---
#  C语言基础语法教程（Markdown 格式）

> 🚀 本文覆盖 C语言的基本语法结构，配套图标便于理解和记忆，适合零基础入门学习。

## 📚 目录

1. [🔍 C语言简介](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-c%E8%AF%AD%E8%A8%80%E7%AE%80%E4%BB%8B)
    
2. [🏗️ 程序基本结构](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#%EF%B8%8F-%E7%A8%8B%E5%BA%8F%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84)
    
3. [💬 注释](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%B3%A8%E9%87%8A)
    
4. [🔢 数据类型与变量](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%8F%98%E9%87%8F)
    
5. [🧮 运算符](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E8%BF%90%E7%AE%97%E7%AC%A6)
    
6. [📥 输入与输出](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E8%BE%93%E5%85%A5%E4%B8%8E%E8%BE%93%E5%87%BA)
    
7. [🔁 控制语句](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5)
    
8. [📦 数组](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%95%B0%E7%BB%84)
    
9. [🔤 字符串](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E5%AD%97%E7%AC%A6%E4%B8%B2)
    
10. [🧩 函数](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E5%87%BD%E6%95%B0)
    
11. [📍 指针](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%8C%87%E9%92%88)
    
12. [🧱 结构体](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E7%BB%93%E6%9E%84%E4%BD%93)
    
13. [⚙️ 预处理指令](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#%EF%B8%8F-%E9%A2%84%E5%A4%84%E7%90%86%E6%8C%87%E4%BB%A4)
    
14. [📂 文件操作](https://chatgpt.com/c/680b916c-6544-8004-95ba-13b26db765d4#-%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C)
    

---

## 🔍 C语言简介

- 💡 由 Dennis Ritchie 于1972年开发。
    
- 🛠️ 广泛应用于嵌入式开发、操作系统、驱动程序、编译器等领域。
    
- 💬 是 C++ 和 Java 等语言的基础。
    

---

## 🏗️ 程序基本结构

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

- `#include <stdio.h>`：引入标准输入输出库。
    
- `int main()`：主函数，程序从这里开始执行。
    
- `printf()`：打印输出。
    
- `return 0;`：返回给操作系统，表示程序正常结束。
    

---

## 💬 注释

```c
// 这是单行注释

/*
这是多行注释
可以写多行文字
*/
```

---

## 🔢 数据类型与变量

### 🔠 基本数据类型

|类型|含义|示例|
|---|---|---|
|`int`|整型|`int age = 20;`|
|`float`|单精度浮点数|`float pi = 3.14;`|
|`double`|双精度浮点数|`double d = 3.14159;`|
|`char`|字符|`char ch = 'A';`|

### 🧱 常量

```c
const int max = 100;
#define PI 3.14159
```

---

## 🧮 运算符

### ➕ 算术运算符

```c
+  -  *  /  %
```

### 🔍 比较（关系）运算符

```c
==  !=  >  <  >=  <=
```

### ⚙️ 逻辑运算符

```c
&&  ||  !
```

### 📌 赋值运算符

```c
=  +=  -=  *=  /=  %=
```

### 🔁 自增/自减

```c
++  --
```

---

## 📥 输入与输出

### 🖨️ 输出：`printf()`

```c
printf("年龄：%d\n", age);
```

常见格式说明符：

|格式|含义|
|---|---|
|`%d`|整数|
|`%f`|浮点数|
|`%c`|字符|
|`%s`|字符串|

### ⌨️ 输入：`scanf()`

```c
scanf("%d", &age);
```

---

## 🔁 控制语句

### ✅ 条件语句 `if...else`

```c
if (score >= 60) {
    printf("及格\n");
} else {
    printf("不及格\n");
}
```

### 🔀 多分支 `switch`

```c
switch (option) {
    case 1:
        printf("选项1\n");
        break;
    case 2:
        printf("选项2\n");
        break;
    default:
        printf("其他\n");
}
```

### 🔂 循环结构

#### ⛔ for 循环

```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```

#### ⛔while 循环

```c
int i = 0;
while (i < 5) {
    printf("%d\n", i);
    i++;
}
```

#### ⛔ do...while 循环

```c
int i = 0;
do {
    printf("%d\n", i);
    i++;
} while (i < 5);
```

#### ⛔ break 与 continue

```c
if (i == 3) break;
if (i % 2 == 0) continue;
```

---

## 📦 数组

### 一维数组

```c
int nums[5] = {1, 2, 3, 4, 5};
printf("%d", nums[0]);  // 输出1
```

### 二维数组

```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

---

## 🔤 字符串

```c
char name[] = "Tom";
```

常用字符串函数（需引入 `<string.h>`）：

```c
strlen(name);     // 获取长度
strcpy(dest, src); // 复制
strcmp(s1, s2);    // 比较
```

---

## 🧩 函数

```c
int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d\n", add(3, 5));
}
```

---

## 📍 指针

```c
int x = 10;
int *p = &x;

printf("%d\n", *p); // 输出10
```

- `*p`：访问指针指向的值（解引用）
    
- `&x`：取变量 `x` 的地址
    

---

## 🧱 结构体

```c
struct Person {
    char name[20];
    int age;
};

int main() {
    struct Person p1 = {"Alice", 18};
    printf("%s %d", p1.name, p1.age);
}
```

---

## ⚙️ 预处理指令

```c
#include <stdio.h>
#define PI 3.14

#ifdef DEBUG
    printf("调试模式\n");
#endif
```

---

## 📂 文件操作

```c
FILE *fp = fopen("data.txt", "r");

if (fp != NULL) {
    char ch = fgetc(fp);
    printf("%c", ch);
    fclose(fp);
}
```

常用函数：

| 函数          | 说明   |
| ----------- | ---- |
| `fopen()`   | 打开文件 |
| `fclose()`  | 关闭文件 |
| `fgetc()`   | 读取字符 |
| `fputc()`   | 写字符  |
| `fscanf()`  | 读取格式 |
| `fprintf()` | 写格式  |

---

## ✅ 推荐学习顺序

1. 熟悉基本结构、变量和数据类型
    
2. 学习输入输出和运算符
    
3. 掌握控制流程（if、for、while）
    
4. 理解数组和函数
    
5. 深入指针、结构体、文件操作
    

---

> 666

::: info
这是一条info，自定义格式：info+空格+自定义文字
:::

::: tip 提示
这是一个提示，自定义格式：tip+空格+自定义文字
:::

::: warning 警告
这是一条警告，自定义格式：warning+空格+自定义文字
:::

::: danger 危险
这是一个危险警告，自定义格式：danger+空格+自定义文字
:::

::: details 点我查看
这是一条详情，自定义格式：details+空格+自定义文字
:::

```sh
#默认有行号
pnpm -v
```

```sh:no-line-numbers
#关闭行号
pnpm -v
```

::: code-group

```sh [pnpm]
#查询pnpm版本
pnpm -v
```

```sh [yarn]
#查询yarn版本
yarn -v
```

:::




