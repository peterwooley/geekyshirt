(function() {

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

}).call(this);
