# Entrega Final - Curso: backend node.js - Talento Tech

Api Rest en Node.js - Autenticación JWT - datos en Firebase - deploy en Vercel 

## Documentación - Métodos y rutas

### 1. Login de usuarios - JWT 

 **POST** `/login`

 **body:**

```json
 {
    "email": "user@gmail.com",
    "password": "strongPass123"
 }
```
**Respuesta:**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNzUzMjIwNTMwLCJleHAiOjE3NTMyMjQxMzB9.cAtf8sdJ3doz2nR4ZH0Y7MgB4PHovPuGHhGPeQfoAjU"
}
```


### 2. Obtener todos los productos (público)

 **GET** `/api/products`

```json
[ 
    {
        "id": "QesPZgrm4wgne33lg2Ff",
        "name": "PRODUCTO 2",
        "price": 22222,
        "categories": [
            "deportes",
            "running"
        ]
    },
    {
        "id": "llWuXCgvCUB9rD7t8Luy",
        "name": "PRODUCTO 1",
        "price": 18280,
        "categories": [
            "pesca",
            "aire libre"
        ]
    }
]
```

### 3. Obtener un producto identificado por ID (público)

 **GET** `/api/products/ID`

 `EJEMPLO:`

 **GET** `/api/products/QesPZgrm4wgne33lg2Ff`

```json
[ 
    {
        "id": "QesPZgrm4wgne33lg2Ff",
        "name": "PRODUCTO 2",
        "price": 22222,
        "categories": [
            "deportes",
            "running"
        ]
    }
]
```
### 3. Eliminar un producto identificado por ID (privado, autenticación con JWT)

 **DELETE** `/api/products/ID`

 `EJEMPLO:`

 **DELETE** `/api/products/QesPZgrm4wgne33lg2Ff`

 **Respuesta:**
 
```bash
Status: 204 No Content
```

### 4. Creacion de un nuevo producto (privado, autenticación con JWT)

 **POST** `/api/products`

 **body:**

```json
 {
        "name": "producto 3",
        "categories": [
            "hogar",
            "accesorios"
        ],
        "price": 2550
    }
```
**Respuesta:**

```json
{
    "id": "81MaAOr1JDIHDwBzPGVi",
    "name": "producto 3",
    "price": 2550,
    "categories": [
        "hogar",
        "accesorios"
    ]
}
```

### 5. Actualización datos de un producto (privado, autenticación con JWT)

 **PUT** `/api/products/id`

  `EJEMPLO:`

 **PUT** `/api/products/81MaAOr1JDIHDwBzPGVi`


 **body:**

```json
 {
        "name": "producto 3",
        "categories": [
            "hogar",
            "electrodomestico"
        ],
        "price": 1545
    }
```
**Respuesta:**

```json
{
    "id": "81MaAOr1JDIHDwBzPGVi",
    "name": "producto 3",
    "price": 1545,
    "categories": [
        "hogar",
        "electrodomestico"
    ]
}
```