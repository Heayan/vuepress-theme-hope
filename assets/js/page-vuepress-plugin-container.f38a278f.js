(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{486:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[t._v("#")]),t._v(" vuepress-plugin-container "),a("MyBadge",{attrs:{text:"改进"}})],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("请注意， markdown 增强中的自适应对齐应用了该插件，因此如果您禁用本插件，您将无法使用自定义对齐，以及默认主题所提供的提示框。")])]),t._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("这是一个必需的选项")])]),t._v(" "),a("p",[t._v("容器的类型。举个例子，如果 "),a("code",[t._v("type")]),t._v(" 被设置为 "),a("code",[t._v("foo")]),t._v("，则仅有下面的语法会被解析为 markdown 容器：")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: foo bar\n随便写点啥 ~\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle"}},[t._v("#")]),t._v(" defaultTitle")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string | Record<string, string>")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("type")]),t._v(" 的大写形式")])]),t._v(" "),a("p",[t._v("容器的默认标题。如果没有提供标题，则会使用 "),a("code",[t._v("defaultTitle")]),t._v(" 作为容器的标题。")]),t._v(" "),a("p",[t._v("提供一个对象作为多语言配置，则默认标题将会基于当前 "),a("code",[t._v("locale")]),t._v(" 选取。")]),t._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}},[t._v("#")]),t._v(" before")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string | ((info: string) => string)")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("要插入在容器前的 HTML。")]),t._v(" "),a("p",[t._v("如果设置为一个函数，将传入当前的 "),a("code",[t._v("info")]),t._v(" 作为第一个参数。（在上面的例子中，"),a("code",[t._v("info")]),t._v(" 的值为 "),a("code",[t._v("bar")]),t._v("。）")]),t._v(" "),a("p",[t._v("如果设置了 "),a("code",[t._v("before")]),t._v(" 的值， "),a("code",[t._v("defaultTitle")]),t._v(" 将会被忽略。")]),t._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}},[t._v("#")]),t._v(" after")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string | ((info: string) => string)")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("要插入在容器后的 HTML。")]),t._v(" "),a("p",[t._v("如果设置为一个函数，将传入当前的 "),a("code",[t._v("info")]),t._v(" 作为第一个参数。（在上面的例子中，"),a("code",[t._v("info")]),t._v(" 的值为 "),a("code",[t._v("bar")]),t._v("。）")]),t._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[t._v("#")]),t._v(" validate")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("((params: string) => boolean)")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("一个用于判定容器是否结束的函数。当认定容器范围结束时应返回一个 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Function")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("容器开头和结束 token 的渲染函数。如果设置了这个值， "),a("code",[t._v("before")]),t._v(", "),a("code",[t._v("after")]),t._v(" 和 "),a("code",[t._v("defaultTitle")]),t._v(" 都将被忽略。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker"}},[t._v("#")]),t._v(" marker")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("':'")])])]),t._v(" "),a("p",[t._v("用于分隔符的字符。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it-container API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports},515:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container"}},[t._v("#")]),t._v(" vuepress-plugin-container "),a("MyBadge",{attrs:{text:"improve"}})],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Please note that this plugin is applied to alignment in markdown enhancements, so if you disable this plugin, you will not be able to use custom alignment and the prompt boxes provided by the default theme.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-item"}},[t._v("#")]),t._v(" Configuration Item")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://vuepress.github.io/en/plugins/container/#Configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Documentation"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"demonstration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demonstration"}},[t._v("#")]),t._v(" Demonstration")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: center\nI am in the middle\n:::\n\n::: right\nI am on the right\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"custom-block center"},[a("p",[t._v("I am in the middle")])]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("I am on the right")])])])}),[],!1,null,null,null);e.default=n.exports}}]);