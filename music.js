let audio = document.querySelector('audio');

function play() {
	audio.muted = false;
	audio.currentTime = 0;
	setTimeout(() => { audio.play() }, 1000);
	document.removeEventListener('click', play());
}

document.body.addEventListener('click', play());
