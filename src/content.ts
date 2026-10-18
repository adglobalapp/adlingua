// Az oldal szöveges tartalma három nyelven – egy helyen, hogy könnyű legyen cserélni.
// A [szögletes zárójeles] részek placeholderek: a valódi adatokkal kell lecserélni őket.

import type {
  AboutContent,
  CardsContent,
  ContactContent,
  FooterContent,
  GalleryContent,
  HeroContent,
  NavLink,
  Stat,
  TimelineContent,
} from './types';

export const languages = ['en', 'es', 'hu'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'hu';

export type Content = {
  nav: NavLink[];
  hero: HeroContent;
  stats: Stat[];
  about: AboutContent;
  languages: CardsContent;
  services: CardsContent;
  studies: TimelineContent;
  gallery: GalleryContent;
  contact: ContactContent;
  footer: FooterContent;
};

const hu: Content = {
  nav: [
    { label: 'Rólam', href: '#about' },
    { label: 'Nyelvek', href: '#languages' },
    { label: 'Szolgáltatások', href: '#services' },
    { label: 'Tanulmányok', href: '#studies' },
    { label: 'Kapcsolat', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Fordító · Tolmács · Zoltan Hubanov-Dimitrov',
    lines: ['Szavak,', 'amik', 'átérnek.'],
    quote: '„Pontos, gördülékeny fordítás – hogy az üzeneted ugyanúgy hasson minden nyelven.”',
    primaryCta: 'Árajánlatot kérek',
    secondaryCta: 'Bemutatkozás',
    portraitAlt: 'Portré helye',
  },
  stats: [
    { value: '3', label: 'munkanyelv' },
    { value: '[10+]', label: 'év tapasztalat' },
    { value: '[500+]', label: 'lefordított dokumentum' },
    { value: '24h', label: 'válaszidő' },
  ],
  about: {
    label: 'Rólam',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Rövid bemutatkozás: ki vagy, honnan jössz, mióta foglalkozol fordítással.]',
      '[Miben vagy különösen erős: szakterületek, ügyféltípusok, munkamódszer.]',
    ],
    facts: [
      { term: 'Munkanyelvek', value: 'HU · EN · ES' },
      { term: 'Szakterület', value: '[Jog · Gazdaság · Műszaki]' },
      { term: 'Székhely', value: '[Budapest]' },
      { term: 'Elérhető', value: '[Online és személyesen]' },
    ],
    imageAlt: 'Kép helye',
  },
  languages: {
    label: 'Nyelvek',
    title: 'Nyelvpárok',
    lead: 'Mindkét irányban, anyanyelvi szintű lektorálással.',
    items: [
      { title: 'Magyar ↔ Angol', meta: 'Írásbeli · Szóbeli', text: '[Rövid leírás a nyelvpárról és a jellemző szövegtípusokról.]' },
      { title: 'Magyar ↔ Spanyol', meta: 'Írásbeli · Szóbeli', text: '[Rövid leírás a nyelvpárról és a jellemző szövegtípusokról.]' },
      { title: 'Angol ↔ Spanyol', meta: 'Írásbeli', text: '[Rövid leírás a nyelvpárról és a jellemző szövegtípusokról.]' },
      { title: '[További nyelv]', meta: '[Típus]', text: '[Ide jöhet egy újabb nyelvpár, vagy törölhető.]' },
    ],
  },
  services: {
    label: 'Szolgáltatások',
    title: 'Amiben segítek',
    items: [
      { title: 'Szakfordítás', meta: 'Jog · Gazdaság · Műszaki', text: 'Szerződések, beszámolók, kézikönyvek pontos, terminológiahű fordítása.' },
      { title: 'Hivatalos fordítás', meta: 'Bizonyítvány · Okirat', text: 'Okiratok és bizonyítványok fordítása hivatalos ügyintézéshez.' },
      { title: 'Tolmácsolás', meta: 'Konszekutív · Kísérő', text: 'Tárgyalások, megbeszélések, rendezvények élő tolmácsolása.' },
      { title: 'Lektorálás', meta: 'Korrektúra · Stílus', text: 'Meglévő fordítások és szövegek nyelvi és szakmai ellenőrzése.' },
      { title: 'Weboldal lokalizáció', meta: 'Web · App · Marketing', text: 'Weboldalak és marketinganyagok átültetése a célpiac nyelvére és kultúrájára.' },
      { title: 'Feliratozás', meta: 'Videó · Média', text: 'Videók feliratozása és feliratfordítás időzítéssel együtt.' },
    ],
  },
  studies: {
    label: 'Tanulmányok',
    title: 'Tanulmányok és tapasztalat',
    items: [
      { period: '[2018 – 2020]', title: '[Fordító és tolmács MA]', place: '[Egyetem neve]', text: '[Szakirány, kiemelt témák, szakdolgozat.]' },
      { period: '[2014 – 2018]', title: '[Anglisztika / Hispanisztika BA]', place: '[Egyetem neve]', text: '[Rövid leírás.]' },
      { period: '[2020 – most]', title: '[Szabadúszó fordító]', place: '[Saját vállalkozás]', text: '[Jellemző ügyfelek és projektek.]' },
      { period: '[Év]', title: '[Nyelvvizsga / Tanúsítvány]', place: '[Kiállító intézmény]', text: '[Pl. C2 nyelvvizsga, szakfordítói képesítés.]' },
    ],
  },
  gallery: {
    label: 'Galéria',
    title: 'Munka közben',
    items: [
      { alt: 'Kép 1 helye' },
      { alt: 'Kép 2 helye' },
      { alt: 'Kép 3 helye' },
      { alt: 'Kép 4 helye' },
      { alt: 'Kép 5 helye' },
      { alt: 'Kép 6 helye' },
    ],
  },
  contact: {
    label: 'Kapcsolat',
    title: 'Írj nekem.',
    text: 'Küldd el a szöveg témáját, terjedelmét és a határidőt – 24 órán belül árajánlattal jelentkezem.',
    name: 'Név',
    email: 'E-mail',
    message: 'Mit kell fordítani?',
    submit: 'Üzenet küldése',
    success: 'Megnyílt a levelezőprogramod – csak küldd el az üzenetet.',
    subject: 'Ajánlatkérés – AdLingua',
    direct: { email: 'E-mail', phone: 'Telefon', location: 'Helyszín' },
  },
  footer: {
    tags: ['Fordítás', 'Tolmácsolás', 'Lektorálás'],
    rights: 'Minden jog fenntartva.',
  },
};

