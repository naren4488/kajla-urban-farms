import Header from "./components/layout/Header";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}
