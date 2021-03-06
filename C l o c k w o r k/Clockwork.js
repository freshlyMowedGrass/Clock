//
//                  Candidate number:  1 6 7 8 8 7
//                           28 / 2 / 2018
//______________________________________________________________________________
//    __     
//   /  |    
//    | |    Window onload function followed by drawing some of the SVG assets
//    | |    Some of the vector graphic drawings are enclosed in functions,
//   _| |_   these functions are called on lines 323 and 326.
//  |_____|  
//
window.onload = function () {
	'use strict';

	var paper = new Raphael(0, 0, 1000, 800);

	var backGround = paper.rect(0, 0, 1000, 800);
	backGround.attr({ fill: "#e6ffff" });
	var water = paper.image("water2.png", 0, 0, 1000, 800);

	var strap = paper.rect(280, 0, 245, 800);
	strap.attr({ fill: "black" });
	var leather = paper.image("leather.png", 280, 0, 245, 800);

	var crownStem = paper.rect(625, 390, 40, 30).attr({
		'stroke': '#cccccc', 'stroke-width': 1,
		fill: '80-#bfbfbf-#fff-#737373'
	});

	var crown = paper.rect(665, 380, 30, 50, 10);
	crown.attr({ 'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c' });

	var diversBezel = paper.circle(400, 400, 260).attr({
		'stroke-width': 1, stroke: "#a6a6a6",
		fill: '80-#bfbfbf-#fff-#737373'
	});

	var pearl = paper.path("M 386 150 L 415 150 L 400 175 Z").attr({
		'stroke-width': 1, stroke: "#ffff80",
		fill: "#ffffb3"
	});

	var housing = paper.circle(400, 400, 220);
	housing.attr({
		'stroke-width': 1, stroke: "#a6a6a6",
		fill: '90-#bfbfbf-#fff-#737373'
	});

	var face = paper.circle(400, 400, 210);
	face.attr({ fill: " #e6e6e6", stroke: "#cccccc", "stroke-width": 8 });

	// Draws the hour indices
	function drawIndices() {
		var Indices12 = paper.path("M 400 400 L 400 220")
		var Indices1 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 30, 400, 400] });
		var Indices2 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 60, 400, 400] });
		var Indices3 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 90, 400, 400] });
		var Indices4 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 120, 400, 400] });
		var Indices5 = paper.path("M 400, 400 L 400 220")
			.animate({ transform: ['r', + 150, 400, 400] });
		var Indices6 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 180, 400, 400] });
		var Indices7 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 210, 400, 400] });
		var Indices8 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 240, 400, 400] });
		var Indices9 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 270, 400, 400] });
		var Indices10 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 300, 400, 400] });
		var Indices11 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 330, 400, 400] });
		var indicesSet = paper.set();
		indicesSet.push(Indices1, Indices2, Indices3, Indices4, Indices5,
			Indices6, Indices7, Indices8, Indices9, Indices10, Indices11,
			Indices12)
		indicesSet.attr({
			"fill": "black", "stroke": "#808080",
			"stroke-width": "1.5px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"
		});
		console.log("drawIndices");
	}

	// Draws the minute indices
	function drawMinuteTrack() {

		// Draws the minute track between the 12 - 1 indices
		var minuteTrack1 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 6, 400, 400] });
		var minuteTrack2 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 12, 400, 400] });
		var minuteTrack3 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 18, 400, 400] });
		var minuteTrack4 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 24, 400, 400] });

		// Draws the minute track between the 1 - 2 indices
		var minuteTrack6 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 36, 400, 400] });
		var minuteTrack7 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 42, 400, 400] });
		var minuteTrack8 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 48, 400, 400] });
		var minuteTrack9 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 54, 400, 400] });

		// Draws the minute track between the 2 - 3 indices
		var minuteTrack11 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 66, 400, 400] });
		var minuteTrack12 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 72, 400, 400] });
		var minuteTrack13 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 78, 400, 400] });
		var minuteTrack14 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 84, 400, 400] });

		// Draws the minute track between the 3 - 4 indices
		var minuteTrack16 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 96, 400, 400] });
		var minuteTrack17 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 102, 400, 400] });
		var minuteTrack18 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 108, 400, 400] });
		var minuteTrack19 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 114, 400, 400] });

		// Draws the minute track between the 4 - 5 indices
		var minuteTrack21 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 126, 400, 400] });
		var minuteTrack22 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 132, 400, 400] });
		var minuteTrack23 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 138, 400, 400] });
		var minuteTrack24 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 144, 400, 400] });

		// Draws the minute track between the 5 - 6 indices
		var minuteTrack26 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 156, 400, 400] });
		var minuteTrack27 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 162, 400, 400] });
		var minuteTrack28 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 168, 400, 400] });
		var minuteTrack29 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 174, 400, 400] });

		// Draws the minute track between the 6 - 7 indices
		var minuteTrack31 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 186, 400, 400] });
		var minuteTrack32 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 192, 400, 400] });
		var minuteTrack33 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 198, 400, 400] });
		var minuteTrack34 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 204, 400, 400] });

		// Draws the minute track between the 7 - 8 indices
		var minuteTrack36 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 216, 400, 400] });
		var minuteTrack37 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 222, 400, 400] });
		var minuteTrack38 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 228, 400, 400] });
		var minuteTrack39 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 234, 400, 400] });

		// Draws the minute track between the 8 - 9 indices
		var minuteTrack41 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 246, 400, 400] });
		var minuteTrack42 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 252, 400, 400] });
		var minuteTrack43 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 258, 400, 400] });
		var minuteTrack44 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 264, 400, 400] });

		// Draws the minute track between the 9 - 10 indices
		var minuteTrack46 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 276, 400, 400] });
		var minuteTrack47 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 282, 400, 400] });
		var minuteTrack48 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 288, 400, 400] });
		var minuteTrack49 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 294, 400, 400] });

		// Draws the minute track between the 10 - 11 indices
		var minuteTrack51 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 306, 400, 400] });
		var minuteTrack52 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 312, 400, 400] });
		var minuteTrack53 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 318, 400, 400] });
		var minuteTrack54 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 324, 400, 400] });

		// Draws the minute track between the 11 - 12 indices
		var minuteTrack56 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 336, 400, 400] });
		var minuteTrack57 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 342, 400, 400] });
		var minuteTrack58 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 348, 400, 400] });
		var minuteTrack59 = paper.path("M 400 400 L 400 220")
			.animate({ transform: ['r', + 354, 400, 400] });

		// Puts the minute tracks in a set and applies aesthetic attributes 
		// to the set
		var minuteTrackSet = paper.set();
		minuteTrackSet.push(minuteTrack1, minuteTrack2, minuteTrack3,
			minuteTrack4, minuteTrack6, minuteTrack7, minuteTrack8, minuteTrack9,
			minuteTrack11, minuteTrack12, minuteTrack13, minuteTrack14,
			minuteTrack16, minuteTrack17, minuteTrack18, minuteTrack19,
			minuteTrack21, minuteTrack22, minuteTrack23, minuteTrack24,
			minuteTrack26, minuteTrack27, minuteTrack28, minuteTrack29,
			minuteTrack31, minuteTrack32, minuteTrack33, minuteTrack34,
			minuteTrack36, minuteTrack37, minuteTrack38, minuteTrack39,
			minuteTrack41, minuteTrack42, minuteTrack43, minuteTrack44,
			minuteTrack46, minuteTrack47, minuteTrack48, minuteTrack49,
			minuteTrack51, minuteTrack52, minuteTrack53, minuteTrack54,
			minuteTrack56, minuteTrack57, minuteTrack58, minuteTrack59)
		minuteTrackSet.attr({
			"stroke": "#808080",
			"stroke-width": "1.5px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"
		});
	}

	// Aesthetic design of the dial will be drawn when called
	function drawFaceDetails() {
		// Calls the draw minuteTrackFunction, thus displaying the 48 small 
		// face indices
		drawMinuteTrack();

		// Draws a grey circle to cover the undesired visible part of path of 
		// the minute indices
		var minuteIndicesBlocker = paper.circle(400, 400, 160).attr({
			fill: ' #e6e6e6',
			stroke: " "
		});

		// Calls the drawIndices() function, thus drawing the 12 larger face 
		// indices
		drawIndices();

		// Draws a grey circle to cover the undesired visible part of path of 
		// the hour indices
		var hourIndicesBlocker2 = paper.circle(400, 400, 145).attr({
			fill: ' #e6e6e6',
			stroke: " "
		});

		// Draws a box for the digital clock to appear in
		var lcd = paper.rect(360, 437, 80, 30, 10).toFront()
			.attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });

		// Draws a box for the date text to appear in
		var atThree = paper.rect(350, 310, 100, 30, 10).toFront()
			.attr({ fill: " #ffffb3", stroke: "" });
	}

	// Draws the hour numerals on the dial face
	function numberFace() {
		var display1  = paper.text(465, 290, "1" )
		var display2  = paper.text(510, 340, "2" )
		var display3  = paper.text(530, 400, "3" )
		var display4  = paper.text(510, 460, "4" )
		var display5  = paper.text(465, 510, "5" )
		var display6  = paper.text(400, 530, "6" )
		var display7  = paper.text(335, 510, "7" )
		var display8  = paper.text(290, 460, "8" )
		var display9  = paper.text(270, 400, "9" )
		var display10 = paper.text(290, 340, "10")
		var display11 = paper.text(335, 290, "11")
		var display12 = paper.text(400, 270, "12")
		var set = paper.set();
		set.push(display1, display2, display3, display4, display5, display6,
			display7, display8, display9, display10, display11, display12)
		set.attr({
			'font-size': 25, 'font-family': 'Arial', "stroke": "#808080",
			"stroke-width": "0.9px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"
		});
	}

	// Draws the seconds numerals around the dial's edge ( 5, 10, 15 etc )
	function secondsNumberFace() {
		var second5  = paper.text(495, 235, "5" )
		var second10 = paper.text(565, 305, "10")
		var second15 = paper.text(590, 400, "15")
		var second20 = paper.text(565, 495, "20")
		var second25 = paper.text(495, 565, "25")
		var second30 = paper.text(400, 590, "30")
		var second35 = paper.text(305, 565, "35")
		var second40 = paper.text(235, 495, "40")
		var second45 = paper.text(210, 400, "45")
		var second50 = paper.text(235, 305, "50")
		var second55 = paper.text(305, 235, "55")
		var second60 = paper.text(400, 210, "60")
		var secondMinuteNumberSet = paper.set();
		secondMinuteNumberSet.push(second60, second5, second10, second15,
			second20, second25, second30, second35, second40, second45,
			second50, second55)
		secondMinuteNumberSet.attr({
			"fill": "#595959",
			'font-size': 11,
			"stroke": "#cccccc",
			"stroke-width": "0.2px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"
		});
	}

	// Calling the above functions
	drawFaceDetails();
	secondsNumberFace();
	numberFace();
	drawCrystal();

