import { PageScaffold } from "@/components/sections/page-scaffold";

export default function AdmissionsPage() {
  return (
    <PageScaffold
      eyebrow="Admissions"
      title="Join the Academy"
      description="Structure for trial registration, eligibility, fee notes, parent FAQs, and enrollment call-to-actions."
      scope={[
        "Trial booking content block",
        "Age group eligibility",
        "Enrollment process and FAQs",
      ]}
    />
  );
}
