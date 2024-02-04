import { Button } from "@nextui-org/react";
import { ArrowRightIcon, SlackIcon } from "../../../Icons";

export function TextGroup() {
  return (
    <div className="flex flex-col gap-4 max-w-prose sm:text-left text-center sm:items-start items-center">
      <p className="sm:text-sm text-xs text-primary">Hi👋 my name is</p>
      <h2 className="sm:text-5xl text-4xl alt-font-family font-bold text-foreground">
        Subhadip Biswas
      </h2>
      <h2 className="sm:text-5xl text-4xl alt-font-family font-bold text-clip">
        Building Stuffs on the Web
      </h2>
      <p className="sm:text-sm text-xs text-foreground-50 font-thin">
        I am a <span className="text-warning">Full Stack Developer</span> and{" "}
        <span className="text-warning">Cybersecurity Enthusiast</span>, I
        combine technical expertise with a security-focused mindset to deliver
        innovative solutions.
      </p>
      <div className="flex gap-4 mt-16 items-center">
        <Button
          className="rounded-full px-4 gap-4"
          variant="flat"
          color="primary"
          endContent={<ArrowRightIcon className="w-4 h-4" />}
        >
          Resume
        </Button>
        <Button
          className="rounded-full px-4 gap-4"
          variant="flat"
          color="default"
          startContent={<SlackIcon className="w-4 h-4" />}
        >
          Slack Me
        </Button>
      </div>
    </div>
  );
}
