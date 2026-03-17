
"use client";

import { useState } from "react";
import { ThemeTile } from "./theme-tile";
import { ThemeGallery } from "./theme-gallery";
import { themes } from "./types";

export function Gallery() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  if (selectedTheme) {
    return (
      <ThemeGallery
        theme={selectedTheme}
        onBack={() => setSelectedTheme(null)}
      />
    );
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-semibold tracking-tight mb-8 text-center">
        Nasza Galeria
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((theme) => (
          <ThemeTile
            key={theme.id}
            title={theme.title}
            image={theme.image}
            onClick={() => setSelectedTheme(theme.id)}
          />
        ))}
      </div>
    </div>
  );
}
