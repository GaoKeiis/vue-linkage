## 仿iOS省市区三级联动

``` bash
A Vue.js project

本实例是基于vue 2.0和mint-ui 2.0仿iOS省市区三级联动
```

> 效果

![最终效果](/demo/demo.gif)

> 注意事项

``` bash
1、所用数据和组件均在src/components/linkage文件夹

2、本实例是用vue-cli提供的webpack模板构建

3、CSS代码使用了Sass编写

4、如果你想直接使用，请确保你安装了mint-ui、node-sass、sass-loader

5、使用的时候请在main.js中加入下面三行代码

import 'mint-ui/lib/style.css';
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
