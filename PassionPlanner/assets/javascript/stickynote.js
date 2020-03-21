//This widget creates stick notes that the user can generate for quick reminders

//sticky notes
var stickyarea = database.ref("/stickynotes");

//Event handler to handle submit click within widget
$("#sticky-widget").on("click","#sticky-form #sticky-button", function(e){

    e.preventDefault(); //do not refresh window when submitted

    var note = $("#sticky-input").val().trim();  //grab value from form text input
    console.log("Note: "+note);

    stickyarea.push({
    stickynote: note,
    });

    $('#sticky-form')[0].reset();   //clear input field
});

//event handler to handle case where user wants to delete the sticky note
$("#sticky-widget").on("click",".sticky-note", function(e) {

    e.preventDefault();    //do not refresh page
    var content = $(this).text().trim();
    console.log("sticky text of object being removed: "+ content);

    //test
    // stickyarea.once('value').then(function(snapshot) {
    //     var prospectId = snapshot.key ;
      
    //     snapshot.forEach(function(snapshot1) {
    //       console.log(snapshot1.key); // e.g. "http://..."
    //       snapshot.forEach(function(snapshot2) {
    //         console.log(snapshot2.value); // e.g. "20170116"
    //       });
    //     });
    //   });

    // lets loop through existing sticky notes, find one that matches, then delete it!
    stickyarea.once('value').then(function(snapshot) {

        snapshot.forEach(function(snapshot1) {
            console.log(snapshot1.key);
            console.log(snapshot1.val().stickynote);
            if (snapshot1.val().stickynote == content) {  //does child content match content of sticky note clicked?

                const key = snapshot1.key;
                console.log("key found: "+ key);
    
                // delete stickynote node from firebase
                stickyarea.child(key).remove();

            }
        });
    });
    $(this).remove();  //also remove it in DOM for current instance
});

//append sticky notes as added
stickyarea.on("child_added", function(stickytext) {

    var stickyNote = $("<div>");    //create new sticky note object

    stickyNote.text(stickytext.val().stickynote);  //stick note text inside the sticky note
    stickyNote.attr("class","sticky-note text-center mt-2 mb-2");

    $("#sticky-widget").prepend(stickyNote);   //append sticky note to sticky widget area

});