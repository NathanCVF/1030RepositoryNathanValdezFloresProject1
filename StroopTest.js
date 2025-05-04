<script>

const colorimages = (
        "https://cdn.glitch.global/214b7bd9-ddce-4bf1-bac1-4ffadabaf84b/GreenTextBlue.png?v=1746130416529",
        "https://cdn.glitch.global/214b7bd9-ddce-4bf1-bac1-4ffadabaf84b/GreenTextGreen.png?v=1746130421079",
        "https://cdn.glitch.global/214b7bd9-ddce-4bf1-bac1-4ffadabaf84b/GreenTextRed.png?v=1746130424760",
        "https://cdn.glitch.global/214b7bd9-ddce-4bf1-bac1-4ffadabaf84b/RedTextRed.png?v=1746130380095",
        "https://cdn.glitch.global/214b7bd9-ddce-4bf1-bac1-4ffadabaf84b/RedTextBlue.png?v=1746130388360",
)



    function img_rnd(Images) {


      var randomIndex = Math.floor(Math.random() * images.length);
      randomimage.src = images[randomIndex];
    }
   const imgElement = document.getElementById("randomImage");

<img id="colorimages" src="" alt="Random Image">
  
</script>

