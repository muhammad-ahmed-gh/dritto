const blockedUrls = [
  "https://www.facebook.com/",
  "https://www.youtube.com/",
  "https://www.linkedin.com/feed/",
];

const isBlocked = (href) => {
  return blockedUrls.some((url) => href === url);
};

const replaceDOM = () => {
  const doc = document.documentElement;
  if (!doc) return;
  doc.innerHTML = `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dritto</title>
      <style>
        html {
          font-size: 13px !important;
        }
        body {
          direction: rtl !important;
          margin:0;
          padding:0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #f9f9f9;
          background-image: radial-gradient(#ddd 2px, transparent 2px);
          background-size: 40px 40px;
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
        }
        .blocker {
          text-align:center;
        }
        .blocker .emoji {
          font-size: 8rem;
        }
        .blocker h1 {
          font-size: 2.7rem;
          margin: 0.5rem 0;
        }
        .blocker p {
          font-size: 1.3rem;
          color:#777;
        }
      </style>
    </head>
    <body>
      <div class="blocker">
        <div class="emoji">🗺️</div>
        <h1>معلش أنا حجبت الصفحة</h1>
        <p>زور صفحة تانية عشان الصفحة دي مشتتة</p>
      </div>
    </body>
  `;
};

const checkAndBlock = () => {
  const currentHref = location.href;
  if (isBlocked(currentHref)) {
    replaceDOM();
  }
};

const observeHistory = () => {
  let lastHref = location.href;

  const handle = () => {
    if (location.href !== lastHref) {
      lastHref = location.href;
      checkAndBlock();
    }
  };

  const wrap = (method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      handle();
      return result;
    };
  };

  wrap("pushState");
  wrap("replaceState");

  window.addEventListener("popstate", handle);

  setInterval(handle, 500);
};

checkAndBlock();
observeHistory();
