import React from 'react'

function Payment() {
    const paymentPlans = [
        {
            type: "Freelancer",
            descr: "the essentials to provide your best work for clients.",
            currency: "usd",
            price: 24,
            frequency: "month",
            features : ["5 products", "up to 1,000 subscribers", "basic analytics", "48-hour support response time"]
        },
        {
            type: "Startup",
            descr: "a plan that scales with your rapidly growing business.",
            currency: "usd",
            price: 32,
            frequency: "month",
            features: ["25 products", "up to 1,000 subscribers", "advance analytics", "24-hour support response time", "marketing automations"],
            mostPopular: true
        },
        {
            type: "Entrprise",
            descr: "dedicated support and infrastructure for your company.",
            currency: "usd",
            price: 48,
            frequency: "month",
            features : ["unlimited products", "unlimited subscribers", "advance analytics", "one-hour, dedicated support response time", "marketing automations", "salesforce, Clearbit Reveal & Marketo integrations"]
        }
    ]

    return (
        <div className='bg-[#fff] mx-auto max-w-7xl border px-4 lg:px-20 pt-20 mt-24 dark:bg-gray-200'>
            <div className='flex flex-col gap-8 mb-28'>
                <h2 className='text-black font-extrabold text-4xl tracking-wider dark:text-slate-700'> Pricing plan for teams of all sizes </h2>
                <p className='text-gray-600 max-w-2xl leading-6 sm:text-xl'> Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales. </p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
                    {paymentPlans.map((plan) => (
                        <div key={plan.descr} className="border border-slate-200 rounded-2xl px-8 shadow-md py-6 flex flex-col gap-6 dark:bg-slate-50 ">
                            <h3 className='font-bold tracking-wide dark:text-slate-600'> {plan.type} </h3>
                            <p className='first-letter:uppercase text-slate-600 sm:text-lg dark:text-slate-600'> {plan.descr} </p>
                            <div className='bg-slate-100 px-4 flex items-center gap-2 py-4 -mx-4 rounded-md'>
                                <span className='uppercase dark:text-slate-600'> {plan.currency} </span>
                                <span className='font-bold text-3xl dark:text-slate-700'> ${plan.price} </span>
                                <span className='font-semibold text-gray-500'> /{plan.frequency} </span>
                            </div>
                            <div className='mt-4 flex flex-col flex-1 gap-2'>
                                {plan.features.map((feature) => (
                                    <div key={feature.length} className="flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shrink-0 text-cyan-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className='text-gray-500 sm:text-xl'>{feature}</span>
                                    </div>
                            ))}
                            </div>

                            <a href='#' className={`mt-8 font-bold text-center ${plan.mostPopular? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-md' : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100 '} py-2 rounded-md`}> Start your trial </a>
                        </div>
                    ))}  
                </div>
            </div>      
        </div>
  )
}

export default Payment