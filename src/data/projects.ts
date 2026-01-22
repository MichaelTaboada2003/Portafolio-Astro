// Importar iconos
import PythonIcon from '../icons/PythonIcon.astro';
import HtmlIcon from '../icons/HtmlIcon.astro';
import ReactIcon from '../icons/ReactIcon.astro';
import TailwindIcon from '../icons/TailwindIcon.astro';
import TypeScriptIcon from '../icons/TypeScriptIcon.astro';
import JavaScriptIcon from '../icons/JavaScriptIcon.astro';
import NextjsIcon from '../icons/NextjsIcon.astro';
import AstroIcon from '../icons/AstroIcon.astro';
import CssIcon from '../icons/CssIcon.astro';
import ExpoIcon from '../icons/ExpoIcon.astro';
import ThreejsIcon from '../icons/ThreejsIcon.astro';
import NodejsIcon from '../icons/NodejsIcon.astro';
import SupabaseIcon from '../icons/SupabaseIcon.astro';
import GroqIcon from '../icons/GroqIcon.astro';
import VueIcon from '../icons/VueIcon.astro';

export const TAGS = {
    PYTHON: {
        name: 'Python',
        class: 'bg-[#3776AB]/25 text-[#3776AB]',
        icon: PythonIcon,
    },
    HTML: {
        name: 'HTML',
        class: 'bg-[#E34F26]/25 text-[#E34F26]',
        icon: HtmlIcon,
    },
    CSS: {
        name: 'CSS',
        class: 'bg-[#1572B6]/25 text-[#1572B6]',
        icon: CssIcon,
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        class: 'bg-[#F7DF1E]/25 text-[#F7DF1E]',
        icon: JavaScriptIcon,
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        class: 'bg-[#3178C6]/25 text-[#3178C6]',
        icon: TypeScriptIcon,
    },
    REACT: {
        name: 'React',
        class: 'bg-[#61DAFB]/25 text-[#61DAFB]',
        icon: ReactIcon,
    },
    REACT_NATIVE: {
        name: 'React Native',
        class: 'bg-[#61DAFB]/25 text-[#61DAFB]',
        icon: ReactIcon,
    },
    VUE: {
        name: 'Vue.js',
        class: 'bg-[#4FC08D]/25 text-[#4FC08D]',
        icon: VueIcon,
    },
    NEXTJS: {
        name: 'Next.js',
        class: 'bg-white/15 text-white',
        icon: NextjsIcon,
    },
    ASTRO: {
        name: 'Astro',
        class: 'bg-[#FF5D01]/25 text-[#FF5D01]',
        icon: AstroIcon,
    },
    NODEJS: {
        name: 'Node.js',
        class: 'bg-[#339933]/25 text-[#339933]',
        icon: NodejsIcon,
    },
    TAILWIND: {
        name: 'Tailwind CSS',
        class: 'bg-[#06B6D4]/25 text-[#06B6D4]',
        icon: TailwindIcon,
    },
    SUPABASE: {
        name: 'Supabase',
        class: 'bg-[#3ECF8E]/25 text-[#3ECF8E]',
        icon: SupabaseIcon,
    },
    GROQ: {
        name: 'Groq',
        class: 'bg-[#F54F35]/25 text-[#F54F35]',
        icon: GroqIcon,
    },
    MYSQL: {
        name: 'MySQL',
        class: 'bg-[#4479A1]/25 text-[#4479A1]',
        icon: null,
    },
    POSTGRESQL: {
        name: 'PostgreSQL',
        class: 'bg-[#4169E1]/25 text-[#4169E1]',
        icon: null,
    },
    DOCKER: {
        name: 'Docker',
        class: 'bg-[#2496ED]/25 text-[#2496ED]',
        icon: null,
    },
    TERRAFORM: {
        name: 'Terraform',
        class: 'bg-[#7B42BC]/25 text-[#7B42BC]',
        icon: null,
    },
    AWS: {
        name: 'AWS',
        class: 'bg-[#FF9900]/25 text-[#FF9900]',
        icon: null,
    },
    THREEJS: {
        name: 'Three.js',
        class: 'bg-white/15 text-white',
        icon: ThreejsIcon,
    },
    EXPO: {
        name: 'Expo',
        class: 'bg-[#1a1a2e]/60 text-[#c4c4c4]',
        icon: ExpoIcon,
    },
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: typeof TAGS[keyof typeof TAGS][];
    github?: string;
    preview?: string;
    featured?: boolean;
}

