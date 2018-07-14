$( window ).on( "load", function () {
    // Make sure we wait to attach our handlers until the DOM is fully loaded.
    $( function () {
        $( ".devour-burger" ).on( "click", function ( event ) {
            var id = $( this ).data( "id" );
            var newDevour = true;
            console.log( newDevour );
            var newDevourState = {
                devoured: 1
            };

            // Send the PUT request.
            $.ajax( "/burger" + id, {
                type: "PUT",
                data: newDevourState
            } ).then(
                function () {
                    console.log( "Burger Devoured", newDevour );
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } );

        $( ".create-form" ).on( "submit", function ( event ) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var newBurger = {
                burger: $( "#createBurger" ).val().trim()
                        };

            // Send the POST request.
            console.log(newBurger);
            $.ajax( "/burgers", {
                type: "POST",
                data: newBurger
            } ).then(
                function () {
                    console.log( "created new burger" );
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } );

    } );
});