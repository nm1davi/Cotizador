import { useState } from "react";

export function useIva(){
    const [ivaIncluido, setIvaIncluido] = useState(true);

    const handleIvaChange = (e) => {
        setIvaIncluido(e.target.value === 'incluido');
    };

    const calcularTotalConIva = (total) => {
        const iva = 0.21; // 21% IVA
        if (ivaIncluido) {
            return total;
        } else {
            const subtotal = total
            return {
                subtotal: subtotal,
                iva: subtotal * iva,
                total: total +(subtotal * iva)
            };
        }
    };
    return{
        ivaIncluido,
        handleIvaChange,
        calcularTotalConIva
    }
}