// Caso 1: Calcular promedio de calificaciones por cada estudiante mostrando nombre y promedio, filtrar promedios >= 8 y ordenar de mayor a menor
const estudiantes = [
    { nombre: 'Ana', calificaciones: [8, 9, 7] },
    { nombre: 'Bruno', calificaciones: [9, 9, 8] },
    { nombre: 'Carlos', calificaciones: [6, 7, 8] }
];

const promedios = estudiantes
    .map(est => ({
        nombre: est.nombre,
        promedio: est.calificaciones.reduce((a, b) => a + b, 0) / est.calificaciones.length
    }))
    .filter(est => est.promedio >= 8)
    .sort((a, b) => b.promedio - a.promedio);

console.log("Estudiantes con promedio 8 o más:", promedios);