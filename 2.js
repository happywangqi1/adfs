$(document).ready(function(){

  $('.li').hover(function(){
    $(this).append("<span class='edit'>修改</span><span class='del'>删除</span>")
    // 弹窗
    $(".edit").click(function(){
      $(".zz").css("display","block");

      // var input1 = document.getElementsByClassName(".name");
      // var value1 = input1.value;
      // console.log(value1);
      // var need1 = document.getElementById('name')
      // need1.value = value1;

      // 修改个人信息
      $("#name").val($(this).parent().children(".name").text());
      // console.log($(this).parent().children());
      $("#age").val($(this).parent().children(".age").text())
      var sex = $(this).parent().children(".sex").text()
      $("input[type='radio'][value="+sex+"]").attr("checked",sex)
      $("#email").val($(this).parent().children(".email").text());
      index = $(this).parent().index();
      $(".qd").click(function(){
        $("li").eq(index).children(".name").text($("#name").val())
        $("li").eq(index).children(".age").text($("#age").val())
        $("li").eq(index).children(".sex").text($("input[type='radio']:checked").val())
        $("li").eq(index).children(".email").text($("#email").val())
        $(".zz").css("display","none")
        $(".qx").click(function(){
          $(".zz").css("display","none")
        })
      })
    });

    // 删除人员信息
    $(".del").click(function(){
      $(".zz").css("display","block");
      $(".jp").css("display","block");

      $(".addtitle").html("删除人员信息")
      $("#name").val($(this).parent().children(".name").text());
      $("#age").val($(this).parent().children(".age").text())
      var sex = $(this).parent().children(".sex").text()
      $("input[type='radio'][value="+sex+"]").attr("checked",sex)
      $("#email").val($(this).parent().children(".email").text());

      index = $(this).parent().index();
      console.log(index);
      $(".qd").click(function(){
        console.log($(this).parent().text());

        $("li").eq(index).remove();
        $(".zz").css("display","none")

      });
    })
  },function(){
    $(this).children(".edit").remove();
    $(this).children(".del").remove();
  });


});
