'use client'

import Image from '@/components/QImage'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

const storyLevels = [
  {
    level: 'LEVEL 1',
    title: 'もっと大きな舞台を',
    content:
      '清水駿之介は、一経営者として現場に立っていた。目の前の成果を追いながらも、常にひとつの問いがあった。',
    quote: '「もっと大きな舞台を創れないか。」',
    afterQuote:
      '「組織とは何か」「人の可能性とは何か」。その問いを手放したことは一度もなかった。',
  },
  {
    level: 'LEVEL 10',
    title: '仲間の人生に向き合った瞬間',
    content:
      '起業を意識し始めたきっかけは、仲間の人生に本気で向き合った瞬間だった。',
    quote: '「この仲間たちとなら、日本を変えられるかもしれない。」',
    afterQuote: 'そう思えたことが、すべての始まりだった。',
  },
  {
    level: 'LEVEL 20',
    title: '希望と自問自答',
    content:
      '関わる人すべての人生を豊かにする組織をつくりたい。その希望があった。しかし同時に、その理想を本当に実現できるのかという自問自答も続いていた。',
    afterQuote: '不安の裏側には、必ず挑戦への情熱があった。',
  },
  {
    level: 'LEVEL 30',
    title: '覚悟は「決め続けるもの」',
    content:
      '100％の自信があったわけではない。しかし清水には、ひとつの信念があった。',
    quote: '「覚悟は"固まるもの"ではなく、"決め続けるもの"。」',
    afterQuote: '「やる」と決めた瞬間から、道は拓け始めた。',
  },
  {
    level: 'LEVEL 35',
    title: 'トップの孤独',
    content:
      '一人で始める未来で一番怖かったのは、孤独だった。トップの決断は常に重い。',
    quote: '「その重さを分かち合える存在がいなければ、真の挑戦は続かない。」',
  },
  {
    level: 'LEVEL 40',
    title: '志をぶつけ合った夜',
    content:
      '笠本、青柳との本気の対話。志をぶつけ合い、理想を語り合い、未来を描いた。それがSingホールディングスの原点になった。',
    afterQuote:
      '志が同じ方向を向いた人間は、必ずどこかで出会う。それは必然だったと今も思う。',
  },
  {
    level: 'LEVEL 50',
    title: '覚悟の熱量',
    content:
      '最初に感じたのは、覚悟の熱量だった。言葉ではなく、目の奥にある本気度。',
    quote: '「互いの弱さもさらけ出せた。」',
    afterQuote:
      '強さだけでは組織は続かない。信頼こそが最大の資産だと確信した。',
  },
  {
    level: 'LEVEL 60',
    title: '一人の成功ではなく',
    content:
      '起業を決断できた理由は明快だった。',
    quote: '「一人の成功ではなく、仲間の成功を創る挑戦だったから。」',
    afterQuote: 'この3人なら、日本に新しい価値を生み出せると確信できた。',
  },
  {
    level: 'LEVEL 70',
    title: '「勝つ」から「勝たせる」へ',
    content:
      '起業してから、視座が変わった。',
    quote: '「"自分が勝つ"から"仲間を勝たせる"へ。」',
    afterQuote:
      '責任の質が変わった。決断を共有できる安心感。厳しい議論ができる信頼関係。それが挑戦の土台になっている。',
  },
  {
    level: 'LEVEL 80',
    title: '全員が前を向いていた',
    content:
      '困難な局面で、全員が前を向いていた。逃げずに、責任を取り続ける仲間がいる。',
    quote: '「仲間がいるからこそ、今がある。」',
    afterQuote:
      'Singとの出会いがなければ、ここまでの挑戦はしていなかった。出会いが、可能性を何倍にも広げた。',
  },
]

const finalQuest = {
  level: 'FINAL QUEST',
  title: 'これから創りたい社会',
  content:
    '清水が描くのは、挑戦を文化にする企業。志を持つ人材が育ち、羽ばたいていく場所。',
  quote: '「挑戦する人が孤独にならない社会。」',
  afterQuote:
    '努力が報われ、仲間と共に夢を語れる社会。志ある経営者を輩出し、日本に挑戦の連鎖を生み出すこと。',
  secondQuote: '「仲間と共に、日本に新しい風を起こし続ける。」',
  closing:
    'Singに関わるすべての人の人生を豊かにすること。私は常に感謝を忘れない。仲間がいるからこそ、今がある。',
}

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

function getLevelNumber(level: string): string {
  if (level === 'FINAL QUEST') return '?'
  return level.replace('LEVEL ', '')
}

