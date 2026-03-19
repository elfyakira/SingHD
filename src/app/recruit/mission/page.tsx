import Link from 'next/link'
import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'

const serifStyle = { fontFamily: "'Times New Roman', 'Yu Mincho', serif" }

const values = [
  { title: '主人公として生きる', description: '自分の人生の責任を持つ', image: '/img/recruit/oath/oath-01.png' },
  { title: '挑戦する', description: '成長のために行動する', image: '/img/recruit/oath/oath-02.png' },
  { title: '仲間を大切にする', description: '信頼こそ最大の力', image: '/img/recruit/oath/oath-03.png' },
  { title: '学び続ける', description: '昨日の自分を超える', image: '/img/recruit/oath/oath-04.png' },
  { title: '誇れる仕事をする', description: '社会に価値を届ける', image: '/img/recruit/oath/oath-05.png' },
]

const sevenPromises = [
  {
    number: '01',
    title: '自分の人生の主人公として生きる',
    description:
      '私たちは自分の人生を人任せにしません。環境のせいにもしません。どんな状況でも自分で考え自分で選び自分で行動します。うまくいかない時も誰かのせいにせず自分にできることを探します。なぜなら人生の主人公は自分自身だからです。',
  },
  {
    number: '02',
    title: '挑戦から逃げない',
    description:
      '挑戦には不安がつきものです。失敗するかもしれない。恥をかくかもしれない。でも挑戦しない人生に成長はありません。私たちは完璧を求めるよりもまず一歩を踏み出します。転んでも立ち上がりまた前に進みます。',
  },
  {
    number: '03',
    title: '仲間を大切にする',
    description:
      '一人でできることには限界があります。でも仲間がいれば乗り越えられる壁がある。私たちは互いを尊重し助け合い信じ合います。仲間の成功を自分のことのように喜び仲間の苦しみに寄り添える存在でありたいと思います。',
  },
  {
    number: '04',
    title: '学び続ける',
    description:
      '昨日の自分より今日の自分が少しでも成長していること。それが私たちの誇りです。本を読み人の話を聞き新しいことに挑戦し経験から学ぶ。学ぶことをやめた時人は成長を止めます。私たちは生涯学び続ける人でありたい。',
  },
  {
    number: '05',
    title: '誠実である',
    description:
      '嘘をつかない。ごまかさない。逃げない。当たり前のことを当たり前にやる。それが信頼の土台です。誠実さは才能ではなく意思です。私たちは常に正直でありお客様にも仲間にも社会にも誠実であることを選びます。',
  },
  {
    number: '06',
    title: '社会に価値を届ける',
    description:
      '私たちの仕事はただお金を稼ぐためだけのものではありません。私たちの仕事を通じて誰かの人生が少しでも良くなること。社会が少しでも前に進むこと。それが私たちの仕事の意味です。自分の仕事に誇りを持てる生き方をします。',
  },
  {
    number: '07',
    title: '人生を、歌う',
    description:
      '私たちは「歌うように生きる」ことを大切にします。楽しい時も苦しい時も自分の声で自分の人生を表現する。誰かの人生を生きるのではなく自分の人生を全力で歌う。それがSingの社員としての生き方です。',
  },
]

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Header ===== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/about/mission.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/75" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={serifStyle}
            >
              MISSION &amp; VISION
            </h1>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-6" />
          </FadeInUp>
          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white">企業理念</p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Corporate Philosophy ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8 text-center">
              Corporate Philosophy
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C2A44] mb-12 text-center"
              style={serifStyle}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <p className="text-gray-700 leading-loose text-sm md:text-base max-w-xl mx-auto text-center">
              私たちは、一人ひとりが自分の人生を
              <br />
              自分の声で歌えるようになる社会を目指しています。
              <br />
              誰もが主人公として、自分らしく生きられる世界へ。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <FadeInUp>
            <div className="bg-[#FAFAF5] rounded-2xl p-8 md:p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-4">
                ミッション（使命）
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                人生を歌える社会をつくる
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                人が自分の可能性を信じ、挑戦し、誇りを持って働ける社会をつくる。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div className="bg-[#FAFAF5] rounded-2xl p-8 md:p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[#2563EB] mb-4">
                ビジョン（目指す未来）
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                尊敬される大人であふれる社会へ
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                子どもたちが「早く大人になりたい」と思える社会。
                <br />
                胸を張って生きる大人が未来をつくる。
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Values
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                バリュー（価値観）
              </h2>
              <div className="w-16 h-1 bg-[#1C2A44] rounded-full mx-auto" />
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <FadeInUp key={value.title} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <p
                      className="text-[#2563EB] text-lg font-bold mb-1"
                      style={serifStyle}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3
                      className="text-xl font-bold text-[#1C2A44] mb-3"
                      style={serifStyle}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Visual Break ===== */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <img
              src="/img/recruit/oath/oath-circle.jpg"
              alt="冒険者の誓い"
              className="w-full h-auto rounded-2xl"
            />
          </FadeInUp>
        </div>
      </section>

      {/* ===== Seven Promises ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">
                Seven Promises
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={serifStyle}
              >
                社員憲章 7つの約束
              </h2>
              <div className="w-16 h-1 bg-[#1C2A44] rounded-full mx-auto mb-8" />
              <p className="text-gray-700 leading-loose text-sm md:text-base max-w-xl mx-auto">
                私たちはただ働くためにここにいるのではありません。
                <br />
                人生という一度きりの物語を
                <br />
                本気で生きるためにここに集まっています。
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-8">
            {sevenPromises.map((promise, index) => (
              <FadeInUp key={promise.number} delay={index * 80}>
                <div className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <span
                      className="text-3xl md:text-4xl font-bold text-[#2563EB]"
                      style={serifStyle}
                    >
                      {promise.number}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#1C2A44] mb-3">
                      {promise.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {promise.description}
                    </p>
                    {index < sevenPromises.length - 1 && (
                      <div className="w-full h-px bg-gray-200 mt-8" />
                    )}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Closing ===== */}
      <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/last-boss/heroes-stand.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F59E0B]"
              style={serifStyle}
            >
              主人公になれ。
              <br />
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <div className="mt-16">
              <Link
                href="/recruit/entry"
                className="inline-block bg-[#F59E0B] text-white px-8 py-4 text-sm tracking-wider rounded-full font-bold hover:bg-[#D97706] transition-all duration-300"
              >
                ▶ 冒険に参加する
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
