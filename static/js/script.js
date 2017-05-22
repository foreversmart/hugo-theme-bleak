jQuery(function(a){function b(a){m?(a.removeClass("active"),k.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),k.removeClass("menu-initial")},300),m=!1):(k.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){k.addClass("menu-active"),a.addClass("active")},1),m=!0)}function c(){a(".menu-list-item a").each(function(){var b=a(this);b.removeClass("current"),b.attr("href")==window.location.href&&b.addClass("current")})}function d(){a(".post-list .post .post-image img").each(function(){var b=a(this);b.load(function(){b.parents(".post-image").css({height:"0","padding-bottom":100/b.width()*b.height()+"%"})})});var b=a(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){b.masonry("layout")})}function e(){a("#wrapper").fitVids()}function f(){if("localhost"!=window.location.hostname)if("undefined"!=typeof disqus_shortname&&document.getElementById("disqus_thread")){if(window.DISQUS){a(".post-comments").show();var b=location.href;return"/"!==b.slice(-1)&&(b+="/"),DISQUS.reset({reload:!0,config:function(){this.page.identifier=b,this.page.url=b}})}a.ajax({type:"GET",url:"//"+disqus_shortname+".disqus.com/embed.js",dataType:"script",cache:!0}).done(function(){f()})}else a(".post-comments").hide()}function g(){a("[data-gist-id]").gist()}function h(){var a=Prism.highlight("var a int = 10",Prism.languages.go);console.log(a),d(),i(),e(),f(),g(),c(),j()}function i(){a('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var b=a(this);b.hasClass("rss")||(b.addClass("js-ajax-link"),b.attr("href").indexOf("page")>-1&&b.addClass("js-archive-index"),b.attr("href")==window.location.origin&&b.addClass("js-show-index"),b.attr("href").indexOf("tag")>-1&&b.addClass("js-tag-index"),b.attr("href").indexOf("author")>-1&&b.addClass("js-author-index"))})}function j(){a(".blured-image").each(function(){var b=a(this),c=new Image;c.onload=function(){b.css("background-image","url("+c.src+")").addClass("blurUp").removeClass("filter-blur-15")},c.src=b.data("src")})}var k=a("html"),l=a("body");l.on("click",'[data-action="menu"], [data-action="toc"]',function(){a(this).data("action");b(a('[data-target="'+a(this).data("target")+'"]').not("[data-action]"))});var m=!1;l.on("click","#menu a",function(){if(k.hasClass("menu-active")){b(a('[data-target="menu"]').not("[data-action]"))}}),l.on("click","#tocMenu a",function(){if(k.hasClass("menu-active")){b(a('[data-target="toc"]').not("[data-action]"))}}),l.on("click",".overlay",function(){if(k.hasClass("menu-active")){b(a('[data-target="menu"].active,[data-target="toc"].active').not("[data-action]"))}}),c(),d(),e(),f(),g(),h(),i(),j();var n=window.History,o=!1,p=a("#ajax-container");if(a(document).ready(function(){var b=document.createElement("link");b.href=config.baseUrl+"css/main.css",b.rel="stylesheet",b.type="text/css",b.media="bogus",b.onload=function(){b.media="all"},document.getElementsByTagName("head")[0].appendChild(b),a("#loader-wrapper").fadeOut(300),a("#wrapper").fadeIn(800)}),!n.enabled)return!1;n.Adapter.bind(window,"statechange",function(){k.addClass("loading");var b=n.getState();a.get(b.url,function(b){var c=a(b),d=a("#ajax-container",c).contents(),e=b.match(/<title>(.*?)<\/title>/)[1];p.fadeOut(500,function(){k.hasClass("push-next")&&(k.removeClass("push-next"),k.addClass("pushed-next")),k.hasClass("push-prev")&&(k.removeClass("push-prev"),k.addClass("pushed-prev")),document.title=a("<textarea/>").html(e).text(),p.html(d),l.removeClass(),l.addClass(a("#body-class").attr("class")),NProgress.done(),p.fadeIn(500),a(document).scrollTop(0),setTimeout(function(){k.removeClass("loading")},50),h(),o=!1})})}),a("body").on("click",".js-ajax-link",function(b){b.preventDefault();var c=a(this);if(c.hasClass("post-nav-item")||c.hasClass("pagination-item")?((c.hasClass("post-nav-next")||c.hasClass("pagination-next"))&&(k.removeClass("pushed-prev"),k.addClass("push-next")),(c.hasClass("post-nav-prev")||c.hasClass("pagination-prev"))&&(k.removeClass("pushed-next"),k.addClass("push-prev"))):(k.removeClass("pushed-next"),k.removeClass("pushed-prev")),!1===o){var d=n.getState(),e=a(this).prop("href"),f=a(this).attr("title")||null;e.replace(/\/$/,"")!==d.url.replace(/\/$/,"")&&(o=!0,k.addClass("loading"),NProgress.start(),n.pushState({},f,e))}}),a("body").on("click","#post-index .post .js-ajax-link",function(){var b=a(this).parents(".post");b.addClass("initial"),setTimeout(function(){b.addClass("active")},1)})}),function(a){"use strict";function b(a){var b,c,d=[];if("number"==typeof a)d.push(a);else{c=a.split(",");for(var e=0;e<c.length;e++)if(b=c[e].split("-"),2===b.length)for(var f=parseInt(b[0],10);f<=b[1];f++)d.push(f);else 1===b.length&&d.push(parseInt(b[0],10))}return d}var c={};a.fn.gist=function(d){return this.each(function(){function e(c){var d,e,f,g,h;c&&c.div?(c.stylesheet&&(0===c.stylesheet.indexOf("<link")?c.stylesheet=c.stylesheet.replace(/\\/g,"").match(/href=\"([^\s]*)\"/)[1]:0!==c.stylesheet.indexOf("http")&&(0!==c.stylesheet.indexOf("/")&&(c.stylesheet="/"+c.stylesheet),c.stylesheet="https://gist.github.com"+c.stylesheet)),c.stylesheet&&0===a('link[href="'+c.stylesheet+'"]').length&&(d=document.createElement("link"),e=document.getElementsByTagName("head")[0],d.type="text/css",d.rel="stylesheet",d.href=c.stylesheet,e.insertBefore(d,e.firstChild)),h=a(c.div),h.removeAttr("id"),s.html("").append(h),m&&(g=b(m),h.find("td.line-data").css({width:"100%"}),h.find(".js-file-line").each(function(b){-1!==a.inArray(b+1,g)&&a(this).css({"background-color":"rgb(255, 255, 204)"})})),k&&(f=b(k),h.find(".js-file-line").each(function(b){-1===a.inArray(b+1,f)&&a(this).parent().remove()})),n&&(h.find(".gist-meta").remove(),h.find(".gist-data").css("border-bottom","0px"),h.find(".gist-file").css("border-bottom","1px solid #ddd")),o&&h.find(".js-line-number").remove()):s.html("Failed loading gist "+i)}function f(a){s.html("Failed loading gist "+i+": "+a)}function g(){"function"==typeof d&&d()}var h,i,j,k,l,m,n,o,p,q,r,s=a(this),t={};return s.css("display","block"),h=s.data("gist-id")||"",j=s.data("gist-file"),n=!0===s.data("gist-hide-footer"),o=!0===s.data("gist-hide-line-numbers"),k=s.data("gist-line"),m=s.data("gist-highlight-line"),q=!0===s.data("gist-show-spinner"),p=!q&&(void 0===s.data("gist-show-loading")||s.data("gist-show-loading")),j&&(t.file=j),!!h&&(i="https://gist.github.com/"+h+".json",r=!0===s.data("gist-enable-cache")||c[i],l="Loading gist "+i+(t.file?", file: "+t.file:"")+"...",p&&s.html(l),q&&s.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="'+l+'" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'),void a.ajax({url:i,data:t,dataType:"jsonp",timeout:2e4,beforeSend:function(){if(r){if(c[i])return c[i].then(function(a){e(a),g()},function(a){f(a)}),!1;c[i]=a.Deferred()}},success:function(a){r&&c[i]&&c[i].resolve(a),e(a)},error:function(a,b){f(b)},complete:function(){g()}}))})},a(function(){a("[data-gist-id]").gist()})}(jQuery);