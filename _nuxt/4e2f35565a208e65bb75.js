(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{155:function(t,e,r){var content=r(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("48e39cf1",content,!0,{sourceMap:!1})},156:function(t,e,r){var content=r(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(60).default)("311753ce",content,!0,{sourceMap:!1})},164:function(t,e,r){"use strict";var n=r(155);r.n(n).a},165:function(t,e,r){(e=r(59)(!1)).push([t.i,"#project[data-v-5596d8bb]{width:90%;border:1.3px solid #636b9c;border-radius:10px;margin:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px;transition-duration:.3s}#project[data-v-5596d8bb]:hover{background-color:#000;color:#fff}#projectContent[data-v-5596d8bb]{text-align:left;margin-left:5px;max-width:35%;word-wrap:break-word}#projectName[data-v-5596d8bb]{position:relative;font-size:25px;font-weight:400;margin-bottom:2.5%}#projectDesc[data-v-5596d8bb],#projectTech[data-v-5596d8bb]{font-size:19px;font-weight:200}#projectLink[data-v-5596d8bb]{margin-top:3.5%;font-size:17px}img[data-v-5596d8bb]{position:relative;height:auto;max-width:400px;float:right;border-radius:10px;border:1.3px solid #000}@media only screen and (max-width:900px){#projectContent[data-v-5596d8bb]{margin:0 auto;text-align:center;max-width:90%;word-wrap:none}img[data-v-5596d8bb]{display:none}}",""]),t.exports=e},166:function(t,e,r){"use strict";var n=r(156);r.n(n).a},167:function(t,e,r){(e=r(59)(!1)).push([t.i,"#projectTitle{margin-top:4%;font-size:41px;font-weight:400;margin-bottom:4%}#projectsContainer{display:flex;flex-direction:column;align-items:center;width:100%}",""]),t.exports=e},171:function(t,e,r){"use strict";r.r(e);r(28);var n=r(5),o={props:["name","desc","tech","link","imageLink"],data:function(){return{path:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.$store.state.projects).then((function(){t.path="../projectPics/"+t.imageLink}));case 2:case"end":return e.stop()}}),e)})))()}},c=(r(164),r(19)),d={components:{project:Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"project"}},[r("div",{attrs:{id:"projectContent"}},[r("div",{attrs:{id:"projectName"}},[t._v(t._s(t.name))]),t._v(" "),r("div",{attrs:{id:"projectDesc"}},[t._v(t._s(t.desc))]),t._v(" "),r("div",{attrs:{id:"projectTech"}},[t._v(t._s(t.tech))]),t._v(" "),r("div",{attrs:{id:"projectLink"}},[r("a",{attrs:{href:t.link,target:"_blank"}},[t._v("link")])])]),t._v(" "),r("div",{attrs:{id:"projectImg"}},[r("img",{attrs:{src:t.path,alt:t.name}})])])}),[],!1,null,"5596d8bb",null).exports},data:function(){return{projects:this.$store.state.projects}}},l=(r(166),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"projectTitle"}},[this._v("Projects")]),this._v(" "),this._l(this.projects,(function(t){return e("div",{key:t.name,attrs:{id:"projectsContainer"}},[e("project",{attrs:{name:t.name,desc:t.description,tech:t.tech,link:t.link,imageLink:t.imageLink}})],1)}))],2)}),[],!1,null,null,null));e.default=l.exports}}]);