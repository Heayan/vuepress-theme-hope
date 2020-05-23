(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{681:function(t,v,_){"use strict";_.r(v);var e=_(1),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"页面信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面信息"}},[t._v("#")]),t._v(" 页面信息")]),t._v(" "),_("p",[t._v("页面信息支持页面配置<>。默认全局启用展示。你可以在特定页面的 "),_("code",[t._v("Front Matter")]),t._v(" 中设置 "),_("code",[t._v("pageInfo: false")]),t._v(" 来局部禁用它。")]),t._v(" "),_("p",[t._v("如果你需要保持全局禁用，请设置 "),_("code",[t._v("themeConfig.pageInfo")]),t._v(" 为 "),_("code",[t._v("false")]),t._v("。这样你可以在特定页面的 "),_("code",[t._v("Front Matter")]),t._v(" 中设置 "),_("code",[t._v("pageInfo")]),t._v(" 来局部启用它。")]),t._v(" "),_("h2",{attrs:{id:"参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数 "),_("MyBadge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),_("p",[_("code",[t._v("pageInfo")]),t._v(" 默认接受一个字符串数组，可以填入各条目名称，填入的顺序即是各条目显示的顺序。")]),t._v(" "),_("p",[t._v("条目可选的值和对应内容如下:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("条目")]),t._v(" "),_("th",[t._v("对应内容")]),t._v(" "),_("th",[t._v("页面 Front Matter 值")]),t._v(" "),_("th",[t._v("主题设置的配置项")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("'author'")])]),t._v(" "),_("td",[t._v("作者")]),t._v(" "),_("td",[t._v("author")]),t._v(" "),_("td",[t._v("author")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'time'")])]),t._v(" "),_("td",[t._v("写作日期")]),t._v(" "),_("td",[t._v("time")]),t._v(" "),_("td",[t._v("N/A")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'category'")])]),t._v(" "),_("td",[t._v("分类")]),t._v(" "),_("td",[t._v("category")]),t._v(" "),_("td",[t._v("N/A")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'tag'")])]),t._v(" "),_("td",[t._v("标签")]),t._v(" "),_("td",[t._v("tags")]),t._v(" "),_("td",[t._v("N/A")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'readtime'")])]),t._v(" "),_("td",[t._v("预计阅读时间")]),t._v(" "),_("td",[t._v("N/A(自动生成)")]),t._v(" "),_("td",[t._v("N/A")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'word'")])]),t._v(" "),_("td",[t._v("字数")]),t._v(" "),_("td",[t._v("N/A(自动生成)")]),t._v(" "),_("td",[t._v("N/A")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("'visitor'")])]),t._v(" "),_("td",[t._v("访问量")]),t._v(" "),_("td",[t._v("visitor(仅 Valine 可用)")]),t._v(" "),_("td",[t._v("comment.visitor")])])])]),t._v(" "),_("p",[t._v("默认会显示 “作者，访问量，写作日期，分类，标签，预计阅读时间”。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("作者")]),t._v(" "),_("MyBadge",{attrs:{text:"支持页面配置"}})],1)]),t._v(" "),_("p",[t._v("例子:")]),t._v(" "),_("div",{staticClass:"language-md line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-md"}},[_("code",[_("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[t._v("author: Mr.Hope\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("作者姓名也可以在 "),_("code",[t._v("themeConfig.author")]),t._v(" 中全局配置，这样每篇文章都会显示默认作者。这时，你仍可以在页面中配置 Front Matter 中的 "),_("code",[t._v("author")]),t._v(" 为一个新值来覆盖默认作者，或者设置 "),_("code",[t._v("author")]),t._v(" 为 "),_("code",[t._v("false")]),t._v(" 取消作者显示。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("写作日期")])])]),t._v(" "),_("p",[t._v("建议 time 以标准格式输入日期，即 "),_("code",[t._v("xxxx-xx-xx")]),t._v(" 的形式，如 “2020 年 4 月 1 日” 应当输入为 "),_("code",[t._v("2020-04-01")])]),t._v(" "),_("p",[t._v("例子:")]),t._v(" "),_("div",{staticClass:"language-md line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-md"}},[_("code",[_("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[t._v("time: 2020-01-01\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("ul",[_("li",[_("strong",[t._v("分类 与 标签")])])]),t._v(" "),_("p",[t._v("详见 "),_("RouterLink",{attrs:{to:"/guide/feature/blog.html"}},[t._v("博客章节")])],1),t._v(" "),_("ul",[_("li",[_("strong",[t._v("阅读时间")])])]),t._v(" "),_("p",[t._v("默认的统计方式是一分钟 300 字，你可以设置 "),_("code",[t._v("themeConfig.wordPerminute")]),t._v(" 来覆盖它，该选项不支持在页面单独配置。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("阅读量")]),t._v(" "),_("MyBadge",{attrs:{text:"支持页面配置"}})],1)]),t._v(" "),_("p",[t._v("当配置 "),_("RouterLink",{attrs:{to:"/guide/feature/comment.html"}},[t._v("评论功能")]),t._v(" 后，该功能默认启用。")],1),t._v(" "),_("p",[t._v("例子:")]),t._v(" "),_("div",{staticClass:"language-md line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-md"}},[_("code",[_("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token title important"}},[t._v("visitor: false\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),t._v("<><>"),_("p",[_("strong",[t._v("支持页面配置")]),t._v(" "),_("MyBadge",{attrs:{text:"支持页面配置"}})],1),t._v(" "),_("p",[_("strong",[t._v("支持页面配置")]),t._v(" 指主题允许页面的配置覆盖全局的配置。这意味着你可以在全局启用的情况下，在特定页面将其禁用，或在全局禁用的情况下在特定页面启用。")]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("例子")]),t._v(" "),_("p",[t._v("以路径导航为例：")]),t._v(" "),_("p",[t._v("该功能默认全局启用，即 "),_("code",[t._v("themeConfig.breadcrumb")]),t._v(" 默认为 "),_("code",[t._v("true")]),t._v("，同时你可以在特定页面的 Front Matter 中设置 "),_("code",[t._v("breadcrumb: false")]),t._v(" 来局部禁用它。")]),t._v(" "),_("p",[t._v("当然你也可以将 "),_("code",[t._v("themeConfig.breadcrumb")]),t._v(" 选项设置为 "),_("code",[t._v("false")]),t._v(" 来全局禁用它，之在特定页面的 Front Matter 中设置 "),_("code",[t._v("breadcrumb: true")]),t._v(" 来局部启用它。")])]),t._v("\n<></></>")])}),[],!1,null,null,null);v.default=a.exports}}]);