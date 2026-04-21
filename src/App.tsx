/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Car, 
  Bike, 
  Users, 
  Package, 
  Truck, 
  Wallet, 
  CreditCard, 
  RefreshCcw, 
  User, 
  Heart, 
  ShieldCheck, 
  UserPlus, 
  Activity, 
  Baby, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Star,
  Quote,
  Clock,
  ThumbsUp,
  LayoutGrid,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import ChatBot from './components/ChatBot';
import { useState, useEffect, ReactNode } from "react";

// --- Types ---

interface ServiceItem {
  icon: ReactNode;
  label: string;
  subLabel: string;
}

interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

// --- Data ---

const SERVICES = [
  { 
    title: "Trade Factoring Solutions", 
    items: [
      { icon: <Wallet className="w-6 h-6" />, label: "Trade Factoring", subLabel: "(RPA) Partner with World renowned factoring company with worldwide existence" }
    ] 
  },
  { 
    title: "General Insurance Solutions", 
    items: [
      { icon: <ShieldCheck className="w-6 h-6" />, label: "General Insurance", subLabel: "Under AA+ Rated Companies" }
    ] 
  },
  { 
    title: "Financial Statements", 
    items: [
      { icon: <Activity className="w-6 h-6" />, label: "Financial Reports", subLabel: "Audited & Un-Audited" }
    ] 
  }
];

const STATS = [
  { value: "15+", label: "Expert Consultants", icon: <Users className="w-5 h-5" /> },
  { value: "5,000+", label: "Trusted Clients", icon: <Activity className="w-5 h-5" /> },
  { value: "10k+", label: "Reports Generated", icon: <ShieldCheck className="w-5 h-5" /> },
  { value: "500Mn+", label: "Portfolio Managed", icon: <Wallet className="w-5 h-5" /> },
  { value: "5.0", label: "Client Satisfactions", icon: <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> },
];

const TESTIMONIALS = [
  {
    text: "Excellent advisory on trade factoring. Wasim Nasir provided us with professional clarity on our financial statements which helped our business growth significantly. Highly recommended.",
    author: "M. Ahmed",
    role: "CEO - Textile Hub Faisalabad",
  },
  {
    text: "Seamless insurance solutions. They handled our complex requirements with AA+ rated companies with absolute transparency. Best financial consultants in the region.",
    author: "Z. Khalid",
    role: "Director, Global Exports",
  }
];

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-1 font-black text-2xl tracking-tighter uppercase">
    <span className="text-secondary">Fin</span>
    <span className="text-primary italic">One</span>
    <span className="text-secondary">Solutions</span>
  </div>
);

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <a href={href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
    {children}
  </a>
);

