(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{85:function(e,t,r){},86:function(e,t,r){},92:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(33),c=r.n(a),l=(r(85),r(13)),s=r(14),i=r(16),d=r(15),u=(r(86),r(103)),h=r(114),j=r(71),b=r(2),p=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsx)(u.a,{m:"10px",children:Object(b.jsx)("div",{class:"form",children:Object(b.jsx)("form",{onSubmit:this.props.onInputHandler,children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-12 col-lg-4 col-md-4",children:Object(b.jsx)(h.a,{placeholder:"Eat cereal",value:this.props.currentInput,onChange:this.props.currentInputHandler,type:"text",class:"input"})}),Object(b.jsx)("div",{class:"col-sm-12 col-lg-1 col-md-4 inputBtn",children:Object(b.jsx)(j.a,{colorScheme:"teal",type:"submit",children:"Add"})}),Object(b.jsx)("div",{class:"col-sm-12 col-lg-1 col-md-4 inputBtn",children:Object(b.jsx)(j.a,{_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},colorScheme:"teal",variant:"outline",onClick:this.props.clearList,children:"Clear all"})})]})})})})}}]),r}(n.a.Component),O=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={color:localStorage.getItem(e.props.index+"color"),line:localStorage.getItem(e.props.index+"line"),marked:!1},e.markDone=function(){""===e.state.color?(localStorage.setItem(e.props.index+"color","#319795"),localStorage.setItem(e.props.index+"line","line-through"),e.setState({color:"#319795\t",line:"line-through",marked:!0})):(localStorage.setItem(e.props.index+"color",""),localStorage.setItem(e.props.index+"line",""),e.setState({color:"",line:"",shadow:"title"}))},e.hoverTrash=function(){e.setState({color:"red",line:"line"})},e.leaveTrash=function(){if(!0===e.state.marked)return e.setState({color:"#319795\t",line:"line-through",marked:!0});e.setState({color:"",line:""})},e}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("p",{class:"item",children:[Object(b.jsx)("span",{class:"title",onClick:this.markDone,style:{backgroundColor:this.state.color,"text-decoration-line":this.state.line},onclick:this.markDone,children:this.props.item}),Object(b.jsxs)("svg",{onMouseLeave:this.leaveTrash,onMouseOver:this.hoverTrash,onClick:function(){e.props.onDelete(e.props.index)},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash trashcan",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(b.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})]})}}]),r}(n.a.Component),g=r(106),m=r(107),x=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).renderBasedOnLocalStorage=function(){return null===localStorage.getItem("todos")?Object(b.jsx)(g.a,{bgGradient:"linear(to-l, #006666,#2eb8b8)",bgClip:"text",children:"Currently empty"}):Object(b.jsx)("span",{children:Object(b.jsx)(u.a,{p:"30px",pb:"60px",m:"10px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:e.props.todoList.map((function(t,r){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{index:r,onDelete:e.props.onDelete,item:t},r),Object(b.jsx)(m.a,{})]})}))})})},e}return Object(s.a)(r,[{key:"render",value:function(){return this.renderBasedOnLocalStorage()}}]),r}(n.a.Component),v=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={todos:JSON.parse(localStorage.getItem("todos")),currentToDo:""},e.inputHandler=function(t){var r=e.state.todos,o=e.state.currentToDo;console.log(e.state.currentToDo),""!==o&&(null===r?localStorage.setItem("todos",JSON.stringify([o])):(r.push(o),localStorage.setItem("todos",JSON.stringify(r)),e.setState({todos:r,currentToDo:""})))},e.currentInputHandler=function(t){var r=t.target.value;e.setState({currentToDo:r})},e.clearItemList=function(){localStorage.clear(),e.setState({todos:[]})},e.deleteHandler=function(t){var r=e.state.todos;if(r.splice(t,1),e.setState({todos:r}),localStorage.removeItem(t+"color"),localStorage.removeItem(t+"line"),0===r.length)return localStorage.removeItem("todos");localStorage.setItem("todos",r)},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a,{bgGradient:"linear(to-l, #006666,#2eb8b8)",bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",children:"\u0422oDo Manager"}),Object(b.jsx)(p,{onInputHandler:this.inputHandler,currentInputHandler:this.currentInputHandler,clearList:this.clearItemList,currentInput:this.state.currentToDo}),Object(b.jsx)(x,{todoList:this.state.todos,onDelete:this.deleteHandler})]})}}]),r}(n.a.Component),f=r(94),S=r(113),C=r(108),k=r(109),y=r(110);var I=function(){var e=Object(f.b)(),t=e.colorMode,r=e.toggleColorMode;return Object(b.jsx)(S.a,{label:"Change color mode",fontSize:"md",children:Object(b.jsx)(C.a,{icon:"light"===t?Object(b.jsx)(k.a,{}):Object(b.jsx)(y.a,{}),isRound:"true",size:"sm",onClick:r})})},w=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"picker",children:Object(b.jsxs)("div",{className:"row",id:"picker2",children:[Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/viktor111",children:Object(b.jsx)(S.a,{label:"My github account",fontSize:"md",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)(I,{})})]})})}}]),r}(n.a.Component),D=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{class:"App",children:[Object(b.jsx)(w,{}),Object(b.jsx)(v,{})]})}}]),r}(n.a.Component),M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,116)).then((function(t){var r=t.getCLS,o=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),o(e),n(e),a(e),c(e)}))},H=r(115),L=r(112),T=r(111),z=Object(T.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}});c.a.render(Object(b.jsxs)(H.a,{children:[Object(b.jsx)(L.a,{initialColorMode:z.config.initialColorMode}),Object(b.jsx)(D,{})]}),document.getElementById("root")),M()}},[[92,1,2]]]);
//# sourceMappingURL=main.230f48b3.chunk.js.map