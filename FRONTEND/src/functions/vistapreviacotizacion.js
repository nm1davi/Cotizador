import { useState } from "react";

export function useCotizacion() {
      const [cliente, setCliente] = useState();
      const [entrega, setEntrega] = useState();
      const [ofertaValida, setOfertaValida] = useState();
      
      const handleClienteChange = (e) => setCliente(e.target.value);
      const handleEntregaChange = (e) => setEntrega(e.target.value);
      const handleOfertaValidaChange = (e) => setOfertaValida(e.target.value);
      
      return{
            cliente,
            setCliente,
            entrega,
            setEntrega,
            ofertaValida,
            setOfertaValida,
            handleClienteChange,
            handleEntregaChange,
            handleOfertaValidaChange,
      };
}