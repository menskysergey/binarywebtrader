define(["jquery","windows/windows","highstock","color-picker"],function(a,b){function c(b,c){if(c){c=c.substring(0,c.indexOf(")")+1);var d="",e="";b.split("_").forEach(function(a,b,f){return e+="}",b===f.length-1?void(d=d+'{"'+a+'":"'+c+'"'):void(d=d+'{"'+a+'":')}),d+=e,a.extend(l,JSON.parse(d))}}function d(d){d.click(function(){k?k.moveToTop():require(["text!themes/custom_theme/custom_theme.html","css!themes/custom_theme/custom_theme.css"],function(d){d=a(d),d.find(".color_input_width").each(function(b,d){var f=a(d).attr("id").replace("theme_",""),g=a(d).attr("alpha"),i=e(f);i?a(d).css({background:i}):(i=a(d).css("background-color"),c(f,i),Highcharts.setOptions(l)),a(d).data("prevColor",i),a(d).colorpicker({showOn:"click",position:{my:"left+50 bottom+100",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},alpha:g?!0:!1,colorFormat:"RGBA",open:function(b,c){c.colorPicker.setColor(a(this).css("background-color"))},select:function(b,e){a(d).css({background:e.formatted}).val(""),c(f,e.formatted),h()},ok:function(b,e){e.formatted&&(a(d).css({background:e.formatted}).val(""),a(d).data("prevColor",a(d).css("background-color")),c(f,e.formatted),h())},cancel:function(){a(d).css({background:a(d).data("prevColor")}).val(""),c(f,a(d).data("prevColor")),h()}})}),k=b.createBlankWindow(d,{autoOpen:!1,resizable:!1,collapsable:!1,minimizable:!1,maximizable:!1,closable:!1,closeOnEscape:!1,width:650,height:515,title:"Customize chart appearance".i18n(),modal:!0,destroy:function(){k=null},buttons:{Apply:function(){require(["themes/themes"],function(b){var c=a("a.theme_custom"),d=c.text(),e=c.attr("class");b.confirmationDialog(Highcharts.getOptions(),e,d)})},Cancel:function(){a(this).dialog("close"),a(this).dialog("destroy"),f()}}}),k.dialog("open"),g()})})}function e(a){var b=j;return a.split("_").forEach(function(a){b&&(b=b[a])}),b}function f(){var a=Highcharts.getOptions();for(var b in a)"function"!=typeof a[b]&&delete a[b];Highcharts.setOptions(j)}function g(){var b={chart:{spacingLeft:0,marginLeft:45,events:{load:function(){this.credits.element.onclick=function(){window.open("http://www.binary.com","_blank")}}}},series:[{type:"candlestick",data:i}],navigator:{enabled:!0,series:{id:"navigator"}},title:{text:"Some random index".i18n()},credits:{href:"http://www.binary.com",text:"Binary.com"},xAxis:{ordinal:!1},yAxis:[{opposite:!1}],rangeSelector:{enabled:!1},tooltip:{crosshairs:[{width:2,color:"red",dashStyle:"dash"},{width:2,color:"red",dashStyle:"dash"}],enabled:!0,enabledIndicators:!0},exporting:{enabled:!1}};a("#preview-chart").highcharts("StockChart",b)}function h(){Highcharts.setOptions(l),a("#preview-chart").highcharts().destroy(),g()}var i=[[1452412800,32.87,33.75,32.5,33.28],[1452427200,33.27,34.45,32.81,34.22],[1452441600,34.23,34.73,33.72,33.77],[1452456e3,34.23,34.48,33.73,33.84],[1452470400,33.84,34.42,33.2,33.33],[1452484800,33.34,33.73,32.8,33.55],[1452499200,32.7,33.22,32.56,32.91],[1452513600,32.89,33.38,32.05,32.17],[1452528e3,32.16,32.2,31.21,31.54],[1452542400,30.8,31.87,30.76,31.65],[1452556800,31.66,32.37,30.88,31.09],[1452571200,31.1,31.27,30.38,30.84],[1452585600,31.52,31.84,31.23,31.48]],j=a.extend(!0,{},Highcharts.getOptions(),{}),k=null,l={};return{init:d}});