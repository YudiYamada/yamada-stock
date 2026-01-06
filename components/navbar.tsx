"use client";

import { LayoutGrid, Package, ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const handleVerifyActive = (path: string) => {
    // Verifica se o pathname atual começa com o path do link
    // (O check de '/' evita que a Home fique sempre ativa)
    const isActive =
      pathname === path || (path !== "/" && pathname.startsWith(path));
    return isActive ? "secondary" : "ghost";
  };

  return (
    <nav className="p-2">
      <ul className="flex flex-col gap-2">
        <li>
          <Button
            asChild
            variant={handleVerifyActive("/")}
            className="w-full justify-start gap-2 px-6 py-3"
          >
            <Link href="/">
              <LayoutGrid size={20} />
              Dashboard
            </Link>
          </Button>
        </li>

        <li>
          <Button
            asChild
            variant={handleVerifyActive("/products")}
            className="w-full justify-start gap-2 px-6 py-3"
          >
            <Link href="/products">
              <Package size={20} />
              Produtos
            </Link>
          </Button>
        </li>

        <li>
          <Button
            asChild
            variant={handleVerifyActive("/sales")}
            className="w-full justify-start gap-2 px-6 py-3"
          >
            <Link href="/sales">
              <ShoppingBasketIcon size={20} />
              Vendas
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
