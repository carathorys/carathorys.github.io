import{s as $,a as re,_ as p,b as G,r as f,u as y,d as I,j as r,e as b,f as M,h as R,i as N,k as ie,l as P,m as D,n as H,R as ce}from"./index-8gsQa-Au.js";import{r as K}from"./createSvgIcon-C2lNxCto.js";import{l as w,L as U,g as le,u as de,a as ue,b as W,c as E,E as pe}from"./index-DuZNDgjS.js";import{B as me,u as fe,d as ge,P as xe,f as ve,M as Ce}from"./Paper-B7dwDDU_.js";const be=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],he=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},$e=e=>{const{alignItems:t,classes:o,dense:s,disabled:n,disableGutters:a,divider:i,selected:c}=e,d=M({root:["root",s&&"dense",!a&&"gutters",i&&"divider",n&&"disabled",t==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},le,o);return p({},o,d)},ye=$(me,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:he})(({theme:e,ownerState:t})=>p({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${w.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${w.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:G(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:G(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${w.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${w.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),z=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:a=!1,component:i="div",children:c,dense:l=!1,disableGutters:d=!1,divider:u=!1,focusVisibleClassName:m,selected:x=!1,className:g}=s,v=I(s,be),_=f.useContext(U),B=f.useMemo(()=>({dense:l||_.dense||!1,alignItems:n,disableGutters:d}),[n,_.dense,l,d]),C=f.useRef(null);fe(()=>{a&&C.current&&C.current.focus()},[a]);const L=p({},s,{alignItems:n,dense:B.dense,disableGutters:d,divider:u,selected:x}),j=$e(L),V=ge(C,o);return r.jsx(U.Provider,{value:B,children:r.jsx(ye,p({ref:V,href:v.href||v.to,component:(v.href||v.to)&&i==="div"?"button":i,focusVisibleClassName:b(j.focusVisible,m),ownerState:L,className:b(j.root,g)},v,{classes:j,children:c}))})});function Ie(e){return R("MuiCard",e)}N("MuiCard",["root"]);const Me=["className","raised"],je=e=>{const{classes:t}=e;return M({root:["root"]},Ie,t)},we=$(xe,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Se=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiCard"}),{className:n,raised:a=!1}=s,i=I(s,Me),c=p({},s,{raised:a}),l=je(c);return r.jsx(we,p({className:b(l.root,n),elevation:a?8:void 0,ref:o,ownerState:c},i))});function ke(e){return R("MuiCardContent",e)}N("MuiCardContent",["root"]);const Re=["className","component"],Ne=e=>{const{classes:t}=e;return M({root:["root"]},ke,t)},_e=$("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Be=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiCardContent"}),{className:n,component:a="div"}=s,i=I(s,Re),c=p({},s,{component:a}),l=Ne(c);return r.jsx(_e,p({as:a,className:b(l.root,n),ownerState:c,ref:o},i))});function Le(e){return R("MuiCardMedia",e)}N("MuiCardMedia",["root","media","img"]);const Oe=["children","className","component","image","src","style"],Ge=e=>{const{classes:t,isMediaComponent:o,isImageComponent:s}=e;return M({root:["root",o&&"media",s&&"img"]},Le,t)},Pe=$("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:s,isImageComponent:n}=o;return[t.root,s&&t.media,n&&t.img]}})(({ownerState:e})=>p({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),Ve=["video","audio","picture","iframe","img"],We=["picture","img"],Ee=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiCardMedia"}),{children:n,className:a,component:i="div",image:c,src:l,style:d}=s,u=I(s,Oe),m=Ve.indexOf(i)!==-1,x=!m&&c?p({backgroundImage:`url("${c}")`},d):d,g=p({},s,{component:i,isMediaComponent:m,isImageComponent:We.indexOf(i)!==-1}),v=Ge(g);return r.jsx(Pe,p({className:b(v.root,a),as:i,role:!m&&c?"img":void 0,ref:o,style:x,ownerState:g,src:m?c||l:void 0},u,{children:n}))}),ee=f.createContext();function ze(e){return R("MuiGrid",e)}const Fe=[0,1,2,3,4,5,6,7,8,9,10],Te=["column-reverse","column","row-reverse","row"],Ue=["nowrap","wrap-reverse","wrap"],S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=N("MuiGrid",["root","container","item","zeroMinWidth",...Fe.map(e=>`spacing-xs-${e}`),...Te.map(e=>`direction-xs-${e}`),...Ue.map(e=>`wrap-xs-${e}`),...S.map(e=>`grid-xs-${e}`),...S.map(e=>`grid-sm-${e}`),...S.map(e=>`grid-md-${e}`),...S.map(e=>`grid-lg-${e}`),...S.map(e=>`grid-xl-${e}`)]),De=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function h(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function He({theme:e,ownerState:t}){let o;return e.breakpoints.keys.reduce((s,n)=>{let a={};if(t[n]&&(o=t[n]),!o)return s;if(o===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=P({values:t.columns,breakpoints:e.breakpoints.values}),c=typeof i=="object"?i[n]:i;if(c==null)return s;const l=`${Math.round(o/c*1e8)/1e6}%`;let d={};if(t.container&&t.item&&t.columnSpacing!==0){const u=e.spacing(t.columnSpacing);if(u!=="0px"){const m=`calc(${l} + ${h(u)})`;d={flexBasis:m,maxWidth:m}}}a=p({flexBasis:l,flexGrow:0,maxWidth:l},d)}return e.breakpoints.values[n]===0?Object.assign(s,a):s[e.breakpoints.up(n)]=a,s},{})}function Ke({theme:e,ownerState:t}){const o=P({values:t.direction,breakpoints:e.breakpoints.values});return D({theme:e},o,s=>{const n={flexDirection:s};return s.indexOf("column")===0&&(n[`& > .${k.item}`]={maxWidth:"none"}),n})}function te({breakpoints:e,values:t}){let o="";Object.keys(t).forEach(n=>{o===""&&t[n]!==0&&(o=n)});const s=Object.keys(e).sort((n,a)=>e[n]-e[a]);return s.slice(0,s.indexOf(o))}function qe({theme:e,ownerState:t}){const{container:o,rowSpacing:s}=t;let n={};if(o&&s!==0){const a=P({values:s,breakpoints:e.breakpoints.values});let i;typeof a=="object"&&(i=te({breakpoints:e.breakpoints.values,values:a})),n=D({theme:e},a,(c,l)=>{var d;const u=e.spacing(c);return u!=="0px"?{marginTop:`-${h(u)}`,[`& > .${k.item}`]:{paddingTop:h(u)}}:(d=i)!=null&&d.includes(l)?{}:{marginTop:0,[`& > .${k.item}`]:{paddingTop:0}}})}return n}function Ae({theme:e,ownerState:t}){const{container:o,columnSpacing:s}=t;let n={};if(o&&s!==0){const a=P({values:s,breakpoints:e.breakpoints.values});let i;typeof a=="object"&&(i=te({breakpoints:e.breakpoints.values,values:a})),n=D({theme:e},a,(c,l)=>{var d;const u=e.spacing(c);return u!=="0px"?{width:`calc(100% + ${h(u)})`,marginLeft:`-${h(u)}`,[`& > .${k.item}`]:{paddingLeft:h(u)}}:(d=i)!=null&&d.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${k.item}`]:{paddingLeft:0}}})}return n}function Ze(e,t,o={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[o[`spacing-xs-${String(e)}`]];const s=[];return t.forEach(n=>{const a=e[n];Number(a)>0&&s.push(o[`spacing-${n}-${String(a)}`])}),s}const Qe=$("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{container:s,direction:n,item:a,spacing:i,wrap:c,zeroMinWidth:l,breakpoints:d}=o;let u=[];s&&(u=Ze(i,d,t));const m=[];return d.forEach(x=>{const g=o[x];g&&m.push(t[`grid-${x}-${String(g)}`])}),[t.root,s&&t.container,a&&t.item,l&&t.zeroMinWidth,...u,n!=="row"&&t[`direction-xs-${String(n)}`],c!=="wrap"&&t[`wrap-xs-${String(c)}`],...m]}})(({ownerState:e})=>p({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ke,qe,Ae,He);function Je(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const o=[];return t.forEach(s=>{const n=e[s];if(Number(n)>0){const a=`spacing-${s}-${String(n)}`;o.push(a)}}),o}const Xe=e=>{const{classes:t,container:o,direction:s,item:n,spacing:a,wrap:i,zeroMinWidth:c,breakpoints:l}=e;let d=[];o&&(d=Je(a,l));const u=[];l.forEach(x=>{const g=e[x];g&&u.push(`grid-${x}-${String(g)}`)});const m={root:["root",o&&"container",n&&"item",c&&"zeroMinWidth",...d,s!=="row"&&`direction-xs-${String(s)}`,i!=="wrap"&&`wrap-xs-${String(i)}`,...u]};return M(m,ze,t)},F=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiGrid"}),{breakpoints:n}=ve(),a=ie(s),{className:i,columns:c,columnSpacing:l,component:d="div",container:u=!1,direction:m="row",item:x=!1,rowSpacing:g,spacing:v=0,wrap:_="wrap",zeroMinWidth:B=!1}=a,C=I(a,De),L=g||v,j=l||v,V=f.useContext(ee),Q=u?c||12:V,J={},X=p({},C);n.keys.forEach(O=>{C[O]!=null&&(J[O]=C[O],delete X[O])});const Y=p({},a,{columns:Q,container:u,direction:m,item:x,rowSpacing:L,columnSpacing:j,wrap:_,zeroMinWidth:B,spacing:v},J,{breakpoints:n.keys}),ae=Xe(Y);return r.jsx(ee.Provider,{value:Q,children:r.jsx(Qe,p({ownerState:Y,className:b(ae.root,i),as:d,ref:o},X))})});function Ye(e){return R("MuiListItemIcon",e)}N("MuiListItemIcon",["root","alignItemsFlexStart"]);const et=["className"],tt=e=>{const{alignItems:t,classes:o}=e;return M({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Ye,o)},st=$("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>p({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),T=f.forwardRef(function(t,o){const s=y({props:t,name:"MuiListItemIcon"}),{className:n}=s,a=I(s,et),i=f.useContext(U),c=p({},s,{alignItems:i.alignItems}),l=tt(c);return r.jsx(st,p({className:b(l.root,n),ownerState:c,ref:o},a))});var q={},ot=H;Object.defineProperty(q,"__esModule",{value:!0});var se=q.default=void 0,nt=ot(K()),at=r;se=q.default=(0,nt.default)((0,at.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var A={},rt=H;Object.defineProperty(A,"__esModule",{value:!0});var oe=A.default=void 0,it=rt(K()),ct=r;oe=A.default=(0,it.default)((0,ct.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var Z={},lt=H;Object.defineProperty(Z,"__esModule",{value:!0});var ne=Z.default=void 0,dt=lt(K()),ut=r;ne=Z.default=(0,dt.default)((0,ut.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");function xt(){const e=de(t=>t.breakpoints.between("md","lg"));return f.useEffect(()=>{ce.send({hitType:"pageview",page:window.location.pathname})}),r.jsxs(F,{container:!0,spacing:e?3:0,children:[r.jsx(F,{item:!0,xs:12,sm:12,md:4,lg:3,children:r.jsxs(Se,{sx:t=>({[t.breakpoints.up("md")]:{position:"sticky",top:"85px"},[t.breakpoints.between("xs","md")]:{width:"350px",margin:"0 auto"}}),elevation:10,children:[r.jsx(Ee,{image:"me.jpg",sx:{height:300}}),r.jsx(Be,{children:r.jsxs(ue,{children:[r.jsx(W,{disablePadding:!0,children:r.jsxs(z,{component:"a",href:"https://www.google.com/maps/search/?api=1&query=P%C3%B3csmegyer,%20Hungary",target:"_blank",children:[r.jsx(T,{children:r.jsx(se,{})}),r.jsx(E,{primary:r.jsx(Ce,{id:"LcDQ4G",defaultMessage:[{type:0,value:"Pócsmegyer, Hungary"}]})})]})}),r.jsx(W,{disablePadding:!0,children:r.jsxs(z,{children:[r.jsx(T,{children:r.jsx(oe,{})}),r.jsx(E,{primary:"Full stack developer"})]})}),r.jsx(W,{disablePadding:!0,children:r.jsxs(z,{component:"a",href:"mailto:gallayb@gmail.com",target:"_blank",children:[r.jsx(T,{children:r.jsx(ne,{})}),r.jsx(E,{primary:"gallayb@gmail.com"})]})})]})})]})}),r.jsx(F,{item:!0,xs:12,sm:12,md:8,lg:9,children:r.jsx(pe,{})})]})}export{xt as default};