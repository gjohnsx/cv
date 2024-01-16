import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo: any;
}

export function ProjectCard({ title, description, tags, link, logo }: Props) {
  return (
    <Card className="flex flex-col p-3 overflow-hidden border border-muted">
      <CardHeader className="">
        <Image
          alt={"Logo"}
          src={logo.src}
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="bg-green-500 rounded-full size-1"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>

          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex mt-auto">
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
