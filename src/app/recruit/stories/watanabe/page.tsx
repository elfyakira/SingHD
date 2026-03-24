'use client'

import Image from 'next/image'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

const storyLevels = [
  {
    level: 'LEVEL 1',
    title: 'シングルマザーの母の背中',
    content:
      '渡邉大輝は、シングルマザーの母のもとで育った。母は毎日、必死に働いていた。努力しても、決して楽とは言えない生活。一方で、経営者である父の世界も知っていた。同じ社会なのに生きている世界が違う。その違和感は、幼い頃から彼の心に残り続けていた。',
    quote: '「努力しても変えられないものがあるのか？」',
    afterQuote: 'その問いが、彼の中に強い正義感を生んだ。',
  },
  {
    level: 'LEVEL 10',
    title: '組織の中で戦い続けた日々',
    content:
      '社会に出た渡邉は、組織の中で誰よりも熱量を持って働いた。「正しい」と思うことを本気で貫く。誰よりも挑戦する。誰よりも走る。周囲からは「熱い人間」と言われた。しかし、ある時どうしても受け入れられない現実に直面する。',
  },
  {
    level: 'LEVEL 20',
    title: '守りたい人を守れない',
    content:
      'どれだけ本気で挑戦してもどれだけ正しいことを言っても守りたい人を守れない。組織の中ではどうしても変えられない壁がある。',
    quote: '「それなら、自分で創るしかない。」',
    afterQuote: 'その瞬間、彼の中で一つの答えが生まれた。',
  },
  {
    level: 'LEVEL 25',
    title: '起業という選択',
    content:
      '起業という選択肢が現実として浮かび上がった。しかし当然、不安もあった。「自分の力で環境を変えられるのか」「失敗したらどうなる」「本当に背負えるのか」希望と不安が同時に存在していた。覚悟はまだ100％ではなかった。それでも一つだけ決めていたことがある。',
    quote: '「覚悟が固まるのを待つ人生は、もう嫌だった。」',
  },
  {
    level: 'LEVEL 30',
    title: '一番怖かったもの',
    content:
      '起業で怖かったもの。それは失敗ではなかった。孤独だった。誰にも相談できずすべてを一人で背負う未来。それが一番怖かった。',
  },
  {
    level: 'LEVEL 35',
    title: 'Singとの出会い',
    content:
      'そんな時、Singホールディングスと出会う。それはまるで「このタイミングを待っていた」かのような出会いだった。偶然のようで必然。そう感じた。',
  },
  {
    level: 'LEVEL 40',
    title: '初めて感じた安心感',
    content:
      '最初に話した時感じたのは安心感だった。否定されない。挑戦を笑われない。むしろ「やってみよう」と背中を押してくれる。',
    quote: '「ここなら本気で戦える。」',
    afterQuote: 'その瞬間思った。',
  },
  {
    level: 'LEVEL 45',
    title: '覚悟が完成した瞬間',
    content:
      '起業を決断した理由は環境が整ったからではない。お金でも条件でもない。',
    quote: '「一人じゃない」',
    afterQuote: 'そう思えたからだった。本気の人間が本気で支えてくれる。その確信が覚悟を完成させた。',
  },
  {
    level: 'LEVEL 60',
    title: '起業後に変わったもの',
    content:
      '起業してから渡邉の意識は変わった。これまでは熱量で走る人間だった。しかし今は違う。背負うものがある。守るものがある。',
    quote: '「責任を持つ人間になった。」',
    afterQuote: '覚悟は頭で決めるものではない。行動の中で磨かれていくものだった。',
  },
  {
    level: 'LEVEL 70',
    title: '挑戦は孤独じゃない',
    content:
      'Singと共にスタートしたことで一つの事実を知る。挑戦は孤独じゃない。迷えば相談できる。壁にぶつかれば一緒に考えてくれる。大きな決断を迫られた時後ろにいるのは組織ではなく「仲間」だった。',
  },
  {
    level: 'LEVEL 80',
    title: 'もし出会っていなかったら',
    content:
      'もしSingと出会っていなかったら。おそらくどこかで諦めていた。もしくは無理をして一人で潰れていたかもしれない。',
    quote: '「出会いは未来を変える。」',
  },
]

const finalQuest = {
  level: 'FINAL QUEST',
  title: 'これから創りたい社会',
  content:
    '渡邉が創りたいのは会社を増やすことではない。',
  quote: '「挑戦者を増やすこと。」',
  afterQuote:
    '環境や過去に関係なく本気の人間が報われる社会。誰かの挑戦が誰かの勇気になる。',
  secondQuote: '「覚悟が連鎖する社会。」',
  closing:
    'かつての自分のように環境に悩み一歩を踏み出せない人が胸を張って生きられる社会をつくりたい。',
}

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

function getLevelNumber(level: string): string {
  if (level === 'FINAL QUEST') return '?'
  return level.replace('LEVEL ', '')
}

export default function WatanabeStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/recruit/stories/watanabe-journey.png"
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
              覚悟が固まるのを待つ人生は、
              <br className="md:hidden" />
              もうやめた。
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
                src="/img/recruit/stories/watanabe-portrait.png"
                alt="渡邉大輝"
                fill
                sizes="100vw"
                className="object-cover md:hidden"
                priority
              />
              <div className="hidden md:block w-64 rounded-l-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/img/recruit/stories/watanabe-portrait.png"
                  alt="渡邉大輝"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-6 md:relative md:bg-transparent md:backdrop-blur-none md:p-8 md:py-12 md:text-left text-center md:flex md:flex-col md:justify-center">
                <p className="text-xs tracking-[0.3em] text-[#2563EB] mb-2">
                  株式会社Sing.nexT 代表取締役
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-2"
                  style={serifStyle}
                >
                  渡邉 大輝
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  覚悟が固まるのを待つ人生は、もうやめた。
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
                {/* Level Badge */}
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

                {/* Content */}
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
            src="/img/recruit/stories/watanabe-journey.png"
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
                覚悟が固まるのを待っていたら一生動けない。
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                100％じゃなくていい。
              </p>
              <div className="bg-[#1C2A44]/5 pl-6 py-4 my-6 rounded-lg">
                <p
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] leading-relaxed"
                  style={serifStyle}
                >
                  「一人じゃない」そう思える場所を見つけたら
                  <br />
                  そこが始まりだ。
                </p>
              </div>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                起業は復讐でも証明でもない。
              </p>
              <p
                className="text-xl md:text-2xl font-bold text-[#F59E0B] py-2"
                style={serifStyle}
              >
                「選択だ。」
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                環境に左右されない生き方を自分の手で選んでほしい。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
