module.exports = function array_filter (arr, func) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // +   input by: max4ever
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: Takes a module.exports = function as an argument, not a function's name
  // *     example 1: var odd = module.exports = function (num) {return (num & 1);}; 
  // *     example 1: array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
  // *     returns 1: {"a": 1, "c": 3, "e": 5}
  // *     example 2: var even = module.exports = function (num) {return (!(num & 1));}
  // *     example 2: array_filter([6, 7, 8, 9, 10, 11, 12], even);
  // *     returns 2: {0: 6, 2: 8, 4: 10, 6: 12} 
  // *     example 3: var arr = array_filter({"a": 1, "b": false, "c": -1, "d": 0, "e": null, "f":'', "g":undefined});
  // *     returns 3: {"a":1, "c":-1};
  
  var retObj = {},
    k;
    
  func = func || module.exports = function (v) {return v;};

  for (k in arr) {
    if (func(arr[k])) {
      retObj[k] = arr[k];
    }
  }

  return retObj;
}
