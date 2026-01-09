import { producTableColumns } from "@/components/table-columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { PlusIcon } from "lucide-react";

const ProductsPage = async () => {
  const products = await db.product.findMany({});
  console.log(products);

  return (
    <div className="w-full space-y-8 p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>

        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>

      <DataTable columns={producTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
