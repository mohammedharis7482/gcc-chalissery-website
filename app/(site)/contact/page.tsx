import Link from "next/link";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactEnquiryForm } from "@/components/sections/contact-enquiry-form";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { contactOptions, pageImages } from "@/data/pages";
import { siteConfig, socialLinks } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Contact GCC Chalissery Football Academy",
  description:
    "Contact GCC Chalissery Football Academy for trial sessions, academy enquiries, WhatsApp support, phone, email, and location details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact GCC"
        title="Visit, enquire, or book a trial session."
        description="Connect with GCC Chalissery Football Academy for program details, age-group guidance, trial enquiries, WhatsApp support, and parent conversations."
        image={pageImages.culture}
        stats={[
          { label: "Location", value: "Chalissery" },
          { label: "Enquiry", value: "WhatsApp" },
          { label: "Pathway", value: "U-14 & U-17" },
        ]}
      />

      <Section className="relative isolate overflow-hidden bg-brand-strong text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_76%,rgba(21,174,234,0.14),transparent_30rem)]" />
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Enquiry"
              invert
              title="Tell us about the player and the right next step."
              description="Send a trial or program enquiry in a few details. Parents can also use WhatsApp, phone, email, or location links for direct contact."
            />
            <div className="mt-8 grid gap-4">
              {contactOptions.map((item, index) => (
                <FeatureCard
                  description={item.description}
                  icon={[MessageCircle, Phone, MapPin][index]}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          <ContactEnquiryForm />
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container>
          <SectionHeader
              eyebrow="Direct contact"
              invert
              title="Choose the easiest way to reach the academy."
              description="For quick parent questions, trial interest, program guidance, or directions, use the channel that feels easiest."
            />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Call",
                value: siteConfig.contact.phone,
                href: `tel:${siteConfig.contact.phone}`,
                icon: Phone,
              },
              {
                label: "WhatsApp",
                value: "Quick enquiry",
                href: siteConfig.contact.whatsapp,
                icon: MessageCircle,
              },
              {
                label: "Email",
                value: siteConfig.contact.email,
                href: `mailto:${siteConfig.contact.email}`,
                icon: Mail,
              },
              {
                label: "Location",
                value: siteConfig.contact.location,
                href: siteConfig.contact.map,
                icon: MapPin,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  className="group rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1]"
                  href={item.href}
                  key={item.label}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <Icon className="size-8 text-accent transition group-hover:scale-110" />
                  <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-blue-50/78">
                    {item.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-strong text-white" id="map">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/15">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,196,0,0.18),transparent_32%),radial-gradient(circle_at_74%_28%,rgba(21,174,234,0.18),transparent_28rem)]" />
            <div className="absolute inset-8 border border-white/10" />
            <div className="absolute inset-0 grid place-items-center p-8 text-center">
              <div>
                <MapPin className="mx-auto size-12 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-4xl font-black leading-tight">
                  Chalissery, Kerala, India
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-blue-50/74">
                  Open the map link for directions. Replace this placeholder
                  with the verified academy ground address before launch.
                </p>
                <Link
                  className="mt-7 inline-flex h-11 items-center justify-center gap-2 border border-white/15 bg-white/[0.08] px-5 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={siteConfig.contact.map}
                >
                  Open Map
                  <MapPin className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <ImageCard
            alt="GCC Chalissery academy community event"
            className="min-h-[430px]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            src={pageImages.culture}
          >
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Ground visit
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white">
                Meet the academy team and understand the right program.
              </h2>
            </div>
          </ImageCard>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Social links"
            invert
            title="Follow the academy journey."
            description="Follow GCC Chalissery for academy updates, football moments, tournament memories, and community news."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  className="group rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/45"
                  href={item.href}
                  key={item.label}
                  aria-label={`Open GCC Chalissery ${item.label}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="size-7 text-accent" aria-hidden="true" />
                    <span className="text-xs font-black text-accent">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-black text-white">
                    {item.label}
                  </h2>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
