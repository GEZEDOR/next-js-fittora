"use client";
import { Truck, Undo2, Percent, HelpCircle } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-violet-600" size={27} />,
    title: "Free shipping",
    description: "Over $200",
  },
  {
    icon: <Undo2 className="text-violet-600" size={27} />,
    title: "Money back",
    description: "Return within 7 days",
  },
  {
    icon: <Percent className="text-violet-600" size={27} />,
    title: "Buy 4 get 5th",
    description: "50% off",
  },
  {
    icon: <HelpCircle className="text-violet-600" size={27} />,
    title: "Any questions?",
    description: "experts are ready",
  },
];

export default function ServiceFeatures() {
  return (
    <div className="my-20 border-t border-b border-gray-400 px-4 py-10 sm:px-8">
      <div className="grid grid-cols-1 gap-6 text-xl text-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <div>
              <span className="font-semibold text-black">{item.title}</span>{" "}
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
