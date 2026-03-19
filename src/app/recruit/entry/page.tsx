'use client'

import RecruitHeader from '@/components/recruit/RecruitHeader'
import RecruitCTA from '@/components/recruit/RecruitCTA'
import FadeInUp from '@/components/animations/FadeInUp'
import Link from 'next/link'

const careerExamples = [
  {
    path: '営業職入社 → 管理職 → 取締役',
    detail: '入社2年｜年収600万',
  },
  {
    path: '事務職入社 → 完全在宅・管理職 → 部長',
    detail: '入社2年｜年収500万',
  },
  {
    path: '営業職入社 → 管理職 → 起業',
    detail: '入社2年｜年収600万',
  },
  {
    path: '起業支援 → 会社の代表取締役',
    detail: '創業2年目｜年商2億',
  },
]

const jobDetails = [
  {
    label: '職種',
    value: '営業、営業事務、クリエーター、コンサルタント、社長、代表取締役 など',
  },
  {
    label: '仕事内容',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '給与',
    value: 'あなたに合わせて決めます',
  },
  {
    label: '福利厚生',
    value:
      '退職金あり、賞与あり、大型連休あり、有給あり、ウォーターサーバーあり、駐車場有',
  },
  {
    label: '応募資格',
    value: 'この会社で仕事をしたいと思ったあなたの熱量',
  },
  {
    label: '応募方法',
    value: '電話、メール、DM など何でもOK',
  },
]

const contactMethods = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#1C2A44]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    title: '電話',
    description: 'お電話でのお問い合わせ',
    sub: 'お気軽にご連絡ください',
    href: null,
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#1C2A44]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: 'メール',
    description: 'お問い合わせフォーム',
    sub: 'フォームから送信できます',
    href: '/contact',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#1C2A44]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    title: 'DM',
    description: 'SNSのDMでもOK',
    sub: 'Instagram・X など',
    href: null,
  },
]

