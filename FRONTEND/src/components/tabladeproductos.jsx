import React from 'react';
import { useProductos } from '../functions/agregarproductos.js';
import { useIva } from '../functions/ivaproductos.js';
import { usePago } from '../functions/formadepago.js';
import { useCotizacion } from '../functions/vistapreviacotizacion.js';
import { useExportacion } from '../functions/exportacion.js';
import { fechaDeCotizacion } from '../functions/date.js';
import VistaPreviaCotizacion from './vistapreviacotizacion.jsx';

import '../css/tabladeproductos.css';

const precioFormateado = (precio) => {
    return `$ ${parseFloat(precio).toFixed(2)}`;
};

function Tabladeproductos() {
    const { productos, producto, agregarProducto, handleChange, nuevaCotizacion, eliminarProducto } = useProductos();
    const { ivaIncluido, handleIvaChange, calcularTotalConIva } = useIva();
    const { condicionPago, handleCondicionPagoChange } = usePago();
    const {entrega= '', ofertaValida= '', cliente= '', handleEntregaChange, handleOfertaValidaChange, handleClienteChange} = useCotizacion(); //
    const { cotizacionRef, exportAsPDF, exportAsJPG} = useExportacion({cliente, entrega, ofertaValida});
    const totalProductos = productos.reduce((acc, prod) => acc + parseFloat(prod.total), 0);
    const totalConIva = calcularTotalConIva(totalProductos);
    const fecha = fechaDeCotizacion();


    return (
        <div className='cotizador'>
            <div className='info-productos'>            
            <div className='titulo-cotizador'>
                <h2>COTIZADOR</h2>
            </div>
            <div className='contenedor-info-cliente'>
                <div className='input-group'>
                        <label htmlFor='name' className='label-cliente'>NOMBRE DE CLIENTE</label>
                        <input type="text" className='input-cliente' value= {cliente} onChange={handleClienteChange}required></input>
                </div>
            </div>
            <div className='input-productos'>
                <input
                    className='inputs-de-productos'
                    type="number"
                    name="cantidad"
                    placeholder="INGRESE CANTIDAD"
                    value={producto.cantidad}
                    onChange={handleChange}
                />
                <input
                    className='inputs-de-productos'
                    type="text"
                    name="detalle"
                    placeholder="INGRESE DETALLE"
                    value={producto.detalle}
                    onChange={handleChange}
                />
                <input
                    className='inputs-de-productos'
                    type="text"
                    name="medida"
                    placeholder="INGRESE MEDIDA"
                    value={producto.medida}
                    onChange={handleChange}
                />
                <input
                    className='inputs-de-productos'
                    type="number"
                    name="precioUnitario"
                    placeholder="INGRESE PRECIO UNITARIO"
                    value={producto.precioUnitario}
                    onChange={handleChange}
                />
                <div className='botones-de-inputs'>
                    <button className='boton-de-input' onClick={agregarProducto}>AGREGAR PRODUCTO</button>
                    <button className='boton-de-input' onClick={nuevaCotizacion}>NUEVA COTIZACIÓN</button>
                </div>
            </div>
            <table className='tabla-productos'>
                <thead>
                    <tr>
                        <th>CANTIDAD</th>
                        <th>DETALLE</th>
                        <th>MEDIDA</th>
                        <th>PRECIO UNITARIO</th>
                        <th>TOTAL</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, index) => (
                        <tr key={index}>
                            <td>{prod.cantidad}</td>
                            <td>{prod.detalle}</td>
                            <td>{prod.medida}</td>
                            <td>{precioFormateado(prod.precioUnitario)}</td>
                            <td>{precioFormateado(prod.total)}</td>
                            <td>
                                <button className='boton-eliminar' onClick={() => eliminarProducto(index)}><span><i className="bi bi-trash3-fill"></i></span></button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5">SUBTOTAL</td>
                        <td>{precioFormateado(ivaIncluido ? totalConIva : totalConIva.subtotal)}</td>
                    </tr>
                    {!ivaIncluido && (
                        <tr>
                            <td colSpan="5">+ IVA</td>
                            <td>{precioFormateado(totalConIva.iva)}</td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan="5">TOTAL</td>
                        <td>{precioFormateado(ivaIncluido ? totalConIva : totalConIva.total)}</td>
                    </tr>
                </tbody>
            </table>
            <div className='debajo-de-tabla'>
            <div className='condiciones'>
            <div className='opciones-selecciones'>
                <div className='opcion-de-iva'>
                <label>
                    <input
                        type="radio"
                        value="incluido"
                        checked={ivaIncluido}
                        onChange={handleIvaChange}
                    />
                    <span>IVA INCLUIDO</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="noIncluido"
                        checked={!ivaIncluido}
                        onChange={handleIvaChange}
                    />
                    <span>+ IVA</span>
                </label>
                </div>
                <div className='opcion-de-pago'>
                    <label>
                        <input
                            type="radio"
                            value="contado"
                            checked={condicionPago === 'contado'}
                            onChange={handleCondicionPagoChange}
                        />
                        <span>CONTADO</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="cuenta corriente fecha factura 30 días"
                            checked={condicionPago === 'cuenta corriente fecha factura 30 días'}
                            onChange={handleCondicionPagoChange}
                        />
                        <span>CUENTA CORRIENTE FECHA FACTURA 30 DÍAS</span>
                    </label>
                    </div>
            </div>
            
                <div className='inputs-debajo-tabla'>
                <div className='entrega'>
                    <input type="text" id="entrega" className='inputs-de-productos' value={entrega} onChange={handleEntregaChange} required placeholder="INGRESE ENTREGA" />
                </div>
                <div className='oferta'>
                    <input type="text" id="ofertaValida" className='inputs-de-productos' value={ofertaValida} onChange={handleOfertaValidaChange} required placeholder="INGRESE OFERTA VÁLIDA" />
                </div>
                </div>
                <div className='exportar'>
                <button className='boton-de-input' onClick={exportAsPDF}>EXPORTAR COMO PDF</button>
                <button className='boton-de-input' onClick={exportAsJPG}>EXPORTAR COMO JPG</button>
            </div>
            </div>
            </div>
            </div>
            <div className='vista-previa-cotizacion' ref={cotizacionRef}>
                <VistaPreviaCotizacion
                    cliente = {cliente} 
                    productos={productos}
                    fecha={fecha}
                    ivaIncluido={ivaIncluido}
                    totalConIva={totalConIva}
                    condicionPago={condicionPago}
                    entrega={entrega}
                    ofertaValida={ofertaValida}
                />
            </div>
        </div>
        
    );
}

export default Tabladeproductos;
