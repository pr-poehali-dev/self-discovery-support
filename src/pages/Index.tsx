import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const AESTHETIC_IMAGE = "https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/files/f51be190-fc5a-4068-be46-687999d6eae2.jpg";

const services = [
  {
    icon: "Heart",
    title: "Базовый",
    desc: "Для тех, кто хочет начать возвращаться к себе. Начинаешь слышать себя, снижается тревожность, становится легче внутри, появляются первые изменения.",
    price: "2 месяца",
    duration: "8 встреч",
    tag: "sage",
  },
  {
    icon: "Sparkles",
    title: "VIP",
    desc: "Глубокий формат, где меняется не только состояние, а вся жизнь. Перестаёшь предавать себя, спокойно говоришь «нет», появляется устойчивая опора на себя.",
    price: "3 месяца",
    duration: "12 встреч",
    tag: "rose",
  },
];

const steps = [
  {
    num: "01",
    title: "Реальные ситуации",
    desc: "Работаем с моментами, где ты теряешь себя — в конкретных жизненных ситуациях, а не в теории.",
  },
  {
    num: "02",
    title: "Твои реакции",
    desc: "Разбираем твои выборы и реакции — почему ты снова выбрала не себя и как это менять.",
  },
  {
    num: "03",
    title: "Чувства внутри",
    desc: "Работаем с чувствами, которые ты привыкла подавлять: вина, страх, усталость, злость.",
  },
  {
    num: "04",
    title: "Жизнь из себя",
    desc: "Постепенно ты начинаешь жить не из «надо», а исходя из себя и своих желаний.",
  },
];

const results = [
  "Слышишь себя и понимаешь, чего хочешь",
  "Замечаешь, где предаёшь себя",
  "Выбираешь себя без страха",
  "Спокойно говоришь «нет» без вины",
  "Перестаёшь тащить всё на себе",
  "Спокойствие становится твоим состоянием",
  "Появляется опора на себя",
  "Возвращается энергия и настоящие желания",
];