export const PROJECTS: Project[] = [
    {
        title: 'Networking App',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Desarrollada con arquitectura moderna y diseño responsivo.',
        image: '/networking.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/networking',
        featured: true
    },
    {
        title: 'Exosky - NASA Space Apps 2024',
        description: 'Aplicación interactiva desarrollada para el NASA Space Apps Challenge 2024. Permite explorar y visualizar exoplanetas descubiertos, con información detallada y visualización 3D del cielo desde estos mundos distantes.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.REACT, TAGS.THREEJS, TAGS.PYTHON, TAGS.TAILWIND],
        github: 'https://github.com/MichaelTaboada2003/Exosky-Nasa-Space-App-2024',
    },
    {
        title: 'Gym Tracker',
        description: 'Aplicación móvil para seguimiento de entrenamientos en el gimnasio. Permite registrar ejercicios, series, repeticiones y peso. Incluye estadísticas de progreso y visualización de datos.',
        image: '/gym-tracker.png',
        tags: [TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.TYPESCRIPT],
        github: 'https://github.com/MichaelTaboada2003/gym-tracker',
        featured: true
    },
    {
        title: 'Catálogos Automáticos',
        description: 'Generador de catálogos automáticos para productos de empresas, con la capacidad de generar un archivo PDF con un diseño personalizado basado en la información dinámica de los productos.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.PYTHON, TAGS.HTML],
        github: 'https://github.com/MichaelTaboada2003/Generador-de-Catalogos-Version-Publica',
    },
    {
        title: 'A World Away - NASA 2025',
        description: 'Proyecto desarrollado para el NASA Space Apps Challenge 2025. Exploración de mundos lejanos y visualización de datos astronómicos con IA.',
        image: '/AWorldAway.png',
        tags: [TAGS.PYTHON, TAGS.VUE, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        featured: true
    },
    {
        title: 'NASA 2025 Blog',
        description: 'Blog informativo sobre astronomía y exploración espacial, creado como complemento del proyecto NASA Space Apps 2025.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.ASTRO, TAGS.TAILWIND],
        github: 'https://github.com/MichaelTaboada2003/NASA-2025-BLOG',
    },
    {
        title: 'Landing E-commerce',
        description: 'Landing page moderna para e-commerce con diseño responsive y optimizado para conversiones.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
        github: 'https://github.com/MichaelTaboada2003/Landing-e-commerce',
    },
    {
        title: 'Reproductor Musical',
        description: 'Reproductor de música web con interfaz moderna, controles de reproducción y lista de canciones.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
        github: 'https://github.com/MichaelTaboada2003/Reproductor-musical',
    },
    {
        title: 'Infrastructure as Code - Node.js',
        description: 'Infraestructura como código para desplegar aplicaciones Node.js con Express y MySQL usando Terraform y Docker.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.TERRAFORM, TAGS.DOCKER, TAGS.NODEJS, TAGS.MYSQL],
        github: 'https://github.com/MichaelTaboada2003/IaaC-nodejs-express-mysql',
    },
    {
        title: 'LIAV Infrastructure',
        description: 'Proyecto de infraestructura cloud con automatización y despliegue continuo.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.TERRAFORM, TAGS.AWS, TAGS.DOCKER],
        github: 'https://github.com/MichaelTaboada2003/liav-infraestructure',
    },
    {
        title: 'Teoría de Colas',
        description: 'Simulador de teoría de colas para análisis de sistemas de espera y optimización de servicios.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.PYTHON],
        github: 'https://github.com/MichaelTaboada2003/Teoria-de-colas',
    },
    {
        title: 'Interfaz de Software',
        description: 'Proyecto académico de diseño e implementación de interfaces de usuario.',
        image: 'https://i.postimg.cc/0y0QbD59/928shots-so.webp',
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
        github: 'https://github.com/MichaelTaboada2003/Intefaz-de-Software',
    },
]

export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
export const getAllProjects = () => PROJECTS;
