import { AppNavBar } from "../../components/shared/NavBars";
import { About } from "../../sections";
import { Skills } from "../../sections/Skills/Skills";

export function AppLayout() {
  return (
    <div>
      <AppNavBar />
      <div className="mx-auto max-w-6xl px-6 flex flex-col item-center">
        <About />
        <Skills />
      </div>
    </div>
  );
}
