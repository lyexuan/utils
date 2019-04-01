var point = [];
var currentPoint = "";
var $body = document.getElementsByTagName("body")[0];
var $input = document.getElementById("pointInput");
$body.onclick=function(){
	var x = event.clientX;
	var y = event.clientY;
	var div = document.createElement("DIV");
	div.style.position = "absolute";
	div.style.width = "9px";
	div.style.height = "9px";
	div.style.backgroundColor = "#f00";
	div.style.left = (x-4) + "px";
	div.style.top = (y-4) + "px";
	setTimeout(function(){
		var p = $input.value;
		if(p!=currentPoint){
			currentPoint = p;
			point.push("*" + p + "@");
			$body.appendChild(div);
			console.log(point);
		}
	},500);
};
/*--------------------------------------------------------------------------------*/
var yx = {};
yx.$btn = document.getElementById("localsearch");
yx.$input = document.getElementById("localvalue");
yx.$posPic = null;
yx.point = [];
yx.points = [];
yx.len = yx.points.length;
yx.drawPoint = function(){
	if(yx.len>0){
		yx.point = yx.points[(yx.len-1)];
		var text = yx.point[0] + "," + yx.point[1];
		yx.$input.value = text;
		yx.$btn.click();
		setTimeout(function(){
			yx.$posPic = document.getElementsByClassName("BMap_Marker BMap_noprint")[0];
			var $p = yx.$posPic.parentNode;
			var cNode = yx.$posPic.cloneNode(true);
			cNode.class="";
			$p.appendChild(cNode);
		},100);
		yx.len --;
		setTimeout(function(){
			yx.drawPoint();
		},500);
	}
}
yx.drawPoint();
/*--------------------------------------------------------------------------------*/


