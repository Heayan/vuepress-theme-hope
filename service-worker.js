if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"ef6120537caee3237c8bd51511a7e32e"},{url:"article/index.html",revision:"6fb92a92c83edc628510e4be0202bfa4"},{url:"assets/css/0.styles.f71c441a.css",revision:"96717109880bd3fd0f5081ab722149cd"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.e69edf41.js",revision:"6cecd076c25c46f0703fade0cc50aff4"},{url:"assets/js/app.9bdebccc.js",revision:"f2e49e2fb0d118807395d2634d0cb649"},{url:"assets/js/layout-Blog.065dddc9.js",revision:"5b5d070b8feeb0c2d0d0f875075f051a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8beec3d4.js",revision:"5a9495ae6f2cc7ef6c9a553d2793f956"},{url:"assets/js/layout-Layout.f30e9342.js",revision:"8efd6bd298457efbeb355ecc0a6c9275"},{url:"assets/js/layout-NotFound.768c84cb.js",revision:"784b4bf9b6affedef31013f0b2885bfb"},{url:"assets/js/page-@mr-hopelast-update--1104de32.5977bf1a.js",revision:"f657ac6d5ddc004dc8b4554adccc5ecd"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.52050866.js",revision:"4f0570fe7b8284e752cf506e3278f8c3"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.a5f04750.js",revision:"040076733854c81ec97cb524ec1ec1a1"},{url:"assets/js/page-@mr-hopepwa--051692f2.efedd61f.js",revision:"e995cf22ed45f60d1993752137c5c054"},{url:"assets/js/page-@mr-hopereading-time--36317372.3f8fc8cf.js",revision:"02e80c64dba9f62ab99ebd50d329c060"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.0ff151b9.js",revision:"b7fba69d9b78ee293a99e004732c7c44"},{url:"assets/js/page-@mr-hopeseo--44db09a4.28709b26.js",revision:"3c47b93c61d06cae09ae6e4aa251ef07"},{url:"assets/js/page-@mr-hopeseo--4c19db12.3ed20c81.js",revision:"bf0c5543b650a32c1c72294f8afbf46c"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.b6f981e7.js",revision:"240ce36e0771ec767b4bb6dd6dec450a"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.11f9a0d6.js",revision:"6ee100545450c3383fb03c7ae452bbc3"},{url:"assets/js/page-AboutVuepress--5d12de02.99c606fa.js",revision:"21dbea1f1262b552d71e9754f4568d2a"},{url:"assets/js/page-Basic--29b12659.99cdc09c.js",revision:"84251e883316b813fc16657fb08c8354"},{url:"assets/js/page-Bloghomepage--d988383c.2ac662f2.js",revision:"00b3ef1543de97532c377c56f2634aae"},{url:"assets/js/page-Blogrelated--7c1e4552.ca1b2653.js",revision:"6673d1ae97f5534df30cc5623e4dbe08"},{url:"assets/js/page-CommentFunction--6884a164.6616c629.js",revision:"47b7dec9046b7cba7b035b2c67d4c61e"},{url:"assets/js/page-Commonproblems--87e54bce.584de8a5.js",revision:"7eab7710a4be356506aec70baff945fa"},{url:"assets/js/page-ConfigDocs--2082c612.24fa6445.js",revision:"fd1658f20a072d0bccc10896d85ed6da"},{url:"assets/js/page-Customalignment--df6a559c.825890fd.js",revision:"5543a072efaee938c428b1d21c18e4dc"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.b5444f08.js",revision:"8fbf3b99b3a53f96ae7714bbb8c326be"},{url:"assets/js/page-Demos--cac80116.e7664ece.js",revision:"d7d6221eb7d5066b2d2e201510c586fa"},{url:"assets/js/page-EmojiList--b946d226.621c268c.js",revision:"554ad343eac5d0ac5361f614a5425be1"},{url:"assets/js/page-Emoji列表--41bb29b9.b5e52cf7.js",revision:"ce8df72356e9bbd4343b9274444226c1"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.568e89b6.js",revision:"1949eabbd1a48d579aa0af8a13617999"},{url:"assets/js/page-FileStructure--5dff5230.10d53966.js",revision:"edd23aa32e0c312e11203f4d70ef5507"},{url:"assets/js/page-Flowchart--6426e412.78b330e3.js",revision:"2207f3696514ac3953214c02949d55ac"},{url:"assets/js/page-Footnote--3a89d162.1c630011.js",revision:"51734bd9ebadbd472dada69c226fe87c"},{url:"assets/js/page-HomePage--37b81ca8.52029981.js",revision:"b6089cce2e7853ec693b32462c1f7702"},{url:"assets/js/page-InstallUsage--5dafe67a.5b3014ca.js",revision:"fa3c62af17e65ae34fa38ad991e574f6"},{url:"assets/js/page-Introduction--0b048d19.1fc3437d.js",revision:"876914c9c27a088788027cd2ff6ddc40"},{url:"assets/js/page-Layout--655201fe.85255ced.js",revision:"da2cea6e52bd312c9f3ca0e153c759e2"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.068ac82b.js",revision:"e606877966ced86d624dd4bfd2195097"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.23ddab48.js",revision:"50a7e2460eaca7d21a4487f59f857d6a"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.57d8a5e3.js",revision:"316aabf398c5a83745c39fe86a20aa33"},{url:"assets/js/page-Markdown介绍--270989ce.98a95d7d.js",revision:"512dcf61ebf838085c98b0785f75593d"},{url:"assets/js/page-Markdown增强--ad9dba8e.12ad57ee.js",revision:"96c2bc05c41ac01a5d8701068ed0b2eb"},{url:"assets/js/page-Markdown示例--c3e1bfdc.7eb12f55.js",revision:"d00d29efa2e072073958c1fa717c1f2f"},{url:"assets/js/page-Markup--4f1121f0.d525bd11.js",revision:"03caba63857daee9c4493dd0531e12f6"},{url:"assets/js/page-Nature--5c9d3e6c.f0008ec7.js",revision:"7792c6b4ed8d30c7420e7325297e5810"},{url:"assets/js/page-NavBar--262632f4.714b459a.js",revision:"214d25879da0754031f645421d82db40"},{url:"assets/js/page-NewComponent--2edd3b68.667df086.js",revision:"595a14f0c1ae525a2f9356b843996445"},{url:"assets/js/page-Newfeature--3e66b879.1eb8a9cd.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.70872522.js",revision:"09f716ff9a84f62379dd8268c63f8590"},{url:"assets/js/page-Page--26692570.9e1ccf16.js",revision:"1dc243c7b5adb7679a00588a2679f54e"},{url:"assets/js/page-PageConfiguration--493c56dc.30253b78.js",revision:"8cecd93a6621863252b6a530ac822463"},{url:"assets/js/page-Pageinformation--6abfca0a.824d43d6.js",revision:"b4d8b164d5a919915409a695583fc716"},{url:"assets/js/page-People--f94822c8.4e18b90b.js",revision:"a93df9b2251a403dfde93276f1e14c0c"},{url:"assets/js/page-photo-swipe--34ea45d2.00bd5220.js",revision:"1fa090438a5292b32bed6683decbcd3c"},{url:"assets/js/page-photo-swipe--7be1a0aa.4f6e1c26.js",revision:"78090f189ee661246c85ac79f5c80598"},{url:"assets/js/page-Place--32291f32.9713dd1d.js",revision:"bcb3c0b03e4effbb9431b4c7c4eddc62"},{url:"assets/js/page-PluginDescription--b08a3ace.91e22d80.js",revision:"605143335e2f198481fd04db53546da0"},{url:"assets/js/page-Plugins--1a5ef242.b1d9c57d.js",revision:"a19f7911aa7161ff3b069231be976a7a"},{url:"assets/js/page-SEOandSitemap--13a48dac.a8148210.js",revision:"cd13010eb1207a6cd52172f0bed89ba1"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.139a2633.js",revision:"6b24cb62aa75d14ea747e3d7d835e274"},{url:"assets/js/page-Sidebar--12800fd2.c602fd1c.js",revision:"78b463e8fe8e6c9c155ceb1d4e599abb"},{url:"assets/js/page-stylusconfiguration--189ec968.ffa851dc.js",revision:"78a1fb177f19bf8c47a4dd2894420baf"},{url:"assets/js/page-stylus配置--6796cdf2.5bf67106.js",revision:"fa971b2fc52346a00c3f3931cad9e3f9"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.36b4f8c1.js",revision:"c4849d9755575d9d77d0398275152acd"},{url:"assets/js/page-Symbol--0b92fe0a.e8af495a.js",revision:"f8d3617f3cd0e184bfff228b0a004f99"},{url:"assets/js/page-TexSupport--f897e69c.d515a8df.js",revision:"cb374093a27ef51d4c037f79d5d424dd"},{url:"assets/js/page-Tex语法支持--64cb5e50.b7d6da96.js",revision:"8068acd5c3206acf70629d8b2e53a9a7"},{url:"assets/js/page-ThemeConfig--085c2edc.c0941986.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.77e958b9.js",revision:"4a98385b5c7efec2ce32d87c0a612433"},{url:"assets/js/page-TSsupport--165630b2.68006dbc.js",revision:"71cb0eb37404dd26b9d43f06535676f5"},{url:"assets/js/page-TS支持--09728ac8.aa87e537.js",revision:"1009cde212efa4fe53891055a54775ab"},{url:"assets/js/page-Vuepress--4a71114e.06ddbf04.js",revision:"ff1824518bcceda1d9b73998a1123b68"},{url:"assets/js/page-vuepress-plugin-container--31498112.57de2662.js",revision:"99268cfe2790d7ca16d1e9e841145780"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.7495dd9b.js",revision:"1cd36b54ae73d7edd80af3bc48daba4c"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.431bdd63.js",revision:"6048b8ad1cf433846ce151ef18670e29"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.49b9830b.js",revision:"f4ce08a3743147ee3660668bf59d3e47"},{url:"assets/js/page-vuepress-theme-hope--776d8369.8d2918cd.js",revision:"81a8287d7f37d23555451af7e0ff7b98"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.acdb7dbf.js",revision:"df8c971477e42853865e0347d4149980"},{url:"assets/js/page-VuepressCases--27d200c8.cd678133.js",revision:"ccb8452983b65835c4e5eb2405881afb"},{url:"assets/js/page-Vuepresscommands--7e89705c.6242d4f6.js",revision:"7173956edd7ebb34dbdfba15b15ba1a7"},{url:"assets/js/page-Vuepress案例--082972f2.3e657685.js",revision:"ee218ddda8a14082b4a7d9816229a768"},{url:"assets/js/page-上下角标--895c91b8.d4d5202b.js",revision:"a7a1dce0cdb93d733875880296701b92"},{url:"assets/js/page-主题配置--1120a0ce.b01ffb70.js",revision:"0631f89447a73e06a3a76eff64fab513"},{url:"assets/js/page-主题配置--1a859dfc.14b16b67.js",revision:"bd4d4ce2fe1c62ae64dc75ddb62577f7"},{url:"assets/js/page-人物--2182769c.b617682b.js",revision:"0cef00bf90fb328c734cb5f89e31e2df"},{url:"assets/js/page-介绍--d4910962.814d0f34.js",revision:"737d97f82088ea7c671fb870dfb208ff"},{url:"assets/js/page-侧边栏--2fa1ea2c.41d53915.js",revision:"9f88cf13dfe6340ecf00de5f61ea44b8"},{url:"assets/js/page-加密功能--181bdc9c.653b1e8c.js",revision:"b53634d53a27bb6a93f0fd3d9bc151a3"},{url:"assets/js/page-博客相关--17c260a2.6f507c22.js",revision:"0621125f74ffd4afedf523a45eba7b8d"},{url:"assets/js/page-博客首页--64265752.7f6e441e.js",revision:"da7938965dbdeb3f1d20498706fecc9c"},{url:"assets/js/page-地点--951cdc00.eee0d34f.js",revision:"99866306db0ef69572f54b3a9654cfd0"},{url:"assets/js/page-基础知识--770cb96b.b5e13e53.js",revision:"d90580c149c1cb8d05ca7cbe38d9763e"},{url:"assets/js/page-安装使用--0ab466d2.bf6e8337.js",revision:"181ddad60b8886b5b2624ad0e4f68acb"},{url:"assets/js/page-对象--16031ab2.1a6a6d27.js",revision:"b2fea7b101e93fa19ac5e5e2e4501397"},{url:"assets/js/page-导航栏--c7bf87dc.0e70fa69.js",revision:"39ce857a3d135218d06d2be978d36b37"},{url:"assets/js/page-布局--12bd4f0e.10672a41.js",revision:"080a15181eab14cff12c99efd2323ffd"},{url:"assets/js/page-常见问题--2b571e9b.dea28e13.js",revision:"b2cdaa6d02ee3f700e7554a9a7c906b6"},{url:"assets/js/page-插件--adbf415c.1be7941b.js",revision:"5c3d543a076be4483df26ce55945473c"},{url:"assets/js/page-插件说明--137c6c07.64e978cf.js",revision:"7692e9357a3f45d4b91529a1cbb75197"},{url:"assets/js/page-文件结构介绍--665a4f1c.e1481b20.js",revision:"3519c728fc4e6d953280efee4c105845"},{url:"assets/js/page-新增特性--5136c541.6cfcf3f7.js",revision:"df383f50803fac21aaa371abb7e0d2f0"},{url:"assets/js/page-新增组件--1d138c72.4caceb4f.js",revision:"743fcaea8a2792cf223635e46bd4a2a3"},{url:"assets/js/page-标记--6b1f341c.24ac2dfb.js",revision:"87553e0c1c2522065fa99a0264d54e6a"},{url:"assets/js/page-流程图支持--7ce6d974.245df2e7.js",revision:"1976f63d4359f162086bbda5ff7560cd"},{url:"assets/js/page-深色模式与主题色--e23e731c.54d33cdc.js",revision:"d1d0389a38a33ed298a12cb5e6385bbb"},{url:"assets/js/page-符号--a9259c5c.b3be3267.js",revision:"9aa6510679f2c5a0a88d75f785a0a4af"},{url:"assets/js/page-脚注--0c733e52.554eacee.js",revision:"a7d40e62fe55ab65de08b2334e8cd0d1"},{url:"assets/js/page-自定义对齐--4f21aa5c.4fc6f3ee.js",revision:"57d0500a7069c3f9c63ece842a2f1910"},{url:"assets/js/page-自然--749fb09c.5c54f6d7.js",revision:"e1de69301208417366810f86bf6513bc"},{url:"assets/js/page-评论功能--5bb6671c.6f9f11ab.js",revision:"2ac00d561dc742db29874c3a0f97b8c4"},{url:"assets/js/page-配置文档--35a0a7d9.0cf4c0df.js",revision:"2fd4af577d4aeb78fb9feb1bec2ef640"},{url:"assets/js/page-页面--af17b59c.8ecdf6dc.js",revision:"d72e4f0b6fd7c660b76e2b651ec4d57d"},{url:"assets/js/page-页面信息--71efd5d2.9675983f.js",revision:"16529e9d9a8afac07c7acc0e56e9667f"},{url:"assets/js/page-页面配置--0aacc152.9b85668f.js",revision:"0ead46035eae54fc3497fea5dd374717"},{url:"assets/js/page-项目指令--9f3f316c.ceec52aa.js",revision:"ddb5dd4114dc80d1f4e0f53856e3aac0"},{url:"assets/js/page-项目案例--f328658e.f6677ed5.js",revision:"d7bf3c6ee6f111563228a4a01f88d0f4"},{url:"assets/js/page-首页--5834599c.eef91513.js",revision:"84547068a4f045850e8f0ebab2f4a5f0"},{url:"assets/js/vendors~docsearch.c815669b.js",revision:"d53823faa8c3c6fa28aa67a03f94337a"},{url:"assets/js/vendors~flowchart.b4792c47.js",revision:"04aef69302a73c3971062bec38134195"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e772bad8.js",revision:"4015238a404d5dd9889968f137264e4f"},{url:"assets/js/vendors~layout-Layout.8be1d9b1.js",revision:"61bdf43520ef65c98797733395d96f04"},{url:"basic/index.html",revision:"abddecda830ea1a0c2624e2fbe7f1529"},{url:"basic/markdown/demo/index.html",revision:"4f70da88ae2887a4b237d71b47b5e38a"},{url:"basic/markdown/emoji/index.html",revision:"fa4eb32ce8f1f076e412743afcba7f0d"},{url:"basic/markdown/emoji/nature/index.html",revision:"885f5da792774961af31f765ee06871a"},{url:"basic/markdown/emoji/object/index.html",revision:"f0ad07ea12d8efe794b69336847ec41f"},{url:"basic/markdown/emoji/people/index.html",revision:"f3cdc6dabb93c8ca471a7009677206d4"},{url:"basic/markdown/emoji/place/index.html",revision:"dec6614be74dcec5095f615ea9f4c47b"},{url:"basic/markdown/emoji/symbol/index.html",revision:"e6bc2916d6dd94919b1bfc8762aaff47"},{url:"basic/markdown/index.html",revision:"fb4d95f6862d49adc398ffe09bbe6224"},{url:"basic/vuepress/case/index.html",revision:"fcf7b60533389ce03a5137d7ac00943a"},{url:"basic/vuepress/command/index.html",revision:"31e1c538b32a1c0685bd1fd5d4b931d7"},{url:"basic/vuepress/file/index.html",revision:"b80a34ba977a1c6275da071796205ac1"},{url:"basic/vuepress/index.html",revision:"5a1b85ee5d3cfbd1ae1df116a98ac113"},{url:"basic/vuepress/plugin/index.html",revision:"08b323ea9c3c5ed365383d85afe30173"},{url:"basic/vuepress/theme/index.html",revision:"2aa553f8f76e82695b204a3c92fe10f6"},{url:"category/basic/index.html",revision:"ff4fbc63868b4214e04e5d6000e661ec"},{url:"category/basic/page/2/index.html",revision:"c9ba846b65f9a4ec984dbf6f531efea5"},{url:"category/basic/page/3/index.html",revision:"2333209f9bfd066cda7046e76e306445"},{url:"category/config/index.html",revision:"996d6214430a374b94ac158c5a6b22ab"},{url:"category/config/page/2/index.html",revision:"0a4358cb0c1105db5365f7aaa15fcff9"},{url:"category/config/page/3/index.html",revision:"861a2eaaacddbeb4359ee74a7066ba52"},{url:"category/demo/index.html",revision:"1a613fbadc221eeaba4f7ac959168d68"},{url:"category/FAQ/index.html",revision:"0216540086528d35aeafa65eafb49ba5"},{url:"category/feature/index.html",revision:"bc8b59231ebf867c57e912b5716f94a0"},{url:"category/feature/page/2/index.html",revision:"97261e1f94612464c4eaf8c9c108e749"},{url:"category/index.html",revision:"9fe5ae2a7e4ab35cca04c4a28302e43f"},{url:"category/instruction/index.html",revision:"b8f2360b8eb183e4f6f11424b288d9e9"},{url:"category/layout/index.html",revision:"a1d259912a378f96fe4df98f78e47541"},{url:"category/layout/page/2/index.html",revision:"75fbac7587cb3d91b34e52f64ad2e117"},{url:"category/markdown/index.html",revision:"cc071e789a3eb572c6d5bf6f94c23b34"},{url:"config/index.html",revision:"10bf27f4a35579ce86c70a6e8f2c35ac"},{url:"config/page/index.html",revision:"35fd4190c81138ec8392b04e03586a88"},{url:"config/plugin/container/index.html",revision:"4046d6d9f4aacba9fe79419609a4ad8f"},{url:"config/plugin/copyright/index.html",revision:"6c301906b5dc808583993819397c766b"},{url:"config/plugin/index.html",revision:"bf87ab4415781997e2744d3313edb9e0"},{url:"config/plugin/last-update/index.html",revision:"030147bbb603bbeb604ec5e976bec3b5"},{url:"config/plugin/photo-swipe/index.html",revision:"a20521a6ab74348e5e6a648713ff89ba"},{url:"config/plugin/pwa/index.html",revision:"dc5769af3157946e398c0c26199604c3"},{url:"config/plugin/reading-time/index.html",revision:"d3e3f7158a44f7363ee4cc31da39ab8c"},{url:"config/plugin/seo/index.html",revision:"9e98df368e3864dd065ee6e29e660d9b"},{url:"config/plugin/sitemap/index.html",revision:"8ae6c580ea9ed5b0a107bb70dcea1d25"},{url:"config/stylus/index.html",revision:"5ca82681eb1187aa585985a62990e243"},{url:"config/themeConfig/index.html",revision:"d9534413a5cf54a83514655b920740ce"},{url:"demo/index.html",revision:"3496db62c4eb436b246cb2c05f4bbd6e"},{url:"en/basic/index.html",revision:"d26fd3e9865e839873b45130bc4d6b41"},{url:"en/basic/markdown/demo/index.html",revision:"4a438621eac116bc49857fa60353f8bf"},{url:"en/basic/markdown/emoji/index.html",revision:"6200ca065f3b6f9851d2594df1958217"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"cd9faea09a07d599309e456fcb7cfa60"},{url:"en/basic/markdown/emoji/object/index.html",revision:"020240c046fe72df4a81e24d0924ae51"},{url:"en/basic/markdown/emoji/people/index.html",revision:"68c21e403aee2f59682b00e6d7c53ccf"},{url:"en/basic/markdown/emoji/place/index.html",revision:"3ef5eb5dfb7a69fa8232c2d5ccf981e3"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"8ae2bdf8a908f1da5b08602e0a7ee2d4"},{url:"en/basic/markdown/index.html",revision:"970c4fa0c342a9e62a4d075fba3f08c4"},{url:"en/basic/vuepress/case/index.html",revision:"6268d91458100ac5cbab511a3498b83c"},{url:"en/basic/vuepress/command/index.html",revision:"d3f05883e0068dc1538bd2c43c863ffc"},{url:"en/basic/vuepress/file/index.html",revision:"faac884e341b6eadc7af53f9845a44d6"},{url:"en/basic/vuepress/index.html",revision:"699fef9a0433d54076f27bf7d230bf41"},{url:"en/basic/vuepress/plugin/index.html",revision:"c555da9e1015364be14401252cd4e555"},{url:"en/basic/vuepress/theme/index.html",revision:"2a5ffeb7bf6501a5d1497bc08b93e525"},{url:"en/config/index.html",revision:"1fa7c80dec774f1bfdb75e24cae47810"},{url:"en/config/page/index.html",revision:"21582e413e57e7113eb9c9b709c5d34d"},{url:"en/config/plugin/container/index.html",revision:"a5818944b43c64f19af161df8d6ba3df"},{url:"en/config/plugin/copyright/index.html",revision:"d7378960dbf9c3c374a0e6c1df6d75e9"},{url:"en/config/plugin/index.html",revision:"04d2f6ed2489ae22535cb7d4508d14c2"},{url:"en/config/plugin/last-update/index.html",revision:"b9c6fb32c892745422f71a6440a4b57f"},{url:"en/config/plugin/photo-swipe/index.html",revision:"3f9d1920217861ad5b8f83807c73259e"},{url:"en/config/plugin/pwa/index.html",revision:"f519901d200a6437794db0653fff4f60"},{url:"en/config/plugin/reading-time/index.html",revision:"0829ce3d7042b11fc9cfc2041fcfcaf7"},{url:"en/config/plugin/seo/index.html",revision:"349ac69c2f0244397d8ab7dbee4ef265"},{url:"en/config/plugin/sitemap/index.html",revision:"af39aecf136446580836f00aeec36595"},{url:"en/config/stylus/index.html",revision:"bcbbebc78cac20746be60ee2857adab0"},{url:"en/config/themeConfig/index.html",revision:"4610405dfa30e32501b51b313aeb6008"},{url:"en/demo/index.html",revision:"3e4d3493c9965cd5bbf4f2dd106864e0"},{url:"en/FAQ/index.html",revision:"1dd9129c5f84f7f63c380ada549bf544"},{url:"en/guide/feature/blog/index.html",revision:"0fcf49e7831b71e4dd6a9bf669319811"},{url:"en/guide/feature/comment/index.html",revision:"7c6a95036b5406e63cdb20844c8fc1d8"},{url:"en/guide/feature/component/index.html",revision:"273c550535eb2f228bc43bdd625e45e9"},{url:"en/guide/feature/encrypt/index.html",revision:"d90993727f7d0a5d5373172eda66e72a"},{url:"en/guide/feature/index.html",revision:"e071465afdeef26ade4266d833b989e2"},{url:"en/guide/feature/markdown/align/index.html",revision:"fd6a0802e751abecb008972ff6a99d12"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"9f96533327de1e21a499783057a769c9"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"7a028ad9a4224a4ceb669c773de02cbd"},{url:"en/guide/feature/markdown/index.html",revision:"60b2403e1260a24c56d5989de21ac6ed"},{url:"en/guide/feature/markdown/mark/index.html",revision:"43db13fd974481b6c3e105bb05107dd3"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"8e2ffcda7c3395804c71fca65d4c93be"},{url:"en/guide/feature/markdown/tex/index.html",revision:"5e7646ce82074ffaa9b51b0461723af3"},{url:"en/guide/feature/page-info/index.html",revision:"d9325a778628a38e7bee76dd270971f7"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"756e1f3401ae0d42ac3f7f887feaeb4a"},{url:"en/guide/feature/theme/index.html",revision:"733bdda0792f04bcb1cf496170e86d9e"},{url:"en/guide/feature/typescript/index.html",revision:"8e6df1b7fe9e2231d5f72423a6a89718"},{url:"en/guide/index.html",revision:"9afa2e0ed49f5c899727009ea4549ab7"},{url:"en/guide/install/index.html",revision:"219abe44a301c76c70f86f5faf6b655a"},{url:"en/guide/layout/blog/index.html",revision:"3596e48f7a193d54fe33da3299eacf8f"},{url:"en/guide/layout/home/index.html",revision:"538af6d2edd4fdd360dbacff83dc4586"},{url:"en/guide/layout/index.html",revision:"75cc41ddc0cdfd9faada43f19621db04"},{url:"en/guide/layout/navbar/index.html",revision:"0dbc3e12e2a3265790cdd0d866af092d"},{url:"en/guide/layout/page/index.html",revision:"35b21ad669e008eabc9bcd18dec5b8e6"},{url:"en/guide/layout/sidebar/index.html",revision:"a64fd38802005056563fd6b8ab73d4bd"},{url:"en/index.html",revision:"dc3da12cb3c2594e1ea44cf4d8d9841b"},{url:"FAQ/index.html",revision:"494b932d45843635c6d367eb1174c861"},{url:"guide/feature/blog/index.html",revision:"6f98c4050de21049a48383f5f22639fe"},{url:"guide/feature/comment/index.html",revision:"84fed00968f3e7e439e08664ecdfc6a2"},{url:"guide/feature/component/index.html",revision:"16fab840e36e94d0dccc9b137f7667c3"},{url:"guide/feature/encrypt/index.html",revision:"60c106fe68d6f41c8b5e3c4b45991779"},{url:"guide/feature/index.html",revision:"247d63543882923c2f94abbaae3f59ac"},{url:"guide/feature/markdown/align/index.html",revision:"290ab865e0aad5199f04765e6e2d8f72"},{url:"guide/feature/markdown/flowchart/index.html",revision:"28199bfc8a3cb7d704d537dfe6ad0f8f"},{url:"guide/feature/markdown/footnote/index.html",revision:"f8896646b95042dbd9e40db1b2062aac"},{url:"guide/feature/markdown/index.html",revision:"07b7cd990e0aa0cfafc6c958ff6d3bd2"},{url:"guide/feature/markdown/mark/index.html",revision:"957c17cc7c7af0b3139955eb100ec3e4"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"819c01217912abf8f7d3b9540ad36abd"},{url:"guide/feature/markdown/tex/index.html",revision:"be578f26710c4bc15f05606d25646aaf"},{url:"guide/feature/page-info/index.html",revision:"29098e7a06b6b0318f360fa1ba65f1b3"},{url:"guide/feature/seoAndSitemap/index.html",revision:"c8f0971c8d97c2eab7c3ad218e3c9deb"},{url:"guide/feature/theme/index.html",revision:"7698acc2dcc66fa8fe5b720b9374a284"},{url:"guide/feature/typescript/index.html",revision:"53186e5dc95cb0e54b763821d15d678a"},{url:"guide/index.html",revision:"16d3d0133e6ff929bc87997ebd5c731c"},{url:"guide/install/index.html",revision:"ea00836dc91683fca9889777c4a7e741"},{url:"guide/layout/blog/index.html",revision:"3eb786dfe75b40f1b31a3430f7f81419"},{url:"guide/layout/home/index.html",revision:"ea89590a4c7755fb80bf9b59b8f823df"},{url:"guide/layout/index.html",revision:"a4c356dc72f4a8668924c9ad28131b3e"},{url:"guide/layout/navbar/index.html",revision:"debad45a2869372001376395005370ce"},{url:"guide/layout/page/index.html",revision:"535e62e864af4351b0aefbc9ae7f8f6a"},{url:"guide/layout/sidebar/index.html",revision:"7d9172c9ac88fb9398c31799e66a7386"},{url:"index.html",revision:"6ae2dad331f3116c675e2a4360dbac34"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"e69f9912e17c940b530673af6a72f453"},{url:"tag/comment/index.html",revision:"4af1c942d91c17cc01885fdd162bc842"},{url:"tag/components/index.html",revision:"131a88f1ef3edb07cdf76c51e6cee8b0"},{url:"tag/config/index.html",revision:"f603b56df529b529ec00f053f3830d38"},{url:"tag/config/page/2/index.html",revision:"cedbc5e70d42905d87ffa7b1f2c3515a"},{url:"tag/config/page/3/index.html",revision:"4659e64809748d6a9bdbec85cd95b30c"},{url:"tag/emoji/index.html",revision:"f8035c518b5c0e7d6498c9707e7564b6"},{url:"tag/emoji/page/2/index.html",revision:"39b51003a21b3b817ecebd1b481957d8"},{url:"tag/encrypt/index.html",revision:"16bfbe2fe1a5f40341da528bbcb7f24c"},{url:"tag/feature/index.html",revision:"40def909848877117e351e5a4a0b868c"},{url:"tag/feature/page/2/index.html",revision:"694b5933c8f9f39a6aaa428f58c9af4c"},{url:"tag/frontmatter/index.html",revision:"1c3eb758bd1e8732d27b018cc2bf3d42"},{url:"tag/function/index.html",revision:"715b57d00f2a7ceb71ae8c87ecc20898"},{url:"tag/function/page/2/index.html",revision:"083fa36270ea87eb69973bcd3f5d8afc"},{url:"tag/home/index.html",revision:"6d4323a4841e2f5164b9b3a833b7eec8"},{url:"tag/index.html",revision:"3865893f41a1203e8247073e9f5fdd18"},{url:"tag/intro/index.html",revision:"2b00efb6fb4f08d4887e6cfb03b33e8a"},{url:"tag/layout/index.html",revision:"2b3f56ff820c99eb5a83d8280fea5919"},{url:"tag/layout/page/2/index.html",revision:"092af89da8bb09a3a15c39c9dc0582b7"},{url:"tag/markdown/index.html",revision:"d67e61c1672233cbdb231419f84f5b8a"},{url:"tag/markdown/page/2/index.html",revision:"c03ad08a601f6525ef02e7a40f261eef"},{url:"tag/markdown/page/3/index.html",revision:"a40406840e64b44774b12317c138eb9f"},{url:"tag/navbar/index.html",revision:"afe09b15d6f3e463c2c4d52cba22dede"},{url:"tag/page-info/index.html",revision:"e8652b781ee7f071de23cf68173c8f21"},{url:"tag/plugin/index.html",revision:"6c43819b91283f9dcbf706ff18fdc7f3"},{url:"tag/plugin/page/2/index.html",revision:"45e5204702e5965b46f9bdc998b527e1"},{url:"tag/seo/index.html",revision:"49b51f094c7684cdbb476b3e633987f4"},{url:"tag/sidebar/index.html",revision:"b1a986a18ade44538894607a18886805"},{url:"tag/sitemap/index.html",revision:"1b1a4dd2b8987848205ef2a0ee3285a0"},{url:"tag/style/index.html",revision:"9c440d9e8dac89bb5a3ebe629b68c396"},{url:"tag/themeConfig/index.html",revision:"8516932b6d336aec0ff2be5fcceac7d9"},{url:"tag/typescript/index.html",revision:"8a830433a3a28b2a7cb68c91824c0058"},{url:"tag/vuepress/index.html",revision:"2556bbede1df76a7df06e66b5178ff42"},{url:"tag/vuepress/page/2/index.html",revision:"4e2ca4d82ded3e128faccbee019e9f9c"},{url:"timeline/index.html",revision:"1c35625e057992889a86633d980d04ab"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
