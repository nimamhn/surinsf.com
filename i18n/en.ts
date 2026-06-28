import type { T } from './types';

export const en: T = {
  site: { title: 'Surin Sanat Farzan | Industrial Electrical Equipment', description: 'Import and export of industrial electrical equipment, automation, instrumentation' },
  nav: {
    logo: 'Surin Sanat Farzan',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
    contactLabel: 'Contact Us',
  },
  hero: {
    name: 'Surin Sanat Farzan',
    subtitle: 'Trusted supplier of industrial electrical equipment, automation and instrumentation in Iran and the region',
    cta: 'Free Consultation',
  },
  about: {
    label: 'About Us',
    title: 'Leading Industrial Equipment Supplier',
    description: 'Surin Sanat Farzan with over 7 years of experience in importing and exporting industrial electrical equipment, automation, instrumentation and electrical products is one of the most reliable suppliers in Iran and the region. With a team of 52 specialists, we provide engineering, consulting, design, execution and equipment supply services.',
    stats: [
      { value: '7+', label: 'Years Experience' },
      { value: '52+', label: 'Specialists' },
      { value: '98%', label: 'Satisfaction' },
      { value: '12+', label: 'Target Countries' },
    ],
  },
  services: {
    label: 'Services',
    title: 'Engineering Expertise',
    items: [
      { icon: 'PenTool', title: 'Design, Consulting & Execution', desc: 'End-to-end design, technical consulting and execution of electrical and industrial automation projects using the latest global standards' },
      { icon: 'Monitor', title: 'Monitoring & Networking', desc: 'Design and implementation of monitoring systems, industrial communication networks and centralized production control' },
      { icon: 'Cpu', title: 'Parts Support', desc: 'Technical proposals for legacy parts, replacement supply and specialized technical consulting' },
      { icon: 'Wrench', title: 'Equipment Supply', desc: 'Import and supply of industrial electrical equipment, automation, instrumentation and spare parts from world-renowned brands' },
    ],
  },
  products: {
    label: 'Products',
    title: 'Products & Equipment',
    desc: 'Supply of industrial electrical equipment, automation, instrumentation and cables from world-renowned brands',
    items: [
      { title: 'Electrical Equipment', cat: 'Switches, Contactors, Fuses, Relays', img: '/images/p1.jpg' },
      { title: 'Industrial Automation', cat: 'Siemens PLC, Delta, HMI, VFD Drives', img: '/images/p2.jpg' },
      { title: 'Power Plant Equipment', cat: 'Generators, UPS, Transformers', img: '/images/p3.jpg' },
      { title: 'Instrumentation', cat: 'Pressure, Temperature, Flow Meters', img: '/images/p4.jpg' },
      { title: 'Industrial Cables', cat: 'Power, Instrumentation, Network Cables', img: '/images/p5.jpg' },
      { title: 'Switchboards', cat: 'LV & MV Switchboards, Control Panels', img: '/images/p6.jpg' },
    ],
    cta: 'View All Products',
  },
  testimonials: {
    label: 'Testimonials',
    title: 'What Our Clients Say',
    items: [
      { quote: 'Working with Surin Sanat Farzan for automation equipment supply has resulted in excellent quality and on-time delivery.', author: 'Eng. Reza Mohammadi', role: 'Project Manager', company: 'Pars Electrical Industries' },
      { quote: 'Their professional team is very precise and timely in supplying switchboard equipment and instrumentation.', author: 'Dr. Samira Ahmadi', role: 'Supply Manager', company: 'Petro Sanat Shargh' },
      { quote: 'Their technical consulting and parts support services have played an effective role in optimizing our production line.', author: 'Eng. Ali Kazemi', role: 'Technical Manager', company: 'Western Cable Industries' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Get In Touch',
    subtitle: 'For quotes, expert consultation and collaboration',
    form: { name: 'Full Name', email: 'Email', phone: 'Phone Number', message: 'Your Message', submit: 'Send Message', success: 'Your message has been sent successfully.' },
    info: { address: 'Tehran, Jannatabad Markazi', phone: '+982122201734', email: 'info@surinsf.com', hours: 'Sat-Wed 8-17 | Thu 8-13' },
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      { q: 'Do your products have authenticity guarantees?', a: 'Yes, all products come with authenticity guarantees and valid warranties from official representatives.' },
      { q: 'What is the delivery time?', a: 'In-stock items: 1-3 days. Import orders: 2-6 weeks.' },
      { q: 'Do you offer free technical consulting?', a: 'Yes, our engineering team provides free technical consulting for your project needs.' },
      { q: 'What payment methods are available?', a: 'Bank transfer, check, and credit terms for large projects with formal contracts.' },
      { q: 'Which brands do you represent?', a: 'Siemens, Schneider Electric, ABB, Delta, Omron and many others.' },
    ],
  },
  blog: {
    label: 'Blog',
    title: 'Latest Articles',
    desc: 'Expert articles on industrial electrical, automation and instrumentation',
    articles: [
      { title: 'Complete Guide to Industrial PLC Selection', excerpt: 'Review of available PLCs and key selection criteria for your production line', date: '2025-06-05', cat: 'Automation', img: '/images/blog/plc.jpg' },
      { title: 'Industrial IoT and Smart Manufacturing', excerpt: 'Digital transformation combining traditional automation with IIoT technologies', date: '2025-05-20', cat: 'Technology', img: '/images/blog/iot.jpg' },
      { title: 'International Electrical Equipment Standards', excerpt: 'Overview of IEC, NEMA and ISO standards for industrial electrical equipment', date: '2025-04-10', cat: 'Standards', img: '/images/blog/standards.jpg' },
    ],
  },
  footer: {
    desc: 'Surin Sanat Farzan, a reliable supplier of industrial electrical equipment, automation and instrumentation in Iran and the region',
    rights: '© 2025 Surin Sanat Farzan. All rights reserved.',
  },
  common: { langSwitch: 'فارسی', loading: 'Loading...', home: 'Home', about: 'About', services: 'Services', products: 'Products', blog: 'Blog', contact: 'Contact', faq: 'FAQ' },
};
