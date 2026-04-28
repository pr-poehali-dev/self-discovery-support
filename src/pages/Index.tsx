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
        style={{ paddingTop: "80px", background: "hsl(38 40% 94%)" }}
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
      <section id="about" className="py-24 md:py-32" style={{ background: "hsl(38 40% 94%)" }}>
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
                    style={{ objectPosition: "top center" }}
                  />
                </div>
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "hsl(var(--rose-light))", marginTop: "-18px", position: "relative", zIndex: 1, border: "1px solid hsl(20 15% 70%)" }}
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
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <AnimatedSection>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "hsl(var(--rose))",
                  borderRadius: "2px",
                  margin: "0 auto 32px",
                }}
              />

              <h2 className="section-title mb-6">
                Получи самые выгодные<br />персональные условия
              </h2>

              <div
                style={{
                  background: "hsl(var(--rose-light))",
                  border: "1px solid hsl(20 15% 70%)",
                  borderRadius: "1.25rem",
                  padding: "28px 32px",
                  marginBottom: "32px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <span style={{ color: "hsl(var(--warm-dark))" }}>
                    Чтобы прийти к тому, чего ты по-настоящему хочешь — жить в согласии с собой,<br />чувствовать, что ты можешь опираться на себя:
                  </span>

                  {/* Рамка с результатами "когда" */}
                  <div style={{
                    background: "hsl(var(--cream))",
                    border: "1px solid hsl(20 15% 70%)",
                    borderRadius: "1rem",
                    padding: "20px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}>
                    {[
                      { icon: "Waves", text: "когда внутри становится тише, появляется спокойная уверенность в своих решениях," },
                      { icon: "Users", text: "когда тебе больше не нужно постоянно сомневаться, оправдываться или подстраиваться, чтобы сохранить отношения," },
                      { icon: "Sparkles", text: "когда ты перестаёшь каждый раз возвращаться в привычное «надо» и начинаешь замечать, где выбираешь не себя — и в этих моментах уже можешь действовать по-другому," },
                      { icon: "Shield", text: "когда ты спокойно говоришь «нет» без внутреннего отката в вину и не разрушаешься от чужих реакций," },
                      { icon: "Heart", text: "когда в отношениях появляется ты — а не только «удобная версия тебя»," },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        <span style={{ flexShrink: 0, marginTop: "3px", color: "hsl(10 60% 80%)" }}>
                          <Icon name={item.icon} size={18} />
                        </span>
                        <span style={{
                          fontFamily: "'Cormorant', serif",
                          fontStyle: "italic",
                          fontSize: "1.15rem",
                          color: "hsl(var(--rose-dark))",
                          lineHeight: 1.6,
                        }}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span style={{ color: "hsl(var(--warm-dark))" }}>
                    и постепенно возвращаются энергия, желания и ощущение, что ты живёшь своей жизнью, а не проживаешь её «на автомате»,
                  </span>
                  <span style={{ color: "hsl(var(--warm-dark))", fontWeight: 500 }}>
                    и наконец перестать предавать свои желания —
                  </span>
                </div>
                <p style={{ color: "hsl(var(--sage-dark))", fontSize: "1rem", lineHeight: 1.7, fontWeight: 500 }}>
                  Выбери удобный мессенджер и напиши мне в личные сообщения слово:
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "hsl(var(--rose-dark))",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  «Путь к себе»
                </p>
              </div>

              <p style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.95rem", marginBottom: "28px" }}>
                Я отвечу и подберу для тебя персональные условия
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a
                  href="https://t.me/irina151718"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "16px 24px",
                    borderRadius: "1rem",
                    background: "hsl(200 80% 50%)",
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.53.26l.19-2.68 4.88-4.41c.21-.19-.05-.29-.33-.1L7.92 14.6 5.37 13.8c-.55-.17-.56-.55.12-.82l9.07-3.5c.46-.17.86.11.71.82h.37z"/>
                  </svg>
                  Написать в Telegram
                </a>

                <a
                  href="https://max.ru/u/f9LHodD0cOIDJO7b3GsFDqo7AwyJ6K_ZfksSWOiFwxRekcOz8X-iY9E9bvQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "16px 24px",
                    borderRadius: "1rem",
                    background: "hsl(var(--sage))",
                    color: "hsl(var(--warm-dark))",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="hsl(140 22% 35%)" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Max</text>
                  </svg>
                  Написать в Max
                </a>
              </div>

              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "hsl(var(--sage))",
                  borderRadius: "2px",
                  margin: "36px auto 0",
                }}
              />
            </div>
          </AnimatedSection>
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