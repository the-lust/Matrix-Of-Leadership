(function () {
  var key = "moL-theme";
  function apply(t) {
    document.documentElement.setAttribute("data-theme", t);
    var el = document.getElementById("themeBtn");
    if (el) el.textContent = t === "dark" ? "☀" : "☾";
    try { localStorage.setItem(key, t); } catch (e) {}
  }
  function current() {
    try {
      var saved = localStorage.getItem(key);
      if (saved === "dark" || saved === "light") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.addEventListener("DOMContentLoaded", function () {
    apply(current());
    var btn = document.getElementById("themeBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
      });
    }
  });
})();