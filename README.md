# Cypress con Typescript.

### Instalar:

```
npm install cypress --save-dev
npm install --save-dev typescript
```

### Agregar dentro de la carpeta cypress

tsconfig.json file

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.*"]
}
```

### Para los specs files:

Crear carpeta 'component' dentro de cypress:

nombre_componente.cy.tsx

En la parte superior del spec file:

```ts
/// <reference path="../support/component.ts" />;
import MiComponente from "../../src/MiComponente";
import React from "react";
```

#### Para correr cypress :

```
npx cypress open
```

Alternativamente podes abrir solo el componente

```
npx cypress open --component
```
