export let playSound = (fileName) => {
	var audio = document.createElement('audio');
	audio.src = fileName
	playAudio()
	async function playAudio() {
			try {
				await audio.play();
			} catch(err) {
			}
		}
}
