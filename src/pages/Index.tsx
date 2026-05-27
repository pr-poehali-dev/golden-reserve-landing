import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const MOUNTAIN_BG = 'https://cdn.poehali.dev/projects/e6f8dbee-d834-42c5-ae1c-2e6a15b8ec89/files/61efdad5-9561-41bd-81c1-9f5a67714e28.jpg';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const benefits = [
  { icon: 'TrendingUp', title: 'Карьерный рост', desc: 'Прямой путь к позиции НУ в одном из крупнейших банков без лишних барьеров' },
  { icon: 'GraduationCap', title: 'Личный наставник', desc: 'Персональный ментор из действующих руководителей блока малого бизнеса' },
  { icon: 'Banknote', title: 'Конкурентный доход', desc: 'Повышенный оклад на период программы + бонусная система по результатам' },
  { icon: 'Users', title: 'Топ-команда', desc: 'Лучшие специалисты малого бизнеса Сбера — нетворкинг и развитие рядом' },
  { icon: 'BookOpen', title: 'Обучение', desc: 'Корпоративные программы Сбера, тренинги и деловые симуляции' },
  { icon: 'Shield', title: 'Стабильность', desc: 'Официальное трудоустройство, полный соцпакет и уверенность в завтрашнем дне' },
];

const steps = [
  { num: '01', title: 'Подача заявки', desc: 'Заполните анкету и первичный скрининг. Не более 15 минут.' },
  { num: '02', title: 'Тестирование', desc: 'Онлайн-тесты на профессиональные компетенции и управленческий потенциал.' },
  { num: '03', title: 'Интервью', desc: 'Встреча с HR и руководителем блока. Глубинное интервью по компетенциям.' },
  { num: '04', title: 'Ассессмент', desc: 'Деловые игры и кейсы, приближённые к реальным задачам НУ.' },
  { num: '05', title: 'Оффер', desc: 'Финальное решение и оффер — вы становитесь частью Золотого запаса.' },
];

