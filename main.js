function openStream() {
    const config = {audio:true, video:true};
 return navigator.mediaDevices.getUserMedia(config);   
}
function playStream(idVideoTag, stream) {
    const video = $(document.getElementById(idVideoTag));
    video.srcObject = stream;
    video.play();
}
openStream()
.then(stream => playStream('localStream',stream));
