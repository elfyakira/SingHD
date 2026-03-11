import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

interface ContactFormData {
  companyName: string
  name: string
  email: string
  phone: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    const { companyName, name, email, phone, message } = body

    // バリデーション
    if (!companyName || !name || !email || !phone || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })

    const resend = getResendClient()
    const { error } = await resend.emails.send({
      from: 'Singホールディングス <noreply@jp-sing.com>',
      to: ['info@jp-sing.com'],
      replyTo: email,
      subject: `【お問い合わせ】${companyName} ${name}様`,
      html: `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 4px; overflow: hidden;">
          <!-- ヘッダー -->
          <tr>
            <td style="background-color: #1C2A44; padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: bold;">
                ウェブサイトからのお問い合わせ
              </h1>
            </td>
          </tr>

          <!-- 本文 -->
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 24px; color: #333333; font-size: 14px; line-height: 1.6;">
                ウェブサイトのお問い合わせフォームから以下の内容が送信されました。
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 2px solid #1C2A44;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef; width: 140px; font-size: 13px; font-weight: bold; color: #1C2A44; vertical-align: top;">
                    会社名
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e9ecef; font-size: 14px; color: #333333;">
                    ${escapeHtml(companyName)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef; font-size: 13px; font-weight: bold; color: #1C2A44; vertical-align: top;">
                    お名前
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e9ecef; font-size: 14px; color: #333333;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef; font-size: 13px; font-weight: bold; color: #1C2A44; vertical-align: top;">
                    メールアドレス
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e9ecef; font-size: 14px; color: #333333;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #0E7490; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef; font-size: 13px; font-weight: bold; color: #1C2A44; vertical-align: top;">
                    電話番号
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e9ecef; font-size: 14px; color: #333333;">
                    <a href="tel:${escapeHtml(phone)}" style="color: #0E7490; text-decoration: none;">${escapeHtml(phone)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef; font-size: 13px; font-weight: bold; color: #1C2A44; vertical-align: top;">
                    お問い合わせ内容
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e9ecef; font-size: 14px; color: #333333; white-space: pre-wrap;">
${escapeHtml(message)}
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0; color: #999999; font-size: 12px;">
                送信日時: ${now}
              </p>
            </td>
          </tr>

          <!-- フッター -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 16px 32px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #999999; font-size: 11px; text-align: center;">
                このメールはウェブサイトのお問い合わせフォームから自動送信されています。
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json(
        { error: 'メール送信に失敗しました', detail: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
