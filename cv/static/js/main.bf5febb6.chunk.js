(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,a,n){e.exports=n(469)},241:function(e,a,n){},448:function(e,a,n){},469:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(44),i=n.n(r),o=(n(241),n(144)),c=n.n(o),s=n(143),m=n.n(s),u=n(91),d=n.n(u),g=n(92),f=n.n(g),p=n(45),h=n.n(p),b=n(8),E=n.n(b),y=n(19),w=n(30),x=(Object(w.b)("translations")(Object(y.withStyles)(function(e){return{root:{boxSizing:"border-box",width:"100%",padding:3*e.spacing.unit},card:{display:"flex",width:"auto",maxWidth:900,margin:"0 auto"},avatar:{margin:3*e.spacing.unit,width:192,height:192,backgroundColor:e.palette.primary},flex1:{display:"flex",flex:1},details:{display:"flex",flexDirection:"column",flex:1},content:{flex:"1 0 auto",display:"flex",flexDirection:"row",padding:3*e.spacing.unit,justifyContent:"space-around"},media:{width:225},formDetails:{display:"flex",flexDirection:"column",justifyContent:"space-between"},icon:{margin:e.spacing.unit,padding:e.spacing.unit}}})(function(){return l.a.createElement("div",null)})),n(63)),v=n.n(x),k=n(38),N=n.n(k),C=n(28),j=n.n(C),_=n(27),D=n.n(_),S=n(140),O=n.n(S),z=n(141),B=n.n(z),T=n(23),H=Object(w.b)("pdata")(E()(function(e){return{root:{boxSizing:"border-box",width:"100%",padding:3*e.spacing.unit},card:{display:"flex",width:"auto",maxWidth:900,margin:"0 auto"},avatar:{margin:3*e.spacing.unit,width:192,height:192,backgroundColor:e.palette.primary},flex1:{display:"flex",flex:1},details:{display:"flex",flexDirection:"column",flex:1},content:{flex:"1 0 auto",display:"flex",flexDirection:"row",padding:3*e.spacing.unit,justifyContent:"space-around"},media:{width:225},formDetails:{display:"flex",flexDirection:"column",justifyContent:"space-between"},icon:{margin:e.spacing.unit,padding:e.spacing.unit}}})(function(e){var a=e.classes,n=e.t;return l.a.createElement("div",{className:a.root},l.a.createElement(v.a,{className:a.card},l.a.createElement(T.a,{image:"images/me.jpg",className:a.media}),l.a.createElement("div",{className:a.details},l.a.createElement("div",{className:a.content},l.a.createElement(N.a,{container:!0,spacing:24},l.a.createElement(N.a,{item:!0,xs:12,md:6,className:a.formDetails},l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,{htmlFor:"lbl_full_name"},n("Full name"),":"),l.a.createElement(j.a,{id:"lbl_full_name",value:n("Balazs Gallay")})),l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,{htmlFor:"lbl_birth_date"},n("Birth date"),":"),l.a.createElement(j.a,{id:"lbl_birth_date",value:n("1989/09/06")})),l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,{htmlFor:"lbl_country"},n("Country")),l.a.createElement(j.a,{id:"lbl_country",value:n("Hungary")})),l.a.createElement("div",{className:a.flex1},l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,null,n("E-mail")),l.a.createElement(j.a,{value:"gallayb@gmail.com"})),l.a.createElement(T.b,{color:"primary",onClick:function(){return window.location.href="mailto:gallayb@gmail.com?subject=".concat(n("common:Job opportunity"))}},l.a.createElement(O.a,null)))),l.a.createElement(N.a,{item:!0,xs:12,md:6,className:a.formDetails},l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,{htmlFor:"lbl_birth_place"},n("Birth place"),":"),l.a.createElement(j.a,{id:"lbl_birth_place",value:"".concat(n("Budapest"),", ").concat(n("Hungary"))})),l.a.createElement("div",{className:a.flex1},l.a.createElement(D.a,{margin:"normal"},l.a.createElement(T.c,null,n("Phone number")),l.a.createElement(j.a,{value:n("+36202343963")})),l.a.createElement(T.b,{color:"primary",onClick:function(){return window.location.href="tel:".concat(n("+36202343963"))}},l.a.createElement(B.a,null)))))))))})),W=n(149),F=n(142),L=n.n(F),P=n(64),q=n.n(P),I=n(49),U=n.n(I),G=n(47),J=n.n(G),M=n(48),V=n.n(M),A=n(65),R=n.n(A),$=n(66),K=n.n($),Q=n(33),X=n.n(Q),Y=function(e){return Object(y.createMuiTheme)(Object(W.a)({},e,{palette:Object.assign({},{primary:e.palette.primary,secondary:e.palette.secondary,error:e.palette.error,type:"dark"})}))},Z=Object(w.b)("header")(Object(y.withStyles)(function(e){return{selectedTab:{color:"white",background:"rgba(255,255,255,0.2)"},backgrounded:{backgroundImage:"url(images/bg1.jpg)",backgroundPosition:"center",backgroundSize:"cover"},overlay:{background:"rgba(0,0,0,0.5)"},whiteText:{color:"white"},tabs:{width:"100%"}}})(function(e){var a=e.classes,n=e.t,t=e.i18n,r=e.match.params.page,i=void 0===r?"":r,o=[{link:"/",title:n("Personal data")},{link:"/educations",title:n("Educations")},{link:"/experiences",title:n("Experiences")},{link:"/skills",title:n("Skills")},{link:"/contact",title:n("Contact")}],c=L()(o,function(e){return e.link==="/".concat(i)});return l.a.createElement(y.MuiThemeProvider,{theme:Y},l.a.createElement(q.a,{className:a.backgrounded},l.a.createElement("div",{className:a.overlay},l.a.createElement(J.a,null,l.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"column",padding:"15px"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},l.a.createElement(V.a,{component:"h1",variant:"h5",className:a.whiteText},n("pdata:Balazs Gallay"))),l.a.createElement(V.a,{component:"h3",variant:"subtitle1",className:a.whiteText},n("Software developer"))),l.a.createElement("div",{style:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}},l.a.createElement(X.a,{onClick:function(){return window.open("https://facebook.com/gallayb")}},l.a.createElement("i",{className:"fa fa-facebook-square"})),l.a.createElement(X.a,{onClick:function(){return window.open("https://linkedin.com/in/bal\xe1zs-gallay-b9b1b834")}},l.a.createElement("i",{className:"fa fa-linkedin-square"})),l.a.createElement(X.a,{onClick:function(){return window.open("https://plus.google.com/u/0/+Bal\xe1zsGallay")}},l.a.createElement("i",{className:"fa fa-google-plus-square"})),l.a.createElement(X.a,{onClick:function(){return window.open("https://github.com/carathorys")}},l.a.createElement("i",{className:"fa fa-github-square"})),l.a.createElement(U.a,{dense:"true",raised:"hu-HU"===t.language?"true":"false",color:"hu-HU"===t.language?"primary":"default",onClick:function(){return t.changeLanguage("hu-HU")}},n("Hungarian")),l.a.createElement(U.a,{dense:"true",raised:"en"===t.language?"true":"false",color:"en"===t.language?"primary":"default",onClick:function(){return t.changeLanguage("en")}},n("English")))),l.a.createElement(J.a,{style:{minHeight:48}},l.a.createElement(R.a,{value:c,onChange:function(a,n){e.history.push(o[n].link)},indicatorColor:"primary",variant:"scrollable",className:a.tabs},o.map(function(e,n){return l.a.createElement(K.a,{key:e.link,label:e.title,className:c===n?a.selectedTab:""})}))))))})),ee=n(145),ae=n(34),ne=(n(448),h()({palette:{primary:m.a,secondary:c.a,error:d.a,type:"light"},typography:{useNextVariants:!0}})),te=E()({content:{marginTop:"192px",boxSizing:"border-box"}})(function(e){var a=e.classes;return l.a.createElement(t.Suspense,{fallback:""},l.a.createElement(f.a,{theme:ne},l.a.createElement(ee.a,{basename:"/cv/"},l.a.createElement("div",null,l.a.createElement(ae.a,{path:"/:page?",component:Z}),l.a.createElement("div",{className:a.content},l.a.createElement(ae.a,{path:"/",exact:!0,component:H}))))))}),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ie=n(95),oe=n(147),ce=n.n(oe),se=n(148),me=n.n(se);ie.a.use(ce.a).use(me.a).use(w.a).init({fallbackLng:"en",backend:{loadPath:"/cv/locales/{{lng}}/{{ns}}.json"},ns:["common","header","pdata"],defaultNS:"common",debug:!1,interpolation:{escapeValue:!1}});ie.a,n(468);i.a.render(l.a.createElement(te,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/cv",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/cv","/service-worker.js");le?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):re(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):re(e)})}}()}},[[236,1,2]]]);
//# sourceMappingURL=main.bf5febb6.chunk.js.map