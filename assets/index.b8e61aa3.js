import{S as n,P as o,W as t,T as e,M as a,a as i,b as s,c as r,A as d,O as w,B as c,d as p,e as l,f as m}from"./vendor.4b4c69c3.js";const u=new n,g=new o(75,window.innerWidth/window.innerHeight,.1,1e3),x=new t({canvas:document.querySelector("#bg")});x.setPixelRatio(window.devicePixelRatio),x.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),g.position.setX(-3),x.render(u,g);const y=(new e).load("normal.jpg"),f=(new e).load("donutTexture1.jpg"),z=new a(new i(10,3,16,100),new s({map:f,normalMap:y}));u.add(z);const b=new r(16767673);b.position.set(6,6,6);const h=new d(16767673);u.add(b,h),new w(g,x.domElement),Array(230).fill().forEach((function(){const n=new l(.25,24,24),o=new s({color:16777215}),t=new a(n,o),[e,i,r]=Array(3).fill().map((()=>m.randFloatSpread(100)));t.position.set(e,i,r),u.add(t)}));const j=(new e).load("space1.jpg");u.background=j;const A=(new e).load("michal_square.png"),S=new a(new c(3,3,3),new p({map:A}));u.add(S);const q=(new e).load("mars.jpg"),v=new a(new l(3,32,32),new s({map:q,normalMap:y}));function M(){const n=document.body.getBoundingClientRect().top;v.rotation.x+=.05,v.rotation.y+=.075,v.rotation.z+=.05,S.rotation.y+=.01,S.rotation.z+=.01,g.position.z=-.01*n,g.position.x=-2e-4*n,g.rotation.y=-2e-4*n}u.add(v),v.position.z=30,v.position.x=-10,S.position.z=-5,S.position.x=2,document.body.onscroll=M,M(),function n(){requestAnimationFrame(n),z.rotation.x+=.01,z.rotation.y+=.005,z.rotation.z+=.01,v.rotation.x+=.005,x.render(u,g)}();