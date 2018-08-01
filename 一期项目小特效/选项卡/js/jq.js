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





    //轮播图


    //alert($)
  //自动轮播 点击数字显示对应图片 点击下一张上一张

  //声明下标
  var now=0;
  //获取li标签的长度
  var len=$('#lunbo>.img>li').length;
  // console.log(len)

  function run(){
    //自动轮播
    s=setInterval(function(){
      //当前隐藏 图片数字
      $('#lunbo>.img>li').hide();
      $('#lunbo>.num>li:eq('+now+')').css('background','rgba(0,0,0,0)');
      // $('#lunbo>.num>li:eq('+now+')').css('border-color','none');
      //下一张显示
      //判断now
      if(now>=len-1){
        now=0;
      }else{
        now++;
      }

      //显示数字和图片
      $('#lunbo>.img>li:eq('+now+')').fadeIn();
      $('#lunbo>.num>li:eq('+now+')').css('background','rgb(256,256,256)');
      $('#lunbo>.num>li:eq('+now+')').css('border-color','rgba(0,0,0,0.2)');
    },2000)
  }

  run();

  //鼠标移入移出事件
  $('#lunbo').mouseover(function(){
    //清除定时 显示箭头
    clearInterval(s);
    $('.left-btn,.right-btn').css('display','block');
  }).mouseout(function(){
    run();
    $('.left-btn,.right-btn').css('display','none');
  })


  //数字对应图片
  $('#lunbo>.num>li').mouseover(function(){
    //清除定时
    clearInterval(s);
    //当前隐藏 图片数字
    $('#lunbo>.img>li').hide();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgba(0,0,0,0)');
    // $('#lunbo>.num>li').css('background','#6699ff');

    //获取当前li的下标
    now=$(this).index();
    //alert(now);
    $('#lunbo>.img>li:eq('+now+')').fadeIn();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgb(256,256,256)');
    $('#lunbo>.num>li:eq('+now+')').css('border-color','rgba(0,0,0,0.2)');
    // $('#lunbo>.num>li:eq('+now+')').css('background','#ff6699');
  })

  //left right的点击
  $('.left-btn').click(function(){
    //当前隐藏 图片数字
    $('#lunbo>.img>li').hide();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgba(0,0,0,0)');
    // $('#lunbo>.num>li').css('background','#6699ff');

    now--;

    //往左点 --
    if(now<0){
      now=len-1;
    }
    //显示图片数字
    $('#lunbo>.img>li:eq('+now+')').fadeIn();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgb(256,256,256)');
    $('#lunbo>.num>li:eq('+now+')').css('border-color','rgba(0,0,0,0.2)');
    // $('#lunbo>.num>li:eq('+now+')').css('background','#ff6699');
  })

  //right的点击
  $('.right-btn').click(function(){
    //当前隐藏 图片数字
    $('#lunbo>.img>li').hide();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgba(0,0,0,0)');
    // $('#lunbo>.num>li').css('background','#6699ff');
    now++;
    //往右点 --
    if(now>len-1){
      now=0;
    }
    //显示图片数字
    $('#lunbo>.img>li:eq('+now+')').fadeIn();
    $('#lunbo>.num>li:eq('+now+')').css('background','rgb(256,256,256)');
    $('#lunbo>.num>li:eq('+now+')').css('border-color','rgba(0,0,0,0.2)');
    // $('#lunbo>.num>li:eq('+now+')').css('background','#ff6699');
  })


  $('.tab_t ul li').mouseenter(function(){
        //显示当前li 其余隐藏
        var index=$(this).index();
        // $('.tab .red-line').addClass('red-line-hover');

        //获取当前下标

        $('.tab_c>div').eq(index).show().siblings().hide();

    })



