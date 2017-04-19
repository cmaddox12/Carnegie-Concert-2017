$(function() {

  // Cache selectors
  var lastId,
    topMenu = $("#nav-primary"),
    topMenuHeight = topMenu.outerHeight()+30,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      try {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      } catch (e) {
        // do nothing
      }
  });

  console.log(topMenuHeight);

  $(".masthead__menu-item").click(function () {
    $('input[type=checkbox]').removeAttr('checked');
    $(".masthead__menu-item").removeClass("active");
    $(this).addClass("active");
  });

  // Animated Scroll
  $("a[href*=\\#]:not([href=\\#])").click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    || location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topMenuHeight
        }, 1000, function() {
          window.location.hash = hash;
        });
        e.preventDefault();
      }
    }
  });

});
