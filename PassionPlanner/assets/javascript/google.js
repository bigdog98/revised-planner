// google calendar info

var googlearea = database.ref("/googlecal");    //firebase folder location reference

// delete single calendar entry if delete key pressed (could support multiple cals per user in future TBD)
$("#google-widget").on("click","#google-remove button", function(e){

    e.preventDefault(); // disable default submit button function

    // delete calendar link from firebase
    googlearea.once('value').then(function(snapshot) {
        snapshot.forEach(function(snapshot1) {
            console.log(snapshot1.key);
            console.log(snapshot1.val().calendar);
            //if (snapshot1.val().calendar == content) {  //does child content match content of sticky note clicked?

                const key = snapshot1.key;
                console.log("key found: "+ key);
                googlearea.child(key).remove();

            //}
        });
    });
    $("#google-calendar").closest("div").empty();  //also remove it in DOM for current instance
    $("#google-form").addClass("d-block").removeClass("d-none");
    $("#google-remove").addClass("d-none").removeClass("d-block");
});

//Add calendar link user pastes into the input textbox (need to add some kind of form validation?)
$("#google-widget").on("click","#google-form #google-add", function(e){

    e.preventDefault(); //do not refresh window when submitted

    console.log("hello world");
    var calendar = $("#google-input").val().trim();  //grab value from form text input
    console.log("calendar address: "+calendar);

    $('#google-calendar').html(calendar);
    //we are going to be fancy and strip default width/height and make responsive!
    $('#google-calendar').removeAttr('width').removeAttr("height");
    $('#google-calendar').addClass("responsive-iframe");
    calendar = $("#google-calendar").html();
    console.log("new calendar",calendar);

    googlearea.push({
    calendar: calendar,
    });

    
    $('#google-form')[0].reset();   //clear form on submission
    $("#google-form").attr("class","d-none");
    $("#google-remove").attr("class","d-block");
});

//if calendar entry already exists in DB
googlearea.on("child_added", function(googlecal) {
    $("#google-form").addClass("d-none").removeClass("d-block");
    $("#google-remove").addClass("d-block").removeClass("d-none");

    console.log("calendar detected",googlecal.val().calendar);
    $("#google-calendar").html(googlecal.val().calendar);   
    $('#google-calendar').removeAttr('width').removeAttr("height");
    $('#google-calendar').addClass("responsive-iframe");

});