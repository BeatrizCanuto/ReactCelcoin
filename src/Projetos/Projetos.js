import "./Projetos.css";

export default function Projetos(props) {
  const { nome, descricao, deploy } = props;

  return (
    <div className="Projetos">
      <img src="https://via.placeholder.com/150" alt={descricao} />
      <h1 className="nome">{nome}</h1>
      <p className="descricao">{descricao}</p>
      <button className="deploy">{deploy} Acesse o deploy</button>
    </div>
  )
}

