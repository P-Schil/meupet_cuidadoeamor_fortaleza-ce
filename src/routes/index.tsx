import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, CalendarCheck, ChevronLeft, ChevronRight, Clock3,
  HeartHandshake, Instagram, MapPin, Menu, MessageCircle, PawPrint,
  ShieldCheck, Sparkles, Stethoscope, Truck, X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const whatsappHref = "https://wa.me/55858523530";
const instagramHref = "https://www.instagram.com/meupetcuidadoeamor/";
const address = "Rua Doutor Perilio Teixeira, 1095, Parque Genibau, Fortaleza, CE, 60534-080";

const services = [
  { icon: Stethoscope, title: "Atendimento veterinário", description: "Cuidado profissional para apoiar a saúde e o bem-estar do seu pet com atendimento próximo e responsável." },
  { icon: Sparkles, title: "Banho e tosa", description: "Higiene e cuidados estéticos realizados com atenção, carinho e foco no conforto do animal." },
  { icon: PawPrint, title: "Pet shop completo", description: "Produtos e soluções para a rotina do seu pet, com orientação para facilitar escolhas mais adequadas." },
  { icon: Truck, title: "Pedidos e entregas", description: "Mais praticidade para solicitar produtos e combinar entregas diretamente com a equipe." },
];

const differentiators = [
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Atendimento próximo, com foco nas necessidades de cada pet e de sua família." },
  { icon: ShieldCheck, title: "Compromisso técnico e ético", text: "Qualidade e responsabilidade como princípios para cada atendimento." },
  { icon: Clock3, title: "Horários claros", text: "Informações de funcionamento organizadas para facilitar seu planejamento." },
  { icon: MessageCircle, title: "Contato direto", text: "WhatsApp para agendamentos, pedidos e dúvidas de forma prática." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonialCards = [
    {
      title: "Espaço para depoimentos reais",
      text: "Depoimentos de clientes podem ser inseridos aqui quando forem fornecidos pela MEU PET, mantendo a comunicação baseada em experiências reais.",
      meta: "Conteúdo real a adicionar",
    },
    {
      title: "Casos de sucesso",
      text: "Esta área está preparada para apresentar resultados e histórias reais de clientes, sem criar avaliações ou números que ainda não tenham sido informados.",
      meta: "Conteúdo real a adicionar",
    },
    {
      title: "Confiança construída no atendimento",
      text: "Use este espaço para destacar experiências reais que demonstrem cuidado, segurança e qualidade no atendimento aos pets.",
      meta: "Conteúdo real a adicionar",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#173016]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#083305]/95 text-white shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <button type="button" onClick={() => goTo("inicio")} className="flex items-center gap-2 text-left" aria-label="Voltar ao início">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#083305]"><PawPrint size={22} aria-hidden="true" /></span>
            <span><span className="block text-sm font-black uppercase tracking-[0.16em]">MEU PET</span><span className="block text-xs font-medium text-white/75">Cuidado e Amor</span></span>
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {[["sobre","Sobre"],["servicos","Serviços"],["diferenciais","Diferenciais"],["depoimentos","Prova social"],["contato","Contato"]].map(([id,label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="text-sm font-semibold text-white/85 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{label}</button>
            ))}
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#083305] transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Quero Tirar Dúvidas</a>
          </nav>
          <button type="button" className="rounded-lg p-2 text-white lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={26} /> : <Menu size={26} />}</button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/15 bg-[#083305] px-5 py-5 lg:hidden" aria-label="Menu mobile">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {[["sobre","Sobre"],["servicos","Serviços"],["diferenciais","Diferenciais"],["depoimentos","Prova social"],["contato","Contato"]].map(([id,label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="py-2 text-left font-semibold text-white">{label}</button>
              ))}
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-extrabold text-[#083305]">Quero Tirar Dúvidas</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden bg-[#083305] pt-28" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{backgroundImage:"url('https://images.unsplash.com/photo-1558944351-c9c4f5d6d4b8?auto=format&fit=crop&w=2200&q=85')"}} role="img" aria-label="Foto profissional representando cuidado veterinário e bem-estar animal" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#083305]/55 via-[#083305]/70 to-[#083305]" />
          <div className="relative mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
            <div data-reveal className="reveal">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur"><PawPrint size={15} aria-hidden="true" />Cuidado profissional para o seu pet</span>
              <h1 id="hero-title" className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Cuidado e amor para entregar resultados que superam expectativas.</h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">A MEU PET - Cuidado e Amor oferece atendimento especializado, pet shop, banho e tosa e soluções práticas para quem busca qualidade, confiança e bem-estar animal em Fortaleza.</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-[#083305] shadow-xl transition hover:-translate-y-1 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40">Quero Falar com Especialista <ArrowRight size={18} aria-hidden="true" /></a>
                <button type="button" onClick={() => goTo("servicos")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Conhecer serviços</button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div data-reveal className="reveal">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-[#083305]">Sobre a MEU PET</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#173016] sm:text-5xl">Cuidado completo, relacionamento próximo e responsabilidade.</h2>
              <p className="mt-6 text-base leading-8 text-[#536153]">A MEU PET - Cuidado e Amor nasceu com a proposta de tornar o cuidado dos animais mais acolhedor, claro e profissional, reunindo soluções para a rotina dos pets em um atendimento próximo de seus tutores.</p>
              <p className="mt-4 text-base leading-8 text-[#536153]">Nosso propósito é construir relacionamentos duradouros, preservando a qualidade técnica e a ética profissional em cada contato. O atendimento personalizado é parte central da experiência, sempre com foco no bem-estar do animal.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#dce7da] bg-[#f7faf6] p-5"><HeartHandshake className="text-[#083305]" size={26} aria-hidden="true" /><h3 className="mt-3 font-extrabold">Nossa missão</h3><p className="mt-2 text-sm leading-6 text-[#536153]">Qualidade e relacionamento duradouro como fundamentos para um atendimento responsável.</p></div>
                <div className="rounded-2xl border border-[#dce7da] bg-[#f7faf6] p-5"><ShieldCheck className="text-[#083305]" size={26} aria-hidden="true" /><h3 className="mt-3 font-extrabold">Nosso diferencial</h3><p className="mt-2 text-sm leading-6 text-[#536153]">Atendimento personalizado com foco em resultados e expertise especializada no segmento.</p></div>
              </div>
            </div>
            <div data-reveal className="reveal relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85" alt="Foto profissional representando equipe e cuidado especializado com um pet" loading="lazy" className="h-[520px] w-full object-cover" /></div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-auto sm:w-80"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#083305]">Em destaque</p><p className="mt-2 text-sm font-semibold leading-6 text-[#173016]">Infraestrutura completa e atendimento dedicado ao bem-estar dos pets.</p></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-24 bg-[#f5f8f3] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal max-w-3xl"><span className="text-sm font-black uppercase tracking-[0.18em] text-[#083305]">Serviços e soluções</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#173016] sm:text-5xl">Tudo para facilitar o cuidado com o seu pet.</h2><p className="mt-5 text-base leading-7 text-[#536153]">Soluções pensadas para quem valoriza atendimento confiável, praticidade e qualidade em cada etapa.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service,index) => { const Icon=service.icon; return (
                <article key={service.title} data-reveal className="reveal group flex h-full flex-col rounded-3xl border border-[#dce7da] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl" style={{transitionDelay:`${index*60}ms`}}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#083305] text-white"><Icon size={23} aria-hidden="true" /></span>
                  <h3 className="mt-6 text-xl font-black text-[#173016]">{service.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[#536153]">{service.description}</p>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#083305] underline-offset-4 transition group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083305]">Quero Agendar Atendimento <ArrowRight size={16} aria-hidden="true" /></a>
                </article>
              ); })}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="scroll-mt-24 bg-[#083305] px-5 py-20 text-white sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div data-reveal className="reveal"><span className="text-sm font-black uppercase tracking-[0.18em] text-white/70">Diferenciais competitivos</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Confiança começa com qualidade e clareza.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/75">Nossa proposta é oferecer uma experiência profissional e acolhedora, com comunicação direta para você tomar decisões com mais segurança.</p><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#083305] transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30">Quero Tirar Dúvidas <MessageCircle size={18} aria-hidden="true" /></a></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item,index) => { const Icon=item.icon; return <article key={item.title} data-reveal className="reveal rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:bg-white/10" style={{transitionDelay:`${index*70}ms`}}><Icon size={27} aria-hidden="true" /><h3 className="mt-5 text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p></article>; })}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div data-reveal className="reveal"><span className="text-sm font-black uppercase tracking-[0.18em] text-[#083305]">Depoimentos e prova social</span><h2 className="mt-3 text-3xl font-black tracking-tight text-[#173016] sm:text-5xl">Experiências reais merecem espaço de destaque.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#536153]">A estrutura abaixo está pronta para receber depoimentos, resultados e fotos reais fornecidos pela MEU PET. Não utilizamos avaliações ou clientes fictícios.</p></div>
            <div data-reveal className="reveal mt-10 rounded-[2rem] border border-[#dce7da] bg-[#f5f8f3] p-7 sm:p-10">
              <div className="mx-auto flex max-w-2xl flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#083305] text-white"><HeartHandshake size={28} aria-hidden="true" /></div><h3 className="mt-6 text-2xl font-black text-[#173016]">{testimonialCards[testimonialIndex].title}</h3><p className="mt-4 text-base leading-7 text-[#536153]">{testimonialCards[testimonialIndex].text}</p><p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#083305]">{testimonialCards[testimonialIndex].meta}</p>
                <div className="mt-7 flex items-center gap-3">
                  <button type="button" onClick={() => setTestimonialIndex((current)=>(current-1+testimonialCards.length)%testimonialCards.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cddbc9] bg-white text-[#083305] transition hover:bg-[#083305] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083305]" aria-label="Depoimento anterior"><ChevronLeft size={19} /></button>
                  <div className="flex gap-2" aria-label="Indicadores de depoimentos">{testimonialCards.map((_,index)=><button key={index} type="button" onClick={()=>setTestimonialIndex(index)} className={"h-2.5 rounded-full transition-all "+(index===testimonialIndex?"w-7 bg-[#083305]":"w-2.5 bg-[#b8c9b4]")} aria-label={"Ir para depoimento "+(index+1)} aria-current={index===testimonialIndex}/>)}</div>
                  <button type="button" onClick={() => setTestimonialIndex((current)=>(current+1)%testimonialCards.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cddbc9] bg-white text-[#083305] transition hover:bg-[#083305] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083305]" aria-label="Próximo depoimento"><ChevronRight size={19} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-[#f5f8f3] px-5 py-20 sm:px-8 lg:py-28">
          <div data-reveal className="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-[#dce7da]">
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="bg-[#083305] p-8 text-white sm:p-12"><span className="text-sm font-black uppercase tracking-[0.18em] text-white/70">Vamos conversar</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Cuidado profissional para quem quer escolher com segurança.</h2><p className="mt-5 max-w-xl text-base leading-7 text-white/75">Tire dúvidas, consulte condições e combine seu atendimento diretamente com a equipe da MEU PET - Cuidado e Amor.</p><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-[#083305] transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30">Quero Falar com Especialista <ArrowRight size={18} aria-hidden="true" /></a></div>
              <div className="p-8 sm:p-12"><h3 className="text-xl font-black text-[#173016]">Informações de contato</h3><div className="mt-7 space-y-5">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl p-3 transition hover:bg-[#f5f8f3]"><MessageCircle className="mt-0.5 shrink-0 text-[#083305]" size={21}/><span><span className="block text-xs font-black uppercase tracking-wider text-[#758173]">WhatsApp</span><span className="mt-1 block font-bold text-[#173016]">(85) 85235-530</span></span></a>
                <a href="mailto:meupet@petshop" className="flex gap-4 rounded-2xl p-3 transition hover:bg-[#f5f8f3]"><MessageCircle className="mt-0.5 shrink-0 text-[#083305]" size={21}/><span><span className="block text-xs font-black uppercase tracking-wider text-[#758173]">E-mail</span><span className="mt-1 block font-bold text-[#173016]">meupet@petshop</span></span></a>
                <div className="flex gap-4 rounded-2xl p-3"><MapPin className="mt-0.5 shrink-0 text-[#083305]" size={21}/><span><span className="block text-xs font-black uppercase tracking-wider text-[#758173]">Endereço</span><span className="mt-1 block font-bold leading-6 text-[#173016]">{address}</span></span></div>
                <a href={instagramHref} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl p-3 transition hover:bg-[#f5f8f3]"><Instagram className="mt-0.5 shrink-0 text-[#083305]" size={21}/><span><span className="block text-xs font-black uppercase tracking-wider text-[#758173]">Instagram</span><span className="mt-1 block font-bold text-[#173016]">@meupetcuidadoeamor</span></span></a>
              </div></div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-[#dce7da] bg-white p-7"><div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><h3 className="text-lg font-black text-[#173016]">Horário de funcionamento</h3><p className="mt-2 text-sm leading-6 text-[#536153]">Sexta 08:00–12:00 e 14:00–18:00 · Sábado 08:00–18:00 · Domingo 07:00–12:00 · Segunda a quinta 08:00–12:00 e 14:00–18:00.</p></div><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#083305] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0d4a08] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#083305]/20"><CalendarCheck size={18} aria-hidden="true"/>Quero Agendar Atendimento</a></div></div>
        </section>
      </main>

      <footer className="bg-[#071f05] px-5 py-10 text-white sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-2"><PawPrint size={20} aria-hidden="true"/><span className="font-black">MEU PET - Cuidado e Amor</span></div><p className="mt-2 max-w-md text-sm leading-6 text-white/60">Cuidado, qualidade e relacionamento duradouro para o bem-estar dos pets.</p></div><div className="flex flex-wrap gap-4 text-sm font-semibold text-white/75"><button type="button" onClick={()=>goTo("inicio")} className="hover:text-white">Início</button><button type="button" onClick={()=>goTo("servicos")} className="hover:text-white">Serviços</button><a href={instagramHref} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></div></div><div className="mx-auto mt-7 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/45">© {new Date().getFullYear()} MEU PET - Cuidado e Amor. Todos os direitos reservados.</div></footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#083305] text-white shadow-2xl ring-4 ring-white transition hover:scale-105 hover:bg-[#0d4a08] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#083305]/30 sm:bottom-7 sm:right-7" aria-label="Falar com a MEU PET pelo WhatsApp"><MessageCircle size={25} aria-hidden="true"/></a>
    </div>
  );
}
