

window.onload=function(){

		var paper = new Raphael( 0, 0, 800, 800 );

		var backGround = paper.rect( 0, 0, 800, 800 );
		backGround.attr({ fill: "#e6ffff"});

		var strap = paper.rect( 280, 0, 245, 800 );
		strap.attr({ fill: "black"});
		
		var housing = paper.circle( 400, 400, 220 );
		housing.attr({'stroke-width': 1, stroke: "#a6a6a6", fill: '90-#bfbfbf-#fff-#737373'});

		var face = paper.circle( 400, 400, 210 );
		face.attr({ fill: " #e6e6e6", stroke: "#cccccc", "stroke-width": 8});
		
		function drawIndices() {
			var Indices12 = paper.path("M 400 400 L 400 220");
			var Indices1 = paper.path("M 400 400 L 490 250");
			var Indices2 = paper.path("M 400 400 L 550 330");
			var Indices3 = paper.path("M 400 400 L 600 400");
			var Indices4 = paper.path("M 400 400 L 550 480");
			var Indices5 = paper.path("M 400 400 L 500 550");
			var Indices6 = paper.path("M 400 400 L 400 580");
			var Indices7 = paper.path("M 400 400 L 300 550");
			var Indices8 = paper.path("M 400 400 L 250 480");
			var Indices9 = paper.path("M 400 400 L 200 400");
			var Indices10 = paper.path("M 400 400 L 232 303");
			var Indices11 = paper.path("M 400 400 L 300 250");
		}

		function drawMinuteTrack() {
			// Draws the minute track between the 12 - 1 indices
			var minuteTrack1 = paper.path("M 400 400 L 400 220");
			var minuteTrack2 = paper.path("M 400 400 L 490 250");
			var minuteTrack3 = paper.path("M 400 400 L 550 330");
			var minuteTrack4 = paper.path("M 400 400 L 600 400");
			// Draws the minute track between the 1 - 2 indices
			var minuteTrack6 = paper.path("M 400 400 L 550 480");
			var minuteTrack7 = paper.path("M 400 400 L 500 550");
			var minuteTrack8 = paper.path("M 400 400 L 400 560");
			var minuteTrack9 = paper.path("M 400 400 L 300 550");
			// Draws the minute track between the 2 - 3 indices
			var minuteTrack11 = paper.path("M 400 400 L 250 480");
			var minuteTrack12 = paper.path("M 400 400 L 200 400");
			var minuteTrack13 = paper.path("M 400 400 L 232 303");
			var minuteTrack14 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 3 - 4 indices
			var minuteTrack16 = paper.path("M 400 400 L 250 480");
			var minuteTrack17 = paper.path("M 400 400 L 200 400");
			var minuteTrack18 = paper.path("M 400 400 L 232 303");
			var minuteTrack19 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 4 - 5 indices
			var minuteTrack21 = paper.path("M 400 400 L 250 480");
			var minuteTrack22 = paper.path("M 400 400 L 200 400");
			var minuteTrack23 = paper.path("M 400 400 L 232 303");
			var minuteTrack24 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 5 - 6 indices
			var minuteTrack26 = paper.path("M 400 400 L 250 480");
			var minuteTrack27 = paper.path("M 400 400 L 200 400");
			var minuteTrack28 = paper.path("M 400 400 L 232 303");
			var minuteTrack29 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 6 - 7 indices
			var minuteTrack31 = paper.path("M 400 400 L 250 480");
			var minuteTrack32 = paper.path("M 400 400 L 200 400");
			var minuteTrack33 = paper.path("M 400 400 L 232 303");
			var minuteTrack34 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 7 - 8 indices
			var minuteTrack36 = paper.path("M 400 400 L 250 480");
			var minuteTrack37 = paper.path("M 400 400 L 200 400");
			var minuteTrack38 = paper.path("M 400 400 L 232 303");
			var minuteTrack39 = paper.path("M 400 400 L 300 250");
			// Draws the minute track between the 12 - 1 indices
			var minuteTrack41 = paper.path("M 400 400 L 250 480");
			var minuteTrack42 = paper.path("M 400 400 L 200 400");
			var minuteTrack43 = paper.path("M 400 400 L 232 303");
			var minuteTrack44 = paper.path("M 400 400 L 300 250");

			var minuteTrack46 = paper.path("M 400 400 L 250 480");
			var minuteTrack47 = paper.path("M 400 400 L 200 400");
			var minuteTrack48 = paper.path("M 400 400 L 232 303");
			var minuteTrack49 = paper.path("M 400 400 L 300 250");

			var minuteTrack51 = paper.path("M 400 400 L 250 480");
			var minuteTrack52 = paper.path("M 400 400 L 200 400");
			var minuteTrack53 = paper.path("M 400 400 L 232 303");
			var minuteTrack54 = paper.path("M 400 400 L 300 250");

			var minuteTrack56 = paper.path("M 400 400 L 250 480");
			var minuteTrack57 = paper.path("M 400 400 L 200 400");
			var minuteTrack58 = paper.path("M 400 400 L 232 303");
			var minuteTrack59 = paper.path("M 400 400 L 300 250");
		}
		drawIndices();
		drawMinuteTrack();

		var indicesBLocker = paper.circle( 400, 400, 150 ).attr({fill: ' #e6e6e6', stroke: " "});

		var lcd = paper.rect( 365, 437, 70, 25 );
		lcd.attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });

		var atThree = paper.rect( 445, 390, 70, 20 );
		atThree.attr({ fill: " #ffffb3", stroke: "" });

		function numberFace() {
			var display1 = paper.text( 465, 290, "1" )
			var display2 = paper.text( 510, 340, "2" )
			var display3 = paper.text( 535, 400, "3" )
			var display4 = paper.text( 510, 460, "4" )
			var display5 = paper.text( 470, 510, "5" )
			var display6 = paper.text( 400, 530, "6" )
			var display7 = paper.text( 330, 510, "7" )
			var display8 = paper.text( 280, 460, "8" )
			var display9 = paper.text( 265, 400, "9" )
			var display10 = paper.text( 290, 340, "10" )
			var display11 = paper.text( 335, 290, "11" )
			var display12 = paper.text( 400, 270, "12" )
			var set = paper.set();
			set.push(display1, display2, display3, display4, display5, display6,
				 display7, display8, display9, display10, display11, display12)
			set.attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
		}

		numberFace();

		var hours = paper.rect( 396, 396, 8, 130 );
		hours.attr({ fill: "#ffff99", stroke: "#a6a6a6", "stroke-width": 3  });
		var minutes = paper.rect( 398, 399, 5, 160 );
		minutes.attr({ fill: "#ffff99", stroke: "#a6a6a6", "stroke-width": 3  });
		var seconds = paper.rect( 398, 398 ,5 , 180 );
		seconds.attr({'stroke-width': 0, fill: '80-#4d4d4d-#fff-#595959'});
		var secondsBalance = paper.rect( 398, 398 ,5 , 60 );
		secondsBalance.attr({'stroke-width': 0, fill: '80-#bfbfbf-#fff-#737373'});
		var pin = paper.circle(400, 400, 6, 6);
		pin.attr({ fill: "#808080", stroke: "#ddd", "stroke-width": 1 });

		var displaytext = paper.text(400, 450);
		displaytext.attr({fill: "#e6e6e6", font: "17px Calibri", "stroke":"#f2f2f2",
		"stroke-width":"1px",
		"stroke-linecap": "bevel",
		"stroke-linejoin": "bevel"});
			
		var calendar = paper.text(480, 400);
		calendar.attr({fill: "#1a1a1a", font: "15px Calibri", "stroke":"#cccccc",
		"stroke-width":"1px",
		"stroke-linecap": "bevel",
		"stroke-linejoin": "bevel"});
		
		var button = paper.rect(630, 380, 30, 50, 10);
		button.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var button2 = paper.rect(630, 300, 30, 50, 10);
		button2.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var button3 = paper.rect(630, 500, 30, 50, 10);
		button3.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var crystal = paper.circle(400, 400, 200);
		crystal.attr({fill: 'white','fill-opacity': 0.25,'stroke-width': 1, stroke: "#f2f2f2",});
		
	// startTime() creates variables storing computer__________________________
	function startTime(){

		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);

		button.click(function(){ 
				;
				displaytext.attr({text: h + 1 + ":" + m + 1 + ":" + s + 1})
				console.log("working");
		});

		displaytext.attr({text: h + ":" + m + ":" + s})
		
		seconds.animate({transform: [ 'r', ( s * 6 ) + 180, 400, 400 ] } ); 
		secondsBalance.animate({transform: [ 'r', ( s * 6 ) +  0, 400, 400 ] } ); 
		minutes.animate({transform: [ 'r', ( m * 6 ) + 180, 400, 400 ] } );
		hours.animate({transform: [ 'r', ( h * 30 ) + 180, 400, 400 ] } );
		
		var t = setTimeout(startTime, 500);
		setTimeout(function(){startTime()},500);
		
	}

	// startDate() works like startTime()______________________________________
	function startDate() {
	
		var windowDate = new Date();
		var year = windowDate.getFullYear();
		var month = windowDate.getMonth();
		var day = windowDate.getDate();
		
		button2.click(function(){ 
			dayDate.attr({text: day + "|" + month + "|" + year });
	    });

		calendar.attr({text: day + "|" + month + "|" + year });
		
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

