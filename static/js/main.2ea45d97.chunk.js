(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"african-golden-cat.png"},{id:2,image:"african-wild-cat.png"},{id:3,image:"andean-mountain-cat.png"},{id:4,image:"asian-golden-cat.png"},{id:5,image:"asian-leopard-cat.png"},{id:6,image:"black-footed-cat.png"},{id:7,image:"caracal.png"},{id:8,image:"cheetah.png"},{id:9,image:"chinese-mountain-cat.png"},{id:10,image:"clouded-leopard.png"},{id:11,image:"european-wild-cat.png"},{id:12,image:"flat-headed-cat.png"},{id:13,image:"geoffroy-cat.png"},{id:14,image:"iriomote-cat.png"},{id:15,image:"jaguar.png"},{id:16,image:"jaguarundi.png"},{id:17,image:"jungle-cat.png"},{id:18,image:"kodkod.png"},{id:19,image:"leopard.png"},{id:20,image:"lion.png"},{id:21,image:"lynx.png"},{id:22,image:"marbled-cat.png"},{id:23,image:"margay.png"},{id:24,image:"ocelot.png"},{id:25,image:"puma.png"},{id:26,image:"red-lynx.png"},{id:27,image:"rusty-spotted-cat.png"},{id:28,image:"sand-cat.png"},{id:29,image:"serval.png"},{id:30,image:"snow-leopard.png"},{id:31,image:"tiger-cat.png"},{id:32,image:"tiger.png"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),g=(a(14),a(2)),c=a(3),s=a(5),l=a(4),p=a(6),m=(a(16),function(e){return e.substring(0,e.indexOf(".")).split("-").map(function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)}).join(" ")}),d=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).click=function(){a.props.clicked?a.props.endGame():a.props.pointUp(a.props.id)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("img",{className:"cat",src:"images/"+this.props.image,alt:m(this.props.image),title:m(this.props.image),onClick:this.click})}}]),t}(n.Component),u=a(1),h=(a(18),8),f=32,b=3,v=function(e,t){t>e.length&&(t=e.length);for(var a=[],n=0;n<t;n++){for(var i=Math.floor(Math.random()*e.length);a.includes(i);)i=Math.floor(Math.random()*e.length);a.push(i)}return a.map(function(t){return e[t]}).map(function(e){return e.clicked=!1,e})},k=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={max:h,game:v(u,h),points:0,best:0,level:1},a.endGame=function(){alert("You lose!"),a.setState({game:v(u,a.state.max),points:0})},a.pointUp=function(e){if(a.state.points>=a.state.max-1){var t=a.state.max+b;t>f?(alert("You beat the highest level of the game! Congratulations!"),a.setState({max:h,game:v(u,h),points:0,best:a.state.best+1,level:1})):(alert("You beat level ".concat(a.state.level,"! Are you ready for the next challenge?")),a.setState({max:t,game:v(u,t),points:0,best:a.state.best+1,level:(t-(h-b))/b}))}else a.setState({game:a.state.game.map(function(t){return t.id===e?{id:t.id,image:t.image,clicked:!0}:t}),points:a.state.points+1,best:a.state.points+1>a.state.best?a.state.points+1:a.state.best})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Wildcat Clicky Game"),i.a.createElement("h5",null,"Points: ",this.state.points,"\xa0Best: ",this.state.best,"\xa0Level: ",this.state.level),function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(this.state.game).map(function(t){return i.a.createElement(d,{key:t.id,id:t.id,image:t.image,endGame:e.endGame,pointUp:e.pointUp,clicked:t.clicked})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.2ea45d97.chunk.js.map