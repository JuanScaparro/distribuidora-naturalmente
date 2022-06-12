# DistribuidoraNaturalmente

Este proyecto es una distribuidora de alimentos naturales, se compone de una landing page donde tenemos una sección de ofertas, otra de recetas con los productos ofrecidos, un formulario de contacto y por último el acceso a la tienda.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Desarrollo de secciones 

### Ofertas

La misma cuenta con un carrousel de imagenes, sin exponer los precios, y al presionar sobre ellas redirige a dicha sección en la tienda.

### Recetas

Esta sección cuenta con la colaboración de las marcas ofrecidas en la distribuidora, ellos crean las recetas que se exponen en esta sección.

## Tienda

La tienda es únicamente para usuarios registrados.
Las cards tienen un carrousel con dos fotos, una descripción corta, un selector para la cantidad de producto seleccionado y un botón de agregar al carrito.
Los productos expuestos en la tienda están divididos por marcas y por productos secos y congelados. 

## Carrito de compras

El carrito muestra los productos seleccionados junto con el valor unitario y el valor total, un botón de seguir comprando y uno de finalizar la compra. 
Al finalizar la compra se envía por email un detalle de la compra, estilo remito, para el cliente y una copia a la distribuidora para el proseso de armado y facturación del pedido.

## Login / Logout

Para el registro de usuarios se usa un formulario con los siguientes datos:

- Nombre y apellido *
- Cuit
- Nombre del Local *
- Direccion *
- Horario de entrega *
- Telefono de contacto *
- Email *
- Instagram

Los datos con * son de caracter obligatorio, necesarios para la generación de una clave de acceso a la tienda y para la entrega de la mercadería.
Una vez recibido el nuevo registro, la distribuidora debe aceptar al nuevo usuario y generar una clave de acceso a la tienda.
