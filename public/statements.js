document
  .querySelector(".request-statement")
  .addEventListener("click", function () {
    fetch("/statement")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        document.querySelector(".statement").innerText = data.statement;
      })
      .catch(function (err) {
        console.error(err);
      });
  });
