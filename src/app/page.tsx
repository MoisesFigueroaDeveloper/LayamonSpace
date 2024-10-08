"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Code,
  Laptop,
  Smartphone,
  Megaphone,
  MessageSquare,
  Menu,
  Star,
  X,
  Search,
  Server,
  Users,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Component() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", content: "¡Hola! ¿En qué puedo ayudarte hoy?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "María González",
      role: "CEO, FashionTech",
      comment:
        "El equipo de TechMarkPro transformó nuestra presencia online. El nuevo sitio web y la estrategia SEO han duplicado nuestras ventas en línea.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Fundador, DeliverEats",
      comment:
        "La app de delivery que desarrollaron es excepcional. La integración con nuestra campaña de marketing digital ha impulsado significativamente nuestro crecimiento.",
    },
    {
      name: "Ana Martínez",
      role: "Directora de TI, FinanceHub",
      comment:
        "Su consultoría TI y servicios de desarrollo web han sido fundamentales en nuestra transformación digital. Ahora operamos con mayor eficiencia y seguridad.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setChatMessages([...chatMessages, { role: "user", content: userInput }]);
      setUserInput("");

      const botResponse = await simulateBotResponse(userInput);
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", content: botResponse },
      ]);
    }
  };

  const simulateBotResponse = async (input) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Gracias por tu mensaje sobre "${input}". Un representante se pondrá en contacto contigo pronto.`;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te contactaremos pronto.");
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
          <Link className="flex items-center justify-center" href="#">
            <Code className="h-6 w-6 text-teal-500" />
            <span className="ml-2 text-lg font-bold">TechMarkPro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {[
              "Servicios",
              "Proceso",
              "Portafolio",
              "Planes",
              "Testimonios",
              "Contacto",
            ].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-medium hover:text-teal-500 transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))}
          </nav>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <nav className="flex flex-col p-4">
                {[
                  "Servicios",
                  "Proceso",
                  "Portafolio",
                  "Planes",
                  "Testimonios",
                  "Contacto",
                ].map((item) => (
                  <ScrollLink
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm font-medium text-gray-600 hover:text-teal-500 transition-colors cursor-pointer py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </ScrollLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-teal-500">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Soluciones Digitales Integrales
                </h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Impulsamos tu negocio con desarrollo web y móvil, marketing
                  digital, SEO y consultoría TI de vanguardia.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  variant="secondary"
                  className="bg-white text-teal-500 hover:bg-gray-100"
                >
                  Contáctanos
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Ver servicios
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Laptop,
                  title: "Desarrollo Web",
                  description:
                    "Creamos sitios web responsivos y aplicaciones web modernas que cautivan a tu audiencia y mejoran la conversión.",
                },
                {
                  icon: Smartphone,
                  title: "Desarrollo de Apps Móviles",
                  description:
                    "Diseñamos y desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que destacan en el mercado.",
                },
                {
                  icon: Megaphone,
                  title: "Marketing Digital",
                  description:
                    "Implementamos estrategias de marketing digital personalizadas para aumentar tu visibilidad online y generar leads de calidad.",
                },
                {
                  icon: Search,
                  title: "SEO",
                  description:
                    "Optimizamos tu presencia en buscadores para aumentar el tráfico orgánico y mejorar el posicionamiento de tu sitio web.",
                },
                {
                  icon: Server,
                  title: "Servicios TI",
                  description:
                    "Ofrecemos soporte técnico, gestión de infraestructura y soluciones en la nube para mantener tu negocio funcionando sin problemas.",
                },
                {
                  icon: Users,
                  title: "Consultoría TI",
                  description:
                    "Asesoramos en la planificación estratégica de TI y la transformación digital para optimizar tus procesos de negocio.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white border-none shadow-lg h-full">
                    <CardHeader>
                      <service.icon className="w-8 h-8 mb-2 text-teal-500" />
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proceso"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Nuestro Proceso de Trabajo
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Análisis",
                  description:
                    "Entendemos tus necesidades y objetivos de negocio para crear una estrategia personalizada.",
                },
                {
                  title: "Planificación",
                  description:
                    "Diseñamos un plan detallado que integra desarrollo, marketing y optimización.",
                },
                {
                  title: "Ejecución",
                  description:
                    "Implementamos las soluciones acordadas con un enfoque ágil y orientado a resultados.",
                },
                {
                  title: "Optimización",
                  description:
                    "Monitoreamos el rendimiento y realizamos mejoras continuas para maximizar el ROI.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestro Portafolio
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce de Moda",
                  description:
                    "Desarrollo web y estrategia SEO para una tienda online de moda sostenible.",
                  image: "/placeholder.svg",
                },
                {
                  title: "App de Delivery",
                  description:
                    "Aplicación móvil y campaña de marketing digital para un servicio de entrega de comida.",
                  image: "/placeholder.svg",
                },
                {
                  title: "Portal Corporativo",
                  description:
                    "Rediseño web, optimización SEO y consultoría TI para una empresa de servicios financieros.",
                  image: "/placeholder.svg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white border-none shadow-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      layout="responsive"
                      className="object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="planes"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Planes de Soporte y Asesoría
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Plan Básico",
                  description:
                    "Soporte web básico y asesoría tecnológica puntual",
                  price: "$99/mes",
                  features: [
                    "Mantenimiento básico del sitio web",
                    "Soporte por correo electrónico",
                    "Actualizaciones de seguridad mensuales",
                    "1 hora de consultoría tecnológica al mes",
                  ],
                },
                {
                  title: "Plan Profesional",
                  description:
                    "Soporte web avanzado y asesoría tecnológica regular",
                  price: "$199/mes",
                  features: [
                    "Mantenimiento completo del sitio web",
                    "Soporte prioritario por correo y teléfono",
                    "Actualizaciones de seguridad semanales",
                    "Optimización de rendimiento mensual",
                    "3 horas de consultoría tecnológica al mes",
                  ],
                },
                {
                  title: "Plan Empresarial",
                  description:
                    "Soporte web premium y asesoría tecnológica integral",
                  price: "$399/mes",
                  features: [
                    "Mantenimiento y desarrollo continuo",
                    "Soporte 24/7 por correo, teléfono y chat",
                    "Actualizaciones de seguridad en tiempo real",
                    "Optimización de rendimiento semanal",
                    "Monitoreo proactivo del sitio",
                    "10 horas de consultoría tecnológica al mes",
                    "Desarrollo de nuevas funcionalidades",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white border-none shadow-lg h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {plan.title}
                      </CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-teal-500 mb-4">
                        {plan.price}
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white">
                        Contratar
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Lo que dicen nuestros clientes
            </h2>
            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Card className="bg-white border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {testimonials[currentTestimonial].name}
                      </CardTitle>
                      <CardDescription>
                        {testimonials[currentTestimonial].role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">
                        "{testimonials[currentTestimonial].comment}"
                      </p>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-teal-500" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
                onClick={prevTestimonial}
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                onClick={nextTestimonial}
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contáctanos
            </h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    required
                    className="w-full bg-gray-50 border-gray-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="tu@email.com"
                    type="email"
                    required
                    className="w-full bg-gray-50 border-gray-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tu mensaje"
                    required
                    className="w-full bg-gray-50 border-gray-300"
                    rows={4}
                  />
                </div>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white transition duration-300"
                  type="submit"
                >
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Desarrollo Móvil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Marketing Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Casos de estudio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-500">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                &copy; 2024 TechMarkPro. Todos los derechos reservados.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-6 h-6 hover:text-teal-500" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="w-6 h-6 hover:text-teal-500" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-6 h-6 hover:text-teal-500" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6 hover:text-teal-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? "w-80" : "w-auto"}`}
      >
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={() => setIsChatOpen(true)}
                className="rounded-full p-4 bg-teal-500 hover:bg-teal-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <MessageSquare className="h-6 w-6" />
                <span className="sr-only">Abrir chat</span>
              </Button>
            </motion.div>
          )}
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="w-full border-none shadow-lg">
                <CardHeader className="flex flex-row items-center bg-teal-500 text-white">
                  <CardTitle>Chat con nosotros</CardTitle>
                  <Button
                    variant="ghost"
                    className="ml-auto text-white hover:text-teal-100"
                    onClick={() => setIsChatOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="bg-white">
                  <div className="space-y-4 max-h-[300px] overflow-y-auto">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`rounded-lg p-2 ${
                            msg.role === "user"
                              ? "bg-teal-500 text-white"
                              : "bg-gray-200"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleChatSubmit} className="mt-4 flex gap-2">
                    <Input
                      placeholder="Escribe tu mensaje..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-grow"
                    />
                    <Button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                    >
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
