import { Content, TextGroup } from "../../components/shared/HigherOrderComponents/Skills";

export function Skills() {
  return (
    <div className="flex flex-col gap-16 justify-between items-center mb-32">
      <TextGroup />
      <Content />
    </div>
  );
}
