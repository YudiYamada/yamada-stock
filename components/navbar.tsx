"use client";

import {
  Layers,
  LayoutGrid,
  Package,
  SettingsIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./button-toggle-language";
import { useTranslation } from "@/app/i18n/client";

interface NavbarProps {
  lng: string;
}

const Navbar = ({ lng }: NavbarProps) => {
  const pathname = usePathname();

  // 1. Extrai o idioma (ex: /pt/sales -> lng = "pt", rest = "/sales")
  // Se o pathname for apenas "/pt", o path limpo vira "/"
  const segments = pathname.split("/");
  const currentLng = segments[1]; // "pt" ou "en"
  const pathnameWithoutLng = `/${segments.slice(2).join("/")}`;

  const handleVerifyActive = (path: string) => {
    // Agora comparamos o path limpo (sem /pt ou /en)
    const isActive =
      pathnameWithoutLng === path ||
      (path !== "/" && pathnameWithoutLng.startsWith(path));

    return isActive ? "secondary" : "ghost";
  };

  const { t } = useTranslation(currentLng, "common", {
    keyPrefix: "components.navbar",
  });

  return (
    <nav className="p-2">
      <div className="flex flex-col gap-3 border-t pt-5">
        <div className="flex gap-2">
          <Layers size={20} />
          <span>{t("title")}</span>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>
              <Button
                asChild
                variant={handleVerifyActive("/")}
                className="w-full justify-start gap-2 px-6 py-3"
              >
                {/* 2. Importante: Os links agora precisam do prefixo do idioma */}
                <Link href={`/${currentLng}/`}>
                  <LayoutGrid size={20} />
                  <span>{t("dashboard")}</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant={handleVerifyActive("/products")}
                className="w-full justify-start gap-2 px-6 py-3"
              >
                <Link href={`/${currentLng}/products`}>
                  <Package size={20} />
                  <span>{t("products")}</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant={handleVerifyActive("/sales")}
                className="w-full justify-start gap-2 px-6 py-3"
              >
                <Link href={`/${currentLng}/sales`}>
                  <ShoppingBasketIcon size={20} />
                  {t("sales")}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-10">
        <div className="flex gap-2 border-t pt-5">
          <SettingsIcon size={20} />
          <span>{t("titleTwo")}</span>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
