import React from "react"

function Usuario1(props) {
  return (
  <div class="usuario">
  <img onClick={props.alteraImg} src={props.img}/>
  <div class="texto">
    <strong>catanacomics</strong>
    <span>
      {props.nomeUsuario}
      <ion-icon onClick={props.alteraNome} name="pencil" ></ion-icon>
    </span>
  </div>
</div>)
}

export default function Usuario() {
  let [User, setUser] = React.useState("Catana");
  let [img, setImg] = React.useState("assets/img/catanacomics.svg")
  return (
    <Usuario1 nomeUsuario={User} img={img} alteraImg={()=> setImg(prompt("Cole a URL de uma nova imagem"))} alteraNome={() => setUser(prompt("Qual o seu nome?"))}/>
  )
}