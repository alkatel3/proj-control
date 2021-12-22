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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6eab248c7a3865293a332e4a342d0f91"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.53cf339a.css",
    "revision": "75e076e9081f5d1513f04279d7e34733"
  },
  {
    "url": "assets/img/add-user.c6e31407.png",
    "revision": "c6e314071ee6ab9bc82603d62588e6f1"
  },
  {
    "url": "assets/img/all-users.97a1ba2e.png",
    "revision": "97a1ba2ee9b60c95798a864850d86cbc"
  },
  {
    "url": "assets/img/del-user.dbd83458.png",
    "revision": "dbd8345869a02a866321b3f5608d2f0c"
  },
  {
    "url": "assets/img/eerd.15e90ae6.svg",
    "revision": "15e90ae6cfee069594b2e9488ead692e"
  },
  {
    "url": "assets/img/get-user.7a0cdcf5.png",
    "revision": "7a0cdcf5f186421db8ab33e602ba1abc"
  },
  {
    "url": "assets/img/phase_dev.6361ae0f.png",
    "revision": "6361ae0f1d761577ef26ee2ac4de7341"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/upd-user.edfeb5f8.png",
    "revision": "edfeb5f81a9ec0d8294d3bf96f033bb7"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.1d39b6f7.js",
    "revision": "088b8e03b243821fd63dfbff62e63ede"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.2bbe2684.js",
    "revision": "5ed4d5d2f7d09da10f76078d6df3b618"
  },
  {
    "url": "assets/js/14.7aef8765.js",
    "revision": "ca14869a87b5c6738d396ba26508f723"
  },
  {
    "url": "assets/js/15.a635155b.js",
    "revision": "26887b7ef360301cf21e68e8e4dfdc45"
  },
  {
    "url": "assets/js/16.d41c1526.js",
    "revision": "a435da9180062417388d3298f4d9a0d0"
  },
  {
    "url": "assets/js/17.90d62625.js",
    "revision": "c095f137874b57acf53a7f4c67cad06c"
  },
  {
    "url": "assets/js/18.1acac859.js",
    "revision": "1c65aad34329f64c3434e36443886826"
  },
  {
    "url": "assets/js/19.d4843d18.js",
    "revision": "f7f5e3d09d67d60798d51b56de58d050"
  },
  {
    "url": "assets/js/2.e79a4e84.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.b5d7564d.js",
    "revision": "ece2c037a02599df04d8901d37692f19"
  },
  {
    "url": "assets/js/21.95ba69b3.js",
    "revision": "ec673f517f10cc9ea8e034ec6336a218"
  },
  {
    "url": "assets/js/22.ddd36abf.js",
    "revision": "de7378268e632e811579aba143607f1d"
  },
  {
    "url": "assets/js/23.d109935c.js",
    "revision": "7bc997f055b55cb61e6496e90de499c3"
  },
  {
    "url": "assets/js/24.feb40043.js",
    "revision": "89a9a5a5a6d01441b0c7193fcdcfbf9c"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.240e7ac7.js",
    "revision": "da12692cacd0e29dd4f83a42314ba884"
  },
  {
    "url": "assets/js/4.232060d4.js",
    "revision": "5cc09217705f39c842abc41ea29e9757"
  },
  {
    "url": "assets/js/5.3af36237.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.a204566b.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.b140ccfc.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.5d04a177.js",
    "revision": "d2248106083086d391051d7041ba8ec3"
  },
  {
    "url": "assets/js/app.b6952c79.js",
    "revision": "240c4bf4d06db2fa4f30c730fbd9efa3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b1e0db159615f3a6030b821e7fb4582e"
  },
  {
    "url": "design/index.html",
    "revision": "142c841fafe265f4cc64a502b3738f41"
  },
  {
    "url": "index.html",
    "revision": "c31159332fbc1dc669549e92288b8f9b"
  },
  {
    "url": "intro/index.html",
    "revision": "c58fb5afee263191625102ee43c35cd6"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8ca55975a3f946fdc608b7484b9faead"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6723db5eb14dda5313d4dbca42dbb35b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "caf97cbd0ac2d865e45fd7340751132a"
  },
  {
    "url": "software/index.html",
    "revision": "c8b0a412f48c7979b05910ad5e22b32c"
  },
  {
    "url": "test/index.html",
    "revision": "0ff2ed1531ed089f91e4056ebe9f99d4"
  },
  {
    "url": "use cases/index.html",
    "revision": "0cf8e9c2383bc0ea4b9cff30c79656a9"
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
