(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{85:function(e,t,o){},86:function(e,t,o){},92:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(33),c=o.n(a),l=(o(85),o(13)),i=o(14),s=o(16),d=o(15),u=(o(86),o(103)),h=o(114),j=o(71),p=o(2),b=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)(u.a,{m:"10px",children:Object(p.jsx)("div",{class:"form",children:Object(p.jsx)("form",{onSubmit:this.props.onInputHandler,children:Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"col-sm-12 col-lg-4 col-md-4",children:Object(p.jsx)(h.a,{placeholder:"Eat cereal",value:this.props.currentInput,onChange:this.props.currentInputHandler,type:"text",class:"input"})}),Object(p.jsx)("div",{class:"col-sm-12 col-lg-1 col-md-4 inputBtn",children:Object(p.jsx)(j.a,{colorScheme:"teal",type:"submit",children:"Add"})}),Object(p.jsx)("div",{class:"col-sm-12 col-lg-1 col-md-4 inputBtn",children:Object(p.jsx)(j.a,{_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},colorScheme:"teal",variant:"outline",onClick:this.props.clearList,children:"Clear all"})})]})})})})}}]),o}(n.a.Component),g=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(l.a)(this,o);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={color:localStorage.getItem(e.props.index+"color"),line:localStorage.getItem(e.props.index+"line"),marked:!1,tempColor:"",tempLine:""},e.markDone=function(){""===e.state.color?(localStorage.setItem(e.props.index+"color","#319795"),localStorage.setItem(e.props.index+"line","line-through")):(localStorage.setItem(e.props.index+"color",""),localStorage.setItem(e.props.index+"line","")),window.location.reload()},e.hoverTrash=function(){e.setState({color:"red",line:"line"})},e.leaveTrash=function(){return e.setState({color:localStorage.getItem(e.props.index+"color"),line:localStorage.getItem(e.props.index+"line"),marked:!0})},e}return Object(i.a)(o,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("p",{class:"item",children:[Object(p.jsx)("span",{class:"title",onClick:this.markDone,style:{backgroundColor:this.state.color,"text-decoration-line":this.state.line},onclick:this.markDone,children:this.props.item}),Object(p.jsxs)("svg",{onMouseLeave:this.leaveTrash,onMouseOver:this.hoverTrash,onClick:function(){e.props.onDelete(e.props.index)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash trashcan",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})]})}}]),o}(n.a.Component),m=o(106),O=o(107),x=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(l.a)(this,o);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).renderBasedOnLocalStorage=function(){return null===localStorage.getItem("todos")?Object(p.jsx)(m.a,{bgGradient:"linear(to-l, #006666,#2eb8b8)",bgClip:"text",children:"Currently empty"}):Object(p.jsx)("span",{children:Object(p.jsx)(u.a,{p:"30px",pb:"60px",m:"10px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:e.props.todoList.map((function(t,o){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{index:o,onDelete:e.props.onDelete,item:t},o),Object(p.jsx)(O.a,{})]})}))})})},e}return Object(i.a)(o,[{key:"render",value:function(){return this.renderBasedOnLocalStorage()}}]),o}(n.a.Component),v=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(l.a)(this,o);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={todos:JSON.parse(localStorage.getItem("todos")),currentToDo:""},e.inputHandler=function(t){var o=e.state.todos,r=e.state.currentToDo;console.log("-------"),""!==r&&(0===localStorage.length&&e.clearItemList(),null===o?localStorage.setItem("todos",JSON.stringify([r])):(localStorage.setItem(o.length+"color",""),localStorage.setItem(o.length+"line",""),o.push(r),localStorage.setItem("todos",JSON.stringify(o)),e.setState({todos:o,currentToDo:""})))},e.currentInputHandler=function(t){var o=t.target.value;e.setState({currentToDo:o})},e.clearItemList=function(){var t=localStorage.getItem("chakra-ui-color-mode");localStorage.clear(),e.setState({todos:[]}),localStorage.setItem("chakra-ui-color-mode",t)},e.deleteHandler=function(t){var o=e.state.todos;if(o.splice(t,1),e.setState({todos:o}),localStorage.removeItem(t+"color"),localStorage.removeItem(t+"line"),0===o.length)return localStorage.removeItem("todos");localStorage.setItem("todos",o)},e}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{bgGradient:"linear(to-l, #006666,#2eb8b8)",bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",children:"\u0422oDo Manager"}),Object(p.jsx)(b,{onInputHandler:this.inputHandler,currentInputHandler:this.currentInputHandler,clearList:this.clearItemList,currentInput:this.state.currentToDo}),Object(p.jsx)(x,{todoList:this.state.todos,onDelete:this.deleteHandler})]})}}]),o}(n.a.Component),f=o(94),S=o(113),I=o(108),C=o(109),k=o(110);var y=function(){var e=Object(f.b)(),t=e.colorMode,o=e.toggleColorMode;return Object(p.jsx)(S.a,{label:"Change color mode",fontSize:"md",children:Object(p.jsx)(I.a,{icon:"light"===t?Object(p.jsx)(C.a,{}):Object(p.jsx)(k.a,{}),isRound:"true",size:"sm",onClick:o})})},w=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"picker",children:Object(p.jsxs)("div",{className:"row",id:"picker2",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/viktor111",children:Object(p.jsx)(S.a,{label:"My github account",fontSize:"md",children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(p.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})})}),Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)(y,{})})]})})}}]),o}(n.a.Component),M=function(e){Object(s.a)(o,e);var t=Object(d.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return Object(p.jsxs)("div",{class:"App",children:[Object(p.jsx)(w,{}),Object(p.jsx)(v,{})]})}}]),o}(n.a.Component),D=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,116)).then((function(t){var o=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;o(e),r(e),n(e),a(e),c(e)}))},H=o(115),L=o(112),z=o(111),T=Object(z.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}});c.a.render(Object(p.jsxs)(H.a,{children:[Object(p.jsx)(L.a,{initialColorMode:T.config.initialColorMode}),Object(p.jsx)(M,{})]}),document.getElementById("root")),D()}},[[92,1,2]]]);
//# sourceMappingURL=main.a3cc4156.chunk.js.map