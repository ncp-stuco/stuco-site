!function(o){images=[];var i=0;o.fn.Chocolat=function(n){function t(e){return n.currentImage=e.data.i,n.setIndex=e.data.id,n.setTitle=e.data.nom,n.lastImage=images[n.setIndex].length-1,r(),!1}function a(){I(),n.container.append('<div id="Choco_overlay"></div><div id="Choco_content"><div id="Choco_close"></div><div id="Choco_loading"></div><div id="Choco_container_photo"><img id="Choco_bigImage" src="" /></div><div id="Choco_container_description"><span id="Choco_container_title"></span><span id="Choco_container_via"></span></div><div id="Choco_left_arrow" class="Choco_arrows"></div><div id="Choco_right_arrow" class="Choco_arrows"></div></div>'),o("#Choco_left_arrow").css("background-image","url("+n.leftImg+")"),o("#Choco_right_arrow").css("background-image","url("+n.rightImg+")"),o("#Choco_close").css("background-image","url("+n.closeImg+")"),o("#Choco_loading").css("background-image","url("+n.loadingImg+")"),"body"!==n.container.get(0).nodeName.toLowerCase()&&(n.container.css({position:"relative",overflow:"hidden","line-height":"normal"}),o("#Choco_content").css("position","relative"),o("#Choco_overlay").css("position","absolute")),o(document).unbind("keydown").bind("keydown",function(e){switch(e.keyCode){case 37:d(-1);break;case 39:d(1);break;case 27:f()}}),n.vache&&o("#Choco_overlay").click(function(){return f(),!1}),o("#Choco_left_arrow").unbind().bind("click",function(){return d(-1),!1}),o("#Choco_right_arrow").unbind().bind("click",function(){return d(1),!1}),o("#Choco_close").unbind().bind("click",function(){return f(),!1}),o(window).resize(function(){c(n.currentImage,!0)})}function r(){a(),c(n.currentImage,!1),o("#Choco_overlay").css({"background-color":n.overlayColor,opacity:n.overlayOpacity}).fadeIn(n.fadeInOverlayduration),o("#Choco_content").fadeIn(n.fadeInImageduration,function(){})}function c(e,i){n.currentImage=e,o("#Choco_loading").fadeIn(n.fadeInImageduration);var t=new Image;t.onload=function(){o("#Choco_bigImage").attr("src",images[n.setIndex][n.currentImage].adress);var e=m(t.height,t.width);s(e.hauteur,e.largeur,i),o("#Choco_loading").stop().fadeOut(n.fadeOutImageduration)},t.src=images[n.setIndex][n.currentImage].adress,h(),l()}function d(e){if(!n.linkImages||0==n.currentImage&&-1==e||n.currentImage==n.lastImage&&1==e)return!1;o("#Choco_container_description").css("visibility","hidden"),o("#Choco_bigImage").fadeTo(n.fadeOutImageduration,0,function(){c(n.currentImage+parseInt(e),!1)})}function s(e,i,t){t&&(o("#Choco_container_photo, #Choco_content, #Choco_bigImage").stop(!0,!1).css({overflow:"visible"}),o("#Choco_bigImage").animate({height:e+"px",width:i+"px"},n.fadeInImageduration)),o("#Choco_container_photo").animate({height:e,width:i},n.fadeInImageduration),o("#Choco_content").animate({height:e,width:i,marginLeft:-i/2,marginTop:-e/2},n.fadeInImageduration,"swing",function(){o("#Choco_bigImage").fadeTo(n.fadeInImageduration,1).height(e).width(i),t||(g(),o("#Choco_container_description").css("visibility","visible"),o("#Choco_close").fadeIn(n.fadeInImageduration))}).css("overflow","visible")}function g(){if(n.linkImages)for(var e=["Choco_right_arrow","Choco_left_arrow"],i=0;i<e.length;i++)hide=!1,"Choco_right_arrow"==e[i]&&n.currentImage==n.lastImage?(hide=!0,o("#"+e[i]).fadeOut(300)):"Choco_left_arrow"==e[i]&&0==n.currentImage&&(hide=!0,o("#"+e[i]).fadeOut(300)),hide||o("#"+e[i]).fadeIn(n.fadeOutImageduration)}function h(){n.currentImage!==n.lastImage&&(_=new Image,z=n.currentImage+1,_.src=images[n.setIndex][z].adress)}function l(){var e=n.currentImage+1,i=n.lastImage+1;o("#Choco_container_title").html(images[n.setIndex][n.currentImage].caption),o("#Choco_container_via").html(n.setTitle+n.separator1+e+n.separator2+i)}function u(e,o){return void 0===e?o:e}function m(e,i){var t=o("#Choco_container_description").height()+o("#Choco_close").height(),a=e+t,r=i/e,c=e/i;for("body"==n.container.get(0).nodeName.toLowerCase()?(windowHeight=o(window).height(),windowWidth=o(window).width()):(windowHeight=n.container.height(),windowWidth=n.container.width()),notFitting=!0;notFitting;){a=e+t;i+28*i/100>windowWidth?e=c*(i=100*windowWidth/128):a>windowHeight?i=r*(e=windowHeight-t):notFitting=!1}return{largeur:i,hauteur:e}}function I(){o("#Choco_overlay").remove(),o("#Choco_content").remove()}function f(){o("#Choco_overlay").fadeOut(900,function(){o("#Choco_overlay").remove()}),o("#Choco_content").fadeOut(500,function(){o("#Choco_content").remove()}),n.currentImage=0}n=o.extend({container:o("body"),displayAsALink:!1,linkImages:!0,linksContainer:"Choco_links_container",overlayOpacity:.9,overlayColor:"#fff",fadeInOverlayduration:500,fadeInImageduration:500,fadeOutImageduration:500,vache:!0,separator1:" | ",separator2:"/",leftImg:"images/left.gif",rightImg:"images/right.gif",closeImg:"images/close.gif",loadingImg:"images/loading.gif",currentImage:0,setIndex:0,setTitle:"",lastImage:0},n),i++,n.setIndex=i,images[n.setIndex]=[],this.each(function(e){0==e&&n.linkImages&&""==n.setTitle&&(n.setTitle=u(o(this).attr("rel")," ")),o(this).each(function(){images[n.setIndex].displayAsALink=n.displayAsALink,images[n.setIndex][e]=[],images[n.setIndex][e].adress=u(o(this).attr("href")," "),images[n.setIndex][e].caption=u(o(this).attr("title")," "),n.displayAsALink||o(this).unbind("click").bind("click",{id:n.setIndex,nom:n.setTitle,i:e},t)})});for(var _=0;_<images[n.setIndex].length;_++)if(images[n.setIndex].displayAsALink)return 0==o("#"+n.linksContainer).size()&&this.filter(":first").before('<ul id="'+n.linksContainer+'"></ul>'),o("#"+n.linksContainer).append('<li><a href="#" id="Choco_numsetIndex_'+n.setIndex+'" class="Choco_link">'+n.setTitle+"</a></li>"),e=this.parent(),o(this).remove(),""==o.trim(e.html())&&e.remove(),o("#Choco_numsetIndex_"+n.setIndex).unbind("click").bind("click",{id:n.setIndex,nom:n.setTitle,i:n.currentImage},t)}}(jQuery);