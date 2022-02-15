import React from 'react'
import ListaJasen from './ListaJasen'

const Lista = ({ maito, leipa, kahvi, makkara}) => 


<div>
<table>
          <tbody>
            <ListaJasen text="Maito" value={maito} />
            <ListaJasen text="Leipa" value={leipa} />
            <ListaJasen text="Kahvi" value={kahvi} />
            <ListaJasen text="Makkara" value={makkara} />
          </tbody>
        </table>
  
</div>

    


  export default Lista

  /*<div>maito {maito} </div>
  <div>leipa {leipa} </div>
  <div>kahvi {kahvi} </div>
  <div>makkara {makkara} </div>*/