//______________________________________________________________________________
//    _____   
//   / ___ `. 
//  |_/___) |       Drawing the moving assets.
//   .'____.' 
//  / /_____  
//  |_______| 
			 
	var hours = paper.rect(396, 396, 8, 105, 10);
	hours.attr({
		fill: "#ffff99", 'fill-opacity': 0, stroke: "#595959",
		"stroke-width": 3
	});

	var minutes = paper.rect(398, 399, 5, 160, 20);
	minutes.attr({
		fill: "#ffff99", 'fill-opacity': 0, stroke: "#595959",
		"stroke-width": 3
	});

	var seconds = paper.rect(398, 398, 5, 180, 50);
	seconds.attr({
		'stroke': '#cccccc', 'stroke-width': 1,
		fill: '80-#4d4d4d-#fff-#595959'
	});

	var secondsBalance = paper.rect(398, 398, 5, 60);
	secondsBalance.attr({
		'stroke': '#cccccc', 'stroke-width': 1,
		fill: '80-#bfbfbf-#fff-#737373'
	});

	var pin = paper.circle(400, 400, 6, 6);
	pin.attr({ fill: "#808080", stroke: "#ddd", "stroke-width": 1 });

	var displaytext = paper.text(400, 450).toFront().attr({
		fill: "white",
		font: "20px Calibri",
		"stroke": "white",
		"stroke-width": "0.5px",
		"stroke-linecap": "bevel",
		"stroke-linejoin": "bevel"
	});

	var calendar = paper.text(400, 325).toFront().attr({
		fill: "#1a1a1a",
		font: "20px Calibri",
		"stroke": "#262626",
		"stroke-width": "0.5px",
		"stroke-linecap": "bevel",
		"stroke-linejoin": "bevel"
	});

	function drawCrystal() {
		var crystal = paper.circle(400, 400, 200);
		crystal.attr({ fill: 'white', 'fill-opacity': 0.1, 'stroke': '#d9d9d9', "stroke-width": "0.5px" });
		var crystal = paper.circle(350, 350, 150);
		crystal.attr({ fill: 'white', 'fill-opacity': 0.15, 'stroke': '' });
		var crystal = paper.circle(380, 380, 110);
		crystal.attr({ fill: 'white', 'fill-opacity': 0.125, 'stroke': '' });
		var crystal = paper.circle(400, 400, 50);
		crystal.attr({ fill: 'white', 'fill-opacity': 0.1, 'stroke': "" });
	}

