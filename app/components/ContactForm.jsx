import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2, "Please write your name").max(80, "Too long"),
    email: z.string().email("Invalid email"),
    subject: z.string().min(3, "Please add a subject").max(120, "Keep it concise"),
    message: z.string().min(10, "Tell me a bit more").max(2000, "That’s a lot!"),
    consent: z.literal(true, { errorMap: () => ({ message: "Consent required" }) }),
    website: z.string().max(0, "Leave this field empty"),
});
export default function ContactForm({endpoint = "https://formspree.io/f/xpwjzydw",}) {
    const [status, setStatus] = useState(null); // "ok" | "err" | null

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",                
            consent: false,
            website: "",
        },
        mode: "onBlur",
    });

    async function onSubmit(values) {
        if (values.website) { setStatus("ok"); reset(); return; }
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Network error");
            setStatus("ok");
            reset();                  
        } catch { setStatus("err"); }
    }

    return (
        <form className="contact" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" autoComplete="name" placeholder="Your name" {...register("name")}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                {errors.name && <p id="name-err" className="error">{errors.name.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" autoComplete="email"  placeholder="you@domain.com" {...register("email")}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                {errors.email && <p id="email-err" className="error">{errors.email.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" placeholder="What are you interested to talk about?" {...register("subject")}
                aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-err" : undefined} />
                {errors.subject && <p id="subject-err" className="error">{errors.subject.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={6} placeholder="Tell me about your company, goals, needs..."  {...register("message")}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                {errors.message && <p id="message-err" className="error">{errors.message.message}</p>}
            </div>


            <div className="field field--consent">
                <label className="checkbox">
                    <input type="checkbox" {...register("consent")} /> 
                    I agree that my data will be used to reply to my message.
                </label>
                {errors.consent && <p className="error">{errors.consent.message}</p>}
            </div>


            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div className="actions">
                <button type="submit" disabled={isSubmitting} className="btn btn--large btn--primary btn--form">
                {isSubmitting ? "Sending..." : "Send message"}
                </button>
                {status === "ok" && <p className="ok" role="status">Thanks! I’ll get back to you soon.</p>}
                {status === "err" && <p className="error" role="alert">Something went wrong. Try again.</p>}
                {document.querySelector('.btn--form')?.disabled}
            </div>
            
        </form>
    );
}