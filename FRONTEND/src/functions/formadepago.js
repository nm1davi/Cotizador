import { useState } from "react";

export function usePago(){
    const [condicionPago, setCondicionPago] = useState('contado');

    const handleCondicionPagoChange = (e) => {
        setCondicionPago(e.target.value);
    };
    return{
        condicionPago,
        handleCondicionPagoChange
    }
}