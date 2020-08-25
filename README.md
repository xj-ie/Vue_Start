### Vue全局组件效果：

![image-20200824104357819](static\image\image-20200824104357819.png)

![image-20200824104559187](static\image\image-20200824104559187.png)

## 局部定义效果：

![image-20200824112532902](static\image\image-20200824112532902.png)


环境配置
单文件组件不能直接运行使用，需要依赖node项目对其进行解析打包，在使用之前需要先进行环境配置

安装node版本管理工具nvm

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
// 更新配置
source .bashrc
安装最新版本的node

nvm install node
更新npm的安装源

npm config set registry https://registry.npm.taobao.org
创建项目目录

mkdir project
进入项目目录，初始化项目目录

cd project
npm init
初始化完成后在当前目录中会生成一个package.json文件，该文件指定项目所以依赖的模块
