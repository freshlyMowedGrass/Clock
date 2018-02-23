

window.onload=function(){

		var paper = new Raphael( 0, 0, 400, 400 );

		var backGround = paper.rect( 0, 0, 400, 400 );
		backGround.attr({ fill: "#e6ffff"});

		var strap = paper.rect( 150, 0, 100, 400 );
		strap.attr({ fill: "black"});
		
		var face = paper.circle( 200, 200, 100 );
		face.attr({ fill: "#00e6e6", stroke: "#ddd", "stroke-width": 4});
		
		var lcd = paper.rect( 178, 250, 45, 18 );
		lcd.attr({ fill: "90-#ffff4d-#f2f2f2", stroke: "#cccc00" });

		var atThree = paper.rect( 230, 192, 55, 15 );
		atThree.attr({ fill: " #ffffb3", stroke: "" });
		
		var baton = paper.rect( 200, 200, 1, 100 );
		baton.attr({ fill: "#a6a6a6", stroke: ""});

		var hours = paper.rect( 196, 196, 10, 60 );
		hours.attr({ fill: "#339966", stroke: "" });

		var minutes = paper.rect( 195, 195, 7, 75 );
		minutes.attr({ fill: "#ff4da6", stroke: "" });

		var seconds = paper.rect( 198, 198 ,5 , 105 );
		seconds.attr({ fill: "#ffff99", stroke: ""});

		var pin = paper.circle(200, 200, 6, 6);
		pin.attr({ fill: "blue", stroke: "#ddd", "stroke-width": 1 });

		var display = paper.text( 200, 110, "12" );
		var display = paper.text( 200, 290, "6" );
		var display = paper.text( 110, 200, "9" );
		var display = paper.text( 290, 200, "3" );
		
		var displaytext = paper.text(200, 260);
		displaytext.attr({fill: "black"});
			
		var dayDate = paper.text(260, 200);
		dayDate.attr({fill: "black", font: "10px Arial"});
		
		var button = paper.rect(300, 185, 20, 30, 10);
		button.attr({fill: "#bfbfbf", stroke: ""});
		
function startTime(){

		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);

		displaytext.attr({text: h + ":" + m + ":" + s})
		
		seconds.animate({transform: [ 'r', ( s * 6 ) + 180, 200, 200 ] } ); 
		minutes.animate({transform: [ 'r', ( m * 6 ) + 180, 200, 200 ] } );
		hours.animate({transform: [ 'r', ( h * 30 ) + 180, 200, 200 ] } );
		
		var t = setTimeout(startTime, 500);
		setTimeout(function(){startTime()},500);
		
		//console.log(m);
}

function increaseTime(i){
		button.click(function(){ 
			
		});
	
}

function startDate() {
	
		var windowDate = new Date();
		var year = windowDate.getFullYear();
		var month = windowDate.getMonth();
		var day = windowDate.getDate();
		
		dayDate.attr({text: day + "|" + month + "|" + year });
		
		var t = setTimeout(startDate, 500);
		setTimeout(function(){startDate()},500);
	
}

function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
}

startTime(); //Function call that starts the startTime function.
startDate();

};

