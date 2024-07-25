export const fechaDeCotizacion = () =>{
    const fecha = new Date ();
    const diaDeCotizacion = fecha.getDate();
    const mesDeCotizacion = fecha.getMonth() + 1;
    const añoDeCotizacion = fecha.getFullYear();
    const fechaFormateada = `${diaDeCotizacion.toString().padStart(2, '0')}/${mesDeCotizacion.toString().padStart(2, '0')}/${añoDeCotizacion}`;
    return fechaFormateada.toString();
}