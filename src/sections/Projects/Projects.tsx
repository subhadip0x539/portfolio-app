import { Content, TextGroup } from "../../hocs/Projects";

export function Projects() {
  return (
    <div className="flex flex-col gap-16 justify-between items-center mb-32">
      <TextGroup />
      <Content />
    </div>
  );
}
