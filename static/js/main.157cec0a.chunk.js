(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/images/willie.png","clicked":false},{"id":2,"image":"/assets/images/apu.png","clicked":false},{"id":3,"image":"/assets/images/barney.png","clicked":false},{"id":4,"image":"/assets/images/burns.png","clicked":false},{"id":5,"image":"/assets/images/chief.png","clicked":false},{"id":6,"image":"/assets/images/edna.png","clicked":false},{"id":7,"image":"/assets/images/jeff.png","clicked":false},{"id":8,"image":"/assets/images/millhouse.png","clicked":false},{"id":9,"image":"/assets/images/moe.png","clicked":false},{"id":10,"image":"/assets/images/ned.png","clicked":false},{"id":11,"image":"/assets/images/ralph.png","clicked":false},{"id":12,"image":"/assets/images/tony.png","clicked":false}]')},function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(8),r=t.n(s),i=t(6),l=t(1),o=t(2),m=t(4),u=t(3),d=t(5),g=(t(15),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={message:"",animating:!1},t.renderMessage=function(){switch(t.state.message){case"correct":return"Correct!";case"incorrect":return"Wrong, try again!";default:return"Click a Simpsons image to begin!"}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=e.score,n=e.topScore,c={animating:!0};c.message=0===t&&0===n?"":0===t&&n>0?"incorrect":"correct",t===this.props.score&&this.state.message===c.message||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),a}(n.Component));t(16);var f=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement(g,{score:e.score,topScore:e.topScore}),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};t(17);var h=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h1",null,"Click an image to score points, but try not to click on the same image more than once!"))};t(18);var p=function(e){return c.a.createElement("main",{className:"container"},e.children)};t(19);var k=function(e){return c.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:"url('".concat(e.image,"')")},className:"click-item".concat(e.shake?" shake":"")})},v=t(9),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={data:v,score:0,topScore:0},t.handleCorrectGuess=function(e){var a=t.state,n=a.topScore,c=a.score+1,s=Math.max(c,n);t.setState({data:t.shuffleData(e),score:c,topScore:s})},t.handleIncorrectGuess=function(e){t.setState({data:t.resetData(e),score:0})},t.resetData=function(e){var a=e.map((function(e){return Object(i.a)({},e,{clicked:!1})}));return t.shuffleData(a)},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t.handleItemClick=function(e){var a=!1,n=t.state.data.map((function(t){var n=Object(i.a)({},t);return n.id===e&&(n.clicked||(n.clicked=!0,a=!0)),n}));a?t.handleCorrectGuess(n):t.handleIncorrectGuess(n)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(p,null,this.state.data.map((function(a){return c.a.createElement(k,{key:a.id,id:a.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:a.image})}))))}}]),a}(n.Component);var E=function(){return c.a.createElement(b,null)};t(20);r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.157cec0a.chunk.js.map