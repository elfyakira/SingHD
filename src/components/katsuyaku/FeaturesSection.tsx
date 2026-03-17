import FadeInUp from '@/components/animations/FadeInUp'

export default function FeaturesSection() {
  return (
    <div>
      {/* 強み① ── ダーク背景 */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* テキスト */}
              <div className="w-full lg:w-[55%]">
                <h3 className="text-xl lg:text-2xl font-bold mb-6 leading-snug">
                  現場伴走型
                  <span className="text-accent-line mx-2">──</span>
                  <br className="lg:hidden" />
                  社員のように、入り込む。
                </h3>
                <p className="text-[15px] lg:text-base text-white/80 leading-[1.8] mb-8">
                  一般的なコンサルティングは、外部から助言・指導が中心です。
                  報告は表向きになりがちで、理論は正しくても現場に定着しません。
                </p>
                <p className="text-[15px] lg:text-base text-white/90 leading-[1.8]">
                  カツヤクは違います。
                  代表自らが現場に入り、社員と同じ目線で対話します。
                  信頼関係の中から自然と本音が出る環境をつくり、
                  エンゲージメントの底上げから始めます。
                </p>
              </div>

              {/* 比較表 */}
              <div className="w-full lg:w-[45%]">
                <div className="border border-white/20 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-3">
                    <div className="p-3 lg:p-4 border-b border-r border-white/20" />
                    <div className="p-3 lg:p-4 border-b border-r border-white/20 text-center text-sm text-white/50">
                      一般的なコンサル
                    </div>
                    <div className="p-3 lg:p-4 border-b border-white/20 text-center text-sm text-cta font-bold">
                      カツヤク
                    </div>
                  </div>
                  {[
                    { label: '立場', general: '外部アドバイザー', katsuyaku: '現場の一員' },
                    { label: '情報', general: '表向きの報告', katsuyaku: '本音ベース' },
                    { label: '手法', general: '理論・フレームワーク', katsuyaku: '信頼関係から' },
                    { label: '成果', general: '報告書', katsuyaku: '行動変容' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3">
                      <div className="p-3 lg:p-4 border-b border-r border-white/20 text-sm font-medium">
                        {row.label}
                      </div>
                      <div className="p-3 lg:p-4 border-b border-r border-white/20 text-sm text-white/40 text-center">
                        {row.general}
                      </div>
                      <div className="p-3 lg:p-4 border-b border-white/20 text-sm text-white font-medium text-center">
                        {row.katsuyaku}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 強み② ── 白背景 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-[700px] mx-auto text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 leading-snug">
                完全カスタマイズ
                <span className="text-accent-line mx-2">──</span>
                <br className="lg:hidden" />
                決まった型は、一切ない。
              </h3>
              <p className="text-[15px] lg:text-base text-[#5C5C5C] leading-[1.8] mb-10">
                業種も規模も課題も違う会社に、同じフレームワークを当てはめても意味がありません。
                独自の匿名ヒアリングで心理的安全性を保ちながら本音を引き出し、
                独自のデータ抽出手法で事実ベースの課題を可視化。
                御社だけの現実に向き合い、成果が出るまで伴走するプロジェクトを設計します。
              </p>

              {/* 3ステップのフロー */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
                {[
                  { icon: '💬', label: '匿名ヒアリング', sub: '本音を引き出す' },
                  { icon: '📊', label: 'データ抽出・分析', sub: '事実ベースで可視化' },
                  { icon: '📋', label: 'カスタマイズ提案', sub: '御社だけの設計' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 lg:gap-0">
                    <div className="w-[140px] text-center">
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <p className="text-sm font-bold text-primary">{step.label}</p>
                      <p className="text-xs text-[#5C5C5C] mt-1">{step.sub}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden lg:block text-accent-line text-2xl mx-4">→</div>
                    )}
                    {i < 2 && (
                      <div className="block lg:hidden text-accent-line text-xl">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 強み③ ── ウォームグレー背景 */}
      <section className="py-16 lg:py-20 bg-warm-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* フロー図 */}
              <div className="w-full lg:w-[45%]">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  {['採用', '定着', '戦力化'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-24 lg:w-28 py-4 bg-primary text-white text-center rounded-lg font-bold text-sm">
                        {step}
                      </div>
                      {i < 2 && (
                        <>
                          <span className="hidden lg:block text-accent-line text-xl">→</span>
                          <span className="block lg:hidden text-accent-line text-xl">↓</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5C5C5C] text-center mt-4">
                  切れ目のない一貫したプロジェクト設計
                </p>
              </div>

              {/* テキスト */}
              <div className="w-full lg:w-[55%]">
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-6 leading-snug">
                  一貫支援
                  <span className="text-accent-line mx-2">──</span>
                  <br className="lg:hidden" />
                  採用から戦力化まで、切れ目なく。
                </h3>
                <p className="text-[15px] lg:text-base text-foreground leading-[1.8]">
                  「採用して終わり」「研修して終わり」では組織は変わりません。
                  カツヤクは、採用→定着→戦力化を一つのプロジェクトとして設計。
                  カツヤク教材（全12章）と管理職研修を組み合わせ、
                  部分改善で終わらない、一貫した組織づくりを支援します。
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
