const RECIPIENT = "admin@centennialseminary.com";
const escapeHtml = (value) => String(value || "").replace(/[&<>'"]/g, (character) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[character]);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode:405, body:JSON.stringify({ error:"Method not allowed" }) };
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) return { statusCode:503, body:JSON.stringify({ error:"Email service not configured" }) };
  const payload = JSON.parse(event.body || "{}");
  const missing = ["name", "email", "message"].filter((field) => !payload[field]);
  if (missing.length) return { statusCode:400, body:JSON.stringify({ error:`Missing fields: ${missing.join(", ")}` }) };
  const response = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${process.env.RESEND_API_KEY}`, "Content-Type":"application/json" }, body:JSON.stringify({ from:process.env.RESEND_FROM, to:RECIPIENT, reply_to:payload.email, subject:`Centennial Seminary message from ${payload.name}`, html:`<h1>Website Contact Message</h1><p><strong>Name:</strong> ${escapeHtml(payload.name)}</p><p><strong>Email:</strong> ${escapeHtml(payload.email)}</p><p>${escapeHtml(payload.message).replace(/\n/g,"<br>")}</p>` }) });
  if (!response.ok) return { statusCode:502, body:JSON.stringify({ error:await response.text() }) };
  return { statusCode:200, body:JSON.stringify({ ok:true }) };
};
