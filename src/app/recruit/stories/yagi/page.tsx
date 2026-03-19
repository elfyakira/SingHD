'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

const storyLevels = [
  {
    level: 'LEVEL 1',
    title: '満たされない日々',
    content:
      '会社員として働いていた屋宜勝正は、責任ある立場にいた。それなりに認められ、それなりに成果を出していた。しかし心のどこかで問い続けていた。',
    quote: '「このままでいいのか？」',
    afterQuote:
      '自分の人生を生きている実感が持てない。どこか満たされない日々が続いていた。',
  },
  {
    level: 'LEVEL 10',
    title: '「いつか」という言い訳',
    content:
      '「いつかは自分でやりたい」という想いはずっとあった。しかし具体的な一歩が見えない。個人で動いてみても決定打はなく、時間だけが過ぎていく。',
    quote: '「焦りだけが大きくなっていった。」',
  },
  {
    level: 'LEVEL 20',
    title: '希望と恐れ',
    content:
      '自分の可能性を試したい。その希望はあった。しかし同時に「本当に自分にできるのか」という恐れも消えなかった。家族のこと、将来の生活。簡単に踏み出せる決断ではなかった。',
    afterQuote:
      '覚悟は正直、半分も固まっていなかった。理想と現実の間で揺れ続けていた。',
  },
  {
    level: 'LEVEL 30',
    title: '一番怖かったもの',
    content:
      '失敗そのものよりも怖いことがあった。',
    quote: '「挑戦しなかった自分を、一生後悔すること。」',
    afterQuote:
      'しかし同時に、孤独の中で全てを背負う怖さも強く感じていた。',
  },
  {
    level: 'LEVEL 35',
    title: '退職、そして空白',
    content:
      '本業にも力が入らなくなった。退職を決断した。将来が見えない状態。何も決まっていない空白の時間。',
    afterQuote:
      'そんな時、前職からのご縁で一本の連絡が入った。',
  },
  {
    level: 'LEVEL 40',
    title: '「社長をやりませんか？」',
    content:
      'Singホールディングスとの出会い。そこで投げかけられた言葉に衝撃を受けた。',
    quote: '「社長をやりませんか？」',
    afterQuote:
      '自分を信じてくれている人がいる。その事実に胸が熱くなった。今振り返ると、あれは必然だった。あのタイミングでなければ、動けなかったと思う。',
  },
  {
    level: 'LEVEL 50',
    title: '「一緒にやる」という言葉',
    content:
      'すべてを一人で背負うのではなく、伴走してくれる存在がいると分かった瞬間。',
    quote: '「一緒にやる。」',
    afterQuote:
      'その言葉に本気を感じた。具体的な事業設計、営業支援、バックオフィスのサポート体制。「感情」ではなく「仕組み」で不安を減らしていくことができた。',
  },
  {
    level: 'LEVEL 60',
    title: '覚悟が決まった理由',
    content:
      '起業を本気で始めようと決断できた理由。それは環境でも条件でもなかった。',
    quote: '「あなたならできる。」',
    afterQuote:
      'そう本気で言ってもらえたこと。そして共に走ってくれる環境があると確信できたことだった。',
  },
  {
    level: 'LEVEL 70',
    title: '覚悟が行動に変わった',
    content:
      '起業してから、覚悟が「言葉」から「行動」に変わった。決断のスピードが上がり、責任を楽しめるようになった。経営判断に迷ったとき、すぐに相談できる環境がある。',
    quote: '「孤独ではない、という実感が常にある。」',
  },
  {
    level: 'LEVEL 80',
    title: '一人ではないと知った日',
    content:
      '初めての大きな案件で不安になったとき、具体的な打ち手を一緒に考え、最後まで伴走してくれた。',
    afterQuote:
      'もしSingホールディングスと出会っていなかったら。おそらくどこかで再就職し、「あの時やっていれば」と思いながら過ごしていた。',
  },
]

const finalQuest = {
  level: 'FINAL QUEST',
  title: 'これから創りたい未来',
  content:
    '屋宜が創りたいのは、挑戦する人を応援できる企業。働く人が誇りを持てる企業。',
  quote: '「やりたいと思った人が、環境のせいで諦めなくていい社会。」',
  afterQuote:
    '挑戦が当たり前の文化を広げていく。自分自身が成功モデルとなり、次の挑戦者を生み出していく。',
  secondQuote: '「逃げない選択が、人生を変える。」',
  closing:
    '一歩を踏み出す勇気を与えられる存在でありたい。そして、孤独にさせない存在でありたい。',
}

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

function getLevelNumber(level: string): string {
  if (level === 'FINAL QUEST') return '?'
  return level.replace('LEVEL ', '')
}

export default function YagiStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/miraiku/yagi-wide.jpg"
            alt=""
            className="w-full h-full object-cover"
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
              逃げない選択が、
              <br className="md:hidden" />
              人生を変える
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Profile Card ===== */}
      <section className="py-16 md:py-16 -mt-12 md:mt-0 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="md:flex md:flex-row md:items-stretch bg-white rounded-2xl shadow-lg relative overflow-hidden min-h-[380px] md:h-[200px]">
              <img
                src="/img/miraiku/partner-yagi.jpg"
                alt="屋宜勝正"
                className="absolute inset-0 w-full h-full object-cover md:hidden"
              />
              <div className="hidden md:block w-64 rounded-l-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/img/miraiku/partner-yagi.jpg"
                  alt="屋宜勝正"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-6 md:relative md:bg-transparent md:backdrop-blur-none md:p-8 md:py-12 md:text-left text-center md:flex md:flex-col md:justify-center">
                <p className="text-xs tracking-[0.3em] text-[#2563EB] mb-2">
                  株式会社フライトップ 代表取締役
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-2"
                  style={serifStyle}
                >
                  屋宜 勝正
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  逃げない選択が、人生を変える
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
          <img
            src="/img/miraiku/yagi-wide.jpg"
            alt=""
            className="w-full h-full object-cover"
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
                覚悟は半分でもいい。
              </p>
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                大事なのは、「挑戦しなかった自分を後悔しないか」と自分に問い続けること。
              </p>
              <div className="bg-[#1C2A44]/5 pl-6 py-4 my-6 rounded-lg">
                <p
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] leading-relaxed"
                  style={serifStyle}
                >
                  一人で全てを背負う必要はない。
                  <br />
                  「あなたならできる」と本気で言ってくれる環境があれば、
                  <br />
                  覚悟は言葉から行動に変わる。
                </p>
              </div>
              <p
                className="text-xl md:text-2xl font-bold text-[#F59E0B] py-2"
                style={serifStyle}
              >
                「まず、声を上げてほしい。」
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
