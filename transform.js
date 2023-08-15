// transform.js

const datos = [
    {
      id: 1,
      nombre: 'Juan',
      habilidades: ['JavaScript', 'HTML', 'CSS'],
      proyectos: [
        { id: 1, nombre: 'Proyecto 1' },
        { id: 2, nombre: 'Proyecto 2' }
      ]
    },
    {
      id: 2,
      nombre: 'María',
      habilidades: ['Python', 'SQL', 'Django'],
      proyectos: [
        { id: 3, nombre: 'Proyecto 3' },
        { id: 4, nombre: 'Proyecto 4' }
      ]
    },
    {
      id: 3,
      nombre: 'Pedro',
      habilidades: ['Java', 'Spring', 'Hibernate'],
      proyectos: [
        { id: 5, nombre: 'Proyecto 5' },
        { id: 6, nombre: 'Proyecto 6' }
      ]
    }
  ];
  
  // Filtrar desarrolladores que tienen "JavaScript" como habilidad
  const desarrolladoresJavascript = datos.filter(desarrollador => desarrollador.habilidades.includes('JavaScript'));
  
  // Obtener los proyectos en los que trabajan los desarrolladores
  const proyectosDesarrolladores = datos.reduce((proyectos, desarrollador) => {
    proyectos.push(...desarrollador.proyectos.map(proyecto => proyecto.nombre));
    return proyectos;
  }, []);
  
  console.log("Desarrolladores con habilidad JavaScript:", desarrolladoresJavascript);
  console.log("Proyectos en los que trabajan los desarrolladores JavaScript:", proyectosDesarrolladores);
  