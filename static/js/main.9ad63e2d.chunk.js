(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),o=n.n(r),c=n(1),i=n(2),u=n(4),s=n(3),m=n(5),h=(n(14),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={id:"",username:"ericv032"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchProfile",value:function(e){var t=this,n="".concat("https://api.github.com/users","/").concat(e);fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({id:"",name:e.name,avatar:e.avatar_url,repos:e.public_repos,followers:e.followers,following:e.following,homeUrl:e.html_url,notFound:e.message})}).catch(function(e){return console.log("Something went wrong")})}},{key:"componentDidMount",value:function(){this.fetchProfile(this.state.username)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,{data:this.state}))}}]),t}(a.Component)),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t="".concat(e.homeUrl,"/followers"),n="".concat(e.homeUrl,"?tab=repositories"),a="".concat(e.homeUrl,"/following");return"Not Found"===e.notFound?l.a.createElement("div",{className:"not-found"},l.a.createElement("h1",null,"Hmmm!! Username not found. Please try again!!")):l.a.createElement("section",{className:"card"},l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("a",{href:e.homeUrl,target:"new",title:e.name||e.username},l.a.createElement("img",{src:e.avatar,alt:e.username}))),l.a.createElement("div",{className:"profile-name"},l.a.createElement("h1",null,l.a.createElement("a",{href:e.homeUrl,target:"new",title:e.username},e.name||e.username)))),l.a.createElement("div",{className:"profile-info"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:t,target:"new"},l.a.createElement("i",null,e.followers),l.a.createElement("span",null,"Followers"))),l.a.createElement("li",null,l.a.createElement("a",{href:n,target:"new"},l.a.createElement("i",null,e.repos),l.a.createElement("span",null,"Repositories"))),l.a.createElement("li",null,l.a.createElement("a",{href:a,target:"new"},l.a.createElement("i",null,e.following),l.a.createElement("span",null,"Following"))))))}}]),t}(l.a.Component),E=h,d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9ad63e2d.chunk.js.map