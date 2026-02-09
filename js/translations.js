const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            stack: "Stack",
            projects: "Proyectos",
            process: "Proceso",
            bughunt: "Reto QA",
            contact: "Contacto",
            back: "Volver",
            toggle: "EN"
        },
        hero: {
            name: "Wilder Carranza",
            role: "QA Analyst",
            cta: "Ver Portfolio"
        },
        about: {
            title: "Sobre mí",
            description: "QA Analyst autodidacta y apasionado por la calidad del software. Actualmente incursionando en la automatización de pruebas para complementar mi fuerte base en testing manual y funcional.",
            download_cv: "Descargar CV"
        },
        projects: {
            title: "Automatización Básica",
            items: [
                {
                    title: "API Testing Automation",
                    desc: "Automatización básica con Postman.",
                    tech: "Postman, JavaScript, GitHub Actions",
                    repo: "Ver Código",
                    demo: "Ver Demo",
                    long_desc: "Automatización de pruebas para una API REST pública (tipo Petstore/E-commerce) utilizando Postman para el diseño de scripts y Newman para la ejecución en línea de comandos (CI/CD friendly). El proyecto valida la integridad de los datos, códigos de estado y tiempos de respuesta.",
                    purpose_title: "¿Para qué sirve esta prueba?",
                    purpose_text: "<ul><li><strong>Integridad de Contratos:</strong> Asegura que la API responda cumplir con el formato JSON y esquemas esperados.</li><li><strong>Detección Temprana:</strong> Identifica fallos en la lógica de negocio del backend antes de que impacten al frontend.</li><li><strong>Validación de Performance Básica:</strong> Alerta si los endpoints exceden tiempos de respuesta aceptables.</li></ul>",
                    basic_title: "Por qué el proyecto es básico",
                    basic_text: "El alcance se mantiene esencial para demostrar buenas prácticas de aserciones y estructuración de colecciones sin depender de sistemas con autenticación compleja o datos confidenciales. El foco está en la <strong>calidad de las validaciones</strong> y la capacidad de integración continua.",
                    scope_title: "Qué se valida / Alcance de pruebas",
                    scope_items: [
                        "Happy Paths: Creación, lectura y actualización exitosa de recursos (CRUD).",
                        "Casos Negativos: Validación de errores controlados (400 Bad Request, 404 Not Found).",
                        "Test de Esquema: Validación de tipos de datos en el JSON response.",
                        "Sanity Check: Verificación de tiempos de respuesta (< 500ms)."
                    ],
                    video_title: "Demo en video",
                    video_desc: "Se observa la ejecución de la colección completa desde la terminal utilizando Newman. Se aprecia cómo los 15 tests pasan en menos de 2 segundos y se genera automáticamente un reporte visual detallado.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidencia y descargas",
                    downloads: [
                        { text: "Descargar Reporte", icon: "file-text", url: "#" },
                        { text: "Colección JSON", icon: "file-json", url: "#" }
                    ]
                },
                {
                    title: "Web UI Automation",
                    desc: "Framework escalable usando Page Object Model (POM) para pruebas de regresión E2E.",
                    tech: "Selenium, Python, PyTest",
                    repo: "Ver Código",
                    demo: "Ver Demo",
                    long_desc: "Framework de automatización E2E para una aplicación web, desarrollado con Selenium WebDriver y JavaScript. Implementa el patrón de diseño <strong>Page Object Model (POM)</strong> para garantizar mantenimiento y escalabilidad del código.",
                    purpose_title: "¿Para qué sirve esta automatización?",
                    purpose_text: "<ul><li><strong>Regresión Visual:</strong> Asegura que los flujos críticos (Login, Búsqueda, Checkout) funcionen tras nuevos despliegues.</li><li><strong>Eficiencia:</strong> Reduce el tiempo de verificación manual de formularios y navegaciones repetitivas.</li><li><strong>Cross-Browser:</strong> Garantiza compatibilidad funcional en diferentes navegadores (Chrome/Firefox).</li></ul>",
                    basic_title: "Por qué el proyecto es básico",
                    basic_text: "Se automatiza un flujo 'Core' para demostrar arquitectura limpia y manejo de esperas implícitas/explícitas. No se busca cubrir el 100% de la web, sino mostrar cómo construir un script robusto que no sea <em>flaky</em> (propenso a fallos falsos).",
                    scope_title: "Qué se valida / Alcance de pruebas",
                    scope_items: [
                        "Login Exitoso/Fallido: Validación de credenciales y mensajes de error en UI.",
                        "Navegación: Interacción con menús y validación de redirecciones correctas.",
                        "Manejo de Elementos: Interacción con inputs, botones dinámicos y alertas modales.",
                        "Validación de Texto: Aserciones sobre títulos y mensajes de confirmación visibles."
                    ],
                    video_title: "Demo en video",
                    video_desc: "El video muestra al script levantando una instancia limpia del navegador, completando un formulario de registro y validando el mensaje de éxito automáticamente, todo en menos de 10 segundos, sin intervención humana.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidencia y descargas",
                    downloads: [
                        { text: "Descargar Capturas", icon: "image", url: "#" },
                        { text: "Ver Logs", icon: "file-code", url: "#" }
                    ]
                },
                {
                    title: "Performance Testing",
                    desc: "Pruebas de carga y estrés simulando usuarios concurrentes para validar estabilidad.",
                    tech: "JMeter, BlazeMeter",
                    repo: "Ver Código",
                    demo: "Ver Demo",
                    long_desc: "Prueba de carga y estrés sobre un endpoint de servicio público utilizando Apache JMeter. El script simula concurrencia de usuarios para analizar el comportamiento del servidor bajo presión controlada.",
                    purpose_title: "¿Para qué sirve esta prueba?",
                    purpose_text: "<ul><li><strong>Identificación de Cuellos de Botella:</strong> Detecta degradación en tiempos de respuesta al aumentar la carga.</li><li><strong>Estabilidad:</strong> Verifica que el servidor no arroje errores 5XX bajo estrés moderado.</li><li><strong>Dimensionamiento:</strong> Ayuda a entender cuántos usuarios simultáneos soporta la configuración actual.</li></ul>",
                    basic_title: "Por qué el proyecto es básico",
                    basic_text: "Al utilizar servicios públicos de terceros, la carga se limita intencionalmente (ej. 50-100 threads) para evitar comportamientos de ataque DDoS. El objetivo es demostrar la <strong>interpretación de métricas</strong> y configuración de escenarios, más que derribar un servidor.",
                    scope_title: "Qué se valida / Alcance de pruebas",
                    scope_items: [
                        "Thread Group: Configuración de Ramp-up (subida gradual) y Loop Count.",
                        "Latencia y Throughput: Medición de peticiones por segundo y tiempo de respuesta promedio.",
                        "Tasa de Error: Monitoreo de porcentaje de fallos durante el pico de carga.",
                        "Aserciones de Respuesta: Validación de que, incluso bajo carga, el contenido responda OK."
                    ],
                    video_title: "Demo en video",
                    video_desc: "Visualización del dashboard de JMeter en tiempo real: se ven las gráficas de 'Active Threads' subiendo y cómo afecta esto a la curva de 'Response Time', estabilizándose al finalizar la prueba.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidencia y descargas",
                    downloads: [
                        { text: "Descargar Reporte", icon: "file-bar-chart", url: "#" },
                        { text: "Script JMX", icon: "file-cog", url: "#" }
                    ]
                }
            ]
        },
        stack: {
            title: "Stack Tecnológico",
            details: {
                selenium: "Automaticé E2E escalable aplicando Page Object Model (POM).",
                postman: "Ejecuté API Testing end-to-end con validaciones de esquema y payload.",
                newman: "Automaticé la ejecución de colecciones Postman en CI/CD.",
                soap: "Validé contratos WSDL y servicios legacy con aserciones XML.",
                jmeter: "Simulé carga concurrente y analicé latencia.",
                swagger: "Analicé documentación viva y contratos de API.",
                cicd: "Ejecuté smoke tests automáticos en pipelines de despliegue.",
                git: "Controlé versiones y gestioné ramas para frameworks de prueba.",
                cloudwatch: "Rastreé errores mediante análisis de logs en la nube.",
                sql: "Realicé consultas complejas para validar integridad de datos (Joins/Agrupaciones).",
                dynamodb: "Validé items y persistencia en modelos NoSQL.",
                dbeaver: "Gestioné y consulté múltiples motores de base de datos.",
                jira: "Gestioné el ciclo de vida de defectos y trazabilidad de requerimientos.",
                confluence: "Documenté técnicamente planes de prueba y reportes de ejecución.",
                excel: "Diseñé matrices de prueba y gestioné datos masivos.",
                htmlcss: "Identifiqué selectores robustos para automatización."
            }
        },
        methodology: {
            title: "Proceso",
            pipeline: {
                title: "Pipeline de Contratación",
                stages: {
                    commit: "Revisar CV",
                    build: "Entrevista",
                    test: "Oferta",
                    deploy: "Onboarding"
                }
            },
            gherkin: {
                title: "Criterios de Aceptación",
                feature: "Feature: Talento QA",
                scenario: "Scenario: Encontrar al candidato ideal",
                steps: {
                    given: "que estás revisando este portafolio",
                    when: "ves la calidad de mis entregables",
                    then: "agendas una entrevista técnica"
                }
            },
            jira: {
                title: "Backlog Prioritario",
                project: "RRHH",
                id: "HIRE-01",
                status: "TODO",
                summary: "Contratar QA Analyst Proactivo",
                severity: "Blocker",
                priority: "High"
            }
        },
        contact: {
            title: "Contacto",
            desc: "¿Tienes alguna oportunidad o pregunta? Envíame un mensaje y te responderé lo antes posible.",
            email: "Correo",
            linkedin: "LinkedIn",
            github: "GitHub",
            form: {
                name: "Tu Nombre",
                email: "Tu Correo",
                message: "Mensaje",
                send: "Enviar Mensaje",
                success: "¡Gracias! Tu mensaje ha sido enviado.",
            }
        },
        bughunt: {
            title: "Reto QA: Encuentra el Bug 🐛",
            menu: "Reto QA",
            desc: "Este validador de emails tiene un error lógico. Intenta encontrar qué caso inválido deja pasar.",
            label_email: "Ingresa un correo:",
            btn_verify: "Validar Correo",
            success: "¡Lo encontraste! 🎉 El sistema aceptó un correo incompleto (faltaba .com, .pe, etc).",
            fail: "Upss.. casi. El sistema funcionó bien aquí. Sigue buscando el caso borde...",
            error_at: "Error: Falta el símbolo '@'",
            hint: "Pista: El sistema valida el '@', pero ¿valida el dominio completo?"
        },
        video: {
            title: "Video Presentación",
            placeholder: "Video próximamente...",
            video_id: "FRn5J31eAMw"
        },
        certifications: {
            title: "Certificaciones",
            items: [
                {
                    name: "Cybersecurity Fundamentals",
                    issuer: "CISCO",
                    date: "2026",
                    view: "Ver Certificado"
                },
                {
                    name: "Scrum Fundamentals Certified",
                    issuer: "SCRUMstudy",
                    date: "2026",
                    view: "Ver Certificado"
                },
                {
                    name: "Testing and Debugging",
                    issuer: "Udemy",
                    date: "2026",
                    view: "Ver Certificado"
                },
                {
                    name: "MySQL Certified",
                    issuer: "MySQL",
                    date: "2026",
                    view: "Ver Certificado"
                }
            ]
        },
        clients: {
            title: "Clientes Principales",
            view_impact: "Ver Métricas",
            items: [
                {
                    name: "CAVALI",
                    desc: "Plataforma financiera – Facturas y Pagarés",
                    points: [
                        "Identificación de +25 defectos funcionales, incluyendo 8–10 de severidad alta relacionados a estados transaccionales.",
                        "Prevención de errores críticos en procesos end-to-end antes de salida a producción.",
                        "Reducción aproximada del 30–40% de reprocesos en QA mediante validación cruzada Portal Web + API.",
                        "Detección temprana de inconsistencias por concurrencia de servicios."
                    ]
                },
                {
                    name: "SUNAT (SIRE)",
                    desc: "Integraciones tributarias – Servicios externos",
                    points: [
                        "Validación de 100% de flujos críticos de integración con servicios SUNAT.",
                        "Detección de +10 defectos de integración, principalmente en validaciones de payload.",
                        "Reducción de incidencias post-despliegue en integraciones externas en un 25%.",
                        "Mejora en la trazabilidad de errores mediante validación de logs y data persistida."
                    ]
                },
                {
                    name: "Bolsa de Valores (BVL)",
                    desc: "Ecosistema financiero regulado",
                    points: [
                        "Ejecución de pruebas funcionales en 100% de módulos asignados en entorno regulado.",
                        "Identificación de defectos de consistencia de datos y reglas de negocio.",
                        "Contribución a releases estables sin rollback, apoyando la confiabilidad del sistema.",
                        "Reducción del riesgo operativo mediante validación exhaustiva de datos."
                    ]
                }
            ]
        },
        notifications: {
            video_status: "⚠️ Nota: Los videos mostrados son referenciales (tutoriales/demos). Los videos reales de mis proyectos están en proceso de grabación y edición.",
            dismiss: "Entendido"
        },
    },
    en: {
        nav: {
            about: "About Me",
            stack: "Stack",
            projects: "Projects",
            process: "Process",
            bughunt: "QA Challenge",
            contact: "Contact",
            back: "Back",
            toggle: "ES"
        },
        hero: {
            name: "Wilder Carranza",
            role: "QA Analyst",
            cta: "View Portfolio"
        },
        about: {
            title: "About Me",
            description: "Self-taught QA Analyst passionate about software quality. Currently venturing into test automation to complement my strong background in manual and functional testing.",
            download_cv: "Download CV"
        },
        projects: {
            title: "Basic Automation",
            items: [
                {
                    title: "API Testing Automation",
                    desc: "Basic automation using Postman.",
                    tech: "Postman, JavaScript, GitHub Actions",
                    repo: "View Code",
                    demo: "View Demo",
                    long_desc: "Automation of tests for a public REST API (Petstore/E-commerce type) using Postman for script design and Newman for command-line execution (CI/CD friendly). The project validates data integrity, status codes, and response times.",
                    purpose_title: "What is this test for?",
                    purpose_text: "<ul><li><strong>Contract Integrity:</strong> Ensures the API responds complying with the expected JSON format and schemas.</li><li><strong>Early Detection:</strong> Identifies business logic failures in the backend before they impact the frontend.</li><li><strong>Basic Performance Validation:</strong> Alerts if endpoints exceed acceptable response times.</li></ul>",
                    basic_title: "Why is the project basic?",
                    basic_text: "The scope remains essential to demonstrate good assertion practices and collection structuring without relying on systems with complex authentication or confidential data. The focus is on the <strong>quality of validations</strong> and the capacity for continuous integration.",
                    scope_title: "What is validated / Test Scope",
                    scope_items: [
                        "Happy Paths: Successful creation, reading, and updating of resources (CRUD).",
                        "Negative Cases: Validation of controlled errors (400 Bad Request, 404 Not Found).",
                        "Schema Test: Validation of data types in the JSON response.",
                        "Sanity Check: Verification of response times (< 500ms)."
                    ],
                    video_title: "Video Demo",
                    video_desc: "The execution of the complete collection is observed from the terminal using Newman. It shows how the 15 tests pass in less than 2 seconds and a detailed visual report is automatically generated.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidence and downloads",
                    downloads: [
                        { text: "Download Report", icon: "file-text", url: "#" },
                        { text: "JSON Collection", icon: "file-json", url: "#" }
                    ]
                },
                {
                    title: "Web UI Automation",
                    desc: "Scalable framework using Page Object Model (POM) for E2E regression testing.",
                    tech: "Selenium, Python, PyTest",
                    repo: "View Code",
                    demo: "View Demo",
                    long_desc: "E2E automation framework for a web application, developed with Selenium WebDriver and JavaScript. Implements the <strong>Page Object Model (POM)</strong> design pattern to ensure code maintenance and scalability.",
                    purpose_title: "What is this automation for?",
                    purpose_text: "<ul><li><strong>Visual Regression:</strong> Ensures that critical flows (Login, Search, Checkout) work after new deployments.</li><li><strong>Efficiency:</strong> Reduces the time for manual verification of forms and repetitive navigation.</li><li><strong>Cross-Browser:</strong> Guarantees functional compatibility in different browsers (Chrome/Firefox).</li></ul>",
                    basic_title: "Why is the project basic?",
                    basic_text: "A 'Core' flow is automated to demonstrate clean architecture and handling of implicit/explicit waits. It does not seek to cover 100% of the web, but to show how to build a robust script that is not <em>flaky</em> (prone to false failures).",
                    scope_title: "What is validated / Test Scope",
                    scope_items: [
                        "Successful/Failed Login: Validation of credentials and error messages in UI.",
                        "Navigation: Interaction with menus and validation of correct redirects.",
                        "Element Handling: Interaction with inputs, dynamic buttons, and modal alerts.",
                        "Text Validation: Assertions on visible titles and confirmation messages."
                    ],
                    video_title: "Video Demo",
                    video_desc: "The video shows the script launching a clean browser instance, filling out a registration form, and automatically validating the success message, all in less than 10 seconds, without human intervention.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidence and downloads",
                    downloads: [
                        { text: "Download Captures", icon: "image", url: "#" },
                        { text: "View Logs", icon: "file-code", url: "#" }
                    ]
                },
                {
                    title: "Performance Testing",
                    desc: "Load and stress testing simulating concurrent users to validate system stability.",
                    tech: "JMeter, BlazeMeter",
                    repo: "View Code",
                    demo: "View Demo",
                    long_desc: "Load and stress testing on a public service endpoint using Apache JMeter. The script simulates user concurrency to analyze server behavior under controlled pressure.",
                    purpose_title: "What is this test for?",
                    purpose_text: "<ul><li><strong>Bottleneck Identification:</strong> Detects degradation in response times when increasing the load.</li><li><strong>Stability:</strong> Verifies that the server does not throw 5XX errors under moderate stress.</li><li><strong>Sizing:</strong> Helps understand how many simultaneous users the current configuration supports.</li></ul>",
                    basic_title: "Why is the project basic?",
                    basic_text: "By using third-party public services, the load is intentionally limited (e.g., 50-100 threads) to avoid DDoS attack behaviors. The objective is to demonstrate the <strong>interpretation of metrics</strong> and scenario configuration, rather than taking down a server.",
                    scope_title: "What is validated / Test Scope",
                    scope_items: [
                        "Thread Group: Configuration of Ramp-up and Loop Count.",
                        "Latency and Throughput: Measurement of requests per second and average response time.",
                        "Error Rate: Monitoring of failure percentage during peak load.",
                        "Response Assertions: Validation that, even under load, the content responds OK."
                    ],
                    video_title: "Video Demo",
                    video_desc: "Real-time visualization of the JMeter dashboard: showing 'Active Threads' graphs rising and how this affects the 'Response Time' curve, stabilizing at the end of the test.",
                    video_id: "FRn5J31eAMw",
                    evidence_title: "Evidence and downloads",
                    downloads: [
                        { text: "Download Report", icon: "file-bar-chart", url: "#" },
                        { text: "JMX Script", icon: "file-cog", url: "#" }
                    ]
                }
            ]
        },
        stack: {
            title: "Tech Stack",
            details: {
                selenium: "Implemented scalable E2E automation applying Page Object Model (POM).",
                postman: "Executed End-to-end API Testing with schema and payload validation.",
                newman: "Automated the execution of Postman collections in CI/CD.",
                soap: "Validated WSDL contracts and legacy services with XML assertions.",
                jmeter: "Simulated concurrent load and analyzed latency.",
                swagger: "Analyzed API contracts and live documentation.",
                cicd: "Executed automated smoke tests implementation in deployment pipelines.",
                git: "Managed version control and branches for test frameworks.",
                cloudwatch: "Traced errors via cloud log analysis.",
                sql: "Wrote complex queries to validate data integrity (Joins/Groupings).",
                dynamodb: "Validated items and persistence in NoSQL models.",
                dbeaver: "Managed and queried multiple database engines.",
                jira: "Managed defect lifecycle and requirement traceability.",
                confluence: "Documented test plans and execution reports.",
                excel: "Designed test matrices and managed mass data.",
                htmlcss: "Identified robust selectors for automation."
            }
        },
        methodology: {
            title: "My Process (Explained via QA)",
            pipeline: {
                title: "Hiring Pipeline",
                stages: {
                    commit: "Review CV",
                    build: "Interview",
                    test: "Offer",
                    deploy: "Onboarding"
                }
            },
            gherkin: {
                title: "Acceptance Criteria",
                feature: "Feature: QA Talent",
                scenario: "Scenario: Finding the ideal candidate",
                steps: {
                    given: "you are reviewing this portfolio",
                    when: "you see the quality of my deliverables",
                    then: "you schedule a technical interview"
                }
            },
            jira: {
                title: "Priority Backlog",
                project: "HR",
                id: "HIRE-01",
                status: "TODO",
                summary: "Hire Proactive QA Analyst",
                severity: "Blocker",
                priority: "High"
            }
        },
        contact: {
            title: "Contact",
            desc: "Have an opportunity or a question? Send me a message and I'll get back to you as soon as possible.",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "Message",
                send: "Send Message",
                success: "Thanks! Your message has been sent.",
            }
        },
        bughunt: {
            title: "QA Challenge: Find the Bug 🐛",
            menu: "QA Challenge",
            desc: "This email validator has a logical error. Try to find which invalid case it accepts.",
            label_email: "Enter email:",
            btn_verify: "Validate Email",
            success: "You found it! 🎉 The system accepted an incomplete email (missing .com, .org, etc).",
            fail: "Oops.. almost. The system worked correctly here. Keep looking for the edge case...",
            error_at: "Error: Missing '@' symbol",
            hint: "Hint: It validates '@', but does it validate the full domain?"
        },
        video: {
            title: "Video Introduction",
            placeholder: "Video coming soon...",
            video_id: "FRn5J31eAMw"
        },
        certifications: {
            title: "Certifications",
            items: [
                {
                    name: "Cybersecurity Fundamentals",
                    issuer: "CISCO",
                    date: "2026",
                    view: "View Certificate"
                },
                {
                    name: "Scrum Fundamentals Certified",
                    issuer: "SCRUMstudy",
                    date: "2026",
                    view: "View Certificate"
                },
                {
                    name: "Testing and Debugging",
                    issuer: "Udemy",
                    date: "2026",
                    view: "View Certificate"
                },
                {
                    name: "MySQL Certified",
                    issuer: "MySQL",
                    date: "2026",
                    view: "View Certificate"
                }
            ]
        },
        clients: {
            title: "Main Clients",
            view_impact: "View Metrics",
            items: [
                {
                    name: "CAVALI",
                    desc: "Financial Platform – Invoices & Promissory Notes",
                    points: [
                        "Identification of +25 functional defects, including 8–10 high severity related to transactional states.",
                        "Prevention of critical errors in end-to-end processes before production release.",
                        "Approx. 30–40% reduction in QA rework via cross-validation Web Portal + API.",
                        "Early detection of inconsistencies due to service concurrency."
                    ]
                },
                {
                    name: "SUNAT (SIRE)",
                    desc: "Tax Integrations – External Services",
                    points: [
                        "Validation of 100% of critical integration flows with SUNAT services.",
                        "Detection of +10 integration defects, mainly in payload validations.",
                        "Reduction of post-deployment incidents in external integrations by 25%.",
                        "Improvement in error traceability via logs and persisted data validation."
                    ]
                },
                {
                    name: "Stock Exchange (BVL)",
                    desc: "Regulated Financial Ecosystem",
                    points: [
                        "Execution of functional tests on 100% of assigned modules within regulated environment.",
                        "Identification of data consistency defects and business rules.",
                        "Contribution to stable releases with no rollback, supporting system reliability.",
                        "Reduction of operational risk via exhaustive data validation."
                    ]
                }
            ]
        },
        notifications: {
            video_status: "⚠️ Note: The videos shown are for reference (tutorials/demos). The real project videos are currently in recording and editing process.",
            dismiss: "Got it"
        },
        footer: {
            rights: "© 2026 Wilder Carranza. All rights reserved.",
            built: "Designed and built with precision."
        }
    }
};

export default translations;
