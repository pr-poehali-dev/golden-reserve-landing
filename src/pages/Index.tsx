import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/e6f8dbee-d834-42c5-ae1c-2e6a15b8ec89/files/61efdad5-9561-41bd-81c1-9f5a67714e28.jpg';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const benefits = [
  {
    icon: 'TrendingUp',
    title: 'Карьерный рост',
    desc: 'Прямой путь к руководящей позиции НУ в одном из крупнейших банков страны без лишних барьеров',
  },
  {
    icon: 'GraduationCap',
    title: 'Личный наставник',
    desc: 'Персональный ментор из числа действующих руководителей блока малого бизнеса',
  },
  {
    icon: 'Banknote',
    title: 'Конкурентный доход',
    desc: 'Повышенный оклад на период программы + бонусная система по результатам работы',
  },
  {
    icon: 'Users',
    title: 'Топ-команда',
    desc: 'Работа в окружении лучших специалистов малого бизнеса Сбера — нетворкинг и развитие',
  },
  {
    icon: 'BookOpen',
    title: 'Обучение',
    desc: 'Доступ к корпоративным программам обучения Сбера, тренингам и деловым симуляциям',
  },
  {
    icon: 'Shield',
    title: 'Стабильность',
    desc: 'Официальное трудоустройство, полный соцпакет и уверенность в завтрашнем дне',
  },
];

const steps = [
  {
    num: '01',
    title: 'Подача заявки',
    desc: 'Заполните анкету и пройдите первичный скрининг. Займёт не более 15 минут.',
  },
  {
    num: '02',
    title: 'Тестирование',
    desc: 'Онлайн-тесты на профессиональные компетенции и управленческий потенциал.',
  },
  {
    num: '03',
    title: 'Интервью',
    desc: 'Встреча с HR и руководителем блока. Глубинное интервью по компетенциям.',
  },
  {
    num: '04',
    title: 'Ассессмент',
    desc: 'Деловые игры и кейсы, максимально приближённые к реальным задачам НУ.',
  },
  {
    num: '05',
    title: 'Оффер',
    desc: 'Финальное решение и оформление оффера — вы становитесь частью Золотого запаса.',
  },
];

