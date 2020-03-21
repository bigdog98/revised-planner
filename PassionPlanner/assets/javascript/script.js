// Initialize Firebase
var config = {
apiKey: "AIzaSyA55J97GxQCq4biiQ5wlts8EsmfmsuCR74",
authDomain: "temp-click-counter.firebaseapp.com",
databaseURL: "https://temp-click-counter.firebaseio.com",
projectId: "temp-click-counter",
storageBucket: "temp-click-counter.appspot.com",
messagingSenderId: "92523455250"
};

firebase.initializeApp(config);

var database = firebase.database(); //reference to database


var username = database.ref("/name");

//store user name

$("#user-name").on("click","#name-button",function(e) {

    e.preventDefault();
    var name = $("#name-input").val().trim();
    console.log("name input crap: "+ name);

    $(this).closest("form").remove();

    username.push({
        name: name
    });

});

//add name if stored
username.on("child_added", function(name) {

    $("#user-name").closest("form").remove();
    $(".name-disp").text("Welcome, "+ name.val().name);

});

