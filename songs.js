$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    const loadSongs = $("#load-songs");
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list");

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    loadSongs.click(()=>{
        $.ajax("http://127.0.0.1:8080/songs.json").then(responsez => {
            console.log(responsez);
            const sectionSong = $("<section>").addClass("song");
            sectionSong.appendTo(songList)
            responsez.songs.forEach(element => {
                console.log(element);
                
                console.log(sectionSong);
                const header = $("<h1>").addClass("song__title").text(element.title)
                header.appendTo(sectionSong)
                
                const sectionDesc = $("<section>").addClass("song__description").text(`Performed by ${element.artist} on the album ${element.album}`)
                sectionDesc.appendTo(sectionSong)

            });
            
        })
    })

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})