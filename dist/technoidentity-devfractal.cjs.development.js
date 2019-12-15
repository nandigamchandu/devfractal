'use strict';

var devfractalApi = require('devfractal-api');
var devfractalUiApi = require('devfractal-ui-api');
var devfractalCrud = require('devfractal-crud');
var devfractalForms = require('devfractal-forms');
var devfractalRouter = require('devfractal-router');
var devfractalSimple = require('devfractal-simple');
var devfractalUi = require('devfractal-ui');
var devfractalUiCore = require('devfractal-ui-core');



Object.keys(devfractalApi).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalApi[k];
		}
	});
});
Object.keys(devfractalUiApi).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalUiApi[k];
		}
	});
});
Object.keys(devfractalCrud).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalCrud[k];
		}
	});
});
Object.keys(devfractalForms).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalForms[k];
		}
	});
});
Object.keys(devfractalRouter).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalRouter[k];
		}
	});
});
Object.keys(devfractalSimple).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalSimple[k];
		}
	});
});
Object.keys(devfractalUi).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalUi[k];
		}
	});
});
Object.keys(devfractalUiCore).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return devfractalUiCore[k];
		}
	});
});
//# sourceMappingURL=technoidentity-devfractal.cjs.development.js.map
