(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{"9ZTi":function(s,a,t){"use strict";t.r(a);var r={data:function(){return{show:!0,billboards1:[],billboards2:[],url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{}}},methods:{ready:function(s){for(var a=s.Cesium,t=(s.viewer,[]),r=[],l=0;l<100;l++){var e={};e.position={lng:40*Math.random()+85,lat:30*Math.random()+21},e.image="https://zouyaoji.top/vue-cesium/favicon.png",e.scale=.1,t.push(e);var v={};v.position={lng:40*Math.random()+85,lat:30*Math.random()+21},v.image="https://zouyaoji.top/vue-cesium/favicon.png",v.scale=.15,r.push(v)}this.billboards1=t,this.billboards2=r,this.modelMatrix=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(105,38,1e4))}}},l=t("JFUb"),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("PrimitiveCollection")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载普通图元集合")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-collection-primitive",{attrs:{show:s.show}},[t("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards1}}),s._v(" "),t("vc-collection-primitive",[t("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards2}})],1)],1),s._v(" "),t("vc-collection-primitive",[t("vc-primitive-model",{attrs:{url:s.url,modelMatrix:s.modelMatrix,scale:1e4,minimumPixelSize:128,maximumScale:2e5}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v(s._s(s.show?"隐藏":"显示"))]),s._v(" "),t("md-switch",{model:{value:s.show,callback:function(a){s.show=a},expression:"show"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("vc-collection-primitive")]),s._v(" 组件用于加载常规图元集合。通常用的是 "),t("code",{pre:!0},[s._v("vc-viewer")]),s._v(" 初始化得到的 "),t("code",{pre:!0},[s._v("Viewer")]),s._v(" 实例自带的一个成员属性 "),t("code",{pre:!0},[s._v("Scene.primitives")]),s._v("。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层再加载到 "),t("code",{pre:!0},[s._v("Scene.primitives")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards1"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards2"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10000"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":minimumPixelSize")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"128"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":maximumScale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{ show ? '隐藏' : '显示' }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards1")]),s._v(": [],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards2")]),s._v(": [],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": {}\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards1 = []\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards2 = []\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("; i++) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard1 = {}\n          billboard1.position = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard1.image = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard1.scale = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          billboards1.push(billboard1)\n\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard2 = {}\n          billboard2.position = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard2.image = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard2.scale = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.15")]),s._v("\n          billboards2.push(billboard2)\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboards1 = billboards1\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboards2 = billboards2\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v("))\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元集合中的图元是否显示。")])]),s._v(" "),t("tr",[t("td",[s._v("destroyPrimitives")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定移除图元集合时是否销毁集合中的图元。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("参考官方文档："),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html"}},[this._v("PrimitiveCollection")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);a.default=e.exports},cwaf:function(s,a,t){s.exports=t("9ZTi")}}]);
//# sourceMappingURL=203.2356775eb354aeb4c735.js.map