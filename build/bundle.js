/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _math = __webpack_require__(1);

var _math2 = _interopRequireDefault(_math);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _math2.default)(3, 5);
console.log(total);
document.write(total);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var image = document.createElement('img');
image.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXFRUVFxUVFRUVFRUVFRUWFxUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QALxAAAgEDAwMBBwQDAQAAAAAAAAECAxEhMUFRBBJhEwUicYGRofAUscHRMuHxYv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAApEQACAgIDAAICAgEFAQAAAAAAAQIRAyESMUETUQQiMmEUI0KBobFx/9oADAMBAAIRAxEAPwD46hTnNXbgl/5fdL6LQ+nTkz6pOUt6L0/Z8bPDvZrue11twMoX2Msaf/08J00saO+beCXGNUcvFVRSlJ6Xv5KQbWuykG+halVafwwSyLoEpropR5d7fMeD9Hh9svLqPDf2KvN9Iu8q+hXO5Nyb2zcrHVT3Qc6iOpfoT7m9ER5Ni230cqLNwZvjYqsnz+wnTBpdEqre4HfTI5G12RUbuwK8I1bot+nluiqxSraKfFJLaFjS4Asb6QqhvQyososbDwbNCoo6PiSLLGkhYq24EqYEq7OeAO0Z2KmLYtlKUnwPCTeikG2Uc0tcFHJLsZyS7JuuuPqI8y8F+ReFKUnt9BoSfg8W/CqqfIp8ifZRSXoLmsHRpir4Kpt6OlRvRKbJyk+ibNtOp7qWHgPONFozSik9nm1qFn42OWlZxuG9FKVC9kssfrS7KLGbGqdNe8s7RWr8vx5GuMe0V5wgqSJRrykswhZ+LO3GoqlZNZXtOjW/Y8e2/e4rb3b340saVJaDPEoq0Y6vs3/1GXm7Vvs0Sab2zlcG3sw9R0UtOx25TjknKPlEpx8og60o4bt4dv7F+StWJ8rWrPKlqcT7OF9lo9XNKynJfBsZZJfY6ySSqwRru+c+dxo5PsMcn2P6z+AzyN9D82Vp1mnyVjkaZSORplanVLBSWdFJZ0KpXJOfIyalsa25qodr1AhXzoL8mxY5Nml11bf4FfkR1PKqJOV9xXKyTfL0newnRO2ma6PTd8fH3udWPF8kToji+SP9EZVnHCil5td/UXm46SIvI4aSOjVk75fywMpzfbApyfo0azjox1Nx6YVkcemalVT/AMo55R0KSf8AJHRzT/kv+UTlC+jv9n9BWr6diON/xd/+kKiJSJSJykSb8JyfgnexbYvJ+AdVoDnJaBzktC92RbbBeykBolIstSqWyVi6KwnWy3ror8sfSnyxOlWj5QHkj4F5I0Gn1Cxk0cyDHKqoukp7/QalP06Eoz9IfpY3ePuyPwQTeiHwQt6K9PRd97cO7RlGuimLA3vwp7PnOL13eGk1a5sXLts2DHK9sStF3u3e+b/mwzQMmNrdiOvjXOhNvxEG9npdPW7oRze2MvGMDRV7Z149xTIVZWeGWexpRT7PF9o9ZUcnHusuFjZann5pS5NHj/kSkpuPh59iBy0iaZJMQNhg0MkNQUh0hkilDQY0XQYizYsgPZ0ZCJmTKqvyUU/sqsrrYZSvlGb+jSd7QaVfkMZ72GGWtM0OaL2i7mmG25qTGS9N/SSSivqduClE7MMkomTsbbXkhW2jk4ttoSSsaq6Ef69AeTdgezTlLOS+0tl9pbFSMqYqVhW/dxg3d2bu+Rmmc8iEhLi2LZ0o3+JmrM48iSRNEiidii0UToZ1PBnKgudIZNDJodNHSZm1RnQsEr5JUgRq9jKfbyblxH5cWa+hr9z7Xxf/AKWx5XJ0zq/GyqUuLPQjU7Vcpy4npKfCNnn0KzSvHfZnNGckv1ODFkaVxG9Z7r6G+VrtDc36jFXTu7bkZSdnFki7dGv2Y5OLS2d9ef8AhbDJtHT+HycGitRsq5MtI8X2n/n8Uv6/g4M7/c8b8zWVmO5CzjLRgUSLKIZRDRnECCYNzWazgWbo4DdmAYxzMEVSsCyfJoDlcFmcrLxm7FlJ0VUnWx4yGQ6kelQWFbhHoY1pUd+PpUTrSakyc7Umic5SUmiai9bASl2TSl2FJ8DbGpmqjPZo6IS8Z0QlqmB0t1oDhu0Dhu0bOl6fujJco6MePlFpnTixKUWn6YXQtqc3x1pnI8daY3oLgb409h+JEXBX2RJxSkTcUmTqwTyRnV2JOCe0SayJ6Tp3QFLVAUr0BO9C92wvKtIS2tCyb3JybvZt+ipg5AvZTubQ1uiltobp6rjJNGjNxdjYcjhJNGyPVtu3OPqU+VydHavyJSfF+6LU+l4kx1ir0tDB9M0T6TH+X2DLF/Z0P8e12JT6FZ95+Mf7EWJfYsfxF9gVJ0bzWdE1hfMyj8e0L8X+Nc1/yLX65Sz2/f8A0Z5r8En+SpbSPK619zva2LcnNkfJ2eX+T+8uVGR0yTicjgWUCqRXjQJI0tGfRJp3JkmnYZUwuJnBjOk1qHi12Nwa7ElgUVto5GSMhZAYrsaNO46hYVCwumtjcV4FwXhajT2+pWEfCsIK6HnS4HcH4NKH0ej7LqpXi9Vp8Dv/ABJpfqzt/Eml+rG6uHv/ACTGyxuY+Zf6h0YXGUbMo2M6b4YXD+huDfhSFF62KRxvseON90UcLatBca7KONdivqbYjo0l/YjyVqPQjzJaj0TqVdgSyXoSWRPRFzRJyRJyQrhuJJeg43sjUOeYktdiU3fXUEd9kou3shVWWSmqbJS7BFCUaIGK7M+jqcQxBGOx5BbHaE7GmLQvFpmvp376xpf9i2P+SOrE/wDUR6EbnQ2ejGy8VgPaOmK0MgDonXheLXKYslaaJZYcoNHiwdjjR4sW4jTSkZ7GklNGb0ydHN8ZeWC7aXRSWmLPTQVgfXRHtuTI1aBCNtchWgRil2M3cN32NdsDQQNC2AJQLBr7BXpVTSQ/JJFFJJAuYCf0VorLKwW7KQu7LdtylWVqxqWqeg8P5WGOpJm/pFe9zsw/tdnbhXK7Nvo4vc6+GtHX8euwKi3oBxbBwYVF8Bp0NToy9RNPCOfI1LRy5ZKWkZ2lZkaSTINKmTUbq+glWrEptWRinuSSZJJ+l6LSWo6qi2NpISrUjZ4Fk40CeSNGNyOe0cjlsaok7fdDSp0GVPYnYJxF4iTjwTcX4LJfQ1N4fIg8HpoHqA5B+QrQnyPFlMUrezTGSjK+q/gfkouzpi1CdnpwS20OjR6sUq0UG8KaSEYgliVKiirv/oHKhZzUVbPIcODko8dw+hHhgJu09FPTTyOoL0fjF7JVYW8kmhMkHEEGFNgi7FnHOBWJKNvQHEKA4i2MLR0gpgkhbhsSwSMwNCMShGUgisUh4oeE8odOmOpbNHey3JluTKwwn8CsdRbZRfxZs9mVMNtX2t/J1fiy1bOr8SerZ6Pqx5t4OznE7vkgMupW2hlNB+ReEZVr3S08CvJfXROWS+uiLhcTimrJcUzDV1fCOOe2cc9sm5eSbafol3snWk00r4Jzk+SRPI2pJGKUndo5W3dHK29ol6jJcmS5Mb1Lj87Q3KyvT1b3W4+Kd6KYp3oMqjtbcLm6oLm6oWM+ROfjFUvsrFpDpJFU0tk2rkmgOnseDXIE0Ujx+ykagVNWUUvDb0/X9qs1dfdF45+Kpnbh/LeNU1o106ylo7/nA8cifR2RyxyLQK1dRXngzyJAyZVBf2YZTcndkW3J7OGUnJ2xYvIosXvRzhfLBX2ZxvbJqNzKRLg2CrLArZsktEkwWS8FlADQrixU+RUwJ/Ye5DpgtHSaDZm0ICyY0UMNFWFwQUkZxTHpUs6l4Y7NGFs10qKR1QxxR0wxpFFTKKGynEMqeDSjoLjopQi1hIfGmtIfGmtIdw5KOP2O4/ZCpUaVsrY55yaVIjKTSonCTW5JNxEi3ErDqnpgrHM3oos76I1ZZ1JzkmyM5JsWjHBNXQIWCpC7sCSs0o2zHWjn7nPNbOSapkmrk2rJtWDssbjQONAgveQI6kjR1IetLIcj2NN7J3EFsaI0UZFKdR2aNydNMrCTponqyIq2zRRQ0Ns6oKzT2nQ1aL0RzF3X1RztOLsTcXaElWk92wOTJvJJvbGXUNBU2grNJFFWDzK/La2WUHuUr7LKL7YsmZiSezA5nPZw89FFIeMh+Q0WOgoSbElpiSasSUjWJKQO4NgsaLMMmUTHsdPY8EUgrGWx4ovEKRuoK6O7FTWzqxq0Ug0UTRRNHdQrK3zBlVKgZFSotTkuUVhKNdlotUJUktxZSSFlJLsyXu8nK3b2ct29j+mhnFMfgmT7O1eSaioInx4IzxIIihqcuAxY0GNKfjQzkFyolWhdE5q0TyRuJBNLVXJppaZFNLTBUa2ZpOPjBKvCMrfnJJ14SdExEJujlINmsaLYU2hk2M3uCf2PfoCLDf0a6DXJbGt2dWOS9NE5KxdtUdEpKjJUnwzll3o5ZSp6GjUW6+wqkvSilFdo5zj+IPKJnKAZ1MWQzkaU01SFhVwKpCxnoSbdzWTm3YIW3QFXpo16Lcwt70Uix0x0yVSVwSdkpuxBUIFDGHgMh4jBG6K06ngvCQ0ZlqcjoiysZWaaUsWOjG9UWi9UUcrFHKh7oHepWvjyK5KembkpdjOMVlsLjCO2wvittkp1mtCc8jX8Sbm10ZZ9XJ7Z+Byv8mbdHPLNNiTrz1cn8Liyy5PWLLJP1mWXVyOZ552c7zysePUDrL9jLMPQr2eo0MtPsbHkphn1S0uaWdUNLMqolGq7K6EjkdbRJTdbOnJbhk4/7jSa9JzrpaZJyyxj0JLIl0S9W+xP5Ldk+d9laUb4Q8d6Kwjy0hqnTtDSxtBnhcSTVhNok7RVaFPCiIy1OaXYj0x6dZrQaORroeORrop+ra4G+dop/kSSJRq3ZNSvsnGdvY05AZSUgpgCnaGphQ0NjJZGQaSZ0mazNi1DMSQjmLyYnLQkZPkCsVNjqQ6kNYGEDChkYpFlEx0ykclErHTsr2FlFD8QoZBKRdii0OtBcjOVhuzkZMx0pGckZsPdZDW4xNfFGaTbZyu5M5222QmmSafRKSZBRJKN9kasPZYzjQVGnYexA4pjcYsvGCRVQiiyjFEK9QnOZDJLezPUnc55SciMpOQiQgqVjtj2N4V6edpJlIOpJlMc6kmb77s62/Wd13tkZxQmiMooRM1k0xKz8HNkZptEVKxO6JcqFbuI3YLsaKCh0q2dKRnIDY0QoZN9jUpWYU6HhJplKk8jctjzlTKQqrgZSspHIq6MqqXJKSZyqdlO4ex+SZNsURg7jWDkOpDWOmWvgqmV8OsMgNWgplExbNVNnRE6YsoVRTsaw9GoSRJ02K6OaC1oNCzZOToVnTjjUzTo0o6MrI7Rz9HTM6aBIW24K9F/sa3yB32NWhPWSE+WMehecUSlXZJ5WI8jM9SV8kW7dshN3sMVdDJWjJWg9oKoaqBYwCvSvNmimJ7pj4mk6ZvlJWOxtUdrkqINkWRbpCOXvLwZPaRNtckvolVnkhll+wspWyViAlBiEdBk7GNJ0UsnHyPScRqThoiqnJNMksj9OlVXA3IzyLxAqVbpfQVysWeRySOjVaApNBU2hY4MtAWgpmCmFyYbYW2FSuFOzXYO8DYOVMpGsyibHWV2a4VE0dUJckdKmmhoorFGSQ/cM3Q9/RpUrJF06R0KVICYbFsUSwBk8Bk6QW6QPIj+zL7DPQZ9Bl0QkyLIM5JDRp9mpEqjSWCM5JLRKdJaMkp8nLKRzt/ZNTRLkhOSCmEKYkwMWTKU8IpFtIaFpDXG0xtMW4tgujqVS0kwQnUrBCdSs2Ka/NjpUlZ1ckCb+2RmwSezP5Ip0rIf2SlMhKQrlQYyFsaLRymCwKROpLIGxJytmnp5pJ3KwlSdl8UkouyNWydhXSZGdJ0RckI2iLkgRYDRasp2BopxsnGrfUTkTjkvstCViiLRdDMI7pglJJGtJCykktEIvcRP0gn6XiWRVFISsUjLiyilx2boP7nXGV9HXHqxm0PaHtC99hOVCW0UVVMqsqaoopJoa5rQ16HcrIo5JIa0kZ1Vd8nN8jvZFTdmnDOpU0X00Sk0Tk4om2rEdydt9CtaIVv8WQy6iyM0uJkmsLHzON3RzS/j0RjEWKJJfQ0VY1NBSoa49jXYe4aw2L3C2LZ0mZsLYqBYiNJZPR01o4ZNMAlSRPJLwWTJtEqEasR4FaEbo7uQDckTldAdom7RSlVstAxkUhkpEpS5A2Sk/sRiiXZSnAZIpGBzbWDbRnyjoerRsGUKGniS2iUJ2ETJxk10WUillk2TvliWTb2NYI1UPFlExkx1IbkOnZeE9i0J1ospNaKwLIpEomMOLewlpG6DFtmjJt7NuyqrXZb5eTHU7ZSKXwKpLtjqvRlUWgykukFTXR1aKsDIo0GaVEoK5KO3oRbM/U5aSIZnb4o5stuVIEoYsI1qh3FNUYpRszmrejilGnoPds/qNfjNy8YGwM1gYGZnAMMMENOG5lEaEPSiY10UAgADJGC16TlYDSJuibFJMRoUQnJCtCNHU0BI0VRzAI9sMYhSGSLUlkpEvj7GlTbM4jSg30WqNFJUXlVGOSVyDqzjlxUgylYLYXKidxSZaGUOtovHaOlADQHA6mmGN2aKdlWUKs0U53OiE7RaErLRK2WjsMo3FasZqxG7E7oS6F7s62MnvsRvZVu2h0XXQ710NS5Gx62GC9GqS5NlY7f2T9RrTQnGbiI5uPRmp1rtt7nOslu2c8Mlu2GtWS/o08iSGyZEjI5Nsht7OVybY1x7foezlE1fRqJ3JPTEumUgxkykWPLA/Q8tBcwtm5HXBYUx0YdUEwxFoBBquxZCMVk5MVk2xLgEtAkzMVnQQEKisIjIdFYxKJItCrLIc6kjHUnyQkzjlO9sgyZz7ZT02NTK8HQFTfBqYOEitKDWqHjorCLT2XUeSlfZdR+zuwHGg8WgqATcbDBNMMbTDGLTNEZ4KrIdEXSC5j/IqM5fR04ZxnyaUW3+oHF3oT9M2b/HkyfxSfY8aNtx44q9GWOvRZTezA3LxiuUv9rJOq1r9RHJrsn8jX8hakuN8f2SnLWgTk+kCpWSXngWU6NPKoqjH3tkLbOTk27C5sbkzOTDCrcKm2wxm2N3sPNjcmCLFXYEysIXeB+Oy0Y29D+i2wpMb4pNjyoeRnGyjw/2NSprcMYr0aEFexla6Vg6boKpuqJ9VKzshcmnQmaSTpEoTJpkoyXpKUxbJOaEbuDsRuzu0NaBQ0IX0QUr6Co30NGNnZ7AqmLVOilxhjlUXzDyQ6kkDvewOT8CpyXRGcRJIjJMNOFtdTJDwhW2USCWSGigoK7KIcqh0rjIerG7AjcaA4AoHAKhgKQVHQJMAJOhVMyE5hhWaY8cji9GWRplJ1WVeVjSmxO5vcXk36LcmNFDrvYUhKkktxZySEk0jPKfBzSl9HO5/REic5yMEg2JYljwGQ8f7KqN9Buyqjy0j0KHQqy5OqOHR34/xFxX2aqNFbL5jxijrx4o1pCzpAcQSxmd0ydHO8exlG6wMkFRtWjqdJt4DGLbFUHKVoFTpb3u/oCULIzhbZkqxUNM/HQhKl0c8lxQvTwjLDw+L4+QkaZOKT0aI9NHj7sfig0ilPpo8fdjJIdRRpXTRT91Y0118lK3oeqeilb2V6iurdyXyfxGeHlv0aWHnv08qNNrXBBJo50midSjwK4iuJJ4wL0DaNSjZsrVM6ONTJzfgVjSa7BcUFhMYpFjplUysB0ViN3Bsbkhwj9gaACickZk2tisUR6EYBXsKnyNZlP7Kwjui0UOortArPBsmkLN0jI5HNZzOTYkkCXQjDFsRAVhx8A6M4/YsqO4HD03xPsaHTt648bhUL7KRwt7Ztp07YS/PJZLyjthClSRqgmlwXV1s6oqSWy1OFs6r7hSrZeEWla6HcQtDuNkakBGiM4kUrMTpka4s222OrpHVKkjP1LgsXd93x4OeTXRwyUU3bPKrRV7Xx5OWVWcOZK6TOXSvWMl+eQcX4Qcfo1UU3hrP7+UOtjpWa6XTvLs1bf46FFFlIxZr6bpG3faxWEG2VhjbZ6NCik9NjojFI6IxSZj9odGpK+j/PqSyQTJZIJniVemktV89vqc7gzl+Ni+ijcEdCxpInUktEJJrpEnVuiVTgWX0CWtCoUAbmNpHKfBrMp/ReJRI6I2Vgh0ViiiQStHN4DdAdJaItikG9k5C9E32dEKjYUF0xuAriBSsbkC6G7GzW2PwbBZgBTEqUr5FlG9iTxctk0iaIp+BUbhqx0r8NfSUcZ3dvtcrCOtnXgxa36zXGKjhq/lalUq0zsjFQ/V7/spTgpYTTfG40Un0VhGM9RabGq9M9/sGUH6NPA7/Yp09LbbkaESmLHWjRV6a2hSWOui88FK4mWaJM5pGf08r4r9yVbOVxpl5rhq61KSf0NJ30Zq3TvjwTlEjkiefV6V3x9LHNKG9HmTVydGrpukcM3s/mFRoCjRrpVnurq+u46GR6sIRqRXbfD95HQv2VI6VUo6L9PBJ4+BWHZWC3opVVtyjHZnvcRbEWyNWmsrnFgtI1I8GtCza4OR6ZJ9mJ4unrf9jm60cyaQjkLYGzkYysKgw0zcWx1AZRHUaLQeCiZeL0UUrGsopUCpUem5mxZTa0JG7YErEVthmh6DLoKjdDUmhX0dGDMhbQ/aF/QxKdOxNx9BxLqGlh6+jpUbqhPQd8t/UXi7E+F3tjungLWh/jSVGZxyS9OZxV2BNmMmz0fZyvb5v9kXxbPQ/EV/9nqfp1az+f5udPBenqfBGqYI+zI6r7f0b4F2jL8CD/aJ0qU1umvOpuMkZ48sdXYIzV7PD86fJmTV0xVNXxlp/wBl6cXpsVin0XgpdeHfpl8zfGH4VYF0qScnfCx8WLLHSOT8jFxRkVCKzn+CKgjmhGPTNPqq2mBWqRy5P1TMNSS8ZJKjhVCqWxgBj5RrRrNXTzlHTG6f8eR434UjdaPTpV1JXtnf4nSmmjpi00RbSeutxReiDTX/AFGSaF2jLXrv5k5TEczzuo6ZTd23chKCk7JSSbs//9k=';
document.body.appendChild(image);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);