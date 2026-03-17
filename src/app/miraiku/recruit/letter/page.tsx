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
                  <p
                    className="text-[#1C2A44] text-lg md:text-xl font-bold leading-loose mb-10"
                    style={{
                      fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                    }}
                  >
                    君たちへ
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    君たちが大きくなったとき、
                    <br />
                    この手紙を読んでくれているでしょうか。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    パパはね、君たちが生まれてきてくれた日のことを
                    <br />
                    今でもはっきりと覚えています。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    小さな手で、パパの指をぎゅっと握ってくれたあの瞬間。
                    <br />
                    「この子のために、何かを残したい。」
                    <br />
                    そう思いました。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div className="w-12 h-px bg-gray-300 my-12" />
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    パパは昔、特に何もない普通の人間でした。
                    <br />
                    夢もなく、目標もなく、ただなんとなく毎日を過ごしていた。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    でも、君たちが生まれてきてくれたことで、変わりました。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    「この子たちが大人になったとき、
                    <br />
                    胸を張って生きられる社会を作りたい。」
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    「大人って楽しそうだな」
                    <br />
                    「早く大人になりたいな」
                    <br />
                    そう思ってもらえるような社会にしたい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    それがパパの、この会社を作った理由です。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div className="w-12 h-px bg-gray-300 my-12" />
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    君たちがこの手紙を読んでいるころ、
                    <br />
                    パパはまだ走り続けているかもしれません。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    もしかしたら、つまずいて転んでいるかもしれません。
                    <br />
                    でも、きっと立ち上がって、また前を向いているはずです。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    なぜなら、君たちがいるから。
                    <br />
                    君たちの未来を、少しでも明るくしたいから。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p
                    className="text-[#1C2A44] text-base md:text-lg leading-[2] mb-8"
                    style={{
                      fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                    }}
                  >
                    君たちへ伝えたいことは、たったひとつです。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p
                    className="text-[#2563EB] text-lg md:text-xl font-bold leading-[2] mb-8"
                    style={{
                      fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                    }}
                  >
                    自分の人生を、自分で歌ってほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    誰かに決められた道ではなく、
                    <br />
                    自分が選んだ道を歩いてほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    たとえ失敗しても、遠回りしても、
                    <br />
                    「自分で選んだ」と胸を張れる人生を歩んでほしい。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
                    パパは、そんな君たちのことを
                    <br />
                    いつだって応援しています。
                  </p>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <p className="text-gray-500 text-sm leading-[2] mt-12 text-right">
                    大好きな君たちへ
                    <br />
                    パパより
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
              この手紙は、私の子供たちに宛てたものです。
              <br />
              でも、今これを読んでいるあなたにも、伝えたいことがあります。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              私がこの会社を作ったのは、
              <br />
              子供たちに「大人って楽しそうだな」と思ってもらえる社会を作りたかったから。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              そのためには、まず大人である私たち自身が
              <br />
              本気で人生を楽しみ、本気で挑戦し続けなければなりません。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-gray-700 leading-[2] text-sm md:text-base mb-8">
              あなたがもし、「自分の人生をもっと本気で生きたい」と思っているなら。
              <br />
              「子供たちに誇れるような大人になりたい」と思っているなら。
            </p>
          </FadeInUp>

          <FadeInUp delay={500}>
            <p
              className="text-[#1C2A44] text-base md:text-lg leading-[2] mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              この冒険を、一緒に歩みませんか。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
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
