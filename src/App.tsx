import Animal from "./Animal";
import "./App.css";
import Exibicao from "./exibicao";
import { ReactNode } from "react";

type AnimaisTuplaType = [string, string, number, boolean];
const ANIMAIS: AnimaisTuplaType[] = [
  ["🦁","Leão",0,true],
  ["🦒","Girafa",1200,true],
  ["🦜","Papagaio", 0.12,true],
  ["🦩","Flamingo",12.0,true]
]

function App() {
  const exA1: ReactNode[] = [];
  const exB2: ReactNode[] = [];
  for (let i = 0; i < ANIMAIS.length; i++) {
    exA1.push(
      <Animal 
        icone={ANIMAIS[i][0]} 
        nome={ANIMAIS[i][1]}
        peso={ANIMAIS[i][2]} 
        extincao={ANIMAIS[i][3]}
      />
    );
  }

  return (
    <div className='app'>
      <Exibicao inicio={new Date("2024-12-02T08:00-03:00")} fim={new Date("2024-12-02T12:00-03:00")} local="A1">
        <div>{exA1}</div>
      </Exibicao>
      <Exibicao inicio={new Date("2024-12-02T14:00-03:00")} fim={new Date("2024-12-02T16:00-03:00")} local="B2">
        <div>{exB2}</div>
      </Exibicao>

    </div>
  )
}

export default App