export default function EntryPage() {
  return (
    <div className="min-h-screen bg-white text-[#1C2A44]">
      <RecruitHeader />

      {/* ===== Chapter Header + Hero Image ===== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/open-door.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp delay={200}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              ENTRY
            </h1>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="w-16 h-px bg-white mx-auto mb-6" />
          </FadeInUp>

          <FadeInUp delay={400}>
            <p className="text-lg md:text-xl text-white">
              未来の仲間へ
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Opening Message ===== */}
      <section id="message" className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
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
              <span className="text-[#F59E0B]">人生は一度きり</span>
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
            <div className="py-12 md:py-16 px-8 bg-white rounded-2xl shadow-lg">
              <p
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1C2A44] leading-tight"
                style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
              >
                「人生は、
                <br />
                誰かに与えられるものではない。」
              </p>
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
            <div className="my-8 space-y-3 pl-6 bg-[#1C2A44]/5 py-6 rounded-lg">
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
              className="text-xl md:text-3xl font-bold text-[#1C2A44] text-center my-12"
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
              className="text-xl md:text-3xl font-bold text-[#1C2A44] text-center my-12"
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
              <span className="text-[#F59E0B]">本気で生きる</span>
              場所です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Closing Statement ===== */}
      <section className="relative py-24 lg:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/party-welcome.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-px bg-white mx-auto mb-16" />
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
            <div className="w-12 h-px bg-white mx-auto mb-16" />
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
            <div className="w-12 h-px bg-white mx-auto mb-16" />
          </FadeInUp>

          <FadeInUp delay={1000}>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-white font-bold"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険を
              <br />
              Singホールディングスで。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Career Possibilities ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                CAREER PATH
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                起業も社長も社員も可能
              </h2>
              <div className="w-16 h-px bg-[#1C2A44] mx-auto mb-6" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Singでは、社員としてのキャリアだけでなく、
                <br />
                起業・経営者への道も全力で支援します。
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerExamples.map((example, index) => (
              <FadeInUp key={index} delay={index * 100}>
                <div className="bg-[#FAFAF5] rounded-2xl p-6 shadow-sm">
                  <p className="text-[#F59E0B] text-xs font-bold mb-2">{example.detail}</p>
                  <p className="text-[#1C2A44] font-bold text-sm leading-relaxed">
                    {example.path}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Job Details Table ===== */}
      <section id="jobs" className="py-20 lg:py-32 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-px bg-[#1C2A44]" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C2A44]"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                募集要項
              </h2>
            </div>
          </FadeInUp>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            {jobDetails.map((item, index) => (
              <FadeInUp key={index} delay={index * 80}>
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF5]'
                  }`}
                >
                  <div className="md:w-40 lg:w-48 flex-shrink-0 px-6 py-4 md:py-5 bg-[#1C2A44]/5">
                    <span className="text-sm text-[#1C2A44] font-medium">
                      {item.label}
                    </span>
                  </div>
                  <div className="px-6 py-4 md:py-5 flex-1">
                    <span className="text-sm md:text-base text-[#1C2A44] leading-relaxed">
                      {item.value}
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Application Section ===== */}
      <section className="py-20 lg:py-32 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[#1C2A44] mb-4">
                JOIN THE ADVENTURE
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1C2A44] mb-4"
                style={{
                  fontFamily: "'Times New Roman', 'Yu Mincho', serif",
                }}
              >
                冒険に参加する
              </h2>
              <div className="w-16 h-px bg-[#1C2A44] mx-auto mb-6" />
              <p className="text-gray-600 text-sm md:text-base">
                あなたの物語を、ここから始めよう。
              </p>
            </div>
          </FadeInUp>

          {/* Contact method cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <FadeInUp key={index} delay={index * 150}>
                {method.href ? (
                  <Link href={method.href} className="block group">
                    <div className="bg-[#FAFAF5] hover:bg-[#F0EDE8] rounded-2xl p-8 text-center transition-all duration-300 h-full shadow-sm hover:shadow-md">
                      <div className="flex justify-center mb-5">
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#1C2A44] mb-2 group-hover:text-[#F59E0B] transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {method.description}
                      </p>
                      <p className="text-xs text-gray-500">{method.sub}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="bg-[#FAFAF5] rounded-2xl p-8 text-center h-full shadow-sm">
                    <div className="flex justify-center mb-5">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1C2A44] mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {method.description}
                    </p>
                    <p className="text-xs text-gray-500">{method.sub}</p>
                  </div>
                )}
              </FadeInUp>
            ))}
          </div>

          {/* Main CTA button */}
          <FadeInUp delay={500}>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#F59E0B] text-white px-12 py-5 text-lg font-bold tracking-wider rounded-full hover:bg-[#D97706] transition-colors shadow-md"
              >
                ▶ 冒険に参加する
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== Party Welcome ===== */}
      <section className="py-12 px-4 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl">
          <FadeInUp>
            <img src="/img/recruit/entry/party-welcome.png" alt="仲間の歓迎" className="w-full h-auto" />
          </FadeInUp>
        </div>
      </section>

      {/* ===== Final Closing ===== */}
      <section className="relative py-24 lg:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/recruit/entry/open-door.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C2A44]/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="w-16 h-px bg-white mx-auto mb-12" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              人生を、歌え。
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p
              className="text-lg md:text-2xl text-white font-bold mb-16"
              style={{ fontFamily: "'Times New Roman', 'Yu Mincho', serif" }}
            >
              あなたの冒険をSingホールディングスで。
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <div className="w-12 h-px bg-white mx-auto mb-8" />
            <Link
              href="/"
              className="inline-block text-sm text-white hover:text-[#F59E0B] transition-colors tracking-wider"
            >
              コーポレートサイトへ
            </Link>
          </FadeInUp>
        </div>
      </section>

      <RecruitCTA />
    </div>
  )
}
