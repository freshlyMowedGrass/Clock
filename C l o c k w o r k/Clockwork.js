

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
		
		var baton1_7 = paper.path("M 495 250 l -180 290 ");
		var baton5_11 = paper.path("M 495 545 l -180 -300");
		var baton3_9 = paper.path("M 220 400 l 360 0 ");
		var baton8_2 = paper.path("M 550 300 l -300 180 ");
		var baton10_4 = paper.path("M 255 300 l 300 200");
		var baton12_6 = paper.path("M 400 230 l 0 340");

		var indicesBLocker = paper.circle( 400, 400, 150 ).attr({fill: ' #e6e6e6', stroke: " "});

		var lcd = paper.rect( 365, 437, 70, 25 );
		lcd.attr({ fill: "90-#001a09-#bfbfbf", stroke: "#999999" });

		var atThree = paper.rect( 445, 390, 70, 20 );
		atThree.attr({ fill: " #ffffb3", stroke: "" });

		function numberFace() {
			var display = paper.text( 400, 270, "12" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 400, 530, "6" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 265, 400, "9" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 535, 400, "3" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 465, 290, "1" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 330, 510, "7" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 510, 340, "2" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 280, 460, "8" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 510, 460, "4" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 470, 510, "5" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 290, 340, "10" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
			"stroke-width":"1px",
			"stroke-linecap": "bevel",
			"stroke-linejoin": "bevel"});
			var display = paper.text( 335, 290, "11" ).attr({'font-size': 25, 'font-family': 'Arial', "stroke":"#808080",
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
		displaytext.attr({fill: "#e6e6e6", font: "17px Calibri"});
			
		var dayDate = paper.text(480, 400);
		dayDate.attr({fill: "black", font: "15px Calibri"});
		
		var button = paper.rect(630, 380, 30, 50, 10);
		button.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var button2 = paper.rect(630, 300, 30, 50, 10);
		button2.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var button3 = paper.rect(630, 500, 30, 50, 10);
		button3.attr({'stroke-width': 0, fill: '90-#cccccc-#fff-#8c8c8c'});

		var crystal = paper.circle(400, 400, 200);
		crystal.attr({fill: 'white','fill-opacity': 0.25,'stroke-width': 1, stroke: "#f2f2f2",});
		
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

function startDate() {
	
		var windowDate = new Date();
		var year = windowDate.getFullYear();
		var month = windowDate.getMonth();
		var day = windowDate.getDate();
		
		button2.click(function(){ 
			dayDate.attr({text: day + "|" + month + "|" + year });
	    });

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

