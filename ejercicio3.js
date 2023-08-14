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
  
  // Obtener el listado de desarrolladores con habilidad "JavaScript"
  const desarrolladoresConJavaScript = datos.filter((desarrollador) =>
    desarrollador.habilidades.includes('JavaScript')
  );
  
  // Obtener el listado de proyectos en los que trabajan los desarrolladores con habilidad "JavaScript"
  const proyectosDeDesarrolladoresConJavaScript = desarrolladoresConJavaScript.reduce(
    (proyectos, desarrollador) => proyectos.concat(desarrollador.proyectos),
    []
  );
  
  console.log('Desarrolladores con habilidad "JavaScript":');
  console.log(desarrolladoresConJavaScript);
  
  console.log('Proyectos en los que trabajan los desarrolladores con habilidad "JavaScript":');
  console.log(proyectosDeDesarrolladoresConJavaScript);
  