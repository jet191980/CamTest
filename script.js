document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    // ビデオを再生するためのユーザーインタラクションを処理する
    video.addEventListener('click', function() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } }) // フロントカメラを指定
                .then(function(stream) {
                    video.srcObject = stream;
                })
                .catch(function(error) {
                    console.error('カメラのアクセスに失敗しました:', error);
                    alert('カメラへのアクセスを許可してください。');
                });
        }
    });
});
