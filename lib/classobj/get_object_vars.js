module.exports = function get_object_vars (obj) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: module.exports = function Myclass () {this.privMethod = function (){}}
  // *     example 1: Myclass.classMethod = module.exports = function () {}
  // *     example 1: Myclass.prototype.myfunc1 = module.exports = function () {return(true);};
  // *     example 1: Myclass.prototype.myfunc2 = module.exports = function () {return(true);}
  // *     example 1: get_object_vars('MyClass')
  // *     returns 1: {}
  var retArr = {},
    prop = '';

  for (prop in obj) {
    if (typeof obj[prop] !== 'function' && prop !== 'prototype') {
      retArr[prop] = obj[prop];
    }
  }
  for (prop in obj.prototype) {
    if (typeof obj.prototype[prop] !== 'function') {
      retArr[prop] = obj.prototype[prop];
    }
  }

  return retArr;
}
