document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    // メディアデバイスを取得する
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }) // ビデオストリームを使用
            .then(function(stream) {
                video.srcObject = stream; // ビデオ要素にストリームを設定
            })
            .catch(function(error) {
                console.error('カメラのアクセスに失敗しました:', error);
            });
    } else {
        alert('ご使用のブラウザはカメラ機能をサポートしていません。');
    }
});
