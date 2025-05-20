import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all features of the Professional plan with no credit card required. At the end of the trial, you can choose to upgrade to a paid plan or downgrade to our free tier with limited features.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time through your account settings. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the new rate will apply at the start of your next billing cycle.",
  },
  {
    question: "How do team member limits work?",
    answer:
      "Each plan includes a specific number of team members. If you need to add more members than your plan allows, you'll need to upgrade to a higher tier. For Enterprise customers, we offer custom pricing for large teams.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes, we offer a 20% discount when you choose annual billing over monthly billing. This discount will be automatically applied when you select the annual billing option during sign-up or when changing your billing cycle.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "All plans include email support with varying response times based on your plan tier. Professional and Enterprise plans also include priority support via live chat. Enterprise customers receive dedicated account management and phone support.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take security seriously. Our platform uses industry-standard encryption for all data, both in transit and at rest. We maintain SOC2 compliance and conduct regular security audits. Your data is backed up daily, and we offer data export options for all customers.",
  },
];

export function FAQ() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to common questions about our platform, pricing, and
            features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
