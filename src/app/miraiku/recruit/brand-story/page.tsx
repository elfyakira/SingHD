'use client'

import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'

export default function BrandStoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              Chapter 02
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              Brand Story
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              人生は、ゲームに似ている。
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          </FadeInUp>
        </div>
      </section>

      {/* ===== Main Story Text ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              人生は、ゲームに例えるとRPGのようなものかもしれません。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              敵に出会い、経験値を得る。
              <br />
              装備を整え、レベルを上げる。
              <br />
              仲間と出会い、時に別れながら、
              <br />
              自分だけの物語を紡いでいく。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              でも、人生もRPGもただ「ラスボスを倒すこと」だけが目的ではありません。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              道中で出会う仲間との絆。
              <br />
              見知らぬ街で触れる新しい価値観。
              <br />
              何度も倒れて、それでも立ち上がった先に見える景色。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              旅の途中で得たものこそが、
              <br />
              あなたの物語を、唯一無二のものにしてくれるのです。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              でも、ふと立ち止まって考えてみてください。
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
              誰かが描いたシナリオを、ただなぞっているだけじゃないか。
              <br />
              「安定」という名の村から、一歩も外に出ていないんじゃないか。
              <br />
              本当はもっと先に進みたいのに、怖くて動けなくなっていないか。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              RPGの主人公は途中で逃げません。
              <br />
              強い敵にも、理不尽な壁にも、正面からぶつかっていく。
              <br />
              それは「強い」からではありません。
              <br />
              「諦めない」と決めたからです。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              Singホールディングスは、
              <br />
              そんなふうに自分の物語を本気で生きようとする人が集まる場所です。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              完璧じゃなくていい。
              <br />
              まだ何者でもなくていい。
              <br />
              ただ、「このままで終わりたくない」と思っているなら。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              その気持ちこそが、冒険の始まりです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Three Reasons Section ===== */}
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
                  RPGでも、経験値を得られるフィールドに出なければレベルは上がりません。
                  Singには、挑戦する人を支える研修制度や、成長を後押しするプロジェクトが豊富にあります。
                  日々の業務そのものが「経験値を積める冒険」になる。
                  そんな環境が、ここにはあります。
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
                  RPGの主人公が一人では冒険を続けられないように、
                  仕事もひとりでは乗り越えられない壁があります。
                  Singには「一人にさせない」カルチャーがあります。
                  困ったときに手を差し伸べてくれる先輩、一緒に悩んでくれる同期。
                  あなたの冒険を、一緒に歩いてくれる仲間がいます。
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
                  RPGのパーティには、戦士も魔法使いも回復役もいます。
                  全員が同じ能力を持つ必要はありません。
                  Singでは、あなたの「得意」を活かし、「苦手」は仲間が補ってくれます。
                  違いがあるからこそ、チームは強くなれる。
                  あなたのままで、ここでは輝けます。
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ===== Closing Section ===== */}
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
              ゲームの中では、何度だってやり直せます。
              <br />
              でも、人生はたった一度きりです。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              「あの時、踏み出しておけばよかった。」
              <br />
              そう後悔する前に、今、一歩を踏み出してみませんか。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-10">
              あなたの物語を、ここから始めましょう。
              <br />
              Singホールディングスで、あなただけの冒険が待っています。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="text-center mt-16">
              <Link
                href="/miraiku/recruit/founder"
                className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
              >
                次の章へ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="brand-story" />
      <RecruitCTA />
    </div>
  )
}
