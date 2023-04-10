const cacheName = "cache_20230410171129"; // Change value to force update

self.addEventListener("install", event => {
	// Kick out the old service worker
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
//				"android-chrome-36x36.png", // Favicon, Android Chrome M39+ with 0.75 screen density
//				"android-chrome-48x48.png", // Favicon, Android Chrome M39+ with 1.0 screen density
//				"android-chrome-72x72.png", // Favicon, Android Chrome M39+ with 1.5 screen density
//				"android-chrome-96x96.png", // Favicon, Android Chrome M39+ with 2.0 screen density
//				"android-chrome-144x144.png", // Favicon, Android Chrome M39+ with 3.0 screen density
//				"android-chrome-192x192.png", // Favicon, Android Chrome M39+ with 4.0 screen density
//				"android-chrome-256x256.png", // Favicon, Android Chrome M47+ Splash screen with 1.5 screen density
//				"android-chrome-384x384.png", // Favicon, Android Chrome M47+ Splash screen with 3.0 screen density
//				"android-chrome-512x512.png", // Favicon, Android Chrome M47+ Splash screen with 4.0 screen density
//				"apple-touch-icon.png", // Favicon, Apple default
//				"apple-touch-icon-57x57.png", // Apple iPhone, Non-retina with iOS6 or prior
//				"apple-touch-icon-60x60.png", // Apple iPhone, Non-retina with iOS7
//				"apple-touch-icon-72x72.png", // Apple iPad, Non-retina with iOS6 or prior
//				"apple-touch-icon-76x76.png", // Apple iPad, Non-retina with iOS7
//				"apple-touch-icon-114x114.png", // Apple iPhone, Retina with iOS6 or prior
//				"apple-touch-icon-120x120.png", // Apple iPhone, Retina with iOS7
//				"apple-touch-icon-144x144.png", // Apple iPad, Retina with iOS6 or prior
//				"apple-touch-icon-152x152.png", // Apple iPad, Retina with iOS7
//				"apple-touch-icon-180x180.png", // Apple iPhone 6 Plus with iOS8
//				"browserconfig.xml", // IE11 icon configuration file
//				"favicon.ico", // Favicon, IE and fallback for other browsers
//				"favicon-16x16.png", // Favicon, default
//				"favicon-32x32.png", // Favicon, Safari on Mac OS
//				"index.html", // Main HTML file
//				"logo.png", // Logo
//				"main.js", // Main Javascript file
//				"manifest.json", // Manifest file
//				"maskable_icon.png", // Favicon, maskable https://web.dev/maskable-icon
//				"mstile-70x70.png", // Favicon, Windows 8 / IE11
//				"mstile-144x144.png", // Favicon, Windows 8 / IE10
//				"mstile-150x150.png", // Favicon, Windows 8 / IE11
//				"mstile-310x150.png", // Favicon, Windows 8 / IE11
//				"mstile-310x310.png", // Favicon, Windows 8 / IE11
//				"safari-pinned-tab.svg", // Favicon, Safari pinned tab
//				"share.jpg", // Social media sharing
//				"style.css", // Main CSS file
// files for eldercare (the service worker can't cache duplicate or non-existent files!)
// use 'python get_manifest.py' to generate the list on the command line
"./about.html",
"./android-chrome-144x144.png",
"./android-chrome-192x192.png",
"./android-chrome-256x256.png",
"./android-chrome-36x36.png",
"./android-chrome-384x384.png",
"./android-chrome-48x48.png",
"./android-chrome-512x512.png",
"./android-chrome-72x72.png",
"./android-chrome-96x96.png",
"./apple-touch-icon-114x114.png",
"./apple-touch-icon-120x120.png",
"./apple-touch-icon-144x144.png",
"./apple-touch-icon-152x152.png",
"./apple-touch-icon-180x180.png",
"./apple-touch-icon-57x57.png",
"./apple-touch-icon-60x60.png",
"./apple-touch-icon-72x72.png",
"./apple-touch-icon-76x76.png",
"./apple-touch-icon.png",
"./browserconfig.xml",
"./css/bootstrap-grid.css",
"./css/bootstrap-grid.min.css",
"./css/bootstrap-reboot.css",
"./css/bootstrap-reboot.min.css",
"./css/bootstrap.min.css",
"./css/bootstrap.min.css.map",
"./css/calc.css",
"./css/ec.css",
"./css/guideline.css",
"./css/scale.css",
"./fa/css/font-awesome.min.css",
"./fa/fonts/FontAwesome.otf",
"./fa/fonts/fontawesome-webfont.eot",
"./fa/fonts/fontawesome-webfont.svg",
"./fa/fonts/fontawesome-webfont.ttf",
"./fa/fonts/fontawesome-webfont.woff",
"./fa/fonts/fontawesome-webfont.woff2",
"./favicon-16x16.png",
"./favicon-32x32.png",
"./favicon.ico",
"./favicon.png",
"./favicon_config.json",
"./go-guidelines_template.html",
"./go-guidelines_template.js",
"./go-scales_template.html",
"./guideline_acute_heart_failure_qs.html",
"./guideline_stroke-NICE.html",
"./guideline_stroke.html",
"./guidelines.html",
"./index.html",
"./index_simplePWA.html",
"./js/bootstrap.min.js",
"./js/guidelines/acute_heart_failure_qs.txt",
"./js/guidelines/guideline_acute_heart_failure_qs.js",
"./js/guidelines/guideline_stroke-NICE.js",
"./js/guidelines/guideline_stroke.js",
"./js/guidelines/stroke-NICE.txt",
"./js/guidelines/stroke.txt",
"./js/jquery-3.2.1.slim.min.js",
"./js/jspdf.min.js",
"./js/nav.js",
"./js/pdftest.html",
"./js/popper.min.js",
"./js/scale_functions.js",
"./js/scales/6-cit.js",
"./js/scales/ALONE.js",
"./js/scales/CGIS.js",
"./js/scales/GCS.js",
"./js/scales/MUST.js",
"./js/scales/NIHSS-objects-traced.png",
"./js/scales/NIHSS-scene.png",
"./js/scales/NIHSS-sentences.png",
"./js/scales/NIHSS-words.png",
"./js/scales/NIHSS.js",
"./js/scales/ROSIER.js",
"./js/scales/abcd2.js",
"./js/scales/amt.js",
"./js/scales/cha2ds2-vasc.js",
"./js/scales/curb-65.js",
"./js/scales/frax.js",
"./js/scales/gds.js",
"./js/scales/has-bled.js",
"./js/scales/mRS.js",
"./js/scales/prisma-7.js",
"./js/scales/qfracture.js",
"./js/scales/rockwood.js",
"./js/scales/wells.js",
"./logo.png",
"./main.js",
"./manifest.json",
"./maskable_icon.png",
"./mstile-144x144.png",
"./mstile-150x150.png",
"./mstile-310x150.png",
"./mstile-310x310.png",
"./mstile-70x70.png",
"./robots.txt",
"./safari-pinned-tab.svg",
"./scale_6-cit.html",
"./scale_ALONE.html",
"./scale_CGIS.html",
"./scale_GCS.html",
"./scale_MUST.html",
"./scale_NIHSS.html",
"./scale_ROSIER.html",
"./scale_abcd2.html",
"./scale_amt.html",
"./scale_cha2ds2-vasc.html",
"./scale_curb-65.html",
"./scale_frax.html",
"./scale_gds.html",
"./scale_has-bled.html",
"./scale_mRS.html",
"./scale_prisma-7.html",
"./scale_qfracture.html",
"./scale_rockwood.html",
"./scale_wells.html",
"./scales.html",
"./share.jpg",
"./sitemap.xml",
"./style.css",
//"./sw.js", // don't cache the serviceworker as that is just daft.


			]);
		})
	);
});

self.addEventListener("activate", event => {
	// Delete any non-current cache
	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

// Offline-first, cache-first strategy
// Kick off two asynchronous requests, one to the cache and one to the network
// If there's a cached version available, use it, but fetch an update for next time.
// Gets data on screen as quickly as possible, then updates once the network has returned the latest data. 
self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});
