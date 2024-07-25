import { useState, useEffect } from "react";


export function useProductos() {
    const Swal = require('sweetalert2')
    
      const [productos, setProductos] = useState([]);
      const [producto, setProducto] = useState({
          cantidad: '',
          codigo: '',
          detalle: '',
          medida: '',
          precioUnitario: ''
      });
  
      useEffect(() => {
          const productosGuardados = localStorage.getItem('productos');
          if(productosGuardados){
              setProductos(JSON.parse(productosGuardados));
          }
      }, []);

      const agregarProducto = () => {
          const { cantidad, detalle, medida, precioUnitario } = producto;
          if(!cantidad || !detalle || !medida || !precioUnitario){
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Todos los campos son requeridos",
              });
              return;
          }
          const nuevoProducto = {
            ...producto,
            precioUnitario: parseFloat(precioUnitario).toFixed(2),
            total: (cantidad * parseFloat(precioUnitario)).toFixed(2)
          };
          const nuevosProductos = [...productos, nuevoProducto];
          setProductos(nuevosProductos);
          localStorage.setItem('productos', JSON.stringify(nuevosProductos));
          setProducto({
              cantidad: '',
              codigo: '',
              detalle: '',
              medida: '',
              precioUnitario: ''
          });
      };
  
      const handleChange = (e) => {
          setProducto({ ...producto, [e.target.name]: e.target.value });
      };

      const nuevaCotizacion = () => {
          setProductos([]);
          localStorage.removeItem('productos');
      };

      const eliminarProducto = (index) => {
        const nuevosProductos = productos.filter((_, i) => i !== index);
        setProductos(nuevosProductos);
        localStorage.setItem('productos', JSON.stringify(nuevosProductos));
    };
      return {
            productos,
            producto,
            agregarProducto,
            handleChange,
            nuevaCotizacion,
            eliminarProducto
      };
}