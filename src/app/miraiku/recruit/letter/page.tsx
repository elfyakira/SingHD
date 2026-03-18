'use client'

import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              Chapter 04
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              Letter
            </h1>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              子供たちへの手紙
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          </FadeInUp>
        </div>
      </section>

      {/* ===== Letter Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="bg-[#FAFAF5] border-2 border-[#2563EB]/20 rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="border-l-4 border-[#2563EB] pl-6 md:pl-8">
                <FadeInUp delay={100}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    君たちが大きくなって、
                    <br />
                    もしこの文章を読むことがあったら
                    <br />
                    少しだけ聞いてほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    今思えば、
                    <br />
                    人生を大切に使っていたとは
                    <br />
                    言えない時間だったと思う。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    お父さんにとって
                    <br />
                    それが君たちだった。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
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
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    だから君たちも
                    <br />
                    きっと大丈夫だ。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base">
                    いつか君たちが
                    <br />
                    自分の人生を胸を張って歩いている姿を
                    <br />
                    楽しみにしています。
                  </p>
                </FadeInUp>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== "そして、未来の仲間へ" Section ===== */}
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
              className="text-[#1C2A44] text-base md:text-lg leading-[2] mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              この物語の続きは、
              <br />
              あなたと一緒に作っていきたい。
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <div className="text-center">
              <Link
                href="/miraiku/recruit/sing-name"
                className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
              >
                次の章へ
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="letter" />
      <RecruitCTA />
    </div>
  )
}
