// Images ------------------------------
import pio1 from '../assets/pio1.png'
import pio2 from '../assets/pio2.png'
import poe1 from '../assets/poe1.png'
import poe2 from '../assets/poe2.png'
import tur1 from '../assets/tur1.png'
import tur2 from '../assets/tur2.png'
import agr1 from '../assets/agr1.png'
import agr2 from '../assets/agr2.png'
import eap1 from '../assets/eap1.png'
import eap2 from '../assets/eap2.png'
import api1 from '../assets/api1.png'
import api2 from '../assets/api2.png'
import cva1 from '../assets/cva1.png'
import cva2 from '../assets/cva2.png'
import mtc1 from '../assets/mtc1.png'
import mtc2 from '../assets/mtc2.png'

// Objects ------------------------------
export const portfolioObjects = [
    /**---------------------------------
     * Pionners
     ---------------------------------*/
    {
        images: [pio1, pio2],
        title: "Pioneers",
        description: "Aplicación móvil para la admnistración de asociados, créditos y aportes para pequeñas y medianas cooperativas y fondos de empleados. Esta aplicación también esta pensada para los asociados de las cooperativas, en la cual pueden consultar sus estados financieros, solicitar y administrar nuevos créditos.",
        client: "Producto propio",
        platforms: "iOS, Web",
        technologies: "Swift, React Js, Firebase",
        //url: "http://pioneers.com",
        //github: "https://github.com/espaciotiago",
        //linkedin: "https://github.com/espaciotiago",
        //facebook: "https://github.com/espaciotiago",
        //twitter: "https://github.com/espaciotiago",
        //youtube: "https://github.com/espaciotiago",
        //instagram: "https://github.com/espaciotiago",
        mobile: true,
        type: "project"
    },
    /**---------------------------------
     * Pohema
     ---------------------------------*/
    {
        images: [poe1, poe2],
        title: "Pohema",
        description: "La fundación pohema ofrece, a traves de esta aplicación móvil, una herramienta para el rápido diagnostico de cancer infantil, según los lineamientso del manual AIEPI. Asi mismo, la aplicación permite generar discusiones sobre el tema y resolver dudas o compartir contenido relevante, para la creación de una comunidad en torno a la oncología pediátrica.",
        client: "Fundación Pohema",
        platforms: "Android, iOS, Web",
        technologies: "React native, React Js",
        url: "http://imcica.com",
        mobile: true,
        type: "project"
    },
    /**---------------------------------
     * Turnow
     ---------------------------------*/
    {
        images: [tur1, tur2],
        title: "Turnow",
        description: "Es un sistema de gestión móvil y web, para que las empresas con turnos rotativos puedan crear y administrar los ciclos de turnos para sus empleados. Los empleados, a traves de la aplicación móvil, pueden administrar y visualizar sus turnos, asi como hacer pedidos de cambio de turno o vacaciones.",
        client: "Turnow - Independiente",
        platforms: "Android, iOS, Web",
        technologies: "React native, React Js",
        mobile: true,
        type: "project"
    },
    /**---------------------------------
     * Agroapp
     ---------------------------------*/
    {
        images: [agr1, agr2],
        title: "Agroapp",
        description: "Aplicación móvil para el manejo de incidentes en maquinaria agricola en el campo. Permite generar avisos y ordenes de mantenimiento, asi como hacer el pedido de los repuestos necesarios al almacen. Esta aplicación genera los avisos, ordenes y requisición de repuestos en SAP.",
        client: "Incauca S.A.S - Providencia S.A",
        platforms: "Android",
        technologies: "Android (Java), .Net",
        mobile: true,
        type: "project"
    },
    /**---------------------------------
     * E-apps
     ---------------------------------*/
    {
        images: [eap1, eap2],
        title: "E-apps",
        description: "Aplicación móvil para gestion de inventarios, prestamos y entrega de dotaciones e items, en empresas de manufactura.",
        client: "E-apps - Independiente",
        platforms: "Android",
        technologies: "Android (Java)",
        mobile: false,
        type: "project"
    },
    /**---------------------------------
     * Apigen
     ---------------------------------*/
    {
        images: [api1, api2],
        title: "Apigen",
        description: "Api generator permite a los desarrolladores crear bases de datos y APIs sobre las mismas de forma gráfica y simple. Es una herramienta web perfecta para prototipado rapido de APIs como servicio.",
        client: "Producto propio",
        platforms: "Web",
        technologies: "React Js",
        mobile: false,
        type: "project"
    },
    /**---------------------------------
     * Cvadmin
     ---------------------------------*/
    {
        images: [cva1, cva2],
        title: "Cvadmin",
        description: "CVAdmin es un repositorio de hojas de vida para la gestión de candidatos y generación de reportes sobre las conclusiones de las entrevistas a los candidatos.",
        client: "Nicepeople Consulting",
        platforms: "Web",
        technologies: "React Js",
        url: "http://www.nicepeopleconsulting.com/cvadmin/",
        mobile: false,
        type: "project"
    },
    /**---------------------------------
     * Mi tienda café
     ---------------------------------*/
    {
        images: [mtc1, mtc2],
        title: "Mi tienda café",
        description: "En Mi tienda café encontrarás el café de tu gusto, donde cada grano será cuidadosamente seleccionado para ti. Encontrarás cafes especiales, orgánicos, de origen, varietales, accesorios, métodos de filtrados y más. Mi tienda café es un marketplace que pretende reuinr a las marcas de cafes especiales, de origen, varietales y demas, en un solo lugar.",
        client: "Producto propio",
        platforms: "Web",
        technologies: "React Js, Firebase",
        url: "https://mitiendacafe.com/#/",
        instagram: "https://www.instagram.com/mitiendacafecom/",
        youtube: "https://www.youtube.com/channel/UCitl_ZY3oeOKjSw1a7fpCpg",
        facebook: "https://www.facebook.com/mitiendacafe/",
        mobile: false,
        type: "project"
    },
]

