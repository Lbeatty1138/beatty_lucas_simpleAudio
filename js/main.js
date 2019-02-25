(() => {

	let aud =		document.querSelector('audio'),
		play =		document.querSelector('#playButton'),
		pause =		document.querSelector('#pauseButton'),
		rewind =	document.querSelector('#rewindButton');
		// , lets it know that there are more selectors and ; tells it that it's the end

		// write the functions for the audio element
		function playAudio () {
			aud.play ();
		}

		function pauseAudio () {
			aud.pause(true);
		}

		function rewindAudio() {
			aud.currentTime = 0 ;
		}

		// add event handling
		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);


})();