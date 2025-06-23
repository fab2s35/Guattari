Miembros del equipo 

──────────────────────────────────────────────────

Fabiola Aracely Retana Osorto 20200393 

Paola Andrea Rivera Martínez 20230523

David Miguel Zepeda Romero 20230271


# Guattari

Innovando la esencia, adaptándonos al futuro.

---

## 🚀 Sobre el Proyecto

**Guattari** busca transformar un concepto tradicional en una experiencia digital moderna sin perder su identidad original. Este proyecto incluye:

* Un sitio web administrativo.
* Una aplicación móvil multiplataforma.

Ambos productos están diseñados para adaptarse a la nueva era digital, ofreciendo una experiencia fluida, eficiente y moderna tanto a usuarios como a administradores.

---

## 🔧 Tecnologías Utilizadas

| Tecnología         | Descripción                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| JavaScript         | Lenguaje de programación utilizado tanto en frontend como en backend.                          |
| React Native       | Framework para el desarrollo de apps nativas para Android/iOS con una sola base de código.     |
| MERN Stack         | MongoDB, Express.js, React.js y Node.js para el desarrollo fullstack de la web administrativa. |
| Figma              | Diseño de interfaces de usuario para la app móvil.                                             |
| Canva              | Creación de logotipos y recursos visuales.                                                     |
| Visual Studio Code | Editor de código utilizado para toda la programación.                                          |
| MongoDB            | Base de datos NoSQL orientada a documentos.                                                    |
| GitHub             | Repositorio para control de versiones y trabajo colaborativo.                                  |

---

## 🧱 Estructura del Proyecto

```bash
Guattari/
├── Backend/
│   ├── node_modules/                # Dependencias de backend
│   ├── .env                         # Variables de entorno
│   ├── package.json                 # Dependencias y scripts
│   ├── package-lock.json
│   ├── app.js                       # Configuración principal de Express
│   ├── index.js                     # Punto de entrada del servidor
│   ├── database.js                  # Conexión a MongoDB
│   └── src/
│       ├── controllers/             # Lógica de negocio de las rutas
│       ├── middlewares/            # Funciones de middleware (auth, errores, etc.)
│       ├── models/                  # Modelos de Mongoose
│       ├── routes/                  # Definición de endpoints API
│       ├── utils/                   # Utilidades y funciones auxiliares
│       └── config.js                # Configuraciones generales

├── Frontend/
│   ├── public/                      # Archivos públicos
│   │   └── node_modules/           # (Puede ignorarse en el repositorio)
│   ├── src/
│   │   ├── assets/                 # Recursos (fuentes, íconos, etc.)
│   │   ├── components/             # Componentes reutilizables de UI
│   │   ├── img/                    # Imágenes del proyecto
│   │   ├── layouts/                # Estructura base de páginas (navbar, footer, etc.)
│   │   └── Pages/
│   │       ├── Private/            # Vistas privadas protegidas
│   │       └── Public/             # Vistas públicas
│   │           ├── AboutUs/
│   │           ├── AddCode/
│   │           ├── Contactanos/
│   │           ├── Estancias/
│   │           ├── Login/
│   │           ├── MainPage/
│   │           ├── NewPassword/
│   │           ├── Productos/
│   │           ├── Profile/
│   │           └── RecoverPassword/
│   │               └── recoverPassword.css
│   └── package.json               # Dependencias del frontend

```

---

## 📃 Requisitos del Sistema

| Recurso             | Mínimo                                  | Recomendado                        |
| ------------------- | --------------------------------------- | ---------------------------------- |
| Sistema operativo   | Windows 7+, macOS Sierra, Linux         | Windows 10+, macOS Monterey        |
| RAM                 | 4 GB                                    | 8 GB o más                         |
| Node.js             | 14.x o superior                         | 18.x o superior                    |
| MongoDB             | Atlas (cloud) o local                   | MongoDB Atlas (cloud)              |
| Navegador           | Chrome, Firefox, Safari                 | Última versión de Chrome o Firefox |
| Conexión a Internet | Estable para descargas y sincronización | Rápida (20 Mbps o superior)        |

---

## 🚧 Instalación y Ejecución

### 🔢 Clonar el proyecto

```bash
git clone https://github.com/usuario/guattari.git
FRONTEND
cd guattari

```

### 🗃️ Backend (Express + MongoDB)

```bash
cd backend
npm install
# Crear archivo .env
cp .env.example .env
# Editar .env con la URI de MongoDB Atlas
npm run dev
```

### 👁️ Frontend Web (React)

```bash
 cd Frontend --> cd public --> cd src --> cd Pages --> cd Public --> Open Terminal --> npm i install --> npm run dev
```



---

## 🌟 Características Destacadas

* Registro y login de usuarios con validaciones.
* Panel administrativo web con manejo de productos, usuarios y pedidos.
* Interfaces creativas y intuitivas para los usuarios
  

