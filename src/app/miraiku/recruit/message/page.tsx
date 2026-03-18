'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 12
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              LAST MESSAGE
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              未来の仲間へ
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Opening Message ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              ここまで読んでくれて本当にありがとうございます。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              この採用サイトには、私たちの想いをすべて詰め込みました。
              <br />
              人生のこと。挑戦のこと。仲間のこと。
              <br />
              そして、この会社を作った理由。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              もしかすると「少し熱い会社だな」と感じたかもしれません。
              <br />
              でも、それでいいと思っています。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2A44] leading-relaxed my-16 text-center"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              なぜなら私たちは本気で
              <br />
              <span className="text-[#2563EB]">人生は一度きり</span>
              だと思っているからです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 迷いと答え ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              人は誰でも人生の途中で迷います。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="my-12 space-y-4 text-center">
              <p className="text-gray-600 text-base md:text-lg">
                自分は何がしたいのか。
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                何のために働くのか。
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                どんな人生を生きたいのか。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              私もずっとその答えを探してきました。
              <br />
              何度も悩み、何度も失敗して、
              <br />
              それでも前に進んできました。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              その中で一つだけ分かったことがあります。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Key Revelation ===== */}
      <section className="py-24 lg:py-36 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="relative py-12 md:py-16">
              <div className="absolute inset-0 border-2 border-[#2563EB]/20 rounded-2xl" />
              <div className="absolute inset-3 border border-[#2563EB]/10 rounded-xl" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2563EB] rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#2563EB] rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#2563EB] rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#2563EB] rounded-br-2xl" />

              <div className="relative z-10 px-8">
                <p
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2563EB] leading-tight"
                  style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                >
                  「人生は、
                  <br />
                  誰かに与えられるものではない。」
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-2xl font-bold text-[#1C2A44] mt-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生は自分で作るものです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 選択 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center space-y-6 mb-16">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                挑戦するかどうかも。
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                立ち上がるかどうかも。
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                誰と生きるかも。
              </p>
              <p className="text-[#1C2A44] text-xl md:text-2xl font-bold leading-relaxed mt-8">
                すべて自分で選ぶことができます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 主人公の証拠 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-6">
              もしあなたが
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="my-8 space-y-3 pl-4 border-l-2 border-[#2563EB]/40">
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                もっと成長したい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                もっと挑戦したい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold py-1">
                自分の可能性を試したい
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-8">
              そう思っているなら、
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-xl md:text-3xl font-bold text-[#2563EB] text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              その気持ちはきっとあなたの中にある
              <br />
              「主人公の証拠」です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== RPGの主人公のように ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              Singホールディングスはまだまだ小さな会社です。
              <br />
              これからもたくさんの壁にぶつかるでしょう。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              でも、その壁を越えるたびに
              <br />
              私たちは少しずつ強くなっていきます。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-lg md:text-xl text-[#1C2A44] font-bold text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              RPGの主人公が仲間と共に冒険するように。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 呼びかけ ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-[2.2] text-base md:text-lg mb-10">
              もしあなたが
              <br />
              ただ仕事をするのではなく
              <br />
              <span className="text-[#1C2A44] font-bold">
                人生を本気で生きたい
              </span>
              <br />
              そう思うなら
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-3xl font-bold text-[#2563EB] text-center my-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              この冒険にあなたの力を貸してほしい。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== この場所の意味 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-gray-600 leading-[2.2] text-base md:text-lg mb-8">
              この会社はあなたの人生を決める場所ではありません。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2A44]"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの人生を
              <span className="text-[#2563EB]">本気で生きる</span>
              場所です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Closing Statement ===== */}
      <section className="py-24 lg:py-40 px-4 bg-[#2563EB] relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInUp>
            <div className="w-16 h-px bg-white/50 mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生は一度きり。
              <br />
              だからこそ胸を張って生きたい。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="w-12 h-px bg-white/40 mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={600}>
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F59E0B] mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={800}>
            <div className="w-12 h-px bg-white/40 mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={1000}>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-white/90 font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険を
              <br />
              Singホールディングスで。
            </p>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
