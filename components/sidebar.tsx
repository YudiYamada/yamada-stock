import Navbar from "./navbar";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">Yamada Stock</h1>
      </div>

      <div>
        <Navbar />
      </div>
    </aside>
  );
};

export default Sidebar;
