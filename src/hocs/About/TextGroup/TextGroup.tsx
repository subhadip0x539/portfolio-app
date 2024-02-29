import { Button } from "@nextui-org/react";
import { ArrowRight, GitHub } from "../../../components/shared/Icons";
import { HREF_GITHUB } from "../../../config/links";

export function TextGroup() {
  return (
    <div className="flex flex-col gap-4 text-center max-w-screen-lg items-center">
      <h2 className="sm:text-6xl text-4xl alt-font-family font-bold text-foreground text-clip-animate">Subhadip Biswas</h2>
      <h2 className="sm:text-6xl text-4xl alt-font-family font-bold text-foreground">Building Stuffs on the Web</h2>
      <p className="sm:text-sm text-xs md:text-md text-foreground-50 font-thin max-w-screen-md mt-8">
        I am a <span className="text-primary">Full Stack Developer</span> and <span className="text-priamry">Cybersecurity Enthusiast</span>, I combine
        technical expertise with a security-focused mindset to deliver innovative solutions.
      </p>
      <div className="flex gap-4 mt-16 items-center">
        <Button className="rounded-full px-4 gap-4" variant="flat" color="primary" endContent={<ArrowRight size={16} />}>
          Resume
        </Button>
        <Button className="rounded-full px-4 gap-4" variant="flat" color="default" startContent={<GitHub size={16} />} onPress={() => window.open(HREF_GITHUB)}>
          GitHub
        </Button>
      </div>
    </div>
  );
}