const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "hsl(var(--background))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>

        {/* Декоративная линия сверху */}
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "hsl(var(--rose))",
            borderRadius: "2px",
            margin: "0 auto 32px",
          }}
        />

        {/* Заголовок */}
        <h1
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: "clamp(2rem, 6vw, 2.8rem)",
            fontWeight: 600,
            color: "hsl(var(--warm-dark))",
            lineHeight: 1.25,
            marginBottom: "24px",
          }}
        >
          Получи самые выгодные<br />персональные условия
        </h1>

        {/* Основной текст */}
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
          <p
            style={{
              color: "hsl(var(--warm-dark))",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Чтобы прийти к тому, чего ты по-настоящему хочешь — жить в согласии с собой, чувствовать внутреннюю опору и наконец перестать предавать свои желания — напиши мне напрямую.
          </p>
          <p
            style={{
              color: "hsl(var(--warm-dark))",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
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

        {/* Подпись */}
        <p
          style={{
            color: "hsl(var(--muted-foreground))",
            fontSize: "0.95rem",
            marginBottom: "28px",
          }}
        >
          Я отвечу и подберу для тебя персональные условия
        </p>

        {/* Кнопки */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* Telegram */}
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
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.53.26l.19-2.68 4.88-4.41c.21-.19-.05-.29-.33-.1L7.92 14.6 5.37 13.8c-.55-.17-.56-.55.12-.82l9.07-3.5c.46-.17.86.11.71.82h.37z"/>
            </svg>
            Написать в Telegram
          </a>

          {/* Max */}
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
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="hsl(140 22% 35%)" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Max</text>
            </svg>
            Написать в Max
          </a>
        </div>

        {/* Декоративная линия снизу */}
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
    </div>
  );
};

export default Contact;
