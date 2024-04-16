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
// 「window.addEventListener('load'」により最初に情報を全て取得してから以降の処理を行うことができる
window.addEventListener('load', () => {

  document.querySelector('#js-hamburger').addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('#js-nav').classList.toggle('is-active');
    document.querySelector('.header-hamburger__text').classList.toggle('is-active');
    
  });
});
