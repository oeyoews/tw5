//module.exports = {
	//globDirectory: 'public/',
	//globPatterns: [
		//'**/*.html'
	//],
	//swDest: 'public/sw.js',
	//ignoreURLParametersMatching: [
		///^utm_/,
		///^fbclid$/
	//]
//};
module.exports = {
  "globDirectory": "public/",
  "maximumFileSizeToCacheInBytes": 1024 * 1024 * 256,
  "globPatterns": [
    "**/*.{ico,html,js,json,png}"
  ],
  "swDest": "public/sw.js",
  "swSrc": "scripts/sw.js"
};
