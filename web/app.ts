const res = await fetch("http://localhost:5001/api");
const data = await res.json();

const root = document.getElementById("app");
if (root) {
  root.innerHTML = `<h1>Topology</h1><pre>${JSON.stringify(data, null, 2)}</pre>`;
}
