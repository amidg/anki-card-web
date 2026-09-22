import { createRoot } from "react-dom/client"
import { App } from "./App"
import { Stylesheet } from "./styles"

createRoot(document.getElementById("root")!).render(
  <>
    <Stylesheet />
    <App />
  </>,
)
