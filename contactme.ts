"use server";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactMe = async (formData: FormData) => {
  try {
    const { fullName, email, message } = formData;

    if (!message || typeof message !== "string") {
      return { error: "Invalid messsage" };
    }

    const { error } = await resend.emails.send({
      from: "Contact Form <https://mosesafolabi.com>",
      to: "hello@mosesafolabi.com",
      subject: `Message from ${fullName} - mosesafolabi.com `,
      replyTo: email as string,
      text: message,
    });

    if (error) {
      return { error: "Error sending messsage" };
    }

    return { success: "Message sent" };
  } catch (error) {
    return { error: "Error sending messsage" };
  }
};
