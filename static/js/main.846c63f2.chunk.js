(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{33:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){},36:function(e,c,s){},45:function(e,c,s){},46:function(e,c,s){},47:function(e,c,s){},48:function(e,c,s){},49:function(e,c,s){},50:function(e,c,s){"use strict";s.r(c);var t=s(1),j=s(2),i=s.n(j),a=s(24),n=s.n(a),r=(s(33),s(34),s(13)),b=s(3),l=s(8),O=s(5),o=s(10),x=s.p+"static/media/logo.c8a83ed8.png",d=s.p+"static/media/avatar.d11a3619.jpeg",u=(s(35),s(17)),h=s(11),m=s(18),v=s(25);s(36);var p=function(){return Object(t.jsx)("div",{className:"container-options",children:Object(t.jsxs)("div",{className:"profile-options",children:[Object(t.jsxs)("div",{className:"options",children:[Object(t.jsxs)("button",{children:[Object(t.jsx)(v.a,{size:20}),"Perfil"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(u.a,{size:20}),"Salvos"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(h.c,{size:20}),"Configura\xe7\xf5es"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(m.a,{size:20}),"Trocar de conta"]})]}),Object(t.jsx)("p",{children:"Sair"})]})})};var f=function(){var e=Object(j.useState)(!1),c=Object(l.a)(e,2),s=c[0],i=c[1];return Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("div",{className:"logo",children:Object(t.jsx)(r.b,{to:"/",children:Object(t.jsx)("img",{className:"logo-image",src:x})})}),Object(t.jsxs)("div",{className:"icons",children:[Object(t.jsx)(r.b,{to:"/",children:Object(t.jsx)(O.a,{size:22})}),Object(t.jsx)(r.b,{to:"/inbox",children:Object(t.jsx)(o.c,{size:22})}),Object(t.jsx)(O.b,{size:22}),Object(t.jsx)(O.c,{size:22}),Object(t.jsx)("button",{onClick:function(){i(!s),console.log("aqui")},children:Object(t.jsx)("img",{className:"header-avatar",src:d})}),s?Object(t.jsx)(p,{}):""]})]})};s(45);var g=function(){return Object(t.jsxs)("div",{className:"container-nav",children:[Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("span",{children:Object(t.jsx)(O.e,{size:25,className:"icon"})}),Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]}),Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]}),Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]}),Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]}),Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]}),Object(t.jsxs)("div",{className:"avatar",children:[Object(t.jsx)("img",{src:d}),Object(t.jsx)("p",{children:"vicpulsr"})]})]})},N=s(27);s(46);var z=function(e){var c=e.exit;function s(){c()}return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"container-options-share",children:[Object(t.jsxs)("div",{className:"header-options",children:[Object(t.jsx)("span",{children:"Compartilhar em..."}),Object(t.jsx)("button",{onClick:s,children:Object(t.jsx)(N.a,{size:25})})]}),Object(t.jsxs)("div",{className:"share-options",children:[Object(t.jsxs)("button",{children:[Object(t.jsx)(o.c,{size:25}),"Compartilhar no Direct"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(o.a,{size:25}),"Compartilhar no Facebook"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(o.b,{size:25}),"Compartilhar no Messenger"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(m.b,{size:25}),"Compartilhar no Twitter "]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(O.d,{size:25}),"Compartilhar por email"]}),Object(t.jsxs)("button",{children:[Object(t.jsx)(h.d,{size:25}),"Copiar link "]}),Object(t.jsx)("button",{onClick:s,children:"Cancelar"})]})]}),Object(t.jsx)("div",{className:"out",onClick:s})]})},k=s(23);s(47);var C=function(){var e=Object(j.useState)(""),c=Object(l.a)(e,2),s=c[0],i=c[1],a=Object(j.useState)(!1),n=Object(l.a)(a,2),r=n[0],b=(n[1],Object(j.useState)([])),o=Object(l.a)(b,2),x=o[0],d=o[1],u=Object(j.useState)(!1),h=Object(l.a)(u,2),m=h[0],v=h[1];return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"add-comment",children:[Object(t.jsx)("input",{value:s,onChange:function(e){return function(e){var c=e.target.value;i(c)}(e)},placeholder:"Adicione um coment\xe1rio"}),Object(t.jsx)("button",{onClick:function(){v(!0);var e={user:"vicpulsr",text:s,liked:r};d([].concat(Object(k.a)(x),[e]))},className:s?"btn-add":"",children:"Publicar"})]}),m?x.map((function(e,c){return Object(t.jsxs)("div",{className:"comment",children:[Object(t.jsxs)("div",{className:"comment-header",children:[Object(t.jsx)("span",{children:e.user}),Object(t.jsx)("p",{children:e.text})]}),Object(t.jsx)("div",{className:"btn-comment",children:Object(t.jsx)("button",{className:e.liked?"btn-like":"",onClick:function(){return function(e){var c=Object(k.a)(x);c[e].liked=!c[e].liked,d(c)}(c)},children:e.liked?Object(t.jsx)(O.f,{size:15}):Object(t.jsx)(O.c,{size:15})})})]})})):""]})};s(48);var S=function(e){var c=e.image,s=Object(j.useState)(!1),i=Object(l.a)(s,2),a=i[0],n=i[1],r=Object(j.useState)(!1),b=Object(l.a)(r,2),x=b[0],m=b[1],v=Object(j.useState)(31),p=Object(l.a)(v,2),f=p[0],g=p[1],N=Object(j.useState)(!1),k=Object(l.a)(N,2),S=k[0],w=k[1],E=Object(j.useState)(!1),P=Object(l.a)(E,2),q=P[0],A=P[1];return Object(j.useEffect)((function(){g(a?f+1:f-1)}),[a]),Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header",children:[Object(t.jsx)("img",{className:"card-avatar",src:d}),Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{children:"vicpulsr"}),Object(t.jsx)("p",{children:"Porto Alegre"})]})]}),Object(t.jsx)("div",{className:"card-image",children:Object(t.jsx)("img",{src:c})}),Object(t.jsxs)("div",{className:"nav-icons",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("button",{className:a?"btn-like":"",onClick:function(){console.log("aqui"),n(!a)},children:a?Object(t.jsx)(O.f,{size:25}):Object(t.jsx)(O.c,{size:25})}),Object(t.jsx)("button",{onClick:function(){console.log("coment"),A(!q)},className:"btn-comment",children:Object(t.jsx)(h.b,{size:25})}),Object(t.jsx)("button",{onClick:function(){w(!S)},children:Object(t.jsx)(o.c,{size:25})}),S?Object(t.jsx)(z,{exit:w}):""]}),Object(t.jsx)("button",{onClick:function(){m(!x)},children:x?Object(t.jsx)(h.a,{size:25}):Object(t.jsx)(u.a,{size:25})})]}),Object(t.jsxs)("div",{className:"footer-card",children:[Object(t.jsxs)("div",{className:"likes",children:[Object(t.jsx)("img",{className:"card-avatar avatar-comment",src:d}),Object(t.jsxs)("span",{children:["Curtido por ",Object(t.jsx)("strong",{children:"vicpulsr"})," e ",Object(t.jsxs)("strong",{children:["outras ",f," pessoas"]})]})]}),Object(t.jsx)("span",{className:"time",children:"h\xe1 17 horas"}),q?Object(t.jsx)(C,{}):""]})]})},w=s.p+"static/media/image.0661b10f.jpeg",E=s.p+"static/media/beach.3bbba874.jpg",P=s.p+"static/media/universe.f420b866.jpeg";var q=function(){return Object(t.jsxs)("div",{className:"home",children:[Object(t.jsx)(f,{}),Object(t.jsx)(g,{}),Object(t.jsx)(S,{image:w}),Object(t.jsx)(S,{image:E}),Object(t.jsx)(S,{image:P})]})};s(49);var A=function(){return Object(t.jsxs)("div",{className:"inbox-card",children:[Object(t.jsx)("img",{className:"card-inbox-avatar",src:d}),Object(t.jsxs)("div",{className:"inbox-message",children:[Object(t.jsx)("p",{children:"vicpulsr"}),Object(t.jsx)("p",{children:"Enviou uma publica\xe7\xe3o..."})]})]})};var F=function(){return Object(t.jsxs)("div",{className:"inbox",children:[Object(t.jsx)(f,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{}),Object(t.jsx)(A,{})]})};var J=function(){return Object(t.jsx)(r.a,{children:Object(t.jsxs)(b.c,{children:[Object(t.jsx)(b.a,{path:"/",exact:!0,component:q}),Object(t.jsx)(b.a,{path:"/inbox",component:F})]})})};var M=function(){return Object(t.jsx)(J,{})};n.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(M,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.846c63f2.chunk.js.map