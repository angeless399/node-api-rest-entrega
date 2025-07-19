# Entrega Final

Api Rest en Node.js - datos en Firebase - deploy en Vercel

## Documentación - Metodos y rutas

### 1. Obtener todos los productos

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

### 2. Obtener un producto identificado por ID

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