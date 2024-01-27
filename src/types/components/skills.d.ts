type TCategory = "languages" | "frameworks" | "others";

interface ICategory {
  name: string;
  key: TCategory | "all";
}

interface ISkill {
  name: string;
  key: string;
  category: TCategory;
  color: string;
  icon: JSX.Element;
}

export { TCategory, ICategory, ISkill };
