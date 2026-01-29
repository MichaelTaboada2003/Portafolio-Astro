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

// Proyectos destacados para la página principal (los 3 originales)
export const PROJECTS: Project[] = [
    {
        title: 'Networking App',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Con +55 usuarios',
        image: '/networking.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        preview: 'https://networking-livid.vercel.app/',
        featured: true
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
        title: 'A World Away - NASA 2025',
        description: 'Proyecto desarrollado para el NASA Space Apps Challenge 2025. Exploración de mundos lejanos y visualización de datos astronómicos con IA.',
        image: '/AWorldAway.png',
        tags: [TAGS.PYTHON, TAGS.VUE, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        preview: 'https://a-world-away-nasa2025-web.vercel.app/es-ES',
        featured: true
    },
]

// Los 6 proyectos seleccionados para "Todos los proyectos"
export const ALL_SELECTED_PROJECTS: Project[] = [
    {
        title: 'Shainy',
        description: 'Plataforma e-commerce de gestión de ventas con sincronización de inventario en tiempo real y checkout dinámico vía WhatsApp.',
        image: '/shainy.png',
        tags: [TAGS.NEXTJS, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
    {
        title: 'Networking App',
        description: 'Aplicación web para gestión de contactos profesionales y networking. Incluye autenticación de usuarios, gestión de perfiles, dashboard personalizado y exportación de datos. Con +55 usuarios',
        image: '/networking.png',
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE, TAGS.GROQ],
        preview: 'https://networking-livid.vercel.app/',
        featured: true
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
        title: 'Exosky - NASA Space Apps 2024',
        description: 'Visualizador interactivo del cielo nocturno desde la superficie de exoplanetas. Desarrollado para NASA Space Apps 2024.',
        image: '/exosky.png',
        tags: [TAGS.REACT, TAGS.PYTHON, TAGS.THREEJS, TAGS.TAILWIND],
        github: 'https://github.com/MichaelTaboada2003/Exosky-Nasa-Space-App-2024',
    },
    {
        title: 'A World Away - NASA 2025',
        description: 'Proyecto desarrollado para el NASA Space Apps Challenge 2025. Exploración de mundos lejanos y visualización de datos astronómicos con IA.',
        image: '/AWorldAway.png',
        tags: [TAGS.VUE, TAGS.PYTHON, TAGS.THREEJS, TAGS.GROQ],
        github: 'https://github.com/MichaelTaboada2003/AWorldAway_Nasa2025',
        preview: 'https://a-world-away-nasa2025-web.vercel.app/es-ES',
        featured: true
    },
    {
        title: 'Novenas 2025',
        description: 'Aplicación web para el seguimiento de asistencias de las Novenas navideñas con inteligencia artificial.',
        image: '/novenas.png',
        tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.TYPESCRIPT],
    },
]

export const getFeaturedProjects = () => PROJECTS.filter(p => p.featured);
export const getAllProjects = () => ALL_SELECTED_PROJECTS;
