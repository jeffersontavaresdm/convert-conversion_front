import React from "react";

interface SkillPageProps {
  setPage: (page: string) => void
}

const SkillPage: React.FunctionComponent<SkillPageProps> = ({ setPage }) => {
  document.title = "Habilidades"

  return (
    <>
      <h1 style={ { textAlign: "center", marginTop: "36px", fontSize: "60px", fontFamily: "Sigmar One" } } >
        Habilidades
      </h1 >
      <br />
      <hr style={ { color: "white" } } />
      <div style={ {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "60px",
        color: "white"
      } } >
        <div style={ { display: "flex", flexDirection: "row" } } >
          <div style={ { display: "flex", flexDirection: "column", color: "cadetblue" } } >
            <span style={ { fontSize: "30px", fontWeight: "bold" } } >Hard Skills:</span >
            <ul style={ { fontStyle: "italic", fontSize: "20px" } } >
              <li >Java</li >
              <li >Kotlin</li >
              <li >Spring Framework</li >
              <li >HTML/CSS</li >
              <li >JavaScript</li >
              <li >TypeScript</li >
              <li >React</li >
              <li >Git</li >
              <li >PostgreSQL</li >
              <li >Docker</li >
            </ul >
          </div >
          <div style={ { display: "flex", flexDirection: "column", marginLeft: "360px", color: "cadetblue" } } >
            <span style={ { fontSize: "30px", fontWeight: "bold" } } >Soft Skills:</span >
            <ul style={ { fontStyle: "italic", fontSize: "20px" } } >
              <li >Vontade de aprender</li >
              <li >Autonomia</li >
              <li >Comunicação</li >
              <li >Trabalho em equipe</li >
              <li >Proatividade</li >
              <li >Inteligência emocional</li >
              <li >Resiliência</li >
              <li >Adaptabilidade</li >
              <li >Criatividade</li >
              <li >Perseverança</li >
            </ul >
          </div >
        </div >
      </div >
      <hr style={ { color: "white", marginTop: "60px" } } />
      <div style={ {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      } } >
        <div style={ { fontSize: "20px", width: "80%", marginTop: "20px" } } >
          <p >
            Nesta pagina listei algumas de minhas <b >hard</b > e <b >soft</b > skills,
            porém algumas (principalmente as soft skills) são mais difíceis de mensurar,
            por isso devem ser vistas apenas como base para ter uma ideia do profissional que posso ser.
          </p >
          <p >
            Também é importante informar que não listei tudo,
            algumas habilidades eu tenho um certo conhecimento por ter trabalhado ou por ter estudado um pouco,
            porém não me sinto muito confortável de mencionar aqui, mas eventualmente irei colocar nas
            listas pois continuo sempre estudando e logo terei a confiança nessessária para listá-las.
          </p >
          <p >
            Bom, é isso. Te convido a ver meus
            &nbsp;<span
            style={ { cursor: "pointer", textDecoration: "underline", color: "forestgreen" } }
            onClick={ () => setPage("contacts") } >
              <b >contatos</b >
            </span >&nbsp;
            caso queira trocar uma ideia ou só ver um pouquinho a mais de mim 😄
          </p >
        </div >
      </div >
      <hr style={ { color: "white" } } />
      <footer style={ { position: "fixed", fontSize: "12px", right: "24px", bottom: "24px", } } >
        <h3 style={ { fontSize: "18px", fontFamily: "Sigmar One" } } >See ya!</h3 >
      </footer >
    </>
  );
}

export default SkillPage;