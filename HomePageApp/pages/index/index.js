/**
 * index.js
 * 
 * 首页，页面渲染
 */
(function($, modals, ngapp){

  // 导航组件创建接口
  var m_navbarBuild = function(container, opt,index, type){
    return new modals.NavBarModal(container, opt, index, type);
  };

  // 大页面导航创建
  (function(){
    var container, opt;
    container = $("#pagenav").find(".page-nav-bar")[0];
    opt = [
    ["首页", "#"]
    ,["CODE", "pages/coder"]
    ,["Comic", "pages/comic"]
    ,["社团", "pages/social"]
    ,["创作", "pages/create"]
    ,["日记", "pages/diary"]
    ];

    m_navbarBuild(container, opt, 0);
  })();

  // 小页面导航创建
  (function(){
    var container, opt;
    var $btn =  $("#pagenavsm").find(".page-navsm-btn");
    container = $("#pagenavsm").find(".page-navsm-bar")[0];
    opt = [
    ["首页", "#"]
    ,["CODE", "pages/coder"]
    ,["Comic", "pages/comic"]
    ,["社团", "pages/social"]
    ,["创作", "pages/create"]
    ,["日记", "pages/diary"]
    ];

    // 点击“导航”按钮 打开导航列表
    m_navbarBuild(container, opt, 0, false);
    $btn.on("click",
      function(e){
        var bar = $(e.target.parentNode).find(".page-navsm-bar");
        bar.toggleClass("active");
        return false;
      }
    );
    // 点击其他部分隐藏导航列表
    $("body").on("click",
      function(e){
        $(this).removeClass("active");
      }.bind(container)
    );
  })();

  // 加载轮播组件
  (function(){
    var container, imgArr, interval, option;
    container = $("#pageslider")[0];
    interval = 3000;
    option = 0;
    imgArr = [
      ["commonres/slider_index/001.jpg"]
      ,["commonres/slider_index/002.jpg"]
      ,["commonres/slider_index/003.jpg"]
      ,["commonres/slider_index/004.jpg"]
      ,["commonres/slider_index/005.jpg"]
    ];
    var slider0 = new modals.SliderModal(container, imgArr, interval, option);
  })();


})(window.jQuery, window.modals, window.ngapp);