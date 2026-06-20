"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/data/site";
import { buttonClassName } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  phone: string;
  category: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  category: "",
  message: "",
};

export function ContactEnquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<FormValues> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter the parent or player name.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Please enter a phone number.";
    } else if (values.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!values.category.trim()) {
      nextErrors.category = "Please enter the player age or category.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please add a short enquiry message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      setValues(initialValues);
    }
  }

  return (
    <form
      className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/18 backdrop-blur-md sm:p-8"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/35 to-transparent" />
      <div className="mb-7 border-b border-white/10 pb-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
          Parent enquiry form
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white">
          Share the player details.
        </h2>
        <p className="mt-3 text-sm leading-7 text-blue-50/70">
          This preview validates the form on the page. Final launch can connect
          it to WhatsApp, email, or a client workflow.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          error={errors.name}
          label="Name"
          name="name"
          onChange={(value) => updateField("name", value)}
          placeholder="Parent or player name"
          value={values.name}
        />
        <Field
          error={errors.phone}
          label="Phone"
          name="phone"
          onChange={(value) => updateField("phone", value)}
          placeholder="+91"
          value={values.phone}
        />
      </div>
      <div className="mt-5">
        <Field
          error={errors.category}
          label="Player age/category"
          name="category"
          onChange={(value) => updateField("category", value)}
          placeholder="U-14 / U-17 / player age"
          value={values.category}
        />
      </div>
      <label className="mt-5 grid gap-2">
        <span className="text-sm font-black text-white">Message</span>
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={cn(
            "min-h-36 rounded-[0.85rem] border bg-white/[0.08] px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-blue-50/42 focus:border-accent focus:bg-white/[0.12] focus:shadow-[0_0_0_3px_rgba(248,196,0,0.14)]",
            errors.message ? "border-red-300 focus:border-red-300" : "border-white/12",
          )}
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us what you want to know..."
          value={values.message}
        />
        {errors.message ? (
          <span className="text-xs font-bold text-red-200" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </label>

      <AnimatePresence>
        {isSubmitted ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-5 flex gap-3 rounded-[0.9rem] border border-accent/35 bg-accent/12 p-4 text-sm font-bold leading-6 text-blue-50 shadow-lg shadow-accent/10"
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            role="status"
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
            Enquiry noted. The form is ready for client connection; no message
            is sent in this frontend preview.
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className={buttonClassName("primary", "lg", "w-full sm:w-auto")} type="submit">
          Submit Enquiry
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <Link
          className={buttonClassName("secondaryDark", "lg", "w-full sm:w-auto")}
          href={siteConfig.contact.whatsapp}
          aria-label="Open GCC Chalissery WhatsApp enquiry"
        >
          WhatsApp
          <MessageCircle className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </form>
  );
}

type FieldProps = {
  error?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
};

function Field({ error, label, name, onChange, placeholder, value }: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-white">{label}</span>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={cn(
          "h-12 rounded-[0.85rem] border bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-blue-50/42 focus:border-accent focus:bg-white/[0.12] focus:shadow-[0_0_0_3px_rgba(248,196,0,0.14)]",
          error ? "border-red-300 focus:border-red-300" : "border-white/12",
        )}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {error ? (
        <span className="text-xs font-bold text-red-200" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
