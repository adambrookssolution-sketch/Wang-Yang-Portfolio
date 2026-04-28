import { motion } from 'framer-motion'
import {
  FiShoppingBag, FiLayers, FiSmartphone, FiShield,
  FiBriefcase, FiGrid, FiZap,
} from 'react-icons/fi'
import './Projects.css'

const categories = [
  {
    id: 'laravel-react',
    icon: <FiLayers />,
    title: 'Laravel + React / Inertia + Vue',
    subtitle: 'Enterprise CRM, ERP, and E-Commerce systems',
    accent: '#FF2D20',
    projects: [
      {
        title: 'Solar CRM & Ops/ERP Dashboard',
        client: 'Sungrow Power Supply — Wuhan, China',
        description:
          'Full internal CRM built from scratch in Laravel + Inertia + Vue for a residential solar installer. Tracks leads, signed customers, site surveys, proposal status, and grid-connection paperwork in one place — replacing the three disconnected spreadsheets the sales team was juggling. Extended into a lightweight ERP covering job scheduling, panel and inverter inventory, permit tracking, and rooftop repair costs, all rolling into the same dashboard.',
        tags: ['Laravel', 'Inertia.js', 'Vue.js', 'MySQL', 'DomPDF'],
      },
      {
        title: 'Subsidy Proposal Tool & Contract PDF Generator',
        client: 'Sungrow Power Supply — Wuhan, China',
        description:
          'Proposal tool connected to live provincial and national new-energy subsidy data so sales reps stopped typing numbers by hand — quoting errors dropped once the feed stabilized. Contract PDF generator written in Laravel with DomPDF; template rebuilt twice because long customer addresses kept breaking the layout.',
        tags: ['Laravel', 'DomPDF', 'REST API', 'PHP'],
      },
      {
        title: 'Fashion E-Commerce Marketplace & Creator Storefront Platform',
        client: 'Multi-vendor cross-border marketplace product',
        description:
          'Creator-driven fashion e-commerce platform that lets fashion influencers and curators manage their own branded storefronts inside a single marketplace. Each creator has a dedicated page where products are curated, displayed, and organized as collections — highlighting personal style and visual storytelling. Supports real-time availability (sold-out indicators), wishlist functionality, and an image-focused product grid inspired by modern East Asian fashion e-commerce. End-to-end ownership: product planning, UI/UX design, frontend implementation, and overall application architecture.',
        tags: ['Laravel', 'React.js', 'Responsive UI/UX'],
      },
      {
        title: 'Laravel Education Admin Panels',
        client: 'Syntactics Tech — domestic and overseas clients',
        description:
          'Custom Laravel admin panels for education clients, including scheduling and gradebook modules with complex form workflows. Also authored the internal Laravel starter template still used by the team today.',
        tags: ['Laravel', 'PHP', 'MySQL'],
      },
    ],
  },
  {
    id: 'nextjs',
    icon: <FiShoppingBag />,
    title: 'Next.js + PostgreSQL + AWS',
    subtitle: 'Premium storefronts and globally accessible commerce',
    accent: '#ffffff',
    projects: [
      {
        title: 'High-End Jewelry E-Commerce Platform',
        client: 'Luxury retail — global audience',
        description:
          'Jewelry e-commerce platform focused on delivering a strong artistic and immersive visual experience while maintaining a smooth shopping flow. Digitally sculpted jewelry pieces presented with clean layouts, high-resolution imagery, and bold composition so each item reads as both a fashion product and a collectible art piece. Includes product listing and collection pages optimized for luxury retail, detailed product presentation with pricing / availability / variations, multi-currency and multi-language structure, and a checkout flow built for international customers. Careful attention to performance so complex visuals and large assets do not compromise usability or loading speed.',
        tags: ['Next.js', 'PostgreSQL', 'AWS', 'JavaScript'],
      },
    ],
  },
  {
    id: 'react-native-mobile',
    icon: <FiSmartphone />,
    title: 'React Native / Flutter — Mobile',
    subtitle: 'Cross-platform mobile apps for field and retail',
    accent: '#61DAFB',
    projects: [
      {
        title: 'Install Crew Mobile App',
        client: 'Sungrow Power Supply — Wuhan, China',
        description:
          'React Native mobile app for solar install crews. Photo upload from rooftops, daily job checklists, crew sign-in, and offline mode for basements and attics where signal drops — keeping the app usable in the exact environments where it has to work hardest.',
        tags: ['React Native', 'Laravel API', 'Offline-first'],
      },
      {
        title: 'Jaunty Goat — Mobile-First Coffee Brand Platform',
        client: 'Specialty coffee brand',
        description:
          'Mobile-first brand and e-commerce experience for a specialty coffee company. Fully responsive UI, brand-focused homepage with immersive imagery, product showcase with e-commerce integration, location-based store pages, and a touch-optimized navigation system. UX approach favored minimalist layout, immersive mobile visuals, simplified navigation, and clear product presentation with pricing and CTA flow. Owned mobile UI/UX architecture, responsive layout system, mobile interaction logic, and front-end structure for cross-device consistency.',
        tags: ['Flutter', 'Responsive Web Design', 'JavaScript', 'PHP', 'Mobile app design'],
      },
      {
        title: 'Healthcare Flutter Tablet App',
        client: 'Pragtech Solutions — healthcare client',
        description:
          'Helped port a Flutter tablet app from Android-only to iOS and Android. The iOS build was in rough shape on arrival; took two sprints to stabilize before rolling it out alongside Android.',
        tags: ['Flutter', 'Android', 'iOS'],
      },
    ],
  },
  {
    id: 'fintech-blockchain',
    icon: <FiShield />,
    title: 'Fintech & Payment Infrastructure',
    subtitle: 'PCI-DSS-ready payment APIs and multi-chain wallets',
    accent: '#F7DF1E',
    projects: [
      {
        title: 'FacilPay — Enterprise Payment API & Multi-Chain Wallet',
        client: 'Fintech platform (PCI-DSS ready)',
        description:
          'Next-generation multi-chain wallet and payment infrastructure unifying chat, payments, and cross-chain asset management into a single UX. RESTful payment API layer, blockchain network integration, real-time payment confirmation handling, and multi-chain asset transfer logic. Built to PCI-DSS expectations: secure card data handling, environment separation, encrypted storage, TLS-secured transmission, access control, and audit logging. Payment fields tokenized; AES-256 encryption at rest; dedicated key management strategy. Event-driven webhook architecture with idempotent handling and automated reconciliation. Transaction dashboard with real-time monitoring, status tracking (pending / confirmed / failed), user history, and admin control panel. Rule-based fraud detection with velocity checks, risk scoring, and flagging.',
        tags: ['REST API', 'React Native', 'Firebase', 'JavaScript', 'Blockchain', 'Mobile app design'],
      },
    ],
  },
  {
    id: 'elixir-react-realtime',
    icon: <FiZap />,
    title: 'Elixir / Phoenix + React — Real-Time',
    subtitle: 'Real-time scheduling and live healthcare platforms',
    accent: '#A855F7',
    projects: [
      {
        title: 'Doctor Appointment Scheduling Platform',
        client: 'Pragtech Solutions — healthcare client',
        description:
          'Rebuilt the scheduling core of a doctor appointment platform. The old query layer was slow; Phoenix channels let us push real-time updates to the calendar, so doctors and patients saw slot changes the moment they happened instead of after a refresh.',
        tags: ['Elixir', 'Phoenix', 'React', 'WebSockets'],
      },
      {
        title: 'Kubernetes Staging Environment',
        client: 'Pragtech Solutions — internal platform',
        description:
          'Designed and wrote the Kubernetes setup for the staging environment used across the team\'s healthcare and real estate projects. Picked up K8s on the job, which meant deliberate trial and error in the first month before the cluster stabilized.',
        tags: ['Kubernetes', 'Docker', 'CI/CD'],
      },
    ],
  },
  {
    id: 'react-shopify',
    icon: <FiShoppingBag />,
    title: 'React + Canvas + Shopify — E-Commerce Tooling',
    subtitle: 'Customer-facing editors and order pipelines',
    accent: '#95BF47',
    projects: [
      {
        title: 'Gang Sheet Editor',
        client: 'Wuhan Inkjoy Tech — Wuhan, China',
        description:
          'Browser-based gang sheet editor built from scratch with React and the Konva.js canvas. Shoppers upload their own artwork, drag and drop multiple designs onto one sheet, resize, auto-nest, and preview the final printed film before paying — no back-and-forth emails with staff.',
        tags: ['React', 'Konva.js', 'Canvas', 'JavaScript'],
      },
      {
        title: 'Shopify-Integrated Order Pipeline',
        client: 'Wuhan Inkjoy Tech — Wuhan, China',
        description:
          'Connected the gang sheet editor to Shopify checkout so the finished file, sheet dimensions, and material choice flow into a single order — no attachments, no manual re-upload. Laravel pipeline picks up paid orders, drops print-ready files straight onto the production queue, generates a pick slip, and pushes the carrier tracking number back to the customer on ship. Tracked down a pricing-per-inch rounding bug that only showed up on odd sheet sizes; about three days to reproduce reliably before the fix landed.',
        tags: ['Laravel', 'Shopify API', 'React', 'Queue workers'],
      },
    ],
  },
  {
    id: 'wordpress-vue',
    icon: <FiGrid />,
    title: 'WordPress + Vue.js — Headless CMS',
    subtitle: 'Modernizing legacy content platforms',
    accent: '#4FC08D',
    projects: [
      {
        title: 'Headless WordPress Migrations',
        client: 'Syntactics Tech — domestic and overseas clients',
        description:
          'Migrated several older WordPress sites to headless setups using the WP REST API with Vue.js frontends. Faster, more maintainable, and freed the editorial team from theme-level constraints while keeping their existing content workflow intact.',
        tags: ['WordPress', 'WP REST API', 'Vue.js'],
      },
      {
        title: 'Legacy CodeIgniter Booking System',
        client: 'Syntactics Tech — booking platform',
        description:
          'Maintained a legacy CodeIgniter booking system. Spent most of the first month just reading the code and mapping data flow before changing anything — the kind of investment that pays back every time someone asks "can we safely add X?"',
        tags: ['CodeIgniter', 'PHP', 'MySQL'],
      },
    ],
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Work grouped by stack — production systems, not demos</p>
        </motion.div>

        <div className="projects-stack-list">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              className="project-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
            >
              <div
                className="project-category-header"
                style={{ '--category-accent': category.accent }}
              >
                <div className="project-category-icon">{category.icon}</div>
                <div className="project-category-title-wrap">
                  <h3 className="project-category-title">{category.title}</h3>
                  <p className="project-category-subtitle">{category.subtitle}</p>
                </div>
                <div className="project-category-count">
                  {category.projects.length} {category.projects.length === 1 ? 'project' : 'projects'}
                </div>
              </div>

              <div className="project-category-grid">
                {category.projects.map((project, i) => (
                  <motion.article
                    key={project.title}
                    className="project-entry"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="project-entry-head">
                      <FiBriefcase className="project-entry-bullet" />
                      <div>
                        <h4 className="project-entry-title">{project.title}</h4>
                        <p className="project-entry-client">{project.client}</p>
                      </div>
                    </div>
                    <p className="project-entry-description">{project.description}</p>
                    <div className="project-entry-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-entry-tag">{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
