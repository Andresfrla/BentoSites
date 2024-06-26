import Navbar from "./components/_navbar/page";
import Hero from "./components/_hero/page";
import Benefits from "./components/_benefits/page";
import Pricing from "./components/_pricing/page";
import ContactForm from "./components/contact-us/page";
import ChatSimulation from "./components/_chatSimulation/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div>
        Video
      </div>
      <Benefits />
      <Pricing />
      <ChatSimulation />
      <ContactForm />
    </main>
  );
}