// 倒计时秒杀
        var p1 = document.getElementById('p1');
        var p2 = document.getElementById('p2');
        var p3 = document.getElementById('p3');
        // console.log(p1);
        // console.log(p2);
        // console.log(p3);

        var yoo = function(){
            var Dateone = new Date();

            // var lu= Dateone.setFullYear(2018,4,20);

            var yo = Dateone.setHours(23,59,59);

            var Datetwo = new Date();

            var outtime = Datetwo.getHours();

            var time = Dateone.valueOf() - Datetwo.valueOf();


            var aa = time/(1000*60*60)

            p1.innerHTML= Math.floor(aa);

            time = time%(1000*60*60);

            var bb = time/(1000*60);

            time = time%(1000*60);

            p2.innerHTML = Math.floor(bb);

            var cc = time/(1000);

            p3.innerHTML = Math.floor(cc);
        }

        yoo();
        setInterval(function(){

            var Dateone = new Date();

            // var lu= Dateone.setFullYear(2018,4,20);

            var yo = Dateone.setHours(23,59,59);

            var Datetwo = new Date();

            var outtime = Datetwo.getHours();

            var time = Dateone.valueOf() - Datetwo.valueOf();


            var aa = time/(1000*60*60)

            p1.innerHTML= Math.floor(aa);

            time = time%(1000*60*60);

            var bb = time/(1000*60);

            time = time%(1000*60);

            p2.innerHTML = Math.floor(bb);

            var cc = time/(1000);

            p3.innerHTML = Math.floor(cc);

        },1000)



    //兼容各种浏览器
    //京东倒计时轮播图一


     var w=800;

      var l=0;

      var timer=null;

      var len3=$("#scroll-ul li").length*2; //复制了一份图片，长度变了。

      //复制一份图片，是为了解决第一张图片切换到最后一张或 最后一张切换到第一张时，图片区域会出现空白，用户体验不友好。

      // 页面一加载，就把ul定位到追加图片的第一张（本身图片在前，追加图片在后。）

      //当图片位置到第一份图片第二张时，马上把图片定位到第二份的第一张,图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张,

      //这样图片后面或前面还有一张图片，切换时不会留下空白。（关键之处）

    //加载后图片排列像这样：1  2  3  4  5  1  2  3  4  5

     $("#scroll-ul").append($("#scroll-ul").html()).css({'width':len3*w, 'left': -len3*w/2});



    //自动每8秒切换一次

    // timer=setInterval(init,8000);

    function init(){

         $(".scroll .next").trigger('click'); //当页面一加载就触发next按钮的点击事件，用trigger的好处是减少重复代码,如果不用，就要把按钮click事件里代码全部复制过来，因为加载的代码和点击next按钮代码和效果相同，所以就用trigger触发执行click里面代码。

    }



    $("#scroll-ul li").hover(function(){

         clearInterval(timer);

        },function(){

            timer=setInterval(init,8000);

       });



      $(".prev").click(function(){

          l=parseInt($("#scroll-ul").css("left"))+w;  //这里要转成整数，因为后面带了px单位

             showCurrent(l);

          });

          $(".next").click(function(){

             l=parseInt($("#scroll-ul").css("left"))-w;  //这里要转成整数，因为后面带了px单位

            showCurrent(l);

      });

       function showCurrent(l){     //把图片的左右切换封装成一个函数

       if($("#scroll-ul").is(':animated')){ //当ul正在执行动画的过程中，阻止执行其它动作。关键之处，不然图片切换显示不完全，到最后图片空白不显示。

          return;

       }

          $("#scroll-ul").animate({"left":l},500,function(){

                if(l==0){ //当图片位置到第一份图片第二张时，马上把图片定位到第二份的第一张。注意这里的设置的css一定到写在animate动画完成时的执行  //函数里。否则图片只是一瞬间回到第一张，但是没有向右的动画效果。 我在做的时候，用的不是css,而是用animate()定位到第二个第一张，结果切换时，是反方向的运动，一直觉得无论怎样，图片方向都会发生变化 ，弄得花了一天时间才找到原因，所以一定 要用css。

               $("#scroll-ul").css("left",-len3*w/2);



             }else if(l==(1-len3)*w){ //图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张。从而显示的是第一份最后一张。

                 $("#scroll-ul").css('left',(1-len3/2)*w);

                }

            });

         }

         //京东倒计时轮播图二
      var w2=200;

      var l2=0;

      var timer2=null;

      var len2=$("#scroll-ul2 li").length*2; //复制了一份图片，长度变了。

      //复制一份图片，是为了解决第一张图片切换到最后一张或 最后一张切换到第一张时，图片区域会出现空白，用户体验不友好。

      // 页面一加载，就把ul定位到追加图片的第一张（本身图片在前，追加图片在后。）

      //当图片位置到第一份图片第二张时，马上把图片定位到第二份的第一张,图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张,

      //这样图片后面或前面还有一张图片，切换时不会留下空白。（关键之处）

    //加载后图片排列像这样：1  2  3  4  5  1  2  3  4  5

     $("#scroll-ul2").append($("#scroll-ul2").html()).css({'width':len2*w2, 'left': -len2*w2/2});



    //自动每8秒切换一次

    timer2=setInterval(init2,3000);

    function init2(){

         $(".scroll2 .next2").trigger('click'); //当页面一加载就触发next按钮的点击事件，用trigger的好处是减少重复代码,如果不用，就要把按钮click事件里代码全部复制过来，因为加载的代码和点击next按钮代码和效果相同，所以就用trigger触发执行click里面代码。

    }



    $("#scroll-ul2 li").hover(function(){

         clearInterval(timer2);

        },function(){

            timer2=setInterval(init2,3000);

       });



      $(".prev2").click(function(){

          l2=parseInt($("#scroll-ul2").css("left"))+w2;  //这里要转成整数，因为后面带了px单位

             showCurrent2(l2);

          });

          $(".next2").click(function(){

             l2=parseInt($("#scroll-ul2").css("left"))-w2;  //这里要转成整数，因为后面带了px单位

            showCurrent2(l2);

      });

       function showCurrent2(l2){     //把图片的左右切换封装成一个函数

       if($("#scroll-ul2").is(':animated')){ //当ul正在执行动画的过程中，阻止执行其它动作。关键之处，不然图片切换显示不完全，到最后图片空白不显示。

          return;

       }

          $("#scroll-ul2").animate({"left":l2},500,function(){

                if(l2==0){ //当图片位置到第一份图片第二张时，马上把图片定位到第二份的第一张。注意这里的设置的css一定到写在animate动画完成时的执行  //函数里。否则图片只是一瞬间回到第一张，但是没有向右的动画效果。 我在做的时候，用的不是css,而是用animate()定位到第二个第一张，结果切换时，是反方向的运动，一直觉得无论怎样，图片方向都会发生变化 ，弄得花了一天时间才找到原因，所以一定 要用css。

               $("#scroll-ul2").css("left",-len2*w2/2);



             }else if(l2==(1-len2)*w2){ //图片位置到最后一张时（第二份最后一张）时，就把图片定位到第一份最后一张。从而显示的是第一份最后一张。

                 $("#scroll-ul2").css('left',(1-len2/2)*w2);

                }

            });

         }

         // scroll
         /*
        1.通过判断滚动条的位置》200
        2.改变div 定位方式 静态定位 固定定位
        3.通过判断滚动条的位置《200
        4改变div 定位方式 固定定位 静态定位
    */
    //获取指定div元素
    var dddd=document.getElementById('search');

    //滚动事件
    window.onscroll=function(){
        //alert(11);

        //scrollTop值 兼容处理
        var yyyy=document.documentElement.scrollTop||window.pageYOffset;

        // console.log(yyyy);

        //判断y>=400
        if(yyyy>=400){
            $(dddd).slideDown();
        }else if(yyyy<400){
            //回到原来的位置
            $(dddd).hide();

        }
    }

})










