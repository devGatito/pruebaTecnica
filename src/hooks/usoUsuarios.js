import { useEffect, useState } from "react";
import axios from "axios";

export const usoUsuarios = () => {
  const [usuario, setUsario] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsario(data);
      } catch (error) {
        console.log("Error al cargar usuarios");
      } finally {
        setLoader(false);
      }
    };

    getUsers();
  },[]);

  return {usuario,loader};
};
