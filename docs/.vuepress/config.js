module.exports = {
    title: '木可生森',
    description: '瞧一瞧，看一看',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}],//窗口图标,在header中引入图片，连接默认在.vuepress public底下
        // ['link', {rel: 'stylesheet', href: '/css/style.css'}]//在header中引入css
        // ['script', {charset: 'utf-8', src: '/js/index.js'}]//在header中引入js
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),//导航栏
        sidebar:require("./sidebar.js"),//引入所有sidebar侧边栏
        sidebarDepth: 2, //以二级菜单开始
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
