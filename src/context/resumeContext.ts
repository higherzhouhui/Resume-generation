import React from "react";

export const initialState = {
  profile: {
    name: "周辉-ahui",
    about: "Web前端、Uniapp、微信小程序、全栈开发",
    mobile: "18516010812（+V信）",
    email: "782492184@qq.com",
    github: "https://github.com/higherzhouhui/",
    home: "https://blog.jizaoji.top/",
    workExpYear: 7,
    workPlace: "重庆",
    positionTitle: "高级前端工程师",
  },
  avatar: {
    url: "https://blog.jizaoji.top/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=1920&q=75",
    display: true,
    circle: true,
    theme: "1",
  },
  skillList: [
    {
      name: "HTML / CSS",
      desc: "",
      level: 5,
    },
    {
      name: "TypeScript / JavaScript",
      desc: "熟练 JavaScript，丰富的 ts 项目经验",
      level: 4,
    },
    {
      name: "Express/Koa",
      desc: "丰富的 NodeJS 实践以及开源经验",
      level: 5,
    },
    {
      name: "React / 前端工程化",
      desc: "大型前端项目经验以及组件库开发经验",
      level: 4,
    },
  ],
  educationList: [
    {
      time: ["2013.09", "2017.06"],
      school: "陕西科技大学",
      major: "物联网工程",
      degree: "本科",
    },
  ],
  awardList: [
    {
      info: "英语 CET6",
      time: "2014",
    },
  ],
  evaluateList: [
   {info: '1、从2014年接触web前端开发（计算机专业），熟练掌握前端三要素（HTML/JS/CSS），能快速上手任一前端框架；'},
   {info: '2、主要的技术栈为React、Vue、Angular及其衍生框架NextJS、NustJS、Uniapp、Ionic；'},
   {info: '3、有开发过微信小程序线上商城、Uniapp跨端开发生活服务类APP经验；'},
   {info: '4、参与过几个WEB3区块链DAPP项目；能熟练使用WEB3JS/ETHERJS唤醒虚拟钱包以及与合约交互；'},
   {info: '5、有全栈开发经验，从沟通需求（画产品图）、UI图（蓝湖和PhotoShop）、数据库设计（mysql）、页面开发（Nextjs），前后端交互（nodejs）、项目部署（阿里云服务器、域名购买、短信服务、宝塔管理、nginx）能独立完成；'},
   {info: '6、熟练使用nodejs进行后端服务开发，对于express/egg/sequelize/mysql构建高性能服务较为熟练；`'},
  ],
  workExpList: [
    {
      company: "重庆团望科技有限公司",
      department: "软件研发部",
      time: ["2022.03", "2024.05"],
      desc: '1.新项目的技术栈选型与框架搭建，部署与自动化打包\n2. 优化原有直播项目，从资源文件、接口响应流程判断、WEBSOCKET实时推送修改Redux数据流入手\n3. web3项目链接多种类虚拟钱包、合约交互\n4.使用UNIAPP进行混合式APP开发',
    },
    {
      company: "重庆华夏云融航空信息科技",
      department: "IT软件研发部",
      time: ["2020.05", "2022.03"],
      desc: "1.订票微信小程序功能迭代\n2. 对原有官网技术升级为Nust服务端渲染\n3. 建立公司内部统一使用的UI组件库",
    },
    {
      company: "上海美凯龙设计云信息科技",
      department: "3D可视化前端开发",
      time: ["2018.05", "2020.04"],
      desc: "1.使用SVG绘制户型图以及定位吸附点和计算异边形面积\n2. 编写VSCODE插件以高亮、自动补齐、提示自创的一种描述非规则的3D模型语言\n3.使用WEBWORKER多线程处理复杂的3D模型生成计算\n4.React UI组件库的维护与更新\n5.使用ThreeJs渲染衣橱柜模型",
    },
    {
      company: "上海博达数据通信有限公司",
      department: "路由器应用组",
      time: ["2017.06", "2018.05"],
      desc: "1.路由器管理页面更新迭代\n2.使用IONIC混合式开发WIFI管理APP\n3.将程序录入路由器设备\n4.路由器使用记录管理后台",
    },
  ],
  projectList: [
    {
      name: "宠物养成Base链游小游戏",
      role: "技术负责人",
      time: ["2024.01", "2024.05"],
      desc: "模仿Xpet宠物养成游戏，包含mint、airdrop、buyToken、swap、社交任务等功能",
      content:
        "项目难点\n1. 项目从0到1的框架设计和开发，技术栈：NextJs13+Pwa+TailWindCss+NodeJs+Sequelize+Mysql+Antd-Pro\n  2. 不采用三方钱包，使用私钥创建walletProvider进行合约交互，为保证私钥安全性，由前端创建以太坊私钥并存储在缓存中\n 3. 由于不使用三方钱包，对于合约交互的GasPrice和GasLimit需要统计交易Fee后给定一个合理的建议值，使用户花更少的Gas Fee\n 4.监听合约事件成功后采用websocket通知到前端\n所用技术：React、Pwa、Next、Web3Js、Ethersjs、Antd-Mobile、Nodejs、Sequelize、Mysql、Webpack",
    },
    {
      name: "游戏直播平台",
      role: "web/h5开发",
      time: ["2023.05", "2023.12"],
      desc: "在线游戏直播平台，有PC、H5、Android、IOS多端程序",
      content:
        "项目难点\n1.为了便于统一http请求、国际化、以及共用一套UI组件；将WEB端和H5端写在一套代码内；导致了项目过于臃肿，为提升性能采用路由懒加载且路由切换增加LoadingGif和骨架屏等待以提升用户体验；\n2.直播间有大量的接口调用以及tim消息推送，在直播间达到一定人数后会有卡顿，采用websocket推送指定更新，在前端做了大量缓存数据，减少接口请求次数优化，改写webpack打包规则提升性能\n所用技术：React、Antd、Antd-Mobile、Dplayer、Flvjs、Tim-SDK、Webpack",
    },
    {
      name: "在线简历生成器",
      role: "独立开发者",
      time: ["2020.03", "2020.05"],
      desc: "在线填写简历，一键导出 PDF",
      content: "项目难点\n1. 前端在线渲染PDF \n2. PDF 中样式设置\n所用技术：Nextjs13、TailwindCss、PDF.js",
    },
    {
      name: "模拟Mac设备",
      role: "前端开发",
      time: ["2022.01", "2022.10"],
      desc: "构建一个网页版的Mac操作系统，可实现文件管理、系统设置、开关机、锁屏、任务提醒等系统常用功能",
      content: "项目难点：\n1.大量淡入淡出、切入飞出、缩放、放大等动画的设计、层级管理与自适应排版；\n2.文件预览、压缩解压与大文件跨文件夹的复制、粘贴逻辑；\n3.首屏加载性能优化以及操作流畅性\n所用技术：Vue3、Vite、Element-Plus、JSZIP"
    },
    {
      name: "3D家装设计WEB版",
      role: "前端开发",
      time: ["2018.05", "2020.04"],
      desc: "将家装设计搬到网页上进行绘制、设计、渲染并打通商城购买一站式平台",
      content: "项目难点：\n1.使用SVG绘制平面户型图，内线画墙与外线画墙，为便于画出平滑且完整的户型，根据计算延伸线、平行线、垂直线、相交点提供辅助线/点，并计算区域面积；\n2.将每一步的操作的数据信息存储起来，提供撤销与恢复操作；\n所用技术：ThreeJS、WebGl、React、TypeScript"
    },
    {
      name: "校园商城小程序",
      role: "前端负责人",
      time: ["2020.05", "2021.02"],
      desc: "一款提供给大学生的商城小程序，支持15分钟内极速送达宿舍",
      content: "项目难点：1.手机号一键登录、获取通讯地址、发起微信支付\n2.订单支付后及时通知商家发货"
    },
    {
      name: "文献检索系统",
      role: "前端开发",
      time: ["2021.03", "2021.08"],
      desc: "根据关键字查询医药方面文献资料",
      content: "项目难点：\n1.文献资料收集，采用Python爬虫入库\n2.采用谷歌的翻译接口，将输入的非英文文字转为英文后检索\n3.修改文章内容并打上tag\n所用技术：Nextjs、Tailwindcss、GoogleTranslate、Antd-Pro"
    },
    {
      name: "直播管理后台",
      role: "核心开发",
      time: ["2023.09", "2023.12"],
      desc: "用户查看和管理用户、主播的积分、在线时长；工资发放、奖励提现等",
      content: "解决难点：\n1.改造Element-Ui的菜单栏，自定义其一二级菜单展示；选择主题色后按钮、菜单、分页等组件无感切换其颜色；\n2.权限管理，根据账户类型动态创建菜单，动态生成表单列，支持时区切换\n所用技术：Vue2、VueX、Element-Plus、Echart"
    }
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any } | { type: "restore" };

interface AppContextInterface {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      localStorage.setItem(
        "refuseme_data",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("refuseme_data");
      return initialState;
    default:
      throw new Error();
  }
}
