'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4e5f22f432a90d4425f90b7d343d422a",
"version.json": "3b5c36038c49a7cf0ec7dfd924d55e6a",
"index.html": "0e0a19671e6f40d590de33ebce96521a",
"/": "0e0a19671e6f40d590de33ebce96521a",
"main.dart.js": "18cc69ee1565f88fc57710f48b0fbf36",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4cd0f26a73c158f407e5d713a7cfa2fa",
".git/config": "6178c4131b796defac6bf86720a4e282",
".git/objects/0c/f03c5ed6aa898bbccaf09229d4902c856996f3": "f4b4afd6452b3d3e6521a2f153aef45a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/bd9d1bd597ef2b7ec74bde3c03feda095755cd": "0e6a3799c5b6c3e9b85418ed7f4ed6e2",
".git/objects/03/014c149af47f473bb753fc3fbfa9487b463876": "0d551a014c3a223fce67aaaeb645e613",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/4a0d86519ed5232e1f0717ee23f7d9869e95fa": "d3499578c07b3fac6808aa5bae905c8c",
".git/objects/6a/40a0ea446b7c2332c4a7f443bd747d3862992c": "357b2238b70a8bf699502deacb0ccf28",
".git/objects/32/1c0dd636577a6a88c00c632553f0f43fd30db2": "81c47108e775972445b2b6af7dff1b27",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/636165520ac87a0ac73e9c33c96ca504a447e2": "dda573ac7bbc6d064c44fbab1d911617",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3d/d672b644c2e97a4073f460de871ca1976d8b2b": "e5874fafe2b47248b77e4db14490e47a",
".git/objects/67/9cfb0d855352257712face22dbb124dcc676e2": "c135fec6e83a98f04307fade1e4eca17",
".git/objects/0e/a3f1be72599100946538cab5266a7b6a2c287c": "51debcc69b3d90f37c0ea43630728e87",
".git/objects/5a/4af76ad5ff9e0956d184c04b356c3f8b9fb50c": "261aa04d15255c602e326b7d9e8d9461",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/c52c3ce48f39bcd1e3d6efa7082652bfff603b": "c53a73782dc6efd4d08062043063a3ea",
".git/objects/b5/78c35b6d882e5a893c4febd3fa7fb503916a1c": "66adc141a8e0c8ddad0f4b100b630147",
".git/objects/b2/f43a474b6758e99a4156c442c9b16620c4e582": "38ca0cd5e5818024560f05331c8cd42b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/d1ee3ccb1e14879a954b2c55133c4c097da115": "09173a828d97314dbd40194359f39637",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/959ffcf4f619e87f51fff9712a999f6dd0b744": "be8d6631081177266e6f90ba4e791ec5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/423cc649120f764f7922e0f2b33d3e3cf92e26": "a7969c83aae29aeafc5d1c7c459614fc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/49f922d0ed786844a6a2b2eab883cb35b632ca": "baa5c653ef493e3f689d9f4ba170ad93",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/e79d881cc18bc7c31a0597776819a04cc21b13": "ad6c11cce6ee6d70e6b11c4fbd023a49",
".git/objects/cf/d8bbab708971bc9a3a2e783a3ad5f90485fc85": "d443f6b36e0b0e7d1edcfc741b4c2342",
".git/objects/ca/61eca0aa3fdc793037b24e26f212bcfc7a6a81": "8670fdc6bcab9f0fae501d62174b0b76",
".git/objects/fe/545ff8d47c3e228362df5d0ead9c1ee06c25c8": "439b7c733f8471708f9867899144747a",
".git/objects/ed/a958e7c96c0c5fee2ab9cec4bdc00fbb851423": "f8f694cc76a0d2cfcd6ee98c2a530061",
".git/objects/ec/fe0de328b15f200ec425b2a0943d08f623faeb": "038314d0d55e2a3c4339160660363477",
".git/objects/4b/9385d59bc6da550d7e7f3a4075cf88386ea910": "1477ed427155424f02f6485744e2be13",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/c8223ff852f7cb520967ae904a75be2f0fc296": "5b7f39335e1551b28bdd9b6ac04afc0f",
".git/objects/73/e8aedbad4d074f85511a4a42f2198a3cdd935a": "d3150e441002e069f9823d7644df1c24",
".git/objects/73/fd875f25d8cba7a56bb50aad85b15a293a6935": "3aa725bf4bf5c290de5c3dbf05f7b0ec",
".git/objects/7b/f7470e59b4e2ddb814b6b202f8118eec0f39c4": "340ccbda8d35bee89c79cf72f15dfbab",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/593f240ba5e78b9856312d5b2963ce90f5a384": "26a090b1e60c914f3dc6c3e36d497764",
".git/objects/10/9a72ffb640b60f3ef70e5d98ef0206a97bcf58": "67de23bedca56dfb8a84b3a31e623ef1",
".git/objects/2f/872137c5d23e64d131d8d84f97144f3f763573": "133bbd260be89ae33a107dd9fdec77a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/57c175efa605b528892d4f0ffcb70907a1d1e7": "b4027a9a951684820ac052ab6fce6398",
".git/objects/9f/3eb7c211df63f2e532df6682c84d14123084bb": "37bd13568a2451f9f48f9d9d8599a65c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/baef8f61175fa3a77e418a712ba1e65a8086d2": "9d904ac94e85252643f0a067df893b40",
".git/objects/91/fdcb8f2579378964ee8284bcd7eb9c13bb46d9": "da71435cf17b6b8d9299b7d17a663752",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3f/c1bd694bebf79a0c0ae5529b231677cfcf2b0d": "54197a60ccbac6128780c637301b932b",
".git/objects/01/4136cbf23c62aaea8270120baa0273dac7c2ca": "f80d561af65b16416af6cc769e44ea63",
".git/objects/6c/1b4d2859a98bc77650fb22cbf4ce476c3b5712": "773fbee5432424a7139f183d274208d6",
".git/objects/0f/4c62939549a1a9b4e381be6c57ffa77a4d6f2f": "53ddab688c0e02acb11c4c43789def5d",
".git/objects/d3/1511904109c7442b496b7bb02f86fdb57d741a": "a51ca18ce2d6fa397f77a58298e46a61",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/8f863e60802f64eacddd7516c830a31b188c37": "82abff0a68bb07af4d8fc12d64f329b0",
".git/objects/a7/419865d0b08cbebb9ff414b9fc5a57cae1f64b": "44038931dae4426f7169cbc56571a5bd",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/3796e5c6d40bf2f5e6613f975987c1b8f21591": "cad026a307e4a5e97f615ea485143291",
".git/objects/a9/52bc582fb1aca5b14f874e24079da3dd37438f": "a6bc5e6895be352471913844e1969a5e",
".git/objects/d2/c5b1ef47e9d86543702006c7270fc5fe91e29e": "dbff065677dba824c15b03360f3c2e41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/cd/36c45824c55dbae57311f2865a1a11d6156a8f": "2278aec31f8777242ee43ee43c434804",
".git/objects/cc/4884aabb5cbdb53c826a12509af4db412adb18": "7ad25fc47e8c842a765d01cb78bea475",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/39c81be0ebf32ba31f42840564c83c5c13a104": "b04ed1ea208466d0b8f3aa5a1638cdfe",
".git/objects/1b/e6c12869597deafebd3d8b74c807d8f721438c": "0696d327b0635b3890fba6af1dc05498",
".git/objects/70/ce3dc00c750afc21b20204d93e4a1fe9c2437c": "ca3f3d1c19941388f77509e4c1ad8d02",
".git/objects/1e/afa7f9795d967d5cc6d75f77ecdb07b2a01952": "e3e9a319646ed02ccbfd748a365e40b9",
".git/objects/4a/453869d35a779703ef01715821aeefd30bb923": "6c55fa225bbd33853103ca72766cf725",
".git/objects/4a/8ac305cac047c74850a2a497fa4eb484947aca": "ac94d885406d0b69cf263f550f411c3c",
".git/objects/24/30e655100913aca9e530692963291c86920432": "546d5bb0eba4521a7e7ef0b6687275df",
".git/objects/23/8b57731d8267a6b93ed3c4d5b8bd9f7d0aaea0": "d53dd93b553cf74c530e3b95127253d4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/f967117762ade50e71d19373fc623b106f7951": "ffa619cd205825dd3028f8ebe769f372",
".git/objects/8b/03519910adaaf3007801646c2f8248311f2956": "5cf2fd6a5b48ac1085094b74e9913593",
".git/objects/7a/46e937e9d48e979cc70ed60a471e77ff706453": "3ba77888b41e01f8c2b6f2b1bffaf432",
".git/objects/7a/d1695293feae31aed1ee3c80107c607cc05a00": "2ed6ca1657234bba20b67ff96feab5e0",
".git/objects/25/05e6e645ccf91d9e0d9fa9b3ec797c8ed87a52": "a42a2117ddcb22e07a0fa41eca212d60",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05c9c98cee16c59d96af05b84bf7ec7a",
".git/logs/refs/heads/main": "9cef3ea8f92ea97c6dc1b6c24a48b797",
".git/logs/refs/remotes/origin/main": "77ecac91144a6836c207e3b36103746d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "20858a84b50ecfc6068665d07c38ae9a",
".git/refs/remotes/origin/main": "20858a84b50ecfc6068665d07c38ae9a",
".git/index": "3e53b20484e2cf724f368b6ed5c978ec",
".git/COMMIT_EDITMSG": "f09874b2cd1b12cf7f021875fb0eae99",
"assets/AssetManifest.json": "0de209966f8fff2a459fd63b1fd403a4",
"assets/NOTICES": "93d6a5af2a625dcb9558c4f8ca147368",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6d085b89613d21439535bb01dd583ff5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b9cf50564134f14e2d24f23e2a0d508f",
"assets/fonts/MaterialIcons-Regular.otf": "d6f80dbd7592ebf3153a34c9742d6784",
"assets/assets/animation_json/celebrate.json": "92e885daa1d9a8fb2c910b1d47fd09ef",
"assets/assets/animation_json/no_event.json": "24d35a39303df84cf0b61965ab03e30d",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
