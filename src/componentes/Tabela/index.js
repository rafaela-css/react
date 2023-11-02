function Tabela(props) {
    return (
      <table>
        <tr>
            <th>Código</th>
            <th>Descrição</th>
        </tr>
        {props.dados.map( function(celula){
            return (
                <tr key={celula.id}>
                    <td>{celula.id}</td>
                    <td>{celula.desc}</td>
                </tr>
            )
        })}
      </table>
    );
  }
  
  export default Tabela;
  