//_____________________________________________________________________________
//    ______          _________  _                      
//   / ____ `.       |  _   _  |(_)                     
//   `'  __) |       |_/ | | \_|__   _ .--..--.  .---.  
//   _  |__ '.           | |   [  | [ `.-. .-. |/ /__\\ 
//  | \____) |          _| |_   | |  | | | | | || \__., 
//   \______.'         |_____| [___][___||__||__]'.__.' 

	var timeExplain = paper.rect  (750,500,200,180,10)     .attr({fill:"#bfbfbf", stroke:  "#999999"});
	var timeSetting = paper.text  (850,520,"Time settings").attr({fill:"white", font: "20px Calibri"});
	
	var hourSet     = paper.text  (780,560,"Hour \n+"  ).attr({fill: "white",   font: "15px Calibri"});
	var hourSet     = paper.text  (780,650,"-\n Hour"  ).attr({fill: "white",   font: "15px Calibri"});

	var minuteSet   = paper.text  (850,560,"Minute \n+").attr({fill: "white",	font: "15px Calibri"});
	var minuteSet   = paper.text  (850,650,"-\n Minute").attr({fill: "white",	font: "15px Calibri"});

	var secondSet   = paper.text  (920,560,"Second \n+").attr({fill: "white",	font: "15px Calibri"});
	var secondSet   = paper.text  (920,650,"-\n Second").attr({fill: "white",	font: "15px Calibri"});

	var hourUp      = paper.circle(780,590,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });
	var hourDown    = paper.circle(780,620,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });
	var minuteUp    = paper.circle(850,590,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });
	var minuteDown  = paper.circle(850,620,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });
	var secondUp    = paper.circle(920,590,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });
	var secondDown  = paper.circle(920,620,10).attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });

	var today       = 0;
	var hour        = 0;
	var minute      = 0;
	var second      = 0;
	var secOffset   = 0;
	var minOffset   = 0;
	var hourOffset  = 0;
	
	secondUp.click(function () {
		secOffset++;
	});

	secondDown.click(function () {
		secOffset--;
	});

	minuteUp.click(function () {
		minOffset++;
	});

	minuteDown.click(function () {
		minOffset--;
	});

	hourUp.click(function () {
		hourOffset++;
	});

	hourDown.click(function () {
		hourOffset--;
	});

	// startTime() creates variables storing computer time
	function startTime() {

		today  = new Date();

		today.setHours(today.getHours() + hourOffset)
		today.setMinutes(today.getMinutes() + minOffset)
		today.setSeconds(today.getSeconds() + secOffset)

		hour = today.getHours();
		minute = today.getMinutes();
		second = today.getSeconds();

		hour   = checkTime( hour   );
		minute = checkTime( minute );
		second = checkTime( second );

		displaytext.attr({ text: hour + ":" + minute + ":" + second })

		seconds       .animate({ transform: ['r', (second * 6) + 180, 400, 400] });
		secondsBalance.animate({ transform: ['r', (second * 6) +   0, 400, 400] });
		minutes       .animate({ transform: ['r', (minute * 6) + 180, 400, 400] });
		hours         .animate({ transform: ['r', (hour  * 30) + 180, 400, 400] });

		console.log("startTime");
		var t = setTimeout(startTime, 500);
	}

	// Makes sure seconds, minutes and hours have a zero when appropriate
	function checkTime(i) {
		if (i < 10) { i = "0" + i };
		return i;
	}

