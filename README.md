[:es:](#projecto-admin-dashboard) [:us:](#project-admin-dashboard)
# Projecto: Admin Dashboard
**Este proyecto consta de 3 partes diferentes, podes encontrarlas acá:**

 -  [Blog API](https://github.com/lucasmblanco/blog-api-be)
 - [ Admin Dashboard](https://github.com/lucasmblanco/blog-api-admin-dashboard)
 - [Blog](https://github.com/lucasmblanco/blog-api-site)

Este proyecto se basa en la creación de un panel de administradores que utiliza una API para crear, ver, editar y eliminar posteos, usuarios y administradores. 

## Tecnologías utilizadas 📚
![Tools](https://skillicons.dev/icons?i=ts,react,nextjs,tailwindcss)

## Principales características ⭐
 - Podemos crear nuevos administradores que se encargaran de poder realizar todas las acciones CRUD que permite la aplicacion.
 - Nos permite ver todos los posteos que se encuentran en nuestra base de datos, poder ver y modificar estado de estos (publicado/no publicado), como tambien poder editar los post usando un editor de texto integrado (TinyMCE).
 - Podemos visualizar todos los usuarios que existen en la base de datos y eliminarlos de la misma. 
 - Diseño responsivo adaptado para cualquier tamaño de pantalla. 
 - Utiliza [sonner](https://github.com/emilkowalski/sonner) para mostrar al usuario notificaciones de estado.
## Conclusión 🙌
Sin dudas uno de los proyectos que mas componentes externos usé para poder brindar la mejor experiencia posible. Un ejemplo de esto es el uso de react-query para poder realizar las consultas a la API y que las acciones que provoquen algun cambio se reflejen de forma instantanea en la aplicación y sin afectar considerablemente el rendimiento de la misma. La integración con TinyMCE fue un poco problematica al principio ya que una serie de errores visuales hacian inusable el editor dentro de un modal pero investigando pude llegar a la resolución del problema y quedó funcionando todo correctamente. 

Traté de utilizar mas custom hooks y useContext para resolver varios problemas como la repetición de código o para que los componentes no esten tan cargados de codigo en si. 

Elegí usar localStorage para almacenar la informacion del usuario que me llega desde la API,  y solamente me encargo de usar esto para el correcto renderizado de algunos componentes, y no para hacer acciones que que puedan llegar a modificar información esencial. 
<br/> 
***
<br/>


# Project: Admin Dashboard

**This project consists of 3 different parts, you can find them here:**

-   [Blog API](https://github.com/lucasmblanco/blog-api-be)
-   [Admin Dashboard](https://github.com/lucasmblanco/blog-api-admin-dashboard)
-   [Blog](https://github.com/lucasmblanco/blog-api-site)

This project is based on the creation of an admin panel that uses an API to create, view, edit, and delete posts, users, and administrators.

## Technologies Used 📚

![Tools](https://skillicons.dev/icons?i=ts,react,nextjs,tailwindcss)

## Key Features ⭐

-   We can create new administrators who will be able to perform all the CRUD actions that the application allows.
-   It allows us to view all the posts in our database, view and modify their status (published/unpublished), and edit the posts using an integrated text editor (TinyMCE).
-   We can view all the users in the database and delete them.
-   Responsive design adapted for any screen size.
-   It uses [sonner](https://github.com/emilkowalski/sonner) to show the user status notifications.

## Conclusion 🙌

Undoubtedly one of the projects where I used the most external components to provide the best possible experience. An example of this is the use of react-query to make API queries and ensure that actions causing any changes are reflected instantaneously in the application without significantly affecting its performance. The integration with TinyMCE was a bit problematic at first because a series of visual errors made the editor unusable within a modal. However, after investigation, I was able to resolve the issue, and everything worked correctly. 

I tried to use more custom hooks and useContext to solve various problems such as code repetition or to avoid overloading components with code. 

I chose to use localStorage to store user information received from the API, and I only use it to render certain components correctly, not for actions that could modify essential information.
