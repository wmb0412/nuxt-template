# nuxt 项目构建（nuxt+vant）

### 创建项目

> yarn create-next-app myNuxt
>
> cd myNuxt
>
> Yarn  dev

### 修改host 和port

在package.json文件中添加

```json
"config": {
    "nuxt": {
      "host": "192.168.68.183",
      "port": "2000"
    }
  }
```

### 配置全局css样式

在assets目录下新建css/reset/css，并且在nuxt.config.js文件中配置

```js
 css: ['~assets/css/reset.css'],
```

### 在nuxt中使用sass

安装node-sass sass-loader

```	
yarn add node-sass sass-loader -D
```

如果你想要在sass中引入全局变量或全局函数，你还需要安装@nuxtjs/style-resources，并且在nuxt.config.js中配置[官方指导](https://zh.nuxtjs.org/api/configuration-build/#styleresources)

```	
yarn add @nuxtjs/style-resources -D
```



```js
export default {
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/common.scss'
  }
}
```

### 使用sass函数实现px2rem

在全局sass common中添加

```scss
$baseFontSize: 10;//根字体
@function px2rem($px){
  @return $px/$baseFontSize * 1rem;
}
```

在~plugins目录下创建custom/rootFontSize.js

```js
var ui = 750;
// 自己设定的font值
var font = 100;
// 得到比例值
var ratio = ui/font;
var oHtml = document.documentElement;
var screenWidth = oHtml.offsetWidth;
// 初始的时候调用一次
getSize();
window.addEventListener('resize', getSize);
// 在resize的时候动态设置fontsize值
function getSize(){
  screenWidth = oHtml.offsetWidth;
  // 限制区间
  // if(screenWidth <= 320){
  //   screenWidth = 320;
  // }else if(screenWidth >= ui){
  //   screenWidth = ui;
  // }
  oHtml.style.fontSize = screenWidth/ratio + 'px';
}
```

### 实现接口代理

安装@nuxtjs/axios

```
yarn add @nuxtjs/axios
```

并且在nuxt.config.js中配置

```js
modules: ['@nuxtjs/axios'],
axios: {
    proxy: true
},
proxy: {
    '/api/': {
      target: 'http://xxx:xxx',
      pathRewrite: {'^/api': ''}}
}
```

### 使用第三方插件库（vant）

安装vant

```	
yarn add vant
```

在~plugins目录下创建vant.js,并配置

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
 
Vue.use(Vant);
```

在nuxt.config.js中配置

```js
plugins:[
  {
      src: '~plugins/vant.js', ssr: true
	}
]
```

### 使用store

在~store目录下添加index.js文件并配置

```js
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
}
```