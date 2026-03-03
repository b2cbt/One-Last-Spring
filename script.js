<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Untitled</title>
    

  </head>
    
  <body>
  <!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>8 Марта 💐</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg1:#fff1f6;
      --bg2:#f3f7ff;
      --card:#ffffffcc;
      --stroke:#2b2b2b;
      --text:#1e1e1e;
      --muted:#5a5a5a;
      --pink:#ff7fb1;
      --lav:#b7b6ff;
      --mint:#9ff3d3;
      --butter:#ffe7a3;
    }

    *{ box-sizing:border-box; }
    html,body{ height:100%; }
    body{
      margin:0;
      font-family:"Press Start 2P", system-ui, sans-serif;
      color:var(--text);
      background: linear-gradient(180deg, var(--bg2), var(--bg1));
    }

    .sky{
      min-height:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:24px;
      position:relative;
      overflow:hidden;
    }

    .sparkles{
      position:absolute; inset:0;
      background-image:
        radial-gradient(circle at 10% 20%, #ffffff 0 2px, transparent 3px),
        radial-gradient(circle at 70% 30%, #ffffff 0 1px, transparent 2px),
        radial-gradient(circle at 35% 70%, #ffffff 0 2px, transparent 3px),
        radial-gradient(circle at 90% 80%, #ffffff 0 1px, transparent 2px);
      opacity:.35;
      filter: blur(.2px);
      animation: twinkle 4s infinite ease-in-out;
    }
    @keyframes twinkle{
      0%,100%{ opacity:.25; transform:translateY(0); }
      50%{ opacity:.45; transform:translateY(-4px); }
    }

    .card{
      width:min(760px, 92vw);
      background:var(--card);
      border:4px solid var(--stroke);
      box-shadow: 10px 10px 0 #00000018;
      border-radius:18px;
      padding:22px;
      position:relative;
      backdrop-filter: blur(6px);
    }

    .badge{
      position:absolute;
      top:-14px; left:18px;
      background: linear-gradient(90deg, var(--lav), var(--pink));
      color:#111;
      border:3px solid var(--stroke);
      padding:10px 12px;
      border-radius:14px;
      font-size:12px;
      box-shadow: 6px 6px 0 #00000012;
    }

    h1{
      margin:22px 0 12px;
      font-size:18px;
      line-height:1.4;
    }

    .subtitle{
      margin:0 0 18px;
      color:var(--muted);
      font-size:12px;
      line-height:1.6;
    }

    .label{
      display:block;
      font-size:12px;
      margin:8px 0 10px;
    }

    .row{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
    }

    .input{
      flex:1 1 260px;
      border:3px solid var(--stroke);
      border-radius:14px;
      padding:14px 14px;
      font-family:inherit;
      font-size:12px;
      outline:none;
      background:#fff;
    }
    .input:focus{
      box-shadow: 0 0 0 4px #ff7fb133;
    }

    .btn{
      border:3px solid var(--stroke);
      background: linear-gradient(90deg, var(--mint), var(--butter));
      padding:14px 16px;
      border-radius:14px;
      font-family:inherit;
      font-size:12px;
      cursor:pointer;
      box-shadow: 6px 6px 0 #00000012;
      transition: transform .08s ease;
    }
    .btn:active{ transform: translate(2px,2px); box-shadow: 3px 3px 0 #00000012; }

    .btn-soft{ background: linear-gradient(90deg, #fff, #ffe0f0); }

    .hint{
      margin:12px 0 0;
      font-size:10px;
      line-height:1.6;
      color:var(--muted);
    }

    .error{
      margin:12px 0 0;
      font-size:10px;
      line-height:1.6;
      color:#b3003c;
      min-height:18px;
    }

    .footer{
      margin-top:18px;
      padding-top:12px;
      border-top:2px dashed #00000022;
      font-size:10px;
      color:var(--muted);
      line-height:1.6;
    }

    .message-box{
      border:3px solid var(--stroke);
      border-radius:14px;
      background:#fff;
      padding:16px;
      margin:12px 0 14px;
    }

    .message{
      margin:0;
      font-size:12px;
      line-height:1.8;
      white-space:pre-wrap;
    }

    .actions{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-top:6px;
    }

    .hidden{ display:none; }

    /* Пиксельные цветы */
    .flowers{
      position:absolute;
      inset:auto 0 0 0;
      height:220px;
      pointer-events:none;
    }

    .flower{
      position:absolute;
      bottom:22px;
      width:64px;
      height:140px;
      filter: drop-shadow(6px 6px 0 #00000010);
    }
    .f1{ left:8%; transform: rotate(-2deg); }
    .f2{ left:45%; transform: rotate(2deg) scale(1.05); }
    .f3{ right:10%; transform: rotate(-1deg) scale(.95); }

    .petal, .center, .stem, .leaf{
      position:absolute;
      image-rendering: pixelated;
    }

    .petal{
      width:20px; height:20px;
      border:3px solid var(--stroke);
      background: linear-gradient(135deg, #ffd1e5, #fff);
      border-radius:6px;
    }
    .p1{ left:22px; top:8px; }
    .p2{ left:40px; top:26px; }
    .p3{ left:22px; top:44px; }
    .p4{ left:4px; top:26px; }

    .center{
      width:18px; height:18px;
      border:3px solid var(--stroke);
      background: linear-gradient(135deg, var(--butter), #fff);
      border-radius:6px;
      left:23px; top:27px;
    }

    .stem{
      width:10px; height:70px;
      left:27px; top:64px;
      background: linear-gradient(180deg, #b8f7d7, #66d7a6);
      border:3px solid var(--stroke);
      border-radius:8px;
    }

    .leaf{
      width:18px; height:12px;
      background: linear-gradient(135deg, #a7f0d2, #eafff6);
      border:3px solid var(--stroke);
      border-radius:10px;
      top:92px;
    }
    .l1{ left:6px; transform: rotate(-12deg); }
    .l2{ left:36px; transform: rotate(12deg); }

    @media (max-width:420px){
      h1{ font-size:16px; }
      .badge{ font-size:11px; }
    }
  </style>
</head>

<body>
  <div class="sky">
    <div class="sparkles"></div>

    <div class="flowers" aria-hidden="true">
      <div class="flower f1">
        <div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div>
        <div class="center"></div><div class="stem"></div><div class="leaf l1"></div><div class="leaf l2"></div>
      </div>
      <div class="flower f2">
        <div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div>
        <div class="center"></div><div class="stem"></div><div class="leaf l1"></div><div class="leaf l2"></div>
      </div>
      <div class="flower f3">
        <div class="petal p1"></div><div class="petal p2"></div><div class="petal p3"></div><div class="petal p4"></div>
        <div class="center"></div><div class="stem"></div><div class="leaf l1"></div><div class="leaf l2"></div>
      </div>
    </div>

    <main class="card">
      <div class="badge">8 Марта</div>

      <!-- Блок ввода -->
      <section id="mainPage">
        <h1>Поздравление от 9 выживших</h1>
        <p class="subtitle">Введи своё имя и получи личное поздравление 💗</p>

        <form id="nameForm" autocomplete="off">
          <label class="label" for="nameInput">Твоё имя:</label>

          <div class="row">
            <input id="nameInput" class="input" type="text" placeholder="Например: Асхат" />
            <button class="btn" type="submit">ОК</button>
          </div>

          <p class="hint"> Запрещенные слова: геометрия, подруга амира, аяна...</p>
          <p id="error" class="error" aria-live="polite"></p>
        </form>

        <footer class="footer">Без негатива  от 11г ((</footer>
      </section>

      <!-- Блок поздравления -->
      <section id="greetPage" class="hidden">
        <h1 id="title">Поздравление 💐</h1>

        <div class="message-box">
          <p id="message" class="message"></p>
          <p id="message" class="message"></p>
<img id="bolatikImg" class="hidden"
     src="https://i.ibb.co/hJN5crmB/bolatik.png"
     alt="Болатик"
     style="max-width:100%; height:auto; display:block; margin:0 auto;">
                    <img id="bolatikImg" class="hidden" src="bolatik.png" alt="Болатик" style="max-width:100%; height:auto; display:block; margin:0 auto;">
        </div>

        <div class="actions">
          <button class="btn btn-soft" id="backBtn">← Назад</button>
          <button class="btn" id="copyBtn">Скопировать 💌</button>
        </div>

        <p id="copied" class="hint" aria-live="polite"></p>

        <footer class="footer">Пусть день будет тёплым и красивым как болатик </footer>
      </section>
    </main>
  </div>

  <script>
    function normalizeName(raw) {
      if (!raw) return "";
      let s = raw.trim().toLowerCase().replace(/\s+/g, " ");

      const map = { "ә":"а","ғ":"г","қ":"к","ң":"н","ө":"о","ұ":"у","ү":"у","һ":"х","і":"и" };
      s = s.replace(/[әғқңөұүһі]/g, ch => map[ch] || ch);

      return s;
    }

    const messages = {
            "болатик": " ",
      "дина": "Дина, с 8 Марта! 💐\nПусть этой весной у тебя будет много радостных моментов, нежных улыбок и тёплых людей рядом. Сияй ярко!",
      "асхат": "Асхат, с 8 Марта! 💐\nПусть этой весной у тебя будет много аян моментов, нежных аян и аян людей рядом. Сияй с аяной ярко!",
      "ернур": "Ернур, он такой добрый, умный, смелый, честный, внимательный, заботливый, ответственный, надёжный, искренний, харизматичный, весёлый, трудолюбивый, целеустремлённый, справедливый, открытый, терпеливый, креативный, талантливый, благородный, щедрый, понимающий, уверенный, спокойный, энергичный, позитивный, сильный, преданный, мудрый, обаятельный и вдохновляющий.",
      "лана": "Лана, с 8 Марта! 💐\nПусть этой весной у тебя будет много радостных моментов, нежных улыбок и тёплых людей рядом. Сияй ярко!",
      "нурай": "Нурай, с 8 Марта! 🌷\nПусть мечты становятся планами, планы — победами, а каждый день приносит спокойствие и счастье!",
      "леян": "Леян, с 8 Марта! ✨\nПусть в твоей жизни будет больше красивых событий, вдохновения и уютных моментов!",
      "аяна": "Аяна, с 8 Марта! 💖\nЖелаем улыбок, уверенности и самых добрых сюрпризов. Пусть весна подарит энергию!",
      "аружан": "Аружан, с 8 Марта! 🌸\nПусть будет много любви, тепла и ярких моментов. Пусть твои цели достигаются легко!",
      "саным": "Саным, с 8 Марта! 🌺\nПусть каждый день будет нежным, как весна, и сильным, как ты. Счастья и вдохновения!",
      "сийлар": "Сийлар, с 8 Марта! 💐\nПусть рядом будут искренние люди, классные идеи и приятные сюрпризы!",
      "анель": "Анель, с 8 Марта! 🌷\nПусть всё, что ты задумала, получается легко. Много улыбок и тепла!",
      "дарья": "Дарья, с 8 Марта! ✨\nПусть будет больше радости, спокойствия и уверенности в себе. Удачи во всём!",
      "айсулу": "Айсулу, с 8 Марта! 🌸\nПусть твоя доброта возвращается вдвойне, а каждый день радует чем-то светлым!",
      "аяулым": "Аяулым, с 8 Марта! 💖\nПусть глаза сияют, настроение будет лёгким, а рядом — поддержка и забота!",
      "айли": "Айли, с 8 Марта! 🌷\nПусть будет много вдохновения, ярких эмоций и спокойной уверенности!",
      "жансая": "Жансая, с 8 Марта! ✨\nПусть в жизни будет больше тепла, любви и смелых мечтаний!",
      "рахметова мадина": "Мадина Рахметова, с 8 Марта! 💐\nПусть эта весна принесёт радость, красивые моменты и уверенность в своих силах!",
      "нигина": "Нигина, с 8 Марта! 🌸\nПусть будет много нежности, уважения, любви и вдохновения. Улыбок тебе!",
      "майя": "Майя, с 8 Марта! ✨\nПусть будет больше счастья, приятных людей вокруг и крутых возможностей!",
      "умбетжанова мадина": "Мадина Умбетжанова, с 8 Марта! 🌷\nПусть будут лёгкие дни, сильные победы и много тепла!",
      "толганай": "Толганай, с 8 Марта! 💖\nПусть мечты сбываются красиво и вовремя. Весеннего настроения!"
    };

    const mainPage = document.getElementById("mainPage");
    const greetPage = document.getElementById("greetPage");
    const form = document.getElementById("nameForm");
    const input = document.getElementById("nameInput");
    const error = document.getElementById("error");
    const title = document.getElementById("title");
    const messageEl = document.getElementById("message");
    const backBtn = document.getElementById("backBtn");
    const copyBtn = document.getElementById("copyBtn");
    const copied = document.getElementById("copied");
    const bolatikImg = document.getElementById("bolatikImg");

function showGreet(nameKey) {
  const msg = messages[nameKey];

  if (nameKey === "болатик") {
    title.textContent = "Поздравление 💐";
    messageEl.textContent = "";
    bolatikImg.classList.remove("hidden");

    mainPage.classList.add("hidden");
    greetPage.classList.remove("hidden");
    return;
  }

  bolatikImg.classList.add("hidden");

  title.textContent = "Поздравление 💐";
  messageEl.textContent = msg;

  mainPage.classList.add("hidden");
  greetPage.classList.remove("hidden");
}

    function showMain() {
      greetPage.classList.add("hidden");
      mainPage.classList.remove("hidden");
      copied.textContent = "";
      error.textContent = "";
      input.focus();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      error.textContent = "";

      const key = normalizeName(input.value);

      if (!key) {
        error.textContent = "Введите имя 🙂";
        return;
      }

      if (!messages[key]) {
        error.textContent = "такого шпендика у меня в списках нету, бро.";
        return;
      }

      showGreet(key);
    });

    backBtn.addEventListener("click", showMain);

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(messageEl.textContent);
        copied.textContent = "Скопировано! 💌";
        setTimeout(() => copied.textContent = "", 1800);
      } catch {
        copied.textContent = "Не получилось скопировать 😅 (попробуй вручную)";
      }
    });

    // удобство: Enter сразу отправляет, и фокус в поле
    input.focus();
  </script>
</body>
</html>
    <script  src="./script.js"></script>

  </body>
  
</html>
