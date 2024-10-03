/**
 * API en JavaScript para almacenar grandes cantidades de datos estructurados.
 * A diferencia de LocalStorage puede almacenar strings, booleans, incluso archivos, cualquier tipo de dato soportado por JavaScript.
 * No tiene límites conocidos aunque los archivos de más de 50 mb va a preguntar por permisos.
 * Soportada en todas las últimas versiones de los navegadores
 *
 * Es diferente a LocalStorage
 *
 * LocalStorage permite almacenar solo strings, mientras que IndexedDB permite cualquier tipo de dato soportado por JS.
 * LocalStorage es una buena solución para almacenar poca información (como un carrito de compras avandonado o un JSON Web Token).
 *
 * IndexedDB es una base de datos completa, pero ten en cuenta que estos datos siguen siendo visibles para cualquiera, por lo que no es
 * recomendable almacenar passwords o tarjetas de crédito.
 *
 *
 */
