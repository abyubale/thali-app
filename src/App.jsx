import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppHeader from "./components/AppHeader/AppHeader";
import PageRoutes from "./routes/PageRoutes";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
    <div>
      <AppHeader />
      <PageRoutes />

      <AppFooter />
    </div>
  );
}

export default App;
