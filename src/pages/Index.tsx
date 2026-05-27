import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Heart",
    title: "Базовый — «Можно выдохнуть»",
    subtitle: "2 месяца / 8 встреч",
    desc: "Для тех, кто хочет перестать жить в постоянном напряжении и начать возвращаться к себе.",
    results: [
      "Перестанете постоянно ждать подвоха",
      "Тело начнёт постепенно расслабляться",
      "Начнёте слышать себя и свои желания",
      "Появится первое ощущение: «Мне можно выдохнуть»",
    ],
    tag: "sage",
    btn: "Записаться",
  },
  {
    icon: "Sparkles",
    title: "VIP — «Жить собой»",
    subtitle: "3 месяца / 12 встреч",
    desc: "Глубокий формат для тех, кто хочет не просто облегчения, а полностью перестать терять себя в отношениях.",
    results: [
      "Перестаёте предавать себя ради отношений",
      "Легко говорите «нет» без отката в вину",
      "Возвращается безопасность рядом с мужчиной",
      "Появляется больше лёгкости и желания жить",
      "Строите отношения, где есть не только он, но и вы",
    ],
    tag: "rose",
    btn: "Пойти в работу",
  },
];

const steps = [
  {
    num: "01",
    title: "Ваши реальные ситуации",
    desc: "Работаем с тем, что случилось на этой неделе — не с абстрактными темами, а с вашей реальной жизнью.",
  },
  {
    num: "02",
    title: "Тревога и напряжение",
    desc: "Работаем с внутренним напряжением, страхом чужой реакции и постоянным ожиданием «опять что-то будет».",
  },
  {
    num: "03",
    title: "Тело и его память",
    desc: "Практики, которые помогают телу выходить из сжатия. Тело помнит, как быть живым — мы возвращаем ему этот контакт.",
  },
  {
    num: "04",
    title: "Поддержка между встречами",
    desc: "Вы не остаётесь одна между сессиями — есть поддержка, чтобы не откатиться назад.",
  },
];

const results = [
  "Перестаёте сжиматься рядом с мужчиной",
  "Замечаете, где снова готовы предать себя",
  "Говорите о себе без страха и вины",
  "Возвращается лёгкость и вкус к жизни",
  "Тело начинает расслабляться само",
  "Появляется больше воздуха и пространства внутри",
  "Становится легче дышать полной грудью",
  "Однажды ловите себя: «Кажется… я снова живая»",
];

const reviews = [
  {
    name: "Марина",
    text: "Я не верила, что что-то изменится. Казалось — уже слишком долго терплю. Но уже через месяц работы я впервые не извинилась за своё «нет». Это было что-то невероятное.",
    sessions: "Базовый",
  },
  {
    name: "Елена",
    text: "Я думала, что холодность — это про меня. Оказалось, тело просто устало терпеть. Теперь я понимаю, что со мной происходило все эти годы.",
    sessions: "VIP",
  },
  {
    name: "Ольга",
    text: "Ирина помогла мне увидеть, как я исчезала рядом с ним. Постепенно я начала возвращаться — в своё тело, в свою жизнь. Это очень тихо, но очень настоящее.",
    sessions: "VIP",
  },
];

