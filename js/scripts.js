
$(document).ready(function(){
    
    $('button#meatycart').click(function(){

        var pizza = parseInt($('#pizzamopt option:selected').val());
        var crust = parseInt($('#crustmopt option:selected').val());
        var topping = parseInt($('#toppingmopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#somesingmeaty").text()+'</td>'+'<td>'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#hawaiiancart').click(function(){

        var pizza = parseInt($('#pizzahopt option:selected').val());
        var crust = parseInt($('#crusthopt option:selected').val());
        var topping = parseInt($('#toppinghopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#hawaiian").text()+'</td>'+'<td>'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#veggiecart').click(function(){

        var pizza = parseInt($('#pizzavopt option:selected').val());
        var crust = parseInt($('#crustvopt option:selected').val());
        var topping = parseInt($('#toppingvopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#veggie").text()+'</td>'+'<td>'+cartCost+'</td>'+'</tr>');
        
    });

    $('button#peripericart').click(function(){

        var pizza = parseInt($('#pizzapopt option:selected').val());
        var crust = parseInt($('#crustpopt option:selected').val());
        var topping = parseInt($('#toppingpopt option:selected').val());

        var cartCost = pizza + crust + topping;

        $('table#list').append('<tr>'+'<td>'+ $("#periperi").text()+'</td>'+'<td>'+cartCost+'</td>'+'</tr>');
        
    });
    
    var total = [];

    

    event.preventDefault();
});

