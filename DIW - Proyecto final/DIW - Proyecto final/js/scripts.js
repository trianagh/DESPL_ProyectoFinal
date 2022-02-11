function suma() {

    var gv = 2.99;
    var total=0; 
    var productos=0;  
   
    
    $(".bolsos tr").each(function () {
        if (!$(this).hasClass("fila_princ")) {
            total += parseFloat($(this).find(".producto").text());
            productos++;  
               
        }      

    });
    
    preciofinal=(total+gv).toFixed(2);
    $(".total").text(preciofinal);
    $(".num_cart").text(productos);

    if(total==0){
        $(".total").text("No hay productos");
        $(".gastos_envio").hide();         
    }


}

$(document).ready(function () {
    suma();
    $(".eliminar1").click(function () {
        $(".fila1").remove();
        suma();
    });

    $(".eliminar2").click(function () {
        $(".fila2").remove();
        suma();
    });
    $(document).scroll(function () {
        
        if ($(this).scrollTop() > 0) {
            $('#totop').fadeIn(500);
        } else {
            $('#totop').fadeOut(500);
        }
    });
    $('#totop').click(function () {
        
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    
});