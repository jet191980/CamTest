document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    
    function setupCamera(stream) {
        video.srcObject = stream;
        video.play();
    }

    function handleError(error) {
        console.error('カメラのアクセスに失敗しました:', error);
        alert('カメラへのアクセスを許可してください。');
    }

    function selectBackCamera(cameras) {
        const backCamera = cameras.find(camera => camera.label.toLowerCase().includes('back'));
        if (backCamera) {
            navigator.mediaDevices.getUserMedia({
                video: { deviceId: backCamera.deviceId }
            }).then(setupCamera).catch(handleError);
        } else {
            alert('背面カメラが見つかりませんでした。');
        }
    }

    navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
            const cameras = devices.filter(device => device.kind === 'videoinput');
            selectBackCamera(cameras);
        })
        .catch(handleError);

    video.addEventListener('click', function() {
        video.play();
    });
});
