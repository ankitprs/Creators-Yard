import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Account Creation</h2>
          <p>1.1 Users can create accounts on Creators Yard.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Content Creation and Uploads</h2>
          <p>
            2.1 Users can create and/or upload content, including but not limited
            to text and images.
          </p>
          <p>
            2.2 For infringement notices related to user-uploaded content, please
            contact us at <span className="text-blue-500">ankitpr2001@gmail.com</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Purchases</h2>
          <p>3.1 Users can buy goods, items, or services on Creators Yard.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Subscription Plans</h2>
          <p>4.1 Creators Yard offers subscription plans.</p>
          <p>4.2 There is no free trial available for subscription plans.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
          <p>
            5.1 Our content, including the logo, visual design, trademarks, and
            other proprietary materials, is the exclusive property of Creators Yard.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Feedback and Suggestions</h2>
          <p>
            6.1 If users provide feedback or suggestions, Creators Yard may implement
            them without providing compensation or credits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Promotions, Contests, Sweepstakes</h2>
          <p>7.1 Creators Yard may offer promotions, contests, or sweepstakes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            8.1 Users can contact Creators Yard for any questions regarding these
            Terms & Conditions by email at{' '}
            <span className="text-blue-500">ankitpr2001@gmail.com</span>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Modification of Terms</h2>
          <p>
            9.1 Creators Yard reserves the right to modify these Terms at any time.
            Any changes will be effective immediately upon posting on the Website.
            It is the {`user's`} responsibility to review these Terms regularly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">10. Termination</h2>
          <p>
            10.1 Creators Yard reserves the right to terminate or suspend user
            accounts at its discretion, with or without cause.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">11. Governing Law</h2>
          <p>11.1 These Terms are governed by the laws of India and the state of West Bengal.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">12. Miscellaneous</h2>
          <p>12.1 These Terms constitute the entire agreement between users and Creators Yard.</p>
          <p>
            12.2 If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will remain in full force and effect.
          </p>
        </section>

        <p className="text-gray-700 mt-6">
          By using Creators Yard, you agree to these Terms. If you have any
          questions, please contact us at{' '}
          <a href="mailto:ankitpr2001@gmail.com" className="text-blue-500 hover:underline">
            ankitpr2001@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export { TermsAndConditions };
