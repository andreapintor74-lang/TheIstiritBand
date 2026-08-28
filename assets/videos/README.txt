Metti qui i tuoi video (formato MP4, H.264, consigliato max ~50-80 MB l'uno
per non appesantire troppo il sito).

Per usare un video locale al posto di un video YouTube, in index.html cerca
la sezione <section id="videos"> e sostituisci il blocco <iframe ...> con:

<video controls poster="assets/videos/copertina.jpg">
    <source src="assets/videos/nomefile.mp4" type="video/mp4" />
</video>

Se invece vuoi mantenere i video su YouTube, lascia pure gli <iframe> attuali
e usa questa cartella solo per materiale grezzo/backup.
