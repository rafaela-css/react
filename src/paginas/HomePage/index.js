import BemVindo from "../../componentes/BemVindo";
import Tabela from "../../componentes/Tabela";

function HomePage() {
  return (
    <>
      <BemVindo />
      <Tabela
        dados={[
          {
            id: 1,
            desc: "Prego",
          },
          {
            id: 2,
            desc: "Parafuso",
          },
        ]}
      />
      
    </>
  );
}

export default HomePage;
