if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-452119c2"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"f9722085f0da9064f98d7496d122166b"},{url:"api/index.html",revision:"93b111985fd25da29ff82f6650e003d1"},{url:"api/page.html",revision:"8997ca049574f3dd7cbdbb0b48c1ca81"},{url:"api/plugin/container.html",revision:"fc1bb78a8d1496c6a9e6d4c7f4400915"},{url:"api/plugin/copyright.html",revision:"60fcb79891dd26bef04a08517db93ee6"},{url:"api/plugin/index.html",revision:"d2d0f091fb30d57d0db1456761fb8944"},{url:"api/plugin/md-enhance.html",revision:"7ca7b312d76283b9cd65473394225f50"},{url:"api/plugin/medium-zoom.html",revision:"c403c246ba32df1cda889d6c5fd81d7f"},{url:"api/plugin/pwa.html",revision:"680fd64cf2e7b1be2c449f79f33ad92c"},{url:"api/stylus.html",revision:"f5e809668e30edd1af13fd6103b572be"},{url:"api/themeConfig.html",revision:"2c77af0f5b0b02609c390e8376bdc53e"},{url:"article/index.html",revision:"ccbce8a331272687c2d68222b4f27e50"},{url:"assets/css/0.styles.e43f40ea.css",revision:"a0e3f5fea2c5d8c567c2eabc08802ca0"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/103.4a622b5d.js",revision:"a691b8b259860b6ca3475b80f22baaa3"},{url:"assets/js/app.6860c551.js",revision:"ec3904025307e4c3d9696caa918f3cdd"},{url:"assets/js/layout-BlogEntry.be0cbd9a.js",revision:"eb1e6f538e834699479ac91f8010e16e"},{url:"assets/js/layout-BlogEntry~layout-Layout.1b6df8d6.js",revision:"dca85f8d7bae1c1e2a57802a38e8d9be"},{url:"assets/js/layout-Layout.93a4ef7a.js",revision:"6bceb3a0faf6c1a4367d0bfee064f786"},{url:"assets/js/layout-NotFound.8655569f.js",revision:"881909242d1feffe00b4796572a55e1b"},{url:"assets/js/page--1b278726.9ba1e59d.js",revision:"16507af1e54f7499f17de2a98d0c7a31"},{url:"assets/js/page--24b68849.90a12174.js",revision:"339db42bd37ff4363e563ec65910e7d8"},{url:"assets/js/page--298eb4e9.0843772b.js",revision:"6f3a122fedbdff9ed409cac896692712"},{url:"assets/js/page--33732ef1.71892722.js",revision:"d6ffbf0336213b88bbdc46a9edb846a4"},{url:"assets/js/page--608d80cf.9e9d4399.js",revision:"518126275194f88e0698dfabefaec3b3"},{url:"assets/js/page--b64dd6ee.59a43079.js",revision:"6c9b003f631e49b7f79fae2ba74db451"},{url:"assets/js/page-About Vuepress.59557b92.js",revision:"14f7d7bea87ce02f2c461c71559ba332"},{url:"assets/js/page-API Docs.f75e4d95.js",revision:"7ebcb691eb0605a7b8e7cc9ecb148f79"},{url:"assets/js/page-API 文档.3cc0c87c.js",revision:"0bc5be09c7ea0313a3e37e3cd1df3256"},{url:"assets/js/page-Basic.3b22d053.js",revision:"ba2c1733c112643a1e016f54d03b8f75"},{url:"assets/js/page-Blog related.44f9bd7b.js",revision:"63bafb1126320b19282ae7389be2aa6a"},{url:"assets/js/page-Breadcrumb.e1e5a568.js",revision:"f183dbc457c33d49eb8eef4709c8eac6"},{url:"assets/js/page-Comment Function.b74dcdb8.js",revision:"f090b78f0b90ff17036fc406e2a32949"},{url:"assets/js/page-Common problems.a6f87bc1.js",revision:"13a02cf62cd273f45a7495c88a253466"},{url:"assets/js/page-Custom alignment.5169c278.js",revision:"f258c999e5c9175824f59fc51b328fb4"},{url:"assets/js/page-Darkmode.b5f4ecd0.js",revision:"9ba7bffea475eec4e9de90545af5485e"},{url:"assets/js/page-Default Theme Config.92b3eaf8.js",revision:"a1e9b3d26aff3baa46dd387d77b174c1"},{url:"assets/js/page-Emoji List.4b0e5cc0.js",revision:"deaf44b711e3d7c742c42556fdea91bd"},{url:"assets/js/page-Emoji列表.eddc569b.js",revision:"2ae2839312e5a5ff8232d5451a9727b1"},{url:"assets/js/page-Encryption function.d6c49095.js",revision:"abbda30b88e2a244880207e8395f1242"},{url:"assets/js/page-File Structure.6bdb8da7.js",revision:"8b5c65e025a962f247fcbbd724907b48"},{url:"assets/js/page-Flowchart.69f418bc.js",revision:"d27a35ee849f76094a11e39b9bb75fd8"},{url:"assets/js/page-Footnote.69ae1779.js",revision:"53344ca1b2d00ca843a1ab7954b0e387"},{url:"assets/js/page-Fullscreen Button.1448a2e1.js",revision:"9706effbc355ea69453fb0abd63ceb41"},{url:"assets/js/page-Home Page.af896d1e.js",revision:"1973185daafb2d860e2ff15bf4bf274e"},{url:"assets/js/page-Home.9ffbbb1d.js",revision:"f1f0ab338c383ef7edf078c3ca97e1d8"},{url:"assets/js/page-Icon support.daf5c10d.js",revision:"984367d1d3c39d25088773dcc95aac87"},{url:"assets/js/page-Introduction.5d870e45.js",revision:"d0725bc3a04d58752ee5b267cb3b7b82"},{url:"assets/js/page-Layout.9aa8aa2e.js",revision:"1220f900f3e838d5dd3a01b10b95e068"},{url:"assets/js/page-Markdown DEMO.6d641dc0.js",revision:"7f2449f491aa1292463b22e7fd4920e7"},{url:"assets/js/page-Markdown Introduction.5d1acf16.js",revision:"b2d0ebd0ad15ef9883131de23c2846fa"},{url:"assets/js/page-Markdown 新语法.4ac7f1c3.js",revision:"c57dd00cdb875be67b0d90bb4ba1ee02"},{url:"assets/js/page-Markdown介绍.18973a65.js",revision:"45870bb90c6fac50f44b14ab40c61a97"},{url:"assets/js/page-Markdown示例.10dec158.js",revision:"567441932f02b2e18f2ef77065ea5f4b"},{url:"assets/js/page-NavBar.31cd025e.js",revision:"b7c1b50ef503e4bd561172d5b28723d3"},{url:"assets/js/page-New Component.1b340662.js",revision:"62230497c7c60c393df28e63d528a939"},{url:"assets/js/page-New feature.b9c204ee.js",revision:"52b491a6b334ac07ea297680d561d1ca"},{url:"assets/js/page-New syntax in Markdown.89599948.js",revision:"943e6dbfbaf7447e21e694958c783734"},{url:"assets/js/page-Page Configuration.26759635.js",revision:"549f0bab7800f61f0507932d2b88761e"},{url:"assets/js/page-Page.5b164439.js",revision:"805041ad51f9eef5a3d18805ef11c1eb"},{url:"assets/js/page-Plugin Description.a4b9cd5d.js",revision:"7c687effb73d4ec95a910787738445f5"},{url:"assets/js/page-Plugins.3f6cfc59.js",revision:"8afb40b1665176b61edea220954540af"},{url:"assets/js/page-Sidebar.0b0706f5.js",revision:"011087ab59f6883533a8d778eb76bd55"},{url:"assets/js/page-stylus configuration.35efabfa.js",revision:"b6a6991971ef22996d446e799f8cd2e8"},{url:"assets/js/page-stylus 配置.413b20e3.js",revision:"95359aa99a14932dac30c0f91c619944"},{url:"assets/js/page-Superscript and Subscript.d3db151b.js",revision:"37b16965d8eab78f01366d5aedf5d9d2"},{url:"assets/js/page-Tex Support.914cca69.js",revision:"2e9ef6539b0d8e6c74dbd329f246fc85"},{url:"assets/js/page-Tex 语法支持.f59f4512.js",revision:"dedaf72f1cc072d345270b457eb3d6c5"},{url:"assets/js/page-Theme color.34157d19.js",revision:"69832b171088e953257fc3f4f91ebc2b"},{url:"assets/js/page-Theme Config.b302a488.js",revision:"6548e078cc62369f905e3faeaadb1c2c"},{url:"assets/js/page-TS support.d5c2df82.js",revision:"ddb28744be848ef9817ce06fb9214a13"},{url:"assets/js/page-TS 支持.6d426b02.js",revision:"21e32c4581367da8c51f6b1abd3caa36"},{url:"assets/js/page-Vuepress Cases.c39bb054.js",revision:"bd2961adab8170932aebb1e96dc24fe3"},{url:"assets/js/page-Vuepress commands.60b4a002.js",revision:"9b1591488ea475a8d1b151124759e966"},{url:"assets/js/page-Vuepress 案例.b93bbc6f.js",revision:"df7f0cac5b4ed1ab524ceaa724c08804"},{url:"assets/js/page-vuepress-plugin-container.b1d29274.js",revision:"95e14e61b832c10fbd0f8734256da5a8"},{url:"assets/js/page-vuepress-plugin-copyright.2d9f9f07.js",revision:"5b307835026aa0b8cea4f7da6ecca291"},{url:"assets/js/page-vuepress-plugin-md-enhance.eb21c8d1.js",revision:"990720060d07f60dde2375aac0ff9a85"},{url:"assets/js/page-Vuepress.23f02930.js",revision:"6e253ed62da7382d1085e19f7a226dce"},{url:"assets/js/page-Writing a theme.ad5a2b7d.js",revision:"db8df3b8fd70a620cd3a1fc6055e45f0"},{url:"assets/js/page-上下角标.7328830f.js",revision:"329fdb8c763cd8b1b4c1a0a68fd3c716"},{url:"assets/js/page-主页.bfad789f.js",revision:"b2a87a9e06a240e982ef445ec1511d62"},{url:"assets/js/page-主题色.0196b57a.js",revision:"a76c41067282e17c073dcbcd7016427e"},{url:"assets/js/page-主题配置.5139d7ac.js",revision:"8f0a48bf212291bba276adc7b12101ac"},{url:"assets/js/page-人物.06bdfee9.js",revision:"57be6c3df07dcfcd5d7ee2656d348ec1"},{url:"assets/js/page-介绍.27c4f434.js",revision:"63f332b62c540081fc4a0c16f600a787"},{url:"assets/js/page-侧边栏.d9925168.js",revision:"676b4a436cf37d9f34d0567efd1c6d02"},{url:"assets/js/page-全屏按钮.b7ad16eb.js",revision:"887a40d842fc6b2af7931a119405e385"},{url:"assets/js/page-加密功能.6c1a98aa.js",revision:"ed612e40090a909c2f299bce46e642f8"},{url:"assets/js/page-博客相关.05ba051d.js",revision:"3005cf0bf876e2fe152bba540d5c18d6"},{url:"assets/js/page-图标支持.2501ac69.js",revision:"f68cb8e9d09614fd6c9ac4a570341007"},{url:"assets/js/page-地点.a0607d6d.js",revision:"e238c40f6ea04ee087fb70ebfd72eff4"},{url:"assets/js/page-基础知识.e19c9801.js",revision:"7c653101541eb79ddf5fcc60ed45d474"},{url:"assets/js/page-对象.8706ccdb.js",revision:"8ba47a156207c0306a4a4030264c5838"},{url:"assets/js/page-导航栏.4382138f.js",revision:"c967ce93a7a023d6e747f2f38144598a"},{url:"assets/js/page-布局.6f8b8eba.js",revision:"b6d4bf5ebefdb21e6a9583afdc68dc0d"},{url:"assets/js/page-常见问题.154375bf.js",revision:"ae47f04da6f14248e008949e992446ed"},{url:"assets/js/page-开发主题.fd276dd6.js",revision:"aed60ee2af2041ef1228d6b2d6c10355"},{url:"assets/js/page-插件.9e40f074.js",revision:"a6c9cf880695f5b5c2d3eeb79f056fa4"},{url:"assets/js/page-插件说明.330172d0.js",revision:"dc0b8cb735dde454e4924fef84a7b736"},{url:"assets/js/page-文件结构介绍.5cd7791d.js",revision:"3a3492825357fb07ee097dc07734ed4a"},{url:"assets/js/page-新增特性.3aa2409d.js",revision:"2a324c71a5e2e894dac6b877dbe7c868"},{url:"assets/js/page-新增组件.9b722a00.js",revision:"53e95b81cadf0895a77ac0bbed5060d2"},{url:"assets/js/page-流程图支持.10c163dc.js",revision:"7d9c8903f5360deb377c338b97303563"},{url:"assets/js/page-深色模式.72ba3c81.js",revision:"c448283befec20ba160f6e691cfdbe80"},{url:"assets/js/page-符号.f8f2e574.js",revision:"41ab2e7239dfae6dc5d5b09499e9ef8b"},{url:"assets/js/page-脚注.5b82a32b.js",revision:"2c5873c4365b1650b6ee296e539fd81f"},{url:"assets/js/page-自定义对齐.025ea8e5.js",revision:"ed95ac932e2a04a685cef4a3e5c1fd98"},{url:"assets/js/page-自然.a15c0628.js",revision:"e1e7c20ac7354f07e14d7437f0aa9298"},{url:"assets/js/page-评论功能.97ed178d.js",revision:"992499640753d6f3b5cf23263fedb66b"},{url:"assets/js/page-路径导航.28b89568.js",revision:"0738949d108049f9a42b64a47b514df3"},{url:"assets/js/page-页面.2bd7a78e.js",revision:"8dac9238e360bbb0ef6b4a67374dae0d"},{url:"assets/js/page-页面配置.cc2133e7.js",revision:"e199dd6934332a3ea804ecf321151686"},{url:"assets/js/page-项目指令.e0ad2cab.js",revision:"7ab07ad29b589bdcb2c81dcdef66c571"},{url:"assets/js/page-默认主题配置.359a7e3c.js",revision:"ff912face8bceec4443a31a58159cd15"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.9ea98a90.js",revision:"1f67061ebc26bf11920872ea03e7bad4"},{url:"assets/js/vendors~layout-Layout.e7d579d4.js",revision:"785c9c47493a3c304ee6baa3a34b8bdc"},{url:"basic/index.html",revision:"5211f154bda067078af1b0a12fcd8ac7"},{url:"basic/markdown/demo.html",revision:"7a0ccecca18a7b5e5484adbe2b4aedb6"},{url:"basic/markdown/emoji/index.html",revision:"99842dfc2f23ac03da47f721af45a26d"},{url:"basic/markdown/emoji/locate.html",revision:"2dd17a2ed3a8f08413d729d295df721b"},{url:"basic/markdown/emoji/nature.html",revision:"917a4984410bcb898193b296c407b737"},{url:"basic/markdown/emoji/object.html",revision:"e1538e9cd927a97509a28e48e9e96f54"},{url:"basic/markdown/emoji/people.html",revision:"9df58ede4cfa17c3dda66f6d99422bae"},{url:"basic/markdown/emoji/symbol.html",revision:"bae3859cf9ede88a3644f9d9cd4df326"},{url:"basic/markdown/index.html",revision:"305b627e6310854b74af1e64ca1d7359"},{url:"basic/vuepress/case.html",revision:"856c3f41f63db435798597f17df94ab6"},{url:"basic/vuepress/command.html",revision:"d9c73fbaa2d0bec26f430a304eded9cf"},{url:"basic/vuepress/file.html",revision:"7dacf6de07e8e0b41ca4ae7916af11fc"},{url:"basic/vuepress/index.html",revision:"5684d5982a0ef86e363e8106705f8591"},{url:"basic/vuepress/plugin.html",revision:"4b5512ce7493319b663f22ced6eacbe2"},{url:"basic/vuepress/theme/config.html",revision:"b14fae49732807c4df18cff00d2c3c37"},{url:"basic/vuepress/theme/dev.html",revision:"454c223cbf28b735efec1db50c3406e8"},{url:"basic/vuepress/theme/index.html",revision:"228a4fd21cc6dd91270eadff527629ed"},{url:"category/api/index.html",revision:"ebfaa32142cdda7089f302170b2dc82e"},{url:"category/api/page/2/index.html",revision:"044967f53bb91b1aeedd7c9f2d439276"},{url:"category/FAQ/index.html",revision:"98c58ca62538bc5e59e9c3cc8c27c857"},{url:"category/function/index.html",revision:"a25c62c0dd67fe67b48d1e20f39332cb"},{url:"category/function/page/2/index.html",revision:"9c3098fe88653d271dfc95505b323461"},{url:"category/index.html",revision:"8d1cef461f6e0499933cab5a4baf5522"},{url:"category/instruction/index.html",revision:"455e169f0c826c3b6068bf24ecff8e4f"},{url:"category/layout/index.html",revision:"5a690fd4e6ce35c6e942ab8c2d8a1d74"},{url:"category/layout/page/2/index.html",revision:"bbc6f3e54507ee946cc7a884f39085fc"},{url:"category/markdown/index.html",revision:"7dae80db39444388169ee8b30256f5d4"},{url:"category/style/index.html",revision:"dda12c19579e8d212b35411ac35bfd2a"},{url:"en/api/index.html",revision:"9de1eb2890cbc8093f3fd3899b6198c3"},{url:"en/api/page.html",revision:"b9c250e7e9b7c8406a7eb4b59084733b"},{url:"en/api/plugin/container.html",revision:"e2f6b73c3a4b8b24a2f464f00ec049dc"},{url:"en/api/plugin/copyright.html",revision:"b48cffbdd5565b3b0cb5f7e3e65e251f"},{url:"en/api/plugin/index.html",revision:"890205305b076a0654e815113fd6746c"},{url:"en/api/plugin/md-enhance.html",revision:"fa583a884e057d939b5c624ce48c4062"},{url:"en/api/plugin/medium-zoom.html",revision:"f90ca5a2a1a181dba7851ef482649f50"},{url:"en/api/plugin/pwa.html",revision:"54a92f442090ce8b9eb2533eba5f5256"},{url:"en/api/stylus.html",revision:"38d79e1bd4fbd2a072e6e83dbe4e5dd1"},{url:"en/api/themeConfig.html",revision:"4fdfe636d34e4c135d45ebd7f8c9fa93"},{url:"en/basic/index.html",revision:"411c562183d0a53499cc28f1742408f2"},{url:"en/basic/markdown/demo.html",revision:"ef64045d3654aa4ee40665b920eb80ff"},{url:"en/basic/markdown/emoji.html",revision:"a5d3bb4c4c5d343ee92e3b89eafe752e"},{url:"en/basic/markdown/index.html",revision:"ebefd4f50b5c9d9a15fcc2185440700d"},{url:"en/basic/vuepress/case.html",revision:"e94a61cf126a4f2e0ad687dc44622d7b"},{url:"en/basic/vuepress/command.html",revision:"0244c80250265184cb3b4c9327b5eb58"},{url:"en/basic/vuepress/file.html",revision:"30be92837649cdb6926f30a7c08818cd"},{url:"en/basic/vuepress/index.html",revision:"4a06817a3c7180241fb457cba2e7a607"},{url:"en/basic/vuepress/plugin.html",revision:"a0ecad66be5de49034020efd521264a9"},{url:"en/basic/vuepress/theme/config.html",revision:"c507ce35d77c22b45cc868fb7de141c3"},{url:"en/basic/vuepress/theme/dev.html",revision:"7cd320243e8998de93bf6a8dfcfd941a"},{url:"en/basic/vuepress/theme/index.html",revision:"026ca472f663e678fa6064e8197c08cb"},{url:"en/FAQ/index.html",revision:"4ec39973fae928ef447758bd0bae55c0"},{url:"en/guide/feature/blog.html",revision:"f768245b99f54c85acee57de9ddbee45"},{url:"en/guide/feature/comment.html",revision:"64e0b6623d8f535a3fa335cacbd2b145"},{url:"en/guide/feature/component.html",revision:"c9e94a9bced7eec6613a4030f506eb6b"},{url:"en/guide/feature/darkmode.html",revision:"06f92c3bdda5d5070933cd9370531328"},{url:"en/guide/feature/encrypt.html",revision:"99d0e61f4ddb2ff5a78c87b1ae2f0faa"},{url:"en/guide/feature/fullscreen.html",revision:"e673a6fa885cda8cb8c2711e4e8587b9"},{url:"en/guide/feature/icon.html",revision:"328ee891bc24848fbfb43f709e007ed1"},{url:"en/guide/feature/index.html",revision:"67e8ee65f5090176d351113dbccdf445"},{url:"en/guide/feature/themecolor.html",revision:"8d5e1b7567b4a43b4e0983a0109f8e8d"},{url:"en/guide/feature/typescript.html",revision:"ef52c4b6a6ed5fdcf1c0bac8720c7ef3"},{url:"en/guide/index.html",revision:"cdad4009d9dceb551ba872bc3b351fb8"},{url:"en/guide/install.html",revision:"ee1cd2782a20533089ea894b7d9651df"},{url:"en/guide/layout/breadcrumb.html",revision:"db3ea154fa4febbbb191b3efc2b8717d"},{url:"en/guide/layout/home.html",revision:"5f394437a0e8184d692bc5101f920543"},{url:"en/guide/layout/index.html",revision:"1f1f95a1c9c25a7140659ace3231debb"},{url:"en/guide/layout/navbar.html",revision:"ab97f662068e6850423648f1f0319439"},{url:"en/guide/layout/page.html",revision:"983911ff66fb925e9de3eea56784949c"},{url:"en/guide/layout/sidebar.html",revision:"9fec960262f0c6a7da05fa406e69dd34"},{url:"en/guide/markdown/align.html",revision:"bcb668dd77aaa57f2c0f234895005bf0"},{url:"en/guide/markdown/flowchart.html",revision:"f23849f19a38c856aa75f919b9579c78"},{url:"en/guide/markdown/footnote.html",revision:"b4d340015aa7875057b6c1f22ab74602"},{url:"en/guide/markdown/index.html",revision:"1d9515b11cf4ae880d3e3537bb9a4ce9"},{url:"en/guide/markdown/sup-sub.html",revision:"da0006b483ade4d8bd1eba8c432ce60a"},{url:"en/guide/markdown/tex.html",revision:"1f9a1bb7b6a5ebe5e284afd5250b50b7"},{url:"en/index.html",revision:"2cd0a26ba30fd5c554e67225b18d3c00"},{url:"FAQ/index.html",revision:"0e887b0e29ee93aa9953f887ec61944e"},{url:"guide/feature/blog.html",revision:"96ab13b134cbe3bd522b9b6bc62963f5"},{url:"guide/feature/comment.html",revision:"1683dd98e4d196af1d51481e0c61c4d1"},{url:"guide/feature/component.html",revision:"40171213001a0246fe4ea36bbd8df7ca"},{url:"guide/feature/darkmode.html",revision:"a1d258a070a9f1b3f447df4b36704525"},{url:"guide/feature/encrypt.html",revision:"51dddd3fed9500de91020c4742513304"},{url:"guide/feature/fullscreen.html",revision:"ae01410b98f8fa51adb2e5cec86c3fff"},{url:"guide/feature/icon.html",revision:"707ec3896681acc6992d31a76c2362e5"},{url:"guide/feature/index.html",revision:"9d636ea1fedf964517c671e428840b57"},{url:"guide/feature/themecolor.html",revision:"e4ab4b8702f56e7d08a551aed1276262"},{url:"guide/feature/typescript.html",revision:"e92a790c957f50e337a618837ee952bb"},{url:"guide/index.html",revision:"530c956903b45c323fe8bcac39ddd89a"},{url:"guide/install.html",revision:"cfc222dd8809ae26addde8ac57017cd6"},{url:"guide/layout/breadcrumb.html",revision:"951128b916aa31c28b722b23f80cf1fb"},{url:"guide/layout/home.html",revision:"9483fe2cd86fc9fd8ca464c87c966de0"},{url:"guide/layout/index.html",revision:"97a32a1996ab2451df4c44a1f04cfff7"},{url:"guide/layout/navbar.html",revision:"d3e1eefebbb10fccb07cfda09fad55b9"},{url:"guide/layout/page.html",revision:"5df9a874b75afe2d7511e77577e25caa"},{url:"guide/layout/sidebar.html",revision:"a1df66cb2a147845109f4f27c3becefe"},{url:"guide/markdown/align.html",revision:"415762258d9ff5acbe863115307836c1"},{url:"guide/markdown/flowchart.html",revision:"3ad9f498afd52237e19022f6d6097f6b"},{url:"guide/markdown/footnote.html",revision:"bdabd62804bbdf70f7a3f01789f1a953"},{url:"guide/markdown/index.html",revision:"71bc20febd6a9926963ad112c04b7453"},{url:"guide/markdown/sup-sub.html",revision:"180882a2ed30370e1236c546a40e9cb0"},{url:"guide/markdown/tex.html",revision:"2a2de3006954dbcd717197e5dc3a44b1"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"dc3e9802b2deb3582c9877a15185a591"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"a2afbd16bcab2cf80981e34ee45f89dc"},{url:"tag/api/page/2/index.html",revision:"30ef671def1e63aa5f5ab6299aee6190"},{url:"tag/blog/index.html",revision:"14e2c6cd49c437ce3ff505e4d1c55721"},{url:"tag/comment/index.html",revision:"f9800b77d0193a2e7153bee0aa1bd4da"},{url:"tag/component/index.html",revision:"783c271ea27042c3689e2e6cb3d3c0b9"},{url:"tag/components/index.html",revision:"f9c577d506587be1e15bad169a247f3a"},{url:"tag/emoji/index.html",revision:"33def418a3a31b4d614705d0c4022a36"},{url:"tag/encrypt/index.html",revision:"f526f7f094e4b8d104874ba512dfa878"},{url:"tag/enhance/index.html",revision:"cbd19c28cdf6c65d9dff567952d57bd3"},{url:"tag/frontmatter/index.html",revision:"0b70065f5c3d74a479e086c3e06d6b01"},{url:"tag/fullscreen/index.html",revision:"2b80a9059b5b2f1f6d4ddfc983c4a070"},{url:"tag/function/index.html",revision:"4e7c0bf4b19ce198689223eafc6e5f96"},{url:"tag/function/page/2/index.html",revision:"73849a9e37dc43119acb7802dc5a7177"},{url:"tag/home/index.html",revision:"030860393b8d0c4c8477615306dc3d39"},{url:"tag/icon/index.html",revision:"fb995958ca9795220c32965856e02ef9"},{url:"tag/index.html",revision:"14f18c7d89b6d3e0b3c9f7f564e77e14"},{url:"tag/intro/index.html",revision:"c57c39723384f6f0d4b7c9e89f987859"},{url:"tag/layout/index.html",revision:"a085b28d4e082f01ec55b8e0b684fc70"},{url:"tag/markdown/index.html",revision:"d088f8020f2f4d6c47cb58c7dbaa1593"},{url:"tag/plugin/index.html",revision:"619e3842f925713300b4183434458383"},{url:"tag/plugin/page/2/index.html",revision:"a8f82db40f65e3c70a0db8449c5b3dba"},{url:"tag/style/index.html",revision:"0b008b01ed2ef2550d275016bc3746b8"},{url:"tag/themeConfig/index.html",revision:"faa54bdf2bafa0339155a306f7f6be7f"},{url:"tag/typescript/index.html",revision:"8fdb624ff80c7587380dac043f20ff7c"},{url:"tag/vuepress/index.html",revision:"0dee7907213dfbd153d384129b5754d0"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting')
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
