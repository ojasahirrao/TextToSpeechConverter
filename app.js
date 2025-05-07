async function convertText() {
  const textInput = document.getElementById('text-input');
  const audioPlayer = document.getElementById('audio-player');
  const text = textInput.value.trim();

  if (!text) {
    alert('Please enter some text!');
    audioPlayer.src = "";
    return;
  }

  const response = await fetch(`https://3mw4nkipq1.execute-api.ap-south-1.amazonaws.com/dev/speech?text=${encodeURIComponent(text)}`);

  if (!response.ok) {
    alert("Error generating audio.");
    return;
  }

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  audioPlayer.src = audioUrl;
}

function clearText() {
  document.getElementById('text-input').value = "";
  document.getElementById('audio-player').src = "";
}