const faqs = [
  { q: 'Кто может подать заявку?', a: 'Сотрудники Сбера с опытом в малом бизнесе от 2 лет, а также внешние кандидаты с релевантным управленческим опытом.' },
  { q: 'Как долго длится программа?', a: 'От 6 до 12 месяцев — срок зависит от вашего уровня готовности и наличия открытых позиций.' },
  { q: 'Обязательно ли выходить на позицию НУ?', a: 'Нет. Участие уже повышает вашу ценность. Переход гарантирован только при наличии вакансии.' },
  { q: 'Можно ли совмещать с текущей работой?', a: 'Частичное совмещение возможно на начальных этапах. Финальный этап требует полного погружения.' },
  { q: 'Что если не пройти финальный отбор?', a: 'Вы получите детальную обратную связь и возможность повторно подать заявку через 12 месяцев.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer rounded-xl overflow-hidden"
      style={{ background: 'rgba(8,12,24,0.75)', border: '1px solid rgba(201,150,42,0.2)', transition: 'border-color 0.3s' }}
    >
      <div className="flex items-center justify-between px-5 py-4 gap-4">
        <span className="font-golos font-semibold text-sm text-white">{q}</span>
        <span style={{ transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>
          <Icon name="Plus" size={16} className="text-yellow-400" />
        </span>
      </div>
      {open && (
        <div className="px-5 pb-4 text-xs leading-relaxed border-t pt-3" style={{ color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(201,150,42,0.15)' }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen font-golos overflow-x-hidden" style={{ background: '#080c18' }}>

      {/* FIXED MOUNTAIN BACKGROUND */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <img
          src={MOUNTAIN_BG}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.28, filter: 'brightness(0.9) saturate(1.3)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,12,24,0.5) 0%, rgba(8,12,24,0.25) 30%, rgba(8,12,24,0.35) 70%, rgba(8,12,24,0.6) 100%)' }} />
      </div>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-3.5"
        style={{ background: 'rgba(8,12,24,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(201,150,42,0.15)' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B8861E, #E8B84B)' }}>
            <Icon name="Gem" size={13} className="text-[#080c18]" />
          </div>
          <span className="font-oswald font-semibold text-base tracking-wider" style={{ color: '#E8B84B' }}>ЗОЛОТОЙ ЗАПАС</span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-xs font-golos font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.55)' }}>
          <a href="#about" className="hover:text-yellow-400 transition-colors uppercase">О программе</a>
          <a href="#benefits" className="hover:text-yellow-400 transition-colors uppercase">Преимущества</a>
          <a href="#process" className="hover:text-yellow-400 transition-colors uppercase">Этапы</a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors uppercase">FAQ</a>
        </div>
        <button className="btn-gold px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
          Подать заявку
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 z-10">
        <div className="container mx-auto px-6 md:px-14 py-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 animate-fade-in-up"
              style={{ background: 'rgba(201,150,42,0.12)', border: '1px solid rgba(201,150,42,0.35)' }}
            >
              <Icon name="Star" size={11} className="text-yellow-400" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>Сбер · Малый бизнес</span>
            </div>

            <h1
              className="font-oswald font-bold animate-fade-in-up opacity-0-init text-white"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.015em', marginBottom: '1.25rem', animationDelay: '0.1s' }}
            >
              ПРОГРАММА<br />
              <span className="gold-text">ПРЕЕМНИЧЕСТВА</span><br />
              <span style={{ fontSize: '0.72em', letterSpacing: '0.1em', opacity: 0.85 }}>«ЗОЛОТОЙ ЗАПАС»</span>
            </h1>

            <p
              className="text-sm leading-relaxed mb-8 max-w-lg animate-fade-in-up opacity-0-init"
              style={{ color: 'rgba(255,255,255,0.65)', animationDelay: '0.2s' }}
            >
              Ищем будущих руководителей направления малого бизнеса. Готовы брать ответственность и расти — это ваш шанс.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up opacity-0-init" style={{ animationDelay: '0.35s' }}>
              <button className="btn-gold px-7 py-3 rounded-xl text-sm font-bold flex items-center gap-2 uppercase tracking-wide">
                Подать заявку <Icon name="ArrowRight" size={15} />
              </button>
              <a href="#about" className="px-7 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 uppercase tracking-wide transition-all duration-300"
                style={{ border: '1px solid rgba(201,150,42,0.3)', color: '#E8B84B' }}>
                Узнать больше
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 animate-fade-in-up opacity-0-init" style={{ animationDelay: '0.5s' }}>
              {[['500+', 'участников'], ['87%', 'дошли до финала'], ['3 мес', 'до оффера']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-oswald font-bold gold-text" style={{ fontSize: '2.1rem', letterSpacing: '0.03em', lineHeight: 1 }}>{num}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 animate-float">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Листай вниз</span>
          <Icon name="ChevronDown" size={18} className="text-yellow-400" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-20">
        {/* светлый слой-подложка */}
        <div className="absolute inset-0" style={{ background: 'rgba(18,24,40,0.82)', backdropFilter: 'blur(2px)' }} />
        <div className="container mx-auto px-6 md:px-14 relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="reveal">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>О программе</span>
                <h2 className="font-oswald font-bold mt-2 mb-5 text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                  КУЗНИЦА ЛИДЕРОВ<br /><span className="gold-text">МАЛОГО БИЗНЕСА</span>
                </h2>
              </div>
              <div className="reveal" style={{ transitionDelay: '0.12s' }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  «Золотой запас» — программа Сбера по подготовке следующего поколения руководителей НУ в блоке малого бизнеса. Мы инвестируем в людей с потенциалом лидера.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Наставничество от топ-менеджмента, реальные кейсы, ротация и индивидуальный план развития. Ваша задача — расти.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(6,9,20,0.88)', border: '1px solid rgba(201,150,42,0.22)' }}>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#E8B84B' }}>Условия участия</div>
                  {[
                    ['Стаж в банке или финансовой сфере', 'от 2 лет'],
                    ['Опыт в малом бизнесе / продажах', 'обязателен'],
                    ['Управленческий опыт', 'приветствуется'],
                    ['Высшее образование (экономика)', 'желательно'],
                    ['Готовность к переезду', 'требуется'],
                  ].map(([cond, val]) => (
                    <div key={cond} className="flex items-center justify-between gap-4 py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(201,150,42,0.1)' }}>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{cond}</span>
                      <span className="text-xs font-bold whitespace-nowrap" style={{ color: '#F5D98A' }}>{val}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <button className="btn-gold w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider">
                    Проверить соответствие
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="relative z-10 py-20">
        <div className="absolute inset-0" style={{ background: 'rgba(10,14,26,0.6)' }} />
        <div className="container mx-auto px-6 md:px-14 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>Что вы получаете</span>
            <h2 className="font-oswald font-bold mt-2 text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
              ПРЕИМУЩЕСТВА <span className="gold-text">ДЛЯ ПРЕЕМНИКА</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-xl p-5 reveal"
                style={{
                  background: 'rgba(6,9,20,0.82)',
                  border: '1px solid rgba(201,150,42,0.15)',
                  transitionDelay: `${i * 70}ms`,
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,150,42,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,150,42,0.15)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(201,150,42,0.12)', border: '1px solid rgba(201,150,42,0.2)' }}>
                  <Icon name={b.icon} size={18} className="text-yellow-400" fallback="Star" />
                </div>
                <h3 className="font-oswald font-semibold text-sm text-white mb-1.5" style={{ letterSpacing: '0.03em' }}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative z-10 py-20">
        <div className="absolute inset-0" style={{ background: 'rgba(18,24,40,0.82)', backdropFilter: 'blur(2px)' }} />
        <div className="container mx-auto px-6 md:px-14 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>Как это работает</span>
            <h2 className="font-oswald font-bold mt-2 text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
              ЭТАПЫ <span className="gold-text">ОТБОРА</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="rounded-xl p-5 flex items-start gap-4 reveal"
                style={{ background: 'rgba(6,9,20,0.85)', border: '1px solid rgba(201,150,42,0.15)', transitionDelay: `${i * 70}ms` }}
              >
                <div className="step-number" style={{ width: 40, height: 40, fontSize: '0.85rem' }}>{s.num}</div>
                <div className="flex-1">
                  <h3 className="font-oswald font-semibold text-sm text-white mb-1" style={{ letterSpacing: '0.03em' }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                </div>
                <Icon name="ChevronRight" size={16} style={{ color: 'rgba(201,150,42,0.3)', marginTop: 2 }} fallback="ChevronRight" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <button className="btn-gold px-8 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 uppercase tracking-wide">
              Начать отбор <Icon name="Rocket" size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 py-20">
        <div className="absolute inset-0" style={{ background: 'rgba(10,14,26,0.6)' }} />
        <div className="container mx-auto px-6 md:px-14 relative z-10">
          <div className="text-center mb-12 reveal">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E8B84B' }}>Ответы</span>
            <h2 className="font-oswald font-bold mt-2 text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
              ЧАСТЫЕ <span className="gold-text">ВОПРОСЫ</span>
            </h2>
          </div>
          <div className="max-w-xl mx-auto flex flex-col gap-2.5">
            {faqs.map((f) => (
              <div className="reveal" key={f.q}><FaqItem q={f.q} a={f.a} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-16 mx-4 md:mx-10 mb-12 rounded-2xl overflow-hidden reveal">
        <div className="absolute inset-0" style={{ background: 'rgba(6,9,20,0.92)', border: '1px solid rgba(201,150,42,0.28)', borderRadius: '1rem' }} />
        <div className="orb w-72 h-72 absolute -top-16 -right-16" style={{ background: 'radial-gradient(circle, rgba(201,150,42,0.2) 0%, transparent 70%)' }} />
        <div className="relative z-10 text-center px-6">
          <div className="font-oswald font-bold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '0.02em', lineHeight: 1.1 }}>
            ГОТОВЫ СТАТЬ ЧАСТЬЮ<br /><span className="gold-text">ЗОЛОТОГО ЗАПАСА?</span>
          </div>
          <p className="text-sm mb-7 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Оставьте заявку и получите обратную связь в течение 3 рабочих дней.
          </p>
          <button className="btn-gold px-9 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2 uppercase tracking-wide animate-pulse-gold">
            Подать заявку <Icon name="ArrowRight" size={15} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 px-6 md:px-14 text-center" style={{ borderTop: '1px solid rgba(201,150,42,0.1)' }}>
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B8861E, #E8B84B)' }}>
            <Icon name="Gem" size={11} className="text-[#080c18]" />
          </div>
          <span className="font-oswald font-semibold text-sm tracking-wider" style={{ color: '#E8B84B' }}>ЗОЛОТОЙ ЗАПАС</span>
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Программа Сбербанка по поиску преемников · Блок малого бизнеса</p>
        <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.18)' }}>© 2025 ПАО «Сбербанк»</p>
      </footer>
    </div>
  );
}
