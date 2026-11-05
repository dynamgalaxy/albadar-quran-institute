export interface PolicyPage {
  title: string;
  href: string;
  description: string;
  sections: { title: string; text: string }[];
}

export const policyPages: PolicyPage[] = [
  {
    title: "Privacy Policy",
    href: "/policies/privacy-policy",
    description: "Information about enquiries and personal details submitted through the Al Badar Quran Institute website.",
    sections: [
      { title: "Contact enquiries", text: "The contact form asks for your name, email address, subject and message. Online form submission is currently unavailable; you can contact the institute directly by email or WhatsApp." },
      { title: "Privacy details", text: "Approved details about data retention, sharing, cookies and requests concerning personal information have not yet been provided. Please contact the institute with any privacy question before submitting sensitive information." },
    ],
  },
  {
    title: "Terms & Conditions",
    href: "/policies/terms-of-use",
    description: "Terms for using this website and enquiring about Al Badar Quran Institute lessons.",
    sections: [
      { title: "Courses and enrolment", text: "This website describes available courses, a free trial class and monthly plans. A suitable course and class schedule can be discussed with the institute before enrolment." },
      { title: "Terms awaiting approval", text: "Formal terms covering enrolment, attendance, changes and use of learning materials have not been supplied. Please request the current terms from the institute before enrolling." },
    ],
  },
  {
    title: "Payment Policy",
    href: "/policies/payment-policy",
    description: "Confirmed information about Al Badar Quran Institute monthly fees and payment arrangements.",
    sections: [
      { title: "Monthly fees", text: "The published monthly plans show fees in US dollars, per student, per month. The current prices, class frequency and lesson duration are shown on the Fee & Schedule page." },
      { title: "Payment arrangements", text: "Available payment methods are shared during enrolment. This website does not currently provide an online checkout." },
      { title: "Other payment terms", text: "Payment due dates, transfer charges and other payment conditions have not been confirmed for publication. Please ask the institute for the applicable terms before making a payment." },
    ],
  },
  {
    title: "Refund & Cancellation Policy",
    href: "/policies/refund-and-cancellation-policy",
    description: "Information about refunds and cancellations for Al Badar Quran Institute lessons.",
    sections: [
      { title: "Policy awaiting approval", text: "Approved refund, cancellation and rescheduling terms have not been supplied. Please ask the institute to confirm the current conditions before enrolling or paying." },
    ],
  },
];
