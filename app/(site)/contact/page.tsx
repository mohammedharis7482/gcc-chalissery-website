import Link from "next/link";
import type { Metadata } from "next";
import {
  Camera,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactEnquiryForm } from "@/components/sections/contact-enquiry-form";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import { academyContact } from "@/src/data/site";
import { socialLinks } from "@/data/site";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Contact GCC Chalissery Football Academy",
  description:
    "Contact GCC Chalissery Football Academy in Chalissery, Kerala through WhatsApp, email, map location, and a simple academy enquiry form.",
  path: "/contact",
});

const contactImages = {
  hero: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
  whatsapp: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.48 PM.jpeg",
  location: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.56 PM.jpeg",
  form: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.00 PM.jpeg",
} as const;

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact GCC"
        title="Visit, enquire, or connect with GCC Chalissery Football Academy."
        description="Parents, players, and football families can connect with the academy through WhatsApp, email, location details, social media, and a simple enquiry form."
        image={contactImages.hero}
        stats={[
          { label: "Location", value: "Chalissery" },
          { label: "WhatsApp", value: academyContact.phone },
          { label: "Email", value: "Info@gccacademy.in" },
        ]}
      />

      <ContactInformation />
      <WhatsAppContact />
      <EmailAddress />
      <AcademyLocation />
      <GoogleMapArea />
      <ContactFormSection />
      <SocialMediaLinks />
    </>
  );
}

