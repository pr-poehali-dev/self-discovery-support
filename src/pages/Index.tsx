import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/files/8d4df0d3-e423-43c4-897a-cdd69eb58733.jpg";

const services = [
  {
    icon: "Heart",
    title: "Индивидуальная терапия",
    desc: "Личное пространство для глубокой работы с тревогой, страхами и внутренними конфликтами. Без осуждения.",
    price: "от 3 500 ₽",
    duration: "60 минут",
    tag: "sage",
  },
  {
    icon: "Users",
    title: "Работа с отношениями",
    desc: "Восстановление доверия к себе и близким. Работа с границами, привязанностью и паттернами поведения.",
    price: "от 3 500 ₽",
    duration: "60 минут",
    tag: "rose",
  },
  {
    icon: "Leaf",
    title: "Работа с потерями",
    desc: "Поддержка в периоды горя, расставаний и жизненных перемен. Бережное сопровождение через кризис.",
    price: "от 3 500 ₽",
    duration: "60 минут",
    tag: "sage",
  },
  {
    icon: "Sparkles",
    title: "Онлайн-консультации",
    desc: "Та же глубина работы — в удобном для вас формате, из любой точки мира.",
    price: "от 3 000 ₽",
    duration: "60 минут",
    tag: "rose",
  },
];

const steps = [
  {
    num: "01",
    title: "Первый контакт",
    desc: "Напишите мне — коротко, что сейчас происходит. Мы договоримся о времени первой встречи.",
  },
  {
    num: "02",
    title: "Знакомство",
    desc: "На первой сессии мы просто разговариваем. Никаких заданий — только пространство, чтобы быть услышанным.",
  },
  {
    num: "03",
    title: "Совместная работа",
    desc: "Выстраиваем маршрут вместе: темп, частота встреч, глубина погружения — всё подбирается под вас.",
  },
  {
    num: "04",
    title: "Изменения",
    desc: "Постепенно жизнь становится более понятной. Вы начинаете доверять себе и своим решениям.",
  },
];

const results = [
  "Выход из тревожных петель",
  "Здоровые границы в отношениях",
  "Доверие к себе и своим чувствам",
  "Меньше самокритики",
  "Ясность в жизненных решениях",
  "Опора в трудных моментах",
];

