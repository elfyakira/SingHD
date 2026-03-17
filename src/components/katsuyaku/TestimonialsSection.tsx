import FadeInUp from '@/components/animations/FadeInUp'

const testimonials = [
  {
    industry: '製造業 A社',
    role: '代表取締役',
    employees: '従業員数 約80名',
    initial: 'A',
    before:
      '社長の方針が現場に届かず、部門ごとにバラバラの判断。離職率22%で、採用しても3年持たない状態が続いていました。',
    after:
      'カツヤクが入って最初に驚いたのは、代表が現場に来て社員と直接話してくれたこと。匿名ヒアリングで初めて聞いた本音もありました。今は社長の思いが現場まで伝わり、判断が統一されています。離職率は9%まで下がり、生産性も17%向上しました。',
  },
  {
    industry: '運送業 B社',
    role: '専務取締役',
    employees: '従業員数 約120名',
    initial: 'B',
    before:
      'ドライバーの離職率30%。「この業界はこういうもの」と半ば諦めていました。管理職も育っておらず、現場は常に人手不足。',
    after:
      '「型にはめないコンサル」という言葉に半信半疑でしたが、本当にうちだけのプロジェクトを組んでくれました。社員が同じ目標を意識するようになり、離職率は12%に。売上も前年比115%を達成しています。',
  },
  {
    industry: 'サービス業 C社',
    role: '人事部長',
    employees: '従業員数 約50名',
    initial: 'C',
    before:
      '若手が入ってもすぐ辞める。残った社員も受け身で、主体性がない。「人が育たない」が口癖になっていました。',
    after:
      'カツヤク教材と管理職研修で、管理職の関わり方が目に見えて変わりました。育成が進んで現場に一体感が生まれ、定着率は85%から95%に改善。生産性も約18%向上し、採用コストも大幅に減りました。',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 見出し */}
        <FadeInUp>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[32px] font-bold text-primary">
              経営者の声
            </h2>
            <div className="w-[60px] h-[3px] bg-accent-line mx-auto mt-4" />
          </div>
        </FadeInUp>

        {/* テスティモニアル */}
        <div className="max-w-4xl mx-auto space-y-12 lg:space-y-16">
          {testimonials.map((t, index) => (
            <FadeInUp key={t.industry} delay={index * 150}>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* 属性情報 */}
                <div className="lg:w-[180px] shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{t.industry}</p>
                    <p className="text-xs text-[#5C5C5C]">{t.role}</p>
                    <p className="text-xs text-[#5C5C5C]">{t.employees}</p>
                  </div>
                </div>

                {/* Before/After */}
                <div className="flex-1 space-y-4">
                  {/* Before */}
                  <div className="border-l-[3px] border-[#5C5C5C]/30 pl-5 py-2 bg-warm-bg rounded-r-lg">
                    <span className="text-[10px] font-bold tracking-widest text-[#5C5C5C] uppercase">
                      Before
                    </span>
                    <p className="text-[14px] lg:text-[15px] text-[#5C5C5C] leading-relaxed mt-1">
                      {t.before}
                    </p>
                  </div>

                  {/* After */}
                  <div className="border-l-[3px] border-cta pl-5 py-2">
                    <span className="text-[10px] font-bold tracking-widest text-cta uppercase">
                      After
                    </span>
                    <div className="flex items-start gap-1 mt-1">
                      <span className="text-accent-line text-3xl leading-none font-serif shrink-0">
                        &ldquo;
                      </span>
                      <p className="text-[14px] lg:text-base text-foreground leading-relaxed">
                        {t.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
