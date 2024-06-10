import type { Content } from 'pdfmake/interfaces';

export const headers = [
  'Código Paquete de Trabajo (PDT)',
  'Nombre del paquete de trabajo (PDT):',
];

export const getSubHeaders = (packageNumber: string, packageName: string) => {
  const subheaders = [packageNumber, packageName];
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
    name: 'Documento de Especificación de Requerimientos',
    content: [
      'Para definir claramente los requerimientos y necesidades del proyecto.',
      'Contiene un documento detallado de especificación de requerimientos.',
      'Realización de reuniones, entrevistas con stakeholders, y análisis de documentación existente.',
      'Equipo de análisis (Responsable), patrocinador del proyecto (Informado), gerente de producto (Aprobador).',
      'Inicio: 10/06/2024, Fin: 13/06/2024',
      'Aprobación por el patrocinador del proyecto y validación por los principales stakeholders.',
      'Se cuenta con la colaboración de todos los stakeholders clave.',
      'Retrasos en la disponibilidad de los stakeholders, cambios en los requerimientos.',
      'Equipo de análisis (3 personas), costo estimado: $2,000',
      'Dependiente de la aprobación inicial del proyecto, subsecuente a la fase de diseño de la aplicación.',
    ],
  },
  {
    packageName: '1.1.2',
    name: 'Análisis de Requerimientos Funcionales y No Funcionales',
    content: [
      'Para entender y documentar todos los requerimientos funcionales y no funcionales.',
      'Contiene análisis detallado de requerimientos funcionales y no funcionales.',
      'Revisiones de documentación, reuniones con stakeholders, y análisis técnico.',
      'Equipo de análisis (Responsable), arquitecto de software (Consultado), gerente de producto (Aprobador).',
      'Inicio: 14/06/2024, Fin: 17/06/2024',
      'Aprobación por el gerente de producto y validación técnica por el CTO.',
      'Se dispone de toda la documentación previa y acceso a los stakeholders.',
      'Malentendidos en los requerimientos, cambios en las expectativas de los stakeholders.',
      'Equipo de análisis (3 personas), arquitecto de software (1 persona), costo estimado: $3,000',
      'Dependiente del documento de especificación de requerimientos, subsecuente al diseño de la aplicación.',
    ],
  },
  {
    packageName: '1.2.1',
    name: 'Diseño de Interfaz de Usuario (UI/UX)',
    content: [
      'Para crear una interfaz de usuario intuitiva y amigable.',
      'Contiene diseños UI/UX detallados, wireframes, y mockups.',
      'Creación de wireframes, mockups, y prototipos interactivos.',
      'Equipo de diseño (Responsable), gerente de producto (Consultado), usuario final (Informado).',
      'Inicio: 18/06/2024, Fin: 21/06/2024',
      'Aprobación por el gerente de producto y feedback positivo de los usuarios finales.',
      'Disponibilidad de herramientas de diseño y acceso a feedback de usuarios.',
      'Problemas técnicos con herramientas de diseño, falta de alineación en visión de diseño.',
      'Equipo de diseño (2 personas), costo estimado: $4,000',
      'Dependiente del análisis de requerimientos, subsecuente al diseño de arquitectura de software.',
    ],
  },
  {
    packageName: '1.2.2',
    name: 'Diseño de Arquitectura de Software',
    content: [
      'Para estructurar la arquitectura técnica de la aplicación.',
      'Contiene diagramas de arquitectura, especificaciones técnicas.',
      'Creación de diagramas de arquitectura, especificaciones técnicas detalladas.',
      'Arquitecto de software (Responsable), equipo de desarrollo (Consultado), CTO (Aprobador).',
      'Inicio: 22/06/2024, Fin: 25/06/2024',
      'Aprobación por el CTO y validación por el equipo de desarrollo.',
      'Disponibilidad de especificaciones de requerimientos y herramientas de diseño técnico.',
      'Problemas técnicos en la implementación, falta de alineación en requerimientos técnicos.',
      'Arquitecto de software (1 persona), equipo de desarrollo (2 personas), costo estimado: $3,000',
      'Dependiente del diseño UI/UX, subsecuente al desarrollo del backend.',
    ],
  },
  {
    packageName: '1.3.1',
    name: 'Configuración del Servidor y la Base de Datos',
    content: [
      'Para establecer el entorno de backend necesario.',
      'Contiene la configuración del servidor y la base de datos.',
      'Configuración de servidores, bases de datos, y conexiones.',
      'Administrador de bases de datos (Responsable), desarrollador backend (Consultado), CTO (Aprobador).',
      'Inicio: 26/06/2024, Fin: 28/06/2024',
      'Aprobación por el CTO y validación por pruebas iniciales.',
      'Disponibilidad de infraestructura necesaria y acceso a herramientas de configuración.',
      'Problemas con la infraestructura, fallos en la configuración de bases de datos.',
      'Administrador de bases de datos (1 persona), costo estimado: $2,000',
      'Dependiente del diseño de arquitectura de software, subsecuente a la implementación de la lógica de negocio.',
    ],
  },
  {
    packageName: '1.3.2',
    name: 'Implementación de Lógica de Negocio',
    content: [
      'Para desarrollar la funcionalidad principal de la aplicación.',
      'Contiene el código y algoritmos necesarios para la lógica de negocio.',
      'Desarrollo de código backend, integración de lógica de negocio.',
      'Desarrollador backend (Responsable), arquitecto de software (Consultado), gerente de producto (Informado).',
      'Inicio: 29/06/2024, Fin: 05/07/2024',
      'Aprobación por el arquitecto de software y pruebas de integración exitosas.',
      'Disponibilidad de especificaciones técnicas y acceso a herramientas de desarrollo.',
      'Errores en el código, problemas con la integración de componentes.',
      'Desarrollador backend (2 personas), costo estimado: $5,000',
      'Dependiente de la configuración del servidor y base de datos, subsecuente a la implementación de modelos de IA.',
    ],
  },
  {
    packageName: '1.4.1',
    name: 'Implementación de la Interfaz de Usuario de la Aplicación Web',
    content: [
      'Para desarrollar la interfaz de usuario de la aplicación web.',
      'Contiene el código frontend y componentes de UI.',
      'Desarrollo de código frontend, integración de componentes de UI.',
      'Desarrollador frontend (Responsable), diseñador UX/UI (Consultado), gerente de producto (Informado).',
      'Inicio: 13/07/2024, Fin: 20/07/2024',
      'Aprobación por el diseñador UX/UI y pruebas de usabilidad exitosas.',
      'Disponibilidad de especificaciones de diseño y acceso a herramientas de desarrollo frontend.',
      'Errores en el código frontend, problemas con la integración de UI.',
      'Desarrollador frontend (2 personas), costo estimado: $5,000',
      'Dependiente de la implementación de modelos de IA, subsecuente a la implementación de la interfaz móvil.',
    ],
  },
  {
    packageName: '1.4.2',
    name: 'Implementación de la Interfaz de Usuario de la Aplicación Móvil',
    content: [
      'Para desarrollar la interfaz de usuario de la aplicación móvil.',
      'Contiene el código móvil y componentes de UI.',
      'Desarrollo de código móvil, integración de componentes de UI.',
      'Desarrollador móvil (Responsable), diseñador UX/UI (Consultado), gerente de producto (Informado).',
      'Inicio: 21/07/2024, Fin: 28/07/2024',
      'Aprobación por el diseñador UX/UI y pruebas de usabilidad exitosas.',
      'Disponibilidad de especificaciones de diseño y acceso a herramientas de desarrollo móvil.',
      'Errores en el código móvil, problemas con la integración de UI.',
      'Desarrollador móvil (2 personas), costo estimado: $5,000',
      'Dependiente de la implementación de la interfaz web, subsecuente a la integración de funcionalidades clave.',
    ],
  },
  {
    packageName: '1.5.1',
    name: 'Pruebas Unitarias del Backend y Frontend',
    content: [
      'Para asegurar que cada unidad de código funciona correctamente.',
      'Contiene casos de prueba unitarios y resultados.',
      'Desarrollo de casos de prueba, ejecución y registro de resultados.',
      'Equipo de QA (Responsable), desarrolladores (Consultado), gerente de producto (Informado).',
      'Inicio: 06/08/2024, Fin: 10/08/2024',
      'Aprobación por el equipo de QA y validación por los desarrolladores.',
      'Disponibilidad de ambiente de pruebas y casos de prueba detallados.',
      'Errores en el código, problemas de configuración del ambiente de pruebas.',
      'Equipo de QA (3 personas), costo estimado: $3,000',
      'Dependiente de la integración de funcionalidades clave, subsecuente a las pruebas de integración.',
    ],
  },
  {
    packageName: '1.5.2',
    name: 'Pruebas de Integración',
    content: [
      'Para asegurar que los diferentes módulos funcionan correctamente juntos.',
      'Contiene casos de prueba de integración y resultados.',
      'Desarrollo de casos de prueba de integración, ejecución y registro de resultados.',
      'Equipo de QA (Responsable), desarrolladores (Consultado), gerente de producto (Informado).',
      'Inicio: 11/08/2024, Fin: 15/08/2024',
      'Aprobación por el equipo de QA y validación por los desarrolladores.',
      'Disponibilidad de ambiente de pruebas y casos de prueba detallados.',
      'Errores en la integración de módulos, problemas de configuración del ambiente de pruebas.',
      'Equipo de QA (3 personas), costo estimado: $4,000',
      'Dependiente de las pruebas unitarias, subsecuente a las pruebas de aceptación del usuario.',
    ],
  },
  {
    packageName: '1.6.1',
    name: 'Preparación y Publicación en la Web y Tiendas de Aplicaciones (iOS, Android)',
    content: [
      'Para lanzar la aplicación al mercado.',
      'Contiene la preparación de la aplicación para la publicación y su lanzamiento.',
      'Revisión final, empaquetado de la aplicación, y envío a tiendas de aplicaciones.',
      'Equipo de lanzamiento (Responsable), desarrolladores (Consultado), gerente de producto (Aprobador).',
      'Inicio: 21/08/2024, Fin: 25/08/2024',
      'Aprobación por el gerente de producto y aceptación por las tiendas de aplicaciones.',
      'Disponibilidad de acceso a tiendas de aplicaciones y herramientas de publicación.',
      'Rechazo por parte de las tiendas de aplicaciones, problemas técnicos durante la publicación.',
      'Equipo de lanzamiento (2 personas), costo estimado: $3,000',
      'Dependiente de las pruebas de aceptación del usuario, subsecuente a la configuración del ambiente de producción.',
    ],
  },
  {
    packageName: '1.6.2',
    name: 'Configuración de Ambiente de Producción',
    content: [
      'Para asegurar un entorno de producción estable y seguro.',
      'Contiene la configuración final del ambiente de producción.',
      'Configuración de servidores de producción, base de datos, y servicios.',
      'Administrador de sistemas (Responsable), desarrolladores (Consultado), CTO (Aprobador).',
      'Inicio: 26/08/2024, Fin: 30/08/2024',
      'Aprobación por el CTO y validación por el equipo de desarrollo.',
      'Disponibilidad de servidores y herramientas necesarias.',
      'Problemas técnicos con la configuración, errores durante la migración de datos.',
      'Administrador de sistemas (1 persona), costo estimado: $4,000',
      'Dependiente de la preparación para publicación, subsecuente a la documentación del usuario y capacitación.',
    ],
  },
  {
    packageName: '1.7.1',
    name: 'Creación de Manuales de Usuario',
    content: [
      'Para proporcionar a los usuarios finales guías de uso de la aplicación.',
      'Contiene manuales de usuario detallados.',
      'Redacción y diseño de manuales de usuario.',
      'Equipo de documentación (Responsable), desarrolladores (Consultado), gerente de producto (Aprobador).',
      'Inicio: 31/08/2024, Fin: 05/09/2024',
      'Aprobación por el gerente de producto y validación por los usuarios finales.',
      'Disponibilidad de información completa sobre la aplicación y herramientas de documentación.',
      'Errores en la documentación, falta de claridad en las guías.',
      'Equipo de documentación (2 personas), costo estimado: $2,000',
      'Dependiente de la configuración del ambiente de producción, subsecuente a la capacitación de usuarios finales.',
    ],
  },
  {
    packageName: '1.7.2',
    name: 'Capacitación de Usuarios Finales',
    content: [
      'Para asegurar que los usuarios finales sepan cómo usar la aplicación.',
      'Contiene sesiones de capacitación y materiales.',
      'Organización de sesiones de capacitación, creación de materiales de apoyo.',
      'Equipo de capacitación (Responsable), desarrolladores (Consultado), gerente de producto (Informado).',
      'Inicio: 06/09/2024, Fin: 10/09/2024',
      'Feedback positivo de los usuarios finales y aprobación por el gerente de producto.',
      'Disponibilidad de usuarios finales y materiales de capacitación.',
      'Falta de disponibilidad de usuarios finales, problemas durante las sesiones de capacitación.',
      'Equipo de capacitación (2 personas), costo estimado: $3,000',
      'Dependiente de la creación de manuales de usuario, subsecuente al soporte post-lanzamiento.',
    ],
  },
  {
    packageName: '1.8.1',
    name: 'Establecimiento de Sistema de Soporte',
    content: [
      'Para proporcionar soporte continuo a los usuarios.',
      'Contiene la configuración de un sistema de soporte.',
      'Configuración de herramientas de soporte, definición de procesos.',
      'Equipo de soporte (Responsable), desarrolladores (Consultado), gerente de producto (Aprobador).',
      'Inicio: 11/09/2024, Fin: 15/09/2024',
      'Aprobación por el gerente de producto y validación por los usuarios finales.',
      'Disponibilidad de herramientas de soporte y definición clara de procesos.',
      'Problemas técnicos con las herramientas de soporte, falta de claridad en los procesos.',
      'Equipo de soporte (2 personas), costo estimado: $2,000',
      'Dependiente de la capacitación de usuarios finales, subsecuente al monitoreo y resolución de problemas.',
    ],
  },
  {
    packageName: '1.8.2',
    name: 'Monitoreo y Resolución de Problemas',
    content: [
      'Para identificar y solucionar problemas post-lanzamiento.',
      'Contiene reportes de monitoreo y registros de problemas.',
      'Monitoreo continuo, identificación y resolución de problemas.',
      'Equipo de soporte (Responsable), desarrolladores (Consultado), CTO (Informado).',
      'Inicio: 16/09/2024, Fin: 20/09/2024',
      'Resolución exitosa de problemas y aprobación por el CTO.',
      'Disponibilidad de herramientas de monitoreo y acceso a desarrolladores.',
      'Problemas técnicos no detectados, falta de recursos para resolución rápida.',
      'Equipo de soporte (2 personas), costo estimado: $3,000',
      'Dependiente del establecimiento del sistema de soporte, subsecuente a las actualizaciones y mejoras continuas.',
    ],
  },
];

export const getTablesContent = (): Content => {
  const content = secondDynamicColumnData.map((dynamicCol) => {
    const subHeaders = getSubHeaders(dynamicCol.packageName, dynamicCol.name);

    const tableBody = firstStaticColumn.map((row, idx) => {
      return [row, dynamicCol.content[idx]];
    });

    return {
      style: 'tableExample',
      table: {
        body: [
          [
            {
              text: headers[0],
              style: 'tableHeader',
              bold: true,
              fontSize: 14,
            },
            {
              text: headers[1],
              style: 'tableHeader',
              bold: true,
              fontSize: 14,
            },
          ],
          subHeaders,
          ...tableBody,
        ],
      },
      pageBreak: 'after',
    } satisfies Content;
  });

  return content;
};
