# Cotizador de Productos para Ferretería

Este es un cotizador de productos desarrollado para una ferretería. La aplicación permite a los usuarios realizar cotización de productos.

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - SweetAlert2
  - html2canvas
  - jsPDF
  - HTML
  - CSS

- **Backend:**
  - Express
  - Node.js

## Características

- **Responsive:** La aplicación es completamente responsiva, adaptándose a diferentes tamaños de pantalla y dispositivos.
- **Interfaz Amigable:** Utiliza React para una experiencia de usuario dinámica y moderna.
- **Notificaciones:** Emplea SweetAlert2 para mostrar alertas y notificaciones atractivas y fáciles de entender.
- **Generación de PDFs:** Utiliza html2canvas y jsPDF para generar documentos PDF de las cotizaciones.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/nm1davi/Cotizador.git
    ```

2. Navega al directorio del backend y del frontend y ejecuta `npm install` para instalar las dependencias:

    ```sh
    cd BACKEND
    npm install

    cd ../FRONTEND
    npm install
    ```

3. Inicia el servidor backend:

    ```sh
    cd BACKEND
    npm run dev
    ```

4. Inicia la aplicación frontend:

    ```sh
    cd ../FRONTEND
    npm start
    ```

## Uso

1. Abre tu navegador web y navega a `http://localhost:3000`.
2. Utiliza la interfaz para buscar productos y calcular los costos.
3. Las alertas y notificaciones te guiarán a través del proceso de cotización.
4. Genera documentos PDF de las cotizaciones usando las funcionalidades de `html2canvas` y `jsPDF`.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

---

¡Abierto a cualquier sugerencia y critica constructiva!
