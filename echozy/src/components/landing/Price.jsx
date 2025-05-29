import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingSlider = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Starter",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for casual listeners",
      features: [
        "Ad-supported streaming",
        "100 song library limit",
        "Basic playlists",
        "Standard audio quality",
        "Email support"
      ],
      cta: "Get Started"
    },
    {
      id: 2,
      name: "Pro",
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      description: "For serious music enthusiasts",
      features: [
        "Ad-free experience",
        "Unlimited library",
        "Advanced mood filters",
        "High quality audio",
        "Collaborative playlists",
        "Offline listening",
        "Priority support"
      ],
      cta: "Start Free Trial",
      featured: true
    },
    {
      id: 3,
      name: "Family",
      monthlyPrice: 14.99,
      annualPrice: 12.99,
      description: "Share with up to 6 people",
      features: [
        "All Pro features",
        "6 separate accounts",
        "Family mix generator",
        "Parental controls",
        "Shared payment",
        "Exclusive family content"
      ],
      cta: "Try Family Plan"
    }
  ];

  return (
    <section className="bg-background flex justify-center items-center" style={{ minHeight: '90vh', padding: '2rem 1rem' }}>
      <div className="max-w-7xl w-full flex flex-col" style={{ height: '100%' }}>
        <h2 className="text-3xl font-light text-center mb-4 text-white">Choose Your Plan</h2>
        <p className="text-white text-center max-w-2xl mx-auto mb-8">
          Select the perfect plan for your listening experience. All plans include our core features.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-8">
          <span className={`mr-4 cursor-pointer select-none ${!annualBilling ? 'font-semibold text-primary' : 'text-secondary'}`}>Monthly</span>
          <button
            onClick={() => setAnnualBilling(!annualBilling)}
            className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
              annualBilling ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="w-7 h-7 bg-white rounded-full shadow-md"
              animate={{ x: annualBilling ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
          </button>
          <span className={`ml-4 cursor-pointer select-none ${annualBilling ? 'font-semibold text-primary' : 'text-secondary'}`}>
            Annual <span className="text-sm text-indigo-600">(Save 20%)</span>
          </span>
        </div>

        {/* Slider Container */}
        <div className="relative flex-grow">
          {/* Cards */}
          <div className="flex overflow-x-auto pb-8 scrollbar-hide space-x-8 px-6" style={{ height: 'calc(100% - 160px)' }}>
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`flex-shrink-0 w-72 md:w-80 rounded-xl border overflow-hidden transition-all duration-300 cursor-pointer ${
                  plan.featured ? 'shadow-2xl' : 'shadow-lg'
                } ${
                  activeCard === plan.id
                    ? 'border-indigo-600 scale-105 bg-white'
                    : 'border-gray-300 bg-gray-50'
                }`}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveCard(plan.id)}
                style={{ height: '500px', display: 'flex', flexDirection: 'column' }}
              >
                <div className={`h-2 ${
                  plan.featured ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gray-300'
                }`}></div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>
                      {plan.featured && (
                        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-extrabold text-gray-900">
                        ${annualBilling ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500">/{annualBilling ? 'year' : 'month'}</span>
                      {annualBilling && plan.monthlyPrice !== 0 && (
                        <p className="text-sm text-gray-500 mt-1">
                          ${plan.monthlyPrice} billed monthly
                        </p>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6 max-h-48 overflow-auto pr-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white hover:from-indigo-700 hover:to-purple-800'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveCard(plan.id)}
                className={`w-4 h-4 rounded-full transition-all ${
                  activeCard === plan.id ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`View ${plan.name} plan`}
              />
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-gray-500 text-sm mt-8">
          All plans come with a 30-day money-back guarantee. No credit card required for free plan.
        </p>
      </div>
    </section>
  );
};

export default PricingSlider;
