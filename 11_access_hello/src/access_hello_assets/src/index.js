import { access_hello } from "../../declarations/access_hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with access_hello actor, calling the greet method
  const greeting = await access_hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
