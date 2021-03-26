$(function() {
let markerCounter = 2,
    arr = [],
    id=0;

    // INPUT
    $("#taskInput").keyup(function(event) {    

        let obj = {};
        obj.name = $("#taskInput").val();
        obj.task__id = id;
        obj.state = false;

        if((event.keyCode == 13) && (obj.name != "")) {

            arr.push(obj);

            let task = $(`<li id="id`+obj.task__id+`" class="list"><input type="checkbox" class="inactive" id="checkbox `+obj.state+ +id+`"/>
            <span id="span`+id+`" class="inactive">`+obj.name+`</span></li>`);
            $("#task").append(task);

            $("#taskInput").val("");
            id++;
        
            console.log(arr);
            
        };
    });

    // TOGGLE SDELAN NAKONEC
    let getter = document.getElementById('task');  
    console.log(getter);

    getter.onclick = function(e) {

        document.getElementById.innerHTML = e.target.id;
        let numNeed = document.getElementById.innerHTML.toString().slice(-1);
        if (document.getElementById.innerHTML.includes("checkbox")) {
        $("#span" + numNeed).toggleClass("active").removeClass("inactive");
        
        }
    };



    // NEED A BIT FIX
    $("#mainMarker").click(function() {
        if (((markerCounter % 2) == 0) && ($("input:checkbox").prop("checked") == false)) {
            $("input:checkbox").prop("checked", true);
            for (let k = 0; k < id; k++)
            $("#span" + k).toggleClass("active").removeClass("inactive");
        } else {
            $("input:checkbox").prop("checked", false);
            for (let k = 0; k < id; k++)
            $("#span" + k).toggleClass("inactive").removeClass("active");
        };
    markerCounter++;
    });


        //???????
        
    // $("#outputField").text(+counter+ " элементов осталось");



    // //clear
    // $(".main__cleaner").click(function() {
    //     arr.length = 0;
    //     // displayArr();
    // })

        // // displaying arr
    // function displayRemoveArr() {
    //     arr.forEach(element => {
    //                 let task = $(`<li id="`+element.task__id+`"><input type="checkbox">
    //                 <span id="span" class="inactive">`+element.name+`</span></li>`);
    //                 $("#task").append(task);         
    //     });
    // };


    // $("li").click(function() {
    //     console.log("smth");
    // })

}); 

