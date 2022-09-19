import React from "react"

function Post(props) {

  let [curtidas, setCurtidas ] = React.useState(props.likes)

  const [iconeSalvar, setIconeSalvar] = React.useState("bookmark-outline")
  const [iconeCurtir, setIconeCurtir] = React.useState("heart-outline")

  function salvarPost() {
    (iconeSalvar === "bookmark-outline") ? setIconeSalvar("bookmark") : setIconeSalvar("bookmark-outline")
  }

  function curtirPost() {
    if (iconeCurtir === "heart-outline") {
      setIconeCurtir("heart")
      setCurtidas(curtidas +1) 
    }
    
  
  else if (iconeCurtir === "heart") {
    setIconeCurtir("heart-outline")
    setCurtidas(curtidas -1) 
  }
}

function coracaoVermelho () {
  if (iconeCurtir === "heart-outline") {
   return ("")
  }
  

else if (iconeCurtir === "heart") {
  return ("class=red")
}
}



return (
  <div class="post" >
    <div class="topo">
      <div class="usuario">
        <img src={props.userImg} />
        {props.usuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div onClick={curtirPost} class="conteudo">
      <img src={props.contentImg} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon class="curtir" onClick={curtirPost} name={iconeCurtir}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon onClick={salvarPost} name={iconeSalvar}></ion-icon>

        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/respondeai.svg" />
        <div class="texto">
          Curtido por <strong>{props.curtir1}</strong> e  <strong>outras {curtidas}  pessoas</strong>
        </div>
      </div>
    </div>
  </div>
)
}

export default function Posts() {
  const posts = [
    { usuario: "meowd", imgUsuario: "assets/img/meowed.svg", imgConteudo: "assets/img/gato-telefone.svg", curtir1: "respondeai", likes: 101523},

    { usuario: "barked", imgUsuario: "assets/img/barked.svg", imgConteudo: "assets/img/dog.svg", curtir1: "adorable_animals", likes: 93204}
  ]

  return (
    <div class="posts">
      {posts.map((item) => <Post usuario={item.usuario} userImg={item.imgUsuario} contentImg={item.imgConteudo} curtir1={item.curtir1} likes={item.likes}
      />)}
    </div>
  )
}