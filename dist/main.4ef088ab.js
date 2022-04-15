// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
/**
 * document.querySelector()
   文档对象模型 Ducument 引用的 querySelector() 方法返回文档中与指定选择器或者选择器组匹配的第一个 Elemet 对象，如果找不到匹配项，则返回null
 * Elemet是一个通用性非常强的基类，所有Ducument对象下的对象都继承自它，这个接口描述了所有相同种类的元素所普遍具有的方法和属性
 */

var string = "\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\u3002";
var n = 0; //demo.innerHTML = string.substring(0,n)

/**
 * element.innerHTML设置或获取HTML语法表示的元素的后代。
   向一个元素中插入一段 HTML
 * substring()方法
   返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
 */

var step = function step() {
  setTimeout(function () {
    n = n + 1;
    html.innerHTML = string.substring(0, n);

    if (n < string.length) {
      step();
    }
  }, 150);
}; // step()


var string1 = "/* \u4F60\u597D\uFF0C\u6211\u7684\u540D\u5B57\u662F\u5B59\u68A6\u73C2\n * \u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n * \u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u4E00\u4E0B\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n*/\n#div1{\n  border:1px solid black;\n  width:200px;\n  height:200px;\n}\n/* \u63A5\u4E0B\u6765\u628Adiv\u6F14\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.2);\n    border:none;\n}\n/* \u9634\u9633\u5F62\u6210\u516B\u5366\uFF0C\u7EA7\u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* \u5F00\u59CB\u53D8\u9634\u9633 */\n#div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background:#000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background:#fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n";
/* 
 * x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 
 * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
*/

var string2 = "";
var m = 0;

var step1 = function step1() {
  setTimeout(function () {
    if (string1[m] === "\n") {
      string2 += "<br>";
    } else if (string1[m] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[m];
    }

    html.innerHTML = string2;
    style.innerHTML = string1.substring(0, m);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);

    if (m < string1.length - 1) {
      m = m + 1;
      step1();
    }
  }, 10);
};

step1();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.4ef088ab.js.map