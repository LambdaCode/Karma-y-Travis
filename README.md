# Práctica: Karma y Travis
## ESIT ULL - Grado en Ingeniería Informática - Tercer Curso - Itinerario: Computación
## Team: Adrián Rodríguez Bazaga (AdrianBZG) & Rudolf Cicko (alu0100824780)

[![Build Status](https://travis-ci.org/LambdaCode/Karma-y-Travis.svg?branch=master)](https://travis-ci.org/LambdaCode/Karma-y-Travis)

Este repositorio aloja la práctica de uso de Karma para probar en diferentes navegadores y Travis para integración continua.

Esta aplicación nos permite realizar conversiones de medidas entre:
* Kelvin
* Celsius
* Fahrenheit

Y además entre:
* Metros
* Pulgadas


### Despliegue en github.io:
* [Click aquí](http://lambdacode.github.io/Mocha-y-Chai/)

### Repositorio de trabajo:
* [Click aquí](https://github.com/LambdaCode/Karma-y-Travis)

### Validación por www.W3.org (validator.w3.org)
Resultado: 0 errores y 0 warnings.
![W3 Validation](http://i.imgur.com/hqHRNup.png?1 "W3 Validation")

### Métricas JSHint (http://jshint.com/)
Resultado: 0 errores y 0 warnings.
![JSHint Metricas](http://i.imgur.com/4zDVjyW.png?1 "JSHint Metricas")

### Desarrolladores

#### Adrián Rodríguez Bazaga
  - Email: arodriba@ull.edu.es
  - [Página personal](http://adrianbzg.github.io)

#### Rudolf Cicko
  - Email: alu0100824780@ull.edu.es
  - [Página personal](http://alu0100824780.github.io)


### Vista previa

![](http://i.imgur.com/SdCLHfK.png?1)

### Tutorial ###
Para realizar una conversión se puede simplemente teclear: `32C to K` o también `32Celsius to Kelvin` o además `32Cel to Kel` o `32C K`. Para tener esta libertad a la hora de analizar la cadena se ha utilizado una potente expresión regular que automágicamente detecta los patrones y sabe de qué medida a cuál queremos convertir.

Además se pueden escribir valores con exponentes: `3.24e-4Cel to K` que convertirá 0.000324 Celsius a Kelvin.

Además se ha implementado la posibilidad de realizar conversiones entre medidas de longitud como metros (meters) y pulgadas (inches): `32m to i`, `420i to m`, `32m i`, `420i m`.



**Enlace al campus de la asignatura Procesadores de Lenguages:**

* [Procesadores de Lenguajes](https://campusvirtual.ull.es/1516/course/view.php?id=178)