const reviews = [
  {
    name: "Марина",
    text: "Я всю жизнь жила через «должна». После работы с Ириной я впервые сказала «нет» — и не умерла от вины. Это было что-то невероятное.",
    sessions: "Базовый",
  },
  {
    name: "Татьяна",
    text: "Я думала, что просто устала. Оказалось, я годами предавала себя. Сейчас я наконец-то чувствую, что живу своей жизнью.",
    sessions: "VIP",
  },
  {
    name: "Ольга",
    text: "Ирина помогла мне увидеть, где я теряю себя. Постепенно всё начало меняться — в отношениях, в работе, в себе.",
    sessions: "VIP",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Для кого", href: "#about" },
    { label: "Форматы", href: "#services" },
    { label: "Как проходит", href: "#process" },
    { label: "Результаты", href: "#results" },
    { label: "Отзывы", href: "#reviews" },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "hsl(30 20% 97% / 0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid hsl(var(--border))" }}
      >
        <a
          href="#"
          className="font-light tracking-wide"
          style={{ fontFamily: "'Cormorant', serif", fontSize: "1.3rem", color: "hsl(var(--warm-dark))" }}
        >
          <span className="flex flex-col leading-tight">
            <span>Ирина Плотникова</span>
            <span style={{ color: "hsl(var(--rose))", fontFamily: "'Golos Text', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}>психолог</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm transition-colors duration-200"
              style={{ color: "hsl(var(--muted-foreground))", fontFamily: "'Golos Text', sans-serif", background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--rose-dark))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary"
            style={{ padding: "0.5rem 1.5rem", fontSize: "0.85rem" }}
          >
            Записаться
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden"
          style={{ background: "hsl(var(--background))" }}
        >
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-2xl font-light"
              style={{ fontFamily: "'Cormorant', serif", color: "hsl(var(--warm-dark))", background: "none", border: "none", cursor: "pointer" }}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("#contact")} className="btn-primary mt-4">
            Записаться
          </button>
        </div>
      )}

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute top-20 right-0 w-[40vw] h-[80vh] rounded-l-[80px] overflow-hidden hidden md:block"
          style={{ background: "hsl(var(--sage-light))" }}
        >
          <img
            src="https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/bucket/8f1a3fdf-4a57-4b46-97d8-38c762a4b366.jpg"
            alt="Эстетика"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div
          className="absolute top-16 right-[8vw] w-32 h-32 rounded-full animate-float"
          style={{ background: "hsl(var(--rose-light))", opacity: 0.6 }}
        />
        <div
          className="absolute bottom-32 right-[35vw] w-20 h-20 rounded-full animate-float delay-300"
          style={{ background: "hsl(var(--sage))", opacity: 0.35 }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-xl md:max-w-[50%]">
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              <span className="tag-sage">Индивидуальное сопровождение</span>
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(1.9rem, 4.5vw, 3.8rem)",
                fontWeight: 300,
                lineHeight: 1.25,
                color: "hsl(var(--warm-dark))",
                letterSpacing: "-0.01em",
                animation: "fadeUp 0.7s ease 0.2s both",
                maxWidth: "540px",
              }}
            >
              Как женщинам, которые привыкли тянуть всё на себе и потеряли себя в отношениях{" "}
              <span style={{ fontSize: "0.7em", verticalAlign: "middle", color: "hsl(var(--muted-foreground))" }}>—</span>{" "}
              <em style={{ fontStyle: "italic", color: "hsl(var(--rose-dark))" }}>перестать предавать себя, снова слышать свои желания и выбирать себя без вины и страха</em>
            </h1>

            <div
              className="flex flex-wrap gap-4 mt-10"
              style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
            >
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Хочу начать
              </button>
              <button onClick={() => scrollTo("#about")} className="btn-outline">
                Узнать подробнее
              </button>
            </div>

            <div
              className="flex gap-8 mt-12"
              style={{ animation: "fadeUp 0.7s ease 0.65s both" }}
            >
              {[["с 2023", "в\u00a0психологии"], ["2024", "окончила\nуниверситет"], ["10+", "женщин"], ["100%", "индивидуально"]].map(([n, l]) => (
                <div key={n}>
                  <div
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.7rem",
                      fontWeight: 500,
                      color: "hsl(var(--rose-dark))",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))", whiteSpace: "pre-line" }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="tag-rose mb-6">Это для тебя, если</div>
                <h2 className="section-title mb-6">
                  Ты узнаёшь<br />
                  <em style={{ fontStyle: "italic" }}>себя здесь?</em>
                </h2>
                <p className="section-subtitle mb-5">
                  Ты не понимаешь, как из этого выйти, поэтому продолжаешь жить так, как не хочешь. И уже не первый год.
                </p>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}
                >
                  Внутри одновременно живут два голоса: «Я хочу жить для себя» и «Я не имею права подвести других». 
                  Ты уже пробовала разбираться, читать, терпеть и держаться. Но это не работает, 
                  потому что ты продолжаешь жить через напряжение, страх и «надо».
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    "Живёшь с постоянным ощущением «я должна»",
                    "Не умеешь говорить «нет», потом накрывает вина",
                    "Подстраиваешься, чтобы не разрушить отношения",
                    "Живёшь ради других, откладывая себя",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "hsl(var(--sage-light))" }}
                      >
                        <Icon name="Check" size={11} />
                      </div>
                      <span className="text-sm" style={{ color: "hsl(var(--foreground))", fontWeight: 400 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ background: "hsl(var(--sage-light))", aspectRatio: "3/4" }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/bucket/e30d6b64-1193-45a7-a8c0-7939a6ab6804.jpg"
                    alt="Ирина Плотникова"
                    className="w-full h-full object-cover"
                    style={{ opacity: 1, objectPosition: "top center" }}
                  />
                </div>
                <div
                  className="mt-4 rounded-2xl p-5"
                  style={{ background: "hsl(var(--rose-light))" }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "hsl(var(--warm-dark))",
                      lineHeight: 1.5,
                    }}
                  >
                    «Я сама прошла этот путь и знаю, как это — жить не своей жизнью.»
                  </div>
                  <div className="mt-2 text-xs font-medium" style={{ color: "hsl(var(--rose-dark))" }}>
                    Ирина Плотникова
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 md:py-32"
        style={{ background: "hsl(var(--muted))" }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Форматы сопровождения</div>
            <h2 className="section-title">Выбери свой путь</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Это индивидуальная работа со мной, в которой ты начинаешь выбирать себя в жизни.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <AnimatedSection key={s.title}>
                <div
                  className="card-soft h-full"
                  style={{
                    borderTop: `3px solid hsl(var(--${s.tag === "sage" ? "sage" : "rose"}))`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: s.tag === "sage" ? "hsl(var(--sage-light))" : "hsl(var(--rose-light))",
                      }}
                    >
                      <Icon name={s.icon} size={20} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant', serif",
                        fontSize: "1.4rem",
                        fontWeight: 500,
                        color: "hsl(var(--warm-dark))",
                        paddingTop: "0.25rem",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>длительность</div>
                      <span
                        style={{
                          fontFamily: "'Cormorant', serif",
                          fontSize: "1.3rem",
                          fontWeight: 500,
                          color: "hsl(var(--warm-dark))",
                        }}
                      >
                        {s.price}
                      </span>
                    </div>
                    <button
                      onClick={() => scrollTo("#contact")}
                      className={s.tag === "rose" ? "btn-primary" : "btn-outline"}
                      style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
                    >
                      {s.tag === "rose" ? "Пойти в работу" : "Записаться"}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Как проходит работа</div>
            <h2 className="section-title">Мы работаем через</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Еженедельные встречи, разбор реальных ситуаций и поддержка между встречами.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num}>
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: i % 2 === 0 ? "hsl(var(--sage-light))" : "hsl(var(--rose-light))" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: i % 2 === 0 ? "hsl(var(--sage-dark))" : "hsl(var(--rose-dark))",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "hsl(var(--warm-dark))",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="py-24 md:py-32"
        style={{ background: "hsl(var(--sage-light))" }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-4">
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Результаты</div>
          </AnimatedSection>
          <AnimatedSection className="text-center mb-12">
            <p
              className="mx-auto max-w-xl"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                fontStyle: "italic",
                color: "hsl(var(--warm-dark))",
                lineHeight: 1.4,
              }}
            >
              В процессе работы меняется не только состояние —<br />
              меняется то, как ты живёшь.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {results.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--sage-light))" }}
                  >
                    <Icon name="Check" size={14} />
                  </div>
                  <span style={{ color: "hsl(var(--warm-dark))", fontWeight: 400 }}>{r}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Хочу на сопровождение
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Отзывы</div>
            <h2 className="section-title">Они уже выбрали себя</h2>
            <p className="section-subtitle mt-4">
              Имена изменены с согласия клиенток
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <AnimatedSection key={r.name}>
                <div className="card-soft h-full flex flex-col">
                  <div className="flex mb-4 gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" size={14} />
                    ))}
                  </div>
                  <p
                    className="flex-1 leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "hsl(var(--foreground))",
                      fontWeight: 400,
                    }}
                  >
                    «{r.text}»
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid hsl(var(--border))" }}
                  >
                    <span className="font-medium text-sm" style={{ color: "hsl(var(--warm-dark))" }}>
                      {r.name}
                    </span>
                    <span className="tag-sage" style={{ fontSize: "0.7rem" }}>
                      {r.sessions}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 md:py-32"
        style={{ background: "hsl(var(--muted))" }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="tag-rose mb-6">Начать работу</div>
              <h2 className="section-title mb-6">
                Если внутри есть:<br />
                <em style={{ fontStyle: "italic" }}>«Я больше не могу так с собой»</em>
              </h2>
              <p className="section-subtitle mb-6">
                Значит ты уже в точке, где можно начать. Тебе не нужно заставлять себя и резко менять жизнь.
              </p>
              <p className="leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>
                Можно постепенно возвращаться к себе, жить своей жизнью и не предавать себя.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 952 553-87-53" },
                  { icon: "Send", label: "Telegram", value: "@irina151718" },
                  { icon: "Globe", label: "Формат", value: "Онлайн, по всему миру\nОфлайн, г. Россошь" },
                  { icon: "Clock", label: "Ответ", value: "В течение 24 часов" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(var(--rose-light))" }}
                    >
                      <Icon name={c.icon} size={18} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {c.label}
                      </div>
                      <div className="font-medium text-sm" style={{ color: "hsl(var(--warm-dark))", whiteSpace: "pre-line" }}>
                        {c.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              {submitted ? (
                <div
                  className="card-soft flex flex-col items-center justify-center text-center py-16"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "hsl(var(--sage-light))" }}
                  >
                    <Icon name="Check" size={28} />
                  </div>
                  <h3
                    style={{ fontFamily: "'Cormorant', serif", fontSize: "1.8rem", color: "hsl(var(--warm-dark))" }}
                  >
                    Заявка отправлена
                  </h3>
                  <p className="mt-3 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Я свяжусь с вами в течение 24 часов
                  </p>
                </div>
              ) : (
                <div className="card-soft">
                  <h3
                    className="mb-6"
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.6rem",
                      color: "hsl(var(--warm-dark))",
                    }}
                  >
                    Хочу на сопровождение
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label
                        className="text-xs font-medium block mb-1.5"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        Имя
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Твоё имя"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "hsl(var(--cream))",
                          border: "1.5px solid hsl(var(--border))",
                          color: "hsl(var(--foreground))",
                          fontFamily: "'Golos Text', sans-serif",
                        }}
                        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "hsl(var(--rose))")}
                        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "hsl(var(--border))")}
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs font-medium block mb-1.5"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        Телефон или Telegram
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "hsl(var(--cream))",
                          border: "1.5px solid hsl(var(--border))",
                          color: "hsl(var(--foreground))",
                          fontFamily: "'Golos Text', sans-serif",
                        }}
                        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "hsl(var(--rose))")}
                        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "hsl(var(--border))")}
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs font-medium block mb-1.5"
                        style={{ color: "hsl(var(--muted-foreground))" }}
                      >
                        С чем хотите обратиться?
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Опиши коротко, что сейчас происходит..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "hsl(var(--cream))",
                          border: "1.5px solid hsl(var(--border))",
                          color: "hsl(var(--foreground))",
                          fontFamily: "'Golos Text', sans-serif",
                        }}
                        onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "hsl(var(--rose))")}
                        onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "hsl(var(--border))")}
                      />
                    </div>
                    <button
                      onClick={() => {
                        if (formData.name && formData.phone) setSubmitted(true);
                      }}
                      className="btn-primary w-full mt-2"
                      style={{ padding: "0.875rem", fontSize: "0.9rem" }}
                    >
                      Хочу на сопровождение
                    </button>
                    <p className="text-center text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                      Отвечу в течение 24 часов
                    </p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid hsl(var(--border))" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "1.1rem",
              color: "hsl(var(--warm-dark))",
            }}
          >
            Ирина Плотникова, психолог
          </div>
          <div className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-xs transition-colors duration-200"
                style={{ color: "hsl(var(--muted-foreground))", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--rose-dark))")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}