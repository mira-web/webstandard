$(document).ready(function(){

    //라이트 박스
    $(".lightgallery").lightGallery({
        thumnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    }); 

    //윈도우 팝업
    $(".window").click(function(e){
        e.preventDefault();
        window.open("sample_popup.html","popup01","width=800, height=555, left=50, top=50, scrollbar=0, toolbar=0, menubar=0");
    });

    //레이어 팝업
    $(".layer").click(function(e){
        e.preventDefault();
        $("#layer").slideDown();
    });

    $("#layer .close").click(function(e){
        e.preventDefault();
        $("#layer").slideUp();
    });


    //탭메뉴
    var $tab_list = $(".tab_menu");

    $tab_list.find("ul ul").hide();  
    $tab_list.find("li.active > ul").show();

    function tabMenu(e){
        e.preventDefault();
        var $this = $(this); 
        $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    }

    $tab_list.find("ul > li > a").click(tabMenu).focus(tabMenu);   


    //배너
    $(".ban").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    //갤러리
    $(".gallery_img").slick({
        infinite:true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:300,
        fade:true,
        pauseOnHover:true  
    });

    $(".play").click(function(){
        $(".gallery_img").slick("slickPlay");
    });

    $(".pause").click(function(){
        $(".gallery_img").slick("slickPause");
    });

    $(".prev").click(function(){
        $(".gallery_img").slick("slickPrev");
    });

    $(".next").click(function(){
        $(".gallery_img").slick("slickNext");
    });



    $(".tit .btn").click(function(e){
        e.preventDefault();
        $("#cont_nav").slideToggle(200); 
        $(this).toggleClass("on"); 
    });
    
});    