(this["webpackJsonplet-assessment"]=this["webpackJsonplet-assessment"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=a(22),s=a(26),l=a(92),d=a(181),j=a(11),p=a(165),b=a(58),u=a(167),h=a(170),m=a(169),g=a(2),x=Object(p.a)((function(e){return{root:Object(s.a)(Object(s.a)({},e.typography.body1),{},{backgroundColor:e.palette.background.paper,padding:e.spacing(1)}),wrapper:{marginTop:"50px",padding:"20px",align:"left"},section:{display:"flex",marginTop:"10px",marginBottom:"20px"},title:{marginBottom:"1.8rem",fontWeight:"600"},littleSpace:{marginBottom:"1rem"},backButton:{color:"#4b5563","&:Hover":{backgroundColor:"#3e3e40",color:"#1de9b6"}},chevronLeft:{color:"#4b5563",backgroundColor:"transparent","&:Hover":{backgroundColor:"transparent"}}}})),f=function(e){var t=x(),a=e.location.state.article,n=a.title,r=a.byline,i=a.abstract,c=a.published_date;return Object(g.jsxs)("div",{className:t.wrapper,children:[Object(g.jsx)("div",{className:t.section,children:Object(g.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(g.jsxs)(u.a,{className:t.backButton,variant:"contained",color:"primary",children:[Object(g.jsx)(m.a,{edge:"start","aria-label":"comments",children:Object(g.jsx)(h.a,{className:t.chevronLeft})}),"Back"]})})}),Object(g.jsx)(b.a,{className:"".concat(t.root," ").concat(t.title),children:n}),Object(g.jsxs)(b.a,{component:"h4",varient:"h4",className:"".concat(t.root," ").concat(t.littleSpace),children:[r," : ",c]}),Object(g.jsx)(b.a,{component:"p",varient:"body2",children:i})]})},O=a(49),v=a(41),y=a(4),F=a(24),w=a(184),k=a(171),N=a(172),T=a(173),S=a(174),C=a(87),R=a.n(C),L=a(175),B=a(183),W=a(176),D=a(85),A=a.n(D),H=a(88),I=a.n(H),P=a(56),U=a.n(P),G=a(132),M=a(86),z=a.n(M),_=a(177),E=240,Q=Object(p.a)((function(e){return{root:{display:"flex",color:"white"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(E,"px)"),marginLeft:E,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},hide:{display:"none"},drawer:{width:E,flexShrink:0,color:"#FFFFFF"},drawerPaper:{backgroundColor:"#1f272a",width:E,paddingTop:0},menuLink:{color:"#FFFFFF"},drawerHeader:Object(s.a)(Object(s.a)({display:"flex",backgroundColor:"#019587",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),toolbar:{alignItems:"flex-center",display:"flex",color:"#FFFFFF"},menu:{color:"#FFFFFF"},content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},menuHeading:{padding:"10px",color:"#FFFFFF"},title:{flexGrow:1,color:"#FFFFFF",textAlign:"center"},white:{color:"#ffffff"},listItemText:{color:"#4b5563","&:Hover":{backgroundColor:"#161617",color:"#ffffff",borderLeft:"4px solid #1de9b6"}},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},menuButton:{marginRight:e.spacing(2),color:"#FFFFFF"}}})),Y=Object(j.g)((function(e){var t=e.history,a=Q(),n=r.a.useState(null),i=Object(v.a)(n,2),c=i[0],o=i[1],s=Boolean(c),l=Object(F.a)(),d=r.a.useState(!1),j=Object(v.a)(d,2),p=j[0],u=j[1],h=function(e){t.push(e),o(null)};return Object(g.jsxs)("div",{className:a.root,children:[Object(g.jsx)(k.a,{}),Object(g.jsx)(N.a,{position:"fixed",className:Object(y.a)(a.appBar,Object(O.a)({},a.appBarShift,p)),children:Object(g.jsxs)(T.a,{children:[Object(g.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(y.a)(a.menuButton,p&&a.hide),children:Object(g.jsx)(A.a,{})}),Object(g.jsx)(b.a,{variant:"h6",className:a.title,noWrap:!0,children:"NY Times Most Popular"}),Object(g.jsx)(m.a,{"aria-label":"search",children:Object(g.jsx)(z.a,{className:a.white})}),Object(g.jsx)(m.a,{className:a.white,edge:"end","aria-label":"display more actions",onClick:function(e){o(e.currentTarget)},children:Object(g.jsx)(R.a,{})}),Object(g.jsx)(B.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:function(){return o(null)},className:a.menu,children:[{menuTitle:"About",pageURL:"/about",key:1},{menuTitle:"Profile",pageURL:"/profile",key:2},{menuTitle:"Settings",pageURL:"/settings",key:3},{menuTitle:"Logout",pageURL:"/logout",key:4}].map((function(e){var t=e.menuTitle,n=e.pageURL,r=e.key;return Object(g.jsx)(L.a,{className:a.menuLink,onClick:function(){return h(n)},children:t},r)}))})]})}),Object(g.jsxs)(w.a,{className:a.drawer,variant:"persistent",anchor:"left",open:p,classes:{paper:a.drawerPaper},children:[Object(g.jsxs)("div",{className:a.drawerHeader,children:[Object(g.jsx)(b.a,{className:a.menuHeading,children:"Most Popular"}),Object(g.jsx)(m.a,{onClick:function(){u(!1)},children:"ltr"===l.direction?Object(g.jsx)(I.a,{}):Object(g.jsx)(U.a,{})})]}),Object(g.jsx)(W.a,{light:!0}),Object(g.jsx)(S.a,{children:[{menuTitle:"Today",pageURL:"/today"},{menuTitle:"This Week",pageURL:"/"},{menuTitle:"This Month",pageURL:"/month"}].map((function(e,t){return Object(g.jsx)(G.a,{button:!0,onClick:function(){return h(e.pageURL)},className:a.listItemText,children:Object(g.jsx)(_.a,{primary:e.menuTitle})},t)}))}),Object(g.jsx)(W.a,{light:!0})]})]})})),J=Object(p.a)((function(e){return{footer:{gridRow:"3",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",marginTop:"10px",background:"rgb(212, 212, 212)",borderRadius:"0px",fontWeight:"normal",fontFamily:'"Roboto"',position:"relative","& a":{textDecoration:"none",color:"inherit","&:hover":{color:"#005e46"}}}}}));var V=function(){var e=(new Date).getFullYear(),t=J();return Object(g.jsxs)("div",{className:t.footer,children:[Object(g.jsxs)("div",{children:["Copyright \xa9 ",e," All Rights Reserved"]}),Object(g.jsxs)("div",{children:["Website Design and Developent by",Object(g.jsxs)("a",{href:"https://github.com/GomolemoDitlhong",target:"_blank",rel:"noreferrer",children:[" ","Gomolemo Ditlhong"]})]})]})},q=a(64),K=a.n(q),X=a(89),Z=a(90),$=a.n(Z),ee=a(178),te=a(185),ae=a(179),ne=a(57),re=a(91),ie=a.n(re),ce=Object(p.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},grey:{color:"transparent",backgroundColor:ne.a[500]},dateWrapper:{display:"inline-flex",flexDirection:"row",height:"20px",alignItems:"flex-end"},secondaryWrapper:{maxWidth:"250px"},dateIcon:{alignSelf:"cenzter",flexGrow:"1",marginRight:"5px"},dateText:{alignSelf:"flex-end"},grid:{display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"space-between",paddingTop:"10px"},itemText:{paddingRight:"35px",display:"flex",flexDirection:"column",justifyContent:"center"},publisher:{marginRight:"50px"},avatar:{alignSelf:"center"},chevron:{"&:hover":{backgroundColor:e.primary}},published:{flexGrow:1,alignSelf:"flex-end"}}})),oe=function(e){var t=ce(),a=Object(j.f)(),n=e.article;return Object(g.jsx)("div",{className:t.root,children:n&&Object(g.jsx)(G.a,{button:!0,id:n._id,onClick:function(){a.push({pathname:"/detail",state:{article:n}})},children:Object(g.jsxs)("div",{className:t.grid,children:[Object(g.jsx)(ee.a,{className:t.avatar,children:Object(g.jsx)(te.a,{variant:"circle",className:t.grey,alt:"Avatar n\xb0{article._id}"})}),Object(g.jsx)(_.a,{className:t.itemText,primary:n.title,secondary:Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)("div",{className:t.secondaryWrapper,children:[Object(g.jsx)(b.a,{component:"span",variant:"body2",className:t.publisher,color:"textSecondary",children:n.byline}),Object(g.jsxs)("div",{className:t.dateWrapper,children:[Object(g.jsx)(ie.a,{fontSize:"inherit",className:t.dateIcon}),Object(g.jsx)(b.a,{component:"span",variant:"body2",color:"textSecondary",className:t.dateText,children:n.published_date})]})]})})}),Object(g.jsx)(ae.a,{className:t.chevron,children:Object(g.jsx)(o.b,{to:{pathname:"/detai",state:{article:n}},children:Object(g.jsx)(m.a,{edge:"end","aria-label":"comments",children:Object(g.jsx)(U.a,{})})})})]})},"{article}")})},se=Object(p.a)((function(e){return{listWrapper:{marginTop:"3rem",marginBottom:"0.5rem"}}}));function le(e){var t=e.articles,a=se();return Object(g.jsx)("div",{className:a.listWrapper,children:Object(g.jsx)(S.a,{children:t.map((function(e){return Object(g.jsx)(oe,{article:e},e.id)}))})})}var de=a(180),je=Object(p.a)((function(e){return{progressWrapper:{marginTop:"10rem",marginBottom:"5rem",display:"flex",justifyContent:"center"}}}));var pe=function(){var e=je();return Object(g.jsx)("div",{className:e.progressWrapper,children:Object(g.jsx)(de.a,{})})};function be(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([]),o=Object(v.a)(c,2),s=o[0],l=o[1],d=e.time;return Object(n.useEffect)((function(){(function(){var e=Object(X.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,$.a.get(" https://api.nytimes.com/svc/mostpopular/v2/viewed/".concat(d,".json?api-key=").concat("3QSkActGjOVF0qFk5V3SMQAn1cyTQuSR"));case 3:t=e.sent,console.log(t),l(t.data.results),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(g.jsxs)("div",{className:"grid",children:[" ",r?Object(g.jsx)(pe,{}):Object(g.jsx)(le,{articles:s})]})}var ue=Object(l.a)({props:{MuiTypography:{variantMapping:{h1:"h2",h2:"h2",h3:"h2",h4:"h2",h5:"h2",h6:"h2",subtitle1:"h2",subtitle2:"h2",body1:"span",body2:"span"}}},palette:{primary:{main:"#1de9b6"},secondary:{main:"#c7d8ed"},white:{main:"#ffffff"}},typography:{fontFamily:["Roboto"],h1:{fontWeight:600,fontSize:68,lineHeight:"2rem"},h5:{fontWeight:100,lineHeight:"2rem"}}}),he=Object(p.a)((function(e){return{wrapper:{display:"grid",gridTemplateRows:"1fr 1fr auto",position:"absolute",width:"100%",height:"100%"},App:{height:"100%"}}}));var me=function(){var e=he();return Object(g.jsx)("div",{className:e.App,children:Object(g.jsx)(d.a,{theme:ue,children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(Y,{}),Object(g.jsxs)("div",{className:e.wrapper,children:[Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(be,Object(s.a)({time:"7"},e))}}),Object(g.jsx)(j.a,{exact:!0,from:"/month",render:function(e){return Object(g.jsx)(be,Object(s.a)({time:"30"},e))}}),Object(g.jsx)(j.a,{exact:!0,from:"/today",render:function(e){return Object(g.jsx)(be,Object(s.a)({time:"1"},e))}}),Object(g.jsx)(j.a,{exact:!0,from:"/about",render:function(){return console.log("About Page")}}),Object(g.jsx)(j.a,{exact:!0,from:"/logout",render:function(){return console.log("You are logged out")}}),Object(g.jsx)(j.a,{exact:!0,from:"/profile",render:function(){return console.log("Profile Page")}}),Object(g.jsx)(j.a,{exact:!0,from:"/settings",render:function(){return console.log("Settings Page")}}),Object(g.jsx)(j.a,{exact:!0,path:"/detail",component:f})]}),Object(g.jsx)(V,{})]})]})})})};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(k.a,{}),Object(g.jsx)(me,{})]})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.1d7d1ca2.chunk.js.map