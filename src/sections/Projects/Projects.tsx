import { TextGroup } from "../../components/shared/HigherOrderComponents/Projects";
import { Content } from "../../components/shared/HigherOrderComponents/Projects/Content/Content";

export function Projects() {
  return (
    <div className="flex flex-col gap-16 justify-between items-center mb-32">
      <TextGroup />
      <Content />
    </div>
  );
}
