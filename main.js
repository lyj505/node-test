console.log('test modify one line')
/**
 * 
 * 1.use test framework mocha
 * 2.learn to use assert library
 * 3.learn to use test coverage tool istanbul
 * 4.easy to use Makefile to program 
 * 
 * 
 */

//fibonacci  斐波那契
var n_0 = 0;
var n_1 = 0;
var fibonacci = (n) => {
    //console.log('fibonacci recursive n',n)
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }
    if (n > 10) {
        throw new Error('n should <= 10')
    }

    if (n < 0) {
        throw new Error('n should >= 0')
    }


    if (n === 0) {
        n_0++;
        //   console.log('n_0-------num',n_0)
        return 0;
    }
    if (n === 1) {
        //55个,（10+1）*（11-1）/2 =  55
        n_1++;
        // console.log('n_1-------num',n_1)
        return 1;
    }
    //10
    //--------------分裂
    // 9       8       2 
    //8 7     7 6      4
    //7...       5      8
    //6...        4     16   
    //5...        3     
    //4...        2
    //3...        1
    //2...
    //1...
    //0                
    return fibonacci(n - 1) + fibonacci(n - 2)
}

if (require.main === module) {
    // 如果是直接执行 main.js，则进入此处
    // 如果 main.js 被其他文件 require，则此处不会执行
    // console.log(process.argv)
    //参数列表
    //1.使用node程序路径
    //2.当前文件路径
    //3.文件参数路径
    var n = Number(process.argv[2]);
    //console.log('this n ======>',n)
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}

module.exports = {
    fibonacci
}