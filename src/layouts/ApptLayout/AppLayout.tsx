import { AppNavBar, SectionNavBar } from "../../components/shared/NavBars";
import { About, Experience, Projects, Skills } from "../../sections";

export function AppLayout() {
  return (
    <div>
      <AppNavBar />
      <div className="mx-auto max-w-6xl px-6 flex flex-col item-center">
        <About />
        <SectionNavBar />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}
