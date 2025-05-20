import { Check, Zap, Shield, BarChart3, Clock, Users } from "lucide-react";

interface FeatureItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    name: "Lightning Fast Performance",
    description:
      "Our platform is optimized for speed, ensuring that your team can work efficiently without delays.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    name: "Advanced Security",
    description:
      "Enterprise-grade security to keep your data safe and compliant with industry standards.",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    name: "Detailed Analytics",
    description:
      "Gain insights into your team's performance with comprehensive reports and dashboards.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
  },
  {
    name: "Real-time Collaboration",
    description:
      "Work together with your team in real-time, making decisions faster and more effectively.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
  {
    name: "Automated Workflows",
    description:
      "Save time with automated processes that streamline repetitive tasks and reduce manual work.",
    icon: <Clock className="h-8 w-8 text-primary" />,
  },
  {
    name: "Seamless Integrations",
    description:
      "Connect with your favorite tools and services to create a unified workflow experience.",
    icon: <Check className="h-8 w-8 text-primary" />,
  },
];

export function Features() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful features for powerful teams
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform offers all the tools you need to manage your projects,
            collaborate with your team, and deliver results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-background border border-border">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
