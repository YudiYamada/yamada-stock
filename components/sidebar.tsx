const Sidebar = () => {
  return (
    <aside className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <h1 className="font-bold text-2xl" >Yamada Stock</h1>
      </div>

      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Dashboard</button>
        <button className="px-6 py-3">Produtos</button>
        <button className="px-6 py-3">Vendas</button>
      </div>
    </aside>
  );
};

export default Sidebar;
