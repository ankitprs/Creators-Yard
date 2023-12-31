import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Refund Policy</h1>

        <section className="mb-8">
          <p>
            Welcome to Creators Yard! We appreciate your business and are committed
            to providing a satisfying experience with our software-as-a-service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Refund Period</h2>
          <p>
            1.1 Customers have up to 45 days from the date of purchase to request a
            refund for our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Refund Eligibility</h2>
          <p>
            2.1 Refunds are applicable to all purchases, including items on sale or
            discounted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Contact Us</h2>
          <p>
            3.1 If you have any questions or concerns about our Refund Policy,
            please contact us by email at{' '}
            <a href="mailto:ankitpr2001@gmail.com" className="text-blue-500 hover:underline">
              ankitpr2001@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Changes to the Refund Policy</h2>
          <p>
            4.1 Creators Yard reserves the right to modify or update our Refund Policy
            at any time. Any changes will be effective immediately upon posting on the
            Website. It is your responsibility to review this Refund Policy periodically.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          Thank you for choosing Creators Yard. We value your satisfaction and are
          here to assist you with any concerns.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
