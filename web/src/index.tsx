import { createRoot } from "react-dom/client"

const App = () => {
  return <main>Hello from React</main>
}

const mountNode = document.getElementById("app") ?? (() => {
  const element = document.createElement("div")
  element.id = "app"
  document.body.appendChild(element)
  return element
})()

const root = createRoot(mountNode)
root.render(<App />)
