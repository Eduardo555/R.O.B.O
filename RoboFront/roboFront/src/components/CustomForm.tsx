import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  orgao: string;
  selecao: string;
  comando: string;
}

interface Props {
  callbackSubmit: (param: FormData) => void;
}

const CustomForm: React.FC<Props> = ({callbackSubmit}) => {
  const { control, handleSubmit, watch } = useForm<FormData>();
  const orgao = watch('orgao');
  const selecao = watch('selecao');

  const onSubmit = (data: FormData) => {
    callbackSubmit(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-3 w-75'>
      <div>
        <label>
          Escolha um órgão:
          <Controller
            name="orgao"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select className='form-control' {...field}>
                <option value="" disabled>Selecione uma opção</option>
                <option value="cabeca">Cabeça</option>
                <option value="bracoDireito">Braço Direito</option>
                <option value="bracoEsquerdo">Braço Esquerdo</option>
              </select>
            )}
          />
        </label>
      </div>

      <div>
        <label>
          Escolha uma opção:
          <Controller
            name="selecao"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select className='form-control' {...field}>
                <option value="" disabled>Selecione uma opção</option>
                {orgao !== 'cabeca' ? (
                  <>
                    <option value="cotovelo">Cotovelo</option>
                    <option value="pulso">Pulso</option>
                  </>
                ) : (
                  <>
                    <option value="inclinacao">Inclinação</option>
                    <option value="rotacao">Rotação</option>
                  </>
                )}
              </select>
            )}
          />
        </label>
      </div>
      
      <div>
        <label>
          Escolha um comando:
          <Controller
            name="comando"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select className='form-control' {...field}>
                <option value="" disabled>Selecione uma opção</option>
                {selecao == 'rotacao' ? (
                  <>
                    <option value="1">1. Rotação -90 </option>
                    <option value="2">2. Rotação -45 </option>
                    <option value="3">3. Em Repouso</option>
                  </>
                ) : selecao == 'inclinacao' ?(
                  <>
                    <option value="1">Para cima</option>
                    <option value="2">Em repouso</option>
                    <option value="3">Para baixo</option>
                  </>
                ) : selecao == 'cotovelo' ?(
                  <>
                    <option value="1">1. Em Repouso</option>
                    <option value="2">2. Levemente Contraído</option>
                    <option value="3">3. Contraído</option>
                    <option value="4">4. Fortemente Contraído</option>
                  </>
                ) : (
                  <>
                    <option value="1">1. Rotação para -90</option>
                    <option value="2">2. Rotação para -45</option>
                    <option value="3">3. Em Repouso</option>
                    <option value="4">4. Rotação para 45</option>
                    <option value="5">5. Rotação para 90</option>
                    <option value="6">6. Rotação para 135</option>
                    <option value="7">7. Rotação para 180</option>
                  </>
                )}
              </select>
            )}
          />
        </label>
      </div>

        <div className='mt-4'>
        <button className='btn btn-success' type="submit">Enviar comando</button>
        </div>
      
    </form>
  );
};

export default CustomForm;