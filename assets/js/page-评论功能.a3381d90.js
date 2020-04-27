(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{562:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"评论功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论功能"}},[s._v("#")]),s._v(" 评论功能")]),s._v(" "),a("p",[s._v("vuepress-theme-hope 通过内置 "),a("code",[s._v("@mr-hope/vuepress-plugin-comment")]),s._v("，实现了评论功能。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'valine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 Valine")]),s._v("\n      appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appId")]),s._v("\n      appKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appKey")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("有 Valine 和 Vssue 可以选择。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("如果你希望看到更详细的评论设置，可以访问 "),a("a",{attrs:{href:"https://vuepress-comment.mrhope.site",target:"_blank",rel:"noopener noreferrer"}},[s._v("@mr-hope/vuepress-plugin-comment 插件文档"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"valine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[s._v("#")]),s._v(" Valine")]),s._v(" "),a("p",[s._v("借助 Valine，主题实现了无后端开启阅读量展示与评论功能。")]),s._v(" "),a("h3",{attrs:{id:"获取-app-id-和-app-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-app-id-和-app-key"}},[s._v("#")]),s._v(" 获取 APP ID 和 APP Key")]),s._v(" "),a("p",[s._v("请先 "),a("a",{attrs:{href:"https://leancloud.cn/dashboard/login.html#/signin",target:"_blank",rel:"noopener noreferrer"}},[s._v("登录"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://leancloud.cn/dashboard/login.html#/signup",target:"_blank",rel:"noopener noreferrer"}},[s._v("注册"),a("OutboundLink")],1),s._v(" LeanCloud, 进入控制台后点击左下角创建应用：")]),s._v(" "),a("p",[s._v("应用创建好以后，进入刚刚创建的应用，选择左下角的 "),a("code",[s._v("设置 > 应用Key")]),s._v("，然后就能看到你的 "),a("code",[s._v("APP ID")]),s._v(" 和 "),a("code",[s._v("APP Key")]),s._v(" 了：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'valine'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appId")]),s._v("\n  appKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// your appKey")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("将对应的 "),a("code",[s._v("APP ID")]),s._v(" 和 "),a("code",[s._v("APP Key")]),s._v(" 填入， Valine 即配置完成。")]),s._v(" "),a("p",[s._v("Valine 评论的其他配置将在 "),a("a",{attrs:{href:"http://vuepress-comment.mrhope.site/api/valine.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置"),a("OutboundLink")],1),s._v(" 中列出。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("更多配置与使用，请见 "),a("a",{attrs:{href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Valine 官方文档"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"vssue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue"}},[s._v("#")]),s._v(" Vssue")]),s._v(" "),a("h3",{attrs:{id:"选择你要使用的代码托管平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择你要使用的代码托管平台"}},[s._v("#")]),s._v(" 选择你要使用的代码托管平台")]),s._v(" "),a("p",[s._v("Vssue 支持通过 Github, Gitlab, Bitbucket 或者 Gitee 的 Issue 系统来为你的静态页面提供评论功能，你可以选择其中之一来使用。")]),s._v(" "),a("p",[s._v("前往 "),a("a",{attrs:{href:"http://comment.mrhope.site/guide/supported-platforms.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("支持的代码托管平台 - 创建 OAuth App"),a("OutboundLink")],1),s._v(" 查看详细指引。")]),s._v(" "),a("p",[s._v("完成这一步之后，你将会配置好一个 OAuth App，并得到对应的 "),a("code",[s._v("client id")]),s._v(" 和 "),a("code",[s._v("client secret")]),s._v("，它们将会用于 Vssue 的使用。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("owner")]),s._v(": 对应 repository 的拥有者帐号或者团队")]),s._v(" "),a("li",[a("code",[s._v("repo")]),s._v(": 用来存储评论的 repository")]),s._v(" "),a("li",[a("code",[s._v("clientId")]),s._v(": OAuth App 的 "),a("code",[s._v("client id")])]),s._v(" "),a("li",[a("code",[s._v("clientSecret")]),s._v(": OAuth App 的 "),a("code",[s._v("client secret")]),s._v(" （只有在使用某些平台时需要）")])]),s._v(" "),a("h3",{attrs:{id:"使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[s._v("#")]),s._v(" 使用插件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@mr-hope/comment'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 `platform` 而不是 `api`")]),s._v("\n      platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其他的 Vssue 配置")]),s._v("\n      owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OWNER_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_CLIENT_SECRET'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("唯一的区别在于，你需要设置 "),a("code",[s._v("platform")]),s._v(" 而不是对应的 "),a("code",[s._v("api")]),s._v(" 包。")]),s._v(" "),a("p",[a("code",[s._v("@vssue/vuepress-plugin-vssue")]),s._v(" 会自动根据你设置的 "),a("code",[s._v("platform")]),s._v(" 为你解析对应的 api 包：")]),s._v(" "),a("ul",[a("li",[s._v("platform "),a("code",[s._v("github")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-github-v3")])]),s._v(" "),a("li",[s._v("platform "),a("code",[s._v("github-v4")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-github-v4")])]),s._v(" "),a("li",[s._v("platform "),a("code",[s._v("gitlab")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-gitlab-v4")])]),s._v(" "),a("li",[s._v("platform "),a("code",[s._v("bitbucket")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-bitbucket-v2")])]),s._v(" "),a("li",[s._v("platform "),a("code",[s._v("gitee")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-gitee-v5")])]),s._v(" "),a("li",[s._v("platform "),a("code",[s._v("gitea")]),s._v(" - api 包 "),a("code",[s._v("@vssue/api-gitea-v1")])])])]),s._v(" "),a("h3",{attrs:{id:"使用-vssue-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vssue-组件"}},[s._v("#")]),s._v(" 使用 Vssue 组件")]),s._v(" "),a("p",[a("code",[s._v("Vssue")]),s._v(" 已经注册为 Vue 组件，你可以在你的 VuePress Markdown 文件中直接使用它。")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- README.md --\x3e")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" Vssue Demo")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Vssue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("Vssue Demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"自定义样式变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义样式变量"}},[s._v("#")]),s._v(" 自定义样式变量")]),s._v(" "),a("p",[s._v("通过 VuePress 的 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[s._v("palette.styl"),a("OutboundLink")],1),s._v("，你可以很轻松地修改 Vssue 的样式变量。")]),s._v(" "),a("p",[s._v("Vssue 样式中预定义了一些 "),a("a",{attrs:{href:"http://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Stylus 变量"),a("OutboundLink")],1),s._v("，你可以在 "),a("code",[s._v("vssue/src/styles/_variables.styl")]),s._v(" 中查看它们：")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主题颜色")]),s._v("\n$vssue-theme-color\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文字颜色 （用于普通文字）")]),s._v("\n$vssue-text-color\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 浅色文字颜色 （用于备注等文字）")]),s._v("\n$vssue-text-light-color\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 边框颜色")]),s._v("\n$vssue-border-color\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 进度条颜色")]),s._v("\n$vssue-progress-color\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文字大小")]),s._v("\n$vssue-font-size\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字体")]),s._v("\n$vssue-font-family\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切换为移动端模式的屏幕宽度")]),s._v("\n$vssue-breakpoint-mobile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 文字方向 (ltr / rtl) （为 RTL 语言使用，如希伯来语等）")]),s._v("\n$vssue-direction\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("举例来说，Vssue 默认使用一个“Vue 绿色”（"),a("code",[s._v("#3eaf7c")]),s._v("）作为主题颜色，并将其设置为 "),a("code",[s._v("$vssue-theme-color")]),s._v(" 的默认值。你可以在引入 "),a("code",[s._v("vssue/src/styles/index.styl")]),s._v(" 之前设置 "),a("code",[s._v("$vssue-theme-color")]),s._v(" 的值来改变主题颜色。")]),s._v(" "),a("p",[s._v("默认情况下，下面这些 Vssue 的样式变量与 VuePress 的样式变量相等：")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @vssue/vuepress-plugin-vssue/styles/index.styl")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-theme-color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $accentColor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-text-color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $textColor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-border-color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $borderColor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-breakpoint-mobile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" $MQMobile")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("如果你想要覆盖它们，在你的 "),a("code",[s._v("palette.styl")]),s._v(" 中设置即可：")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/styles/palette.styl")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$accentColor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" blue")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vssue-theme-color")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" red")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"不想使用-vssue-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不想使用-vssue-插件"}},[s._v("#")]),s._v(" 不想使用 Vssue 插件")]),s._v(" "),a("p",[s._v("Vssue 是适配 SSR 的，所以你可以不使用 "),a("code",[s._v("@vssue/vuepress-plugin-vssue")]),s._v("，而是像其他 Vue 插件 / 组件一样，在 VuePress 中直接引入 Vssue（尤其是在你对 Vssue 的样式进行了自定义的时候）。")]),s._v(" "),a("p",[s._v("但是我们仍然建议你在 VuePress 中通过 "),a("code",[s._v("@vssue/vuepress-plugin-vssue")]),s._v(" 来使用 Vssue，该插件已经帮助你仅在客户端加载 Vssue 来避免一些潜在的问题。")]),s._v(" "),a("p",[s._v("如果你不想使用我们提供的插件，你可能需要将 "),a("code",[s._v("<Vssue>")]),s._v(" 组件放置在 "),a("code",[s._v("<ClientOnly>")]),s._v(" 组件中来避免这些潜在的问题，即：")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Vssue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("参考 VuePress "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/using-vue.html#clientonly",target:"_blank",rel:"noopener noreferrer"}},[s._v("内置的组件 - ClientOnly"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);