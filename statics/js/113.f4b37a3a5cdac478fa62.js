(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{hJtQ:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),n=a("vYYK"),l={data:function(){var s;return s={show:!0,id:"This is a billboard",description:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:100},billboard:{}},Object(n.a)(s,"description","Hello Vue Cesium"),Object(n.a)(s,"cylinder1",{}),Object(n.a)(s,"position1",{lng:105,lat:40,height:2e5}),Object(n.a)(s,"outlineColor1","DARK_GREEN"),Object(n.a)(s,"material1",{}),Object(n.a)(s,"cylinder2",{}),Object(n.a)(s,"position2",{lng:110,lat:40,height:2e5}),Object(n.a)(s,"material2","RED"),Object(n.a)(s,"datas",[]),s},mounted:function(){e.a.all([this.$refs.entity1.createPromise,this.$refs.cylinder1.createPromise,this.$refs.cylinder2.createPromise]).then((function(s){s[0].viewer.camera.setView({destination:new Cesium.Cartesian3(-2310285.0191093646,5365872.967043371,3108924.304301176),orientation:{heading:.07310634629277768,pitch:-1.5094668006074268,roll:.0003451814958399524}})}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material1=t.Color.GREEN.withAlpha(.5),this.billboard=new t.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",show:!0,pixelOffset:new t.Cartesian2(0,-50),eyeOffset:new t.Cartesian3(0,0,0),horizontalOrigin:t.HorizontalOrigin.CENTER,verticalOrigin:t.VerticalOrigin.BOTTOM,scale:.5,color:t.Color.LIME,alignedAxis:t.Cartesian3.ZERO}),this.addPoints(!0)},datasourceReady:function(s){s.Cesium,s.viewer,s.cesiumObject;this.$refs["ds"+s.name][0].createPromise.then((function(s){s.Cesium,s.viewer;var t=s.cesiumObject;t.clustering.enabled=!0,t.clustering.pixelRange=30,t.clustering.minimumClusterSize=3}))},datasourceClusterEvent:function(s,t){t.label.show=!0,t.label.scale=.5,t.label.fillColor=Cesium.Color.fromCssColorString("#FFFFFF"),t.label.style=Cesium.LabelStyle.FILL,t.label.font="30px caption",t.label.VerticalOrigin=Cesium.VerticalOrigin.BOTTOM,t.label.pixelOffset=new Cesium.Cartesian2(-7,5),t.label.disableDepthTestDistance=Number.POSITIVE_INFINITY,t.point.show=!0,t.point.id=t.label.id,t.point.color=Cesium.Color.LIGHTSLATEGRAY,s.length>=100?(t.point.pixelSize=38,t.label.pixelOffset=new Cesium.Cartesian2(-12,5)):s.length>=50?t.point.pixelSize=36:s.length>=40?t.point.pixelSize=33:s.length>=30?t.point.pixelSize=28:s.length>=20?t.point.pixelSize=25:s.length>=10?(t.label.pixelOffset=new Cesium.Cartesian2(-6,4),t.label.scale=.4,t.point.pixelSize=20):s.length>=5?(t.label.pixelOffset=new Cesium.Cartesian2(-3,4),t.label.scale=.4,t.point.pixelSize=15):(t.label.pixelOffset=new Cesium.Cartesian2(-3,4),t.label.scale=.4,t.point.pixelSize=13)},getPosition:function(s){return{lng:s.Longitude,lat:s.Latitude,height:1e3}},addPoints:function(s){this.showPoints({id:"1001",code:"1001",name:"test",iconOn:"./statics/SampleData/points/pic.png",giscolor:"#fb7228",datauri:"./statics/SampleData/points/yj.json"},s)},showPoints:function(s,t){var a=this;t?Cesium.Resource.fetchJson(s.datauri).then((function(t){var r=new Image;r.src=s.iconOn,r.onload=function(){var e=[],n={name:s.code,type:"point",clustering:!0,data:[],iconUrl:s.iconOn,color:s.giscolor,width:r.width,height:r.height};n.data=t.reduce((function(s,t){return s.concat({Longitude:t.Longitude,Latitude:t.Latitude,id:t.id,description:t.name})}),[]),e.push(n),a.datas=e}})):this.datas=[]}}},p=a("JFUb"),v=Object(p.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("CustomDataSource")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载 Custom 数据源")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-datasource-custom",{ref:"datasource",attrs:{name:"custom"}},[a("vc-entity",{ref:"entity1",attrs:{position:s.position,billboard:s.billboard,description:s.description,id:s.id}}),s._v(" "),a("vc-entity",{ref:"enttiy2",attrs:{position:s.position1,description:s.description,cylinder:s.cylinder1},on:{"update:cylinder":function(t){s.cylinder1=t}}},[a("vc-graphics-cylinder",{ref:"cylinder1",attrs:{length:4e5,topRadius:2e5,bottomRadius:2e5,material:s.material1,outline:!0,outlineColor:s.outlineColor1}})],1),s._v(" "),a("vc-entity",{attrs:{position:s.position2,description:s.description,cylinder:s.cylinder2},on:{"update:cylinder":function(t){s.cylinder2=t}}},[a("vc-graphics-cylinder",{ref:"cylinder2",attrs:{length:4e5,topRadius:0,bottomRadius:2e5,material:s.material2}})],1)],1),s._v(" "),s._l(s.datas,(function(t,r){return["point"==t.type?a("vc-datasource-custom",{key:r,ref:"ds"+t.name,refInFor:!0,attrs:{name:"datasource"+r+"_"+t.color},on:{ready:function(a){return s.datasourceReady(t)},clusterEvent:s.datasourceClusterEvent}},[s._l(t.data,(function(r,e){return[a("vc-entity",{key:e,ref:"entity"+e,refInFor:!0,attrs:{position:s.getPosition(r)}},[a("vc-graphics-billboard",{attrs:{image:t.iconUrl,scale:.5,show:!0,width:t.width,height:t.height}})],1)]}))],2):s._e()]}))],2)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-datasource-custom")]),this._v(" 组件用于加载自定义数据源，手动管理一组实体。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-datasource-custom")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"datasource"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"custom"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboard")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboard"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"id"')]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"enttiy2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder1"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder1"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor1"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder2"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder2"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-datasource-custom")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(itemOut, indexOut) of datas"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-datasource-custom")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"indexOut"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":name")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'datasource' + indexOut + '_' + itemOut.color\"")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'ds' + itemOut.name\"")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"datasourceReady(itemOut)"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@clusterEvent")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"datasourceClusterEvent"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"itemOut.type == 'point'\"")]),s._v("\n        >")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(item, index) of itemOut.data"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getPosition(item)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'entity' + index\"")]),s._v(">")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":image")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"itemOut.iconUrl"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.5"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"itemOut.width"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"itemOut.height"')]),s._v("\n              >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-datasource-custom")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'This is a billboard'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'DARK_GREEN'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'RED'")]),s._v(",\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datas")]),s._v(": []\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all([\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity1.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.cylinder1.createPromise,\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.cylinder2.createPromise\n      ]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// instances[0].viewer.zoomTo(this.$refs.datasource.cesiumObject)")]),s._v("\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.camera.setView({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-2310285.0191093646")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5365872.967043371")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3108924.304301176")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.07310634629277768")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1.5094668006074268")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0003451814958399524")]),s._v("\n          }\n        })\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.GREEN.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".billboard = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.BillboardGraphics({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default: undefined")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-50")]),s._v("), "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default: (0, 0)")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("eyeOffset")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("), "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": Cesium.HorizontalOrigin.CENTER, "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("verticalOrigin")]),s._v(": Cesium.VerticalOrigin.BOTTOM, "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default: CENTER")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default: 1.0")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.Color.LIME, "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default: WHITE")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alignedAxis")]),s._v(": Cesium.Cartesian3.ZERO "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".addPoints("),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n      },\n      datasourceReady(instance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" { Cesium, viewer, cesiumObject } = instance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" that = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ds'")]),s._v(" + instance.name]["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].createPromise.then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//开启聚合功能")]),s._v("\n          cesiumObject.clustering.enabled = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n          cesiumObject.clustering.pixelRange = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("\n          cesiumObject.clustering.minimumClusterSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n        })\n      },\n      datasourceClusterEvent(clusteredEntities, cluster) {\n        cluster.label.show = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        cluster.label.scale = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v("\n        cluster.label.fillColor = Cesium.Color.fromCssColorString("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FFFFFF'")]),s._v(")\n        cluster.label.style = Cesium.LabelStyle.FILL\n        cluster.label.font = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'30px caption'")]),s._v("\n        cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM\n        cluster.label.pixelOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-7")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\n        cluster.label.disableDepthTestDistance = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Number")]),s._v(".POSITIVE_INFINITY\n        cluster.point.show = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//聚合体属性")]),s._v("\n        cluster.point.id = cluster.label.id\n        cluster.point.color = Cesium.Color.LIGHTSLATEGRAY\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(") {\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v("\n          cluster.label.pixelOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(") {\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(") {\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(") {\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(") {\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(") {\n          cluster.label.pixelOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-6")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n          cluster.label.scale = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v("\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (clusteredEntities.length >= "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(") {\n          cluster.label.pixelOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n          cluster.label.scale = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v("\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("15")]),s._v("\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          cluster.label.pixelOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-3")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\n          cluster.label.scale = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4")]),s._v("\n          cluster.point.pixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v("\n        }\n      },\n      getPosition(item) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": item.Longitude,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": item.Latitude,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n        }\n      },\n      addPoints(flag) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" item = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1001'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("code")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1001'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("iconOn")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/points/pic.png'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("giscolor")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#fb7228'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("datauri")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/points/yj.json'")]),s._v("\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showPoints(item, flag)\n      },\n      showPoints(item, flag) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" that = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (flag) {\n          Cesium.Resource.fetchJson(item.datauri).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("res")]),s._v(") =>")]),s._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" img = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Image()\n            img.src = item.iconOn\n            img.onload = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n              "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" datas = []\n              "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" data = {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": item.code,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'point'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clustering")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [],\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("iconUrl")]),s._v(": item.iconOn,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": item.giscolor,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": img.width,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": img.height\n              }\n              data.data = res.reduce("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("pre, cur")]),s._v(") =>")]),s._v(" {\n                "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" pre.concat({\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Longitude")]),s._v(": cur.Longitude,\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Latitude")]),s._v(": cur.Latitude,\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": cur.id,\n                  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": cur.name\n                })\n              }, [])\n\n              datas.push(data)\n              that.datas = datas\n            }\n          })\n        } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".datas = []\n        }\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("name")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定数据源名字。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定数据源是否显示。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html"}},[this._v("CustomDataSource")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("changedEvent")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("数据源改变时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("数据源发生错误时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("loadingEvent")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("数据源开始或结束加载时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("clusterEvent")]),s._v(" "),a("td",[s._v("(clusteredEntities, cluster)")]),s._v(" "),a("td",[s._v("数据源聚合事件。")])]),s._v(" "),a("tr",[a("td",[s._v("collectionChanged")]),s._v(" "),a("td",[s._v("(collection, added, removed, changed)")]),s._v(" "),a("td",[s._v("数据源实体集合改变时触发。")])])])])}],!1,null,null,null);t.default=v.exports},ntSI:function(s,t,a){s.exports=a("hJtQ")}}]);
//# sourceMappingURL=113.f4b37a3a5cdac478fa62.js.map