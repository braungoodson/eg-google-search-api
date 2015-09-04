google.load('search',1);
google.setOnLoadCallback(function(){
  var op = new google.search.SearcherOptions();
  op.setExpandMode(google.search.SearchControl.EXPAND_MODE_CLOSED);
  var sc = new google.search.SearchControl();
  sc.setSearchCompleteCallback(this, function(){
    var s = arguments[1];
    if (s.results && s.results.length > 0) {
      for (var i = 0; i < s.results.length; i++) {
        var r = s.results[i];
        console.log(r);
      }
    }
  });
  sc.addSearcher(new google.search.NewsSearch(),op);
  sc.draw(document.getElementById('search-control'));
  sc.execute('ceres news');
});
