"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Languages } from "lucide-react"; // Ícone opcional

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Descobre o idioma atual baseado no pathname (/pt/dashboard -> pt)
  const segments = pathname.split("/");
  const currentLng = segments[1];

  const buttonToggleLanguage = () => {
    const newLng = currentLng === "pt" ? "en" : "pt";

    // Substitui o idioma no início do path
    // Ex: /pt/sales vira /en/sales
    const newSegments = [...segments];
    newSegments[1] = newLng;
    const newPath = newSegments.join("/");

    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      onClick={buttonToggleLanguage}
      className="w-full justify-start gap-2 px-6 py-3"
    >
      <Languages size={20} />
      {currentLng === "pt" ? "English" : "Português"}
    </Button>
  );
};

export default LanguageSwitcher;