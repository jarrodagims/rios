(function($) {
  $(document).ready(function() {
    //associate each waypoint with one list item in nav-sidebar

    $(".waypoint").each(function() {
      var self = $(this);

      var inview = new Waypoint.Inview({
        element: self,
        enter: function() {
          $(self.attr("data-target")).addClass("active");
        },
        entered: function() {},
        exit: function() {},
        exited: function() {
          $(self.attr("data-target")).removeClass("active");
        }
      });

      $(this).waypoint({
        handler: function() {},
        offset: 0
      });
    });

    $(".sidebar-link").click(function(e) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        500,
        "linear"
      );
    });

    //stick nav
    function stickyExample() {
      var $stickyElement = $(".sticky");

      if ($stickyElement.length) {
        sticky = new Waypoint.Sticky({
          element: $stickyElement[0]
        });
      }
    }

    stickyExample();
  });
})(jQuery);