//______________________________________________________________________________
//    _    _            ______           _               
//   | |  | |          |_   _ `.        / |_                 
//   | |__| |_           | | `. \ ,--. `| |-'.---.  
//   |____   _|          | |  | |`'_\ : | | / /__\\ 
//       _| |_          _| |_.' /// | |,| |,| \__., 
//      |_____|        |______.' \'-;__/\__/ '.__.' 

	var calExplain  = paper.rect  (750,200,200,180,10).attr({ fill: "#ffffb3", stroke: "#999999" });
	var calText     = paper.text  (850,220, "Calendar settings").attr({fill: "#1a1a1a",	font: "20px Calibri",});
	
	var daySet      = paper.text  (780,260, "Day \n+").attr({fill: "#1a1a1a",	font: "15px Calibri",});
	var daySet      = paper.text  (780,350, "-\n Day").attr({fill: "#1a1a1a",	font: "15px Calibri",});

	var monthSet    = paper.text  (850,260, "Month \n+").attr({fill: "#1a1a1a",	font: "15px Calibri",});
	var monthSet    = paper.text  (850,350, "-\n Month").attr({fill: "#1a1a1a",	font: "15px Calibri",});

	var yearSet     = paper.text  (920,260, "Year \n+").attr({fill: "#1a1a1a",	font: "15px Calibri",});;
	var yearSet     = paper.text  (920,350, "-\n Year").attr({fill: "#1a1a1a",	font: "15px Calibri"});

	var dayUp       = paper.circle(780,290,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });
	var dayDown     = paper.circle(780,320,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });
	var monthUp     = paper.circle(850,290,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });
	var monthDown   = paper.circle(850,320,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });
	var yearUp      = paper.circle(920,290,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });
	var yearDown    = paper.circle(920,320,10).attr({ fill: " 90-#b3b300-#ffffb3", stroke: "#ffffe6" });

	var date        = 0;
	var year        = 0;
	var month       = 0;
	var day         = 0;
	var dayOffset   = 0;
	var monthOffset = 0;
	var yearOffset  = 0;

	dayUp.click(function () {
		dayOffset++;
	});

	dayDown.click(function () {
		dayOffset--;
	});

	monthUp.click(function () {
		monthOffset++;
	});

	monthDown.click(function () {
		monthOffset--;
	});

	yearUp.click(function () {
		yearOffset++;
	});

	yearDown.click(function () {
		yearOffset--;
	});

	// startDate() works like startTime()_______________________________________
	function startDate() {

		date  = new Date();
		
		date.setDate(date.getDate() + dayOffset);
		date.setMonth(date.getMonth() + monthOffset);
		date.setFullYear(date.getFullYear() + yearOffset);

		day    = date.getDate();
		month  = date.getMonth() + 1;
		year   = date.getFullYear();

		calendar.attr({ text: day + "|" + month + "|" + year });

		console.log("startDate");
		var t = setTimeout(startDate, 500);
	}
