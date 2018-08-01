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









  $('.tab_t div').mouseenter(function(){
    //显示当前li 其余隐藏
    $(this).addClass('selected').siblings().removeClass('selected');
    //获取当前下标
    var index=$(this).index();
    $('.tab_c>div').eq(index).show().siblings().hide();
  })


  /*//放大镜
  //small中move移动
        $('#p-m-l-small').mousemove(function(e){
            //move big显示
            $('#p-m-l-move,#p-m-l-big').show();

            //move的坐标
            var x=e.pageX-$(this).offset().left;
            var y=e.pageY-$(this).offset().top;
            //alert(x+':'+y)

            //鼠标居中-move一半宽高
            var x=x-$('#p-m-l-move').width()/2;
            var y=y-$('#p-m-l-move').height()/2;

            //边界判断
            //左边
            if(x<=0){
                x=0
            }
            //上边
            if(y<=0){
                y=0;
            }
            //left的最大值
            if(x>=$('#p-m-l-small').width()-$('#p-m-l-move').width()){
                x=$('#p-m-l-small').width()-$('#p-m-l-move').width();
            }

            //top的最大值
            if(y>=$('#p-m-l-small').height()-$('#p-m-l-move').height()){
                y=$('#p-m-l-small').height()-$('#p-m-l-move').height();
            }

            //move绑定坐标
            $('#p-m-l-move').css({left:x,top:y});

            //算大图和小图比例关系
            var scale=$('#p-m-l-big>img').width()/$('#p-m-l-small>img').width()
            // alert(scale);

            //big的移动距离=move距离*比例关系
            $('#p-m-l-big').scrollLeft(x*scale);
            $('#p-m-l-big').scrollTop(y*scale);

            //大图src=small的src
            $('#p-m-l-big>img').attr('src',$('#p-m-l-small>img').attr('src'))

        }).mouseout(function(){
            $('#p-m-l-move,#p-m-l-big').hide();
        });


        //点更换图片
        $('#p-m-l-dian>li>img').mouseover(function(){
            //small中img的src=当前img的src
            $('#p-m-l-small>img').attr('src',$(this).attr('src'));
        })*/


})
