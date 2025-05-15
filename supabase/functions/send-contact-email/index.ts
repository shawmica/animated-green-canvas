
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@3.4.0"; // Using a recent version of Resend

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CONTACT_EMAIL_TO = "hello@johndoe.com"; // The email address that will receive the contact messages
const EMAIL_SENDER = "Lovable Portfolio <onboarding@resend.dev>"; // Resend requires a verified domain or uses onboarding@resend.dev for testing

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return new Response(JSON.stringify({ error: "Resend API key is not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { name, email, subject, message }: ContactFormData = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required form fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Email to the website owner
    const ownerEmailResponse = await resend.emails.send({
      from: EMAIL_SENDER,
      to: [CONTACT_EMAIL_TO],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email to owner sent successfully:", ownerEmailResponse);

    // Confirmation email to the sender
    const senderConfirmationResponse = await resend.emails.send({
      from: EMAIL_SENDER,
      to: [email],
      subject: "We've received your message!",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message with the subject: "${subject}" and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,<br>The Team</p>
      `,
    });
    console.log("Confirmation email to sender sent successfully:", senderConfirmationResponse);


    return new Response(JSON.stringify({ message: "Emails sent successfully." }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message || "An unexpected error occurred." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
