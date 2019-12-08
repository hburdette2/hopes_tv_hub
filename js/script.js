$('form').on('submit',(event)=> {
    event.preventDefault();
    const userInput = $('input[type = "text"]').val();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://frecar-epguides-api-v1.p.rapidapi.com/bigbangtheory/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "frecar-epguides-api-v1.p.rapidapi.com",
		"x-rapidapi-key": "305ca3a9b5msh75ec895f0dfc0bbp14a8d4jsn4403bfbdd419"
	}
}

$.ajax(settings).done(
     (data => {
        $('#number').html(data[1][0].number);
        $('#release_date').html(data[1][0].release_date);
        $('#season').html(data[1][0].season);
        $('#show.title').html(data[1][0].show);
        $('#title').html(data[1][0].title);
       
     }))})