function ContactInformation() {
  const infoCards = [
    {
      title: "Academy Name",
      description: academyContact.academyName,
      icon: Globe,
    },
    {
      title: "Location",
      description: academyContact.location,
      icon: MapPin,
    },
    {
      title: "WhatsApp",
      description: academyContact.phone,
      icon: MessageCircle,
    },
  ] as const;

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#06146d_0%,#1230a7_52%,#1746bb_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(248,196,0,0.15),transparent_26rem),radial-gradient(circle_at_88%_76%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-[#1746bb]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Contact Information"
            invert
            title="Official academy contact details in one place."
            description="Use the academy’s WhatsApp number, email address, and location details for enquiries, visits, and parent conversations."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {infoCards.map((item) => (
              <FeatureCard
                className="min-h-[180px] sm:min-h-[220px]"
                description={item.description}
                icon={item.icon}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function WhatsAppContact() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1746bb_0%,#1230a7_52%,#0d2478_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_42%,rgba(21,174,234,0.12),transparent_27rem),radial-gradient(circle_at_82%_20%,rgba(248,196,0,0.1),transparent_24rem)]" />
      <Container className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <ImageCard
          alt="GCC Chalissery academy WhatsApp enquiry"
          className="min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]"
          imageClassName="object-[50%_36%]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={contactImages.whatsapp}
        >
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              WhatsApp Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
              Quick academy enquiries through WhatsApp.
            </h2>
          </div>
        </ImageCard>

        <div>
          <SectionHeader
            eyebrow="WhatsApp"
            invert
            title={academyContact.phone}
            description="Use WhatsApp for trial enquiries, program questions, age-category guidance, and parent conversations."
          />
          <Link
            className={buttonClassName("primary", "lg", "mt-8")}
            href={academyContact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open WhatsApp chat with GCC Chalissery at ${academyContact.phone}`}
          >
            Open WhatsApp
            <MessageCircle className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function EmailAddress() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0d2478_0%,#102f9a_55%,#1746bb_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_36%,rgba(21,174,234,0.13),transparent_26rem)]" />
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeader
          eyebrow="Email Address"
          invert
          title="Write to the academy."
          description="For formal enquiries, program information, media, or academy communication, use the official email address."
        />
        <Link
          className="group block max-w-full overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1] sm:p-8"
          href={`mailto:${academyContact.email}`}
          aria-label={`Send email to ${academyContact.email}`}
        >
          <Mail className="size-9 text-accent transition group-hover:scale-110" />
          <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-accent">
            Official Email
          </p>
          <h2 className="mt-3 max-w-full overflow-hidden break-all text-[clamp(1.45rem,6.2vw,2rem)] font-black leading-tight text-white sm:break-words sm:text-4xl">
            {academyContact.email}
          </h2>
        </Link>
      </Container>
    </Section>
  );
}

function AcademyLocation() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1746bb_0%,#1230a7_48%,#0d2478_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_82%,rgba(248,196,0,0.1),transparent_24rem),radial-gradient(circle_at_88%_18%,rgba(21,174,234,0.14),transparent_28rem)]" />
      <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Academy Location"
            invert
            title={academyContact.location}
            description="GCC Chalissery Football Academy is rooted in Chalissery, Kerala, India, serving young players and football families from the local community and surrounding areas."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <StatCard className="min-h-[112px] sm:min-h-[128px]" label="Place" value="Chalissery" />
            <StatCard className="min-h-[112px] sm:min-h-[128px]" label="Region" value="Kerala, India" />
          </div>
        </div>

        <ImageCard
          alt="GCC Chalissery academy location and community"
          className="min-h-[340px] sm:min-h-[430px]"
          imageClassName="object-[50%_42%]"
          sizes="(min-width: 1024px) 42vw, 100vw"
          src={contactImages.location}
        >
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Visit GCC
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white">
              A football academy grounded in Chalissery.
            </h2>
          </div>
        </ImageCard>
      </Container>
    </Section>
  );
}

function GoogleMapArea() {
  return (
    <Section
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0d2478_0%,#143bb4_54%,#1a7fcb_100%)] text-white"
      id="map"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(248,196,0,0.11),transparent_24rem),radial-gradient(circle_at_76%_72%,rgba(21,174,234,0.16),transparent_28rem)]" />
      <Container>
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.08] shadow-2xl shadow-black/18 backdrop-blur-md sm:min-h-[430px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,196,0,0.18),transparent_32%),radial-gradient(circle_at_74%_28%,rgba(21,174,234,0.18),transparent_28rem)]" />
          <div className="absolute inset-6 border border-white/10 sm:inset-8" />
          <div className="absolute inset-0 grid place-items-center p-6 text-center sm:p-8">
            <div>
              <MapPin className="mx-auto size-12 text-accent" aria-hidden="true" />
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-accent">
                Google Map
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                Open directions to GCC Arts and Sports Club, Chalissery.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-blue-50/74">
                The map link opens the academy location in Google Maps.
              </p>
              <Link
                className={buttonClassName("primary", "lg", "mt-8")}
                href={academyContact.map}
                target="_blank"
                rel="noreferrer"
              >
                Open Google Map
                <MapPin className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ContactFormSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1a7fcb_0%,#143bb4_42%,#0d2478_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_28%,rgba(248,196,0,0.1),transparent_24rem),radial-gradient(circle_at_88%_64%,rgba(21,174,234,0.15),transparent_29rem)]" />
      <Container className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact Form"
            invert
            title="Share the player details and enquiry."
            description="Send the basic player details, age category, and enquiry message so the academy conversation starts clearly."
          />
          <div className="mt-8 grid gap-4">
            <FeatureCard
              title="Trial enquiry"
              description="For parents looking to understand the right age group and next available intake."
              icon={MessageCircle}
            />
            <FeatureCard
              title="Program details"
              description="For schedule, eligibility, and player development pathway questions."
              icon={Phone}
            />
          </div>
        </div>

        <ContactEnquiryForm />
      </Container>
    </Section>
  );
}

function SocialMediaLinks() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0d2478_0%,#06146d_62%,#03083f_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_20%,rgba(21,174,234,0.12),transparent_28rem)]" />
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader
          eyebrow="Social Media Links"
          invert
          title="Follow the academy journey."
          description="Follow GCC Chalissery for academy updates, football moments, tournament memories, and community news."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {socialLinks.map((item, index) => {
            const Icon =
              item.label === "Instagram"
                ? Camera
                : item.label === "Facebook"
                  ? Globe
                  : MessageCircle;

            return (
              <Link
                className="group flex min-h-[140px] flex-col justify-between rounded-[1rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1] sm:min-h-[170px] sm:p-6"
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noreferrer"
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
  );
}
