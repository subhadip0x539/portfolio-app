import { Button, Tooltip } from "@nextui-org/react";
import { DiscordIcon, GitHubIcon, LogoIcon, EnvelopeIcon, LinkedInIcon } from "../../Icons";
import { useScrollTrigger } from "../../../../utils/hooks";

export function AppNavBar() {
  const { trigger } = useScrollTrigger();

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-backgroud duration-300 ${trigger ? "shadow-lg bg-background backdrop-blur-sm" : ""}`}>
      <div className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">
        <div className="flex items-center justify-center gap-4">
          <LogoIcon className="w-5 h-5" />
          <p className="text-foreground text-sm">Subhadip Biswas</p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="hidden md:flex items-center justify-center gap-4">
            <p className="text-foreground text-sm cursor-pointer hover:text-primary transition-colors duration-300">About</p>
            <p className="text-foreground text-sm cursor-pointer hover:text-primary transition-colors duration-300">Skills</p>
            <p className="text-foreground text-sm cursor-pointer hover:text-primary transition-colors duration-300">Experience</p>
            <p className="text-foreground text-sm cursor-pointer hover:text-primary transition-colors duration-300">Projects</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Tooltip content="LinkedIn" showArrow={true} className="rounded">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full">
                <LinkedInIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="GitHub" showArrow={true} className="rounded">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full">
                <GitHubIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="Discord" showArrow={true} className="rounded">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full">
                <DiscordIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="Send Email" showArrow={true} className="rounded">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full">
                <EnvelopeIcon className="w-4 h-4" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
}
