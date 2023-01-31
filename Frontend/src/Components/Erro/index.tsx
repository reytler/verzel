import { useError } from '@/src/Context/Erros';
import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import Loading from '../Loading';

function Erro() {
  const {removeError, errors, loading} = useError();
  const [visible, setVisible] = useState(true);

  const onDismiss = (field:string) => {
    removeError(field)
  };

  return (
    <div style={{textAlign:'center'}}>
      {
        errors.length > 0 ?
          errors.map((erro,index)=>(
            <Alert key={index} color="danger" isOpen={visible} toggle={()=>onDismiss(erro.field)}>
              {erro.message}
            </Alert>
          ))
        :''
      }
      {loading?(
        <Loading/>
      ):('')}
    </div>
  );
}

export default Erro;