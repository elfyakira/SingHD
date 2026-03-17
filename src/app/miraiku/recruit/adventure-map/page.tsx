'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import ChapterNav from '@/components/recruit/ChapterNav'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const levels = [
  {
    level: 1,
    title: '冒険のはじまり',
    description:
      '全てはここから始まります。右も左もわからない。何が正解かもわからない。でもそれでいいんです。最初は誰でも初心者です。大事なのは「始める」と決めたこと。ここでは社会人としての基本を学びます。挨拶、報連相、時間を守ること。当たり前のことを当たり前にできるようになること。それが最初の経験値です。',
    skills: ['社会人としての基礎', '仕事の進め方', 'チームで働く姿勢'],
  },
  {
    level: 10,
    title: '最初の壁',
    description:
      '冒険を始めてしばらく経つと最初の壁にぶつかります。思うように結果が出ない。周りと比べて焦る。自分には向いていないのではないかと不安になる。RPGでも同じです。最初のボスに何度も負けて心が折れそうになる。でもここが踏ん張りどころです。この壁を乗り越えた時あなたは確実にレベルアップしています。苦しい時こそ成長のチャンスです。',
    skills: null,
  },
  {
    level: 20,
    title: '自分の武器を見つける',
    description:
      '壁を乗り越える経験を重ねると少しずつ自分の強みが見えてきます。RPGでいう「得意な武器」が見つかる時期です。人と話すのが得意な人。分析が得意な人。企画を考えるのが好きな人。コツコツ積み上げるのが好きな人。自分だけの武器を見つけそれを磨いていく。それがあなたの戦闘スタイルになります。',
    skills: ['考える力', 'コミュニケーション力', '提案力', '課題解決力'],
  },
  {
    level: 30,
    title: '仲間を導く',
    description:
      '自分が成長すると次は後輩や仲間を導く立場になります。RPGでいうパーティーリーダーです。自分一人で戦うのではなくチーム全体で勝てるようにする。後輩に仕事を教え悩みを聞き一緒に成長する。「誰かの成長を支える」という新しい喜びを知る時期です。リーダーシップとは役職ではありません。仲間のために行動する姿勢そのものです。',
    skills: null,
  },
  {
    level: 50,
    title: 'チームで挑む',
    description:
      'より大きなミッションに挑む段階です。一人では達成できない目標にチームで挑戦します。メンバーそれぞれの強みを活かし弱みを補い合い全員で前に進む。時にはぶつかることもあるでしょう。意見が合わないこともあるでしょう。でもそれを乗り越えた先にチームでしか味わえない達成感があります。',
    skills: null,
  },
  {
    level: 100,
    title: '人生の主人公になる',
    description:
      'ここまでの冒険を通じてあなたは気づくはずです。本当のレベルアップとはスキルや肩書きではなく「自分の人生を自分で選べるようになること」だと。どんな仕事をするか。どんな人と働くか。どんな人生を生きるか。全て自分で選び自分で責任を持つ。それが人生の主人公になるということです。Singでの冒険はここがゴールではありません。ここからがあなたの本当の冒険の始まりです。',
    skills: null,
  },
]

export default function AdventureMapPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 08
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              ADVENTURE MAP
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90">
              Sing 冒険マップ
              <br />
              あなたのレベルアップの旅
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              人生というRPGで、強くなるために必要なのは経験値です。
              <br />
              どんなに才能があっても
              <br />
              経験値を積まなければレベルは上がりません。
            </p>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8">
              Singでは、あなたが経験値を積み
              <br />
              レベルアップしていくための冒険マップを用意しています。
              <br />
              どんなステージが待っているのか。
              <br />
              どんなスキルが身につくのか。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              あなたの冒険の道のりを、ここで紹介します。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Level Cards Timeline ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical blue line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#2563EB]/50 to-[#2563EB]" />

            <div className="space-y-16">
              {levels.map((item, index) => (
                <FadeInUp key={item.level} delay={index * 100}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Level badge on the line */}
                    <div className="absolute left-0 top-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                      <div className="w-12 md:w-16 h-12 md:h-16 bg-[#2563EB]/10 border-2 border-[#2563EB] rounded-xl flex items-center justify-center relative z-10">
                        <span
                          className="text-[#2563EB] text-xs md:text-sm font-bold"
                          style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                        >
                          Lv.{item.level}
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="bg-white border-2 border-[#2563EB]/20 rounded-2xl p-6 md:p-8">
                      <p
                        className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2"
                        style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
                      >
                        LEVEL {item.level}
                      </p>
                      <h3 className="text-lg md:text-xl font-bold text-[#1C2A44] mb-4">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-[#2563EB]/40 rounded-full mb-4" />
                      <p className="text-gray-700 leading-loose text-sm md:text-base">
                        {item.description}
                      </p>

                      {item.skills && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-3 py-1.5 border-2 border-[#2563EB]/30 text-[#2563EB] rounded-full tracking-wider"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== そして、次の冒険へ ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                そして、次の冒険へ
              </h2>
              <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-gray-700 leading-loose text-sm md:text-base mb-8 text-center">
              Singでの経験は、あなたの人生の中の
              <br />
              一つの冒険に過ぎません。
              <br />
              でも、ここで得た経験値は
              <br />
              あなたの人生を確実に変えます。
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p className="text-gray-700 leading-loose text-sm md:text-base text-center">
              スキルだけではありません。
              <br />
              仲間と出会い、壁を乗り越え、
              <br />
              自分の可能性を信じられるようになる。
              <br />
              それがSingでの冒険で得られる
              <br />
              最大の経験値です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== NEXT QUEST ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">
              NEXT QUEST
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-8" />
          </FadeInUp>

          <FadeInUp delay={300}>
            <p
              className="text-2xl md:text-4xl font-bold text-[#2563EB] mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの物語を
              <br />
              Singでスタートさせませんか？
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <Link
              href="/miraiku/recruit/jobs"
              className="inline-block bg-[#F59E0B] text-white px-10 py-4 text-sm font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-all duration-300"
            >
              冒険に参加する
            </Link>
          </FadeInUp>
        </div>
      </section>

      <ChapterNav currentId="adventure-map" />
      <RecruitCTA />
    </div>
  )
}
