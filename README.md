# Gestión Creatio Web

- ## Version: 0.1.0

---

# Estandar de creación de ficheros y métodos del proyecto

- Patrón de diseño: MVC

- Se usara para el nombre de los métodos camelCase.

- Aquellas funciones que se usen en mas de un archivo y tengan un funcionalidas general iran en la carpeta shared.

- Las PR o Pull Request tendrán como asunto el número de commit y el nombre de la rama. 

- Especificación para hacer commits

  - [Convencion de commits](https://www.conventionalcommits.org/es/v1.0.0/)
  - [Guía práctica](https://medium.com/dottech/mejorando-los-mensajes-de-git-commit-con-husky-y-commitlint-7bddf6ab22c2)

  - Seguír la siguientes especificaciones
    * Los commits DEBEN iniciarse con un prefijo de tipo que consiste en un sustantivo, feat, fix, etc., seguido del ámbito OPCIONAL, !OPCIONAL, y dos puntos y un espacio REQUERIDO.
    * El tipo feat DEBE ser usado cuando un commit agrega una nueva funcionalidad a la aplicación o librería.
    El tipo fix DEBE ser usado cuando el commit representa una corrección a un error en el código de la aplicación (bug).
    * Un ámbito PUEDE ser añadido después de un tipo. Un ámbito DEBE consistir en un sustantivo que describa una sección de la base del código encerrado entre paréntesis, ej., fix(parser) o sin son varios cambios fix(mixed):.
    * Una descripción DEBE ir inmediatamente después del guión y el espacio del número de commit que se esta realizando. La descripción es resúmen corto de los cambios realizados en el código, ej., fix: array parsing issue when multiple spaces were contained in string..
    * Un cuerpo de commit más extenso PUEDE agregarse después de la descripción corta, dando información contextual adicional acerca de los cambios en el código. El cuerpo DEBE iniciar después de una línea en blanco después de la descripción.

  - Casos de uso
    * feat(validators-employed): #01 - Add new validator to employed method create

    * fix: #022 - Fix config env file

- Antes de hacer push
 - Debemos ejecutar npm run pretty,que esta especificado en el package.json, para formatear nuestro código según el archivo de configuración para mantener una buena sintaxis.

```bash
npm run pretty
```

## Controllers

### Nombre de los métodos

    - findAll
    - findById
    - create{NameModel}
    - update{NameModel}
    - delete{NameModel}

### Ejemplo

    - createEmployed

## Validators

### Nombre de los métodos

    - {NameModel}FindByIdValidator
    - {NameModel}CreateValidator
    - {NameModel}UpdateValidator
    - {NameModel}DeleteValidator

### Ejemplo

    - employedCreateValidator

- Nota: NameModel hace referencia a el nombre que tiene tu modelo

# Todas las aportaciones, ideas y contribuciones para mejorar el código y proyecto siempre seran bienvenidas. 😀🔥