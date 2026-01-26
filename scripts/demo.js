const demoData = {
  price: {
    user: "!price AAPL",
    bot: "📈 Apple Inc. (AAPL)\n💰 Current Price: $189.44\n🔺 Change (Prev Close): +1.12 (+0.59%)",
  },
  alert: {
    user: "!alert TSLA 200",
    bot: "✅ Price alert set for TSLA at $200.00.\nWe'll DM you when it hits.",
  },
  portfolio: {
    user: "!portfolio",
    bot: "📊 Your Portfolio Holdings\n📈 TSLA: 5 shares\nAvg Buy: $180.00 | Current: $190.25\n💰 Unrealized P/L: +$51.25\n\n📈 AAPL: 3 shares\nAvg Buy: $175.00 | Current: $178.40\n💰 Unrealized P/L: +$10.20\n\nCash Balance: $9,048.75",
  },
  chart: {
    user: "!chart NVDA 1y",
    bot: "📊 NVDA stock chart with indicators for 1y:",
    image: "assets/chart-demo.png",
  },
  news: {
    user: "!news",
    bot: "📢 Latest Financial News\n🔹 Fed signals pause on rate hikes\n🔹 Apple unveils new Mac lineup\n🔹 Oil edges higher on supply concerns",
  },
};

const heroData = {
  price: {
    command: "!price AAPL",
    desc: "Instant quote with change %, RSI, and chart links. Works in any channel.",
    chips: ["Real-time quotes", "News sentiment"],
  },
  alert: {
    command: "!alert TSLA 200",
    desc: "Set a target and get a DM when it hits.",
    chips: ["Smart alerts", "DM delivery"],
  },
  portfolio: {
    command: "!portfolio",
    desc: "Holdings, P/L, and cash at a glance.",
    chips: ["Portfolio P/L", "Export CSV"],
  },
  chart: {
    command: "!chart NVDA 1y",
    desc: "1-year chart with SMA/EMA/RSI as a PNG.",
    chips: ["Technical view", "Quick PNG"],
  },
};

function renderDemo(key) {
  const data = demoData[key];
  if (!data) return;
  const userEl = document.getElementById("demo-user");
  const botEl = document.getElementById("demo-bot");
  const imgEl = document.getElementById("demo-image");

  userEl.textContent = data.user;
  botEl.textContent = data.bot;

  if (data.image) {
    imgEl.src = data.image;
    imgEl.style.display = "block";
  } else {
    imgEl.style.display = "none";
    imgEl.src = "";
  }
}

function renderHero(key) {
  const data = heroData[key];
  if (!data) return;
  const cmdEl = document.getElementById("hero-command");
  const descEl = document.getElementById("hero-desc");
  const chipsEl = document.getElementById("hero-chips");

  if (cmdEl) cmdEl.textContent = data.command;
  if (descEl) descEl.textContent = data.desc;
  if (chipsEl) {
    chipsEl.innerHTML = "";
    data.chips.forEach((label) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.textContent = label;
      chipsEl.appendChild(chip);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 항상 상단에서 시작
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // 테마 초기화
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const setLabel = (theme) => {
      themeToggle.textContent = theme === "dark" ? "☾ Dark" : "☀︎ Light";
    };
    setLabel(initialTheme);
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setLabel(next);
    });
  }

  const buttons = document.querySelectorAll(".demo-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("primary"));
      btn.classList.add("primary");
      renderDemo(btn.dataset.key);
    });
  });
  // 초기 상태
  renderDemo("price");

  // Hero preview controls
  const heroButtons = document.querySelectorAll(".hero-btn");
  heroButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      heroButtons.forEach((b) => b.classList.remove("primary"));
      btn.classList.add("primary");
      renderHero(btn.dataset.hero);
    });
  });
  renderHero("price");

});
