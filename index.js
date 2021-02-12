const showContact = (() => {
  let once = false;
  return () => {
    if (!once) {
      once = true;
      document
        .querySelector("#phone").textContent =
        `+1 (${301-100}) ${200+80}-0${700-80}`;
        document
        .querySelector("#email").textContent =
        "arnoldtrakh@gmail.com";
    }
  };
})();
