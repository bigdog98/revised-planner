// my api 38665cbc-8b63-4405-b13f-d83ec34704c9

//URL for query for Trending Meme Widget
var queryURL = "https://api.imgflip.com/get_memes"


//vars to capture JSON returns

var titleDisplay1 = $("<div>");
var imgDisplay1 = $("<img>");

$.ajax({
    url: queryURL,
    method: "GET"
    })

    // After the call is complete
    .then(function(response) {
        var a = Math.floor(Math.random() * response.data.memes.length);
        console.log(response);  //log out endpoint JSON object

        //get data
        var title = response.data.memes[a].name;
        var url = response.data.memes[a].url;

        

        
        
        var explanation = response.explanation;
        console.log(title+"Dmitriy");


        titleDisplay1.text(title);
        titleDisplay1.attr("class","text-center");
        imgDisplay1.attr("src",url);
        imgDisplay1.attr("class","img-fluid m-1");
        imgDisplay1.attr("alt",explanation);

        //append image of day content to widget in index.html
       $("#meme-widget").append(imgDisplay1, titleDisplay1);

});
