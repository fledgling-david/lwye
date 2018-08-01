window.onload=function(){
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


// 京东楼层
//点击li 滚动到对应的位置
        $('.main-jdlc-small').click(function(){
            //获取指定的li
            var index=$(this).index();
            //alert(index);
            //当前楼层距离顶部的位置
            //console.log($('.floor').eq(index).offset().top)

            var top=$('.mj-floor').eq(index).offset().top;

            // $('.main-jdlc-small').eq(index).css('background','red').siblings().css('background','#14CADF');

            //$('body,html').scrollTop(top);
            //加动画
            $('body,html').animate({
                scrollTop:top
            },500);

        })

        //获取每个楼层距离顶部的高度
        var heights=[];

        $('.mj-floor').each(function(){
            //给数组添加数据 每一个高度
            //向一个数组的尾部添加一个或者多个元素
            heights.push($(this).offset().top);
        });
        //获取每个楼层距离顶部的高度
        console.log($('.mj-floor1').offset().top);
        console.log($('.mj-floor2').offset().top);



        //当前文档的滚动监听事件
        $(window).scroll(function(){
            //获取现在的滚动距离
            var top=$(window).scrollTop();
            //alert(top);

            //声明下标变量
            var index2;
            //遍历每一个楼层距离顶部的高度
            for(var i=0;i<heights.length;i++){
                //1F 高度>=100 <2F的高度
                if(top>=heights[i] && top<heights[i+1]){
                    //找到和1F对用的li的下标css 背景红色
                    index2=i;
                    $('.main-jdlc-small').eq(index2).css('background','red').siblings().css('background','#14CADF');
                    break;
                //top >=6个
                }else if(top>=heights[heights.length-1]){
                    //index重新赋值
                    index2=heights.length-1;
                    //显示第七个的样式
                    $('.main-jdlc-small').eq(index2).css('background','red').siblings().css('background','#14CADF');
                    break;
                }
            }
        });




// scroll
         /*
        1.通过判断滚动条的位置》200
        2.改变div 定位方式 静态定位 固定定位
        3.通过判断滚动条的位置《200
        4改变div 定位方式 固定定位 静态定位
    */
    //获取指定div元素
    var dddd=document.getElementById('main-jdlc-small-wrap');

    //滚动事件
    window.onscroll=function(){
        //alert(11);

        //scrollTop值 兼容处理
        var yyyy=document.documentElement.scrollTop||window.pageYOffset;

        // console.log(yyyy);

        //判断y>=400
        if(yyyy>=945){
            $(dddd).slideDown();
        }else if(yyyy<945){
            //回到原来的位置
            $(dddd).hide();

        }
    }






})

}