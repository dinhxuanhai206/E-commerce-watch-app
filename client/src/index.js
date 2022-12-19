import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./styles/__app.scss";
import { MediaQueryProvider } from "./context/MediaQueryContext";
import "./i18next";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

ReactDOM.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.Suspense fallback="loading">
            <App />
          </React.Suspense>
        </PersistGate>
      </Provider>
    </MediaQueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
