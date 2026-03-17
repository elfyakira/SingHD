'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'

export default function LastBossPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 07
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              LAST BOSS
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              日本から「挑戦」が消え始めている
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Opening Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              今、日本は大きな転換点にいます。
              <br />
              少子高齢化。人口減少。地方の衰退。
              <br />
              ニュースでは様々な課題が語られています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              しかし私たちが感じている本当の危機は、
              <br />
              もっと静かに進んでいます。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="my-16 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                The Real Crisis
              </p>
              <p
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2563EB]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                「挑戦する人が
                <br />
                減っている社会」
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 静かに減っている挑戦 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                静かに減っている挑戦
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              かつて日本には挑戦する大人がたくさんいました。
              <br />
              新しい事業を起こす人。
              <br />
              海外に飛び出す人。
              <br />
              未知の分野に飛び込む人。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              でも今どうでしょうか。
              <br />
              「安定した仕事に就きなさい」
              <br />
              「リスクは取らない方がいい」
              <br />
              「失敗したらどうするの」
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              そんな言葉が当たり前のように飛び交う社会になりました。
              <br />
              挑戦することがリスクとして語られ
              <br />
              現状維持が正解とされる空気が広がっています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              その結果、多くの人が本当にやりたいことを封じ込め
              <br />
              「まあこれでいいか」と自分の人生を妥協するようになりました。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 子どもたちの「選択肢」が消えている ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#2563EB]/5">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                子どもたちの「選択肢」が消えている
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              この問題は大人だけの話ではありません。
              <br />
              今、子どもたちの世界でも同じことが起きています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              たとえば部活動。
              <br />
              少子化と教員不足により全国で部活動の数が減っています。
              <br />
              かつては当たり前にあった選択肢が消えつつあるのです。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              野球がやりたいのに野球部がない。
              <br />
              吹奏楽をやりたいのに吹奏楽部がない。
              <br />
              やりたいことがあるのに
              <br />
              それを始めることすらできない子どもたちが増えています。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              子どもたちから挑戦の機会が奪われている。
              <br />
              それは未来の可能性が失われていくということです。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Highlighted Quote ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="border-l-4 border-[#2563EB] bg-[#2563EB]/5 rounded-2xl pl-6 md:pl-8 py-6 pr-6">
              <p
                className="text-xl md:text-2xl lg:text-3xl text-[#2563EB] font-bold leading-relaxed"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                挑戦しないのではない。
                <br />
                挑戦できる環境が減っている。
                <br />
                それが今の日本です。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== この社会を誰が変えるのか ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#2563EB]/5">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                この社会を誰が変えるのか
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              政治家が変えてくれるのを待ちますか？
              <br />
              大企業が解決してくれるのを待ちますか？
              <br />
              誰かがやってくれるのを待ちますか？
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              私たちはそう思いません。
              <br />
              社会を変えるのは一人ひとりの行動です。
              <br />
              一人の人間が挑戦する姿が
              <br />
              周りの人に勇気を与え
              <br />
              その連鎖が社会を変えていく。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              だから私たちは自ら行動します。
              <br />
              誰かが変えてくれるのを待つのではなく
              <br />
              自分たちの手でこの社会を変えていく。
              <br />
              それがSingの存在意義です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 私たちの挑戦 ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                私たちの挑戦
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              Singは「人生を歌える社会をつくる」ことを掲げています。
              <br />
              それは理想論ではありません。
              <br />
              私たちが日々の仕事を通じて実現していく現実です。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              ミライクという事業を通じて
              <br />
              子どもたちに挑戦の場を届ける。
              <br />
              働く大人たちが誇りを持てる仕事をつくる。
              <br />
              挑戦する人が応援される社会をつくる。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              一つひとつは小さな一歩かもしれません。
              <br />
              でもその一歩が積み重なれば
              <br />
              必ず社会は変わると信じています。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== LAST BOSS Reveal ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-8">
              The Last Boss We Must Defeat
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="relative py-12 md:py-16">
              {/* Decorative borders */}
              <div className="absolute inset-0 border border-white/30 rounded-2xl" />
              <div className="absolute inset-2 border border-white/20 rounded-xl" />
              <div className="absolute inset-4 border border-white/10 rounded-lg" />

              <div className="relative z-10 px-8">
                <p className="text-xs tracking-[0.3em] uppercase text-[#F59E0B] mb-6">
                  LAST BOSS
                </p>
                <p
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                >
                  「挑戦が減り続ける社会」
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-2xl" />
            </div>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-white/80 leading-relaxed text-sm md:text-base mt-12 max-w-xl mx-auto">
              私たちが倒すべきラスボスは
              <br />
              どこか遠くにいるモンスターではありません。
              <br />
              この社会そのものに潜む「挑戦が減り続ける空気」です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== 次のプレイヤーへ ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Next Player
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                次のプレイヤーへ
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              このラスボスは一人では倒せません。
              <br />
              たくさんの仲間が必要です。
              <br />
              同じ志を持ち、同じ未来を信じ、
              <br />
              共に戦ってくれる仲間が。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-12">
              もしあなたがこう思っているなら――
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="space-y-4 mb-12 pl-4 border-l-2 border-[#2563EB]/40">
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold">
                ・この社会を変えたい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold">
                ・何かに挑戦したい
              </p>
              <p className="text-[#1C2A44] text-lg md:text-xl font-bold">
                ・自分の人生を本気で生きたい
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="text-center">
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
              <p
                className="text-2xl md:text-4xl font-bold text-[#2563EB]"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                次に挑戦するプレイヤーは、
                <br />
                あなたです。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="last-boss" />
      <RecruitCTA />
    </div>
  )
}
