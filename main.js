const messages = {
  en: {
    msg: {
      home: 'Home',
      moredl: 'All Platforms',
      devrc: 'Dev Resources',
      slogon: 'neat, safe, high performance!',
      slogon2: 'millions of users are using us, how about you?',
      slogon3: 'break the language barriers',
      tagline0: 'easy to use',
      tagline1: 'simplicity',
      tagline2: 'the top app',
      tagline3: 'AI Translation',
      tagline4: 'HQ with efficiency',
      backtop: 'back to top',
      copyright: 'Sagittarius Tech Co., Ltd.'
    },
    dl: {
      std: 'Windows (Chinese)',
      intl: 'Windows STD',
      beta: 'Beta Version',
      osx: 'Mac OS X',
      osxfree: 'Free Mac Trial(.dmg)',
      green: 'Green Edition(.7z)',
      msi: 'Enterpraise(.msi)'
    },
    rc: {
      win: 'Windows Source Code',
      osx: 'Mac Source Code',
      api: 'API Documents'
    },
    button: {
      win: 'Download Windows Installer',
      osx: 'Mac App Store'
    },
    installed: {
      title: "Thanks for your trust",
      thanks: "Your support is our motivation.",
      content: "This is an open sourced software. Developers are welcome to participate in the new version and the design of new features. Please go to the home page and check out our development resources."
    },
    top: {
      blog: "Blog",
      github: "Github",
      job: "Job"
    }
  },
  cn: {
    msg: {
      home: '首页',
      moredl: '更多下载',
      devrc: '开发资源',
      slogon: '小巧 开源 绿色 智能',
      slogon2: '备受赞誉的多媒体播放器',
      slogon3: '打破语言鸿沟',
      tagline0: '简单易用',
      tagline1: '极致小巧',
      tagline2: '倍受认可',
      tagline3: 'AI字幕',
      tagline4: '高画质 低消耗',
      backtop: '回到页面顶部',
      copyright: '射手科技'
    },
    dl: {
      std: 'Windows标准版',
      intl: 'Multilanguage(Windows)',
      beta: '测试版下载(4.0)',
      osx: 'Mac OS X',
      osxfree: 'Mac免费试用版(.dmg)',
      green: '绿色版(.7z)',
      msi: 'MSI企业部署版'
    },
    rc: {
      win: 'Windows版源码',
      osx: 'Mac版源码',
      api: 'API文档'
    },
    button: {
      win: '下载 Windows 版本',
      osx: '前往 Mac App Store 安装'
    },
    installed: {
      title: "感谢",
      thanks: "谢谢您试用射手影音。您的支持是我们的动力。",
      content: "这是一个开源软件，欢迎开发者参与到新版本和新功能的设计制作中，详情请前往首页查看开发资源。"
    },
    top: {
      blog: "专栏",
      github: "源码",
      job: "工作"
    }
  }
}

var language = window.navigator.userLanguage || window.navigator.language;
var iscnuser = language.match(/zh/i) ? true : false;
var urlhash = window.location.hash;
if (urlhash.match(/zh/i)) {
  iscnuser = true;
} else if (urlhash.match(/en/i)) {
  iscnuser = false;
}

if (!iscnuser) {
  document.title = "SPlayer & SPlayerX - the award winning media player on both of windows and mac os x"
}

Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: iscnuser ? 'cn' : 'en', // set locale
  messages, // set locale messages
})


var app = new Vue({
  i18n,
  el: '#app',
  data: {
    cn: iscnuser,
    isMacLike: navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false,
    menuDownload: [
    {
      link: 'http://file.splayer.org/SPlayerSetup.exe?SPlayerSetup2437_701266.exe',
      title: i18n.t("dl.std")
    },
    {
      link: 'http://file.splayer.org/SPlayerSetupInt.exe?SPlayerSetupInt2437_701266.exe',
      title: i18n.t("dl.intl")
    },
    {
      link: 'https://beta.splayer.org/',
      title: i18n.t("dl.beta")
    },
    {
      link: 'http://itunes.apple.com/app/splayerx/id414675434',
      title: i18n.t("dl.osx")
    },
    {
      link: 'http://hg.splayer.org/splayerx/downloads',
      title: i18n.t("dl.osxfree")
    },
    {
      link: 'http://file.splayer.org/splayer.7z?2437.7z',
      title: i18n.t("dl.green")
    },
    {
      link: 'http://file.splayer.org/SPlayer.msi?2437.msi',
      title: i18n.t("dl.msi")
    }],
    menuDev: [
    {
      link: 'https://github.com/tomasen/splayer',
      title: i18n.t("rc.win")
    },
    {
      link: 'https://bitbucket.org/Tomasen/splayerx/wiki/Home',
      title: i18n.t("rc.osx")
    },
    {
      link: 'https://docs.google.com/document/d/1ufdzy6jbornkXxsD-OGl3kgWa4P9WO5NZb6_QYZiGI0/preview',
      // link: 'http://docs.google.com/View?id=dg2mvjsw_36dvjgjrck',
      title: i18n.t("rc.api")
    }],
    menuTop: [
    {
      link: 'https://docs.google.com/document/d/1hv1v9Xnit93YczHKeCRwvZ2EEGau1GL4QDj49e2qXt0/preview',
      title: i18n.t("top.job")
    },
    {
      link: 'https://github.com/tomasen/splayer',
      title: i18n.t("top.github")
    },
    {
      link: 'https://medium.com/splayer',
      title: i18n.t("top.blog")
    }],
  },
  methods: {
    gatrack: function (message, cat) {
      ga('send', 'event', 'Clicks', cat ? cat : 'download', message);
    },
    setloc: function (lang) {
      window.location.hash = "#" + lang;
      location.reload();
    }
  }
})
