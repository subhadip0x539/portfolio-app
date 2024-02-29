import { Card, CardBody } from "@nextui-org/react";
import { RadioButton, Work } from "../../../components/shared/Icons";
import { TExperience } from "../../../types/common";
import dayjs from "dayjs";
import { dateDiff } from "../../../utils/methods";

const experiences: TExperience[] = [
  {
    organization: "PRM Fincon",
    address: "Kolkata, West Bengal, India",
    type: "Hybrid",
    tenure: {
      start: dayjs("2022-10-01"),
      end: dayjs(),
    },
    positions: [
      {
        name: "Junior Developer",
        tenure: {
          start: dayjs("2023-03-01"),
          end: dayjs(),
        },
        description:
          "As a UI developer at PRM Fincon, I translate project requirements into actionable tasks using HTML, CSS, JavaScript, and frameworks like React or Vue. Collaborating closely with product management, I ensure UI designs meet user needs and business objectives while adhering to best practices. I conduct thorough testing to validate functionality, performance, and security, promptly addressing any issues that arise.",
        type: "Full-time",
      },
      {
        name: "Python Developer",
        tenure: {
          start: dayjs("2022-10-01"),
          end: dayjs("2023-03-01"),
        },
        description:
          "As an intern, my role as a Python developer involves learning and applying Python programming concepts while assisting with coding tasks and supporting the development team in various projects. I write code snippets, perform basic testing, and document processes while collaborating with team members. This internship provides me with opportunities to absorb knowledge, ask questions, and actively participate in learning experiences that contribute to my growth as a Python developer.",
        type: "Internship",
      },
    ],
  },
];

export function Content() {
  return (
    <div className="flex flex-col w-full gap-4">
      {experiences.map((item, index) => (
        <div className="grid grid-cols-[max-content_auto] gap-x-8 gap-y-4" key={index}>
          <div className="grid relative place-items-center p-4">
            <span className="h-8 w-8 bg-primary absolute blur-md" />
            <Work size={32} fill="white" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-secondary text-2xl text-left font-bold">{item.organization}</h4>
            <p className="sm:text-sm text-xs text-foreground font-thin">{dateDiff(item.tenure.start, item.tenure.end)}</p>
            <p className="sm:text-sm text-xs text-foreground font-thin">
              {item.address} · {item.type}
            </p>
          </div>
          <div className="w-full h-full grid place-items-center">
            <div
              className="h-full w-1"
              style={{
                background: "linear-gradient(transparent, #ffddb7, #4b97f3, transparent)",
              }}
            />
          </div>
          <Card as="div" className="bg-accent p-4 my-4">
            <CardBody className="flex flex-col gap-8">
              {item.positions.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <p className="text-primary">{item.name}</p>
                  <p>
                    {item.type} · {item.tenure.start.format("MMM YYYY")} -{" "}
                    {item.tenure.end.isSame(dayjs(), "day") ? "Present" : item.tenure.end.format("MMM YYYY")} · {dateDiff(item.tenure.start, item.tenure.end)}
                  </p>
                  <p className="text-foreground-50 text-sm text-thin">{item.description}</p>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      ))}
      <div className="grid grid-cols-[max-content_auto] gap-x-8 gap-y-4">
        <div className="grid relative place-items-center p-4">
          <span className="h-8 w-8 bg-primary absolute blur-md" />
          <RadioButton size={32} fill="white" />
        </div>
      </div>
    </div>
  );
}
