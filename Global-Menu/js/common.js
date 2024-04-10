/* ==================================================
 common.js
 javascriptを定義
================================================== */

/* ==================================================
 ヘッダーをHTMLに出力
================================================== */
const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "include/header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    // 以下 header.htmlを処理するためのコード
    const header = document.querySelector('#js-header');
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};
includeHeader.send();

/* ==================================================
 フッターをHTMLに出力
================================================== */
const includeFooter = new XMLHttpRequest();
includeFooter.open("GET", "include/footer.html", true);
includeFooter.onreadystatechange = function () {
  if (includeFooter.readyState === 4 && includeFooter.status === 200) {
    const footerHTML = includeFooter.responseText;
    // 以下 footer.htmlを処理するためのコード
    const footer = document.querySelector('#js-footer');
    footer.insertAdjacentHTML("afterbegin", footerHTML);
  }
};
includeFooter.send();

/* ==================================================
 ハンバーガーメニューを表示
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 定数hamburgerにHTML(document)から取得してきた#js-hamburgerを代入
  const hamburger = document.querySelector('#js-hamburger');

  // 定数globalNavにHTML(document)から取得してきた#js-navを代入
  const globalNav = document.querySelector('#js-nav');

  hamburger.addEventListener('click', function () {
    globalNav.classList.toggle("is-active");
  });
});
