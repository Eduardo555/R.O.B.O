import roboImagem from '../assets/robo.png';
import { Braco } from '../model/Braco';
import { Cabeca } from '../model/Cabeca';
import BracoCard from './BracoCard';
import CabecaCard from './CabecaCard';

function Robo(props : {cabeca: Cabeca, bracoDir: Braco, bracoEsq : Braco}) {

    // Cabeca
    const getInclinacao = (cod: any) => {
        
        switch (cod) {
            case 1:
              return '1 - Para Cima';
            case 2:
              return '2 - Em Repouso';
            case 3:
              return '3 - Para Baixo';
            default:
              return 'Erro'
          } 
    }

    const getRotacao = (cod: any) => {
        
        switch (cod) {
            case 1:
              return '1 - Rotação -90';
            case 2:
              return '2 - Rotação -45';
            case 3:
              return '3 - Em repouso';
            default:
              return 'Erro'
          } 
    }

    // Braco
    const getPulso = (cod: any) => {
        switch (cod) {
            case 1:
              return '1. Rotação para -90';
            case 2:
              return '2. Rotação para -45 ';
            case 3:
              return '3. Em Repouso';
            case 4:
              return '4. Rotação para 45 ';
            case 5:
              return '5. Rotação para 90 ';
            case 6:
              return '6. Rotação para 135 ';
            case 7:
              return '7. Rotação para 180 ';
            default:
              return 'Erro'
          } 
    }
    const getCotovelo = (cod: any) => {
        switch (cod) {
            case 1:
              return '1. Em Repouso';
            case 2:
              return '2. Levemente Contraído';
            case 3:
              return '3. Contraído';
            case 4:
              return '4. Fortemente Contraído';
            default:
              return 'Erro'
          } 
    }

    return (
        <>
            <div className='text-center'>
                <div>
                <CabecaCard 
                    inclinacao={getInclinacao(props.cabeca.Inclinacao)}
                    rotacao={getRotacao(props.cabeca.Rotacao)}
                />
                </div>
                
            <div className="d-flex bd-highlight mb-3 align-items-center">
                    
                    <div className="p-2 bd-highlight flex-fill">
                        <BracoCard   
                            title='Braço Direito'
                            cotovelo={getCotovelo(props.bracoDir.Cotovelo)}
                            pulso={getPulso(props.bracoDir.Pulso)}
                        />
                    </div>

                    <div className=" bd-highlight flex-fill">
                    <img src={roboImagem} height={500} />
                    </div>
                    <div className="p-2 bd-highlight flex-fill">
                        <BracoCard 
                            title='Braço Esquerdo'
                            cotovelo={getCotovelo(props.bracoEsq.Cotovelo)}
                            pulso={getPulso(props.bracoEsq.Pulso)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Robo