const en: Content = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Languages', href: '#languages' },
    { label: 'Services', href: '#services' },
    { label: 'Studies', href: '#studies' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Translator · Interpreter · Zoltan Hubanov-Dimitrov',
    lines: ['Words', 'that', 'carry over.'],
    quote: '"Accurate, natural translation – so your message lands the same way in every language."',
    primaryCta: 'Get a quote',
    secondaryCta: 'About me',
    portraitAlt: 'Portrait placeholder',
  },
  stats: [
    { value: '3', label: 'working languages' },
    { value: '[10+]', label: 'years of experience' },
    { value: '[500+]', label: 'documents translated' },
    { value: '24h', label: 'response time' },
  ],
  about: {
    label: 'About',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Short introduction: who you are, where you come from, how long you have been translating.]',
      '[What you are especially good at: fields, client types, way of working.]',
    ],
    facts: [
      { term: 'Languages', value: 'HU · EN · ES' },
      { term: 'Fields', value: '[Legal · Business · Technical]' },
      { term: 'Based in', value: '[Budapest]' },
      { term: 'Available', value: '[Online and on site]' },
    ],
    imageAlt: 'Image placeholder',
  },
  languages: {
    label: 'Languages',
    title: 'Language pairs',
    lead: 'In both directions, with native-level proofreading.',
    items: [
      { title: 'Hungarian ↔ English', meta: 'Written · Spoken', text: '[Short description of the language pair and typical texts.]' },
      { title: 'Hungarian ↔ Spanish', meta: 'Written · Spoken', text: '[Short description of the language pair and typical texts.]' },
      { title: 'English ↔ Spanish', meta: 'Written', text: '[Short description of the language pair and typical texts.]' },
      { title: '[Another language]', meta: '[Type]', text: '[Add another language pair here, or remove it.]' },
    ],
  },
  services: {
    label: 'Services',
    title: 'How I can help',
    items: [
      { title: 'Specialised translation', meta: 'Legal · Business · Technical', text: 'Contracts, reports and manuals translated accurately with consistent terminology.' },
      { title: 'Official translation', meta: 'Certificates · Documents', text: 'Translation of certificates and official documents for administration.' },
      { title: 'Interpreting', meta: 'Consecutive · Escort', text: 'Live interpreting for negotiations, meetings and events.' },
      { title: 'Proofreading', meta: 'Editing · Style', text: 'Linguistic and subject-matter review of existing translations and texts.' },
      { title: 'Website localisation', meta: 'Web · App · Marketing', text: 'Adapting websites and marketing material to the language and culture of your market.' },
      { title: 'Subtitling', meta: 'Video · Media', text: 'Subtitles and subtitle translation, timing included.' },
    ],
  },
  studies: {
    label: 'Studies',
    title: 'Studies & experience',
    items: [
      { period: '[2018 – 2020]', title: '[MA in Translation & Interpreting]', place: '[University name]', text: '[Specialisation, key topics, thesis.]' },
      { period: '[2014 – 2018]', title: '[BA in English / Spanish Studies]', place: '[University name]', text: '[Short description.]' },
      { period: '[2020 – now]', title: '[Freelance translator]', place: '[Own business]', text: '[Typical clients and projects.]' },
      { period: '[Year]', title: '[Language exam / Certificate]', place: '[Issuing body]', text: '[e.g. C2 exam, certified translator qualification.]' },
    ],
  },
  gallery: {
    label: 'Gallery',
    title: 'At work',
    items: [
      { alt: 'Image 1 placeholder' },
      { alt: 'Image 2 placeholder' },
      { alt: 'Image 3 placeholder' },
      { alt: 'Image 4 placeholder' },
      { alt: 'Image 5 placeholder' },
      { alt: 'Image 6 placeholder' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Get in touch.',
    text: "Send me the topic, length and deadline of your text – I'll reply with a quote within 24 hours.",
    name: 'Name',
    email: 'Email',
    message: 'What needs translating?',
    submit: 'Send message',
    success: 'Your email app has opened – just send the message.',
    subject: 'Quote request – AdLingua',
    direct: { email: 'Email', phone: 'Phone', location: 'Location' },
  },
  footer: {
    tags: ['Translation', 'Interpreting', 'Proofreading'],
    rights: 'All rights reserved.',
  },
};

const es: Content = {
  nav: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Idiomas', href: '#languages' },
    { label: 'Servicios', href: '#services' },
    { label: 'Estudios', href: '#studies' },
    { label: 'Contacto', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Traducción · Interpretación · Zoltan Hubanov-Dimitrov',
    lines: ['Palabras', 'que', 'llegan.'],
    quote: '«Traducciones precisas y naturales, para que tu mensaje tenga el mismo efecto en cada idioma.»',
    primaryCta: 'Pedir presupuesto',
    secondaryCta: 'Sobre mí',
    portraitAlt: 'Espacio para retrato',
  },
  stats: [
    { value: '3', label: 'idiomas de trabajo' },
    { value: '[10+]', label: 'años de experiencia' },
    { value: '[500+]', label: 'documentos traducidos' },
    { value: '24h', label: 'tiempo de respuesta' },
  ],
  about: {
    label: 'Sobre mí',
    title: 'Zoltan Hubanov-Dimitrov',
    paragraphs: [
      '[Breve presentación: quién eres, de dónde vienes, desde cuándo traduces.]',
      '[En qué destacas: especialidades, tipos de clientes, forma de trabajar.]',
    ],
    facts: [
      { term: 'Idiomas', value: 'HU · EN · ES' },
      { term: 'Especialidad', value: '[Jurídica · Económica · Técnica]' },
      { term: 'Ubicación', value: '[Budapest]' },
      { term: 'Disponible', value: '[Online y presencial]' },
    ],
    imageAlt: 'Espacio para imagen',
  },
  languages: {
    label: 'Idiomas',
    title: 'Combinaciones',
    lead: 'En ambas direcciones, con revisión de nivel nativo.',
    items: [
      { title: 'Húngaro ↔ Inglés', meta: 'Escrita · Oral', text: '[Breve descripción de la combinación y de los textos típicos.]' },
      { title: 'Húngaro ↔ Español', meta: 'Escrita · Oral', text: '[Breve descripción de la combinación y de los textos típicos.]' },
      { title: 'Inglés ↔ Español', meta: 'Escrita', text: '[Breve descripción de la combinación y de los textos típicos.]' },
      { title: '[Otro idioma]', meta: '[Tipo]', text: '[Aquí puede ir otra combinación, o se puede eliminar.]' },
    ],
  },
  services: {
    label: 'Servicios',
    title: 'En qué te ayudo',
    items: [
      { title: 'Traducción especializada', meta: 'Jurídica · Económica · Técnica', text: 'Contratos, informes y manuales traducidos con precisión y terminología coherente.' },
      { title: 'Traducción oficial', meta: 'Certificados · Documentos', text: 'Traducción de certificados y documentos para trámites oficiales.' },
      { title: 'Interpretación', meta: 'Consecutiva · De enlace', text: 'Interpretación en negociaciones, reuniones y eventos.' },
      { title: 'Revisión', meta: 'Corrección · Estilo', text: 'Revisión lingüística y técnica de traducciones y textos existentes.' },
      { title: 'Localización web', meta: 'Web · App · Marketing', text: 'Adaptación de webs y materiales de marketing al idioma y la cultura de tu mercado.' },
      { title: 'Subtitulado', meta: 'Vídeo · Medios', text: 'Subtítulos y traducción de subtítulos, sincronización incluida.' },
    ],
  },
  studies: {
    label: 'Estudios',
    title: 'Estudios y experiencia',
    items: [
      { period: '[2018 – 2020]', title: '[Máster en Traducción e Interpretación]', place: '[Universidad]', text: '[Especialidad, temas clave, tesis.]' },
      { period: '[2014 – 2018]', title: '[Grado en Filología Inglesa / Hispánica]', place: '[Universidad]', text: '[Breve descripción.]' },
      { period: '[2020 – hoy]', title: '[Traducción por cuenta propia]', place: '[Empresa propia]', text: '[Clientes y proyectos típicos.]' },
      { period: '[Año]', title: '[Examen de idioma / Certificado]', place: '[Entidad emisora]', text: '[p. ej. examen C2, título de traducción jurada.]' },
    ],
  },
  gallery: {
    label: 'Galería',
    title: 'Trabajando',
    items: [
      { alt: 'Espacio para imagen 1' },
      { alt: 'Espacio para imagen 2' },
      { alt: 'Espacio para imagen 3' },
      { alt: 'Espacio para imagen 4' },
      { alt: 'Espacio para imagen 5' },
      { alt: 'Espacio para imagen 6' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Escríbeme.',
    text: 'Envíame el tema, la extensión y el plazo de tu texto: te responderé con un presupuesto en 24 horas.',
    name: 'Nombre',
    email: 'Correo',
    message: '¿Qué hay que traducir?',
    submit: 'Enviar mensaje',
    success: 'Se ha abierto tu programa de correo: solo tienes que enviar el mensaje.',
    subject: 'Solicitud de presupuesto – AdLingua',
    direct: { email: 'Correo', phone: 'Teléfono', location: 'Ubicación' },
  },
  footer: {
    tags: ['Traducción', 'Interpretación', 'Revisión'],
    rights: 'Todos los derechos reservados.',
  },
};

export const content: Record<Lang, Content> = { hu, en, es };
