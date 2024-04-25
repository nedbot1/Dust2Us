import Navbar from "./components/navbar";
import "@/app/globals.css";
import Index from "./pages/index/page.";
import Work from "./pages/work/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Index />
    </main>
  );
}
