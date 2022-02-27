module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{webmanifest,js}'
	],
	swDest: 'public/service-worker.js',
	swSrc: 'public-dist/service-worker.js'
};
