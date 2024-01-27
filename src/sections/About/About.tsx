import { Content, TextGroup } from "../../components/shared/HigherOrderComponents/About";

export function About() {
  return (
    <div className="flex sm:flex-row flex-col-reverse sm:justify-between justify-center gap-8 items-center h-screen">
      <TextGroup />
      <Content />
    </div>
  );
}
