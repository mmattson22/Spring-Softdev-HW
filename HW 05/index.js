var republicans = [['Iowa',30,true],['New Hampshire',23,true],['South Carolina',50,true],['Nevada',30,true],['Alabama',50,true],['Alaska',28,true],['Arkansas',40,true],['Colorado',37,true],['Georgia',76,true],
['Massachusetts',42,true],['Minnesota',38,true],['North Dakota',28,true],['Oklahoma',43,true],['Tennessee',58,true],['Texas',155,true],['Vermont',16,true],['Virginia',49,true],['Wyoming',29,true],['Kansas',40,true],
['Kentucky',46,true],['Louisiana',46,true],['Maine',23,true],['Puerto Rico',23,true],['Hawaii',19,true],['Idaho',32,true],['Michigan',59,true],['Mississippi',40,true],['Washington, DC',19,true],['Florida',99,true],
['Illinois',69,true],['Missouri',52,true],['North Carolina',72,true],['Ohio',66,true],['Arizona',58,false],['Utah',40,false],['Wisconsin',42,false],['New York',95,false],['Connecticut',28,false],['Delaware',16,false],
['Maryland',38,false],['Pennsylvania',71,false],['Rhode Island',19,false],['Indiana',57,false],['Nebraska',36,false],['West Virginia',34,false],['Oregon',28,false],['Washington',44,false],['California',172,false],['Montana',27,false],
['New Jersey',51,false],['New Mexico',24,false],['South Dakota',29,false]];

var democrats = [['Iowa',52,true],['New Hampshire',32,true],['South Carolina',59,true],['Nevada',43,true],['Alabama',60,true],['Alaska',20,false],['Arkansas',37,true],['Colorado',78,true],['Georgia',117,true],
['Massachusetts',116,true],['Minnesota',93,true],['North Dakota',23,false],['Oklahoma',42,true],['Tennessee',75,true],['Texas',251,true],['Vermont',26,true],['Virginia',109,true],['Wyoming',18,false],['Kansas',37,true],
['Kentucky',60,false],['Louisiana',59,true],['Maine',30,true],['Puerto Rico',67,false],['Hawaii',35,false],['Idaho',32,true],['Michigan',147,true],['Mississippi',41,true],['Washington, DC',46,false],['Florida',246,true],
['Illinois',182,true],['Missouri',84,true],['North Carolina',121,true],['Ohio',160,true],['Arizona',85,false],['Utah',37,false],['Wisconsin',96,false],['New York',291,false],['Connecticut',71,false],['Delaware',31,false],
['Maryland',118,false],['Pennsylvania',210,false],['Rhode Island',33,false],['Indiana',92,false],['Nebraska',30,true],['West Virginia',37,false],['Oregon',74,false],['Washington',118,false],['California',548,false],['Montana',27,false],
['New Jersey',142,false],['New Mexico',43,false],['South Dakota',25,false]];

var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var democratic = false;

var maxDel = 195;

var changeParty = function(){

    var barLength = d3.scale.linear()
	.domain([0, maxDel])
	.range([0, x]);

    d3.select(".barChart")
	.selectAll("div")
	.remove();

    d3.select(".barChart")
	.selectAll("div")
	.data(
	    function(){
		if (democratic){
		    return democrats;}
		else{
		    return republicans;}})
	.enter().append("div")
	.transition()
	.duration(2000)
	.style("width", function(d) {return barLength(d[1])+ "px";})
	.style("background-color",
	       function(d){
		   if (d[2] && democratic){
		       return "blue";}
		   else if (d[2] && !democratic){
		       return "red";}
		   else{
		       return "grey";}})
	.text(function(d) {return d[0]+" - Delegates: "+d[1];});

    if (democratic){
	democratic = false;
	maxDel = 195;
	d3.select("key")
	    .style("color","blue")
	    .text("Blue = Allotted");
	d3.select(".button")
	    .style("background-color", "red")
	    .text("See Republican Primary Results");
	d3.select("p")
	    .html("<b>Democratic Primaries</b><br>Total Delegate Count: 4,765<br>Number of Delegates Allotted: 2,500<br>Number of Delegates Not Yet Allotted: 2,265<br>")
	    .style("color","blue");
    }

    else if (!democratic){
	democratic = true;
	maxDel = 620;
	d3.select("key")
	    .style("color","red")
	    .text("Red = Allotted");
	d3.select(".button")
	    .style("background-color", "blue")
	    .text("See Democratic Primary Results");
	d3.select("p")
	    .html("<b>Republican Primaries</b><br>Total Delegate Count: 2,472<br>Number of Delegates Allotted: 1,423<br>Number of Delegates Not Yet Allotted: 1,049<br>")
	    .style("color","red")
    }
};

changeParty();

var switchParty = document.getElementById("switchParty");
switchParty.addEventListener("click",changeParty);
