

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ThemeTileProps {
  title: string;
  subtitle?: string;
  image: string;
  onClick: () => void;
}

export function ThemeTile({ title, subtitle, image, onClick }: ThemeTileProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 bg-[#921d7f]/80 text-primary-foreground">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-sm mt-1 text-primary-foreground/80">{subtitle}</p>
        )}
      </CardFooter>
    </Card>
  );
}
