import React from "react";

const PricingTable = ({ plans }) => {
  const allFeatures = Array.from(
    new Set(plans.flatMap((plan) => plan.features))
  );

  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="min-w-full border-collapse table-auto rounded-lg shadow-lg bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-700 text-left">
              Features
            </th>

            {plans.map((plan, index) => (
              <th
                key={index}
                className="px-6 py-4 font-medium text-gray-700 text-center"
              >
                <div className="text-lg font-semibold">{plan.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
         
          {allFeatures.map((feature, featureIndex) => (
            <tr
              key={featureIndex}
              className="hover:bg-gray-50 transition-colors duration-300 border-b border-gray-200"
            >
              <td className="px-6 py-3 text-left text-gray-700">{feature}</td>
              {plans.map((plan, planIndex) => (
                <td
                  key={`${planIndex}-${featureIndex}`}
                  className="px-6 py-2 text-center text-gray-700"
                >
                  {plan.features.includes(feature) ? (
                    <span className="text-green-500 font-semibold">✔</span>
                  ) : (
                    <span className="text-red-500 font-semibold">✘</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
