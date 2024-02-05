import { Tab, Tabs } from "@nextui-org/react";

let tabs = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export function SectionNavBar() {
  return (
    <div className="w-full hidden sm:flex items-center justify-center sticky top-4 z-10 mb-32">
      <Tabs items={tabs} radius="full" color="primary">
        {(item) => <Tab key={item.id} title={item.label} className="m-2" />}
      </Tabs>
    </div>
  );
}
