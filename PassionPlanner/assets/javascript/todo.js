//this widget implements a todo widget using persistence of firebase

//todo list firebase reference
var todoarea = database.ref("/todo");

//Event handler to handle submit click within widget
$("#todo-widget").on("click","#todo-form #todo-button", function(e){

    e.preventDefault(); //do not refresh window when submitted

    var todo = $("#todo-input").val().trim();  //grab value from form text input
    console.log("to: "+todo);

    todoarea.push({
    todoItem: todo,
    });

    $('#todo-form')[0].reset();   //clear input field
});

//append todo item to todo list
todoarea.on("child_added", function(todotext) {

    var todo_div = $("<div>");
    var todo_item = $("<input>");    //create new todo list object
    var todo_label = $("<label>");

    todo_label.text(todotext.val().todoItem);  //append todoitem text to new list item
    todo_label.attr("for","checkbox-item");
    todo_label.attr("class","form-check-label");
    todo_item.attr("type","checkbox");
    todo_item.attr("id","checkbox-item");
    todo_item.attr("class","form-check-input");
    todo_div.attr("class","form-check border-bottom pb-2 pt-2");

    todo_div.append(todo_item,todo_label);  //form final element

    $("#todo-list").append(todo_div);   //add todo item to the user list

});

//if item is checked we need to purge it
$("#todo-widget").on("click","#checkbox-item", function(e) {

    console.log("I was checked");
    // lets loop through existing sticky notes, find one that matches, then delete it!
    var content = $(this).parent().find('label').text();//.text();
    console.log("todo content: "+content);
    todoarea.once('value').then(function(snapshot) {

        snapshot.forEach(function(snapshot1) {
            console.log(snapshot1.key);
            console.log(snapshot1.val().todoItem);
            if (snapshot1.val().todoItem == content) {  //does child content match content of sticky note clicked?

                const key = snapshot1.key;
                console.log("key found: "+ key);
    
                // delete stickynote node from firebase
                todoarea.child(key).remove();

            }
        });
    });
    $(this).closest("div").remove();  //also remove it in DOM for current instance
});