
document.getElementById('mode-change').addEventListener('click', function () {

    document.body.classList.toggle('light-theme'); // クラスの切り替え toggle付いてたら外す。
    document.body.classList.toggle('dark-theme'); // クラスの切り替え toggle付いてたら外す。
  
    // ボタンの文字変更
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('mode-change').innerHTML = 'Light Mode'; // 文字列をLight Modeに変更
    } else {
        document.getElementById('mode-change').innerHTML = 'Dark Mode'; // 文字列をDark Modeに変更
    }
});