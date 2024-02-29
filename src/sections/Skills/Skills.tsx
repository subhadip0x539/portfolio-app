import { Content, TextGroup } from "../../hocs/Skills";

export function Skills() {
  return (
    <div className="flex flex-col gap-16 justify-between items-center mb-32">
      <TextGroup />
      <Content />
    </div>
  );
}
