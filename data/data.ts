import type { Content } from 'pdfmake/interfaces';

export const headers = [
  'Código Paquete de Trabajo (PDT): Según el PDT.',
  'Nombre del paquete de trabajo (PDT):',
];

export const getSubHeaders = (packageNumber: string) => {
  const subheaders = [packageNumber, 'SCOPE STATEMENT'];
  return subheaders;
};

const firstStaticColumn = [
  'Objetivo del Paquete de Trabajo: Para qué se elabora el PDT.',
  'Descripción del Paquete de Trabajo: Qué contiene, en qué consiste, cómo es, dimensiones, cotas, etc.',
  'Descripción del Trabajo a Realizar (Actividades): Cómo se va a elaborar el PDT.',
  'Asignación de Responsabilidades: Quiénes intervienen, y qué rol desempeñan en la elaboración.',
  'Fechas Programadas: Cuándo se va a elaborar el PDT.',
  'Criterios de Aceptación: Quién, y cómo se dará por válido y aceptado el PDT.',
  'Supuestos: Situaciones que se toman como verdaderas, reales, o ciertas, para efectos de la planificación del PDT.',
  'Riesgos: Eventos cuya ocurrencia impactará los objetivos del alcance, tiempo, costo, o calidad, del PDT.',
  'Recursos Asignados y Costos: Qué recursos se necesitan para elaborar el PDT, de qué tipo, en qué cantidades, y con qué costos.',
  'Dependencias: Qué precedente y subsecuente tiene el PDT.',
];

const secondDynamicColumnData = [
  {
    packageName: '1.1.1',
    content: [
      'Crear un documento detallado de especificación de requisitos para el ChatBot Divar.',
      'Elaborar un análisis de requisitos funcionales y no funcionales para el proyecto.',
      'Diseñar la interfaz de usuario con enfoque en UX para la aplicación.',
      'Desarrollar la arquitectura de software de la aplicación.',
      'Configurar el servidor y la base de datos necesarios para la aplicación.',
      'Implementar la lógica de negocio de la aplicación.',
      'Desarrollar la interfaz de usuario para la aplicación web.',
      'Desarrollar la interfaz de usuario para la aplicación móvil.',
      'Realizar pruebas unitarias para backend y frontend.',
      'Realizar pruebas de integración de los distintos módulos de la aplicación.',
    ],
  },
  {
    packageName: '1.1.2',
    content: [
      'Crear un documento detallado de especificación de requisitos para el ChatBot Divar.',
      'Elaborar un análisis de requisitos funcionales y no funcionales para el proyecto.',
      'Diseñar la interfaz de usuario con enfoque en UX para la aplicación.',
      'Desarrollar la arquitectura de software de la aplicación.',
      'Configurar el servidor y la base de datos necesarios para la aplicación.',
      'Implementar la lógica de negocio de la aplicación.',
      'Desarrollar la interfaz de usuario para la aplicación web.',
      'Desarrollar la interfaz de usuario para la aplicación móvil.',
      'Realizar pruebas unitarias para backend y frontend.',
      'Realizar pruebas de integración de los distintos módulos de la aplicación.',
    ],
  },
];

export const getTablesContent = (): Content => {
  const content = secondDynamicColumnData.map((dynamicCol) => {
    const subHeaders = getSubHeaders(dynamicCol.packageName);

    const tableBody = firstStaticColumn.map((row, idx) => {
      return [row, dynamicCol.content[idx]];
    });

    return {
      style: 'tableExample',
      table: {
        body: [headers, subHeaders, ...tableBody],
      },
      pageBreak: 'after',
    } satisfies Content;
  });

  return content;
};

console.log(getTablesContent());
