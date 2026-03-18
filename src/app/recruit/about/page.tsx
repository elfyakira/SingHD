'use client'

import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

/* ===== Data from Founder Story ===== */
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
      '正直に言うと、私は昔から「夢がある人間」ではありませんでした。',
      '学生の頃、やりたいことは特にありませんでした。学校に行く理由もよく分からない。ただ毎日を過ごす。時間を消化する。',
      '言ってしまえば、人生をただ暇つぶしのように使っていました。',
    ],
  },
  {
    label: '社会人',
    heading: '自分は、こんなにも無力なのか。',
    paragraphs: [
      '社会人になっても最初は同じでした。働く理由はただ一つ。お金を稼ぐため。会社に入り、決められたレールの上を歩く。特別な志があったわけでもなく、ただ目の前の仕事をこなしていました。',
      'でも、社会に出て経験を積み、役職が上がり、責任を任されるようになった時、私は初めて自分の現実と向き合うことになります。',
      '「自分は、こんなにも無力なのか。」',
      '組織を任される。人を導く立場になる。でも、思うようにいかない。人を守れない。結果も出せない。その度に、自分の未熟さを思い知らされました。',
      '何度も悩みました。本気で悔しくて、一人で泣いたこともあります。もう無理だと思ったこともあります。',
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

/* ===== Data from Mission ===== */

/* ===== Section Divider Component ===== */
function SectionDivider() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-px h-16 bg-[#2563EB]/20 mx-auto" />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-[#2563EB] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img/recruit/top/hero-party.png" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              冒険のはじまり
            </h1>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              なぜ冒険するのか
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          </FadeInUp>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2: Brand Story                                        */}
      {/* ============================================================= */}

      {/* Section Label */}
      <section id="brand-story" className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-[#2563EB] mb-2">
              Brand Story
            </p>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生は、ゲームに似ている。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Brand Story Image */}
      <section className="px-4 bg-white">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl">
          <img src="/img/recruit/about/brand-story.png" alt="冒険の始まり" className="w-full h-auto" />
        </div>
      </section>

      {/* Brand Story - Main Story Text */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              人生は、ゲームに例えると
              <br />
              とてもよくできたRPGのようなものだと思っています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              何も持たない状態から始まり、
              <br />
              敵と戦いながら経験を積み、
              <br />
              お金を貯めて装備を整え、
              <br />
              少しずつ強くなっていく。
              <br />
              経験値を積み重ねてレベルを上げ、
              <br />
              自分自身を成長させながら
              <br />
              最終目的へと進んでいく。
              <br />
              まるでRPGの主人公のように。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              でも、人生もRPGも
              <br />
              ただ「ラスボスを倒すこと」だけが目的ではありません。
              <br />
              その道の途中には
              <br />
              たくさんの物語があります。
              <br />
              かけがえのない仲間との出会い。
              <br />
              思いがけないチャンス。
              <br />
              時には信じられない裏切り。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              そして、
              <br />
              どうしても乗り越えられないと思えるほどの
              <br />
              高い壁。
              <br />
              しかし不思議なことに、
              <br />
              人はその壁を乗り越えた時、
              <br />
              確実に成長しています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              ここで少しだけ、
              <br />
              自分自身に問いかけてみてください。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p
              className="text-[#1C2A44] text-lg md:text-xl leading-loose mb-10 font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              自分は今、人生の主人公を生きているだろうか。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              本当はもっと挑戦できる。
              <br />
              本当はもっと成長できる。
              <br />
              そんな可能性があるのに、
              <br />
              どこかで目を逸らしてしまっていないだろうか。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              でも、RPGの主人公は
              <br />
              途中で逃げません。
              <br />
              諦めません。
              <br />
              なぜなら、
              <br />
              彼が諦めたら
              <br />
              多くの人が困り、悲しむからです。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              主人公は、
              <br />
              自分のためだけに戦っているわけではありません。
              <br />
              仲間のため。
              <br />
              村の人のため。
              <br />
              世界のため。
              <br />
              誰かのために戦っている。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              私たちは思っています。
              <br />
              仕事も、人生も、
              <br />
              本質は同じだと。
              <br />
              誰かのために挑戦する人がいるから
              <br />
              社会は前に進む。
              <br />
              誰かが諦めないから
              <br />
              未来は変わる。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              だから私たちは、
              <br />
              ただ仕事をするだけの会社ではなく
              <br />
              「人生の主人公として挑戦する人」が集まる場所でありたい。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              失敗することもあるでしょう。
              <br />
              壁にぶつかることもあるでしょう。
              <br />
              でも、そのすべてが
              <br />
              あなたのレベルを上げていく。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              人生は一度しかありません。
              <br />
              だからこそ、
              <br />
              ただ時間を過ごすのではなく
              <br />
              自分の物語を、自分の手でつくる。
              <br />
              私たちは、
              <br />
              そんな仲間と出会えることを楽しみにしています。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Brand Story - Three Reasons Section */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
                Three Reasons
              </p>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44] mb-6 leading-relaxed"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                株式会社Singで
                <br />
                自分の物語をスタートさせられる理由
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full" />
            </div>
          </FadeInUp>

          <div className="mb-12 max-w-4xl mx-auto overflow-hidden rounded-2xl">
            <img src="/img/recruit/about/three-reasons.jpg" alt="3つの理由" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={100}>
              <div className="border-2 border-[#2563EB]/20 rounded-2xl p-8 h-full bg-white">
                <div className="text-[#2563EB] text-3xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                  01
                </div>
                <h3 className="text-[#1C2A44] text-lg font-bold mb-4">
                  学びを得られる環境がある
                </h3>
                <p className="text-gray-600 text-sm leading-loose">
                  人生のレベルを上げるのは経験と学びです。新しい挑戦。失敗からの気づき。仲間との議論。そのすべてがあなたの経験値になります。Singでは、ただ仕事をこなすのではなく「成長すること」そのものを大切にしています。昨日よりも今日、今日よりも明日。少しずつでも自分のレベルが上がっている。そんな実感を持てる環境があります。
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="border-2 border-[#2563EB]/20 rounded-2xl p-8 h-full bg-white">
                <div className="text-[#2563EB] text-3xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                  02
                </div>
                <h3 className="text-[#1C2A44] text-lg font-bold mb-4">
                  一緒に寄り添ってくれる仲間がいる
                </h3>
                <p className="text-gray-600 text-sm leading-loose">
                  RPGの主人公は、一人では冒険を続けられません。苦しい時、迷った時、立ち止まりそうな時。隣に仲間がいるから前に進める。Singには、同じ方向を向いて挑戦する仲間がいます。競い合うだけではなく、支え合う関係。一人で戦わせない。それが私たちの文化です。
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={300}>
              <div className="border-2 border-[#2563EB]/20 rounded-2xl p-8 h-full bg-white">
                <div className="text-[#2563EB] text-3xl font-bold mb-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                  03
                </div>
                <h3 className="text-[#1C2A44] text-lg font-bold mb-4">
                  違っても良い。短所を補う仲間がいる
                </h3>
                <p className="text-gray-600 text-sm leading-loose">
                  人にはそれぞれ、得意なことと苦手なことがあります。完璧な人はいません。でも、違う人が集まることでチームは強くなる。誰かの弱さを誰かの強さが支える。それが仲間です。Singは、同じ人を集める会社ではありません。違うからこそ、強いチームになる。そう信じています。
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Brand Story - Closing Section */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="w-16 h-1 bg-[#2563EB] mb-8 rounded-full" />
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの物語は、ここから始まる
            </h2>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              人生は、たった一度しかありません。
              <br />
              その人生を、ただ過ごして終わるのか。
              <br />
              それとも、自分の物語として生きるのか。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              もしあなたが
              <br />
              「もっと成長したい」
              <br />
              「もっと挑戦したい」
              <br />
              「自分の可能性を試したい」
              <br />
              そう思っているなら。
              <br />
              その気持ちは
              <br />
              あなたの中にある
              <br />
              主人公の証拠です。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              株式会社Singは
              <br />
              あなたの物語が始まる場所です。
              <br />
              ここで出会う仲間と、
              <br />
              ここで積み重ねる経験が、
              <br />
              きっとあなたの人生を
              <br />
              かけがえのない物語に変えていく。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-[#1C2A44] text-lg md:text-xl leading-loose mb-12 font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              さあ、次はあなたの番です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Divider: Brand Story -> Founder Story ===== */}
      <SectionDivider />

      {/* ============================================================= */}
      {/* SECTION 3: Founder Story                                      */}
      {/* ============================================================= */}

      {/* Section Label */}
      <section id="founder" className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-[#2563EB] mb-2">
              Founder Story
            </p>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              私がこの冒険を始めた理由
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Founder Story Image */}
      <section className="px-4 bg-white">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl">
          <img src="/img/recruit/about/founder-journey.png" alt="創業の旅" className="w-full h-auto" />
        </div>
      </section>

      {/* Founder Story - Timeline */}
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

      {/* ===== Divider: Founder Story -> Letter ===== */}
      <SectionDivider />

      {/* ============================================================= */}
      {/* SECTION 4: Letter                                             */}
      {/* ============================================================= */}

      {/* Section Label + 橋渡し */}
      <section id="letter" className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-gray-600 leading-loose text-sm md:text-base mb-8">
              この会社を作る決意を押してくれたのは、子供たちの存在でした。
              <br />
              これは、その子供たちに宛てた手紙です。
              <br />
              そしてこれは、あなたに──────
            </p>
            <p className="text-xs tracking-[0.4em] uppercase text-[#2563EB] mb-2">
              Letter
            </p>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              子供たちへの手紙
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Letter - Main Content（古代洋風レター） */}
      <section className="py-20 lg:py-32 px-4 bg-[#F3F0EB]">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <div
              className="relative px-8 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20 rounded-sm shadow-lg"
              style={{
                background: 'radial-gradient(ellipse 80% 95% at center, #F5F0E8 0%, #F2EBE0 60%, #E5D9C3 85%, #D9CCB0 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                fontFamily: "'Yu Mincho', 'Times New Roman', serif",
              }}
            >
              {/* 紙の質感 — inner shadow */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(139,119,82,0.12), inset 0 0 20px rgba(139,119,82,0.06)',
                }}
              />

              {/* 上部装飾線 */}
              <div className="flex items-center justify-center gap-4 mb-12 relative">
                <div className="w-16 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-24 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-16 h-px bg-[#8B7752]/30" />
              </div>

              <div className="relative" style={{ color: '#4A3F2F' }}>
                <div>
                <FadeInUp delay={100}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    君たちが大きくなって、
                    <br />
                    もしこの文章を読むことがあったら
                    <br />
                    少しだけ聞いてほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    お父さんは、
                    <br />
                    最初から立派な大人だったわけじゃない。
                    <br />
                    学生の頃は
                    <br />
                    やりたいこともなかった。
                    <br />
                    学校に行く意味も
                    <br />
                    よく分からなかった。
                    <br />
                    ただ時間を消化して
                    <br />
                    毎日を過ごしていた。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    今思えば、
                    <br />
                    人生を大切に使っていたとは
                    <br />
                    言えない時間だったと思う。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    社会人になってからも
                    <br />
                    最初は同じだった。
                    <br />
                    働く理由は
                    <br />
                    ただお金を稼ぐため。
                    <br />
                    決められたレールの上を
                    <br />
                    歩いていただけだった。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div className="w-12 h-px bg-gray-300 my-12" />
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    でもね、
                    <br />
                    人生には不思議な瞬間がある。
                    <br />
                    自分が逃げたくなった時、
                    <br />
                    立ち止まりそうになった時、
                    <br />
                    「もう一度やらなきゃ」
                    <br />
                    そう思わせてくれる
                    <br />
                    存在に出会う瞬間がある。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    お父さんにとって
                    <br />
                    それが君たちだった。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    君たちが生まれた時、
                    <br />
                    ふと思ったんだ。
                    <br />
                    この子たちが
                    <br />
                    大人になった時、
                    <br />
                    「やりたいことがある」
                    <br />
                    そう思ったら
                    <br />
                    それを喜んで選べる人生であってほしい。
                    <br />
                    諦める人生じゃなくて、
                    <br />
                    挑戦できる人生であってほしい。
                    <br />
                    そう思った。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div className="w-12 h-px bg-gray-300 my-12" />
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    でも、
                    <br />
                    世の中を見ていると
                    <br />
                    それができない子供たちが
                    <br />
                    たくさんいることに気づいた。
                    <br />
                    家庭環境や
                    <br />
                    経済的な理由で
                    <br />
                    夢を持つ前に
                    <br />
                    諦めてしまう子供たち。
                    <br />
                    本当は
                    <br />
                    もっと可能性があるのに。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    その時に思った。
                    <br />
                    自分の子供だけが
                    <br />
                    幸せになればいいのか。
                    <br />
                    そうじゃない。
                    <br />
                    今を生きている大人が
                    <br />
                    未来の子供たちのために
                    <br />
                    何かをしなければいけない。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    だからお父さんは
                    <br />
                    この会社を作った。
                    <br />
                    大きなことは
                    <br />
                    まだできないかもしれない。
                    <br />
                    でも、
                    <br />
                    胸を張って生きる大人
                    <br />
                    挑戦する大人
                    <br />
                    人のために動く大人
                    <br />
                    そんな人たちを
                    <br />
                    一人でも増やしたいと思った。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div className="w-12 h-px bg-gray-300 my-12" />
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    もし君たちが
                    <br />
                    大人になった時、
                    <br />
                    お父さんの背中を見て
                    <br />
                    「大人ってかっこいいな」
                    <br />
                    そう思ってくれたら
                    <br />
                    それだけで嬉しい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    人生は一度しかない。
                    <br />
                    だから
                    <br />
                    誰かに言われた人生じゃなく
                    <br />
                    自分が選んだ人生を生きてほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    そしてもし
                    <br />
                    君たちが迷った時は
                    <br />
                    これだけ覚えていてほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p
                    className="text-[#2563EB] text-lg md:text-xl font-bold leading-[2] mb-8"
                    style={{
                      fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                    }}
                  >
                    人は何度でも立ち上がれる。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    お父さんも
                    <br />
                    何度も失敗して
                    <br />
                    何度も悩んできた。
                    <br />
                    でもその度に
                    <br />
                    また立ち上がってきた。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base mb-8">
                    だから君たちも
                    <br />
                    きっと大丈夫だ。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="leading-[2] text-sm md:text-base">
                    いつか君たちが
                    <br />
                    自分の人生を胸を張って歩いている姿を
                    <br />
                    楽しみにしています。
                  </p>
                </FadeInUp>
              </div>
              </div>

              {/* 下部装飾線 */}
              <div className="flex items-center justify-center gap-4 mt-12 relative">
                <div className="w-16 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-24 h-px bg-[#8B7752]/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7752]/40" />
                <div className="w-16 h-px bg-[#8B7752]/30" />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Letter - "そして、未来の仲間へ" Section */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-[#2563EB] mx-auto mb-8 rounded-full" />
              <h2
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] leading-relaxed"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                そして、未来の仲間へ
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              この手紙は
              <br />
              子供たちに向けて書いたものですが、
              <br />
              実は
              <br />
              未来の仲間に向けた手紙でもあります。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              もしあなたが
              <br />
              胸を張って生きたい
              <br />
              挑戦する人生を歩みたい
              <br />
              誰かの未来を良くしたい
              <br />
              そう思うなら
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              私たちは
              <br />
              同じ冒険をしている仲間かもしれません。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-[#1C2A44] text-base md:text-lg leading-[2]"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              この物語の続きは、
              <br />
              あなたと一緒に作っていきたい。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Divider: Letter -> Sing Name ===== */}
      <SectionDivider />

      {/* ============================================================= */}
      {/* SECTION 5: Sing Name                                          */}
      {/* ============================================================= */}

      {/* Section Label */}
      <section id="sing-name" className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-[#2563EB] mb-2">
              OUR NAME
            </p>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              「Sing」という名前に込めた想い
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Sing Name Image */}
      <section className="px-4 bg-white">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl">
          <img src="/img/recruit/about/sing-meaning.png" alt="Singの意味" className="w-full h-auto" />
        </div>
      </section>

      {/* Sing Name - Main Story */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              会社を作ると決めた時、最後まで悩んだのが会社の名前でした。
              <br />
              どんな名前にするのか。
              <br />
              それはこの会社がどんな存在でありたいのか
              <br />
              その覚悟を決めることでもあります。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              私はずっと考えていました。
              <br />
              この会社は何のために存在するのか。
              <br />
              何を目指す会社なのか。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              その答えはとてもシンプルでした。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="my-16 text-center">
              <p
                className="text-2xl md:text-3xl lg:text-4xl text-[#1C2A44] font-bold leading-relaxed"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                「人が、自分らしく生きられる
                <br />
                社会をつくること。」
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              人は本来、もっと自由に夢を持ち
              <br />
              もっと自由に挑戦できるはずです。
              <br />
              でも現実には環境や不安
              <br />
              周囲の目
              <br />
              過去の失敗
              <br />
              様々な理由で本来の自分を出せずに生きている人がたくさんいます。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              本当はやりたいことがあるのに
              <br />
              それを言えない。
              <br />
              本当は挑戦したいのに
              <br />
              一歩踏み出せない。
              <br />
              そんな人たちが世の中にはたくさんいます。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              でも私は思うんです。
              <br />
              人生は本来もっと自由で
              <br />
              もっと楽しいもののはずだと。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
            </div>
            <p
              className="text-2xl md:text-3xl text-[#2563EB] font-bold mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              だからこの会社の名前を
              <br />
              Singにしました。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              Singには「歌う」という意味があります。
              <br />
              歌う時、人は自分の声を出します。
              <br />
              周りの目を気にせず
              <br />
              自分の感情を表現します。
              <br />
              楽しい時は自然と歌いたくなる。
              <br />
              嬉しい時も歌が生まれる。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              つまり歌うという行為は
              <br />
              「自分らしく生きること」その象徴だと思ったんです。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              株式会社Singは
              <br />
              誰かの人生を決める会社ではありません。
              <br />
              誰かの夢を押し付ける会社でもありません。
              <br />
              一人ひとりが自分の人生を
              <br />
              自分の声で歌えるようになる。
              <br />
              そんな人生を応援する会社でありたい。
              <br />
              そう思っています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              人生は一度きりです。
              <br />
              だからこそ誰かの人生を生きるのではなく
              <br />
              自分の人生を生きてほしい。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              もしあなたが
              <br />
              もっと挑戦したい
              <br />
              もっと成長したい
              <br />
              もっと自分らしく生きたい
              <br />
              そう思っているなら
              <br />
              あなたの人生の歌をここで歌ってほしい。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Sing Name - Closing Statement */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2563EB]"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Divider: Sing Name -> Mission ===== */}
      <SectionDivider />

      {/* ============================================================= */}
      {/* SECTION 6: Mission（独立ページへ移行）                         */}
      {/* ============================================================= */}
      <section id="mission" className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-[#2563EB] mb-4">
              MISSION &amp; VISION
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              企業理念
            </h2>
            <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              私たちのミッション・ビジョン・バリュー、
              <br />
              そして社員憲章7つの約束。
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <Link
              href="/recruit/mission"
              className="inline-block bg-[#2563EB] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#1D4ED8] transition-all duration-300"
            >
              企業理念を見る
            </Link>
          </FadeInUp>
        </div>
      </section>


      <RecruitCTA />
    </div>
  )
}
