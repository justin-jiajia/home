const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "嘉嘉的博客"; // 个人网站名字

const BLOG_URL = "https://blog.hijiajia.xyz"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/justin-jiajia"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "我的作品" },
  { sortId: 2, title: "功能性网站" },
  { sortId: 3, title: "Web Api"}
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "嘉嘉的笔记本",
    subtitle: "我的第一个Flask应用！",
    url: "https://notes.hijiajia.xyz/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 2,
    title: "密码库",
    subtitle: "使用Bitwarden",
    url: "http://passwd.hijiajia.xyz/",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 3,
    title: "你的记录仪-API",
    subtitle: "正常用户请使用前端",
    url: "http://yr.hijiajia.xyz/",
    icon: ""
  },
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
