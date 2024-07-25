import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2'; // Asegúrate de importar Swal si no lo has hecho

export function useExportacion({ cliente, entrega, ofertaValida }) {
    const cotizacionRef = useRef();

    const exportAsPDF = async () => {
        if (!cliente || !entrega || !ofertaValida) {
            Swal.fire({
                icon: "error",
                title: "Error",
                html: 'Los campos:<br><strong>🔴CLIENTE</strong><br><strong>🔴ENTREGA</strong><br><strong>🔴OFERTA</strong><br>Son requeridos',
            });
            return;
        }

        const input = cotizacionRef.current;
        // Ocultar los botones de exportación temporalmente
        const exportButtons = input.querySelectorAll('.exportar');
        exportButtons.forEach(button => button.style.display = 'none');

        const canvas = await html2canvas(input, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Obtener el ancho y alto del canvas
        const imgWidth = 210; // Ancho de la página A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Agregar la imagen al PDF en la posición (0, 0) y escalarla para que ocupe toda la página
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("cotizacion.pdf");

        // Volver a mostrar los botones de exportación
        exportButtons.forEach(button => button.style.display = 'block');
    };

    const exportAsJPG = async () => {
        if (!cliente || !entrega || !ofertaValida) {
            Swal.fire({
                icon: "error",
                title: "Error",
                html: 'Los campos:<br><strong>🔴CLIENTE</strong><br><strong>🔴ENTREGA</strong><br><strong>🔴OFERTA</strong><br>Son requeridos',
            });
            return;
        }

        const input = cotizacionRef.current;
        // Ocultar los botones de exportación temporalmente
        const exportButtons = input.querySelectorAll('.exportar');
        exportButtons.forEach(button => button.style.display = 'none');

        const canvas = await html2canvas(input, { scale: 2 });
        const imgData = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'cotizacion.jpg';
        link.click();

        // Volver a mostrar los botones de exportación
        exportButtons.forEach(button => button.style.display = 'block');
    };

    return {
        cotizacionRef,
        exportAsPDF,
        exportAsJPG
    };
}
