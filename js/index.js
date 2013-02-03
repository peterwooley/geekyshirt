(function() {
  var _gaq;

  Zepto(function() {
    var current, date, li, _i, _len, _ref;
    date = new Date();
    if (date.getFullYear() !== 2013 || date.getMonth() !== 1) {
      return;
    }
    current = $(".calendar li:nth-child(" + date.getDate() + ")")[0];
    $(current).addClass('current');
    _ref = $(".calendar li");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      li = _ref[_i];
      if (li === current) {
        return;
      }
      $(li).addClass(" past");
    }
  });

  _gaq = _gaq || [];

  _gaq.push(['_setAccount', 'UA-255368-15']);

  _gaq.push(['_trackPageview']);

  (function() {
    var ga, s;
    ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(ga, s);
  })();

}).call(this);
