//Draw polygon in canvas element with elementId.
function RegularPolygon(elementId,line,centerx,centery,radius){
	var c = document.getElementById(elementId);
	var ctx=c.getContext("2d");
	points = RegularPolygonPoints(line,centerx,centery,radius);
	for(i=1;i<line;i++)
	{
		ctx.moveTo(points[i-1].x,points[i-1].y);
		ctx.lineTo(points[i].x,points[i].y);
		ctx.stroke();
	}
	//Fill the polygon with last line.
		ctx.moveTo(points[line-1].x,points[line-1].y);
		ctx.lineTo(points[0].x,points[0].y);
		ctx.stroke();
}

//Return a collection with points that can build a regular polygon.
function RegularPolygonPoints(line,centerx,centery,radius){
	var pointcollection=new Array();
	if(line<3){
		return pointcollection;
	}
	var theta =2*Math.PI/line;
			var point={
			x:centerx,
			y:centery-radius
		}
		
	for(i=0;i<line;i++){
		var pointn=new Object();
		pointn.x=centerx + radius*Math.cos(i*theta);
		pointn.y=centery + radius*Math.sin(i*theta);
		pointcollection.push(pointn);
	}
	return pointcollection;
}