const reviews = [
  {
    name: "Анна К.",
    text: "Наконец-то нашла место, где можно говорить честно. После полугода работы я буквально стала другим человеком — более спокойным и уверенным.",
    sessions: "8 месяцев",
  },
  {
    name: "Михаил Р.",
    text: "Скептически относился к терапии, но друг настоял. Теперь понимаю — это было лучшее решение. Научился понимать свои реакции.",
    sessions: "5 месяцев",
  },
  {
    name: "Елена С.",
    text: "Тёплая, внимательная, профессиональная. Ни разу не почувствовала себя странной или непонятой. Это редкость.",
    sessions: "1 год",
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
    { label: "О психологе", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Процесс", href: "#process" },
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
          Анна Светлова
          <span className="ml-2 text-sm" style={{ color: "hsl(var(--rose))", fontFamily: "'Golos Text', sans-serif" }}>
            психолог
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
          className="absolute top-20 right-0 w-[55vw] h-[75vh] rounded-l-[80px] overflow-hidden"
          style={{ background: "hsl(var(--sage-light))" }}
        >
          <img
            src={HERO_IMAGE}
            alt="Уютный кабинет психолога"
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "multiply", opacity: 0.55 }}
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
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              <span className="tag-sage">Психологическое консультирование</span>
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "hsl(var(--warm-dark))",
                letterSpacing: "-0.02em",
                animation: "fadeUp 0.7s ease 0.2s both",
              }}
            >
              Безопасное<br />
              <em style={{ fontStyle: "italic", color: "hsl(var(--rose-dark))" }}>пространство</em>
              <br />для изменений
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                color: "hsl(var(--muted-foreground))",
                fontWeight: 300,
                animation: "fadeUp 0.7s ease 0.35s both",
                maxWidth: "420px",
              }}
            >
              Помогаю разобраться в себе, выйти из тревоги и построить жизнь, которая ощущается как своя.
              Работаю онлайн и в Москве.
            </p>

            <div
              className="flex flex-wrap gap-4 mt-10"
              style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
            >
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Записаться на консультацию
              </button>
              <button onClick={() => scrollTo("#about")} className="btn-outline">
                Узнать больше
              </button>
            </div>

            <div
              className="flex gap-8 mt-12"
              style={{ animation: "fadeUp 0.7s ease 0.65s both" }}
            >
              {[["8+", "лет практики"], ["300+", "клиентов"], ["97%", "рекомендуют"]].map(([n, l]) => (
                <div key={n}>
                  <div
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "2rem",
                      fontWeight: 500,
                      color: "hsl(var(--rose-dark))",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
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
                <div className="tag-rose mb-6">О психологе</div>
                <h2 className="section-title mb-6">
                  Анна Светлова —<br />
                  <em style={{ fontStyle: "italic" }}>ваш проводник</em>
                </h2>
                <p className="section-subtitle mb-5">
                  Клинический психолог с 8-летним опытом. Специализируюсь на тревожных расстройствах,
                  кризисах идентичности и работе с отношениями.
                </p>
                <p
                  className="leading-relaxed mb-8"
                  style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}
                >
                  Верю, что каждый человек несёт в себе ресурс для изменений. Моя задача —
                  создать достаточно безопасное пространство, чтобы этот ресурс проявился.
                  Работаю в интегративном подходе: КПТ, схема-терапия, элементы психодинамики.
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    "Член Российского психологического общества",
                    "Сертификат КПТ — институт Бека (США)",
                    "Регулярная супервизия и личная терапия",
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

              <div className="relative">
                <div
                  className="absolute -top-6 -left-6 w-full h-full rounded-3xl"
                  style={{ background: "hsl(var(--rose-light))" }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ background: "hsl(var(--sage-light))", aspectRatio: "3/4" }}
                >
                  <img
                    src={HERO_IMAGE}
                    alt="Психолог"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.65 }}
                  />
                  <div
                    className="absolute bottom-6 left-6 right-6 rounded-2xl p-5"
                    style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
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
                      «Терапия — это не про слабость. Это про смелость встретить себя.»
                    </div>
                    <div className="mt-2 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                      — Анна Светлова
                    </div>
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
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Услуги</div>
            <h2 className="section-title">С чем я работаю</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Каждый запрос индивидуален. Вот основные направления работы.
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
                    <span className={`tag-${s.tag}`} style={{ fontSize: "0.75rem" }}>
                      {s.duration}
                    </span>
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
            <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Процесс работы</div>
            <h2 className="section-title">Как это происходит</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Первый шаг всегда самый трудный. Я постараюсь сделать его максимально простым.
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="tag-sage mb-6">Результаты</div>
              <h2 className="section-title mb-6">
                Что меняется<br />
                <em style={{ fontStyle: "italic" }}>после работы</em>
              </h2>
              <p className="section-subtitle mb-10">
                Результаты терапии не мгновенны, но они реальны.
                Вот что чаще всего отмечают клиенты.
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary"
              >
                Начать свой путь
              </button>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col gap-3">
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
                      (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Отзывы</div>
            <h2 className="section-title">Истории клиентов</h2>
            <p className="section-subtitle mt-4">
              Имена изменены с согласия клиентов
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
              <div className="tag-rose mb-6">Запись и контакты</div>
              <h2 className="section-title mb-6">
                Сделайте первый<br />
                <em style={{ fontStyle: "italic" }}>шаг сегодня</em>
              </h2>
              <p className="section-subtitle mb-10">
                Напишите, что вас беспокоит — и мы найдём удобное время для первой встречи.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "anna@example.com" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, метро Чистые пруды" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 10:00–20:00, Сб: 11:00–17:00" },
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
                      <div className="font-medium text-sm" style={{ color: "hsl(var(--warm-dark))" }}>
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
                    Оставьте заявку
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
                        placeholder="Ваше имя"
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
                        placeholder="Опишите коротко, что вас беспокоит..."
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
                      Записаться на консультацию
                    </button>
                    <p className="text-center text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                      Отвечаю в течение 24 часов
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
            Анна Светлова · Психолог
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
