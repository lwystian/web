document.addEventListener('DOMContentLoaded', function() {  // 使用DOMContentLoaded目的是为了让页面其他元素加载完成后再执行以下js代码,因为我使用内联js时,发现js可以正常发挥其作用,但是使用外联js时,却不可以,于是添加了这一段
    var myElement = document.getElementById('myElement');    
    var originalContent = document.querySelector('.content');   //原登录框内部样式的选择器
    var newContent = document.querySelector('.newcontent'); //切换后登录框内部样式选择器

    myElement.addEventListener('click', function() {
        // 切换 myElement 的类
        this.classList.toggle('login-icon-other');  //登录框右上角点击切换后图标的样式

        // 切换原始内容和新内容的显示
        originalContent.style.display = (originalContent.style.display === 'none' ? 'block' : 'none');
        newContent.style.display = (newContent.style.display === 'block' ? 'none' : 'block');
    });
});
