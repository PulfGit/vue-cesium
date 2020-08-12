(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{UqOc:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),l={data:function(){return{description:"Hello Vue Cesium",ellipsoid1:{},position1:{lng:114,lat:40,height:3e5},radii1:{x:2e5,y:2e5,z:3e5},material1:"BLUE",ellipsoid2:{},position2:{lng:107,lat:40,height:3e5},radii2:{x:3e5,y:3e5,z:3e5},outlineColor2:"BLACK",material2:{},ellipsoid3:{},position3:{lng:100,lat:40,height:3e5},radii3:{x:2e5,y:2e5,z:3e5},outlineColor3:"YELLOW"}},mounted:function(){e.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise,this.$refs.entity3.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material2=t.Color.RED.withAlpha(.5)}}},v=a("JFUb"),_=Object(v.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("EllipsoidGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载(椭)球体")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-entity",{ref:"entity1",attrs:{position:s.position1,description:s.description,ellipsoid:s.ellipsoid1},on:{"update:ellipsoid":function(t){s.ellipsoid1=t}}},[a("vc-graphics-ellipsoid",{attrs:{radii:s.radii1,material:s.material1,outline:!0}})],1),s._v(" "),a("vc-entity",{ref:"entity2",attrs:{position:s.position2,description:s.description,ellipsoid:s.ellipsoid2},on:{"update:ellipsoid":function(t){s.ellipsoid2=t}}},[a("vc-graphics-ellipsoid",{attrs:{radii:s.radii2,outline:!0,material:s.material2,outlineColor:s.outlineColor2}})],1),s._v(" "),a("vc-entity",{ref:"entity3",attrs:{position:s.position3,description:s.description,ellipsoid:s.ellipsoid3},on:{"update:ellipsoid":function(t){s.ellipsoid3=t}}},[a("vc-graphics-ellipsoid",{attrs:{radii:s.radii3,fill:!1,outline:!0,outlineColor:s.outlineColor3,slicePartitions:24,stackPartitions:36}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-graphics-ellipsoid")]),this._v(" 组件用于加载 (椭)球体。需要作为 "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(" 的子组件使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipsoid.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipsoid1"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radii")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radii1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipsoid.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipsoid2"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radii")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radii2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipsoid.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipsoid3"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radii")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radii3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slicePartitions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"24"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stackPartitions")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipsoid")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipsoid1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("114.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radii1")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'BLUE'")]),s._v(",\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipsoid2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radii2")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'BLACK'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipsoid3")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radii3")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YELLOW'")]),s._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity1.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity2.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity3.createPromise]).then(\n        "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n          instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n        }\n      )\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("radii")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 的半径参数。 "),a("strong",[s._v("结构： { x: number, y: number, z: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("heightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 是否填充材质。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 材质。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 是否绘制轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BLACK'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 轮廓线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 轮廓线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("stackPartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("64")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the number of stacks.")])]),s._v(" "),a("tr",[a("td",[s._v("slicePartitions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("64")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the number of radial slices.")])]),s._v(" "),a("tr",[a("td",[s._v("subdivisions")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("128")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 每个轮环的样本数，确定曲率粒度。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 是否投射或接受每一个光源的阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 ellipsoid 随相机距离的显示条件。 "),a("strong",[s._v("结构：{ near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html"}},[this._v("EllipsoidGraphics")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);t.default=_.exports},nBjc:function(s,t,a){s.exports=a("UqOc")}}]);
//# sourceMappingURL=124.d7ce72a13d7934fbdbe8.js.map