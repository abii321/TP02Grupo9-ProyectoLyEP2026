# 🐾 Huellitics — Plataforma SaaS de Gestión Comercial y Analítica Inteligente
Huellitics es una plataforma SaaS orientada a pequeñas y medianas empresas dedicadas a la venta y distribución de productos para mascotas. Su objetivo es centralizar la gestión de clientes, facilitar el seguimiento comercial y proporcionar información útil para la toma de decisiones mediante herramientas de análisis de datos e Inteligencia Artificial.

---

## Equipo N.º 9 — LyEP 2026
- **Cansino Oliva, Celeste Luján**
- **Orellana, Ariana Plácida Guadalupe**
- **Terán, Luciana Abigail**

---

## Arquitectura del proyecto
El repositorio utiliza una arquitectura desacoplada cliente-servidor, que separa la interfaz de usuario de la lógica de negocio y el acceso a los datos.
- **Frontend:** React y Vite.
- **Backend:** Node.js y Express, mediante una API REST.
- **Base de datos:** MongoDB Atlas.
- **Modelado de datos:** Mongoose.

### Estructura del repositorio
```text
TP02Grupo9-ProyectoLyEP2026/
├── client/                 # Aplicación frontend (React / Vite)
└── server/                 # Backend REST API (Node.js / Express)
    ├── config/             # Conexion a la base de datos
    ├── controllers/        # Controladores y lógica de negocio
    ├── models/             # Modelos de datos de Mongoose
    └── routes/             # Definición de rutas y endpoints REST
```

---

## Instalación y puesta en marcha

### Requisitos previos
Antes de ejecutar el proyecto, es necesario contar con:
- [Node.js](https://nodejs.org/) y npm instalados.
- Una cuenta y un clúster configurado en [MongoDB Atlas](https://www.mongodb.com/atlas).
- Git para clonar el repositorio.

### 1. Clonar el repositorio
```bash
git clone https://github.com/abii321/TP02Grupo9-ProyectoLyEP2026.git
cd TP02Grupo9-ProyectoLyEP2026
```

### 2. Configurar y ejecutar el backend
Ingresar a la carpeta `server/` e instalar las dependencias:
```bash
cd server
npm install
```
Crear un archivo `.env` en la raíz de `server/` con las siguientes variables:
```dotenv
PORT=3001
MONGO_URI=tu_cadena_de_conexion_mongodb_atlas
```
Reemplazar `tu_cadena_de_conexion_mongodb_atlas` por la cadena de conexión correspondiente al clúster de MongoDB Atlas.
Verificar que la dirección IP esté autorizada en la configuración de acceso de MongoDB Atlas y que las credenciales sean correctas.
Iniciar el servidor de desarrollo:
```bash
npm run dev
```
El backend estará disponible en `http://localhost:3001`.

### 3. Configurar y ejecutar el frontend
Abrir una nueva terminal, regresar a la raíz del repositorio e ingresar a `client/`:
```bash
cd client
npm install
npm run dev
```
El frontend estará disponible en `http://localhost:5173`.

---

## Documentación de la API REST
La API REST implementa las operaciones CRUD del módulo de clientes, permitiendo registrar, consultar, actualizar y eliminar clientes.

**URL base local:** `http://localhost:3001/api/clientes`

### Endpoints disponibles
| Método | Endpoint | Descripción | Respuestas esperadas |
|---|---|---|---|
| GET | `/api/clientes` | Obtiene la lista de clientes. | `200 OK` |
| GET | `/api/clientes/:id` | Obtiene los datos de un cliente específico. | `200 OK`, `404 Not Found` |
| POST | `/api/clientes` | Registra un nuevo cliente, sujeto a las validaciones implementadas. | `201 Created`, `400 Bad Request` |
| PUT | `/api/clientes/:id` | Actualiza un cliente existente. | `200 OK`, `400 Bad Request` |
| DELETE | `/api/clientes/:id` | Elimina un cliente de la base de datos. | `200 OK`, `404 Not Found` |
> Los códigos indicados corresponden a las respuestas previstas para las operaciones habituales y deben coincidir con las respuestas efectivamente implementadas en el backend.

### Ejemplo de solicitud: registrar un cliente
**Método:** `POST`
**Endpoint:** `/api/clientes`
**Cuerpo de la petición (JSON):**
```json
{
  "username": "cliente123",
  "email": "cliente@example.com",
  "password": "contraseña_de_ejemplo",
  "name": {
    "firstname": "Ana",
    "lastname": "Gómez"
  },
  "address": {
    "city": "San Salvador de Jujuy"
  },
  "phone": "3884000000"
}
```
Los valores son ilustrativos y deben adaptarse a las validaciones y al esquema definidos en el backend.

---

## Metodología de trabajo y contribución
El desarrollo se organizó mediante Git y GitHub, siguiendo las pautas de trabajo colaborativo establecidas por la cátedra.

### Ramas de trabajo
Cada integrante desarrolló sus funcionalidades en una rama propia siguiendo la convención: `feature/ApellidoNombre`

### Commits semánticos
Se utilizaron commits descriptivos siguiendo la convención de commits semánticos, con prefijos como:
- `feat:` incorporación de funcionalidades.
- `fix:` corrección de errores.
- `docs:` creación o modificación de documentación.
- `refactor:` mejora de la estructura del código sin cambiar su comportamiento.
- `chore:` tareas de mantenimiento y configuración.

### Pull Requests (PR)
Las integraciones a la rama principal se realizaron mediante Pull Requests documentados que incluyen:
- Título representativo. 
- Descripción del trabajo realizado. 
- Identificación de los archivos modificados.
- Issues relacionados
- Declaración del uso de herramientas de Inteligencia Artificial, cuando corresponde.

---

## Declaración de uso de Inteligencia Artificial

### Herramientas utilizadas

- ChatGPT.
- Gemini.

### Propósito y alcance
Las herramientas de Inteligencia Artificial se utilizaron como apoyo durante el desarrollo, principalmente para la estructuración de código inicial (*boilerplate*) de controladores, la elaboración de esquemas con Mongoose y la validación de expresiones regulares para los endpoints.

### Revisión y validación
El código elaborado con asistencia de estas herramientas fue revisado y adaptado por las integrantes del equipo. Se realizaron comprobaciones y pruebas manuales para evaluar su funcionamiento y detectar posibles errores, procurando mantener la coherencia con los requisitos del proyecto.

---

## Licencia y uso
Este proyecto fue desarrollado con fines académicos en el marco de la asignatura LyEP 2026.
