import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "default" | "outline" | "secondary";
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$9",
    description:
      "Perfect for individuals and small teams just getting started.",
    features: [
      "Up to 5 team members",
      "20GB storage",
      "Basic analytics",
      "24-hour support response time",
      "3 projects",
    ],
    buttonText: "Get started",
    variant: "outline",
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing teams with more advanced needs.",
    features: [
      "Up to 20 team members",
      "100GB storage",
      "Advanced analytics",
      "6-hour support response time",
      "Unlimited projects",
      "Custom integrations",
    ],
    buttonText: "Try for free",
    variant: "default",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description:
      "For large organizations requiring premium features and support.",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Premium analytics",
      "1-hour support response time",
      "Unlimited projects",
      "Advanced security",
      "Dedicated account manager",
      "Custom onboarding",
    ],
    buttonText: "Contact sales",
    variant: "secondary",
  },
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the plan that's right for you, and start optimizing your
            workflow today.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col p-0 ${tier.popular ? "border-primary shadow-lg z-10 scale-105" : ""} ${tierIdx === 0 ? "rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg" : ""} ${tierIdx === tiers.length - 1 ? "rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-xs font-medium text-primary-foreground">
                  Most popular
                </div>
              )}
              <CardHeader className="pb-0">
                <CardTitle>{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-base text-muted-foreground">
                    /month
                  </span>
                </div>
                <CardDescription className="mt-4">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 pt-6">
                <ul
                  role="list"
                  className="space-y-3 text-sm leading-6 text-muted-foreground"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant={tier.variant} className="w-full">
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
