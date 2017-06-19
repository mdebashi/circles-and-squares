(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

document.addEventListener("DOMContentLoaded", function () {
  var objectsArray = ['red', 'green', 'blue', 'orange', 'yellow'];
  var cTarget = document.querySelector('#circles');
  var sTarget = document.querySelector('#squares');
  // Redndering Squares and Circles
  var ui = {
    rednderObjects: function rednderObjects() {
      var elements = objectsArray.map(function (obj) {
        var colour = obj;
        console.log(colour);
        return objectTemplate(colour);
      });

      cTarget.innerHTML = elements.join("");
      sTarget.innerHTML = elements.join("");
    }
  };
  function objectTemplate(colour) {
    var template = '<div id="' + colour + '" class="object">' + colour + '</div>';
    return template;
  };
  ui.rednderObjects();

  //The behaviour when clicking on objects
  for (var i = 0, size = cTarget.children.length; i < size; i++) {
    (function (index) {
      //hide circles show squares
      cTarget.children[i].onclick = function () {
        this.style.visibility = "hidden";
        sTarget.children[index].style.visibility = "visible";
        console.log(index);
      };
    })(i);
  }
  for (var i = 0, size = cTarget.children.length; i < size; i++) {
    (function (index) {
      //hide square show circle as first object
      sTarget.children[i].onclick = function () {
        cTarget.removeChild(cTarget.querySelector('#' + this.id));
        this.style.visibility = "hidden";
        cTarget.children[0].insertAdjacentHTML('beforebegin', objectTemplate(this.id));
      };
    })(i);
  }
});

},{}]},{},[1]);
