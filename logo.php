<?php
    // echo "Hullo woild";

?>
<!-- THIS IS WHAT WAS IN THE INDEX FOR STARTERS -->
<!-- <picture class="logo">
    <source srcset="https://cdn.bcms.app/uploads/rb21_bmi_eventlogo_bf3bc2bc96.avif" type="image/avif">
    <source srcset="https://cdn.bcms.app/uploads/rb21_bmi_eventlogo_b05a4d8ac6.webp" type="image/webp">
    <img src="https://cdn.bcms.app/uploads/rb21_bmi_eventlogo_6003b38c02.jpg" alt="R&B/Hip-Hop 2021 Awards">
</picture> -->

<!-- THIS IS STANDARD SRCSET/SIZES IMPLEMENTATION. NICE -->
<!-- <img srcset="assets/logo480.avifs 480w,
             assets/logo800.avifs 800w"
     sizes="(max-width: 800px) 480px,
            800px"
     src="logo800.jpg"
     alt="BMI Awards"> -->
     <!-- THIS SYNTAX IS NOT WORKING -->

<!-- COMPENSATING FOR PIXEL DENSITY -->
<!-- <img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg"
     alt="Elva dressed as a fairy"> -->

<!-- SAME BUT DIFFERENT SYNTAX W PICTURE/SOURCE -->
<!-- <picture class="logo">
  <source media="(max-width: 600px)" srcset="assets/logo480.webp">
  <source media="(min-width: 601px)" srcset="assets/logo800.webp">
  <img src="assets/logo800.jpg" alt="BMI Awards London">
</picture> -->
<!-- THIS WORKS -->

<!-- BY THE BOOK MEDIA CHOOSER -->
<!-- <picture>
  <source type="image/svg+xml" srcset="pyramid.svg">
  <source timage/webp" srcset="pyramid.webp">
  <img src="pyramid.png" alt="regular pyramid built from four equilateral triangles">
</picture> -->

<!-- *** -->

<!-- OUR LITTLE COMBINATION OF MEDIA CHOOSER AND RESOLUTION SWITCHING -->
<picture class="logo" >
  <!-- COMBINES BOTH #1 -->
    <!-- <source type="image/avif" srcset="assets/logo480.avifs 480w, assets/logo800.avifs 800w" sizes="(max-width: 600px) 480px, 800px">
    <source type="image/webp" srcset="assets/logo480.webp 480w, assets/logo800.webp 800w" sizes="(max-width: 600px) 480px, 800px"> -->
    <!-- <img src="assets/logo800.jpg" alt="london awards"> -->
    <!-- FAILS -->

    <!-- #2 -->
  <source media="(max-width: 600px)" type="image/avif" srcset="assets/logo480.avifs">
  <source media="(max-width: 600px)" type="image/webp" srcset="assets/logo480.webp">
  <source media="(min-width: 601px)" type="image/avif" srcset="assets/logo800.avifs">
  <source media="(min-width: 601px)" type="image/webp" srcset="assets/logo800.webp">
  <img src="assets/logo800.jpg" alt="BMI Awards London">
  <!-- Resolution switcher works in localhost but media chooser MUST be tested in browserstack to see if it works! -->
   
</picture>