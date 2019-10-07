
$(document).ready(function(){
    
    $('button#meatycart').click(function(){

        var pizza = parseInt($('#pizzamopt option:selected').val());
        var crust = parseInt($('#crustmopt option:selected').val());
        var topping = parseInt($('#toppingmopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#somesingmeaty").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#hawaiiancart').click(function(){

        var pizza = parseInt($('#pizzahopt option:selected').val());
        var crust = parseInt($('#crusthopt option:selected').val());
        var topping = parseInt($('#toppinghopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#hawaiian").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#veggiecart').click(function(){

        var pizza = parseInt($('#pizzavopt option:selected').val());
        var crust = parseInt($('#crustvopt option:selected').val());
        var topping = parseInt($('#toppingvopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#veggie").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#peripericart').click(function(){

        var pizza = parseInt($('#pizzapopt option:selected').val());
        var crust = parseInt($('#crustpopt option:selected').val());
        var topping = parseInt($('#toppingpopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#periperi").text()+'</td>'+'<td id="total">'+cartCost+'</td>'+'</tr>');
        
    });

    // var costs = 0;
    // var totalCosts = [];
    
    // // $.each(totalCosts.push($(cartCost)));
    // // $.each($('tr#total'), function(){
    // //     totalcosts.push($(this).val());
    // // });
    
    // for(var p = 0; p < totalCosts.length; p++){
    //     costs += totalCosts[p];
    // };
    
    // $('button.order').click(function(){
    //     $('span#texttotal').text(costs);        
    // })
    
    $('button#deliv').click(function(){
        $('#maarea').toggle();
    })
    

    $('button#done').click(function(){

        var deliverSpot = $('input#location').val()
        
        if ($('input#location').val() !== ""){
            alert("Your pizza will be delivered to " + deliverSpot);
        } else {
            alert("Pick up at your nearest location! Bon apetite");
        };
    });
       

    event.preventDefault();
});

