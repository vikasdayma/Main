
import React from "react";

const pricingPlans = [
  {
    title: "Beginner Program",
    price: "3-6 months",
    description: "Basic cricketing skills, rules, and fundamental techniques.",
    features: ["Batting stance", "Bowling grip", "Fielding drills"],
    bestFor: "Kids & absolute beginners",
  },
  {
    title: "Intermediate Program",
    price: "6-12 months",
    description: "Skill enhancement, match strategies, and fitness training.",
    features: ["Advanced batting shots", "Swing bowling", "Match simulations"],
    bestFor: "Players with basic experience",
  },
  {
    title: "Advanced Program",
    price: "1+ year",
    description: "High-intensity training, mental toughness, and game strategies.",
    features: ["Power-hitting", "Spin variations", "Fitness drills"],
    bestFor: "Aspiring professionals & competitive players",
  },
];

const PricingCard = ({ plan }) => (
  <div className="group relative w-80 mt-6 z-10">
    <div className="relative overflow-hidden rounded-2xl bg-black p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#00C9A7]/40">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00C9A7] to-transparent opacity-20"></div>
      <div className="relative rounded-2xl bg-black p-6 text-white">
        <h3 className="text-sm font-medium uppercase tracking-wider text-[#00C9A7]">
          {plan.title}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-bold">{plan.price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-300">{plan.description}</p>
        <div className="relative mt-6 space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C9A7]/10">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#00C9A7]">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
              </div>
              <p className="text-sm font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-8">
          <button className="group/btn relative w-full overflow-hidden rounded-xl bg-[#00C9A7] p-px font-semibold text-white shadow-[0_1000px_0_0_hsl(0_0%100%/0%)_inset] transition-colors hover:shadow-[#00C9A7]/30">
            <div className="relative rounded-xl bg-black px-4 py-3 transition-colors group-hover/btn:bg-transparent">
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function PricingSection() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden py-20 px-6 flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Background Blurs */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-[#00C9A7] opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#00C9A7] opacity-20 rounded-full filter blur-3xl z-0"></div> */}

      {/* Pricing Cards */}
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
}