export default function ShimishunStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/miraiku/shimishun-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/70" />
        </div>
        <div className="relative text-center">
          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={serifStyle}
            >
              CHALLENGER STORY
            </h1>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>
          <FadeInUp delay={400}>
            <p
              className="text-xl md:text-2xl text-[#F59E0B] font-bold leading-relaxed"
              style={serifStyle}
            >
              仲間と共に、
              <br className="md:hidden" />
              日本に新しい風を起こし続ける
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Profile Card ===== */}
      <section className="py-16 md:py-16 -mt-12 md:mt-0 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="md:flex md:flex-row md:items-stretch bg-white rounded-2xl shadow-lg relative overflow-hidden min-h-[380px] md:h-[200px]">
              <Image
                src="/img/miraiku/partner-shimishun.jpg"
                alt="清水駿之介"
                fill
                sizes="100vw"
                className="object-cover object-[center_60%] md:hidden"
                priority
              />
              <div className="hidden md:block w-64 rounded-l-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/img/miraiku/partner-shimishun.jpg"
                  alt="清水駿之介"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-6 md:relative md:bg-transparent md:backdrop-blur-none md:p-8 md:py-12 md:text-left text-center md:flex md:flex-col md:justify-center">
                <p className="text-xs tracking-[0.3em] text-[#2563EB] mb-2">
                  株式会社Sing 代表取締役会長
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-2"
                  style={serifStyle}
                >
                  清水 駿之介
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  仲間と共に、日本に新しい風を起こし続ける
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Story Timeline (Zigzag) ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {storyLevels.map((section, index) => (
            <FadeInUp key={section.level} delay={index < 4 ? index * 80 : 0}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-[#2563EB] bg-white flex items-center justify-center rotate-45">
                    <span
                      className="text-[#2563EB] text-xl md:text-2xl font-bold -rotate-45"
                      style={serifStyle}
                    >
                      Lv.{getLevelNumber(section.level)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 max-w-2xl">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-4"
                    style={serifStyle}
                  >
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-loose text-sm md:text-base mb-4">
                    {section.content}
                  </p>
                  {section.quote && (
                    <div className="bg-[#1C2A44]/5 pl-5 py-3 rounded-lg my-4">
                      <p
                        className="text-lg md:text-xl font-bold text-[#1C2A44] leading-relaxed"
                        style={serifStyle}
                      >
                        {section.quote}
                      </p>
                    </div>
                  )}
                  {section.afterQuote && (
                    <p className="text-gray-600 leading-loose text-sm md:text-base">
                      {section.afterQuote}
                    </p>
                  )}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ===== FINAL QUEST ===== */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/miraiku/shimishun-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-2 mb-8">
              <span className="text-[#F59E0B] text-xs tracking-[0.3em] uppercase font-bold">
                FINAL QUEST
              </span>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-8"
              style={serifStyle}
            >
              {finalQuest.title}
            </h3>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-white leading-loose text-sm md:text-base mb-8">
              {finalQuest.content}
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <p
              className="text-2xl md:text-3xl font-bold text-[#F59E0B] leading-relaxed mb-8"
              style={serifStyle}
            >
              {finalQuest.quote}
            </p>
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-white leading-loose text-sm md:text-base mb-8">
              {finalQuest.afterQuote}
            </p>
          </FadeInUp>
          <FadeInUp delay={500}>
            <p
              className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-8"
              style={serifStyle}
            >
              {finalQuest.secondQuote}
            </p>
          </FadeInUp>
          <FadeInUp delay={600}>
            <p className="text-white leading-loose text-sm md:text-base">
              {finalQuest.closing}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== MESSAGE ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1C2A44] mb-4">
                MESSAGE
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                これから挑戦する人へ
              </h3>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="space-y-6">
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                覚悟は「固まるもの」ではなく、「決め続けるもの」。
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                志が同じ方向を向いた仲間と出会えたとき、挑戦は加速する。
              </p>
              <div className="bg-[#1C2A44]/5 pl-6 py-4 my-6 rounded-lg">
                <p
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] leading-relaxed"
                  style={serifStyle}
                >
                  一人の成功ではなく、仲間の成功を創る。
                  <br />
                  それが私たちの挑戦です。
                </p>
              </div>
              <p
                className="text-xl md:text-2xl font-bold text-[#F59E0B] py-2"
                style={serifStyle}
              >
                「仲間がいるからこそ、今がある。」
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                これからも、日本に新しい風を起こし続けます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
