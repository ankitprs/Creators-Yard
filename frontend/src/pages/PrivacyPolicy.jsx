import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <p>
            Welcome to Creators Yard! This Privacy Policy outlines how we collect,
            use, and protect your personal information when you use our
            software-as-a-service at https://creatorsyard.vercel.app/.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            1.1 We collect the following personal information from users:
          </p>
          <ul className="list-disc pl-6">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Social Media Profile information (e.g., YouTube Channel)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Contact Us</h2>
          <p>
            2.1 If you have any questions or concerns about our Privacy Policy,
            please contact us by email at{' '}
            <a href="mailto:ankitpr2001@gmail.com" className="text-blue-500 hover:underline">
              ankitpr2001@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Changes to the Privacy Policy</h2>
          <p>
            3.1 Creators Yard reserves the right to modify or update our Privacy Policy
            at any time. Any changes will be effective immediately upon posting on the
            Website. It is your responsibility to review this Privacy Policy periodically.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          Thank you for choosing Creators Yard. We are committed to protecting your
          privacy and providing a secure experience.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
