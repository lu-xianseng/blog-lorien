# iso刻录工具

## 项目地址

https://github.com/lu-xianseng/image-maker

## 工具简介

对将iso镜像写入U盘，进行启动盘制作。工具安装后，系统中鼠标右键点击镜像文件，选择“写入到U盘”，可快捷进行启动盘制作

## 安装说明

因应用未签名，需先启用安全中心中的允许任意应用安装

## 运行说明

1、此应用需系统启用开发者权限后运行

2、刻录入口：鼠标右键镜像文件，点击“写入到U盘”
<img title="" src="file:///模板工具_assets/iso刻录工具/image-maker-right-menu.png" alt="示例图片" style="border: 2px solid #dddddd; border-radius: 5px;" data-align="center">

3、刻录模式支持普通刻录、和DD命令刻录两种方式，可通过配置界面更改设定

<img title="" src="file:///模板工具_assets/iso刻录工具/image-maker-main.png" alt="示例图片" style="border: 2px solid #dddddd; border-radius: 5px;" data-align="center"> 

4、配置入口：启动器“关于和配置”
<img title="" src="file:///模板工具_assets/iso刻录工具/image-maker-launcher-icon.png" alt="示例图片" style="border: 2px solid #dddddd; border-radius: 5px;" data-align="center">

5、配置和分区修复，进行个性化配置，以及使用过dd刻录后，文管无法识别U盘的时候，进行U盘分区修复
<img title="" src="file:///模板工具_assets/iso刻录工具/image-maker-about.png" alt="示例图片" style="border: 2px solid #dddddd; border-radius: 5px;" data-align="center">

6、配置说明

- **刻录模式**：启动时默认刻录模式，提供“每次询问、普通刻录、dd刻录”三种模式
- **日志路径**：配置程序日志路径
- **写入时清楚系统缓存**：写入数据前执行清除系统的inode
- **数据块大小**：针对dd写入时，块大小的控制
- **ISO 文件校验**：刻录前校验镜像文件是否正确
- **启动盘校验**：刻录完成后校验启动盘是否正确

<img title="" src="file:///模板工具_assets/iso刻录工具/image-maker-config.png" alt="示例图片" style="border: 2px solid #dddddd; border-radius: 5px;" data-align="center">
