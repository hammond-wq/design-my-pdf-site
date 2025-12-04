import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Package 01",
    price: "50,000",
    duration: "4 Hours",
    description: "Best for brand content",
    features: [
      "Freshly Painted Infinity Wall",
      "Makeup Room",
      "Changing Room",
      "Kitchen",
      "Iron Room",
      "Sitting Lounge",
    ],
    popular: false,
  },
  {
    name: "Package 02",
    price: "70,000",
    duration: "8 Hours",
    description: "Best for e-commerce & brand content & Fashion",
    features: [
      "Freshly Painted Infinity Wall",
      "Makeup Room",
      "Changing Room",
      "Kitchen",
      "Iron Room",
      "Sitting Lounge",
    ],
    popular: true,
  },
  {
    name: "Package 03",
    price: "90,000",
    duration: "12 Hours",
    description: "For fashion, commercials & high-end shoots",
    features: [
      "Freshly Painted Infinity Wall",
      "Makeup Room",
      "Iron Room",
      "Sitting Lounge - 2 Heaters",
      "Dedicated Studio Assistant",
      "Complimentary Tea",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-cream-dark">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Infinity Wall Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your production needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-background rounded-xl p-8 shadow-medium transition-all hover:shadow-elevated hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-body uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-sm">RS.</span>
                  <span className="font-display text-4xl text-foreground">{pkg.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{pkg.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center py-3 font-body text-sm uppercase tracking-wider transition-all ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-muted/50 rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Please Note:</strong></p>
            <p>• Rates exclude electricity (generator/WAPDA). Overtime is billed at Rs 5,000 per 30 minutes beyond the scheduled shoot time.</p>
            <p>• We will provide the infinity wall in a white background only. If the client requires a different color, the additional cost will be borne by the client.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