const faqs = [
  {
    q: 'Кто может подать заявку?',
    a: 'Сотрудники Сбера с опытом работы в малом бизнесе от 2 лет, а также внешние кандидаты с релевантным опытом управления в финансовой сфере.',
  },
  {
    q: 'Как долго длится программа?',
    a: 'Программа преемничества занимает от 6 до 12 месяцев. Срок зависит от вашего уровня готовности и доступных позиций НУ.',
  },
  {
    q: 'Обязательно ли выходить на позицию НУ?',
    a: 'Нет. Участие в программе само по себе уже повышает вашу ценность как специалиста. Переход гарантирован только при наличии открытой вакансии.',
  },
  {
    q: 'Можно ли совмещать с текущей работой в Сбере?',
    a: 'Для внутренних кандидатов — частичное совмещение возможно на начальных этапах. На финальном этапе потребуется полное погружение.',
  },
  {
    q: 'Что будет, если не пройти финальный отбор?',
    a: 'Вы получите подробную обратную связь, доступ к обучающим материалам и возможность повторно подать заявку через 12 месяцев.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="gold-border rounded-xl overflow-hidden cursor-pointer"
      style={{ transition: 'all 0.3s ease' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-semibold text-base text-foreground">{q}</span>
        <span style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>
          <Icon name="Plus" size={20} className="text-gold-light" />
        </span>
      </div>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: 'var(--navy)' }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: 'rgba(10,14,26,0.88)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(201,150,42,0.12)' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #B8861E, #E8B84B)' }}
          >
            <Icon name="Gem" size={15} className="text-navy" />
          </div>
          <span className="font-cormorant font-bold text-xl tracking-wide" style={{ color: '#E8B84B' }}>
            Золотой запас
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
          <a href="#about" className="hover:text-yellow-400 transition-colors">О программе</a>
          <a href="#benefits" className="hover:text-yellow-400 transition-colors">Преимущества</a>
          <a href="#process" className="hover:text-yellow-400 transition-colors">Этапы</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
        </div>
        <button className="btn-gold px-5 py-2.5 rounded-lg text-sm font-semibold">
          Подать заявку
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" style={{ opacity: 0.55, filter: 'brightness(1.1) saturate(1.2)' }} />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(10,14,26,0.72) 0%, rgba(10,14,26,0.45) 40%, rgba(10,14,26,0.82) 100%)' }}
          />
        </div>

        <div
          className="orb w-96 h-96 absolute top-1/4 -left-32 z-0"
          style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.16) 0%, transparent 70%)' }}
        />
        <div
          className="orb w-72 h-72 absolute bottom-1/4 -right-10 z-0"
          style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 container mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
              style={{ background: 'rgba(201,150,42,0.1)', border: '1px solid rgba(201,150,42,0.3)' }}
            >
              <Icon name="Star" size={13} className="text-yellow-400" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
                Сбер · Малый бизнес
              </span>
            </div>

            <h1
              className="font-bebas animate-fade-in-up opacity-0-init"
              style={{
                animationDelay: '0.1s',
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                lineHeight: 1.0,
                letterSpacing: '0.02em',
                marginBottom: '1.5rem',
              }}
            >
              <span className="text-foreground block">ПРОГРАММА</span>
              <span className="gold-text block">ПРЕЕМНИЧЕСТВА</span>
              <span className="text-foreground block" style={{ fontSize: '0.78em', letterSpacing: '0.12em', opacity: 0.9 }}>
                «ЗОЛОТОЙ ЗАПАС»
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up opacity-0-init"
              style={{ color: 'hsl(var(--muted-foreground))', animationDelay: '0.25s' }}
            >
              Мы ищем будущих руководителей направления малого бизнеса. Если вы готовы брать на себя ответственность и расти — это ваш шанс.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-in-up opacity-0-init"
              style={{ animationDelay: '0.4s' }}
            >
              <button className="btn-gold px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2">
                Подать заявку
                <Icon name="ArrowRight" size={18} />
              </button>
              <a
                href="#about"
                className="px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 transition-all duration-300"
                style={{ border: '1px solid rgba(201,150,42,0.25)', color: '#E8B84B' }}
              >
                Узнать больше
              </a>
            </div>

            <div
              className="flex flex-wrap gap-10 mt-16 animate-fade-in-up opacity-0-init"
              style={{ animationDelay: '0.6s' }}
            >
              {[['500+', 'участников программы'], ['87%', 'дошли до финала'], ['3 мес', 'средний срок до оффера']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-bebas gold-text" style={{ fontSize: '2.5rem', letterSpacing: '0.04em', lineHeight: 1 }}>{num}</div>
                  <div className="text-sm mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-float">
          <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>Листай вниз</span>
          <Icon name="ChevronDown" size={20} className="text-yellow-400" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div
          className="orb w-72 h-72 absolute top-1/2 -right-10 -translate-y-1/2 z-0"
          style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.08) 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
                  О программе
                </span>
                <h2 className="font-bebas mt-3 mb-6 text-foreground" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
                  КУЗНИЦА ЛИДЕРОВ<br /><span className="gold-text">МАЛОГО БИЗНЕСА</span>
                </h2>
              </div>
              <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                <p className="leading-relaxed mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  «Золотой запас» — это внутренняя программа Сбера по выявлению и подготовке следующего поколения руководителей направления НУ в блоке малого бизнеса. Мы не просто ищем сотрудников — мы инвестируем в людей с потенциалом лидера.
                </p>
                <p className="leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Программа объединяет лучшие практики Сбера: наставничество от топ-менеджмента, реальные кейсы, ротацию и индивидуальный план развития. Ваша задача — расти. Наша — обеспечить для этого всё необходимое.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.25s' }}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(201,150,42,0.2)', background: 'rgba(22,29,46,0.8)' }}
              >
                <div className="p-8">
                  <div className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#E8B84B' }}>
                    Условия участия
                  </div>
                  {[
                    ['Стаж работы в банке или финансовой сфере', 'от 2 лет'],
                    ['Опыт в малом бизнесе / продажах', 'обязателен'],
                    ['Управленческий опыт', 'приветствуется'],
                    ['Высшее образование (экономика / финансы)', 'желательно'],
                    ['Готовность к переезду при необходимости', 'требуется'],
                  ].map(([cond, val]) => (
                    <div key={cond} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                      <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{cond}</span>
                      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#F5D98A' }}>{val}</span>
                    </div>
                  ))}
                </div>
                <div className="px-8 pb-8">
                  <button className="btn-gold w-full py-3.5 rounded-xl font-bold text-sm">
                    Проверить соответствие
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider mx-12" />

      {/* BENEFITS */}
      <section id="benefits" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
              Что вы получаете
            </span>
            <h2 className="font-bebas mt-3 text-foreground" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
              ПРЕИМУЩЕСТВА<br /><span className="gold-text">ДЛЯ ПРЕЕМНИКА</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="glass-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(201,150,42,0.1)', border: '1px solid rgba(201,150,42,0.2)' }}
                >
                  <Icon name={b.icon} size={22} className="text-yellow-400" fallback="Star" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider mx-12" />

      {/* PROCESS */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div
          className="orb w-80 h-80 absolute -bottom-20 -left-20 z-0"
          style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.1) 0%, transparent 70%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
              Как это работает
            </span>
            <h2 className="font-bebas mt-3 text-foreground" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
              ЭТАПЫ<br /><span className="gold-text">ОТБОРА</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="glass-card rounded-2xl p-6 flex items-start gap-5 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="step-number">{s.num}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-base text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{s.desc}</p>
                </div>
                <Icon name="ChevronRight" size={18} style={{ color: 'rgba(201,150,42,0.35)' }} fallback="ChevronRight" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <button className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Начать отбор сейчас
              <Icon name="Rocket" size={18} />
            </button>
          </div>
        </div>
      </section>

      <div className="gold-divider mx-12" />

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>
              Ответы
            </span>
            <h2 className="font-bebas mt-3 text-foreground" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
              ЧАСТО ЗАДАВАЕМЫЕ<br /><span className="gold-text">ВОПРОСЫ</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {faqs.map((f) => (
              <div className="reveal" key={f.q}>
                <FaqItem q={f.q} a={f.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 mx-6 md:mx-12 mb-16 rounded-3xl relative overflow-hidden reveal"
        style={{
          background: 'linear-gradient(135deg, #1a1200 0%, #2d1e00 40%, #1a1200 100%)',
          border: '1px solid rgba(201,150,42,0.25)',
        }}
      >
        <div
          className="orb w-80 h-80 absolute -top-20 -right-20"
          style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.22) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 text-center px-6">
          <div className="font-bebas text-foreground mb-4" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '0.03em', lineHeight: 1.05 }}>
            ГОТОВЫ СТАТЬ ЧАСТЬЮ<br />
            <span className="gold-text">ЗОЛОТОГО ЗАПАСА?</span>
          </div>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Оставьте заявку сегодня и получите обратную связь от HR-команды в течение 3 рабочих дней.
          </p>
          <button className="btn-gold px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 animate-pulse-gold">
            Подать заявку
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6 md:px-12 text-center"
        style={{ borderTop: '1px solid rgba(201,150,42,0.1)' }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #B8861E, #E8B84B)' }}
          >
            <Icon name="Gem" size={13} className="text-navy" />
          </div>
          <span className="font-cormorant font-bold text-lg" style={{ color: '#E8B84B' }}>Золотой запас</span>
        </div>
        <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Программа Сбербанка по поиску преемников в блоке малого бизнеса
        </p>
        <p className="text-xs mt-2" style={{ color: 'hsl(var(--muted-foreground))', opacity: 0.45 }}>
          © 2025 ПАО «Сбербанк». Все права защищены.
        </p>
      </footer>
    </div>
  );
}