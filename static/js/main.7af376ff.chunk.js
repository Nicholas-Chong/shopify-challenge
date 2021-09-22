(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(125),a=n(1),o=n(36),i=n.n(o),r=n(4),s=n(127),j=n(80),l=n(124),d=n(119),b=n(130),u=n(6),h=function(e){var t=e.children;return Object(u.jsx)(d.a,{bg:"#E2E8F0",minH:"100vh",overflow:"hidden",children:Object(u.jsx)(d.a,{maxW:"1600px",margin:"auto",padding:"2em",children:t})})},O=n(131),g=n(120),x=n(126),f=n(128),m=function(){var e=Object(g.a)(),t=e.isOpen,n=e.onOpen,c=e.onClose,o=Object(a.useContext)(S),i=o.title,r=o.url,s=o.explanation;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{as:"button",fontSize:"small",onClick:n,display:"block",children:"Show Description"}),Object(u.jsxs)(x.a,{isOpen:t,onClose:c,size:"xl",children:[Object(u.jsx)(x.g,{}),Object(u.jsxs)(x.d,{children:[Object(u.jsx)(x.f,{children:i}),Object(u.jsx)(x.c,{}),Object(u.jsxs)(x.b,{children:[Object(u.jsx)(O.a,{src:r,alt:i,mb:3}),Object(u.jsx)("p",{children:s})]}),Object(u.jsx)(x.e,{children:Object(u.jsx)(f.a,{colorScheme:"green",mr:3,onClick:c,alt:"close",children:"Close"})})]})]})]})},p=n(0),k=n(67),v=function(e,t){return new Promise((function(n,c){var a=e.transaction("likedImages","readwrite").objectStore("likedImages").get(t);a.onsuccess=function(){return n(a.result)},a.onerror=function(){return c(a.error)}}))},w=function(e){var t=e.isLiked,n=e.setIsLiked,c=Object(a.useState)(Object(a.useContext)(S)),o=Object(r.a)(c,1)[0],i=Object(a.useState)(Object(a.useContext)(R).db),s=Object(r.a)(i,1)[0];Object(a.useEffect)((function(){v(s,o.title).then((function(e){e&&n(!0)}))}));return Object(u.jsx)(d.a,{as:"button",display:"inline-block",onClick:function(){t?function(e,t){var n=e.transaction("likedImages","readwrite").objectStore("likedImages").delete(t.title);n.onsuccess=function(){console.log('Removed "'.concat(t.title,'" from likedImages'))},n.onerror=function(){console.log("Error",n.error)}}(s,o):function(e,t){var n=e.transaction("likedImages","readwrite").objectStore("likedImages").add(t);n.onsuccess=function(){console.log('Added "'.concat(n.result,'" to likedImages'))},n.onerror=function(){console.log("Error",n.error)}}(s,o),n(!t)},alt:t?"Unlike":"Like",title:t?"Unlike":"Like",children:Object(u.jsx)(p.b.Provider,{value:{style:{fontSize:"30px",color:"red"}},children:t?Object(u.jsx)(k.a,{}):Object(u.jsx)(k.b,{})})})},S=Object(a.createContext)(),y=function(e){var t=e.image,n=Object(a.useState)(Object(a.useContext)(R).db),c=Object(r.a)(n,1)[0],o=Object(a.useContext)(R).showOnlyLiked,i=Object(a.useState)(!1),s=Object(r.a)(i,2),j=s[0],l=s[1];return Object(a.useEffect)((function(){v(c,t.title).then((function(e){e&&l(!0)}))})),Object(u.jsx)(S.Provider,{value:t,children:Object(u.jsxs)(d.a,{bg:"white",maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",display:o?j?"block":"none":"block",boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",children:[Object(u.jsx)(O.a,{src:t.url,alt:t.title}),Object(u.jsxs)(d.a,{p:"3",children:[Object(u.jsx)(d.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",children:t.title}),Object(u.jsx)(d.a,{children:t.date}),Object(u.jsx)(w,{isLiked:j,setIsLiked:l}),Object(u.jsx)(m,{})]})]})})},C=n(123),I=function(){return Object(u.jsx)(d.a,{position:"fixed",height:"100vh",width:"100vw",top:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center",children:Object(u.jsxs)("center",{children:[Object(u.jsx)(C.a,{}),Object(u.jsx)("p",{children:"Fun fact: I've been learning React for 2 years!"})]})})},D=n(129),L=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(R).setShowOnlyLiked;return Object(u.jsx)(d.a,{position:"fixed",width:"100vw",bottom:"0",right:"0",padding:"2em",children:Object(u.jsx)("center",{children:Object(u.jsxs)(d.a,{width:"17em",background:"yellow",padding:"1em",display:"flex",alignItems:"center",justifyContent:"space-between",bg:"#E2E8F0",borderRadius:"lg",boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",children:[Object(u.jsx)("p",{children:"Show only liked images"}),Object(u.jsx)(D.a,{size:"md",isChecked:n,onChange:function(){o(!n),c(!n)}})]})})})},E=n(56),F=n(3);E.a.registerPlugin(F.b);var M=function(e){E.a.timeline().from(e,{duration:.5,autoAlpha:0,y:25,delay:.15,ease:F.b.easeIn})},P=function(){var e=Object(a.useContext)(R),t=e.imagesData,n=e.setImagesData,c=e.startDate,o=e.setStartDate,i=Object(a.useState)(!1),s=Object(r.a)(i,2),j=s[0],l=s[1];return Object(u.jsx)(d.a,{mt:"4em",children:Object(u.jsx)("center",{children:Object(u.jsx)(f.a,{margin:"auto",colorScheme:"green",onClick:function(){if(!j){l(!0);var e=new Date(c.getFullYear(),c.getMonth(),c.getDate()-1).toLocaleDateString("fr-CA");c.setMonth(c.getMonth()-3),o(c);var a=c.toLocaleDateString("fr-CA");fetch("https://api.nasa.gov/planetary/apod?start_date=".concat(a,"&end_date=").concat(e,"&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX")).then((function(e){return e.json()})).then((function(c){n(t.concat(c)),l(!1),M(".images"),console.log(t,a,e)}))}},children:j?Object(u.jsx)(C.a,{}):"Load More"})})})},R=Object(a.createContext)();var W=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(r.a)(o,2),O=i[0],g=i[1],x=Object(a.useState)(null),f=Object(r.a)(x,2),m=f[0],p=f[1],k=Object(a.useState)(!1),v=Object(r.a)(k,2),w=v[0],S=v[1],C=Object(a.useState)(new Date),D=Object(r.a)(C,2),E=D[0],F=D[1];return Object(a.useEffect)((function(){new Promise((function(e,t){var n=indexedDB.open("shopispace",2);n.onupgradeneeded=function(){var e=n.result;e.objectStoreNames.contains("likedImages")||e.createObjectStore("likedImages",{keyPath:"title"})},n.onsuccess=function(){return e(n.result)},n.onerror=function(){return t(n.error)}})).then((function(e){return p(e)})),E.setMonth(E.getMonth()-3),F(E);var e=E.toLocaleDateString("fr-CA");fetch("https://api.nasa.gov/planetary/apod?start_date=".concat(e,"&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX")).then((function(e){return e.json()})).then((function(e){g(e),c(!0),M(".images")}))}),[]),Object(a.useEffect)((function(){M(".images")}),[w]),Object(u.jsx)(s.a,{theme:j.theme,children:Object(u.jsx)(R.Provider,{value:{db:m,showOnlyLiked:w,setShowOnlyLiked:S,imagesData:O,setImagesData:g,startDate:E,setStartDate:F},children:Object(u.jsxs)(h,{children:[Object(u.jsx)(l.a,{mb:4,children:"ShopiSpace"}),!n&&Object(u.jsx)(I,{}),n&&Object(u.jsxs)(d.a,{className:"images",mb:"8em",children:[Object(u.jsx)(b.a,{columns:[1,2,3,4],spacing:10,children:O.map((function(e){return"image"===e.media_type?Object(u.jsx)(y,{image:e}):null}))}),!w&&Object(u.jsx)(P,{})]}),Object(u.jsx)(L,{})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.jsxs)(a.StrictMode,{children:[Object(u.jsx)(c.a,{}),Object(u.jsx)(W,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),_()}},[[106,1,2]]]);
//# sourceMappingURL=main.7af376ff.chunk.js.map