// ============================================================
// SITE DATA — Replace placeholder values with your real assets
// All image paths are relative to /public/
// All video URLs should be Vimeo embed URLs
// ============================================================

export const siteConfig = {
  name: 'Mahnoor Gul',
  title: 'Motion Designer & Animator',
  tagline: 'I craft fantasy-inspired worlds through animation, motion, and visual storytelling.',
  email: 'mah98656@gmail.com',
  phone: '+92 319 591 4246',
  whatsapp: 'https://wa.me/923195914246',
  location: 'Based in Pakistan · Open to Riyadh, KSA & Remote',
  instagram: 'https://www.instagram.com/', // REPLACE: add your Instagram URL
  behance: 'https://www.behance.net/',     // REPLACE: add your Behance URL
  linkedin: 'https://www.linkedin.com/',   // REPLACE: add your LinkedIn URL
  availability: 'Available for motion design, animation & multimedia roles',
}

export const heroData = {
  videoSrc: '/videos/hero-background-loop.mp4',       // REPLACE: your hero loop video
  posterSrc: '/images/hero/hero-background-fallback.webp', // REPLACE: your fallback image
  photoSrc: '/images/about/mahnoor-photo.webp',       // REPLACE: your professional photo
}

export const showreelData = {
  masterReel: {
    vimeoUrl: 'https://player.vimeo.com/video/XXXXXXXXX', // REPLACE: your master showreel Vimeo URL
    poster: '/images/hero/showreel-poster.webp',           // REPLACE: showreel poster
    label: 'Master Showreel',
  },
  animationReel: {
    vimeoUrl: 'https://player.vimeo.com/video/XXXXXXXXX', // REPLACE: your animation reel Vimeo URL (optional)
    poster: '/images/hero/showreel-animation-poster.webp',
    label: 'Animation Reel',
  },
}

export const thesisFilm = {
  title: 'Thesis Film',         // REPLACE: Your thesis film's actual title
  tagline: 'A cinematic journey into a fantasy-inspired world.', // REPLACE
  year: '2024',
  duration: '3 min 24 sec',    // REPLACE
  role: 'Director · Animator · Character Designer · Compositor',
  tools: ['Blender', 'After Effects', 'Animate CC', 'Photoshop'],
  vimeoUrl: 'https://player.vimeo.com/video/XXXXXXXXX', // REPLACE
  heroImage: '/images/projects/thesis/thesis-hero.webp',         // REPLACE
  thumbnail: '/images/projects/thesis/thesis-thumbnail.webp',    // REPLACE
  stills: [
    '/images/projects/thesis/thesis-still-01.webp', // REPLACE
    '/images/projects/thesis/thesis-still-02.webp', // REPLACE
    '/images/projects/thesis/thesis-still-03.webp', // REPLACE
    '/images/projects/thesis/thesis-still-04.webp', // REPLACE
  ],
  concept: `This thesis film was the culmination of my Digital Arts degree — a short animated film set in a fantasy world rich with atmosphere, emotion, and visual storytelling. The project pushed me to work across every stage of production: concept, storyboard, character design, 3D modeling, animation, and compositing.`,
  development: `The development process began with world-building — defining the visual language, the color palette, and the emotional arc of the story. Every scene was planned through animatics before entering production. The rendering pipeline combined Blender for 3D with After Effects for compositing and motion graphics overlays.`,
  learnings: [
    'Managing a full production pipeline end-to-end as a solo creator',
    'The importance of pre-production planning in reducing revision time',
    'Lighting and color temperature as storytelling tools in 3D',
    'Compositing techniques that blend 2D and 3D elements seamlessly',
    'Iterating on character performance to convey emotion without dialogue',
  ],
}

