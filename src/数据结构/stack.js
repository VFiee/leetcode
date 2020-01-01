/**
 * 栈数据结构
 *
 * 栈是一种遵从后进先出（LIFO）原则的有序集合。
 * 新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。
 * 例如: 叠放的盘子,上下摆放的书,浏览器的历史记录(前进,后退)
 */

/**
 * 
 *  push(element(s))：添加一个（或几个）新元素到栈顶。
 *  pop()：移除栈顶的元素，同时返回被移除的元素。
 *  peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
 *  isEmpty()：如果栈里没有任何元素就返回 true，否则返回 false。
 *  clear()：移除栈里的所有元素。
 *  size()：返回栈里的元素个数。该方法和数组的 length 属性很类似。
 * 
 */


//  数组栈
class StackArray {
    constructor() {
        this.list = [];
    }
    push(element) {
        this.list.push(element);
    }
    pop() {
        return this.list.pop();
    }
    peek() {
        return this.list[0];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.list = [];
    }
    size() {
        return this.list.length;
    }
}


// 对象栈

class StackObject {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return;
        }
        this.count--;
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.count = 0;
        this.items = {};
    }
    isEmpty() {
        this.count === 0;
    }
    size() {
        return this.count;
    }
}


// 栈的应用-进制转换
/**
 * 举例:十进制转二进制(把10进制的数字15转成二进制的数字)
 *  15 / 2 = 7 余数:1
 *  7 / 2 = 3  余数:1
 *  3 / 2 = 1  余数:1
 *  1 / 2 = 0 余数:0
 *  进制转换对商取整(0.5取0),直到商的结果为0,所以转换结果为 1110
 */

//  十进制转二进制
function decomalToBinary(decNum) {
    const stack = new StackArray();
    let number = decNum;
    let res;
    while (number > 0) {
        res = Math.floor(number % 2);
        stack.push(res);
        number = Math.floor(number / 2);
    }
    let result = "";
    while (!stack.isEmpty()) {
        result += stack.pop().toString();
    }
    return result;
}
/**
 * 在将十进制转成二进制时，余数是 0 或 1；
 * 在将十进制转成八进制时，余数是 0～7；
 * 将十进制转成十六进制时，余数是 0～9 加上 A、B、C、D、E 和 F（对应 10、11、12、13、14 和 15）。
 */

// 十进制转换任意进制
function baseConverter(decNum, base = 2) {
    const stack = new StackArray();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNum;
    let res;
    if (!(base >= 2 && base <= 36)) {
        return "";
    }
    while (number > 0) {
        res = Math.floor(number % base);
        stack.push(res);
        number = Math.floor(number / base);
    }
    let result = "";
    while (!stack.isEmpty()) {
        result += digits[stack.pop()];
    }
    return result;
}
