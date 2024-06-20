import Image from "next/image";
import Navbar from "./components/_navbar/page";
import Hero from "./components/_hero/page";
import Benefits from "./components/_benefits/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div>
        Video
      </div>
      <Benefits />
    </main>
  );
}
