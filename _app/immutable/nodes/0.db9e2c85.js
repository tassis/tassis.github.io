import{S as C,i as R,s as F,k as h,q as b,a as k,l as p,m as $,r as D,h as o,c as V,n as m,b as y,C as u,u as H,D as I,E as T,y as j,F as Y,z,A as B,G as J,H as K,I as M,g as A,d as x,B as G}from"../chunks/index.1d3ba086.js";function P(f){let t,a,s,r,i,d,n,c,v,l,e,_;return{c(){t=h("nav"),a=h("div"),s=h("div"),r=h("a"),i=b(f[0]),d=k(),n=h("div"),c=k(),v=h("nav"),l=h("div"),e=h("a"),_=b("關於機器人"),this.h()},l(g){t=p(g,"NAV",{class:!0});var E=$(t);a=p(E,"DIV",{class:!0});var w=$(a);s=p(w,"DIV",{class:!0});var S=$(s);r=p(S,"A",{href:!0});var L=$(r);i=D(L,f[0]),L.forEach(o),S.forEach(o),d=V(w),n=p(w,"DIV",{class:!0}),$(n).forEach(o),c=V(w),v=p(w,"NAV",{class:!0});var N=$(v);l=p(N,"DIV",{class:!0});var q=$(l);e=p(q,"A",{href:!0,class:!0});var O=$(e);_=D(O,"關於機器人"),O.forEach(o),q.forEach(o),N.forEach(o),w.forEach(o),E.forEach(o),this.h()},h(){m(r,"href","/"),m(s,"class","text-xl logo svelte-kulw02"),m(n,"class","grow"),m(e,"href","/about"),m(e,"class","svelte-kulw02"),m(l,"class","nav-item"),m(v,"class","nav-links svelte-kulw02"),m(a,"class","flex h-full nav-container items-center align-middle svelte-kulw02"),m(t,"class","flex fixed w-full navbar svelte-kulw02")},m(g,E){y(g,t,E),u(t,a),u(a,s),u(s,r),u(r,i),u(a,d),u(a,n),u(a,c),u(a,v),u(v,l),u(l,e),u(e,_)},p(g,[E]){E&1&&H(i,g[0])},i:I,o:I,d(g){g&&o(t)}}}function Q(f,t,a){let{title:s}=t;return f.$$set=r=>{"title"in r&&a(0,s=r.title)},[s]}class U extends C{constructor(t){super(),R(this,t,Q,P,F,{title:0})}}function W(f){let t,a,s,r,i=new Date().getFullYear()+"",d,n;return{c(){t=h("footer"),a=h("div"),s=h("div"),r=b("Copyright © 2020 - "),d=b(i),n=b(" SaweiCore Lab All Rights Reserved."),this.h()},l(c){t=p(c,"FOOTER",{class:!0});var v=$(t);a=p(v,"DIV",{class:!0});var l=$(a);s=p(l,"DIV",{class:!0});var e=$(s);r=D(e,"Copyright © 2020 - "),d=D(e,i),n=D(e," SaweiCore Lab All Rights Reserved."),e.forEach(o),l.forEach(o),v.forEach(o),this.h()},h(){m(s,"class","copyright"),m(a,"class","flex justify-center items-center px-10 h-full footer-container"),m(t,"class","w-full pt-20 pb-5 site-footer")},m(c,v){y(c,t,v),u(t,a),u(a,s),u(s,r),u(s,d),u(s,n)},p:I,i:I,o:I,d(c){c&&o(t)}}}class X extends C{constructor(t){super(),R(this,t,null,W,F,{})}}function Z(f){let t,a,s,r,i,d,n,c;document.title=t=f[0].title,s=new U({props:{title:f[0].title}});const v=f[3].default,l=T(v,f,f[2],null);return n=new X({}),{c(){a=k(),j(s.$$.fragment),r=k(),i=h("div"),l&&l.c(),d=k(),j(n.$$.fragment),this.h()},l(e){Y("svelte-mrkvkn",document.head).forEach(o),a=V(e),z(s.$$.fragment,e),r=V(e),i=p(e,"DIV",{class:!0});var g=$(i);l&&l.l(g),g.forEach(o),d=V(e),z(n.$$.fragment,e),this.h()},h(){m(i,"class","pt-20 px-4 main-wrapper svelte-1vg91fs")},m(e,_){y(e,a,_),B(s,e,_),y(e,r,_),y(e,i,_),l&&l.m(i,null),y(e,d,_),B(n,e,_),c=!0},p(e,[_]){(!c||_&1)&&t!==(t=e[0].title)&&(document.title=t),l&&l.p&&(!c||_&4)&&J(l,v,e,e[2],c?M(v,e[2],_,null):K(e[2]),null)},i(e){c||(A(s.$$.fragment,e),A(l,e),A(n.$$.fragment,e),c=!0)},o(e){x(s.$$.fragment,e),x(l,e),x(n.$$.fragment,e),c=!1},d(e){e&&o(a),G(s,e),e&&o(r),e&&o(i),l&&l.d(e),e&&o(d),G(n,e)}}}function ee(f,t,a){let{$$slots:s={},$$scope:r}=t,{data:i}=t;const d=i.config;return f.$$set=n=>{"data"in n&&a(1,i=n.data),"$$scope"in n&&a(2,r=n.$$scope)},[d,i,r,s]}class se extends C{constructor(t){super(),R(this,t,ee,Z,F,{data:1})}}export{se as component};
