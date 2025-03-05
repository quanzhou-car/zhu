// 初始化 LeanCloud SDK
const APP_ID = 'srjSR1AScMqVmTlihhqDUycX-MdYXbMMI';
const APP_KEY = '5Lq7VvdaCT8Y5jiNA4h1B4kn';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
	serverURL: "https://srjsr1as.api.lncldglobal.com"
});

// 获取表单元素
const form = document.getElementById('myForm');
const messageDiv = document.getElementById('message');

// 监听表单提交事件
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // 创建一个新的对象
    const FormData = AV.Object.extend('FormData');
    const formData = new FormData();

    // 设置对象的属性
    formData.set('name', name);
    formData.set('email', email);

    // 保存对象到 LeanCloud
    formData.save().then((newData) => {
        console.log('数据保存成功', newData);
        messageDiv.textContent = '表单提交成功！';
        form.reset();
    }).catch((error) => {
        console.error('数据保存失败', error);
        messageDiv.textContent = '表单提交失败，请稍后重试。';
    });
});
// JavaScript Document