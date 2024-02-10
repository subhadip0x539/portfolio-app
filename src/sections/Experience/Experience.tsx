import {
  TextGroup,
  Content,
} from "../../components/shared/HigherOrderComponents/Experience";

export function Experience() {
  return (
    <div className="flex flex-col gap-16 justify-between items-center mb-32">
      <TextGroup />
      <Content />
    </div>
  );
}
