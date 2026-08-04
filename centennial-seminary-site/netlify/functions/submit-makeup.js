const RECIPIENT = "admin@centennialseminary.com";

const escapeHtml = (value) => String(value || "").replace(/[&<>'"]/g, (character) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" })[character]);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode:405, body:JSON.stringify({ error:"Method not allowed" }) };
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) return { statusCode:503, body:JSON.stringify({ error:"Email service not configured" }) };
  const payload = JSON.parse(event.body || "{}");
  const required = ["studentName", "studentEmail", "classPeriod", "lessonWeek", "learningResponse", "christResponse", "honorStatement"];
  const missing = required.filter((field) => !payload[field]);
  if (missing.length) return { statusCode:400, body:JSON.stringify({ error:`Missing fields: ${missing.join(", ")}` }) };
  const html = `<h1>Seminary Makeup Work Submission</h1><p><strong>Student Name:</strong> ${escapeHtml(payload.studentName)}</p><p><strong>Student Email:</strong> ${escapeHtml(payload.studentEmail)}</p><p><strong>Class Period:</strong> ${escapeHtml(payload.classPeriod)}</p><p><strong>Lesson Week:</strong> ${escapeHtml(payload.lessonWeek)}</p><h2>What the student learned</h2><p>${escapeHtml(payload.learningResponse).replace(/\n/g,"<br>")}</p><h2>How this lesson helps the student come closer to Jesus Christ</h2><p>${escapeHtml(payload.christResponse).replace(/\n/g,"<br>")}</p>`;
  const response = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${process.env.RESEND_API_KEY}`, "Content-Type":"application/json" }, body:JSON.stringify({ from:process.env.RESEND_FROM, to:RECIPIENT, reply_to:payload.studentEmail, subject:`Seminary Makeup Work - ${payload.studentName}`, html }) });
  if (!response.ok) return { statusCode:502, body:JSON.stringify({ error:await response.text() }) };
  return { statusCode:200, body:JSON.stringify({ ok:true }) };
};
