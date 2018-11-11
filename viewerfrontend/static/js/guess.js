// Polls an AJAX endpoint for data on predictions of
// which number combination was pressed
setInterval(function () {
	$.ajax({
		url: '/data/',
		type:'GET',
		success: function(data) {
			guess_number = data.guess;
			guess_probability = data.probability;
			mapGuess(guess_number);

			// Plot graphs for the probabilities of each of
			// the four digits to appear
			for (i = 0; i < guess_probability.length; i++) {
				chartname = ".chart" + i;
				plotGraph(guess_probability[i], chartname);
			}
		}
	});
}, 5000);

// Puts the top 5 guesses on the slots in display
function mapGuess(data) {
	for (i = 0; i < data.length; i++) {
		target_div = "num" + (i+1);
		number = data[i];
		$('#' + target_div).text(number);
	}
}

// Plots a graph to the appropriate svg canvas 
function plotGraph(data, chartname) {
	d3.selectAll(chartname + " > *").remove();
	var margin = 50;
	var width = 300;
	var height = 200;

	var x = d3.scale.ordinal()
		.domain([0,1,2,3,4,5,6,7,8,9])
	    .rangeBands([0,width]);
	    
	var y = d3.scale.linear()
		.domain([0,1])
	    .range([height,0]);

	var chart = d3.select(chartname);

	chart.attr("width",width + 2*margin)
	    .attr("height",height + 2*margin)
	    .append("g")
	    .attr("transform","translate(" + margin + "," + margin + ")")
	    .selectAll("rect")
		.data(data)
	    .enter().append("rect")
	    .attr("width",width/12)
	    .attr("height",function(d) { return height - y(d); })
	    .attr("x",function(d,i) { return x(i); })
	    .attr("y",function(d) { return y(d); });


	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom")
	    .ticks(1);

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left")
	    .ticks(5);

	chart.append("g")
	    .attr("transform", "translate(" + margin + "," + (height+margin) + ")")
	    .attr("class","axis")
	    .call(xAxis);
	    
	chart.append("g")
	    .attr("transform", "translate(" + margin + "," + margin + ")")
	    .attr("class","axis")
	    .call(yAxis);

	// Adds proper formatting for the axes fonts and the bar colors
	$(".axis").css("font-size", "0.5em");
	$("rect").css("fill", "#87cefa");
}