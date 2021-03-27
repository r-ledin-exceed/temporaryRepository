$(function() {
    let arr = [],
    id = 0;

    function itemsLeft() {
        let count = 0;
        arr.forEach(obj => {     
            if (!obj.isChecked) { count++ };
            $("#outputField").text(
                `${count} items left`
            )
        });
    }


    // INPUT
    $("#taskInput").keyup(function(event) {    

        let obj = {
            name:$("#taskInput").val(),
            id: id,
            isChecked: false,
        };

        if((event.keyCode == 13) && (obj.name != "")) {
            arr.push(obj);

            $("#task").append($(`
            <li id="list${obj.id}"><input type = "text" id="rewrite${obj.id}" class="hidden">
            <input type="checkbox" id="${obj.id}"/>
            <span id="span${obj.id}" class="inactive onDblClick">${obj.name}</span></li>
            `));

            id++;
            $("#taskInput").val("");
            console.log(arr);
            itemsLeft();
        };
       
    });

    // TOGGLE SDELAN NAKONEC
    let getter = document.getElementById('task');  

    getter.onclick = function(e) {
        
        document.getElementById.innerHTML = e.target.id;
        console.log(e.target.id);

        arr.forEach(obj => {
            // debugger
            if (obj.id === +e.target.id) { 

                if (!obj.isChecked) {
                    obj.isChecked = true;
                    $("#span"+e.target.id).toggleClass("active").removeClass("inactive"); 
                } else {
                    obj.isChecked = false;
                    $("#span"+e.target.id).toggleClass("inactive").removeClass("active"); 
                }

            };  

        });
        itemsLeft();
    };

    $("#mainMarker").click(function() {

        arr.forEach(obj => {

            if (!($("#"+obj.id).prop("checked"))) {
                $("#span"+obj.id).toggleClass("active").removeClass("inactive");
                $("#"+obj.id).prop("checked", true);
                obj.isChecked = true;
            } else {
                $("#span"+obj.id).toggleClass("inactive").removeClass("active");
                $("#"+obj.id).prop("checked", false);
                obj.isChecked = false;
            } 
            
            // if ($("input:checkbox").prop("checked")) {
            //     $("#span"+obj.id).toggleClass("inactive").removeClass("active");
            //     $("#"+obj.id).prop("checked", false);
            //     obj.isChecked = false;
            // };
            // if (!obj.isChecked) { 
            //     obj.isChecked = true;
            //     $("#span"+obj.id).toggleClass("active").removeClass("inactive");
            //     $("#"+obj.id).prop("checked", true);
            // } else {
            //     obj.isChecked = false;
            //     $("#span"+obj.id).toggleClass("inactive").removeClass("active");
            //     $("#"+obj.id).prop("checked", false);
            // }
        });
        itemsLeft();

    });

    $(".main__filter_active").click(function() {

        arr.forEach(obj => {
            if (obj.isChecked) { 
                $("#list"+obj.id).css("display", "none");
            } else {
                $("#list"+obj.id).css("display", "block");
            }
        });

    });

    $(".main__filter_done").click(function() {

        arr.forEach(obj => {
            if (obj.isChecked) { 
                $("#list"+obj.id).css("display", "block");
            } else {
                $("#list"+obj.id).css("display", "none");
            }
        });
    });

    $(".main__filter_all").click(function() {

        arr.forEach(obj => {
                $("#list"+obj.id).css("display", "block");

        });
    });

    $(".main__cleaner").click(function() {

        arr.forEach(obj => {
            
            if(obj.isChecked) {
                indexToDelete = arr.findIndex(function() {
                    return obj.id;
                });
                arr.slice(indexToDelete, 1);
                $("#list"+obj.id).remove();
                
            };
        });
    });

  
    getter.ondblclick = (function(e) {
        document.getElementById.innerHTML = e.target.id;
        
        arr.forEach(obj => {
            
            if ("span"+obj.id === e.target.id) { 
                
                inputVal = obj.name
                $("#rewrite"+obj.id).removeClass("hidden").val(inputVal);
                $("#"+obj.id).toggleClass("hidden");
                $("#span"+obj.id).toggleClass("hidden");

                $("#rewrite"+obj.id).keyup(function(event){
                    if((event.keyCode == 13) && (obj.name != "")) {
                        obj.name = $("#rewrite"+obj.id).val()

                        $("#span"+obj.id).text(obj.name)

                        console.log(arr);

                        $("#rewrite"+obj.id).addClass("hidden");
                        $("#"+obj.id).removeClass("hidden");
                        $("#span"+obj.id).removeClass("hidden");
                    };
                });

            };

        });
    });

}); 