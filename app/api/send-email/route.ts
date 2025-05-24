import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { name, email, message, subject, ...rest } = await req.json()

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO_EMAIL = "contact@cmrenovationdesign.com"
  const FROM_EMAIL = "CMR Rénovation <contact@cmrenovationdesign.com>"

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 })
  }

  const html = `
    <h2>Nouveau message du site</h2>
    <p><strong>Nom :</strong> ${name || "(non fourni)"}</p>
    <p><strong>Email :</strong> ${email || "(non fourni)"}</p>
    <p><strong>Sujet :</strong> ${subject || "(non fourni)"}</p>
    <p><strong>Message :</strong></p>
    <p>${message || "(aucun message)"}</p>
    ${
      Object.keys(rest).length > 0
        ? `<hr><h4>Données supplémentaires :</h4><pre>${JSON.stringify(rest, null, 2)}</pre>`
        : ""
    }
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: subject || `Message via cmrenovationdesign.com`,
      html,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
} 