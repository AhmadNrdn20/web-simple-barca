const Salam = prompt('Ucapkan salam dalam Agama Islam?')
alert('Walaikumsalam Sobat Gocek!');
alert("Més Que Un Club")

const UbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
  document.body.style.backgroundColor = 'lightblue';
}

document.getElementById('btn').onclick = function change_image() {
  document.getElementById('image').src="./photo/trio rme.jpg";
}

document.getElementById('reset').onclick = function change_image() {
  document.getElementById('image').src="./photo/trio msn.jpg";
}
