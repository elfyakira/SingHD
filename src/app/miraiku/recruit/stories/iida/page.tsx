'use client'

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

export default function IidaStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 11
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              CHALLENGER STORY
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              自分の意思で未来を選び続ける
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Profile Section ===== */}
      <section className="py-16 lg:py-24 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="inline-block border-2 border-[#2563EB]/20 rounded-2xl bg-white px-8 py-6 md:px-12 md:py-8 shadow-sm">
              <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-4">
                CHALLENGER
              </p>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C2A44] mb-3"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                飯田 思遠
              </h2>
              <div className="w-12 h-px bg-[#2563EB] mx-auto mb-3" />
              <p className="text-sm text-gray-600">
                株式会社ゆめスタ 代表取締役
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== RPG Timeline ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/60 via-[#2563EB]/30 to-[#2563EB]/60" />

            <div className="space-y-16 md:space-y-20">
              {timelineEvents.map((event, index) => (
                <FadeInUp key={index} delay={index < 3 ? index * 100 : 0}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Level badge */}
                    <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-[#2563EB] rounded-xl flex items-center justify-center z-10 shadow-sm">
                      <span className="text-[10px] md:text-xs font-bold text-[#2563EB] text-center leading-tight">
                        {event.level.split(' ')[0]}
                        <br />
                        {event.level.split(' ')[1]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3
                        className="text-lg md:text-xl font-bold text-[#1C2A44] mb-4"
                        style={{
                          fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                        }}
                      >
                        {event.title}
                      </h3>

                      {event.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-gray-700 leading-loose text-sm md:text-base mb-2"
                        >
                          {p}
                        </p>
                      ))}

                      {event.quote && (
                        <p
                          className="text-lg md:text-xl font-bold text-[#2563EB] my-4"
                          style={{
                            fontFamily:
                              "'Times New Roman', 'Yu Mincho', serif",
                          }}
                        >
                          {event.quote}
                        </p>
                      )}

                      {event.closing && (
                        <p className="text-gray-700 leading-loose text-sm md:text-base">
                          {event.closing}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL QUEST ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="relative pl-16 md:pl-20 mb-16">
              {/* Vertical line connector */}
              <div className="absolute left-6 md:left-8 top-0 h-full w-px bg-[#2563EB]/30" />

              {/* Final Quest badge */}
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-[#2563EB] rounded-xl flex items-center justify-center z-10 shadow-sm">
                <span className="text-[8px] md:text-[10px] font-bold text-white text-center leading-tight">
                  FINAL
                  <br />
                  QUEST
                </span>
              </div>

              <div className="pt-1">
                <h3
                  className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-6"
                  style={{
                    fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                  }}
                >
                  創りたい未来
                </h3>

                <p className="text-gray-700 leading-loose text-sm md:text-base mb-4">
                  飯田が目指すのは会社を大きくすることだけではない。
                </p>

                <p
                  className="text-xl md:text-2xl font-bold text-[#2563EB] my-6"
                  style={{
                    fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                  }}
                >
                  「新しい文化を創ること。」
                </p>

                <p className="text-gray-700 leading-loose text-sm md:text-base mb-6">
                  全ての人が教育者の視点を持ち主体的に行動する社会。
                  <br />
                  そして実現したい未来がある。
                </p>

                <p
                  className="text-xl md:text-2xl font-bold text-[#2563EB] my-6"
                  style={{
                    fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                  }}
                >
                  「自分の意思で未来を選び続けられる社会。」
                </p>

                <p className="text-gray-700 leading-loose text-sm md:text-base">
                  親や周囲の価値観ではなく自分で問いを立て自分で決め自分で行動する。
                  <br />
                  そんな人を増やしていきたい。
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== MESSAGE ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-4">
                MESSAGE
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                これから挑戦する人へ
              </h2>
              <div className="w-16 h-px bg-[#2563EB] mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="border-l-4 border-[#2563EB] pl-6 md:pl-8 py-4 space-y-6">
              <p className="text-gray-700 leading-loose text-sm md:text-base">
                覚悟は100％じゃなくていい。
              </p>

              <p
                className="text-xl md:text-2xl font-bold text-[#2563EB]"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                「8割でいい。」
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                残りの2割は仲間と環境が埋めてくれる。
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                大事なのは
                <span className="text-[#1C2A44] font-bold">
                  「自分の軸を言語化すること。」
                </span>
              </p>

              <p className="text-gray-700 leading-loose text-sm md:text-base">
                なぜやるのか。何のためにやるのか。
                <br />
                それが見えたらあとは動くだけ。
              </p>

              <p
                className="text-xl md:text-2xl font-bold text-[#2563EB]"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
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
