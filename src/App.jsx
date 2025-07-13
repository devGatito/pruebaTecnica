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
      <section className="m-6 wrapper mt-1 ">
        <div className="p-6 " >
          <input
            type="text"
            placeholder="Busca por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border-solid  w-full bg-[#E2E1E2] h-10 p-3.5 text-center"
          ></input>

          <table className="w-full  text-1xl m-60  ">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Ciudad</th>
              </tr>
            </thead>
            <tbody>
              {filtradoUsuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.name}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.address.city}</td>
                  <td>
                    <button onClick={() =>setUser(usuario) }>Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectUser &&(
            <Modal usuario={selectUser} onClose={() => setUser(null)} ></Modal>
          )
          }
        </div>
      </section>
    </>
  );
}

export default App;
