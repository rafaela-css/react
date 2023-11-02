import { useState } from "react";

function Formulario() {
  const [computador, setComputador] = useState({
    marca: "Samsung",
    ram: "sla boy",
    disco: "Justin Bieber",
  });
  const [json, setJson] = useState("");

  function enviar(e) {
    e.preventDefault();
    setJson(JSON.stringify(computador));
    console.log(json);
  }

  return (
    <div>
      <form onSubmit={enviar}>
        Marca <br />
        <input
          type="text"
          value={computador.marca}
          onChange={(e) =>
            setComputador({ ...computador, marca: e.target.value })
          }
        />
        Marca
        <br />
        <input
          type="text"
          value={computador.ram}
          onChange={(e) =>
            setComputador({ ...computador, ram: e.target.value })
          }
        />
        RAM
        <br />
        <input
          type="text"
          value={computador.disco}
          onChange={(e) =>
            setComputador({ ...computador, disco: e.target.value })
          }
        />
        Disco
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