const SectionHeading = ({ children, subtitle }: { children: ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ServiceCard = ({ item }: { item: ServiceItem, key?: any }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4 transition-all hover:shadow-xl hover:border-primary/20"
  >
    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
      {item.icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-900 leading-tight">{item.label}</h4>
      <p className="text-xs text-slate-500 mt-1">{item.subLabel}</p>
    </div>
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-2 md:py-3 shadow-lg" : "bg-transparent py-3 md:py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Logo />
            
              <nav className="hidden md:flex items-center gap-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#faq">FAQ</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              <a 
                href="tel:+923007207929" 
                className="bg-primary hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </nav>
            
            <button 
              className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Call Us Button - Directly visible below logo on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2"
          >
            <a 
              href="tel:+923007207929" 
              className="w-full bg-primary text-white py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-xs active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
                <div className="px-6 py-8 flex flex-col gap-6">
                  <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2">Home</a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2">Services</a>
                  <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2">FAQ</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2">Contact</a>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-8 md:pt-20 pb-20 md:pb-32 overflow-hidden px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted Financial Partner in Pakistan
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-black text-slate-900 leading-[1.1] mb-6">
              Global <span className="text-gradient">Trade Finance</span> & Insurance.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Empowering Pakistan's businesses with world-class trade factoring and AA+ rated insurance solutions. Professional advisory by Wasim Nasir.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-2 md:px-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10" />
            <div className="relative glass rounded-3xl p-3 md:p-8 aspect-video sm:aspect-[4/3] md:aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Financial Advisory and Trade Finance Solutions" 
                  className="rounded-xl md:rounded-2xl shadow-2xl w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-2 md:-bottom-6 left-2 md:-left-6 bg-white/90 backdrop-blur p-2 md:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 md:gap-4 z-20"
               >
                 <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                   <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
                 </div>
                 <div>
                   <p className="text-[7px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Claim Status</p>
                   <p className="text-[10px] md:text-sm font-black text-slate-900">Approved Successfully</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - MOVED UP UNDER HERO */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 text-center mb-6">Trade Finance & Insurance Solutions</h1>
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 uppercase tracking-[0.4em] block">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto px-4">Expert solutions for trade factoring, general insurance, and comprehensive financial statement auditing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2 justify-center md:justify-start">
                  <LayoutGrid className="w-5 h-5 text-primary" /> {section.title}
                </h3>
                <div className="flex flex-col gap-6">
                  {section.items.map((item, i) => <ServiceCard key={i} item={item} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 sm:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="order-2 lg:order-1 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl -z-10" />
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 className="p-6 md:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center gap-4"
               >
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                   <Clock className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <h4 className="font-bold">24/7 Claim Support</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Our executives are available round the clock to service your needs.</p>
               </motion.div>
               <motion.div 
                 initial={{ y: 40, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="p-6 md:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center gap-4 sm:mt-8"
               >
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                   <Users className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <h4 className="font-bold">Personalized Policy</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Everyone's needs are different. We find the best solutions that fit your business.</p>
               </motion.div>
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="p-6 md:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center gap-4 sm:-mt-8"
               >
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                   <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <h4 className="font-bold">Transparent Pricing</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">No hidden charges. We ensure you pay the right price with institutional backing.</p>
               </motion.div>
               <motion.div 
                 initial={{ y: 40, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="p-6 md:p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center gap-4"
               >
                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                   <LayoutGrid className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <h4 className="font-bold">Multi-Brand Access</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Choose from dozens of premium brands under one umbrella.</p>
               </motion.div>
             </div>
           </div>
           <div className="order-1 lg:order-2 text-center lg:text-left">
             <SectionHeading subtitle="">
               <span className="text-secondary">Why</span> Fin<span className="text-primary italic">One</span>Solutions?
             </SectionHeading>
             <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed mx-auto lg:mx-0 max-w-xl">
               Led by Wasim Nasir, we provide end-to-end trade factoring and insurance consultancy. Our mission is to bridge the gap between global finance and local businesses with AA+ rated institutional backings.
             </p>
             <ul className="space-y-4 mb-10 inline-block lg:block text-left">
               {[
                 "Referral partner with World renowned factoring company with worldwide existence.",
                 "AA+ rated insurance provider network.",
                 "Certified financial statement audits.",
                 "Expert advisory on capital management."
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                     <ChevronRight className="w-3 h-3" />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </section>

      {/* Founder Intro Section */}
      <section className="py-24 bg-white overflow-hidden px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] md:rounded-[3rem] blur-2xl -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <img 
                  src="/images/wasim_nasir.png" 
                  alt="Wasim Nasir - Founder FinOne Solutions"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent p-6 md:p-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1">Wasim Nasir</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-[1px] bg-primary" />
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary">Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <motion.div 
                initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                whileInView={{ rotate: 12, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-2 text-center border-4 border-slate-50 z-20"
              >
                <Star className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 fill-primary" />
                <span className="text-[8px] md:text-[10px] font-black text-slate-900 uppercase leading-tight tracking-tighter italic">Expert Advisor</span>
              </motion.div>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[2px] bg-primary" />
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-primary">The Visionary Founder</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-slate-900 leading-[1.05] mb-6">
                  Experience That <span className="text-gradient">Globally</span> Connects.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic border-l-4 border-primary pl-8 py-2">
                  "Wasim Nasir, the founder of the company, possesses extensive experience in international trade finance, gained through his association with globally recognized financial institutions."
                </p>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
                  By leveraging deep-rooted connections with AA+ rated institutions, Wasim Nasir has transformed FinOne Solutions into a trust-based bridge for businesses navigating complex trade and insurance markets.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-100"
              >
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-secondary tracking-tighter">Global</div>
                  <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Financial Reach</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">AA+</div>
                  <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Institutional Network</div>
                </div>
              </motion.div>
              
              <div className="pt-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-4 py-4 px-8 rounded-2xl bg-slate-900 text-white font-bold hover:bg-secondary transition-all group active:scale-95 shadow-xl shadow-slate-900/10"
                >
                  Consult With Wasim <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-8"
              >
                <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic">
                  "{TESTIMONIALS[activeTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-lg font-black text-slate-900">{TESTIMONIALS[activeTestimonial].author}</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mt-1">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? "bg-primary w-8" : "bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Common queries about our financial services">
            Frequently Asked <span className="text-primary">Questions</span>
          </SectionHeading>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6 md:p-8 bg-slate-50/50">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  How to apply for export factoring?
                </h3>
                
                <div className="space-y-8 text-slate-600 leading-relaxed">
                  <div className="font-medium text-slate-800 italic bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    To apply for export factoring, follow these steps:
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Eligibility Check</h4>
                        <p className="text-sm">Ensure your company meets the criteria, typically having exports above $2 million or PKR 400 million, depending on the financier's requirements.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Required Documents</h4>
                        <p className="text-sm mb-3">Prepare necessary documents, which may include:</p>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          <li className="flex items-center gap-2 text-sm bg-white p-3 rounded-xl border border-slate-50 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span><strong>Business Profile:</strong> Overview & Export strategy</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm bg-white p-3 rounded-xl border border-slate-50 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span><strong>Financial Statements:</strong> Audited records</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm bg-white p-3 rounded-xl border border-slate-50 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span><strong>Export Contracts:</strong> Buyer agreements</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm bg-white p-3 rounded-xl border border-slate-50 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span><strong>Invoice Details:</strong> Outstanding invoices</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Application Submission</h4>
                        <p className="text-sm">Submit your application along with the required documents to the chosen factor.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Due Diligence</h4>
                        <p className="text-sm">The factor will assess your creditworthiness, buyer credibility, and other risk factors.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Approval and Funding</h4>
                        <p className="text-sm">Upon approval, the factor will provide financing for your exports, typically up to 93% of the invoice value.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">6</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-base">Repayment</h4>
                        <p className="text-sm">Repayment terms will be agreed upon, usually based on the payment received from the foreign buyer.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-secondary text-white rounded-[2rem] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />
                    <p className="relative z-10 text-sm md:text-base font-medium leading-relaxed">
                      It's recommended to contact a factoring consultant, <strong className="text-primary tracking-wide">Wasim Nasir</strong>, <a href="tel:03007207929" className="hover:underline font-black">0300 7207929</a> for guidance on the application process and to discuss specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-secondary text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-serif font-light mb-8 leading-tight"
           >
             "Get closer than ever to your customer. So close that you tell them what they need well before they realize it themselves."
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-white/60 text-lg uppercase tracking-[0.4em] font-bold"
           >
             - Steve Jobs
           </motion.p>
        </div>
      </section>

      {/* Contact Us Section - As per screenshot */}
      <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Contact <span className="text-secondary/80">Us</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex justify-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 w-full max-w-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              
              <div className="space-y-8">
                <a href="tel:+923007207929" className="flex items-center justify-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold text-slate-700 tracking-tight group-hover:text-secondary transition-colors">+92 300 7207929</span>
                </a>
                
                <a href="mailto:wasim.pasha474@gmail.com" className="flex items-center justify-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-slate-700 tracking-tight group-hover:text-primary transition-colors">wasim.pasha474@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              Our <span className="text-secondary/80">Location</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
              Faisalabad, Pakistan
            </p>
            
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white h-[400px] md:h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108949.13796123845!2d72.93324234523591!3d31.42347694563851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1776445207703!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FinOne Solutions Faisalabad Office"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-800">
          <div className="grid md:grid-cols-3 gap-12 pb-16">
            <div className="space-y-6">
              <Logo />
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Excellence in Trade Finance & Insurance solutions across Pakistan. Dedicated to your business growth and financial security.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-xs text-slate-500">Business Details</h4>
              <div className="space-y-4">
                <p className="text-sm text-slate-400 flex gap-3 items-center">
                  <User className="w-5 h-5 text-secondary" />
                  Wasim Nasir Financial Consultant
                </p>
                <p className="text-sm text-slate-400 flex gap-3 items-center">
                  <MapPin className="w-5 h-5 text-primary" />
                  Faisalabad, Pakistan
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-xs text-slate-500">Quick Contact</h4>
              <div className="space-y-4">
                <a href="tel:+923007207929" className="text-sm text-slate-400 flex gap-3 items-center hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  +92 300 7207929
                </a>
                <a href="mailto:wasim.pasha474@gmail.com" className="text-sm text-slate-400 flex gap-3 items-center hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                  wasim.pasha474@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 text-center text-[10px] text-slate-500 flex flex-col items-center gap-4">
            <p>FinOneSolutions | Wasim Nasir Financial Consultant | Faisalabad, Pakistan. Standard T&C Apply* For more details on risk factors, terms, and conditions, please read the provided documentation carefully before concluding a contract.</p>
            <p>© {new Date().getFullYear()} FinOne Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
