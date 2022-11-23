let audio = document.querySelector('audio');

function play() {
	audio.muted = false;
	audio.currentTime = 0;
	audio.play();
	document.removeEventListener('keypress', play());
}

document.body.addEventListener('keypress', play());
