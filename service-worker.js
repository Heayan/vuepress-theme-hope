if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"2b2cb1cf36ee958d49b2c80306a54c4a"},{url:"article/index.html",revision:"37b1ab4f0e4adff9eb6bea5e3d0130b1"},{url:"assets/css/0.styles.7a486072.css",revision:"9ba8f0beadffd33a737bdc90c247cad1"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.9a633287.png",revision:"9a633287cd74c5446a945458e904868f"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.30dc2bc0.png",revision:"30dc2bc01f51b2ead2def19517a298e4"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.b09eae23.png",revision:"b09eae237bfb38394da644b422dd66cf"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.ab88bd60.png",revision:"ab88bd60aba3206fcfd93c7182f0fffb"},{url:"assets/img/home.fbb29418.png",revision:"fbb29418c5c550a0bccaf6e4a62d55c3"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/120.e69edf41.js",revision:"6cecd076c25c46f0703fade0cc50aff4"},{url:"assets/js/app.b05f346f.js",revision:"bd8816d55721c9374d868e8223a6ce8d"},{url:"assets/js/layout-Blog.bd03fc15.js",revision:"c8220c6bbfc3c6fd3671edf9c807e0cc"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.f3d221ba.js",revision:"c71b16802c481a62005d12e0d9925596"},{url:"assets/js/layout-Layout.234dd35c.js",revision:"93e3f8b3a1f6dfa98cc4b2bbb2760d35"},{url:"assets/js/layout-NotFound.70ae315b.js",revision:"3bca02e2bda889b102fffef34c9084ea"},{url:"assets/js/page-@mr-hopelast-update--1104de32.31ae5bb6.js",revision:"f657ac6d5ddc004dc8b4554adccc5ecd"},{url:"assets/js/page-@mr-hopelast-update--ebefb430.085f085a.js",revision:"4f0570fe7b8284e752cf506e3278f8c3"},{url:"assets/js/page-@mr-hopeplugin-pwa--1c9738b4.c09e788c.js",revision:"040076733854c81ec97cb524ec1ec1a1"},{url:"assets/js/page-@mr-hopepwa--051692f2.f73fcba0.js",revision:"e995cf22ed45f60d1993752137c5c054"},{url:"assets/js/page-@mr-hopereading-time--36317372.909e379b.js",revision:"374ccfa2e4cb6a1e3e0ab6e5d397faea"},{url:"assets/js/page-@mr-hopereading-time--36b7a178.cc83d4c0.js",revision:"b7fba69d9b78ee293a99e004732c7c44"},{url:"assets/js/page-@mr-hopeseo--44db09a4.a266f5d0.js",revision:"2412168ab25d6c606382cb21d14b6249"},{url:"assets/js/page-@mr-hopeseo--4c19db12.ad9353b0.js",revision:"1f31b367e823e65e8f622557412eb7dc"},{url:"assets/js/page-@mr-hopesitemap--4bd3dd04.c479d3ac.js",revision:"240ce36e0771ec767b4bb6dd6dec450a"},{url:"assets/js/page-@mr-hopesitemap--7a219d12.9d364e53.js",revision:"6ee100545450c3383fb03c7ae452bbc3"},{url:"assets/js/page-AboutVuepress--5d12de02.19fc8275.js",revision:"21dbea1f1262b552d71e9754f4568d2a"},{url:"assets/js/page-Basic--29b12659.59dea662.js",revision:"84251e883316b813fc16657fb08c8354"},{url:"assets/js/page-Bloghomepage--d988383c.f2a703ad.js",revision:"00b3ef1543de97532c377c56f2634aae"},{url:"assets/js/page-Blogrelated--7c1e4552.09d2affb.js",revision:"6673d1ae97f5534df30cc5623e4dbe08"},{url:"assets/js/page-CommentFunction--6884a164.5e0b4c46.js",revision:"da3998268c00ffd784f4e71b7b10a31a"},{url:"assets/js/page-Commonproblems--87e54bce.e5963d7b.js",revision:"7eab7710a4be356506aec70baff945fa"},{url:"assets/js/page-ConfigDocs--2082c612.60a39be0.js",revision:"fd1658f20a072d0bccc10896d85ed6da"},{url:"assets/js/page-Customalignment--df6a559c.c74226b0.js",revision:"333327f346e0985e8e7271cd32c9bf9b"},{url:"assets/js/page-DarkmodeandThemecolor--57fce360.440d5932.js",revision:"4b8fe513996e997d4fedc80bf20c7b86"},{url:"assets/js/page-Demos--cac80116.6e376fb0.js",revision:"d7d6221eb7d5066b2d2e201510c586fa"},{url:"assets/js/page-EmojiList--b946d226.98b3c120.js",revision:"554ad343eac5d0ac5361f614a5425be1"},{url:"assets/js/page-Emoji列表--41bb29b9.20a1277a.js",revision:"ce8df72356e9bbd4343b9274444226c1"},{url:"assets/js/page-Encryptionfunction--21c8c5d8.17ed439c.js",revision:"5d6846d51775cbf6e6a90bbd683421a1"},{url:"assets/js/page-FileStructure--5dff5230.f95e6edc.js",revision:"edd23aa32e0c312e11203f4d70ef5507"},{url:"assets/js/page-Flowchart--6426e412.b60767b7.js",revision:"2207f3696514ac3953214c02949d55ac"},{url:"assets/js/page-Footnote--3a89d162.53c74ad5.js",revision:"51734bd9ebadbd472dada69c226fe87c"},{url:"assets/js/page-HomePage--37b81ca8.427efae2.js",revision:"b6089cce2e7853ec693b32462c1f7702"},{url:"assets/js/page-InstallUsage--5dafe67a.5e7a34f8.js",revision:"fa3c62af17e65ae34fa38ad991e574f6"},{url:"assets/js/page-Introduction--0b048d19.16fc72d0.js",revision:"876914c9c27a088788027cd2ff6ddc40"},{url:"assets/js/page-Layout--655201fe.06d727cd.js",revision:"da2cea6e52bd312c9f3ca0e153c759e2"},{url:"assets/js/page-MarkdownDEMO--ab10bb74.a83cdcfe.js",revision:"e606877966ced86d624dd4bfd2195097"},{url:"assets/js/page-MarkdownEnhance--ed59a9f6.98826abe.js",revision:"50a7e2460eaca7d21a4487f59f857d6a"},{url:"assets/js/page-MarkdownIntroduction--25c54f9b.2acc5e57.js",revision:"316aabf398c5a83745c39fe86a20aa33"},{url:"assets/js/page-Markdown介绍--270989ce.af76cb85.js",revision:"512dcf61ebf838085c98b0785f75593d"},{url:"assets/js/page-Markdown增强--ad9dba8e.d106c0cd.js",revision:"96c2bc05c41ac01a5d8701068ed0b2eb"},{url:"assets/js/page-Markdown示例--c3e1bfdc.5b28e8a6.js",revision:"a678bd1a1db6c7837450fed62a751933"},{url:"assets/js/page-Markup--4f1121f0.36231acd.js",revision:"03caba63857daee9c4493dd0531e12f6"},{url:"assets/js/page-Nature--5c9d3e6c.6cc2e590.js",revision:"7792c6b4ed8d30c7420e7325297e5810"},{url:"assets/js/page-NavBar--262632f4.23703188.js",revision:"214d25879da0754031f645421d82db40"},{url:"assets/js/page-NewComponent--2edd3b68.5a089a4f.js",revision:"595a14f0c1ae525a2f9356b843996445"},{url:"assets/js/page-Newfeature--3e66b879.c605a7cd.js",revision:"2ffd78ed36cf0cee0a433ea49ef18b36"},{url:"assets/js/page-Object--6d31953c.0cc9afab.js",revision:"09f716ff9a84f62379dd8268c63f8590"},{url:"assets/js/page-Page--26692570.002f7b29.js",revision:"a06ff2240f5a00866ca145beacd77453"},{url:"assets/js/page-PageConfiguration--493c56dc.9271ec1e.js",revision:"c792d3d571341314146e67fd1eb0ca7a"},{url:"assets/js/page-Pageinformation--6abfca0a.d7a8f51e.js",revision:"b4d8b164d5a919915409a695583fc716"},{url:"assets/js/page-People--f94822c8.eadb8466.js",revision:"a93df9b2251a403dfde93276f1e14c0c"},{url:"assets/js/page-photo-swipe--34ea45d2.39e262a1.js",revision:"1fa090438a5292b32bed6683decbcd3c"},{url:"assets/js/page-photo-swipe--7be1a0aa.33a7d3ea.js",revision:"78090f189ee661246c85ac79f5c80598"},{url:"assets/js/page-Place--32291f32.2814cb86.js",revision:"bcb3c0b03e4effbb9431b4c7c4eddc62"},{url:"assets/js/page-PluginDescription--b08a3ace.6a2eafbf.js",revision:"d30058c564999778492b94d5b43df439"},{url:"assets/js/page-Plugins--1a5ef242.21aaa49c.js",revision:"a19f7911aa7161ff3b069231be976a7a"},{url:"assets/js/page-SEOandSitemap--13a48dac.40513469.js",revision:"cd13010eb1207a6cd52172f0bed89ba1"},{url:"assets/js/page-SEO和Sitemap--5934b3b2.6b21ea13.js",revision:"501814510518541b33b1ee2311075d84"},{url:"assets/js/page-Sidebar--12800fd2.21b6cbe0.js",revision:"78b463e8fe8e6c9c155ceb1d4e599abb"},{url:"assets/js/page-stylusconfiguration--189ec968.c5b40e81.js",revision:"01d2cad4c0c341e128381a3dede77a4b"},{url:"assets/js/page-stylus配置--6796cdf2.29388386.js",revision:"3e6b51abe98601c20b82ab815960389c"},{url:"assets/js/page-SuperscriptandSubscript--d7f5f81c.a91648d7.js",revision:"c4849d9755575d9d77d0398275152acd"},{url:"assets/js/page-Symbol--0b92fe0a.2152b5d7.js",revision:"f8d3617f3cd0e184bfff228b0a004f99"},{url:"assets/js/page-TexSupport--f897e69c.b28786b4.js",revision:"cb374093a27ef51d4c037f79d5d424dd"},{url:"assets/js/page-Tex语法支持--64cb5e50.c09158dd.js",revision:"ba791d6b919084f74f39c4beab85229a"},{url:"assets/js/page-ThemeConfig--085c2edc.56b6b6a1.js",revision:"27f8c092de0aa1922c868c2fc56493bb"},{url:"assets/js/page-ThemeConfig--4715c95c.aa67e495.js",revision:"4a98385b5c7efec2ce32d87c0a612433"},{url:"assets/js/page-TSsupport--165630b2.acb7a31a.js",revision:"71cb0eb37404dd26b9d43f06535676f5"},{url:"assets/js/page-TS支持--09728ac8.1a4262b3.js",revision:"3bb1a6ae861af5059a1929cb74fd9c29"},{url:"assets/js/page-Vuepress--4a71114e.62f10b4b.js",revision:"ff1824518bcceda1d9b73998a1123b68"},{url:"assets/js/page-vuepress-plugin-container--31498112.5702a891.js",revision:"99268cfe2790d7ca16d1e9e841145780"},{url:"assets/js/page-vuepress-plugin-container--f45c2334.2c7a538e.js",revision:"1cd36b54ae73d7edd80af3bc48daba4c"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.94bec537.js",revision:"6048b8ad1cf433846ce151ef18670e29"},{url:"assets/js/page-vuepress-plugin-copyright--dac5744c.f55a7ae7.js",revision:"f4ce08a3743147ee3660668bf59d3e47"},{url:"assets/js/page-vuepress-theme-hope--776d8369.0e4ffd34.js",revision:"1157e5d94909be48ee8d4b7137818b45"},{url:"assets/js/page-vuepress-theme-hope--7f862af9.902a2412.js",revision:"df8c971477e42853865e0347d4149980"},{url:"assets/js/page-VuepressCases--27d200c8.abc9f803.js",revision:"ccb8452983b65835c4e5eb2405881afb"},{url:"assets/js/page-Vuepresscommands--7e89705c.c84517e7.js",revision:"7173956edd7ebb34dbdfba15b15ba1a7"},{url:"assets/js/page-Vuepress案例--082972f2.1568ae27.js",revision:"ee218ddda8a14082b4a7d9816229a768"},{url:"assets/js/page-上下角标--895c91b8.e74cfa9a.js",revision:"a7a1dce0cdb93d733875880296701b92"},{url:"assets/js/page-主题配置--1120a0ce.b2ca3c88.js",revision:"0631f89447a73e06a3a76eff64fab513"},{url:"assets/js/page-主题配置--1a859dfc.0d8f835e.js",revision:"d7fb915e2a712a46659e1795684c180f"},{url:"assets/js/page-人物--2182769c.7d651216.js",revision:"0cef00bf90fb328c734cb5f89e31e2df"},{url:"assets/js/page-介绍--d4910962.1e5ad9dd.js",revision:"6b917a448c77ac4c3ce7789edd09e7ce"},{url:"assets/js/page-侧边栏--2fa1ea2c.eddaf208.js",revision:"9f88cf13dfe6340ecf00de5f61ea44b8"},{url:"assets/js/page-加密功能--181bdc9c.f2a41f03.js",revision:"b53634d53a27bb6a93f0fd3d9bc151a3"},{url:"assets/js/page-博客相关--17c260a2.a7e4a3e5.js",revision:"0621125f74ffd4afedf523a45eba7b8d"},{url:"assets/js/page-博客首页--64265752.f43fa774.js",revision:"8fcd59e7143d6e4a84dcc31c96a7f048"},{url:"assets/js/page-地点--951cdc00.e15ac083.js",revision:"99866306db0ef69572f54b3a9654cfd0"},{url:"assets/js/page-基础知识--770cb96b.e6c3c219.js",revision:"d90580c149c1cb8d05ca7cbe38d9763e"},{url:"assets/js/page-安装使用--0ab466d2.b9c40035.js",revision:"606be6f5a51db77abad8f7e43e3fe2e5"},{url:"assets/js/page-对象--16031ab2.5f63a2a2.js",revision:"b6c411db212eb787080e0312b70422d5"},{url:"assets/js/page-导航栏--c7bf87dc.a973d1f4.js",revision:"373bce2cfa99bc61afd271f12386bf67"},{url:"assets/js/page-布局--12bd4f0e.e5a53aff.js",revision:"080a15181eab14cff12c99efd2323ffd"},{url:"assets/js/page-常见问题--2b571e9b.99bc31ce.js",revision:"b2cdaa6d02ee3f700e7554a9a7c906b6"},{url:"assets/js/page-插件--adbf415c.9c90dad5.js",revision:"5c3d543a076be4483df26ce55945473c"},{url:"assets/js/page-插件说明--137c6c07.13f5d645.js",revision:"7692e9357a3f45d4b91529a1cbb75197"},{url:"assets/js/page-文件结构介绍--665a4f1c.0a0756c1.js",revision:"3519c728fc4e6d953280efee4c105845"},{url:"assets/js/page-新增特性--5136c541.746d019a.js",revision:"3b7028c36404e21f54c17b4b82757710"},{url:"assets/js/page-新增组件--1d138c72.3e1dcd54.js",revision:"743fcaea8a2792cf223635e46bd4a2a3"},{url:"assets/js/page-标记--6b1f341c.a45980b7.js",revision:"87553e0c1c2522065fa99a0264d54e6a"},{url:"assets/js/page-流程图支持--7ce6d974.83c00c5e.js",revision:"1976f63d4359f162086bbda5ff7560cd"},{url:"assets/js/page-深色模式与主题色--e23e731c.a05ea5d9.js",revision:"0b65aeca9829862a49127e8b3fd26d68"},{url:"assets/js/page-符号--a9259c5c.eba123f5.js",revision:"9aa6510679f2c5a0a88d75f785a0a4af"},{url:"assets/js/page-脚注--0c733e52.32d82ad4.js",revision:"a7d40e62fe55ab65de08b2334e8cd0d1"},{url:"assets/js/page-自定义对齐--4f21aa5c.1a2b4af5.js",revision:"57d0500a7069c3f9c63ece842a2f1910"},{url:"assets/js/page-自然--749fb09c.aa366ffa.js",revision:"4802a674dc16844e851d6565a3f3d970"},{url:"assets/js/page-评论功能--5bb6671c.e3aacbb3.js",revision:"39cb281d9bcd41fd4bd9a92593047e99"},{url:"assets/js/page-配置文档--35a0a7d9.edb6263e.js",revision:"2fd4af577d4aeb78fb9feb1bec2ef640"},{url:"assets/js/page-页面--af17b59c.ecf702f7.js",revision:"31b58f9f32e7a8308f3d0b4c58f37f49"},{url:"assets/js/page-页面信息--71efd5d2.4a8ebeca.js",revision:"cb5069d2340d2fd3aa6ca7e1d1b90ef3"},{url:"assets/js/page-页面配置--0aacc152.54ea5de3.js",revision:"254bbbfa6e283722d528bc4e5adf4932"},{url:"assets/js/page-项目指令--9f3f316c.3e466805.js",revision:"ddb5dd4114dc80d1f4e0f53856e3aac0"},{url:"assets/js/page-项目案例--f328658e.6926c259.js",revision:"4b062805caebf181ea9e57225755d44f"},{url:"assets/js/page-首页--5834599c.300adea8.js",revision:"8b1cb213be59bcbf6d4c49d306c9d9d2"},{url:"assets/js/vendors~docsearch.c815669b.js",revision:"d53823faa8c3c6fa28aa67a03f94337a"},{url:"assets/js/vendors~flowchart.5496fad0.js",revision:"3ce343ad5083fe32bb9311bdec205754"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d8ea2271.js",revision:"d038c0a18a95f48f4029f397301f0d57"},{url:"assets/js/vendors~layout-Layout.8be1d9b1.js",revision:"61bdf43520ef65c98797733395d96f04"},{url:"basic/index.html",revision:"ac7954470e560f32222f4cd80da985e3"},{url:"basic/markdown/demo/index.html",revision:"5966f245b1236fa5f3b22a22f4f84d06"},{url:"basic/markdown/emoji/index.html",revision:"1d1fa0e54517754da90f4dc3a0d3a392"},{url:"basic/markdown/emoji/nature/index.html",revision:"5a4e982ec2734da318efcd34e44442ed"},{url:"basic/markdown/emoji/object/index.html",revision:"d7d7a15a752a7110b8ef326e1d20095a"},{url:"basic/markdown/emoji/people/index.html",revision:"90b11872f62b78856c0f8978b70e329d"},{url:"basic/markdown/emoji/place/index.html",revision:"38f62abe0025221d09182248d8d7972d"},{url:"basic/markdown/emoji/symbol/index.html",revision:"25f6b6238383617c2f93028fa2bc69b2"},{url:"basic/markdown/index.html",revision:"2f82969bdb93e7f329887362b50265d7"},{url:"basic/vuepress/case/index.html",revision:"591b17f7cdbe55c386b61479aa06d172"},{url:"basic/vuepress/command/index.html",revision:"294ff96f92570a0573c44b43a75a4240"},{url:"basic/vuepress/file/index.html",revision:"f41c402152e018cd35976e5ab8943d0b"},{url:"basic/vuepress/index.html",revision:"c3f6cbb5cc11ef55fcd3cba00332d382"},{url:"basic/vuepress/plugin/index.html",revision:"00c375d1e0043143afe1e23db2867db2"},{url:"basic/vuepress/theme/index.html",revision:"4db24addebc70656b7ac3512d9229468"},{url:"category/basic/index.html",revision:"de9c67ef77769eb5d21b1472af52b874"},{url:"category/basic/page/2/index.html",revision:"dff604714e574669f2c0fae3bfc68f48"},{url:"category/basic/page/3/index.html",revision:"bf9d379910b8ecd5733bd9310508c283"},{url:"category/config/index.html",revision:"4a951c0a2a5670f239c5b673d91c13a5"},{url:"category/config/page/2/index.html",revision:"af633c3f8d36f3e3680eb1fe9ecc2947"},{url:"category/config/page/3/index.html",revision:"7f0504be56099ad50a29e13193fa14ca"},{url:"category/demo/index.html",revision:"31c6912235052399fc7db598aebe1f10"},{url:"category/FAQ/index.html",revision:"2ee8527da420187a1fccafe546b2f5c3"},{url:"category/feature/index.html",revision:"fd73eed96cde3693d8bb4b00276e59be"},{url:"category/feature/page/2/index.html",revision:"9a738c6e0da7e32d4e1d7f73a6cd62a2"},{url:"category/index.html",revision:"688cdda51661509ea06ef263b1639c07"},{url:"category/instruction/index.html",revision:"3079b1e8bf69233c11fc702ecfa0ae35"},{url:"category/layout/index.html",revision:"2b49f7bfcf310d11284b000d724830b8"},{url:"category/layout/page/2/index.html",revision:"59d1a604f0b55c5ff57630bb9eb8702e"},{url:"category/markdown/index.html",revision:"1af9092d726ee1461a3814d9aaa34f13"},{url:"config/index.html",revision:"a4bec72ac38b0ea991885e91d097c263"},{url:"config/page/index.html",revision:"0287bb2401563d6490f18cd39a5c8c96"},{url:"config/plugin/container/index.html",revision:"e1afc172b8512072f02d6371010dca6f"},{url:"config/plugin/copyright/index.html",revision:"eb8c3805b1785d9171ea279a45c728d1"},{url:"config/plugin/index.html",revision:"c006d51bfb3c9491a2156242266b4f05"},{url:"config/plugin/last-update/index.html",revision:"311e268e175e987f027cc315aae83182"},{url:"config/plugin/photo-swipe/index.html",revision:"793591108dfd33fb84287236ffc54074"},{url:"config/plugin/pwa/index.html",revision:"74aaf234573c864ba678b1ab40541495"},{url:"config/plugin/reading-time/index.html",revision:"cb0dc271e081240082a5789405e30d6c"},{url:"config/plugin/seo/index.html",revision:"cbaaba443f413a79e9c1e0f763bb6f35"},{url:"config/plugin/sitemap/index.html",revision:"b086bd8e7dad3f98f88ca883c4872dd5"},{url:"config/stylus/index.html",revision:"bd30bd4af655318acdedaf638788a92e"},{url:"config/themeConfig/index.html",revision:"8c353f76bc797932dff0d59b86b79ed8"},{url:"demo/index.html",revision:"d19d62ce34cc2c07268d5f244bfaefa2"},{url:"en/basic/index.html",revision:"5d04ca0467032e489feba666d17299f4"},{url:"en/basic/markdown/demo/index.html",revision:"0ee00973d1bf52ed2b596a0fa4a01210"},{url:"en/basic/markdown/emoji/index.html",revision:"a2833d221d700fe985fc38090844a104"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"1d96385722e2049eb2b199c7711a2f49"},{url:"en/basic/markdown/emoji/object/index.html",revision:"76d2fca5a3959bd6e3da25e6529bdabb"},{url:"en/basic/markdown/emoji/people/index.html",revision:"a4ee32e5a3f550cc14860f898c695b04"},{url:"en/basic/markdown/emoji/place/index.html",revision:"457a7faa7d944411972e6d0b4a3fcfcf"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"77e16eb4de10396963f4be25a6dc0ffe"},{url:"en/basic/markdown/index.html",revision:"1538539f8ac417d0d606a439bc5dac7d"},{url:"en/basic/vuepress/case/index.html",revision:"519baf3fc9239666c08a0e86a4a4b983"},{url:"en/basic/vuepress/command/index.html",revision:"e2b9c03e91d0d71cb87e93dc8f3bf082"},{url:"en/basic/vuepress/file/index.html",revision:"300bad17630a42bfdad54c9fbe97f99e"},{url:"en/basic/vuepress/index.html",revision:"f89480e3ca849dade2cfb9ca1c902072"},{url:"en/basic/vuepress/plugin/index.html",revision:"ccc87fd2e166fedad3cff8bf5520b5c1"},{url:"en/basic/vuepress/theme/index.html",revision:"6f51cb592aa5c3647faf5ea63b5ecefd"},{url:"en/config/index.html",revision:"02fedc5450f714e2a4e8601a99fa126c"},{url:"en/config/page/index.html",revision:"a6ec406df32fa76051da5ab20ebcb1e0"},{url:"en/config/plugin/container/index.html",revision:"0688790c5fff6e1a65f90a89596d3e3c"},{url:"en/config/plugin/copyright/index.html",revision:"c279b5451dd21ccfa4c1945cff7e39ba"},{url:"en/config/plugin/index.html",revision:"c1f3e91aa5ee0f37da68be75e4cd8497"},{url:"en/config/plugin/last-update/index.html",revision:"7dd1f3374c8406912f15a67b8ab87e7e"},{url:"en/config/plugin/photo-swipe/index.html",revision:"a9a26c38a8f8e020c0f8adaad92af832"},{url:"en/config/plugin/pwa/index.html",revision:"1a275c9e5a4c65b103ac08bf9f854325"},{url:"en/config/plugin/reading-time/index.html",revision:"3263ae9820ae17b5eed28c3bd8a31b25"},{url:"en/config/plugin/seo/index.html",revision:"32d78367e77da4dde446d1433fe72dbe"},{url:"en/config/plugin/sitemap/index.html",revision:"e1f47a10def5ef2dbf2dc4d3d35d48a1"},{url:"en/config/stylus/index.html",revision:"57c4bb4091a41072915831fd7da21f72"},{url:"en/config/themeConfig/index.html",revision:"bad6f0d9295315e0689e424b6a287631"},{url:"en/demo/index.html",revision:"0613ca24e1b581c662b8551d2c815477"},{url:"en/FAQ/index.html",revision:"557b479f12761bb89f92a5fb5b9d8936"},{url:"en/guide/feature/blog/index.html",revision:"f1b729aa3cf14e61d46d2e430c03b120"},{url:"en/guide/feature/comment/index.html",revision:"f2de24f615e0d5cf9738534b57a50e01"},{url:"en/guide/feature/component/index.html",revision:"bd2be98c0ade5667c2ff1bef4da55cf5"},{url:"en/guide/feature/encrypt/index.html",revision:"7311323e37c81138d98007327056ae73"},{url:"en/guide/feature/index.html",revision:"c36eb9c33883bebc190f0c2113c720b6"},{url:"en/guide/feature/markdown/align/index.html",revision:"31c49a809930f2a914a5efd9034b7438"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"d9cca777faef7f22a184cb8f7f9fc177"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"4bf3f78e2d24422acb60b761c55815fb"},{url:"en/guide/feature/markdown/index.html",revision:"29c5a2dc6f191921ea2872ecd6d0ff03"},{url:"en/guide/feature/markdown/mark/index.html",revision:"e1a32caecd59db2bdc4abf2b7c1ee60d"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"c1ae27ec7bcbdc05ddeb635075f5bf8e"},{url:"en/guide/feature/markdown/tex/index.html",revision:"1624c5ecc097636bf0aea3ceb965e2f9"},{url:"en/guide/feature/page-info/index.html",revision:"40aa5da5b1c8b6a62c07a606deab6512"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"8f4d6acddd8fb8922c1987ce35a6bfc7"},{url:"en/guide/feature/theme/index.html",revision:"d28841f6a439d85015dd38a3aec9af7f"},{url:"en/guide/feature/typescript/index.html",revision:"a7eb838c48c52da7e0076e9bd75476ac"},{url:"en/guide/index.html",revision:"2ed05482267a520ead44cc5ae04e536d"},{url:"en/guide/install/index.html",revision:"793f92affee97292addffbcc421206fa"},{url:"en/guide/layout/blog/index.html",revision:"597d6ebb2b74c58154af3340473b9839"},{url:"en/guide/layout/home/index.html",revision:"b10c615cbfb42971d89ddd70faa9d568"},{url:"en/guide/layout/index.html",revision:"62e458389a8394430e4e1cb6f276e4bb"},{url:"en/guide/layout/navbar/index.html",revision:"afcbdb6a933554293f0e78419f130fb0"},{url:"en/guide/layout/page/index.html",revision:"add0eb49b8ee119ad67b42b759bed1e0"},{url:"en/guide/layout/sidebar/index.html",revision:"e168566da1b054358e2eb8bc41d55532"},{url:"en/index.html",revision:"7adaa7521d175ee40eecb12b27a04c20"},{url:"FAQ/index.html",revision:"060370230e731d6750cb15a88826f031"},{url:"guide/feature/blog/index.html",revision:"57a7291bb5864378e67bdb0ff131c212"},{url:"guide/feature/comment/index.html",revision:"cbdfd8745bd34ffab79f2d1533307adc"},{url:"guide/feature/component/index.html",revision:"87912b7e8d06099cbfb2c4e5ee27f32e"},{url:"guide/feature/encrypt/index.html",revision:"529175a23492fdd345b1224f5c18108a"},{url:"guide/feature/index.html",revision:"2a47e832bf1d952bc6bb16a72fd3c838"},{url:"guide/feature/markdown/align/index.html",revision:"2b404e7970a1258ecb1138cc133b7196"},{url:"guide/feature/markdown/flowchart/index.html",revision:"596a0e6d5d05a471751e8611808035fb"},{url:"guide/feature/markdown/footnote/index.html",revision:"c1a69bfbc4406f4db93c659a9debb7f4"},{url:"guide/feature/markdown/index.html",revision:"82105ea743b3dc377640e4839d30d2d5"},{url:"guide/feature/markdown/mark/index.html",revision:"1c0504370341866202d06188c623e23f"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"4022af92c542db6e41f5f9bd0d2e72d0"},{url:"guide/feature/markdown/tex/index.html",revision:"e493211159c6138e7080682519150517"},{url:"guide/feature/page-info/index.html",revision:"b1326f091f24c851d7b7e496a19630b7"},{url:"guide/feature/seoAndSitemap/index.html",revision:"12aa84af0cc5f3260381b3d2fdd7517b"},{url:"guide/feature/theme/index.html",revision:"c5786ad37c2b1df02d3ec4ec45f943a3"},{url:"guide/feature/typescript/index.html",revision:"0746f8565ee68816ab7e85fee2f80455"},{url:"guide/index.html",revision:"62aa53d2355061eb3f3a9bb74d44ef9f"},{url:"guide/install/index.html",revision:"d613f44eb8eb3453e1a511e4736ea90f"},{url:"guide/layout/blog/index.html",revision:"cc25bdb440a970e264ba4487e578598e"},{url:"guide/layout/home/index.html",revision:"2dd63fbf861b3a05f5ba4f90f66371ca"},{url:"guide/layout/index.html",revision:"213d5becb481fc3c8726163251fa7bb6"},{url:"guide/layout/navbar/index.html",revision:"94c58c77f113838dbd4d1863d0d9349a"},{url:"guide/layout/page/index.html",revision:"d9bdf7487a51d05b6c985f14ee42f327"},{url:"guide/layout/sidebar/index.html",revision:"c56c9946d9c1ff10a3c31b5075f79de2"},{url:"index.html",revision:"4a9f113846e1a9b1cb6689fe6535f9a9"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"eb14e736604f2455704ab48ea60d87d6"},{url:"tag/comment/index.html",revision:"f8b08c897532239bf268281e8a1aa50f"},{url:"tag/components/index.html",revision:"29322a6cdc4da3640b0f4e51bf7f1ec3"},{url:"tag/config/index.html",revision:"f19df347567d9150811900a5f2956eaa"},{url:"tag/config/page/2/index.html",revision:"8b5d49d881ee2140835b9cc55185111e"},{url:"tag/config/page/3/index.html",revision:"d0f2c7ed40c591b2f179353796baedb6"},{url:"tag/emoji/index.html",revision:"353e8fa02a8ffb1482db5211e19ae156"},{url:"tag/emoji/page/2/index.html",revision:"cf9e0214ac38f680807e16094e14b44a"},{url:"tag/encrypt/index.html",revision:"dbce630102c15d6fa1e5f76e13be931f"},{url:"tag/feature/index.html",revision:"ab76c246c636fd94964f497790f5404e"},{url:"tag/feature/page/2/index.html",revision:"7830e6298071f1aed1c723805ebebdf9"},{url:"tag/frontmatter/index.html",revision:"db18037f064d8bb40a2f12b6d83d2839"},{url:"tag/function/index.html",revision:"3197a026b76b8bfa73b375a0cb72fa84"},{url:"tag/function/page/2/index.html",revision:"3438461079d7ce2a806dd57cf4ad14d8"},{url:"tag/home/index.html",revision:"3a499019a04d41dce586a16b5409e3be"},{url:"tag/index.html",revision:"5a57b113cc9d56727af4f992409a722e"},{url:"tag/intro/index.html",revision:"6c2fb15a731eabe00b5e23316344edb0"},{url:"tag/layout/index.html",revision:"9d6a35b40f66b051c157eb6f4ed2c6f5"},{url:"tag/layout/page/2/index.html",revision:"d560f0ad8e509b31c19edd8cccf8b9b1"},{url:"tag/markdown/index.html",revision:"eca6aa008c65191ed03d63a12e82e271"},{url:"tag/markdown/page/2/index.html",revision:"0746c2bbe874729821da1a92c5d99cd3"},{url:"tag/markdown/page/3/index.html",revision:"5bce4bfb90c01d4bf0eac1cd72dba926"},{url:"tag/navbar/index.html",revision:"5a4d410cc61ed63d667926f2786de00e"},{url:"tag/page-info/index.html",revision:"21832a10eb0dd97134eb17984be6b625"},{url:"tag/plugin/index.html",revision:"205675bb84a37e847b8846fd30dec1f9"},{url:"tag/plugin/page/2/index.html",revision:"e3fc386655da2c2e32b9167bebd9dea1"},{url:"tag/seo/index.html",revision:"bf46de8dc8ff4e039a76a3e1f1852e4c"},{url:"tag/sidebar/index.html",revision:"45cb4e34f14c8301c7ee571a418b5b17"},{url:"tag/sitemap/index.html",revision:"d7376589dfae98b56124d57470ec0322"},{url:"tag/style/index.html",revision:"052c4220d5a1fad12a1720ebcd95c234"},{url:"tag/themeConfig/index.html",revision:"e20573aa814ae3570f97f8a1717a5d84"},{url:"tag/typescript/index.html",revision:"9b84698e68886c2250beb829b4bdff2b"},{url:"tag/vuepress/index.html",revision:"510283852912ef36520a794af308466d"},{url:"tag/vuepress/page/2/index.html",revision:"715b908006ff6f036cc8ff73a8eaa948"},{url:"timeline/index.html",revision:"29ccc6884aca5ccb531630eb081a48db"}],{})}));
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
