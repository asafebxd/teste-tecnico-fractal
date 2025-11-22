import { useState } from "react";
import { useEffect } from "react";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Home() {
  const [lockers, setLockers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredLockers, setFilteredLockers] = useState([]);

  const loadData = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/lockers`);

    const resBody = await res.json();

    setLockers(resBody);
    setFilteredLockers(resBody);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await loadData();
    };

    fetch();
  }, []);

  const deleteLocker = async (id) => {
    await fetch(`http://localhost:8080/api/v1/locker/${id}`, {
      method: "DELETE",
    });

    loadData();
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredItems = lockers.filter((locker) => {
      return (
        locker.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        locker.ecp.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredLockers(filteredItems);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <header className="w-full border-b border-slate-800 px-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-3xl flex items-center gap-4">
          <input
            type="text"
            placeholder="Filter"
            className="w-full h-10 rounded-xl bg-slate-800/70 border border-slate-700 
                   px-4 text-sm text-slate-300 placeholder-slate-500 focus:outline-none 
                   focus:border-emerald-500 transition"
            value={search}
            onChange={handleInputChange}
          />

          <button
            onClick={() => navigate("/locker")}
            className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 hover:bg-emerald-400"
          >
            Adicionar
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredLockers.map((locker) => (
              <article
                key={locker._id}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 shadow-lg shadow-black/40
                             flex flex-col gap-3 hover:border-emerald-400 hover:-translate-y-1 transition-transform transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <FiLock className="text-lg" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      Código
                    </div>
                    <div className="text-lg font-semibold">{locker.codigo}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    ECP
                  </div>
                  <div className="text-sm text-slate-200 break-all">
                    {locker.ecp}
                  </div>
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                        ${
                          locker.ativo
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40"
                            : "bg-red-500/15 text-red-300 border border-red-500/40"
                        }`}
                  >
                    {locker.ativo ? "Ativo" : "Inativo"}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/locker/${locker._id}`)}
                      className="px-3 py-1 text-xs rounded-lg bg-blue-500 text-slate-900 font-medium
                           hover:bg-blue-400 transition"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => deleteLocker(locker._id)}
                      className="px-3 py-1 text-xs rounded-lg bg-red-500 text-slate-900 font-medium
                           hover:bg-red-400 transition"
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
