import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Robo from './components/Robo';
import CustomForm from './components/CustomForm';
import { Cabeca } from './model/Cabeca';
import { Braco } from './model/Braco';

function App() {

  const url = "http://localhost:5139/api"

  const [start, setStart] = useState(false)

  const [cabeca, setCabeca]=useState<Cabeca>({Id:"", Rotacao: "3", Inclinacao:"2"})
  const [bracoDir, setBracoDir]=useState<Braco>({Id:"" ,Lado:"D",Cotovelo: "1",Pulso: "3"})
  const [bracoEsq, setBracoEsq] = useState({Id:"" ,Lado:"E",Cotovelo: "1",Pulso: "3"})
  const [statusRobo, setStatusRobo] = useState<string>("Pronto")

  const submit = (param: any) => {

    fetch(`${url}/${param.orgao == 'cabeca' ? `cabeca/${cabeca.Id}` : `braco/${param.orgao == 'bracoDireito' ? bracoDir.Id : bracoEsq.Id}`}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(param.orgao == 'cabeca' ? 
                              {
                                Id: cabeca.Id, 
                                Inclinacao: param.selecao == 'inclinacao' ? param.comando : cabeca.Inclinacao, 
                                Rotacao: param.selecao == 'rotacao' ? param.comando : cabeca.Rotacao
                              } : 
                              param.orgao == 'bracoDireito' ?
                              {
                                Id:  bracoDir.Id,
                                Lado: "D",
                                Cotovelo:  param.selecao == 'cotovelo' ? param.comando : bracoDir.Cotovelo,
                                Pulso: param.selecao == 'pulso' ? param.comando : bracoDir.Pulso
                              } :
                              {
                                Id:  bracoEsq.Id,
                                Lado: "E",
                                Cotovelo:  param.selecao == 'cotovelo' ? param.comando : bracoEsq.Cotovelo,
                                Pulso: param.selecao == 'pulso' ? param.comando : bracoEsq.Pulso
                              })
    })  
      .then(response => {
        if (!response.ok) {

          return response.json().then(err => {
            throw new Error(err[0].key);
          })
        }
        return response.json();
      })
      .then(data => {
        
        if (param.orgao == 'bracoDireito') {
          setBracoDir({Id:bracoDir.Id, Lado:data.Lado, Cotovelo:data.cotovelo, Pulso:data.pulso})
        }
        else if (param.orgao == 'bracoEsquerdo') {
          setBracoEsq({Id:bracoEsq.Id, Lado:data.Lado, Cotovelo:data.cotovelo, Pulso:data.pulso})
        }
        else {
          setCabeca({Id: cabeca.Id, Inclinacao: data.inclinacao, Rotacao: data.rotacao})
        }
        setStatusRobo("Pronto")

      })
      .catch(error => {
        console.error('Erro:', error);
        setStatusRobo(error)
      });

  } 

  const startRobo = () => {

  // cabeca
    fetch(`${url}/cabeca`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(cabeca)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        
        setCabeca({Id:data.id, Inclinacao:data.inclinacao, Rotacao:data.rotacao})
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    // braco direito
      fetch(`${url}/braco`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(bracoDir)
      })
        .then(response => {
          return response.json();
        })
        .then(data => {

          setBracoDir({Id:data.id, Cotovelo: data.cotovelo, Lado: data.Lado, Pulso: data.pulso})
        })
        .catch(error => {
          console.error('Erro:', error);
        });
      // braco esquerdo
        fetch(`${url}/braco`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(bracoEsq)
        })
          .then(response => {
            return response.json();
          })
          .then(data => {
            
            setBracoEsq({Id:data.id, Cotovelo: data.cotovelo, Lado: data.Lado, Pulso: data.pulso})
          })
          .catch(error => {
            console.error('Erro:', error);
          });

    setStart(true)
  }

  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-6'>

        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Controle R.O.B.O</h5>
            <p className="card-text">Selecione as opções abaixo para controlar o robo</p>
            <p className="card-text text-danger">
              {
                `Status do robo: ${statusRobo}`
              }
            </p>
          </div>
        </div>
          {
            start ? 
            <>
              <CustomForm callbackSubmit={submit} />
            </>
              
               : 
              <button className='btn btn-primary' onClick={startRobo}>Iniciar</button>
          }
        </div>
        <div className='col-sm-6'>
         <Robo cabeca={cabeca} bracoDir={bracoDir} bracoEsq={bracoEsq}/>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
