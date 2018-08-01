$(function(){

//隐藏
    $('.icon-cuowuguanbiquxiao-fangkuang').click(function(){
        //淡出:透明度
        $('#advertising_container').fadeOut(500);
    })


    //li的鼠标移入事件
    $('#navigation_bar>ul:first-child>li,#myjd,#khfw,#wzdh,#c-left>ul>li').mouseenter(function(){
            $(this).children('div').stop().hide();
            $(this).children('div').show();
        });

        //li的鼠标移出事件
    $('#navigation_bar>ul:first-child>li,#myjd,#khfw,#wzdh,#c-left>ul>li').mouseleave(function(){
            $(this).children('div').hide();
        });

    //li的鼠标移入事件
    $('#sjjd').mouseenter(function(){
            $(this).children('#sjjd-img,#cart-img').stop().hide();
            $(this).children('#sjjd-img').show();

        });
        //li的鼠标移出事件
    $('#sjjd').mouseleave(function(){
            $(this).children('#sjjd-img,#cart-img').hide();
        });



     //li的鼠标移入事件
    $('#my_shopping_cart').mouseenter(function(){
            $('#cart-img').stop().hide();
            $('#cart-img').show();
        });

        //li的鼠标移出事件
    $('#my_shopping_cart').mouseleave(function(){
            $('#cart-img').hide();
        });














})
