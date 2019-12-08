/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b841af11152a6c3698d34034f94396ee"
  },
  {
    "url": "arithmetic/index.html",
    "revision": "c955271f317258f9b2e4d73600a64e31"
  },
  {
    "url": "assets/css/0.styles.d78471a3.css",
    "revision": "ab1892901a2753ecec84edde844144e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57b64f1f.js",
    "revision": "25788a1defdccdde689032b3f490297e"
  },
  {
    "url": "assets/js/11.b8647538.js",
    "revision": "2ba3920ed8be1672c61d17702bbc5f03"
  },
  {
    "url": "assets/js/12.c8519ce8.js",
    "revision": "6f67368d7a8280cf19de8bd55a2e8996"
  },
  {
    "url": "assets/js/13.12bbc9b4.js",
    "revision": "bf6e7f252273676ed77082612ff364af"
  },
  {
    "url": "assets/js/14.0ad1045b.js",
    "revision": "945b930229ce5ddc81ca37a4f8bb00d0"
  },
  {
    "url": "assets/js/15.fc5b310b.js",
    "revision": "1ab75d7f41c248900e544557c65f7813"
  },
  {
    "url": "assets/js/16.9cb6fa69.js",
    "revision": "0a5bca0ae8431d2755baeee4458ca347"
  },
  {
    "url": "assets/js/17.5cceefd1.js",
    "revision": "4f96e32306bbff0dd71e9046a6b276ad"
  },
  {
    "url": "assets/js/18.0efc6464.js",
    "revision": "3930b652d328bbfec3535c79cd983082"
  },
  {
    "url": "assets/js/19.6a904e1e.js",
    "revision": "56ad860c1a42f31940af325a67a792c6"
  },
  {
    "url": "assets/js/2.4e065518.js",
    "revision": "fffafdc47f4c39f12500ff322cc04905"
  },
  {
    "url": "assets/js/20.bc60e0b7.js",
    "revision": "068130651e3adf4c0dc6ba54901af2c3"
  },
  {
    "url": "assets/js/21.9ed883b0.js",
    "revision": "9f29a738cb8bbdf1229e449fdd48f72f"
  },
  {
    "url": "assets/js/22.eca068cb.js",
    "revision": "1b471f7521fe7ac1f9a26e2a49ecd85d"
  },
  {
    "url": "assets/js/23.038d368f.js",
    "revision": "e18f10b5f2d7b6c49512aa46e3c35849"
  },
  {
    "url": "assets/js/24.9feacbff.js",
    "revision": "47d14378a0ae7431f1ab9e7e1e734db6"
  },
  {
    "url": "assets/js/25.fbc725cd.js",
    "revision": "0284d0c8579942d8e85dc7fe7655c3b2"
  },
  {
    "url": "assets/js/26.e8aa43a0.js",
    "revision": "f049195effbf52d576be681702500364"
  },
  {
    "url": "assets/js/27.9f79ff3f.js",
    "revision": "df7a05cd8f78bec73c44f95d41176a4a"
  },
  {
    "url": "assets/js/28.b19f2a2a.js",
    "revision": "b8c25693f1ef210abb9ef7430c973e14"
  },
  {
    "url": "assets/js/29.30c7b5ad.js",
    "revision": "46e116f45f2d1a8002308137b9d4d22d"
  },
  {
    "url": "assets/js/3.bc28f57f.js",
    "revision": "60e540ff20f97a4762005309d74813ff"
  },
  {
    "url": "assets/js/30.71ab0ab0.js",
    "revision": "2ccd9086b60e7818be98f91116588764"
  },
  {
    "url": "assets/js/31.dc960c91.js",
    "revision": "8c4b7ea472c8b509c0ecd73f7b4e2e3d"
  },
  {
    "url": "assets/js/32.8757f0a9.js",
    "revision": "fe28d929e99b3c6bc8a9378187ba2703"
  },
  {
    "url": "assets/js/33.36ff3df3.js",
    "revision": "fe2835beeee1e920d2f27360253e49f2"
  },
  {
    "url": "assets/js/34.0fc5830e.js",
    "revision": "0a4d3cd9d4870063ab0a310209f447f1"
  },
  {
    "url": "assets/js/35.795d0133.js",
    "revision": "ee93a094983f9825577cd43024bf4deb"
  },
  {
    "url": "assets/js/36.f8e60c3a.js",
    "revision": "7d1228b1cf20cb7c405e699b70215caa"
  },
  {
    "url": "assets/js/37.a2748854.js",
    "revision": "c8b3049e29d908edb530d0a4b0764154"
  },
  {
    "url": "assets/js/4.b8797c7e.js",
    "revision": "263fd634eb9681742f3cbe511d302f2d"
  },
  {
    "url": "assets/js/5.3a3d6282.js",
    "revision": "b5a8bd18db055547969bcf4ff845e583"
  },
  {
    "url": "assets/js/6.99bcc730.js",
    "revision": "a52f84e9da193e527d670b4cb200ab64"
  },
  {
    "url": "assets/js/7.cc0a70a3.js",
    "revision": "caf5b9e7ceafe7bbe8d118e25aa246ff"
  },
  {
    "url": "assets/js/8.14e24abb.js",
    "revision": "1006d44ef7495d64d59b338ef5c7abb8"
  },
  {
    "url": "assets/js/9.23e2b973.js",
    "revision": "fcf5157cec1c5b5d154ff5861d2a0dd5"
  },
  {
    "url": "assets/js/app.ec537c0b.js",
    "revision": "8c0040b9017214745059952ef671e10e"
  },
  {
    "url": "CRUD/index.html",
    "revision": "4c9fa888e93371076272e754e797668d"
  },
  {
    "url": "frame/index.html",
    "revision": "c3409161d396ded3c1c772ea2bc97978"
  },
  {
    "url": "guide/index.html",
    "revision": "04ba3e5fd240931f88f018254f78c0c6"
  },
  {
    "url": "index.html",
    "revision": "536d541c57138ae3750263d584a5503b"
  },
  {
    "url": "interview/index.html",
    "revision": "4a779a97f2169218ebe16dac3d63f92e"
  },
  {
    "url": "math/index.html",
    "revision": "66388ba6c14edbf8f9a07675bebc620a"
  },
  {
    "url": "me.png",
    "revision": "f15dd44b48895634e4ceefed0f0275b7"
  },
  {
    "url": "SQL/index.html",
    "revision": "53a43dc90bd08b89e1a3ecbcf8b7d4ac"
  },
  {
    "url": "thumbnail/2019-07-25-functional-programming/index.html",
    "revision": "5ce39baba7a92e83e0ab000054bfc6c3"
  },
  {
    "url": "thumbnail/2019-07-25-Why-functional-programming/index.html",
    "revision": "eb0dbf9b938c7ce8ec05ea47d230c999"
  },
  {
    "url": "thumbnail/2019-07-26-Basis-function-summary/index.html",
    "revision": "e3b8a0ced60b2230471a04ef31959401"
  },
  {
    "url": "thumbnail/2019-07-26-Basis-function/index.html",
    "revision": "81646f7aa91a668234f4bf32b4e209c0"
  },
  {
    "url": "thumbnail/2019-07-28-Inputs/index.html",
    "revision": "685a21584281e8e0b3a594c9388af953"
  },
  {
    "url": "thumbnail/2019-07-29-composite-function/index.html",
    "revision": "5b4cfc1606a0df1eac813d698088f66d"
  },
  {
    "url": "thumbnail/2019-07-30-effect/index.html",
    "revision": "769093725cbb2a6e30f73375974ad3ac"
  },
  {
    "url": "thumbnail/2019-07-30-immutable/index.html",
    "revision": "7461ce00511505440e4dcfbb492b535d"
  },
  {
    "url": "thumbnail/2019-08-04-isomorphism/index.html",
    "revision": "28b17f4ab9717f58e131e72c23dce04b"
  },
  {
    "url": "thumbnail/2019-08-06-list-operation/index.html",
    "revision": "fd3e78504f47b4571164b8a168ffb447"
  },
  {
    "url": "thumbnail/2019-08-07-async/index.html",
    "revision": "b3f93546f38bc219ffb908805bceaf86"
  },
  {
    "url": "thumbnail/2019-08-07-recursion/index.html",
    "revision": "a4cc659eabdc63fc698b9e0d67e27d60"
  },
  {
    "url": "thumbnail/2019-08-08-combat/index.html",
    "revision": "beb0ea3cc691d6f2926853fec180a05b"
  },
  {
    "url": "thumbnail/2019-10-25-ThreeJS-01/index.html",
    "revision": "29974191c475747c041a02bd3f877b02"
  },
  {
    "url": "thumbnail/2019-10-25-ThreeJS-02/index.html",
    "revision": "0e1b1682659bdd3001bc63fbcd5207cd"
  },
  {
    "url": "thumbnail/2019-10-25-ThreeJS-03/index.html",
    "revision": "acdd62caac8e17178653eda18f3cc4e2"
  },
  {
    "url": "thumbnail/2019-10-25-ThreeJS-04/index.html",
    "revision": "2a298c8eda0e3978d3107838b91b24b4"
  },
  {
    "url": "thumbnail/2019-10-25-ThreeJS-05/index.html",
    "revision": "74cfa33e5fc02b7cc7d1171399e9fc7c"
  },
  {
    "url": "thumbnail/2019-10-25-Typed-learn/index.html",
    "revision": "ef6d0c28f60528b342c9436867c9700a"
  },
  {
    "url": "thumbnail/2019-10-25-TypeScript-learn/index.html",
    "revision": "90d27630ba0142dcf386803e6dc30ec8"
  },
  {
    "url": "thumbnail/vuepress@later/index.html",
    "revision": "eed39427ababbf99b2c42726ff7f417c"
  },
  {
    "url": "thumbnail/vuepress/index.html",
    "revision": "c9cc3f7605b56cc0b16570644a9fb0e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
