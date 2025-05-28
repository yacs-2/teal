/**
This script will inject the global page header into the #gheader div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Jazmines Website</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/teal">Home</a></li><li><a href="/teal/photo-albums">Photos</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="#">Projects</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="#">Music</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/teal/web-dev">Web Development</a><ul><a href="/teal/wdsub/week1.html">Week 1</a></li><li><a href="/teal/wdsub/recipe.html">Week 2</a></li><li><a href="/teal/wdsub/anchors.html">Week 3</a></li><li><a href="/teal/wdsub/poem.html">Week 4</a></li><li><a href="/teal/wdsub/reviews.html">Week 5</a></li><li><a href="/teal/wdsub/week6.html">Week 6</a></li><li><a href="/teal/wdsub/band-page.html">Week 7</a></li><li><a href="/teal/wdsub/to-do.html">Week 8</a></li><li><a href="/teal/wdsub/pythag.html">Week 9</a></li><li><a href="/teal/wdsub/ttt.html">Week 10</a></li><li><a href="/teal/wdsub/time-keeper.html">Week 11</a></li></ul></li></ul></div>';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
