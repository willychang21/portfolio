import { IconType } from 'react-icons';
import { FaPython, FaJs, FaSwift, FaCuttlefish, FaReact, FaAws, FaGoogle, FaDocker, FaGithub, FaEnvelope, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiTypescript, SiSvelte, SiNestjs, SiExpress, SiGraphql, SiAxios, SiPrisma, SiVite, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiElasticsearch, SiFirebase, SiKubernetes, SiAnsible, SiLinux, SiApachekafka, SiNeo4J, SiNextdotjs, SiAmazondynamodb, SiMui, SiAmazons3, SiBootstrap, SiPostman, SiFlask, SiYoutubemusic } from 'react-icons/si';
import { TbApi, TbBeach } from 'react-icons/tb';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export interface Skill {
    name: string;
    icon: IconType;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const personalInfo = {
    name: 'Chun Chieh Chang',
    avatar: '/avatar.jpeg',
    intro: "As a Master's student in Computer Science at the University of Illinois Urbana-Champaign, I specialize in full-stack development, AI, and cloud computing. Currently, I'm interning at Kocree, where I design and implement end-to-end systems for AI music creation.",
    socialLinks: [
        {
            name: 'Github',
            url: 'https://github.com/willychang21',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/willychang17/',
            icon: FaLinkedin,
        },
        {
            name: 'Email',
            url: 'mailto:cc132@illinois.edu',
            icon: FaEnvelope,
        },
        {
            name: 'Medium',
            url: 'https://medium.com/@willychang17',
            icon: FaMedium,
        },
        {
            name: 'Youtube Music',
            url: 'https://music.youtube.com/playlist?list=PL0glHKqK-DSrMOnJtbyBhA-9s3ZMD4D8k&si=yt9Fo-HC3lw1ZavU',
            icon: SiYoutubemusic,
        }
    ] as SocialLink[],
    skills: [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Python', icon: FaPython },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'JavaScript', icon: FaJs },
                { name: 'Swift', icon: FaSwift },
                { name: 'C++', icon: FaCuttlefish },
            ],
        },
        {
            category: 'Web Development',
            skills: [
                { name: 'React', icon: FaReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'Svelte', icon: SiSvelte },
                { name: 'NestJS', icon: SiNestjs },
                { name: 'Express.js', icon: SiExpress },
                { name: 'Flask', icon: SiFlask },
                { name: 'RESTful', icon: TbApi },
                { name: 'GraphQL', icon: SiGraphql },
                { name: 'Postman', icon: SiPostman }
            ],
        },
        {
            category: 'Libraries',
            skills: [
                { name: 'TanStack', icon: TbBeach },
                { name: 'Axios', icon: SiAxios },
                { name: 'PrismaORM', icon: SiPrisma },
                { name: 'Vite', icon: SiVite },
                { name: 'TailwindCSS', icon: SiTailwindcss },
                { name: 'MUI', icon: SiMui },
                { name: 'Bootstrap', icon: SiBootstrap }
            ],
        },
        {
            category: 'Storage',
            skills: [
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'MySQL', icon: SiMysql },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'Redis', icon: SiRedis },
                { name: 'DynamoDB', icon: SiAmazondynamodb },
                { name: 'S3', icon: SiAmazons3 },
                { name: 'Neo4j', icon: SiNeo4J },
            ],
        },
        {
            category: 'Message Brokers / Search Engines',
            skills: [
                { name: 'Kafka', icon: SiApachekafka },
                { name: 'ElasticSearch', icon: SiElasticsearch },
            ],
        },
        {
            category: 'Cloud Platforms',
            skills: [
                { name: 'AWS', icon: FaAws },
                { name: 'GCP', icon: FaGoogle },
                { name: 'Firebase', icon: SiFirebase },
            ],
        },
        {
            category: 'DevOps',
            skills: [
                { name: 'Docker', icon: FaDocker },
                { name: 'Kubernetes', icon: SiKubernetes },
                { name: 'Ansible', icon: SiAnsible },
                { name: 'GitHub Actions', icon: FaGithub },
                { name: 'Linux', icon: SiLinux },
            ],
        },
    ] as SkillCategory[],
};