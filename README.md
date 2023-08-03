# Ejercicio 1: 
He añadido todos los módulos que componen el temario
# Ejercicio 2 Arreglar bug

En el código proporcionado, el bucle for que calcula la suma total tiene un error en su condición. La condición del bucle for está configurada con i <= numeros.length, lo que significa que el bucle también intentará acceder al elemento en la posición numeros[numeros.length], que no existe (el índice máximo válido es numeros[numeros.length - 1]).

Para corregir este error, simplemente tenemos que cambiar la condición del bucle for a i < numeros.length,
# Ejercicio 3 Transformaciones

para resolver este ejercicio, podemos utilizar el método filter para obtener el listado de desarrolladores que tienen "JavaScript" como habilidad. Luego, utilizaremos este resultado para obtener los proyectos en los que trabajan.
# Ejercicio 4- Arreglar bug de asincronia

El problema aquí es que la función obtenerUsuario está utilizando una operación asincrónica con setTimeout, pero la función no devuelve el resultado esperado correctamente debido a que el valor de usuario se retorna antes de que la asignación se realice dentro del callback de setTimeout. Por lo tanto, se obtiene undefined.

Para solucionar esto, podemos utilizar Promesas o async/await para manejar la asincronía y esperar a que la llamada se complete antes de retornar el resultado. hemos atteglado el problema usandoasync/await:
#Proyecto Wimblecode