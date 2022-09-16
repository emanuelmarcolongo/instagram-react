function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  )
}

export default function Sugestoes() {

  const sugeridos = [
    { nome: "bad.vibes.memes", imagem: 'assets/img/bad.vibes.memes.svg', razao: "Segue você" },
    { nome: "chibirdart", imagem: 'assets/img/chibirdart.svg', razao: "Segue você" },
    { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
    { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
    { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" }
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugeridos.map((item) => <Sugestao nome={item.nome} imagem={item.imagem} razao={item.razao} />)}
    </div>
  )
}