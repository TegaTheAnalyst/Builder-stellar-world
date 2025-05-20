import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    initials: string;
  };
}

const testimonials: Testimonial[] = [
  {
    content:
      "This platform has transformed how our team works together. We've cut our project delivery time by 40% and significantly improved communication across departments.",
    author: {
      name: "Sarah Chen",
      role: "CTO",
      company: "InnovateX",
      avatar: "/placeholder.svg",
      initials: "SC",
    },
  },
  {
    content:
      "The analytics features alone are worth the price. We can now make data-driven decisions that have directly improved our bottom line.",
    author: {
      name: "Marcus Johnson",
      role: "Product Lead",
      company: "TechGrowth",
      avatar: "/placeholder.svg",
      initials: "MJ",
    },
  },
  {
    content:
      "As a startup, we needed a solution that could grow with us. This platform has scaled perfectly as we've quadrupled our team size in just 18 months.",
    author: {
      name: "Aisha Patel",
      role: "Founder",
      company: "Launchpad",
      avatar: "/placeholder.svg",
      initials: "AP",
    },
  },
  {
    content:
      "The automation features have saved our team countless hours on repetitive tasks. Now we can focus on what really matters - innovation and customer satisfaction.",
    author: {
      name: "David Miller",
      role: "Operations Manager",
      company: "OptimizePro",
      avatar: "/placeholder.svg",
      initials: "DM",
    },
  },
  {
    content:
      "I've used many project management tools, but none compare to the intuitive design and powerful features of this platform. It's become indispensable to our workflow.",
    author: {
      name: "Elena Rodriguez",
      role: "Team Lead",
      company: "DesignHub",
      avatar: "/placeholder.svg",
      initials: "ER",
    },
  },
  {
    content:
      "The customer support is exceptional. Any time we've had questions, the team has been responsive, helpful, and genuinely invested in our success.",
    author: {
      name: "James Wilson",
      role: "IT Director",
      company: "GlobalSystems",
      avatar: "/placeholder.svg",
      initials: "JW",
    },
  },
];

export function Testimonials() {
  return (
    <div className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by thousands of teams worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Hear what our customers have to say about how our platform has
            transformed their work.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author.name}
              className="flex flex-col justify-between"
            >
              <CardContent className="pt-6">
                <p className="text-base leading-7 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                    />
                    <AvatarFallback>
                      {testimonial.author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
