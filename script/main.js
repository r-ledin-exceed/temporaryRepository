$(function() {
let markerCounter = 2,
    i=0,
    arr = [{
        name: "123",
        id: Math.random(),
        state: true,
    },
    {
        name: "124",
        id: Math.random(),
        state: false,
    }];


    // input done
    $("#taskInput").keyup(function(event) {
        let inputVal = $("#taskInput").val();
        if((event.keyCode == 13) && (inputVal != "")) {
            let task = $(`<li><input type="checkbox" id="checkbox_check">
            <span id="span" class="inactive">`+inputVal+`</span></li>`);
            $("#task").append(task);
   
        };

    });

    // mark done
    $("#mainMarker").click(function() {
        if ((markerCounter % 2) == 0) {
            $("input:checkbox").prop("checked", true);
            $(".inactive").toggleClass("active").removeClass("inactive");
        } else {
            $("input:checkbox").prop("checked", false);
            $(".active").removeClass("active").toggleClass("inactive");
        };
    markerCounter++;
    });


checkbox_check

    // checking
    $("#checkbox_check").click(function() {
        $("input:checkbox").prop("checked", true);
        $(".inactive").toggleClass("active").removeClass("inactive");     
    });

 




    // filtration



    // rename
    $('#span').dblclick(function() { 
        $(this).val().hide();
    });


    // left items
    $("input").on("click", function() { 
        $('#outputField').text($('input:checked').val() + ' items left');
    });

}); 

