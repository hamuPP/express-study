# 本项目是纯用node express做一个后端服务的教程，并不等同于express官网的入门教程

**本文是在已经看过express官方入门指南，和用express做过一点项目经验后，再次重新学习express的一篇私人笔记。所以一些基础知识，本文将会一笔带过**

**已经看过express官网的人可能会发现，按照官网教程（不管是否使用generator），撘起来的一个应用，是同时包含前端逻辑和后端逻辑的，比如可以用.get(/)这种方式，既可以.render(),.sendfile()等方法输出一个html页面在网页上，也可以.json()等方式返回一个json对象（如同一般的前后端项目时，前端同学请求后端java接口，人家后端同学返回给前端的数据一样**

**但在vue和webpack流行的当下，很多前端项目是用的webpack提供的编译服务环境在跑的,最后打包压缩成一个html一个js,发给后端同学去部署。**

**所以本文的意思，就是只用express做一个后端服务，接受并返回前端的get\post\put\delete等请求内容，顺便重新学习一下各个express中间件**

## 目录结构说明

```
├── basicBackend （一个最基础的后端服务，只有最基础的响应get、post等功能）
├── officialExpressGeneratorApp （按照官方教程用generator生成的一个最简express应用）

```