module.exports = [
    {
        text: '前端基础', 
        items: [
            {text: 'HTML5', link: '/node/html5/notes/html5'}, //写个readme到里面
            {text: 'CSS3', link: '/node/css3/notes/css3'},
            {text: 'javaScript', link: '/node/javaScript/notes/javaScript'},
        ]
    },
    {
        text: 'js随笔', link: '/jsrecord/notes/one' //点连接时默认先找readme,要在对应目录建立readme
    },
    {
        text: 'Vue学习路线', 
        items: [
            {text: 'NPM', link: '/vue/npm/notes/npm'}, 
            {text: 'Vue基础', link: '/vue/vue/notes/vue'},
        ]
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]
