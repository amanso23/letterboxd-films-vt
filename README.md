# Proyecto de Películas en Astro

Este proyecto es una **aplicación web** desarrollada utilizando **Astro**, basada en la página de [letterboxd](https://letterboxd.com/), donde se hace uso de las **view transitions** de **Astro** para **navegar entre páginas**.

## Uso de Colecciones en Astro

En este proyecto, la **colección de películas** se define a través de un **esquema** que especifica los **atributos necesarios** para cada película, como el **título**, **subtítulo**, **cartel**, **director**, **año**, **duración**, **enlaces para ver la película** y **hashtags relevantes**.

Los **archivos Markdown** que representan cada película se estructuran de tal manera que incluyen estos atributos. Esto permite a **Astro** leer y procesar automáticamente el contenido para generar las **páginas individuales** para cada película, haciendo que el **mantenimiento** y la **actualización** de la colección sean **sencillos**.

### Ejemplo de un Archivo Markdown

Cada archivo Markdown de película contiene información estructurada que se interpreta para **renderizar** la página de la película. Esto incluye el **título**, un **subtítulo**, el **cartel** de la película, el **director**, la **duración**, y **enlaces** a plataformas donde se puede ver la película. También se pueden incluir **etiquetas (hashtags)** que permiten clasificar la película en diferentes **géneros**.

## Instalación

Para poner en marcha el proyecto en tu **máquina local**, sigue estos pasos:

1. **Clona el repositorio**: Usa el comando `git clone` seguido de la **URL del repositorio**.
   
2. **Navega al directorio del proyecto**: Usa el comando `cd` para cambiar al **directorio** del proyecto que acabas de clonar.

3. **Instala las dependencias**: Ejecuta `npm install` para instalar todas las **dependencias necesarias** que el proyecto requiere.

4. **Ejecuta el servidor de desarrollo**: Usa el comando `npm run dev` para iniciar el **servidor local**. Una vez que el servidor esté en funcionamiento, podrás ver la aplicación accediendo a `http://localhost:4321` en tu **navegador**.