//______________________________________________________________________________
//    _______            ______                        __   
//   |  _____|          |_   _ \                      [  |  
//   | |____              | |_) |  .---.  ____  .---.  | |  
//   '_.____''.           |  __'. / /__\\[_   ]/ /__\\ | |  
//   | \____) |          _| |__) || \__., .' /_| \__., | |  
//    \______.'         |_______/  '.__.'[_____]'.__.'[___] 


	function rotatingBezel() {
		var textBox = paper.rect(600, 30, 300, 100, 10).attr({
			fill: 'white',
			'fill-opacity': 0.6, 'stroke': ""
		});
		var redArrow = paper.path("M  600 130 L 580 180 L 600 190 L 550 220\
		 L 540 160 L 560 170 L 600 70").attr({
				fill: "red", "stroke": "#80bfff",
				"stroke-width": "0.8px",
			})

		var explainer = paper.text(750, 78);
		explainer.attr({
			fill: "black",
			font: "15px Calibri",
			"stroke": "black",
			"stroke-width": "0.1px",
			text: "To use the rotating diver's bezel, you click on\
			it \nuntil the triangle aligns with the minute hand. \nThen\
			as time goes on, you can keep track of \nhow much time has elapsed since you\
			last \nlooked at your watch, like divers do."
		});

		diversBezel.click(function () {
			pearl.animate({ transform: pearl.attr("transform") + "R-6," + 400 + "," + 400 }, 150);
			diversBezel.animate({ transform: pearl.attr("transform") + "R-6," + 400 + "," + 400 }, 150);
		});

	}

	var glass = paper.image("glassNew.png", 200, 200, 400, 400);

	rotatingBezel();
//______________________________________________________________________________
//
    startTime();   //      _____ _             _   
	startDate();   //     /  ___| |           | |  
//	                      \ `--.| |_ __ _ _ __| |_ 
//                         `--. \ __/ _` | '__| __|
//                        /\__/ / || (_| | |  | |_ 
//                        \____/ \__\__,_|_|   \__|
//
};
