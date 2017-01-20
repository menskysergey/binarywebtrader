define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,e){require(["css!charts/indicators/ultosc/ultosc.css"]);var f=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},g=[new f(30,"red",1,"Dash"),new f(70,"red",1,"Dash")];require(["text!charts/indicators/ultosc/ultosc.html","text!charts/indicators/indicators.json"],function(f,h){var i="#cd0a0a";f=a(f),f.appendTo("body"),h=JSON.parse(h);var j=h.ultosc;f.attr("title",j.long_display_name),f.find(".ultosc-description").html(j.description),f.find("input[type='button']").button(),f.find("#ultosc_stroke").colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#ultosc_stroke").css({background:"#"+c.formatted}).val(""),i="#"+c.formatted},ok:function(b,c){a("#ultosc_stroke").css({background:"#"+c.formatted}).val(""),i="#"+c.formatted}});var k="Solid";a("#ultosc_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#ultosc_dashStyle .dd-selected-image").css("max-height","5px").css("max-width","115px"),k=b.selectedData.value}}),a("#ultosc_dashStyle .dd-option-image").css("max-height","5px").css("max-width","115px");var l=f.find("#ultosc_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(g,function(b,c){a(l.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),f.find("#ultosc_level_delete").click(function(){l.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):l.rows(".selected").remove().draw()}),f.find("#ultosc_level_add").click(function(){require(["indicator_levels"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(l.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"ultosc-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;a(".ultosc_input_width_for_period").each(function(){var b=a(this);return _.isInteger(_.toNumber(b.val()))&&_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),b.val(b.prop("defaultValue")),void(c=!1))});var e=parseInt(a("#ultosc_first_period").val()),g=parseInt(a("#ultosc_second_period").val()),h=parseInt(a("#ultosc_third_period").val());if(e>h){{a("#ultosc_first_period")}return require(["jquery","jquery-growl"],function(a){a.growl.error({message:" Period 1 cannot be more than Period 3!"})}),void(c=!1)}if(g>h){{a("#ultosc_first_period")}return require(["jquery","jquery-growl"],function(a){a.growl.error({message:" Period 2 cannot be more than Period 3!"})}),void(c=!1)}if(c){var j=[];a.each(l.rows().nodes(),function(){var b=a(this).data("level");b&&j.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var m={firstPeriod:parseInt(a("#ultosc_first_period").val()),secondPeriod:parseInt(a("#ultosc_second_period").val()),thirdPeriod:parseInt(a("#ultosc_third_period").val()),stroke:i,strokeWidth:parseInt(a("#ultosc_stroke_width").val()),dashStyle:k,appliedTo:parseInt(a("#ultosc_applied_to").val()),levels:j};d&&d(),a(a(".ultosc").data("refererChartID")).highcharts().series[0].addIndicator("ultosc",m),b.call(f)}}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),"function"==typeof e&&e(c)})}var d=null;return{open:function(b,e){d=e||d;var f=function(){a(".ultosc").data("refererChartID",b).dialog("open")};0==a(".ultosc").length?c(b,this.open):f()}}});