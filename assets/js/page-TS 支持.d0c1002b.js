(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{668:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ts-支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ts-支持"}},[s._v("#")]),s._v(" TS 支持")]),s._v(" "),e("p",[s._v("vuepress-theme-hope 的大部分文件都是使用 Typescript 编写，所以 vuepress-theme-hope 也为你的 vuepress 项目带来了原生的 Typescript 支持。")]),s._v(" "),e("p",[s._v("这意味着你可以使用 "),e("code",[s._v("enhanceAppFiles.ts")]),s._v("，同时在你的 vue 组件 和 Markdown 文件中使用 Tyepscript。")]),s._v(" "),e("p",[s._v("启用本主题后，你无需再依赖并启用 "),e("code",[s._v("@vuepress/plugin-typescript")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("p",[s._v("在启用本主题后，你需要保证你的工作区包含有效的 "),e("code",[s._v("tsconfig.json")]),s._v("。 一个最简单的 "),e("code",[s._v("tsconfig.json")]),s._v(" 如下:")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 任何不低于 ES6 的 target 均可")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimentalDecorators"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue 的 Typescript 写法需要开启此选项")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vuepress 与本主题的类型定义文件")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@mr-hope/vuepress-theme-types"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-types"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/.vuepress/enhanceApp.ts"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 需要至少命中一个 ts 文件")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[e("code",[s._v("ts-loader")]),s._v(" 要求 "),e("code",[s._v("tsconfig.json")]),s._v(" 至少命中一个有效的 ts 文件，所以最简单的办法就是创建或者转换(如果你已经有了 "),e("code",[s._v("enhanceAppFiles.js")]),s._v(") 一个 "),e("code",[s._v("enhanceAppFiles.ts")]),s._v(" 并将它添加至 "),e("code",[s._v("include")]),s._v(" 选项中")])])])}),[],!1,null,null,null);t.default=n.exports}}]);