# Gestión Creatio Web

- ## Version: 0.1.0

---

# Estandar de creación de ficheros y métodos del proyecto

- Patrón de diseño: MVC

- Se usara tanto para el nombre de los métodos como el de las variables camelCase.

- Aquellas funciones que se usen en mas de un archivo y tengan una funcionalidad general iran en la carpeta shared.

- Las PR o Pull Request tendrán como asunto el número de commit y el nombre de la rama. 

- Especificación para hacer commits

  - [Convención de commits](https://www.conventionalcommits.org/es/v1.0.0/)
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


- Guía para hacer PR
    1. Debés de hacer fork del proyecto original y clonar el proyecto que acabas de bifurcar, todo esto en github.

        **Nota**: Tienes que agregar tu espacio remoto a tu repositorio local.
    2. Sincronizar el repositorio bifurcado, para esto necesitamos tambien agregar el espacio remoto del respositorio original.

    3. Debemos hacer merge de la rama del repositorio original con el que estemos trabajando en local.

    4. Ejecutar el comando npm run pretty, añadir todos los archivos y hacer commit según la convención preestablecida.

    5. Crear una PR en github.

    6. Listo esperar que te acepten la PR.

    **Te dejo un ejemplo de como hacerlo en el siguiente enlace:**
    [Guía para hacer sincronizar repositorio](https://www.jesusamieiro.com/como-mantener-sincronizado-un-fork-en-github-con-el-repositorio-principal/)


- Antes de hacer push
    - Debemos ejecutar npm run pretty,que esta especificado en el package.json, para formatear nuestro código según el archivo de configuración para mantener una buena sintaxis.

Ejemplo: 

```bash
npm run pretty

git add -A && git commit -m "docs: #02 - Add steps to create PR"
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