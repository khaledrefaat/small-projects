const video_video = document.getElementById('video');
const btn_button = document.getElementById('btn');

const selectMediaStream = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		video_video.srcObject = mediaStream;
		video_video.onloadedmetadata = () => {
			video_video.play();
		};
	} catch (err) {
		console.log(`Whoops, error here: ${err}`);
	}
};

// on load
btn_button.addEventListener('click', async () => {
	btn_button.disabled = true;

	// start picture in picture
	await video_video.requestPictureInPicture();

	// reset button
	btn_button.disabled = false;
});

selectMediaStream();
