import Header from "../../components/header/header"
import BasicCard from "../cards/basic-card";

export default function Home(){
  return (
  <>
    <Header />
      <div class="row">
        <BasicCard title="Card" descricao="Card são cartas frente e verso, atrás fica a resposta e na frente a pergunta." />
        <BasicCard title="React" descricao="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros." />
      </div>
  </>

  );
}