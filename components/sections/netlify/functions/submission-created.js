/* eslint-disable no-console */

// ---------------------------------------
// CONFIG
// ---------------------------------------
const ASSIGNEE_ID = 923851;
const MAX_RETRIES = 5;

exports.handler = async (event) => {
  try {
    // ---------------------------------------
    // 0️⃣ PARSE NETLIFY PAYLOAD
    // ---------------------------------------
    const body = JSON.parse(event.body || "{}");
    const submission = body.payload || {};
    const data = submission.data || {};

    // ---------------------------------------
    // 1️⃣ EXTRACT FORM DATA
    // ---------------------------------------
    const fullName = (data.NAME || "").trim();
    const email = data.EMAIL || "";
    const dialCode = data.country_code || "";
    const isoCode = data.country_short || "";
    const phone = (data.phone || "").trim();
    const referrer = data.referral_url || submission.site_url || "";
    const message = (data.COMMENTS || "").trim();

    // ---------------------------------------
    // 2️⃣ SPLIT NAME INTO FIRST + LAST
    // ---------------------------------------
    let firstName = "";
    let lastName = "";

    if (fullName.includes(" ")) {
      const parts = fullName.split(" ");
      firstName = parts.shift();
      lastName = parts.join(" ");
    } else {
      firstName = fullName;
      lastName = "";
    }

    // ---------------------------------------
    // 3️⃣ BUILD CLEAN VALUES
    // ---------------------------------------
    const finalPhone = (phone || "").trim();
    const uniqueEmail = `auto+${Date.now()}@oasis-digital.ae`;

    // ---------------------------------------
    // 4️⃣ CREATE CONTACT PAYLOAD (RESPOND.IO)
    // ---------------------------------------
    const createPayload = {
      firstName,
      lastName,
      email: uniqueEmail,
      phone: finalPhone,
      countryCode: isoCode,
      custom_fields: [
        { name: "form_name", value: "AG Real Estate Contact Form" },
        { name: "landing_email", value: email },
        { name: "referrer", value: referrer },
        { name: "message", value: message }
      ],
    };

    console.log("🚀 Creating Contact:", createPayload);

    const createRes = await fetch(
      `https://api.respond.io/v2/contact/email:${uniqueEmail}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESPOND_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createPayload),
      }
    );

    const createResult = await createRes.json();
    console.log("📨 Create Response:", createResult);

    if (createResult.code !== 200) {
      console.error("❌ CONTACT CREATE FAILED");
      return { statusCode: 200, body: "" };
    }

    // ---------------------------------------
    // ⏳ WAIT FOR CONTACT SYNC
    // ---------------------------------------
    await new Promise((r) => setTimeout(r, 2000));

    // ---------------------------------------
    // 5️⃣ ASSIGN AGENT (AUTO RETRY)
    // ---------------------------------------
    for (let i = 1; i <= MAX_RETRIES; i++) {
      console.log(`👤 Assign attempt ${i}/${MAX_RETRIES}`);

      const assignRes = await fetch(
        `https://api.respond.io/v2/contact/email:${uniqueEmail}/conversation/assignee`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESPOND_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ assignee: ASSIGNEE_ID }),
        }
      );

      const assignResult = await assignRes.json();
      console.log("🎯 Assignee Update:", assignResult);

      if (assignResult.code === 200) break;
      await new Promise((r) => setTimeout(r, 1200));
    }

    // ---------------------------------------
    // 6️⃣ UPDATE LIFECYCLE (AUTO RETRY)
    // ---------------------------------------
    for (let i = 1; i <= MAX_RETRIES; i++) {
      console.log(`🔄 Lifecycle attempt ${i}/${MAX_RETRIES}`);

      const lifeRes = await fetch(
        `https://api.respond.io/v2/contact/email:${uniqueEmail}/lifecycle/update`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESPOND_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: "New Lead" }),
        }
      );

      const lifeResult = await lifeRes.json();
      console.log("🔥 Lifecycle Update:", lifeResult);

      if (lifeResult.code === 200) break;
      await new Promise((r) => setTimeout(r, 1200));
    }

    // ---------------------------------------
    // ✅ DONE
    // ---------------------------------------
    return { statusCode: 200, body: "" };

  } catch (err) {
    console.error("❌ FUNCTION ERROR:", err);
    return { statusCode: 200, body: "" };
  }
};
