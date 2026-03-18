'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

const oaths = [
  {
    number: '01',
    title: '主人公として生きる',
    image: '/img/recruit/oath/oath-01.png',
    description:
      '自分の人生の主人公は自分です。環境のせいにしない。誰かのせいにもしない。自分の人生は自分の意思で切り開く。',
  },
  {
    number: '02',
    title: '挑戦から逃げない',
    image: '/img/recruit/oath/oath-02.png',
    description:
      '成長には挑戦が必要です。失敗を恐れるより挑戦しないことを恐れよう。挑戦する人だけが次のステージへ進める。',
  },
  {
    number: '03',
    title: '仲間を大切にする',
    image: '/img/recruit/oath/oath-03.png',
    description:
      'RPGの主人公は一人では冒険を続けられません。仲間がいるから困難を越えられる。互いに支え合い互いに高め合う。それがSingのチームです。',
  },
  {
    number: '04',
    title: '学び続ける',
    image: '/img/recruit/oath/oath-04.png',
    description:
      '人生のレベルアップは学びの積み重ねです。昨日の自分より今日の自分。今日の自分より明日の自分。成長を止めない人が未来を変えていく。',
  },
  {
    number: '05',
    title: '誇れる仕事をする',
    image: '/img/recruit/oath/oath-05.png',
    description:
      '子供たちは大人の背中を見ています。だから私たちは胸を張って語れる仕事人の役に立つ仕事を大切にします。',
  },
  {
    number: '06',
    title: '人の可能性を信じる',
    image: '/img/recruit/oath/oath-06.png',
    description:
      '人は誰でも成長できる。誰でも人生を変えることができる。私たちはその可能性を信じ続けます。',
  },
]

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

export default function OathPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header ===== */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6">
              CHAPTER 10
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={serifStyle}
            >
              ADVENTURER&apos;S OATH
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              冒険者の誓い
              <br />
              <span className="text-base text-white/70">
                〜Singホールディングスで働く私たちの約束〜
              </span>
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <p className="text-gray-700 leading-loose text-sm md:text-base">
              人生は、一度きりのRPGです。
              <br />
              私たちは、その人生をただ過ごすのではなく、
              <br />
              主人公として生きる人でありたい。
              <br />
              <br />
              この誓いは、Singホールディングスで
              <br />
              冒険を共にする仲間との約束です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Oath Visual ===== */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <FadeInUp>
            <img src="/img/recruit/oath/oath-circle.png" alt="冒険者の誓い" className="w-full h-auto rounded-2xl" />
          </FadeInUp>
        </div>
      </section>

      {/* ===== 6 Oaths ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {oaths.map((oath, index) => (
              <FadeInUp key={oath.number} delay={index * 100}>
                <div className="py-10 border-b border-gray-200 first:pt-0 last:border-b-0">
                  <div className="flex gap-6 md:gap-10">
                  {/* Image */}
                  <div className="flex-shrink-0 hidden md:block">
                    <img src={oath.image} alt={oath.title} className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-xl" />
                  </div>
                  {/* Large translucent blue number */}
                  <div className="flex-shrink-0">
                    <span
                      className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2563EB]/20"
                      style={serifStyle}
                    >
                      {oath.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1C2A44] mb-4"
                      style={serifStyle}
                    >
                      {oath.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {oath.description}
                    </p>
                  </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 最後の誓い (Closing) ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#2563EB]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-8">
              最後の誓い
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-xl md:text-2xl font-bold text-white leading-loose mb-12"
              style={serifStyle}
            >
              私たちはただ働くのではなく
              <br />
              未来をつくる冒険者です。
              <br />
              <br />
              壁があっても前に進む。
              <br />
              失敗しても立ち上がる。
              <br />
              仲間と共に次のステージへ進む。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-10" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F59E0B] leading-relaxed"
              style={serifStyle}
            >
              人生を、歌え。
            </p>
            <p
              className="text-lg md:text-xl text-white/90 mt-6"
              style={serifStyle}
            >
              この冒険をSingホールディングスで。
            </p>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
