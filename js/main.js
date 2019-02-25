(() => {

	let aud =		document.querySelector('audio'),
		play =		document.querySelector('#playButton'),
		pause =		document.querySelector('#pauseButton'),
		rewind =	document.querySelector('#rewindButton'),
		tracks =	document.querySelectorAll('.trackHolder');
		// , lets it know that there are more selectors and ; tells it that it's the end
		// bah Spelling is hard Kat...

		// write the functions for the audio element
		function playAudio () {
			aud.play ();
		}

		function pauseAudio () {
			aud.pause(true);
		}

		// function rewindAudio() {
		// 	aud.currentTime (0)
		// }
		// this isnt right because of a bad function

		function rewindAudio() {
			aud.currentTime = 0 ;
		}
		//  ^ if the console comes up with Nul on a function i.e. (0) try giving it a value = # ;

		function swapSource() {
			let currentTrack = this.dataset.curenttrack;

			aud.src = `audio/${currentTrack}`;
			aud.load();
			aud.play();
		}


		// add event handling
		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);

		tracks.forEach(track => track.addEventListener("click", swapSource));


})();