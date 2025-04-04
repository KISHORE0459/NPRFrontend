import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Automated Number Plate Recognition",
  "Real-time Vehicle Tracking",
  "Cloud-Based Data Storage",
  "Secure Database with MongoDB",
  "Automated Parking Space Allocation",
];

const Features = () => {
  return (
    <section className="relative text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Key Features</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 text-lg font-medium bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all"
            >
              <FaCheckCircle className="text-green-300 text-2xl" />
              <span className="text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
