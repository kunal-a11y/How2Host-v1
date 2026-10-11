import React from "react";
import { WebDevIllustration } from "./animated/WebDevIllustration";
import { CybersecurityIllustration } from "./animated/CybersecurityIllustration";
import { SolutionsIllustration } from "./animated/SolutionsIllustration";
import { HostingIllustration } from "./animated/HostingIllustration";

type VisualKind = "laptop" | "security" | "solutions" | "server";

export function ServiceVisualArt({ kind }: { kind: VisualKind }) {
  if (kind === "laptop") {
    return <WebDevIllustration />;
  }

  if (kind === "security") {
    return <CybersecurityIllustration />;
  }

  if (kind === "solutions") {
    return <SolutionsIllustration />;
  }

  return <HostingIllustration />;
}
