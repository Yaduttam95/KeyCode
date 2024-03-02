window.addEventListener("keydown", (e) => {
  const key = document.getElementById("key");

  key.innerHTML = `
    <div class="key-name">
        <center><h1>${e.key === " " ? "Space" : e.key}</h1></center>
    </div>

      <div class="key-code key-props">
        <div class="key-props-value">
          <strong> ${e.keyCode} </strong>
        </div>

        <div class="key-props-name">
          <strong> key.keyCode </strong>
        </div>
      </div>
      <div class="key-jscode key-props">
        <div class="key-props-value">
          <strong> ${e.code} </strong>
        </div>

        <div class="key-props-name">
          <strong> key.code </strong>
        </div>
    </div>
      `;
});
