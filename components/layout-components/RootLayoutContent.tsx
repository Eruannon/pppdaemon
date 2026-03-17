"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AccessibilityProvider } from "@/lib/providers/accessibility-context";
import Footer from "@/components/layout-components/footer";

import { AccessibilityPanel } from "@/components/layout-components/panel-dostepnosci";
import { MainNav } from "@/components/layout-components/nav";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayoutContent({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/ados-2";

  return (
    <AccessibilityProvider>
      {!hideLayout && (
        <header>
          <MainNav />
        </header>
      )}
      
      <main id="main-content">
        {children}
        <Analytics />
      </main>
      {!hideLayout && <AccessibilityPanel />}
      {!hideLayout && <Footer />}
    </AccessibilityProvider>
  );
}
