//components
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <>
      <Menu />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
