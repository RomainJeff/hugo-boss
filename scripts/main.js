$(document).ready(function(){

	var i = 1;

	$("#2").fadeOut(1);
	$("#3").fadeOut(1);

	$('.right').click(function(){

		$("#"+i).fadeOut(500);
		i = ((i+1)%3)+1;
		$("#"+i).fadeIn(500);
		
		console.log(i)
	});

	$('.left').click(function(){

		$("#"+i).fadeOut(500);
		i--;
		if(i==0){ i = 3;}
		$("#"+i).fadeIn(500);
		console.log(i)
		
		
	});
});