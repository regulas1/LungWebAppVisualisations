(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a38749"],{"40cf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-card",{staticClass:"grey darken-4",attrs:{dark:"",height:"600px",width:"100%"}},[n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-col",{attrs:{"no-gutters":"",cols:"11",md:"6"}},[n("h1",{staticClass:"display-3 font-weight-light"},[e._v(" Visualising My Lungs ")]),n("div",{staticClass:"subheading text-uppercase pl-2 mb-4"},[e._v(" Use your mouse to rotate the interactive lung model ")]),n("v-btn",{attrs:{color:"primary",depressed:""}},[e._v(" Learn How ")])],1),n("v-col",{staticClass:"fill-height",attrs:{cols:"11",md:"5"}},[n("model-json")],1)],1)],1)},s=[],r=n("9fc1"),a={name:"HomeBanner",components:{ModelJson:r["a"]}},c=a,o=n("2877"),h=n("6544"),d=n.n(h),l=n("8336"),u=n("62ad"),f=n("0fd9"),m=Object(o["a"])(c,i,s,!1,null,null,null);t["default"]=m.exports;d()(m,{VBtn:l["a"],VCol:u["a"],VRow:f["a"]})},"95b2":function(e,t,n){},"9fc1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"sceneContainer",attrs:{id:"scene-container"}})},s=[],r=n("6ffa"),a=n("4721"),c=n("34ad"),o=n("3191"),h=n.n(o),d=n("abb9"),l={name:"ModelGltf",data:function(){return{container:null,scene:null,camera:null,controls:null,renderer:null,stats:null,material:null,surface:d["a"]}},methods:{init:function(e){var t=this;this.container=this.$refs.sceneContainer,this.stats=new h.a,this.container.appendChild(this.stats.dom);var n=45,i=2,s=.01,o=1e3,d=new r["j"](n,i,s,o);d.position.set(0,-500,50),this.camera=d,this.scene=new r["l"],this.scene.background=new r["d"]("#212121");var l=new r["a"](255,8);this.scene.add(l);var u=new r["k"](255,5);this.scene.add(u),this.controls=new a["a"](this.camera,this.container),this.renderer=new r["p"]({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.gammaFactor=2.2,this.renderer.outputEncoding=r["q"],this.renderer.physicallyCorrectLights=!0,this.container.appendChild(this.renderer.domElement),this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);var f=new c["a"];f.load("/three-assets/Lung/airwaysblue.glb",(function(n){n.scene.traverse((function(t){t.isMesh&&(t.material=e)})),t.scene.add(n.scene)}),void 0,void 0),this.renderer.setAnimationLoop((function(){t.render()}))},setShader:function(){var e=this.surface,t={vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms,onBeforeCompile:function(){},side:r["f"],transparent:!0},n=new r["m"](t);this.init(n)},resize:function(){this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectMatrix()},render:function(){this.renderer.render(this.scene,this.camera),this.stats.update()}},mounted:function(){this.setShader(),window.addEventListener("resize",this.onResize)}},u=l,f=(n("dd89"),n("2877")),m=Object(f["a"])(u,i,s,!1,null,"59d58afe",null);t["a"]=m.exports},dd89:function(e,t,n){"use strict";n("95b2")}}]);
//# sourceMappingURL=chunk-24a38749.ce19b4fb.js.map