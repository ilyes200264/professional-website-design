import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { name, email, message, subject, ...rest } = await req.json()

  const apiKey = "re_LdLwvU42_5YgMgTaWreisorEumCwELzax"
  const to = "contact@cmrenovationdesign.com"

  const html = `
    <h2>New message from ${name || "(no name)"}</h2>
    <p><b>Email:</b> ${email || "(no email)"}</p>
    <p><b>Subject:</b> ${subject || "(no subject)"}</p>
    <p><b>Message:</b></p>
    <p>${message || "(no message)"}</p>
    <pre>${JSON.stringify(rest, null, 2)}</pre>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Website <onboarding@resend.dev>",
      to: [to],
      subject: subject || `New message from website`,
      html,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
} 