export const contentObject = [
    /**---------------------------------
     * Tecnocretinos
     ---------------------------------*/
    {
        images: [],
        title: "Tecnocretinos",
        description: "Hay suficientes tutoriales, mooc, podcast, libros, video vlogs y lecturas que te enseñan a programar y a crear aplicaciones de 0 a 100. Por eso decidimos enfocarnos en otro tipo contenido, en contenido del mundo real, estrellones con los clientes, jefes, equipos de trabajo, proyectos freelance, líos legales y demás temas que rodean a la industria de la tecnología. " +
            "En este espacio hablaremos desde nuestra experiencia e invitaremos a personas que admiramos o máquinas, amigos, expertas y no tan expertas para hablar de toda clase de cretinadas geeks.",
        client: "",
        platforms: "",
        technologies: "",
        url: "",
        instagram: "https://www.instagram.com/tecnocretinos/",
        youtube: "https://www.youtube.com/channel/UCXkkm-gmg4jJ-uBJdt7t7hA",
        content: true,
        type: "content"
    },
]

export const moreObject = [
    /**---------------------------------
     * Coffee lover - Tintao
     ---------------------------------*/
    {
        images: [],
        title: "Tintao café",
        description: "Me considero un amante del café, por ese motivo en 2018 cree, junto con 2 amigos igual de apasionados por el tema, la marca de cafes de origen Tintao café. Un marca que vela por crear espacios para la creatividad, la innovación y la interacción a través de experiencias de #cafe",
        client: "",
        platforms: "",
        technologies: "",
        instagram: "https://www.instagram.com/tintaocafe/",
        content: true,
        type: "more"
    },
    /**---------------------------------
     * Santad up comedy
     ---------------------------------*/
    {
        images: [],
        title: "Stand up comedy",
        description: 'Me apasiona el humor y el fino arte de hacer reir. Desde mis épocas como estudiante he hecho standup comedy en espacios universitaroios, bares, teatros y alguna vez en televisión regional. Un día decidí pararme frente a un público con la firme intención de hacerlos reir, tarea, que debo aclarar, no es cosa facil; ha sido una de las "locuras" más arriesgadas que he emprendido, pero de la cual he obtenido experiencias inolvidables.',
        client: "",
        platforms: "",
        technologies: "",
        content: true,
        type: "more"
    },
]
