# Sharing-Flavors - BackEnd

**Unidos por el sabor, compartiendo alegría.**  
Sharing-Flavors es un proyecto que conecta a personas a través de la comida, celebrando la diversidad cultural y el poder de la gastronomía para unirnos. Este espacio permite compartir recetas, explorar nuevos sabores y disfrutar de momentos únicos en comunidad.

---

## Descripción General

Sharing-Flavors busca fomentar la unión y convivencia mediante:

- Intercambio de recetas personalizadas.
- Exploración de platos únicos.
- Conexión entre usuarios apasionados por la cocina.

---

## Funcionalidades

| **Función**                     | **Descripción**                                                                 |
|----------------------------------|---------------------------------------------------------------------------------|
| **Crear recetas**               | Añadir recetas con nombre, imagen, categoría, pasos detallados e ingredientes.   |
| **Editar recetas**              | Modificar recetas previamente creadas por los usuarios.                         |
| **Explorar recetas**            | Visualizar recetas compartidas por otros usuarios.                              |
| **Calificar recetas**           | Valorar las recetas según la experiencia del usuario.                           |
| **Comentar recetas**            | Dejar comentarios y consejos en recetas de otros usuarios.                      |
| **Guardar recetas favoritas**   | Marcar recetas como favoritas para acceder fácilmente a ellas.                  |
| **Editar perfil**               | Actualizar la información personal del usuario.                                 |
| **Chat integrado**              | Sistema de mensajería en tiempo real para resolver dudas y compartir ideas.     |

---

## Endpoints

### Usuarios

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| GET        | `/api/user/`          | Obtiene todos los usuarios.                       | Ninguna.                          |
| POST       | `/api/user/`          | Crea un nuevo usuario.                            | Ninguna.                          |
| PATCH      | `/api/user/:id`       | Actualiza un usuario específico.                  | Requiere rol `USER` o `ADMINISTRATOR`. |
| GET        | `/api/user/:id`       | Obtiene un usuario por su ID.                     | Ninguna.                          |

### Autenticación

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| POST       | `/auth/local/login`   | Inicia sesión y devuelve un token de autenticación.| Ninguna.                          |

### Recetas

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| GET        | `/api/recipe/`        | Obtiene todas las recetas.                        | Ninguna.                          |
| POST       | `/api/recipe/`        | Crea una nueva receta.                            | Ninguna.                          |
| GET        | `/api/recipe/:id`     | Obtiene una receta específica por su ID.          | Ninguna.                          |
| PATCH      | `/api/recipe/:id`     | Actualiza una receta específica.                  | Requiere rol `USER` o `ADMINISTRATOR`. |
| DELETE     | `/api/recipe/:id`     | Elimina una receta específica.                    | Ninguna.                          |

### Comentarios

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| GET        | `/api/comment/:id`    | Obtiene comentarios asociados a una receta.        | Ninguna.                          |
| POST       | `/api/comment/`       | Crea un nuevo comentario.                         | Ninguna.                          |
| GET        | `/api/comment/`       | Obtiene todos los comentarios.                    | Ninguna.                          |
| PATCH      | `/api/comment/:id`    | Actualiza un comentario específico.               | Requiere rol `USER` o `ADMINISTRATOR`. |
| DELETE     | `/api/comment/:id`    | Elimina un comentario específico.                 | Ninguna.                          |

### Chats

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| POST       | `/api/chat/`          | Crea un nuevo chat.                               | Ninguna.                          |
| GET        | `/api/chat/:id`       | Obtiene todos los chats asociados a un usuario.   | Ninguna.                          |
| GET        | `/api/chat/:owner_id/:friend_id` | Obtiene un chat específico entre dos usuarios.   | Ninguna.                          |

### Mensajes

| **Método** | **Ruta**              | **Descripción**                                    | **Restricciones**                 |
|------------|-----------------------|----------------------------------------------------|------------------------------------|
| POST       | `/api/message/`       | Crea un nuevo mensaje.                            | Ninguna.                          |
| GET        | `/api/message/:id`    | Obtiene todos los mensajes asociados a un chat.   | Ninguna.                          |

---

## Tecnologías Utilizadas

| **Tecnología**          | **Descripción**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **Node.js + Express**   | Backend rápido y escalable para la creación de APIs.                            |
| **MongoDB + Mongoose**  | Base de datos NoSQL flexible y orientada a documentos.                          |
| **Socket.io**           | Comunicación en tiempo real ideal para chats y notificaciones.                  |
| **JWT**                 | Autenticación y autorización mediante tokens seguros.                           |

---

## Autor

- Github - [@GabrielMaQui](https://github.com/GabrielMaQui)
- Github - [PunoBootcamper](https://github.com/PunoBootcamper)
  
## Reconocimientos

Agradecimientos especiales a **Make It Real** por brindarnos el conocimiento y experiencia en distintas herramientas que fueron fundamentales para llevar adelante Sharing-Flavors.
