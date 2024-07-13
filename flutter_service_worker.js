'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a22de5ae37d99be66ea8fbfce1a63a7e",
".git/config": "524ffbdaea4dea07030e9d2055b55916",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e7727a996c3e9ba1bda5111f335e88a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb01f55434a097c760f29f4ed6df2f52",
".git/logs/refs/heads/master": "bb01f55434a097c760f29f4ed6df2f52",
".git/logs/refs/remotes/origin/master": "6586ca56d59f708fccafe99d468b4e1f",
".git/objects/02/bfe00c24b096767984d046ee404c640bd54446": "b3955fc4ea48d3843d5d91c8948e009b",
".git/objects/08/4dd078f70792c606292e9c4dcf0470fd22cd5c": "f54d27a879dec159bcde71bd91cb688f",
".git/objects/0c/8a4efb69a144d9bc8af3fc57e741c667580fbf": "60d37b70224f28afc7bb1f14df9d3894",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/f060fe1ef8cd14fd41c03f38ca1b0393ceb45c": "a12024f2aa6c0fb97216d13c3bcef74b",
".git/objects/1a/d9c65e5216b03502ba5b84a18e45f871b366f1": "576441377837b6fe1d5e248b4ddce8ec",
".git/objects/26/43e6f09c2c46acb78a8888a1c0d28e44aa125b": "5ad7cee84a0d304c12cd05ffa0796ff2",
".git/objects/2e/a8227ec54f2a4e1d45b252ee13f9e3b660e0e8": "0403d9f68713f8c28a549dbe740e0a6a",
".git/objects/37/630baa4176ebb64f3a629513ba1c8b3ac53842": "2196ecb0265ffe38e3c3e38dc986f05e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/42a5540e49870d024bb8dd7cb3fc65246dfe3d": "3e6397ca8695fb67930ca72c39a3bb8b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/47/c9ebd403786428c6a44a438363d48f3aab4745": "cb2368e31065a88d7326c41c3d095fdf",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/637acc31434fece7a13879e4292cdd84d9aa52": "4acd3362df5a1b4163f0050be5f182e9",
".git/objects/5b/8ad019127afe5702c3601f7684b791e1127872": "81d854a2dcede91df4b20c466847accf",
".git/objects/67/4b2142eb6f44c6f6827c4134bf7c9769573d4b": "d421cbae22458bcd6c24b22d1424c2f4",
".git/objects/67/7b5e486cf4321f7977e071a4d2215d833f6d66": "59422ed6b861ee5f7e45d330f660a3ab",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/ad42cae97b0099945743a8c2b603c03e6257f5": "678c5d4f70527f7453e32aaca44b9b05",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/59114874973b0599217fed1b4003357e76071d": "82ff125c561f33d95b9a70edf78a9384",
".git/objects/99/4b520f3a9c60b9e5cf82cada7998783be08544": "1eb229d311d69fb10b6b9f43c39ecb89",
".git/objects/9f/3778a405a47fe6c1c989254449997903108307": "f93563f8cf7f04347662f9561faa31ba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/236ec994e5586ea84b553623db04c4cec3124e": "906d27f26ef2f95f6c9999c18a11def8",
".git/objects/ac/77790ec9ecf1889429c2ddbab7670cdbbc63dc": "18d604766b17c53e72e4d3019a54c071",
".git/objects/ad/29657a73daa5e36a5de20af2a92d8ee3a2c36e": "0dab56577d735f0fed1921bb8709f929",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/272c1b773adf3e7562fefb42ac68b48975ebc6": "da31d32e9712816f1c83502540bb82a3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/433349b7047f72f40072630c1bc110620bf09e": "9361f2ddd0544e138d58e5ddcb235916",
".git/objects/de/ec9a9e258d778a58461e33592a4ff4f8807da9": "3d69e5d4b37ce4002d53243b0e374b0b",
".git/objects/e0/2c59e52eb5ff09799c1e1e93875b654d8aaf8b": "5d78e387277cc748ff303636f8c7cd4d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/6b715f5c12061e996d9572df44bdaf5d4022e4": "a3eac3aa7db0c5e113fe4f23eb0d2527",
".git/objects/ea/2cfbb339cb8f07fce3c3e666933d2cfe4edfb7": "66478aabf5ef54698f339c3910a2d9f8",
".git/objects/eb/6d9965a9aae9564deebc8743a7068a6d24f8ba": "a6e065e702db6e89df9f339f3393ef7d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6d4da2dc6d88ae409acd5b83cf4848da464a43": "c6340e69e7bc7cf87139bb89000dbb2e",
".git/objects/ed/d5704efb9c1e9704528beb4fd3a1a455c0cbbe": "89d0e413ca03549c0394a30c5ba75c8e",
".git/objects/fa/ada5f23f67333a4c74f712b59a5cdf62d8a885": "e1c05c7fe204df664a7c44aceea89d42",
".git/objects/fb/f975b346b4b4833cccafac27b2501f14bf9f7c": "0a71e80dd512f0e7a2b03ca4b1cfcd97",
".git/objects/fd/5c4731385add1916bae962390b1be61f45f41f": "57ae822d9da090e3fd2a5caae95aff33",
".git/objects/fd/79d43bea0293ac1b20e8aca1142627983d2c07": "45f4c1433af804021b790f7f90e08e1a",
".git/refs/heads/master": "45da12c22ca4bd52d54e012eae6e488c",
".git/refs/remotes/origin/master": "45da12c22ca4bd52d54e012eae6e488c",
"assets/AssetManifest.json": "af5648ffbf7f9de0ef7c0ffd4d9788e9",
"assets/assets/fonts/AngeliaBeauty-Regular.ttf": "78931538eb0411d18531bb98b1c856f1",
"assets/assets/fonts/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/images/banner1.png": "f9399a0ca0c647cebe53461abc3dcbb3",
"assets/assets/images/banner2.png": "749031e7562f9da0d4f22c34b0ce59cb",
"assets/assets/images/logoamplop.png": "5f8c626f0e0e626933196a73683cc6ea",
"assets/assets/images/logonavbar.png": "9f1818ae85dfbd4e5de15767cfc50476",
"assets/assets/images/logonavbar2.png": "3830ece182e4e09fa117cce1a404d52e",
"assets/assets/images/mockup3.png": "8cfa92779e51c5a363688f8e0090aa0b",
"assets/assets/images/mockup4.png": "9f6704f38c350e28be2e1349256d31a0",
"assets/assets/images/product1.jpg": "36b909071e54cdd0e0467ec14c3f8916",
"assets/assets/images/product2.jpg": "b37b51fcbcdd703377f67ce475c38032",
"assets/assets/images/product3.png": "a81f160fc9e85b0dcf28de5fa961ce39",
"assets/assets/images/product4.png": "a618b2e1eb695d63d49924e02cb0cb76",
"assets/assets/images/product5.png": "f5af92053e405a20fd68a6d7f0421d3c",
"assets/assets/images/product6.jpg": "75d639ef76edfd185bfc12e03c853e56",
"assets/FontManifest.json": "d892e7f173f40a8f4056b151e6941ac8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f7cd7b3ccac7735ba789036166a6ba02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cbd750a005d433964ec4245a72cc6f82",
"/": "cbd750a005d433964ec4245a72cc6f82",
"main.dart.js": "b22fd66b8ed37b8b05b1fb7368c04749",
"manifest.json": "d51e05d493f3cd29010f62617cb111a3",
"version.json": "88a0d522c95c176d3deff658847d68bd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
