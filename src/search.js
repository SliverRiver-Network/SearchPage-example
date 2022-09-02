//获取搜索按钮
const btn = document.querySelector('.label');
//获取下拉框，方便后期判断用户选择的搜索平台
const point = document.querySelector('select');
//获取input框
const texts = document.querySelector('#text');

//将所有平台的搜索关键字端，存入数组
const arr = ['wd', 'q', 'text', 'query', 'w', 'keyword', 'm=Index&a=fenlei&k'];

//搜索按钮被点击以后要做的事情
btn.onclick = function() {
    //获取下拉框用户选中的内容
    const p = point.value;
    //获取输入框中，用户输入放入内容
    const text = texts.value;
    //声明一个空字符串
    let str = '';
    
    //以下所有的if语句是用来判断下拉框选项中是否包含平台域名关键字的，如果有
    if (p.includes('baidu')) {
        //就拼接？+搜索关键字段+ ‘=’ + 用户搜索内容
        //例如这里是百度，那么拼接的结果就是  ?wd=你好
        str = '?' + arr[0] + '=' + text;
    }
    if (p.includes('bing')) {
        str = '?' + arr[1] + '=' + text;
    }
    if (p.includes('yandex')) {
        str = '?' + arr[2] + '=' + text;
    }
    if (p.includes('google')) {
        str = text;
    }
    console.log(p + str);
    
    //最后我们利用页面跳转，跳转到指定的平台域名+搜索字段，就可以实现了
    window.location.href = p + str;
}

//这里是判断用户选中的是不是觅元素，如果是，就要提示用户，需要输入拼音搜索
point.onchange = function() {
    const p = point.value;
    if (p.includes('yuansu')) {
        texts.setAttribute('placeholder', '觅元素搜索请输入拼音，如：你好输入nihao');
    }
}

//当用户点击确定（enter）键后，让搜索按钮模拟被点击
document.onkeyup = function(e) {
    if (e.keyCode == 13) {
        btn.click();
    }
}
