'use client'

import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
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

          <FadeInUp delay={500}>
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

      <RecruitCTA />
    </div>
  )
}
