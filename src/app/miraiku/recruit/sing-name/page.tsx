'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'

export default function SingNamePage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 05
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              OUR NAME
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              「Sing」という名前に込めた想い
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Main Story ===== */}
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

      {/* ===== Closing Statement ===== */}
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

      <ChapterNav currentId="sing-name" />
      <RecruitCTA />
    </div>
  )
}