export const projects3D = [
  {
    id: 'official-teaser',
    title: 'Official Teaser',
    category: '3D Animation',
    year: '2024',
    tools: ['Blender', 'After Effects', 'Premiere Pro'],
    thumbnail: '/images/projects/3d/official-teaser-thumbnail.webp', // REPLACE
    preview: '/videos/3d/official-teaser-preview.mp4',                // REPLACE
    vimeoUrl: 'https://player.vimeo.com/video/XXXXXXXXX',             // REPLACE
    stills: [
      '/images/projects/3d/official-teaser-still-01.webp', // REPLACE
      '/images/projects/3d/official-teaser-still-02.webp', // REPLACE
    ],
    description: 'A cinematic 3D teaser exploring atmosphere, lighting, and storytelling through environmental animation.',
    featured: true,
  },
  {
    id: '3d-stories-office',
    title: '3D Stories — The Office',
    category: '3D Animation',
    year: '2024',
    tools: ['Blender', 'After Effects'],
    thumbnail: '/images/projects/3d/3d-stories-office-thumbnail.webp', // REPLACE
    preview: '/videos/3d/3d-stories-office-preview.mp4',                // REPLACE
    vimeoUrl: '',
    stills: ['/images/projects/3d/3d-stories-office-still-01.webp'],    // REPLACE
    description: 'An interior 3D scene bringing a contemporary office environment to life with character and detail.',
    featured: false,
  },
  {
    id: '3d-stories-bedroom',
    title: '3D Stories — The Bedroom',
    category: '3D Animation',
    year: '2024',
    tools: ['Blender', 'After Effects'],
    thumbnail: '/images/projects/3d/3d-stories-bedroom-thumbnail.webp', // REPLACE
    preview: '/videos/3d/3d-stories-bedroom-preview.mp4',                // REPLACE
    vimeoUrl: '',
    stills: ['/images/projects/3d/3d-stories-bedroom-still-01.webp'],    // REPLACE
    description: 'A warmly lit bedroom scene exploring soft lighting, atmosphere, and environmental storytelling.',
    featured: false,
  },
]

export const projects2D = [
  {
    id: 'experimental-2d',
    title: 'Experimental 2D Animation',
    category: '2D Animation',
    year: '2024',
    tools: ['Adobe Animate CC', 'After Effects', 'Photoshop'],
    thumbnail: '/images/projects/2d/experimental-2d-thumbnail.webp', // REPLACE
    preview: '/videos/2d/experimental-2d-preview.mp4',                // REPLACE
    vimeoUrl: 'https://player.vimeo.com/video/XXXXXXXXX',             // REPLACE
    stills: [
      '/images/projects/2d/experimental-2d-still-01.webp', // REPLACE
      '/images/projects/2d/experimental-2d-still-02.webp', // REPLACE
    ],
    description: 'An experimental 2D animation piece exploring surreal environments, fluid movement, and expressive character work.',
    featured: true,
  },
  {
    id: 'ai-animation',
    title: 'AI Animation & Motion Work',
    category: '2D Animation',
    year: '2024',
    tools: ['Adobe Character Animator', 'After Effects', 'Animate CC'],
    thumbnail: '/images/projects/2d/ai-animation-thumbnail.webp', // REPLACE
    preview: '/videos/2d/ai-animation-preview.mp4',                // REPLACE
    vimeoUrl: '',
    stills: ['/images/projects/2d/ai-animation-still-01.webp'],    // REPLACE
    description: 'Character animation and motion work combining traditional 2D techniques with AI-assisted animation tools.',
    featured: false,
  },
  {
    id: 'internship-animation',
    title: 'Internship Animation Work',
    category: '2D Animation',
    year: '2023',
    tools: ['Adobe Animate CC', 'After Effects'],
    thumbnail: '/images/projects/2d/internship-animation-thumbnail.webp', // REPLACE
    preview: '/videos/2d/internship-animation-preview.mp4',                // REPLACE
    vimeoUrl: '',
    stills: ['/images/projects/2d/internship-animation-still-01.webp'],    // REPLACE
    description: 'Animation work produced during my internship at Figment Craft, covering character animation and multimedia content.',
    featured: false,
  },
]

