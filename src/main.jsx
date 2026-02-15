import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* Redux */
import { store } from "./toolkit/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
