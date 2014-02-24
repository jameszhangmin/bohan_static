function add_favorite(a,title) {
  var url = 'http://www.'+document.domain;
  var title = document.title;
  title = title || a.title;
  try { // IE
    window.external.addFavorite(url, title);
  } catch(e) {
    try { // Firefox
      window.sidebar.addPanel(title, url, "");
    } catch(e) {
      if (/Opera/.test(window.navigator.userAgent)) { // Opera
      a.rel = "sidebar";
      a.href = url;
      return true;
    }
    alert('加入收藏失败，请使用 Ctrl+D 进行添加');
    }
  }
  return false;
}