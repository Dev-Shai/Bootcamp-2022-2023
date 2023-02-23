// It's done when I have selected all the inside #songs elements in the html.
const songs = document.querySelectorAll("ul > li");

console.log(songs);

for (const song of songs) {
    song.classList.add ("red")
}
// It's done when I have iterated through the song collection with a for...of loop and added a class of red to each element.