import FadeInUp from '@/components/animations/FadeInUp'

const problems = [
  {
    num: '01',
    text: '採用しても3年以内に辞めていく。「採用コスト」だけが積み上がる。',
  },
  {
    num: '02',
    text: '仕組みやルールを作っても、気づけば誰も守っていない。',
  },
  {
    num: '03',
    text: '管理職に「部下を育てろ」と言っても、本人が育て方を知らない。',
  },
  {
    num: '04',
    text: '社長の想いは熱いのに、現場に届く頃には別の言葉になっている。',
  },
  {
    num: '05',
    text: '外部コンサルを入れたことがある。報告書は立派だったが、現場は何も変わらなかった。',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-warm-bg">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 見出し */}
        <FadeInUp>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[22px] lg:text-[32px] font-bold text-primary">
              こんな課題、放置していませんか？
            </h2>
            <div className="w-[60px] h-[3px] bg-accent-line mx-auto mt-4" />
          </div>
        </FadeInUp>

        {/* 課題リスト */}
        <div className="max-w-[800px] mx-auto space-y-6 lg:space-y-8">
          {problems.map((problem, index) => (
            <FadeInUp key={problem.num} delay={index * 100}>
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="shrink-0">
                  <div className="w-[40px] h-[2px] bg-accent-line mb-2" />
                  <span className="text-[36px] lg:text-[48px] font-bold text-cta leading-none">
                    {problem.num}
                  </span>
                </div>
                <p className="text-[15px] lg:text-base text-foreground leading-relaxed pt-4 lg:pt-6">
                  {problem.text}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* 締めの一文 */}
        <FadeInUp delay={600}>
          <div className="max-w-[800px] mx-auto mt-12 lg:mt-16 text-center">
            <p className="text-base lg:text-xl font-medium text-primary leading-relaxed">
              これらは「人の問題」ではありません。
              <br />
              組織の&quot;関わり方&quot;が変われば、人は辞めず、育ち、戦力になります。
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
