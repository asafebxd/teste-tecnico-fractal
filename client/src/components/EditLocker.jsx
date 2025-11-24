import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditLocker() {
  const [form, setForm] = useState({
    codigo: "",
    ecp: "",
    ativo: false,
  });

  const { id } = useParams();

  const loadLockerData = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/locker/${id}`);

    const resBody = await res.json();

    setForm({
      codigo: resBody.codigo,
      ecp: resBody.ecp,
      ativo: resBody.ativo,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await loadLockerData();
    };

    fetch();
  }, []);

  const editForm = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/v1/locker/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        codigo: form.codigo,
        ecp: form.ecp,
        ativo: form.ativo,
      }),
    });

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "ativo") {
      setForm((prev) => ({
        ...prev,
        ativo: value === "true",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-6">Editar locre</h1>

        <form onSubmit={editForm} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Código</label>
            <input
              type="text"
              name="codigo"
              value={form.codigo}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2
                        text-sm focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">ECP</label>
            <input
              type="text"
              name="ecp"
              value={form.ecp}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2
                       text-sm focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Ativo</label>
            <select
              name="ativo"
              value={form.ativo}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm
                         focus:outline-none focus:border-emerald-500"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-emerald-500 text-slate-900 rounded-lg font-medium
                       hover:bg-emerald-400 transition"
          >
            Salvar
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full py-2 bg-slate-700 text-slate-200 rounded-lg font-medium
             hover:bg-slate-600 transition mt-2"
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditLocker;
