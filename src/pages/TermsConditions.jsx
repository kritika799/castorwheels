import React from "react";

const TermsConditions = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center mb-2">
          Terms & Conditions
        </h1>

        <p className="text-center text-sm text-gray-500 mb-6">
          Wheels / Terms & Conditions
        </p>

        <h2 className="text-xl font-semibold text-center mb-4">
          Your Use of This Website is Governed By These Terms & Conditions
        </h2>

        <p className="text-center text-sm text-gray-500 mb-10">
          LAST UPDATED: January 22, 2026
        </p>

        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-sm leading-6 text-gray-700 space-y-4 mb-14">
          <p>
            Welcome to Wheels. These Terms & Conditions apply to the Wheels
            website, mobile sites, applications, services, platforms, and tools
            where these Terms & Conditions are posted or referenced.
          </p>

          <p>
            As used in these Terms & Conditions, “Wheels”, “we”, “us”, or “our”
            refers to Wheels and its affiliates.
          </p>

          <p className="font-semibold">
            Please read these Terms & Conditions carefully as they affect your
            legal rights. These Terms include an arbitration agreement that
            requires disputes to be resolved individually and not as part of a
            class action.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-3">Introduction</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Introduction</li>
              <li>Content</li>
              <li>License & Access</li>
              <li>Unlawful or Prohibited Uses</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-3">Your Account</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Your Account</li>
              <li>Modification & Termination</li>
              <li>User Reviews, Comments & Submissions</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-3">Wheels Services</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Loyalty Program</li>
              <li>Order Pickup & Delivery</li>
              <li>Wallet & Payments</li>
              <li>Membership Renewals</li>
              <li>Wheels Plus</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-3">Transactions</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>User Transactions</li>
              <li>Limitations on Quantity</li>
              <li>Availability & Errors</li>
              <li>International Shipping</li>
              <li>Returns & Refunds</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold mb-3">Miscellaneous</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Mobile Application Users</li>
              <li>Third-Party Links</li>
              <li>Risk of Loss</li>
              <li>Export Policy</li>
              <li>Financial Disclosure</li>
              <li>Disclaimers & Warranties</li>
              <li>Jurisdictional Issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;




