(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{M2ih:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),n={data:function(){return{appearance:null,geometry:null,attributes:null,modelMatrix:null,vertexFormat:null,modelMatrixOutline:null}},mounted:function(){a.a.all([this.$refs.cylinder.createPromise,this.$refs.cylinderOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var e=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,t.vm.$parent.modelMatrix):e.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,e=s.viewer;this.viewer=e;var r=t.Matrix4,a=t.PerInstanceColorAppearance,n=t.Transforms,l=t.Cartesian3,v=t.ColorGeometryInstanceAttribute;this.appearance=new a({flat:!0}),this.vertexFormat=a.VERTEX_FORMAT,this.attributes={color:new v(Math.random(),Math.random(),Math.random(),.5)},this.modelMatrix=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(l.fromDegrees(105,35)),new l(0,0,0),new r),this.modelMatrixOutline=r.multiplyByTranslation(n.eastNorthUpToFixedFrame(l.fromDegrees(110,35)),new l(0,0,0),new r)},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},l=e("JFUb"),v=Object(l.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("CylinderGeometry, CylinderOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),e("h3",[s._v("Load CorridorGeometry")]),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK}},[e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes,modelMatrix:s.modelMatrix},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-cylinder",{ref:"cylinder",attrs:{length:4e5,topRadius:2e5,bottomRadius:2e5,slices:1024,vertexFormat:s.vertexFormat}})],1)],1),s._v(" "),e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{attributes:s.attributes,modelMatrix:s.modelMatrixOutline}},[e("vc-geometry-outline-cylinder",{ref:"cylinderOutline",attrs:{length:4e5,topRadius:2e5,bottomRadius:2e5,slices:1024,numberOfVerticalLines:128}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(7),s._v(" "),e("hr")],1)}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[s._v("The "),e("code",{pre:!0},[s._v("vc-geometry-cylinder")]),s._v(" component is used to load a geometry that describes a cylinder.")]),s._v(" "),e("li",[s._v("The "),e("code",{pre:!0},[s._v("vc-geometry-outline-cylinder")]),s._v(" component is used to load a geometry that describes a cylinder outline.")]),s._v(" "),e("li",[s._v("It needs to be used as a sub-component of "),e("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(", can be mounted on "),e("code",{pre:!0},[s._v("vc-primitive")]),s._v(".")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-cylinder")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slices")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1024"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n          >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-cylinder")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrixOutline"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-cylinder")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinderOutline"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":slices")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1024"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":numberOfVerticalLines")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"128"')]),s._v("\n          >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-cylinder")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrixOutline")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.cylinder.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.cylinderOutline.createPromise]).then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Matrix4, PerInstanceColorAppearance, Transforms, Cartesian3, ColorGeometryInstanceAttribute } = Cesium\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Matrix4.multiplyByTranslation(\n          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("),\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n        )\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrixOutline = Matrix4.multiplyByTranslation(\n          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(")),\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("),\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Matrix4()\n        )\n      },\n      LEFT_CLICK(movement) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer.scene.pick(movement.position)\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(feature)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-cylinder")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("length")]),s._v(" "),e("td",[s._v("Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the length of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("topRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the radius of the top of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("bottomRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the radius of the bottom of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("slices")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("128")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The number of edges around the perimeter of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("vertexFormat")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The vertex attributes to be computed.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-cylinder")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("length")]),s._v(" "),e("td",[s._v("Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the length of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("topRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the radius of the top of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("bottomRadius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" A numeric Property specifying the radius of the bottom of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("slices")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("128")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The number of edges around the perimeter of the cylinder.")])]),s._v(" "),e("tr",[e("td",[s._v("numberOfVerticalLines")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("16")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Number of lines to draw between the top and bottom surfaces of the cylinder.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGeometry.html"}},[this._v("CylinderGeometry")])]),this._v(", "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderOutlineGeometry.html"}},[this._v("CylinderOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=v.exports},MsPG:function(s,t,e){s.exports=e("M2ih")}}]);
//# sourceMappingURL=51.2aa46b5c55ab46e78bdf.js.map