export const projectsMotion = [
  {
    id: 'logo-animation',
    title: 'Logo Animation',
    category: 'Motion Graphics',
    year: '2024',
    tools: ['After Effects', 'Illustrator'],
    thumbnail: '/images/projects/motion/logo-animation-thumbnail.webp', // REPLACE
    preview: '/videos/motion/logo-animation-preview.mp4',                // REPLACE
    vimeoUrl: '',
    description: 'Kinetic logo animation bringing brand identities to life through motion.',
    featured: false,
  },
  {
    id: 'kinetic-type',
    title: 'Kinetic Typography',
    category: 'Motion Graphics',
    year: '2024',
    tools: ['After Effects'],
    thumbnail: '/images/projects/motion/kinetic-type-thumbnail.webp', // REPLACE
    preview: '/videos/motion/kinetic-type-preview.mp4',                // REPLACE
    vimeoUrl: '',
    description: 'A kinetic typography sequence exploring the rhythm and motion of language through expressive type animation.',
    featured: true,
  },
]

export const illustrations = [
  { id: 'illus-01', src: '/images/projects/illustration/illus-01.webp', title: 'Illustration 01', orientation: 'portrait' },
  { id: 'illus-02', src: '/images/projects/illustration/illus-02.webp', title: 'Illustration 02', orientation: 'landscape' },
  { id: 'illus-03', src: '/images/projects/illustration/illus-03.webp', title: 'Illustration 03', orientation: 'portrait' },
  { id: 'illus-04', src: '/images/projects/illustration/illus-04.webp', title: 'Illustration 04', orientation: 'landscape' },
  { id: 'illus-05', src: '/images/projects/illustration/illus-05.webp', title: 'Illustration 05', orientation: 'portrait' },
  { id: 'illus-06', src: '/images/projects/illustration/illus-06.webp', title: 'Illustration 06', orientation: 'landscape' },
  { id: 'illus-07', src: '/images/projects/illustration/illus-07.webp', title: 'Illustration 07', orientation: 'portrait' },
  { id: 'illus-08', src: '/images/projects/illustration/illus-08.webp', title: 'Illustration 08', orientation: 'landscape' },
  // REPLACE: Add up to 16 total. Format: { id, src, title, orientation: 'portrait'|'landscape'|'square' }
]

export const characterDesigns = [
  {
    id: 'jackson',
    name: 'Jackson',
    description: 'Original character design developed as a full turnaround with expression sheet and color palette.',
    turnaround: '/images/projects/character/char-jackson-turnaround.webp', // REPLACE
    expressions: '/images/projects/character/char-jackson-expressions.webp', // REPLACE
    colorSheet: '/images/projects/character/char-jackson-color.webp',        // REPLACE
    thumbnail: '/images/projects/character/char-jackson-thumbnail.webp',     // REPLACE
    featured: true,
  },
  {
    id: 'truck-art',
    name: 'Truck Art & Cultural Design',
    description: 'A celebration of Pakistani Truck Art — bold, intricate folk art traditions translated into contemporary character and graphic design.',
    thumbnail: '/images/projects/character/truck-art-thumbnail.webp', // REPLACE
    images: [
      '/images/projects/character/truck-art-01.webp', // REPLACE
      '/images/projects/character/truck-art-02.webp', // REPLACE
    ],
    featured: false,
  },
  {
    id: 'player-pieces',
    name: 'Game Design — Player Pieces',
    description: 'Character design and illustration for a board game, including player pieces, stickers, and box art.',
    thumbnail: '/images/projects/character/player-pieces-thumbnail.webp', // REPLACE
    images: [
      '/images/projects/character/char-player-pieces.webp', // REPLACE
      '/images/projects/character/char-stickers.webp',      // REPLACE
    ],
    featured: false,
  },
]

