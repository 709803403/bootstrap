// window.onload=function () {
//     $(document).ready(function () {
//         $("#banner").mouseout(function () {
//             console.log("离开");
//             $("#a").hide();
//             $("#b").hide();
//         });
//         $("#banner").mouseover(function () {
//             console.log("likai ");
//             $("#a").show();
//             $("#b").show();
//         })
//
//     });
// }


window.onload=function () {
    function $(id) {
        return document.getElementById(id);
    }
    $("banner").onmouseleave=function () {
        $("a").style.opacity="0";
        $("b").style.opacity="0";
    }
    $("banner").onmouseenter=function () {
        $("a").style.opacity="1";
        $("b").style.opacity="1";
    }


    //这里编写未完成，编写得到焦点和失去焦点的情况
    //把index.html中的div#mask去掉
//     var oMask=document.createElement("div");
//     oMask.id="mask";
//     $("myfigure").onmouseenter=function () {
//         this.appendChild(oMask);
//     }
//     $("myfigure").onmouseleave=function () {
//         this.removeChild(oMask);
//     }

    $("mask1").onmouseenter=$("mask2").onmouseenter=$("mask3").onmouseenter=$("mask4").onmouseenter=$("mask5").onmouseenter=$("mask6").onmouseenter=function () {
       this.style.opacity="0.7";
    }
    $("mask1").onmouseleave=$("mask2").onmouseleave=$("mask3").onmouseleave=$("mask4").onmouseleave=$("mask5").onmouseleave=$("mask6").onmouseleave=function () {
        this.style.opacity="0";
    }

    $("img-container1").onmouseenter=function () {$("card1").style.top="0";}
    $("img-container2").onmouseenter=function () {$("card2").style.top="0";}
    $("img-container3").onmouseenter=function () {$("card3").style.top="0";}
    $("img-container4").onmouseenter=function () {$("card4").style.top="0";}
    $("img-container5").onmouseenter=function () {$("card5").style.top="0";}
    $("img-container6").onmouseenter=function () {$("card6").style.top="0";}

    $("img-container1").onmouseleave=function () {$("card1").style.top="150px";}
    $("img-container2").onmouseleave=function () {$("card2").style.top="150px";}
    $("img-container3").onmouseleave=function () {$("card3").style.top="150px";}
    $("img-container4").onmouseleave=function () {$("card4").style.top="150px";}
    $("img-container5").onmouseleave=function () {$("card5").style.top="150px";}
    $("img-container6").onmouseleave=function () {$("card6").style.top="150px";}


}

