!function(e){Drupal.behaviors.csgov_theme_BackToTop={attach:function(o,t){var i=e("body, html"),a=e(".back-to-top__link",o);e(window).scroll(function(){250<e(this).scrollTop()?a.addClass("is-visible"):a.removeClass("is-visible")}),a.click(function(o){i.animate({scrollTop:0},800,function(){i.attr("tabindex","-1").focus().removeAttr("tabindex")}),o.preventDefault()})}}}(jQuery);