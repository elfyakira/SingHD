'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const levels = [
  {
    level: 1,
    title: '冒険のはじまり',
    image: '/img/recruit/adventure-map/level-1.png',
    description:
      '社会人としての第一歩。最初はわからないことばかり。不安もあるかもしれません。でも大丈夫です。仲間と共に学びながら、少しずつ経験値を積んでいきます。',
    skills: ['社会人としての基礎', '仕事の進め方', 'チームで働く姿勢'],
  },
  {
    level: 10,
    title: '最初の壁',
    image: '/img/recruit/adventure-map/level-10.png',
    description:
      '仕事に慣れてきた頃、最初の大きな壁に出会います。思うように成果が出ない。失敗してしまう。自分に自信が持てない。多くの人がここで悩みます。でも、この壁を越えることであなたは大きく成長します。仲間と共に考え、挑戦を続けることで次のステージへ進みます。',
    skills: null,
  },
  {
    level: 20,
    title: '自分の武器を見つける',
    image: '/img/recruit/adventure-map/level-20.png',
    description:
      '少しずつ経験を積む中で、自分の強みが見えてきます。考える力。コミュニケーション力。提案力。課題解決力。人それぞれ得意な武器があります。その武器を磨くことであなたはチームの中で大きな力を発揮していきます。',
    skills: ['考える力', 'コミュニケーション力', '提案力', '課題解決力'],
  },
  {
    level: 30,
    title: '仲間を導く',
    image: '/img/recruit/adventure-map/level-30.png',
    description:
      'ここまで来ると後輩ができたりチームの中で頼られる存在になっていきます。自分の成長だけでなく仲間の成長を支える。それが次のレベルです。人を導く経験はあなた自身をさらに強くします。',
    skills: null,
  },
  {
    level: 50,
    title: 'チームで挑む',
    image: '/img/recruit/adventure-map/level-50.jpg',
    description:
      '一人の力には限界があります。しかしチームには無限の可能性があります。それぞれの強みを活かし、弱みを補いながらチームとして成果を出す。ここであなたはリーダーとしての力を身につけていきます。',
    skills: null,
  },
  {
    level: 100,
    title: '人生の主人公になる',
    image: '/img/recruit/adventure-map/level-100.jpg',
    description:
      'ここまで来たあなたはもう以前の自分ではありません。多くの経験を積み、多くの壁を越え、多くの仲間と出会ってきました。気づいた時には自分の人生を自分の意思で切り開ける人になっているはずです。',
    skills: null,
  },
]

export default function AdventureMapPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img/recruit/adventure-map/level-1.png" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
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
                    <div className="bg-white border-2 border-[#2563EB]/20 rounded-2xl overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                      <div className="md:w-40 lg:w-48 flex-shrink-0 bg-gradient-to-b md:bg-gradient-to-r from-[#2563EB]/5 to-transparent p-4 flex items-center justify-center">
                        <img src={item.image} alt={item.title} className="w-24 h-24 md:w-32 md:h-32 object-contain" />
                      </div>
                      <div className="p-6 md:p-8 flex-1">
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
              href="/recruit/entry"
              className="inline-block bg-[#F59E0B] text-white px-10 py-4 text-sm font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-all duration-300"
            >
              冒険に参加する
            </Link>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
