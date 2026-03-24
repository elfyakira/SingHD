'use client'

import Image from 'next/image'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const timelineEvents = [
  {
    level: 'LEVEL 1',
    title: '社会への違和感',
    paragraphs: [
      '大学に入ってから、飯田思遠は強い違和感を感じていた。',
      '周りは就職活動の話をする。「どの会社に入るか」を考える。',
      'しかし彼は思った。',
    ],
    quote: '「この社会のままでいいのか？」',
    closing:
      'どこか空虚な空気。言われた通りに進むだけの人生。その違和感は日に日に大きくなっていった。',
  },
  {
    level: 'LEVEL 10',
    title: '大学2年、休学という決断',
    paragraphs: [
      '大学2年生のとき、飯田はある決断をする。休学。そして個人事業主として動き始めた。',
      '周囲から見ればかなり大きな決断だった。しかし本人の中ではすでに覚悟があった。',
      'ただしそれは完全ではなかった。',
    ],
    quote: '「覚悟は8割。」',
    closing: '残りの2割はまだ不安だった。',
  },
  {
    level: 'LEVEL 20',
    title: '不安との戦い',
    paragraphs: [
      '人脈は増えていた。視野も広がっていた。しかし現実は甘くなかった。',
      '生活できるほど稼げてはいなかった。',
    ],
    quote: '「この選択で本当に良かったのか」',
    closing: 'そんな不安が頭をよぎることもあった。',
  },
  {
    level: 'LEVEL 25',
    title: '一番怖かったこと',
    paragraphs: [
      '当時一番怖かったこと。それは失敗ではない。',
    ],
    quote: '「ただ色々やっている大学生」で終わること。',
    closing:
      '実力がついていないのに自分はできていると思い込む。その状態が一番怖かった。',
  },
  {
    level: 'LEVEL 30',
    title: 'Singとの出会い',
    paragraphs: [
      'そんなとき名古屋の交流会でSingホールディングスと出会う。',
      '完全に偶然の出会いだった。',
    ],
    quote: null,
    closing: 'しかしその出会いが人生を変える。',
  },
  {
    level: 'LEVEL 35',
    title: 'ワクワクと恐怖',
    paragraphs: [
      '最初に話したとき正直に思ったこと。',
    ],
    quote: '「本当に自分が代表になれるのか？」',
    closing:
      '責任を取れるのか。会社を背負えるのか。不安は大きかった。しかし同時に「強いワクワクを感じた。」',
  },
  {
    level: 'LEVEL 40',
    title: '全てが重なった瞬間',
    paragraphs: [
      'ある瞬間すべてが繋がる。',
      'やりたいこと、社会に求められていること、自分の得意なこと。',
      'この3つが完全に重なった。',
    ],
    quote: null,
    closing: 'その瞬間挑戦したい気持ちが一気に溢れた。',
  },
  {
    level: 'LEVEL 45',
    title: '決断',
    paragraphs: [
      '起業を本気で決断できた理由。',
    ],
    quote: '「仲間がいたから。」',
    closing:
      '営業、経理、起業手続き、エンジニア、デザイン。一人ではできないことばかり。しかし支えてくれる環境があった。だから決断できた。',
  },
  {
    level: 'LEVEL 60',
    title: '起業して変わったこと',
    paragraphs: [
      '起業してから飯田の意識は変わった。以前は「自分」を主語にしていた。しかし今は違う。',
    ],
    quote: '「主語は会社。」',
    closing:
      'そしてもう一つ大きく変わったことがある。高校生のキャリアを背負う立場になったこと。自分の言葉一つで誰かの人生が変わるかもしれない。その責任を強く感じている。',
  },
  {
    level: 'LEVEL 70',
    title: '仲間がいる場所',
    paragraphs: [
      '以前は自宅で一人で仕事をしていた。オンラインの打ち合わせだけ。しかし事務所に行くようになって大きな変化があった。',
    ],
    quote: '「仲間と働く環境。」',
    closing:
      '同じ場所で同じ方向を向いている人たち。その環境が自分をさらに成長させてくれた。',
  },
  {
    level: 'LEVEL 80',
    title: 'もし出会っていなかったら',
    paragraphs: [
      'もしSingと出会っていなかったら。おそらく二度目の休学は決断していなかった。',
    ],
    quote: '「個人事業主として活動している"風"」',
    closing: 'になっていたかもしれない。',
  },
]

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

