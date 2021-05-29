import {
    a as i,
    A as d,
    b as s,
    B as c,
    c as r,
    d as p,
    e as l,
    f as m,
    M as a,
    O as w,
    P as o,
    S as n,
    T as t,
    W as e
} from "./vendor.4b4c69c3.js";

const u = new n, g = new o(75, window.innerWidth / window.innerHeight, .1, 1e3),
    x = new e({canvas: document.querySelector("#bg")});
x.setPixelRatio(window.devicePixelRatio), x.setSize(window.innerWidth, window.innerHeight), g.position.setZ(30), g.position.setX(-3), x.render(u, g);
const y = (new t).load("normal.jpg"), f = (new t).load("/assets/donutTexture1.2e8976e3.jpg"),
    z = new a(new i(10, 3, 16, 100), new s({map: f, normalMap: y}));
u.add(z);
const b = new r(16767673);
b.position.set(6, 6, 6);
const h = new d(16767673);
u.add(b, h), new w(g, x.domElement), Array(230).fill().forEach((function () {
    const n = new l(.25, 24, 24), o = new s({color: 16777215}),
        e = new a(n, o), [t, i, r] = Array(3).fill().map((() => m.randFloatSpread(100)));
    e.position.set(t, i, r), u.add(e)
}));
const j = (new t).load("space1.jpg");
u.background = j;
const A = (new t).load("michal_square.png"), S = new a(new c(3, 3, 3), new p({map: A}));
u.add(S);
const q = (new t).load("mars.jpg"), v = new a(new l(3, 32, 32), new s({map: q, normalMap: y}));

function M() {
    const n = document.body.getBoundingClientRect().top;
    v.rotation.x += .05, v.rotation.y += .075, v.rotation.z += .05, S.rotation.y += .01, S.rotation.z += .01, g.position.z = -.01 * n, g.position.x = -2e-4 * n, g.rotation.y = -2e-4 * n
}

u.add(v), v.position.z = 30, v.position.x = -10, S.position.z = -5, S.position.x = 2, document.body.onscroll = M, M(), function n() {
    requestAnimationFrame(n), z.rotation.x += .01, z.rotation.y += .005, z.rotation.z += .01, v.rotation.x += .005, x.render(u, g)
}();