export const brandingProjects = [
  {
    id: 'brand-01',
    title: 'Brand Identity Project 01',  // REPLACE with real brand name
    category: 'Brand Identity',
    year: '2023',
    deliverables: ['Logo', 'Business Card', 'Flyer', 'Standee', 'Brand Sheet'],
    thumbnail: '/images/projects/branding/brand-01-card.webp', // REPLACE
    fullImages: [
      '/images/projects/branding/brand-01-full-01.webp', // REPLACE
      '/images/projects/branding/brand-01-full-02.webp', // REPLACE
      '/images/projects/branding/brand-01-full-03.webp', // REPLACE
    ],
    description: 'A complete brand identity system including logo design, print collateral, and brand guidelines.',
  },
  {
    id: 'brand-02',
    title: 'Brand Identity Project 02',  // REPLACE
    category: 'Brand Identity',
    year: '2023',
    deliverables: ['Logo', 'Packaging', 'Brand Sheet'],
    thumbnail: '/images/projects/branding/brand-02-card.webp', // REPLACE
    fullImages: [
      '/images/projects/branding/brand-02-full-01.webp', // REPLACE
      '/images/projects/branding/brand-02-full-02.webp', // REPLACE
    ],
    description: 'Brand identity and packaging design project.',
  },
]

export const experience = [
  {
    role: 'Animation & Multimedia Intern',
    company: 'Figment Craft',
    period: '2023',          // REPLACE: with exact dates e.g. "June 2023 – August 2023"
    location: 'Pakistan',    // REPLACE
    responsibilities: [
      'Produced 2D character animation sequences using Adobe Animate CC and After Effects',
      'Collaborated on multimedia content including motion graphics and promotional videos',
      'Contributed to visual development and storyboarding for animation projects',
    ],
    certificateUrl: '/certs/cert-experience-figment.pdf', // REPLACE: upload your PDF
  },
  {
    role: 'Graphic Design Intern',
    company: 'Etribe Solutions',
    period: '2022',          // REPLACE: with exact dates
    location: 'Pakistan',    // REPLACE
    responsibilities: [
      'Designed brand identity systems including logos, business cards, and print collateral',
      'Created social media graphics and visual content for client campaigns',
      'Developed packaging design and promotional materials',
    ],
    certificateUrl: '/certs/cert-experience-etribe.pdf', // REPLACE
  },
]

export const education = {
  degree: 'Bachelor of Science in Digital Arts', // REPLACE with exact degree title
  university: 'University Name',                  // REPLACE
  year: '2024',                                   // REPLACE
  relevantCourses: [
    '2D & 3D Animation',
    'Motion Graphics Design',
    'Character Design & Development',
    'Visual Storytelling',
    'Digital Illustration',
  ],
}

export const skills = {
  animation: [
    { name: 'After Effects', icon: 'ae' },
    { name: 'Animate CC', icon: 'an' },
    { name: 'Character Animator', icon: 'ch' },
    { name: 'Blender', icon: 'blender' },
    { name: 'Autodesk 3ds Max', icon: '3dsmax' },
  ],
  design: [
    { name: 'Photoshop', icon: 'ps' },
    { name: 'Illustrator', icon: 'ai' },
  ],
  production: [
    { name: 'Premiere Pro', icon: 'pr' },
  ],
  disciplines: [
    '2D Character Animation',
    '3D Scene Animation',
    'Motion Graphics',
    'Storyboarding',
    'Character Rigging',
    'Visual Development',
    'Illustration',
    'Brand Identity',
    'Digital Compositing',
    'Visual Storytelling',
  ],
}

export const workCategories = [
  { label: '2D Animation', href: '/2d-animation', description: 'Character animation, expressive motion, and 2D storytelling', thumbnail: '/images/projects/2d/experimental-2d-thumbnail.webp' },
  { label: '3D Animation', href: '/3d-animation', description: 'Cinematic 3D environments, characters, and scene animation', thumbnail: '/images/projects/3d/official-teaser-thumbnail.webp' },
  { label: 'Motion Graphics', href: '/motion-graphics', description: 'Kinetic typography, logo animation, and motion design', thumbnail: '/images/projects/motion/kinetic-type-thumbnail.webp' },
  { label: 'Illustration', href: '/illustration', description: 'Character-driven illustration exploring fantasy and emotion', thumbnail: '/images/projects/illustration/illus-01.webp' },
  { label: 'Character Design', href: '/character-design', description: 'Original characters, turnarounds, and cultural design', thumbnail: '/images/projects/character/char-jackson-thumbnail.webp' },
  { label: 'Branding', href: '/branding', description: 'Brand identity systems, print collateral, and packaging', thumbnail: '/images/projects/branding/brand-01-card.webp' },
]
