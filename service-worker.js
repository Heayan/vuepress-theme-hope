if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"eeb5cce793745d8c7cd61e691a995fb7"},{url:"article/index.html",revision:"083d78ead568543d88e741a8fef018fd"},{url:"assets/css/0.styles.7a9d570e.css",revision:"4c5b823594a842ad63cc25e01cf52bb7"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.a6c964b9.js",revision:"5459f3272a5d1ab6990190a8d74fbd7b"},{url:"assets/js/layout-Blog.8c1c5b70.js",revision:"3b18e8ecdde42b40d600b1df1418a9e8"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.2c6362b7.js",revision:"c7f7972f04645091a904f589b5f9ca73"},{url:"assets/js/layout-Layout.f936c83f.js",revision:"e4349bdea80b1f98622f1689f03d41b8"},{url:"assets/js/layout-NotFound.f79b7f69.js",revision:"b5ae8c15138b8f1e758bee18f754ae2d"},{url:"assets/js/page-@mr-hopelast-update.c5161719.js",revision:"2b445e224fbbdc6373257bec41897859"},{url:"assets/js/page-@mr-hopepwa.cdd4e6bf.js",revision:"0e643fc51c6f3be3fe96904f2f289008"},{url:"assets/js/page-@mr-hopereading-time.a6a85330.js",revision:"68b731600a3a5bc78aca29c169f314e4"},{url:"assets/js/page-@mr-hopeseo.2cf76e22.js",revision:"52df5712f6b0f38c9b524c0eb7744d78"},{url:"assets/js/page-@mr-hopesitemap.71ed5b47.js",revision:"cb4db763aa6c4de6c6a89c65fa4b7c5b"},{url:"assets/js/page-@vuepressplugin-pwa.df4aaec8.js",revision:"22baa659d045d9afa0f35a84320bcf52"},{url:"assets/js/page-AboutVuepress.05ab8a2e.js",revision:"30d71285c487888d5dec3471c4388d02"},{url:"assets/js/page-Basic.63a48396.js",revision:"09cc361dd6055e319dd464cc3dd2a149"},{url:"assets/js/page-Bloghomepage.0c85a10b.js",revision:"9f16772282fb1ff22ab46ea792c74b6a"},{url:"assets/js/page-Blogrelated.fbaad376.js",revision:"904e6d941b0f42e78cfa023b818850d6"},{url:"assets/js/page-CommentFunction.325c8bcc.js",revision:"5e51804d573b4e7450d507b088e1530a"},{url:"assets/js/page-Commonproblems.1b9b535e.js",revision:"190b1dfa187f6a1dd12af5470b1ebbd7"},{url:"assets/js/page-ConfigDocs.74b3034a.js",revision:"ace696c166ed0ec01cddfae24cc9fc40"},{url:"assets/js/page-Customalignment.134bf614.js",revision:"e7d430d254db6fd92035b06e9a67d958"},{url:"assets/js/page-Darkmodeand Theme color.f37bceec.js",revision:"96ca2e14c2725261d48257a8f2dbc892"},{url:"assets/js/page-Demos.9536c0a4.js",revision:"00a6a055ee9953788739531e638cc807"},{url:"assets/js/page-EmojiList.1acbf853.js",revision:"4a89502b875fd04ed2854112ed323558"},{url:"assets/js/page-Emoji列表.e01cde7a.js",revision:"55117a48340f250e03bb7d12a581ffc6"},{url:"assets/js/page-Encryptionfunction.c160a46d.js",revision:"77f6e46a7e68c129df3eea25d755ee3b"},{url:"assets/js/page-FileStructure.64893ddd.js",revision:"8e7c08261eb39aac883a96d8f57fabc2"},{url:"assets/js/page-Flowchart.9648cb84.js",revision:"a72604b66df25aa70233cb1813f333db"},{url:"assets/js/page-Footnote.f75924ca.js",revision:"ce1702abb6c1ee9bbeb7c2e272187249"},{url:"assets/js/page-Home.2be0a1b7.js",revision:"e2c75a1eefb16e3c9ee33f11ac8c825e"},{url:"assets/js/page-HomePage.7b57bd65.js",revision:"70b98a08d43c1a3c4f06ade0ff3e7414"},{url:"assets/js/page-Install/ Usage.cd8986d6.js",revision:"11a0b158f8985cfc58e2997dc5b7d0ae"},{url:"assets/js/page-Introduction.c78435af.js",revision:"034035634323212337d75da659f63e5d"},{url:"assets/js/page-Layout.99d4bd3d.js",revision:"7b8817fc38893ca6dc020fed98f6195a"},{url:"assets/js/page-MarkdownDEMO.98cd74d1.js",revision:"97803b7a5ce9a106f8668f40cc0f0543"},{url:"assets/js/page-MarkdownIntroduction.272cfcd9.js",revision:"269ba60b53a60b387a03ddf37ca7e78d"},{url:"assets/js/page-Markdown介绍.8c02d98f.js",revision:"4a91e476f9b14e0fc880152bb9b520bd"},{url:"assets/js/page-Markdown新语法.f6a94dc7.js",revision:"bd5045cd29388459912f9c0072aa9bca"},{url:"assets/js/page-Markdown示例.1b80b700.js",revision:"ec3fb1faeee8bf257ebb20bbdbcce3f0"},{url:"assets/js/page-Markup.06c2ffb5.js",revision:"d9f7277c0b755e109f085619b4404dfc"},{url:"assets/js/page-Nature.c88e34e5.js",revision:"f5fb5f6b64e0aaa31b27b0d4b5977e8b"},{url:"assets/js/page-NavBar.f88deb80.js",revision:"17e5fe05f9a5d4b5cd6030ed881717ad"},{url:"assets/js/page-NewComponent.bec4eecb.js",revision:"55fd5ba776febc4c65863d7a6919ba9f"},{url:"assets/js/page-Newfeature.7bb2f51d.js",revision:"f3570aa5ab60b0213dc6169a855ef1fb"},{url:"assets/js/page-Newsyntax in Markdown.1b1b3e2a.js",revision:"15c8f4d64c15a8d4bd1496fa63112d5e"},{url:"assets/js/page-Object.d3739896.js",revision:"15a0b4e089bfd3d7b66f7b20326a7be9"},{url:"assets/js/page-Page.6cf16394.js",revision:"95883db537360fa4a75ea84162bfa29a"},{url:"assets/js/page-PageConfiguration.b608d7bc.js",revision:"dfc0a7056a4d112e9a58c240b9a8f4be"},{url:"assets/js/page-Pageinformation.dcfc8cfa.js",revision:"a0c97cda3f07eba2b0c959b519fb0a0f"},{url:"assets/js/page-People.f880bb0c.js",revision:"951f14d74fabca3bd3a50b7dae90b5fb"},{url:"assets/js/page-photo-swipe.a58c67d5.js",revision:"c713a4800979fdef8b244a7858d6de22"},{url:"assets/js/page-Place.a0227ba2.js",revision:"5def8f10c2bda730a71a05dce62a96c0"},{url:"assets/js/page-PluginDescription.1b764851.js",revision:"729b5cb1b1d5ca60afb09df3613bb179"},{url:"assets/js/page-Plugins.b8ab6469.js",revision:"9f84675a8417e52d8b84b6e4417ddb4f"},{url:"assets/js/page-SEOand Sitemap.74efe92b.js",revision:"fb778be70fc2e8664fc4cb6b579634fb"},{url:"assets/js/page-SEO和 Sitemap.09d03bd4.js",revision:"f0645ccaae45f7e8de299291c27dd5b0"},{url:"assets/js/page-Sidebar.95d0c4ee.js",revision:"e70818aefe04113cfd0cb96498f8ed43"},{url:"assets/js/page-stylusconfiguration.11bee50d.js",revision:"5b484fdc81c1d961a7f10c4f55abafad"},{url:"assets/js/page-stylus配置.607388df.js",revision:"6c91ac1ec4b1c21cb73cafd5e057cb35"},{url:"assets/js/page-Superscriptand Subscript.fcc40340.js",revision:"742454743498d18f655749cb648ed5e5"},{url:"assets/js/page-Symbol.0aaa3034.js",revision:"cab96c7651d2a4c87256a0d7856ee151"},{url:"assets/js/page-TexSupport.3cfc5108.js",revision:"89ae6075e480d3bb53706fc5f257280f"},{url:"assets/js/page-Tex语法支持.8916d1cc.js",revision:"3acfbfe3c686b03917c73021dfe16aa4"},{url:"assets/js/page-ThemeConfig.487d3da8.js",revision:"a7fb70e415bb7a6ae29da0167d9a0974"},{url:"assets/js/page-TSsupport.e3dc2d8d.js",revision:"76ea816fd522d84eb3553f44c6a0235c"},{url:"assets/js/page-TS支持.aa9481a2.js",revision:"2f120261abcf48638acd2deb2e9a6ecf"},{url:"assets/js/page-vuepress-plugin-container.6173991b.js",revision:"e60bd4a06933b80696284bb3df334df6"},{url:"assets/js/page-vuepress-plugin-copyright.0f7699a4.js",revision:"d0ffc372ad575a1195118a6f6e200fe7"},{url:"assets/js/page-Vuepress.948e7126.js",revision:"b803258db8bd1f00098143f77bd36711"},{url:"assets/js/page-VuepressCases.89d35cb4.js",revision:"249272a1089889952e774c06ff40cb9b"},{url:"assets/js/page-Vuepresscommands.997fb2e1.js",revision:"aa98d4c18c01b9a6113861d0eb6445b6"},{url:"assets/js/page-Vuepress案例.1d5bf1cb.js",revision:"4301a6e34aac725a21589212c30ad20a"},{url:"assets/js/page-上下角标.403917d2.js",revision:"be9f5ec5504e594d53ad778281da49dd"},{url:"assets/js/page-主题配置.84f50895.js",revision:"a1f995d9fdd816f6afa1581f3f78bb47"},{url:"assets/js/page-人物.b72ba825.js",revision:"90fa83331aa2a188641a7399565e3b40"},{url:"assets/js/page-介绍.309d4522.js",revision:"9e5b7b4c5db197e79245c2624147c960"},{url:"assets/js/page-侧边栏.82646910.js",revision:"a86c5b45c7a0efa53541dd11bce71db5"},{url:"assets/js/page-加密功能.2b3fd167.js",revision:"7c577d06df905abc6a1c7928df676922"},{url:"assets/js/page-博客相关.4415ef2d.js",revision:"076f6fdd146fea3a5c43b3996fef6c4b"},{url:"assets/js/page-博客首页.6f0ba391.js",revision:"96a0fade7bed272dd269315e03fb30d8"},{url:"assets/js/page-地点.e8ed19a5.js",revision:"89930f09f8e5c14ce1e4e9ad7e6560b3"},{url:"assets/js/page-基础知识.7f090ba8.js",revision:"6fc30f81480c9dedde63a472e13ff86e"},{url:"assets/js/page-安装使用.f778ee03.js",revision:"459bcef96f81dd04bf8b639b10bcda6b"},{url:"assets/js/page-对象.643e7011.js",revision:"0645930682d32d26844558538ac89d48"},{url:"assets/js/page-导航栏.2f3b98d4.js",revision:"8d0c6e878817cecd6d39996620f3fb65"},{url:"assets/js/page-布局.947205ca.js",revision:"be97b4e69aca2b832b13b215d1025063"},{url:"assets/js/page-常见问题.e535ce02.js",revision:"2a34fd10025f5cf047cd1c93a7bddf5a"},{url:"assets/js/page-插件.7d1f27ba.js",revision:"bb6a16c01cac54fd671ae6eeba7078f9"},{url:"assets/js/page-插件说明.114453f6.js",revision:"c5051ea85a4e69b8e8bc77d1041f9513"},{url:"assets/js/page-文件结构介绍.a31b395d.js",revision:"6377ce1c3c0a5760a23cb6440e90b0b3"},{url:"assets/js/page-新增特性.ee5b87b9.js",revision:"d1f85a85c093289f263e58b3ae40dffd"},{url:"assets/js/page-新增组件.8396bc4f.js",revision:"08d76551389693e232a1381e0b46ce2b"},{url:"assets/js/page-标记.695f8a70.js",revision:"4efe7a4c42f26d50214b2cbeb9a271c6"},{url:"assets/js/page-流程图支持.67679b29.js",revision:"4f171c7de084a1c3930e52b8bf231827"},{url:"assets/js/page-深色模式与主题色.2f81dd23.js",revision:"fa0fc4fdf407666b8927300c945486b3"},{url:"assets/js/page-符号.0d9da1a0.js",revision:"64cfb81c09ed4a57bf2179986e3138f7"},{url:"assets/js/page-脚注.0c31f204.js",revision:"4a90caa822d37194e9259deb6330dd16"},{url:"assets/js/page-自定义对齐.fc57cd24.js",revision:"0ecb353a3c25bd738f6e915e299c702f"},{url:"assets/js/page-自然.a15a65bb.js",revision:"581350c8558af7da7f56596f38c816a0"},{url:"assets/js/page-评论功能.8ded598b.js",revision:"70c235feccd81cb4c0b506a833d64a42"},{url:"assets/js/page-配置文档.50e8bc93.js",revision:"4bb453755c4222928a06360d99670d01"},{url:"assets/js/page-页面.5482123e.js",revision:"2fb05550a262b541cfa7bc715adb0d09"},{url:"assets/js/page-页面信息.ddcb768a.js",revision:"698959c21f7f7ac355276db6e036b3a0"},{url:"assets/js/page-页面配置.24aaa8e4.js",revision:"b3033fcbd83840e93a59f3c155822c94"},{url:"assets/js/page-项目指令.5e3b17bb.js",revision:"83ecae9c04346ad13c9619e1b8520e30"},{url:"assets/js/page-项目案例.e7f55a6d.js",revision:"c2d30bbdf7f26d87522eadb29cdb031c"},{url:"assets/js/page-首页.cf62b1a1.js",revision:"b7c37a06d9680b9fa2057ecf0ee7c832"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6d604181.js",revision:"412ed9a2624e74109fda36ed7a21acb9"},{url:"assets/js/vendors~layout-Layout.dcbf7ff8.js",revision:"4a8c26cdb43a037e82639b8d4df44b2a"},{url:"basic/index.html",revision:"5c356f62637c09f478b41441ce7b4c7a"},{url:"basic/markdown/demo/index.html",revision:"884c58947dea1b4f7d7e6381feb6922a"},{url:"basic/markdown/emoji/index.html",revision:"8a2646359804cafbc3705e63eb0897ec"},{url:"basic/markdown/emoji/nature/index.html",revision:"6f8fae007eef3f638eecca7946148cb9"},{url:"basic/markdown/emoji/object/index.html",revision:"898a1a54682b22901b9148edeee6120d"},{url:"basic/markdown/emoji/people/index.html",revision:"66d48a474f9828ca6d6ffba0439fcb1a"},{url:"basic/markdown/emoji/place/index.html",revision:"c97260819563f721700831f502b4fe8e"},{url:"basic/markdown/emoji/symbol/index.html",revision:"c82cb32a925b9199924210fff1c36779"},{url:"basic/markdown/index.html",revision:"afd9b33e0c65739e7f24b89a937f4eab"},{url:"basic/vuepress/case/index.html",revision:"ec6bf66726e0276e3a5a14a4da8301b0"},{url:"basic/vuepress/command/index.html",revision:"06949e1b68f9d204ea4a0e9656bfbf38"},{url:"basic/vuepress/file/index.html",revision:"49562d9bbf503f35d966903d10d86369"},{url:"basic/vuepress/index.html",revision:"4ae363173edad5b100f4a1f06f6e75f8"},{url:"basic/vuepress/plugin/index.html",revision:"78091f3b8723af2fdc52e530d096e4b8"},{url:"basic/vuepress/theme/index.html",revision:"06a4693860649e4f6e7ce15611eb1180"},{url:"category/aconfigpi/index.html",revision:"3a6dc98a80f38d483de8a93d1879226f"},{url:"category/config/index.html",revision:"d47f357a485723055043d7cbda7666d1"},{url:"category/config/page/2/index.html",revision:"299eb37dd07001fa4c09667aac6996ed"},{url:"category/config/page/3/index.html",revision:"65ff0b794b2b91866410d1bd1e3411ec"},{url:"category/FAQ/index.html",revision:"a4758b8714c6eab76cfd465ad083a0ca"},{url:"category/feature/index.html",revision:"3f85dd439d53b6d35250989c57c83616"},{url:"category/feature/page/2/index.html",revision:"f4f33609fad59cf4762401ff48de9438"},{url:"category/index.html",revision:"9e6c7d540d71ba8cf8a8161fbf147548"},{url:"category/instruction/index.html",revision:"188380c347ccec9e925dc9b2c6710379"},{url:"category/layout/index.html",revision:"072ddc1f5d6e7e0d2c82834b163372c9"},{url:"category/layout/page/2/index.html",revision:"0d642e5f72f5ef1a1eb957328e94095d"},{url:"category/markdown/index.html",revision:"b65defbb838e501697550a810aec9cff"},{url:"config/index.html",revision:"7bb8742e02501ea8a5b2f9084fe59b63"},{url:"config/page/index.html",revision:"ee688f5eee01aaaac0b28a37a15e9186"},{url:"config/plugin/container/index.html",revision:"754bce857ce18f6d910b0c9d6917d7a5"},{url:"config/plugin/copyright/index.html",revision:"0ffe47c171a2dca1c75206d5af6d8cc8"},{url:"config/plugin/index.html",revision:"357bd590f751cc96468a3ef3146ab203"},{url:"config/plugin/last-update/index.html",revision:"6c8bbd1b5d5fe49b827f20cc5652c116"},{url:"config/plugin/photo-swipe/index.html",revision:"91597f77d5531a2fcc7bd68a1f367ca4"},{url:"config/plugin/pwa/index.html",revision:"200f8bdd0b98d8cf72064a0d345d01ce"},{url:"config/plugin/reading-time/index.html",revision:"3ebba5bd8e2dd1fb2ee2139468d86bd1"},{url:"config/plugin/seo/index.html",revision:"f198f7297bfa6beb6b4d87f107cb9c12"},{url:"config/plugin/sitemap/index.html",revision:"434cf031ff883e08e0b9e022777a93fc"},{url:"config/stylus/index.html",revision:"aff6e46d2b7ebd6cd228f8b3aae2b142"},{url:"config/themeConfig/index.html",revision:"4a6a8a7537f6149c79766d139c1ef758"},{url:"demo/index.html",revision:"7e7f5b164fe007169e471ca6160c36ef"},{url:"en/basic/index.html",revision:"b170094a71564eada3717f199cd6e14f"},{url:"en/basic/markdown/demo/index.html",revision:"d7ea894f59150e2633e4d13a6fa94bc7"},{url:"en/basic/markdown/emoji/index.html",revision:"1cdbc79c024927f7166b40bdaf9240bc"},{url:"en/basic/markdown/emoji/nature/index.html",revision:"b74cc159664cf2d247c1fff42dc8769c"},{url:"en/basic/markdown/emoji/object/index.html",revision:"969634e08e5dc8e91cd9bdd037fb3bed"},{url:"en/basic/markdown/emoji/people/index.html",revision:"94a6cb373b0a5a9bbb5616187295c3be"},{url:"en/basic/markdown/emoji/place/index.html",revision:"39bcdb64ad37c0e1e21f6efaec4dcb76"},{url:"en/basic/markdown/emoji/symbol/index.html",revision:"4201480834f795070f88554ae6fe016e"},{url:"en/basic/markdown/index.html",revision:"b7c328063b9c7114ed19bf1ed2032782"},{url:"en/basic/vuepress/case/index.html",revision:"801e4642d0586a9abd5d14ab07b2023d"},{url:"en/basic/vuepress/command/index.html",revision:"dae7e1fd58532b4e5a8ae0a2a2f2af4b"},{url:"en/basic/vuepress/file/index.html",revision:"6328fbfe50d8357a7d999ce6c73b6604"},{url:"en/basic/vuepress/index.html",revision:"a7813d19821d2fdbb59c684fe2a85164"},{url:"en/basic/vuepress/plugin/index.html",revision:"a267231f897c6fc3f9581b68a1c01641"},{url:"en/basic/vuepress/theme/index.html",revision:"5a75faf8b7ab426a7e643754c21fcadf"},{url:"en/config/index.html",revision:"b86f9989d8e0543ce5326816a6ab2eef"},{url:"en/config/page/index.html",revision:"2ce6a479d6a3314cb061621cef838b1e"},{url:"en/config/plugin/container/index.html",revision:"4ef8aef748969e38687c5cbeeb8d6d7d"},{url:"en/config/plugin/copyright/index.html",revision:"bfaa5c80369cb65efb0ac22a4ede3004"},{url:"en/config/plugin/index.html",revision:"258a0bb34665adac5c9b94e0debae800"},{url:"en/config/plugin/last-update/index.html",revision:"3084edf6607a1df0b64c4728f436d0e6"},{url:"en/config/plugin/photo-swipe/index.html",revision:"63949e91d3d5bc9e1885a8ffd9c61b6e"},{url:"en/config/plugin/pwa/index.html",revision:"d3e9a7e42727c6347f730c123b690c19"},{url:"en/config/plugin/reading-time/index.html",revision:"90d0775a995fa7e6ce10b94a5a248e42"},{url:"en/config/plugin/seo/index.html",revision:"cbf27d2d0c9648fdb11a640456a1608d"},{url:"en/config/plugin/sitemap/index.html",revision:"ad1008d54bc3d8c44ff818a35713f50d"},{url:"en/config/stylus/index.html",revision:"b558dfab0d6e5ab7af4c99b131d36472"},{url:"en/config/themeConfig/index.html",revision:"218befba2cb5db525d64da2f481867e6"},{url:"en/demo/index.html",revision:"6e314964991bf65fdd51bf27f2c4e7fd"},{url:"en/FAQ/index.html",revision:"a2173e8c9a0562108eaac3e7d66b0cf9"},{url:"en/guide/feature/blog/index.html",revision:"620bf5fe832cc72cfb5a5d0dd5d0c61a"},{url:"en/guide/feature/comment/index.html",revision:"2d2c133e887cd80ff0cf0b264a7fc375"},{url:"en/guide/feature/component/index.html",revision:"851cd43b3bb3cbc9a48b76e7f1c0477d"},{url:"en/guide/feature/encrypt/index.html",revision:"64e78f39bf1efb47667adc784e02548f"},{url:"en/guide/feature/index.html",revision:"b0baeead1dd719efa498a3876ba0a5e0"},{url:"en/guide/feature/markdown/align/index.html",revision:"e95f4aa29fc4dcbda646e83da5390c94"},{url:"en/guide/feature/markdown/flowchart/index.html",revision:"5186b5c4e8c4a31d8ed587e5f4c7f4ef"},{url:"en/guide/feature/markdown/footnote/index.html",revision:"fb93fba74afb002edf4f8635c46317f6"},{url:"en/guide/feature/markdown/index.html",revision:"77a1e743d9e9ebf556ca8de18c8a6df3"},{url:"en/guide/feature/markdown/mark/index.html",revision:"1b11867c8d63df884134014ea55e0a60"},{url:"en/guide/feature/markdown/sup-sub/index.html",revision:"537b7fc2ecd5f9e19b015a4313cc1983"},{url:"en/guide/feature/markdown/tex/index.html",revision:"486f47c6947256d4b61106d1ff5c082a"},{url:"en/guide/feature/page-info/index.html",revision:"4d4bba8147ff1a495ddd0538326e6203"},{url:"en/guide/feature/seoAndSitemap/index.html",revision:"37dfc1654378d80b0d92057bf6fe2d20"},{url:"en/guide/feature/theme/index.html",revision:"8a2db20b81961483d05b598b311b8efe"},{url:"en/guide/feature/typescript/index.html",revision:"305cd03c2ce96c214ab0423d74285d2f"},{url:"en/guide/index.html",revision:"6411596b9eb09182f43f9d43231dd2ea"},{url:"en/guide/install/index.html",revision:"7e7f19455314e7df07f98a5ecdabdbb8"},{url:"en/guide/layout/blog/index.html",revision:"bc9fb651dc6aebf3c0803b5f9f6926cd"},{url:"en/guide/layout/home/index.html",revision:"79318d775466e502757c5bdc3eb90e4e"},{url:"en/guide/layout/index.html",revision:"a9e0d09145431c1dd1d3e706b10e57a7"},{url:"en/guide/layout/navbar/index.html",revision:"d1e72079a10c9667b99f47b643d1459a"},{url:"en/guide/layout/page/index.html",revision:"0307c8dca36a3d8e654152f6e47420a8"},{url:"en/guide/layout/sidebar/index.html",revision:"667349fedd4e2a0b4f86d073e6db2001"},{url:"en/index.html",revision:"657760c820c53ae3d8b118015de9474d"},{url:"FAQ/index.html",revision:"c5f58fbd6c76b9eec3adc6b9af88a626"},{url:"guide/feature/blog/index.html",revision:"a715239430ed3104f4e92f3ccc6fd1af"},{url:"guide/feature/comment/index.html",revision:"70f5cfec16f460c5f1d96d6a206fe87f"},{url:"guide/feature/component/index.html",revision:"a5c51591f645f95e1143d1997adc0475"},{url:"guide/feature/encrypt/index.html",revision:"be2cd750e170abd2a8d3a0324c0720e1"},{url:"guide/feature/index.html",revision:"bd6e935711bb79376fbdf1a7e7937c41"},{url:"guide/feature/markdown/align/index.html",revision:"105830fa121fd966faee76d6fdf03b72"},{url:"guide/feature/markdown/flowchart/index.html",revision:"477468ace636a667d80b8aaab1434c8b"},{url:"guide/feature/markdown/footnote/index.html",revision:"59e71ba57fa5feb652d3dfc34ec550f3"},{url:"guide/feature/markdown/index.html",revision:"8044ffa59a7979b08f7f05b50aa226d8"},{url:"guide/feature/markdown/mark/index.html",revision:"80065f0f0de45ddf785dc374ae631f81"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"19662a5dad87623847b009eca1de62cd"},{url:"guide/feature/markdown/tex/index.html",revision:"fe39d362517f4f01a0108488d1e4e748"},{url:"guide/feature/page-info/index.html",revision:"cae99cae700421ce54d2d4cc197a7dba"},{url:"guide/feature/seoAndSitemap/index.html",revision:"07dacb86f6ac024ef71f72e25f25b072"},{url:"guide/feature/theme/index.html",revision:"556f3214f7bf1fc0b779dc3b4f765f39"},{url:"guide/feature/typescript/index.html",revision:"986404a7c57d63ab89e93fa4da8fbfb5"},{url:"guide/index.html",revision:"a997c73dbabe56ce28acfdeed871240c"},{url:"guide/install/index.html",revision:"2ff050aba8404705f6ee716c074f0d04"},{url:"guide/layout/blog/index.html",revision:"61f4833472e2bc9092556726ebd250d0"},{url:"guide/layout/home/index.html",revision:"d25b86e8b1e74258961737f4cc9ac24a"},{url:"guide/layout/index.html",revision:"46fe4e4b46106375d2f893afe09412ff"},{url:"guide/layout/navbar/index.html",revision:"a794bab21aac0c8102f6e252676010ff"},{url:"guide/layout/page/index.html",revision:"77fb21f8106672a8910fd82232662b3a"},{url:"guide/layout/sidebar/index.html",revision:"e74ac33eee912a620068887a085432e2"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"f67372f59808fa590423a4416cb042a5"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"2fdc2d3c2720de66077b12ce69130cd6"},{url:"tag/comment/index.html",revision:"9f09a952cafeafcd077f6a54c57815d7"},{url:"tag/components/index.html",revision:"ee7bc84f87c9c832879bdc8933f3b29c"},{url:"tag/config/index.html",revision:"1adc5c713c9db6a02fcaf3878dd43abf"},{url:"tag/config/page/2/index.html",revision:"8d52d84157cb7fe1be87c66c3c768443"},{url:"tag/config/page/3/index.html",revision:"cae64e42bc30557ffad0085141ccab37"},{url:"tag/emoji/index.html",revision:"1277adb0f757965c756d96c543f28328"},{url:"tag/emoji/page/2/index.html",revision:"41b0ee6d6d7bfd6ac414c2b57514d540"},{url:"tag/encrypt/index.html",revision:"58a8478211f934a0ad3b272234c0af7f"},{url:"tag/feature/index.html",revision:"2e2e9220832ff173dc7d3e04920b8ca1"},{url:"tag/feature/page/2/index.html",revision:"830226d5008af853674cd9819abd5db4"},{url:"tag/frontmatter/index.html",revision:"3b59d17d563ecd077031e905b0d1e23f"},{url:"tag/function/index.html",revision:"e9b3fa5afbe91a1aa1b3dfffddd35c82"},{url:"tag/function/page/2/index.html",revision:"6d2ce8124298ea81fe865c6286d0a6e4"},{url:"tag/home/index.html",revision:"e6b9c09911393367c4fe8749e2ced381"},{url:"tag/index.html",revision:"618708aaaeee6b9f26d2d1ad88557cf6"},{url:"tag/intro/index.html",revision:"b4b2cfdf2ce458ee21d144f4fbfc9471"},{url:"tag/layout/index.html",revision:"8350481ee20cddcfef9c31d3741fae69"},{url:"tag/layout/page/2/index.html",revision:"6570dc40b32cddd5b9a835529a047600"},{url:"tag/markdown/index.html",revision:"a48efb73aa992902baa81db781ec3ca5"},{url:"tag/markdown/page/2/index.html",revision:"7f0f818a6c26a386b79fd68f926ce5e5"},{url:"tag/markdown/page/3/index.html",revision:"07e99020e0a295c1b8c55c77ebb913aa"},{url:"tag/navbar/index.html",revision:"72b807c7f6ec80dd72ace2e822eebd67"},{url:"tag/page-info/index.html",revision:"fb735cae3b7df354686f89daaf564897"},{url:"tag/plugin/index.html",revision:"c1c3be9ee0e8f1768b833e7b88062d9b"},{url:"tag/plugin/page/2/index.html",revision:"b742486f51d13c79758321381558595e"},{url:"tag/seo/index.html",revision:"05ae4eca0a447cd5aa0902f807841057"},{url:"tag/sidebar/index.html",revision:"75a5fcab4e3d15ad44ed94cc3072bfec"},{url:"tag/sitemap/index.html",revision:"c45f4a0512fa1d51f7264661bc502323"},{url:"tag/style/index.html",revision:"19d112d4bde4465e5cd409847004ba6b"},{url:"tag/themeConfig/index.html",revision:"5ec6471d561579728b759d1fc365746d"},{url:"tag/typescript/index.html",revision:"f62c58acc432f36b51690b8658a303ce"},{url:"tag/vuepress/index.html",revision:"5b027f239d503e0e38608869ae837d3b"},{url:"timeline/index.html",revision:"b24fd750307a9ce62b51e6d91bf30685"}],{})}));
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
