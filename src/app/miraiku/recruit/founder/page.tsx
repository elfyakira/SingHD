'use client'

import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'

interface TimelineMilestone {
  label: string
  heading: string
  paragraphs: string[]
}

const milestones: TimelineMilestone[] = [
  {
    label: '学生時代',
    heading: '人生をただ暇つぶしのように使っていました。',
    paragraphs: [
      '学生時代の私は、何かに本気で打ち込んだことがありませんでした。',
      'なんとなく学校に行き、なんとなく友達と過ごし、なんとなく毎日をやり過ごしていました。',
      '将来の夢も、明確な目標も、何もなかった。ただ漠然と「このまま大人になるんだろうな」と思っていました。',
      '人生を、ただ暇つぶしのように使っていたのだと思います。',
    ],
  },
  {
    label: '社会人',
    heading: '自分は、こんなにも無力なのか。',
    paragraphs: [
      '社会に出て、初めて壁にぶつかりました。',
      '仕事ができない。結果が出ない。周囲に迷惑をかける。自分が思っていた以上に、何もできない自分がそこにいました。',
      '「自分は、こんなにも無力なのか。」',
      'そう痛感した瞬間、初めて「変わりたい」と思いました。このままの自分では嫌だ。もっと成長したい。もっと人の役に立ちたい。',
      'それが、今に繋がる第一歩でした。',
    ],
  },
  {
    label: '転機',
    heading: '最後に私の背中を押したのは子供の存在でした。',
    paragraphs: [
      'その後、がむしゃらに働き、少しずつ成長を感じられるようになりました。しかし、ある時ふと気づいたのです。',
      '「自分が成長するだけでは、世の中は何も変わらない。」',
      'そんな時、子供が生まれました。',
      '小さな手で私の指を握る我が子を見て、思いました。「この子が大きくなったとき、どんな世界が待っているんだろう。」',
      '子供たちが生きるこの社会を、もっと良い場所にしたい。子供たちが「大人になるのが楽しみだ」と思える社会を作りたい。',
      '最後に私の背中を押したのは、子供の存在でした。',
    ],
  },
  {
    label: '疑問',
    heading: '自分の子供だけが幸せになれば、それでいいのか。',
    paragraphs: [
      '起業を決意し、走り出した後も、常に問い続けてきたことがあります。',
      '「自分の子供だけが幸せになれば、それでいいのか。」',
      '答えは、ノーでした。',
      '自分の子供だけでなく、すべての子供たちが希望を持てる社会を作りたい。そのためには、大人が変わらなければならない。',
      '子供たちが憧れるような、本気で人生を生きる大人を増やしたい。それが私のたどり着いた答えでした。',
    ],
  },
  {
    label: '決意',
    heading: '子供たちに尊敬される大人を増やしたい。',
    paragraphs: [
      '「子供たちに尊敬される大人を増やす。」',
      'それがSingホールディングスの原点であり、今もブレることのない軸です。',
      '私たちは、ただ利益を追求する会社ではありません。関わるすべての人が「自分の人生を歌える」ようになる。そんな社会を作るために、この会社は存在しています。',
      '簡単なことではありません。何度も壁にぶつかり、何度も立ち止まりそうになりました。',
      'それでも前に進み続けるのは、この想いがあるからです。',
    ],
  },
  {
    label: '未来へ',
    heading: 'この冒険を、一緒に歩んでくれませんか。',
    paragraphs: [
      'この冒険は、まだ途中です。',
      'そして、この冒険を一人で歩むつもりはありません。',
      '同じ想いを持ち、同じ方向を向いて、一緒に進んでくれる仲間が必要です。',
      '完璧でなくていい。まだ何者でなくていい。',
      'ただ、「自分の人生を本気で生きたい」と思うなら。',
      'この冒険を、一緒に歩んでくれませんか。',
    ],
  },
]

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              Chapter 03
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              Founder Story
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              私がこの冒険を始めた理由
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          </FadeInUp>
        </div>
      </section>

      {/* ===== Timeline Story ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-20">
              {milestones.map((milestone, idx) => (
                <FadeInUp key={idx} delay={idx * 80}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-[#2563EB] ring-4 ring-white" />

                    {/* Label */}
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#2563EB] mb-3 block">
                      {milestone.label}
                    </span>

                    {/* Heading */}
                    <h3
                      className="text-lg md:text-xl font-bold text-[#1C2A44] mb-6 leading-relaxed"
                      style={{
                        fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                      }}
                    >
                      {milestone.heading}
                    </h3>

                    {/* Paragraphs */}
                    <div className="space-y-4">
                      {milestone.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-gray-700 text-sm md:text-base leading-loose"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-1 bg-[#2563EB] mx-auto mb-12 rounded-full" />
          </FadeInUp>

          <FadeInUp delay={100}>
            <p
              className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-8 leading-relaxed"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険は、もう始まっている。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-600 text-sm md:text-base leading-loose mb-12">
              次は、社長が子供たちに宛てた手紙です。
              <br />
              この会社の原点にある想いを、感じてください。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <Link
              href="/miraiku/recruit/letter"
              className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
            >
              次の章へ
            </Link>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="founder" />
      <RecruitCTA />
    </div>
  )
}