const faqs = [
  {
    q: "«А вдруг я просто холодная? Может, проблема во мне?»",
    a: "Тело не становится холодным просто так. Оно замерзает, когда рядом слишком долго было небезопасно. Оно закрывается, когда женщина слишком долго терпела, молчала и предавала себя. Мы не будем «лечить холодность». Мы разберёмся, почему ваше тело сказало «нет» — и что оно на самом деле пытается вам сказать.",
  },
  {
    q: "«А если я начну выбирать себя — я разрушу семью?»",
    a: "Страх реальный. Но вот вопрос, который мы будем исследовать вместе: что именно держит ваши отношения? Любовь? Или то, что вы всё время молчите, подстраиваетесь и говорите «да» против себя? Я не веду к разводу. И не сохраняю отношения любой ценой. Я помогаю вам услышать себя. А решение вы примете сами — из честности, а не из страха.",
  },
  {
    q: "«А вдруг психолог скажет, что я сама виновата?»",
    a: "Я никогда этого не скажу. Вы приходите не за вердиктом, а чтобы наконец перестать себя винить за то, что вам больно. Мы будем разбираться не в том, «кто виноват», а в том, где вы потеряли себя. Где начали терпеть. Где научились молчать.",
  },
  {
    q: "«Мне страшно признать, что я не хочу этого мужчину»",
    a: "Мы не будем торопить эту правду. Начнём с малого: как вы дышите, как тело откликается, что происходит в моменте. Постепенно, безопасно, без надрыва. И когда вы будете готовы услышать честный ответ — вы его услышите. Но не раньше, чем внутри появится опора.",
  },
  {
    q: "«Я уже столько лет терплю. А вдруг уже ничего не вернуть?»",
    a: "Тело помнит, как быть живым. Оно не разучилось расслабляться, хотеть, дышать полной грудью. Оно просто привыкло защищаться. Мы не возвращаем прошлое — мы идём в настоящее, туда, где вы снова можете чувствовать себя живой.",
  },
  {
    q: "«А сколько времени нужно? Не хочу терапию на годы»",
    a: "Базовый тариф — 2 месяца. Этого достаточно, чтобы перестать жить в постоянном напряжении, начать слышать себя и почувствовать, что можно выдохнуть. VIP — 3 месяца для более глубоких изменений. Но главное: вы перестанете терять себя. И это чувствуется уже в первые недели.",
  },
  {
    q: "«А это вообще сработает? У меня уже ничего не помогает»",
    a: "Я не даю магических таблеток. Но я знаю одно: когда женщина перестаёт жить против себя — её тело начинает дышать. Это не магия. Это то, как мы устроены. Если вы готовы попробовать — я буду рядом.",
  },
  {
    q: "«А что если он узнает, что я хожу к психологу?»",
    a: "Это ваша жизнь и ваше пространство. Вы никому не обязаны рассказывать. Если вы боитесь его реакции — это ещё один сигнал, на который мы посмотрим в работе. Но решение — говорить или молчать — всегда остаётся за вами.",
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: "1px solid hsl(var(--border))", background: open ? "hsl(var(--rose-light))" : "white" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "hsl(var(--warm-dark))",
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={18} />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.8 }}>
            {a}
          </p>
        </div>
      )}
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
    { label: "Вопросы", href: "#faq" },
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
            <span>Ирина Пархоменко</span>
            <span style={{ color: "hsl(var(--rose))", fontFamily: "'Golos Text', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}>психолог · психосоматолог</span>
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
            src="https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/files/acbf1112-ad9c-450f-b73c-780ef6017dd0.jpg"
            alt="Лёгкость и безопасность в теле"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
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
              Как женщинам, которые слишком долго терпят, молчат и сохраняют отношения ценой себя{" "}
              <span style={{ fontSize: "0.7em", verticalAlign: "middle", color: "hsl(var(--muted-foreground))" }}>—</span>{" "}
              <em style={{ fontStyle: "italic", color: "hsl(var(--rose-dark))" }}>снова почувствовать лёгкость в теле, вкус к жизни и перестать сжиматься рядом с мужчиной</em>
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
              {[["с 2020", "в\u00a0психологии"], ["500+", "часов\nпрактики"], ["50+", "женщин"], ["100%", "индивидуально"]].map(([n, l]) => (
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

      {/* PAIN */}
      <section className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Если вы читаете этот текст</div>
              <h2 className="section-title mb-6">
                Ваше тело уже давно кричит.<br />
                <em style={{ fontStyle: "italic" }}>А вы всё терпите.</em>
              </h2>
            </div>

            <div
              className="rounded-3xl p-8 md:p-10 mb-10"
              style={{ background: "hsl(var(--rose-light))", border: "1px solid hsl(20 15% 80%)" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  fontStyle: "italic",
                  color: "hsl(var(--warm-dark))",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ссора. Затишье. Снова ссора. Вы выдыхаете в затишье — а потом снова сжимаетесь, потому что знаете: скоро опять.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.9 }}>
                Вы уже не помните, сколько раз это было. И кажется, что это никогда не закончится.
                Вы вроде понимаете: так больше нельзя. Но продолжаете жить так, как вам больно.
                <br /><br />
                <strong style={{ color: "hsl(var(--warm-dark))" }}>И тело уже давно пытается вам это показать.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: "Wind", text: "Грудь сжимается, дыхание поверхностное" },
                { icon: "AlertCircle", text: "Внутри постоянная тревога, даже когда всё «нормально»" },
                { icon: "EyeOff", text: "Хочется спрятаться, молчать, исчезнуть" },
                { icon: "HeartOff", text: "Пропадает лёгкость, пропадает желание" },
                { icon: "Zap", text: "Жизнь всё больше идёт «на выживании», а не на радости" },
                { icon: "Lock", text: "«Рядом с ним мне стало небезопасно»" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ background: "white", border: "1px solid hsl(var(--border))" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "hsl(var(--rose-light))" }}
                  >
                    <Icon name={item.icon} size={14} />
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "hsl(var(--warm-dark))", fontWeight: 400 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Хочу начать
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT / FOR WHOM */}
      <section id="about" className="py-24 md:py-32" style={{ background: "hsl(38 40% 94%)" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="tag-rose mb-6">Это для вас, если вы узнаёте себя</div>
                <h2 className="section-title mb-8">
                  Вы — та женщина,<br />
                  <em style={{ fontStyle: "italic" }}>которая…</em>
                </h2>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Слишком долго подстраивалась под него",
                    "Боялась обидеть, разозлить, потерять",
                    "Терпела ради отношений, ради семьи, ради «надо»",
                    "Соглашалась на близость, когда внутри было холодное «не хочу»",
                    "Постоянно живёте в напряжении рядом с мужчиной",
                    "Часто молчите о своих чувствах и желаниях",
                    "Не помните, когда в последний раз чувствовали лёгкость внутри",
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
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "hsl(var(--rose-light))", border: "1px solid hsl(20 15% 75%)" }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant', serif",
                      fontSize: "1.15rem",
                      fontStyle: "italic",
                      color: "hsl(var(--warm-dark))",
                      lineHeight: 1.6,
                    }}
                  >
                    «И в голове одновременно два голоса: "Я больше так не могу" — и — "А вдруг всё разрушится, если я начну выбирать себя?"»
                  </p>
                </div>
              </div>

              <div>
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ background: "hsl(var(--sage-light))", aspectRatio: "3/4" }}
                >
                  <img
                    src="https://cdn.poehali.dev/projects/d8ffcc0f-4381-4b97-b3bb-4962f16afd4d/bucket/e30d6b64-1193-45a7-a8c0-7939a6ab6804.jpg"
                    alt="Ирина Пархоменко"
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
                    «Я сама прошла этот путь и знаю, как это — терпеть, молчать и сохранять отношения ценой себя.»
                  </div>
                  <div className="mt-2 text-xs font-medium" style={{ color: "hsl(var(--rose-dark))" }}>
                    Ирина Пархоменко
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ALREADY TRIED */}
      <section className="py-16 md:py-20" style={{ background: "hsl(var(--muted))" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <AnimatedSection>
            <h2 className="section-title text-center mb-8">
              Вы уже пробовали…
            </h2>
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Читать психологию и искать ответы",
                "Терпеть и убеждать себя, что «всё наладится»",
                "Объяснять его поведение, оправдывать, сглаживать",
                "Молчать, чтобы не было конфликтов",
                "Снова поверить и довериться — а потом почувствовать: «я снова ошиблась»",
                "Быть удобной, хорошей, необременительной",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "hsl(var(--rose-light))" }}
                  >
                    <Icon name="Minus" size={11} />
                  </div>
                  <span className="text-sm" style={{ color: "hsl(var(--foreground))", fontWeight: 400 }}>{item}</span>
                </div>
              ))}
            </div>
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: "white", border: "1px solid hsl(var(--border))" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "hsl(var(--warm-dark))",
                  lineHeight: 1.6,
                }}
              >
                Но легче не становится.
                <br />
                <span style={{ color: "hsl(var(--rose-dark))" }}>
                  Потому что тело больше не может жить в постоянном напряжении и страхе.
                </span>
              </p>
            </div>
            <div className="text-center mt-8">
              <button onClick={() => scrollTo("#contact")} className="btn-outline">
                Узнать подробнее
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-rose mx-auto mb-6" style={{ display: "inline-flex" }}>Как проходит работа</div>
            <h2 className="section-title">Мы работаем по-настоящему</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Не «упражнения для расслабления» и не «думайте позитивно». А то, как вы живёте на самом деле.
            </p>
            <p className="mt-4 text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Мы работаем не только с пониманием «в голове». Мы работаем с телом, с его памятью, с его реакциями.
              С тем, как вы живёте, чувствуете и выбираете себя — в реальной жизни.
              <br />
              <strong style={{ color: "hsl(var(--warm-dark))" }}>Потому что голова может врать. Тело — никогда.</strong>
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
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Что меняется</div>
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
              Постепенно меняется не только состояние —<br />
              меняется то, как вы живёте.
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

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 md:py-32"
        style={{ background: "hsl(var(--muted))" }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Форматы сопровождения</div>
            <h2 className="section-title">Выберите свой путь</h2>
            <p className="section-subtitle mt-4 max-w-lg mx-auto">
              Индивидуальная работа, еженедельные личные встречи онлайн. Разбор ваших ситуаций — не абстрактных, а тех, что случились на этой неделе.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <AnimatedSection key={s.title}>
                <div
                  className="card-soft h-full flex flex-col"
                  style={{
                    borderTop: `3px solid hsl(var(--${s.tag === "sage" ? "sage" : "rose"}))`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: s.tag === "sage" ? "hsl(var(--sage-light))" : "hsl(var(--rose-light))",
                      }}
                    >
                      <Icon name={s.icon} size={20} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant', serif",
                          fontSize: "1.3rem",
                          fontWeight: 500,
                          color: "hsl(var(--warm-dark))",
                          lineHeight: 1.2,
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-xs mt-0.5" style={{ color: "hsl(var(--muted-foreground))" }}>{s.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {s.desc}
                  </p>
                  <div className="mb-5">
                    <div className="text-xs font-medium mb-2" style={{ color: "hsl(var(--warm-dark))" }}>Что изменится:</div>
                    <div className="flex flex-col gap-2">
                      {s.results.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: s.tag === "sage" ? "hsl(var(--sage-light))" : "hsl(var(--rose-light))" }}
                          >
                            <Icon name="Check" size={9} />
                          </div>
                          <span className="text-sm" style={{ color: "hsl(var(--foreground))", fontWeight: 400 }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-end" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                    <button
                      onClick={() => scrollTo("#contact")}
                      className={s.tag === "rose" ? "btn-primary" : "btn-outline"}
                      style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
                    >
                      {s.btn}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA under formats */}
          <AnimatedSection>
            <div
              className="rounded-3xl p-8 md:p-10 mt-10 text-center"
              style={{ background: "hsl(var(--rose-light))", border: "1px solid hsl(20 15% 80%)" }}
            >
              <p className="section-subtitle mb-2">Если внутри отзывается:</p>
              <p
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  fontStyle: "italic",
                  color: "hsl(var(--rose-dark))",
                  marginBottom: "24px",
                  lineHeight: 1.4,
                }}
              >
                «Господи… это про меня»
              </p>
              <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                …значит, вам уже пора к себе.
              </p>
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Хочу на сопровождение
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-24 md:py-32" style={{ background: "hsl(38 40% 94%)" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="tag-rose mb-6">Об авторе</div>
                <h2 className="section-title mb-6">
                  Ирина Пархоменко —<br />
                  <em style={{ fontStyle: "italic" }}>психолог, психосоматолог</em>
                </h2>
                <p className="leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}>
                  Я сама прошла путь женщины, которая слишком долго терпела, молчала и жила не для себя.
                </p>
                <div className="text-sm font-medium mb-3" style={{ color: "hsl(var(--warm-dark))" }}>Я знаю, как это:</div>
                <div className="flex flex-col gap-2 mb-6">
                  {[
                    "Бояться чужой реакции",
                    "Жить в постоянном напряжении",
                    "Спасать отношения ценой себя",
                    "Чувствовать, как тело сжимается рядом с мужчиной",
                    "И как страшно признать себе: «я больше так не могу»",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "hsl(var(--rose-light))" }}
                      >
                        <Icon name="Check" size={9} />
                      </div>
                      <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium mb-3" style={{ color: "hsl(var(--warm-dark))" }}>Сегодня я помогаю женщинам:</div>
                <div className="flex flex-col gap-2">
                  {[
                    "Перестать жить через страх и терпение",
                    "Снова чувствовать безопасность в теле",
                    "Вернуть лёгкость, спокойствие и вкус к жизни",
                    "Научиться быть собой рядом с мужчиной",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "hsl(var(--sage-light))" }}
                      >
                        <Icon name="Check" size={9} />
                      </div>
                      <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{item}</span>
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
                    alt="Ирина Пархоменко"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
              </div>
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

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32" style={{ background: "hsl(var(--muted))" }}>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <div className="tag-sage mx-auto mb-6" style={{ display: "inline-flex" }}>Частые вопросы</div>
            <h2 className="section-title">То, о чём страшно спросить</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col gap-3 mb-12">
              {faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>

            <div
              className="rounded-3xl p-8 text-center"
              style={{ background: "hsl(var(--rose-light))", border: "1px solid hsl(20 15% 80%)" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "hsl(var(--warm-dark))",
                  lineHeight: 1.6,
                  marginBottom: "8px",
                }}
              >
                Не нашли свой вопрос?
              </p>
              <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                Напишите мне. Тихим голосом, даже если стыдно. Я не осуждаю. Я была там, где вы.
              </p>
              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Задать вопрос в личные сообщения
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 md:py-32"
        style={{ background: "hsl(var(--background))" }}
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

              <h2 className="section-title mb-4">
                Готовы сделать первый шаг?
              </h2>
              <p className="section-subtitle mb-10">
                Напишите мне в личные сообщения слово:
              </p>

              <div
                style={{
                  background: "hsl(var(--rose-light))",
                  border: "1px solid hsl(20 15% 70%)",
                  borderRadius: "1.25rem",
                  padding: "28px 32px",
                  marginBottom: "32px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: "2rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "hsl(var(--rose-dark))",
                    marginBottom: "16px",
                  }}
                >
                  «Хочу начать»
                </p>
                <p style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Я отвечу и подберу для вас персональный формат сопровождения
                </p>
              </div>

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
            Ирина Пархоменко, психолог · психосоматолог
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
