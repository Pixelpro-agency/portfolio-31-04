// remix icons
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from 'react-icons/ri';

// services icons
import Service1Icon from './assets/img/services/uiux_design.svg';
import Service2Icon from './assets/img/services/web_design.svg';
import Service3Icon from './assets/img/services/development.svg';

// brands images
import Brand1Image from './assets/img/brands/behance.svg';
import Brand2Image from './assets/img/brands/google.svg';
import Brand3Image from './assets/img/brands/dribbble.svg';
import Brand4Image from './assets/img/brands/uplabs.svg';
import Brand5Image from './assets/img/brands/99designs.svg';

// portfolio images
import PortfolioImage1 from './assets/img/portfolio/p1.jpg';
import PortfolioImage2 from './assets/img/portfolio/p2.jpg';
import PortfolioImage3 from './assets/img/portfolio/p3.jpg';
import PortfolioImage4 from './assets/img/portfolio/p4.jpg';
import PortfolioImage5 from './assets/img/portfolio/p5.jpg';

// nav
export const nav = [
  {
    name: 'home',
  },
  {
    name: 'about',
  },
  {
    name: 'servizi',
  },
  {
    name: 'collaboratori',
  },
  {
    name: 'portfolio',
  },
  {
    name: 'contatti',
  },
];

// social
export const social = [
  {
    icon: <RiYoutubeFill />,
    href: '',
  },
  {
    icon: <RiInstagramFill />,
    href: '',
  },
  {
    icon: <RiGithubFill />,
    href: '',
  },
  {
    icon: <RiLinkedinFill />,
    href: '',
  },
];

// about
export const about = {
  title: 'Mi presento',
  subtitle:
    "Sono Justin Vaccaro e mi occupo di web design, Graphic Design, User Experiences. habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet",
  image: '',
};

// services
export const services = {
  title: 'Servizi',
  subtitle:
    'I membri del nostro team sono esperti in tutti gli aspetti del design, tra cui: design di stampa, illustrazione, branding, identità e altro ancora',
  skills: [
    {
      icon: Service1Icon,
      name: 'UI/UX Design',
      description:
        "habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet",
    },
    {
      icon: Service2Icon,
      name: 'Web Design',
      description:
        "habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet",
    },
    {
      icon: Service3Icon,
      name: 'WP Developing',
      description:
        "habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet",
    },
  ],
};

// contributors
export const contributors = {
  title: 'Collaboratori',
  subtitle:
    'Supportiamo prodotti che semplificano e automatizzano processi meccanici decenti risparmiando tempo per le attività',
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  preTitle: 'Il nostro continuo aggiornamento',
  title: 'Portfolio',
  image1: PortfolioImage1,
  image2: PortfolioImage2,
  image3: PortfolioImage3,
  image4: PortfolioImage4,
  image5: PortfolioImage5,
};

// contact
export const contact = {
  title: 'Contatti',
  subtitle:
    'La verità è una gentilezza profonda che ci insegna ad essere contenti nella vita di tutti i giorni e a condividere con le persone la stessa felicità. La sensazione della domenica è la stessa ovunque: pesante, malinconica, ferma..',
};
