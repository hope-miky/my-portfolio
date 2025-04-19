import React from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for our mobile application"
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              This Privacy Policy describes how we collect, use, and handle your
              personal information when you use our mobile application. We are
              committed to protecting your privacy and ensuring you have a
              positive experience when using our app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>None</li>
              </ul>

              <h3 className="text-xl font-medium">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Usage statistics and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To provide and maintain our services</li>
              <li>To improve and personalize your experience</li>
              <li>To ensure the security of our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. Your data is stored
              securely and accessed only by authorized personnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-gray-700">
              We may use third-party services that collect, monitor, and analyze
              data to improve our service. These third parties have their own
              privacy policies addressing how they use such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our service is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: tesfamichael@nilesync.com
              <br />
              Address: Addis Ababa, Ethiopia
            </p>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
