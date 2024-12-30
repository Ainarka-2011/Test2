let months = document.querySelector(".months");

////1
let winter = document.getElementById("winter");
winter.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('https://w-dog.ru/wallpapers/9/12/292383886999068/noch-sneg-zima-priroda.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  months.innerHTML = "";

  months.innerHTML = `
        <div class="month monthWinter">December</div>
        <div class="month monthWinter">January</div>
        <div class="month monthWinter">February</div>
    `;
});

////2
let spring = document.getElementById("spring");
spring.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('https://priroda.club/uploads/posts/2022-07/1656870468_2-priroda-club-p-krasota-vesennei-prirodi-priroda-krasivo-f-2.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  months.innerHTML = "";

  months.innerHTML = `
        <div class="month monthSpring">March</div>
        <div class="month monthSpring">April</div>
        <div class="month monthSpring">May</div>
    `;
});

////3
let summer = document.getElementById("summer");
summer.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('https://www.new-walls.com/media/1b/cd/80/1687626029/50a292db33eb0aea7a8e9071330ca61f.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  months.innerHTML = "";

  months.innerHTML = `
        <div class="month monthSummer">June</div>
        <div class="month monthSummer">July</div>
        <div class="month monthSummer">August</div>
    `;
});

////4
let autumn = document.getElementById("autumn");
autumn.addEventListener("click", () => {
  document.body.style.backgroundImage =
    "url('https://7themes.su/_ph/27/27812649.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  months.innerHTML = "";

  months.innerHTML = `
        <div class="month monthAutumn">September</div>
        <div class="month monthAutumn">October</div>
        <div class="month monthAutumn">November</div>
    `;
});
