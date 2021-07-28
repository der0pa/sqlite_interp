import { sqlite_interp } from "../../declarations/sqlite_interp";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with sqlite_interp actor, calling the greet method
  const greeting = await sqlite_interp.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
