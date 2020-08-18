(function main(window) {
  function start() {
    const $content = document.getElementById("content");
    $content.classList.add("content--yellow");
  }

  window.addEventListener("load", start)
})(window)