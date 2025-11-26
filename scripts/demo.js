const demoData = {
  price: {
    user: "!price AAPL",
    bot: "📈 Apple Inc. (AAPL)\n💰 Current Price: $189.44\n🔺 Change (Prev Close): +1.12 ( +0.59% )",
  },
  alert: {
    user: "!alert TSLA 200",
    bot: "✅ Price alert set for TSLA at $200.00.\nWe'll DM you when it hits.",
  },
  portfolio: {
    user: "!portfolio",
    bot: "📊 Your Portfolio Holdings\n📈 TSLA: 5 shares\nAvg Buy: $180.00 | Current: $190.25\n💰 Unrealized P/L: +$51.25\n\nCash Balance: $9,048.75",
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

document.addEventListener("DOMContentLoaded", () => {
  // 항상 상단에서 시작
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

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
});
