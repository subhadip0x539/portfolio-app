import { Button, Tooltip } from "@nextui-org/react";
import { Discord, LogoColored, Envelope, LinkedIn, Slack } from "../../Icons";
import { useScrollTrigger } from "../../../../utils/hooks";
import { HREF_LINKEDIN, HREF_MAIL, HREF_SLACK } from "../../../../config/links";

export function AppNavBar() {
  const { trigger } = useScrollTrigger();

  return (
    <nav className={`fixed left-0 right-0 z-50 transition duration-300 ${trigger ? "bg-background backdrop-blur-sm translate-y-[calc(-1*64px)]" : ""}`}>
      <div className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">
        <div className="flex items-center justify-center gap-4">
          <LogoColored size={20} />
          <p className="text-foreground text-xs sm:text-sm md:text-md">Subhadip Biswas</p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-2">
            <Tooltip content="LinkedIn" showArrow={true} radius="sm">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full" onPress={() => window.open(HREF_LINKEDIN)}>
                <LinkedIn className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="Slack" showArrow={true} radius="sm">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full" onPress={() => window.open(HREF_SLACK)}>
                <Slack className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="Discord" showArrow={true} radius="sm">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full">
                <Discord className="w-4 h-4" />
              </Button>
            </Tooltip>
            <Tooltip content="Send Email" showArrow={true} radius="sm">
              <Button isIconOnly variant="flat" size="sm" className="rounded-full" onPress={() => window.open(HREF_MAIL)}>
                <Envelope className="w-4 h-4" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
}
