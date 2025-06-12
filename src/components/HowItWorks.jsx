import { FaRobot, FaCog, FaCloudUploadAlt, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Step 1: Select Agent",
    description: "Choose the AI agent that best fits your needs",
    icon: <FaRobot className="text-[#00FFC6] text-4xl" />,
  },
  {
    title: "Step 2: Configure",
    description: "Set up your agent with custom parameters",
    icon: <FaCog className="text-[#00FFC6] text-4xl" />,
  },
  {
    title: "Step 3: Deploy",
    description: "Deploy your agent to the desired environment",
    icon: <FaCloudUploadAlt className="text-[#00FFC6] text-4xl" />,
  },
  {
    title: "Step 4: Monitor",
    description: "Track your agent’s performance with analytics",
    icon: <FaChartLine className="text-[#00FFC6] text-4xl" />,
  },
];

export default function HowItWorks() {
  return (
    <section className=" py-16 px-6 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">HOW IT WORKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#11161D] border border-[#00FFC6]/20 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-[#00FFC6]/20 transition-all duration-300"
          >
            <div className="bg-[#00FFC6]/10 p-4 rounded-full mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-[#B2BFCF]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