function getLevelNumber(level: string): string {
  return level.replace('LEVEL ', '')
}

export default function IidaStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/recruit/stories/iida-journey.png"
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
              自分の意思で未来を選び続ける
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
                src="/img/recruit/stories/iida-portrait.png"
                alt="飯田思遠"
                fill
                sizes="100vw"
                className="object-cover md:hidden"
                priority
              />
              <div className="hidden md:block w-64 rounded-l-2xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/img/recruit/stories/iida-portrait.png"
                  alt="飯田思遠"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-6 md:relative md:bg-transparent md:backdrop-blur-none md:p-8 md:py-12 md:text-left text-center md:flex md:flex-col md:justify-center">
                <p className="text-xs tracking-[0.3em] text-[#2563EB] mb-2">
                  株式会社ゆめスタ 代表取締役
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-2"
                  style={serifStyle}
                >
                  飯田 思遠
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  自分の意思で未来を選び続ける
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Story Timeline (Zigzag) ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {timelineEvents.map((event, index) => (
            <FadeInUp key={index} delay={index < 4 ? index * 80 : 0}>
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
                      Lv.{getLevelNumber(event.level)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 max-w-2xl">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-4"
                    style={serifStyle}
                  >
                    {event.title}
                  </h3>
                  {event.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-gray-600 leading-loose text-sm md:text-base mb-2"
                    >
                      {p}
                    </p>
                  ))}
                  {event.quote && (
                    <div className="bg-[#1C2A44]/5 pl-5 py-3 rounded-lg my-4">
                      <p
                        className="text-lg md:text-xl font-bold text-[#1C2A44] leading-relaxed"
                        style={serifStyle}
                      >
                        {event.quote}
                      </p>
                    </div>
                  )}
                  {event.closing && (
                    <p className="text-gray-600 leading-loose text-sm md:text-base">
                      {event.closing}
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
            src="/img/recruit/stories/iida-journey.png"
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
              創りたい未来
            </h3>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-white leading-loose text-sm md:text-base mb-6">
              飯田が目指すのは会社を大きくすることだけではない。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-2xl md:text-3xl font-bold text-[#F59E0B] leading-relaxed mb-6"
              style={serifStyle}
            >
              「新しい文化を創ること。」
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white leading-loose text-sm md:text-base mb-6">
              全ての人が教育者の視点を持ち主体的に行動する社会。
              <br />
              そして実現したい未来がある。
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <p
              className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6"
              style={serifStyle}
            >
              「自分の意思で未来を選び続けられる社会。」
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <p className="text-white leading-loose text-sm md:text-base">
              親や周囲の価値観ではなく自分で問いを立て自分で決め自分で行動する。
              <br />
              そんな人を増やしていきたい。
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
              <h2
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                これから挑戦する人へ
              </h2>
              <div className="w-16 h-1 bg-[#F59E0B] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="space-y-6">
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                覚悟は100％じゃなくていい。
              </p>

              <div className="bg-[#1C2A44]/5 pl-6 py-4 my-6 rounded-lg">
                <p
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] leading-relaxed"
                  style={serifStyle}
                >
                  「8割でいい。」
                </p>
              </div>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                残りの2割は仲間と環境が埋めてくれる。
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                大事なのは
                <span className="text-[#F59E0B] font-bold">
                  「自分の軸を言語化すること。」
                </span>
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                なぜやるのか。何のためにやるのか。
                <br />
                それが見えたらあとは動くだけ。
              </p>

              <p
                className="text-xl md:text-2xl font-bold text-[#F59E0B] py-2"
                style={serifStyle}
              >
                「この社会を変えたい」
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                その想いを夢で終わらせないでほしい。
                <br />
                自分の意思で未来を選び続けてほしい。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
