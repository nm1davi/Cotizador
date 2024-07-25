import React from 'react';
import { textUpperCase } from '../functions/mayuscula.js';
import '../css/exportacion.css';

function VistaPreviaCotizacion({ productos, cliente, fecha, ivaIncluido, totalConIva, condicionPago, entrega, ofertaValida }) {
    const precioFormateado = (precio) => {
        return `$ ${parseFloat(precio).toFixed(2)}`;
    };

    return (
        <div className='cotizacion'>
            <div className='encabezado-cotizacion'>
                <div className='logo-empresa'>
                    <img src="/LogoHorizontal-Photoroom.png" alt="Imagen del logo de la empresa" />
                </div>
                <div className='info'>
                    <div className='info-cliente'>
                        <h3><span>Cliente</span> : {cliente}</h3>
                    </div>
                    <div className='info-empresa'>
                        <h3>
                            <span className='marcador'>DAVI HNOS CUIT</span> : 30-62141833-1
                            <br/>
                            <span className='marcador'>FECHA</span> : {fecha}
                        </h3>
                    </div>
                </div>
            </div>
            <table className='tabla-cotizacion'>
                <thead>
                    <tr>
                        <th>CANTIDAD</th>
                        <th>DETALLE</th>
                        <th>MEDIDA</th>
                        <th>PRECIO UNITARIO</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, index) => (
                        <tr key={index}>
                            <td className='tabla-cantidad'>{prod.cantidad}</td>
                            <td className='tabla-detalle'>{textUpperCase(prod.detalle)}</td>
                            <td className='tabla-medida'>{prod.medida}</td>
                            <td className='tabla-precio'>{precioFormateado(prod.precioUnitario)}</td>
                            <td className='tabla-total'>{precioFormateado(prod.total)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="fila-final" colSpan="4">SUBTOTAL</td>
                        <td className='tabla-subtotal'>{precioFormateado(ivaIncluido ? totalConIva : totalConIva.subtotal)}</td>
                    </tr>
                    {!ivaIncluido && (
                        <tr>
                            <td className="fila-iva" colSpan="4">+ IVA</td>
                            <td className='tabla-iva'>{precioFormateado(totalConIva.iva)}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="fila-final" colSpan="4">TOTAL</td>
                        <td className='tabla-total-general'>{precioFormateado(ivaIncluido ? totalConIva : totalConIva.total)}</td>
                    </tr>
                </tbody>
            </table>
            <div className='condiciones'>
                <h4><span className='marcador'>CONDICIONES DE PAGO</span> : <span className='texto-condiciones'>{textUpperCase(condicionPago)}</span></h4>
                <h4><span className='marcador'>ENTREGA</span> : <span className='texto-condiciones'>{textUpperCase(entrega)}</span></h4>
                <h4><span className='marcador'>OFERTA VÁLIDA</span> : <span className='texto-condiciones'>{textUpperCase(ofertaValida)}</span></h4>
            </div>
        </div>
    );
}

export default VistaPreviaCotizacion;
