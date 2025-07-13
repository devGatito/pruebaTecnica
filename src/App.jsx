import { useState } from "react";
import { usoUsuarios } from "./hooks/usoUsuarios";
import Modal from "./components/Modal";

function App() {
  const { usuario, loading } = usoUsuarios();
  const [search, setSearch] = useState("");
  const [selectUser, setUser] = useState(null);

  const filtradoUsuarios = usuario.filter((usuario) =>
    usuario.name.toLowerCase().includes(search)
  );
  console.log(filtradoUsuarios);

  console.log(selectUser);

  if (loading) return <h1 className="text-center">Cargando</h1>;
  return (
    <>
      <section className="wrapper mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        <input
          type="text"
          placeholder="Busca por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-xl border-solid  w-full bg-[#E2E1E2] h-10 text-center mb-15"
        ></input>

        <div className="overflow-x-auto">
          <table className="w-full  text-1xl  p-54  text-left  overflow-x-auto">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
              {filtradoUsuarios.map((usuario) => (
                <tr key={usuario.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <td className="py-3 px-4 border-l-2 border-transparent hover:border-[#2B2D42]">{usuario.name}</td>
                  <td className="py-3 px-4 border-l-2 border-transparent hover:border-[#2B2D42]">{usuario.email}</td>
                  <td className="py-3 px-4 border-l-2 border-transparent hover:border-[#2B2D42]">{usuario.address.city}</td>
                  <td>
                    <button
                      className="!px-4 !py-2 bg-[#2B2D42] text-white m-5"
                      onClick={() => setUser(usuario)}
                    >
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectUser && (
          <Modal usuario={selectUser} onClose={() => setUser(null)}></Modal>
        )}
      </section>
    </>
  );
}

export default App;
