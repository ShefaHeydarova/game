let last = [];
let count = 1;
let time = 15;

function table() {
  let first = [];
  let rand;
  let number = 0;

  for (i = 0; i < 16; i++) {
    first[i] = i + 1;
  }

  for (let i = 0; i < 16; i++) {
    rand = Math.floor(Math.random() * first.length);
    last[i] = first[rand];
    first.splice(rand, 1);
  }

  let screen = "";
  for (let i = 0; i < 4; i++) {
    screen += `<tr>`;

    for (let j = 0; j < 4; j++) {
      screen += `<td id="td${last[number]}" onclick="Click(${last[number]})" >${last[number]}</td>`;
      number++;
    }
    screen += `</tr>`;
  }
  document.getElementById("tbl").innerHTML = screen;
}

table();

function Click(say) {
  let setir = document.getElementById("td" + say);

  if (say == count) {
    setir.style.backgroundColor = "green";
    setir.style.color = "white";
    count++;
  } else {
    setir.style.backgroundColor = "red";
    setir.style.color = "white";
    Stop();
    setTimeout(() => {
      gameOver();
    }, 300);
  }
}

function Time() {
  document.getElementById("clock").innerHTML = time;
  time--;
  if (time > -1 && count == 17) {
    alert("Siz qalibsiniz..Tebrikler..");
    Stop();
    confirm("Oyuna təkrar başlamaq istəyirsinizmi?");
    count = 1;
    table();
    time = 15;
    Time();
    set = setInterval(Time, 1000);
  } else if (time == -1) {
    Stop();
    setTimeout(() => {
      gameOver();
    }, 300);
  }
}

Time();

let set = setInterval(Time, 1000);

function Stop() {
  clearInterval(set);
}

function gameOver() {
  alert("Oyun bitdi. Uduzdunuz");

  if (confirm("Oyuna təkrar başlamaq istəyirsinizmi?")) {
    count = 1;
    table();
    time = 15;
    Time();
    set = setInterval(Time, 1000);
  }
}
