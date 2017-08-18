"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}(),animationEnd="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",Random=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"generateBinary",value:function(){return Math.random()>.5?1:0}},{key:"generate",value:function(n,e){return Math.floor(Math.random()*e+n)}}]),n}(),Binary=function(){function n(){_classCallCheck(this,n),this.value=Random.generateBinary()}return _createClass(n,[{key:"animate",value:function(n,e,t){var a=document.createElement("div");return $(a).css("font-size",n+"px"),$(a).css("top",t*(n/2)),$(a).css("left",e+"px"),$(a).text(this.value),$(a).addClass("binary"),$(a).hide(),$("body").append(a),$(a).show().addClass("animated fadeIn").on(animationEnd,this.fadeInEnd),$(a).offset().top}},{key:"fadeInEnd",value:function(n){var e=$(n.currentTarget);e.removeClass("animated fadeIn"),e.addClass("animated fadeOut").on(animationEnd,function(){e.remove()})}}]),n}(),BinaryLine=function(){function n(e,t,a){_classCallCheck(this,n),this.leftOffset=e,this.textSize=t,this.documentSize=a}return _createClass(n,[{key:"generate",value:function(){var n=1,e=(this.length,this.textSize),t=this.documentSize,a=0,i=this.leftOffset,r=setInterval(function(){if(a<t){var o=new Binary;a=o.animate(e,i,n),n++}else clearInterval(r)},80)}}]),n}(),BinaryAnimation=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"start",value:function(){var n=[];setInterval(function(){n.push(new BinaryLine(Random.generate(0,$(document).width()),Random.generate(.008*$(document).width(),.012*$(document).width()),$(document).height()).generate()),console.log("currently 0objects alive.")},2e3),setInterval(function(){for($(".binary").remove(),console.log("destroying "+n.length+" objects");n.length>0;)n.pop()},3e4)}}]),n}();(new BinaryAnimation).start();