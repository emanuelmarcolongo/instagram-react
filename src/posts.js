import React from "react"

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImg} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.contentImg} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
            <ion-icon class="escondido" name="bookmark"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.curtir1}</strong> e outras <strong>{props.curtir2}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
  const [salvar, setSalvar] = React.useState(false);

  const posts = [
    { usuario: "meowd", imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", curtir1: "respondeai", curtir2: "outras 101.523 pessoas", salvar1:<ion-icon name="bookmark"></ion-icon>},
    { usuario: "meowd", imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", curtir1: "respondeai", curtir2: "outras 101.523 pessoas" }
  ]

  return (
    <div class="posts">

      {posts.map((item) => <Post usuario={item.usuario} userImg={item.imgUsuario} contentImg={item.imgConteudo} curtir1={item.curtir1} curtir2={item.curtir2} />)}
    </div>
  )
}