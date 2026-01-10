import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-8">
            <strong>AceIt AI</strong> | Effective Date: January 10, 2026 | Last Updated: January 10, 2026
          </p>

          <hr className="border-white/10 my-8" />

          {/* Important Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-yellow-400 font-semibold mb-2">PLEASE READ THESE TERMS CAREFULLY</h3>
            <p className="text-gray-300 text-sm">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and AceIt AI governing your use of our mobile application. By downloading, installing, or using AceIt AI, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.1 Acceptance</h3>
            <p className="text-gray-300">
              By accessing or using AceIt AI ("App," "Service," "we," "us," or "our"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, do not download, install, or use the App.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.2 Eligibility</h3>
            <p className="text-gray-300">
              You must be at least 13 years of age to use this App. If you are under 18 (or the age of majority in your jurisdiction), you must have your parent or legal guardian's permission to use the App, and they must agree to these Terms on your behalf.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.3 Disagreement</h3>
            <p className="text-gray-300">
              If you do not agree with any part of these Terms, you must immediately stop using the App and delete it from your device.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Changes to Terms</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.1 Modifications</h3>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by updating the "Last Updated" date and, for significant changes, through in-app notifications or email.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.2 Acceptance of Changes</h3>
            <p className="text-gray-300">
              Your continued use of the App after any changes to these Terms constitutes your acceptance of the revised Terms. If you do not agree to the new Terms, you must stop using the App.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.3 Review Responsibility</h3>
            <p className="text-gray-300">
              We encourage you to review these Terms periodically to stay informed of any updates.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">3. License Grant</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.1 Limited License</h3>
            <p className="text-gray-300">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use the App on iPhone devices that you own or control, solely for your personal, non-commercial educational purposes.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.2 License Restrictions</h3>
            <p className="text-gray-300 mb-3">This license does NOT include the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify, copy, or create derivative works based on the App</li>
              <li>Use the App for any commercial purpose without written permission</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code</li>
              <li>Remove, alter, or obscure any copyright, trademark, or proprietary notices</li>
              <li>Transfer, sublicense, or assign your rights to any third party</li>
              <li>Use the App in any manner that violates applicable laws or regulations</li>
              <li>Use the App to develop competing products or services</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.3 Reservation of Rights</h3>
            <p className="text-gray-300">
              All rights not expressly granted to you are reserved by AceIt AI. This license does not grant you any rights to use our trademarks, logos, or other brand features.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Account Registration</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.1 Account Creation</h3>
            <p className="text-gray-300">
              To access certain features, you must create an account using your email address and password or through Apple Sign-In.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.2 Account Requirements</h3>
            <p className="text-gray-300 mb-3">You agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Keep your account information updated and accurate</li>
              <li>Maintain the security and confidentiality of your password</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Maintain only one account per person</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.3 Account Termination</h3>
            <p className="text-gray-300">
              We reserve the right to refuse service, terminate accounts, or restrict access at our sole discretion, particularly if we believe you have violated these Terms.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Subscription Terms</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.1 Service Tiers</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Free Tier</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 8 AI operations per day</li>
                  <li>• Basic features access</li>
                  <li>• Limited 3D models</li>
                  <li>• Standard support</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-5 border border-purple-500/30">
                <h4 className="text-white font-semibold mb-2">Pro Subscription</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Unlimited AI operations</li>
                  <li>• All features unlocked</li>
                  <li>• 100+ 3D educational models</li>
                  <li>• PDF export & text-to-speech</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.2 Billing</h3>
            <p className="text-gray-300">
              Pro subscriptions are available as Monthly or Yearly auto-renewable subscriptions. Prices are displayed in the App and may vary by region. Prices are subject to change with reasonable notice.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.3 Auto-Renewal</h3>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-3">
              <p className="text-gray-300 text-sm">
                <strong className="text-red-400">Important:</strong> Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current billing period. Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period at the same rate.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.4 Cancellation</h3>
            <p className="text-gray-300 mb-3">To cancel your subscription:</p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
              <li>Open Settings on your iPhone</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Select AceIt AI</li>
              <li>Tap "Cancel Subscription"</li>
            </ol>
            <p className="text-gray-300 mt-3">
              Cancellation takes effect at the end of your current billing period. You retain access to Pro features until then.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.5 Refunds</h3>
            <p className="text-gray-300">
              No refunds are provided for partial subscription periods, except as required by applicable law. All refund requests must be directed to Apple through their standard refund process, as all payments are processed through the App Store.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.6 Free Trials</h3>
            <p className="text-gray-300">
              If offered, free trial periods allow you to experience Pro features at no cost. If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription at the displayed price.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">You agree NOT to use the App to:</p>

            <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>Engage in academic dishonesty</strong> — Do not use the App to cheat on exams, tests, or assignments in violation of your institution's academic integrity policies</li>
              <li><strong>Submit AI content as original work</strong> — Do not present AI-generated content as your own original work without proper disclosure or in violation of applicable policies</li>
              <li><strong>Manipulate or abuse AI systems</strong> — Do not attempt to jailbreak, exploit, or manipulate AI features through prompt injection or other techniques</li>
              <li><strong>Upload prohibited content</strong> — Do not upload, share, or distribute content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li><strong>Infringe intellectual property</strong> — Do not upload copyrighted materials without authorization</li>
              <li><strong>Share account credentials</strong> — Do not share your login information or allow others to access your account</li>
              <li><strong>Use automated systems</strong> — Do not use bots, scrapers, or automated systems to access the Service</li>
              <li><strong>Interfere with the Service</strong> — Do not attempt to disrupt, hack, or interfere with the App's security or functionality</li>
              <li><strong>Harass others</strong> — Do not use the App to harass, abuse, stalk, or harm any person</li>
              <li><strong>Violate laws</strong> — Do not use the App for any unlawful purpose or in violation of any applicable laws or regulations</li>
            </ul>

            <p className="text-gray-300 mt-4">
              We reserve the right to investigate violations and take appropriate action, including account suspension or termination.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">7. AI-Generated Content</h2>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Important Disclaimers About AI Content</h3>
              <p className="text-gray-300 text-sm">
                AceIt AI uses artificial intelligence to provide educational assistance. Please read and understand the following limitations and responsibilities.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.1 Educational Purpose</h3>
            <p className="text-gray-300">
              AI features including the AI Tutor, Quiz Generator, Study Notes, Mind Maps, and Question Solver are provided for educational assistance and learning support only.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.2 No Accuracy Guarantee</h3>
            <p className="text-gray-300">
              AI responses are generated by machine learning systems and are <strong>NOT guaranteed to be 100% accurate</strong>. AI may produce incorrect, incomplete, or outdated information. We continuously work to improve accuracy, but errors will occur.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.3 Independent Verification</h3>
            <p className="text-gray-300">
              You should always verify important information independently through official sources, textbooks, or qualified educators. Do not rely solely on AI for critical academic decisions.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.4 Not a Replacement</h3>
            <p className="text-gray-300">
              AI is not a substitute for teachers, tutors, professors, or professional academic advice. It is a supplementary learning tool designed to assist your studies.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.5 Original Work</h3>
            <p className="text-gray-300">
              AI-generated content should not be submitted as your own original work. You are responsible for understanding and complying with your institution's academic integrity policies regarding AI assistance.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.6 No Liability</h3>
            <p className="text-gray-300">
              We are not responsible for any decisions you make or actions you take based on AI-generated content.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">8. User Content</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.1 Your Ownership</h3>
            <p className="text-gray-300">
              You retain ownership of the content you create within the App, including flashcards, notes, mind maps, and other original materials.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.2 License to Us</h3>
            <p className="text-gray-300 mb-3">By using the App, you grant us a limited license to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Store your content on our servers</li>
              <li>Process your content to provide App functionality</li>
              <li>Display your content back to you within the App</li>
              <li>Create backups for data protection purposes</li>
            </ul>
            <p className="text-gray-300 mt-3">
              We do not claim ownership of your user-generated content. This license is solely for the purpose of providing and improving our services.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.3 Your Responsibility</h3>
            <p className="text-gray-300">
              You are solely responsible for your content and must ensure it does not violate any third-party rights or applicable laws.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.4 Content Removal</h3>
            <p className="text-gray-300">
              We reserve the right to remove any content that violates these Terms without prior notice.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Intellectual Property</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.1 Our Ownership</h3>
            <p className="text-gray-300 mb-3">
              The App and all its contents, features, and functionality are owned by AceIt AI and are protected by intellectual property laws. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>App design, user interface, and user experience</li>
              <li>Source code, software, and algorithms</li>
              <li>Graphics, logos, icons, and visual elements</li>
              <li>3D educational models and interactive content</li>
              <li>Educational materials and generated content</li>
              <li>Trademarks and service marks</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.2 3D Models</h3>
            <p className="text-gray-300">
              The 100+ 3D educational models (anatomy, biology, chemistry, physics) are proprietary content. You may not copy, distribute, modify, or create derivative works from these models.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.3 Restrictions</h3>
            <p className="text-gray-300">
              Do not copy, modify, distribute, sell, or exploit any part of the App without our express written permission.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Privacy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Our collection, use, and protection of your information is governed by our <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the App, you consent to our Privacy Policy.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Services</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">11.1 Service Providers</h3>
            <p className="text-gray-300">
              The App uses third-party services to operate, including cloud infrastructure, AI processing, and analytics providers. Your use of the App is also subject to their respective terms and policies.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">11.2 App Store</h3>
            <p className="text-gray-300">
              The App is distributed through the Apple App Store. Your use is also subject to Apple's terms and conditions.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">11.3 Disclaimer</h3>
            <p className="text-gray-300">
              We are not responsible for the actions, content, or policies of any third-party services.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Disclaimers</h2>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
              <p className="text-gray-300 text-sm uppercase">
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">12.1 No Warranties</h3>
            <p className="text-gray-300 mb-3">We do not warrant or guarantee:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>The App will be uninterrupted, secure, or error-free</li>
              <li>The accuracy, reliability, or completeness of AI-generated content</li>
              <li>That using the App will result in specific academic outcomes or grades</li>
              <li>Compatibility with all devices or operating system versions</li>
              <li>That defects will be corrected in a timely manner</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">12.2 Educational Tool</h3>
            <p className="text-gray-300">
              AceIt AI is an educational tool designed to assist with learning. It is not a guarantee of academic success. Your results depend on many factors including your own effort and dedication.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">12.3 Use at Own Risk</h3>
            <p className="text-gray-300">
              Your use of the App is at your sole risk. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Limitation of Liability</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">13.1 Exclusion of Damages</h3>
            <p className="text-gray-300 mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ACEIT AI SHALL NOT BE LIABLE FOR ANY:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of data, profits, revenue, or business opportunities</li>
              <li>Academic outcomes, grades, or consequences</li>
              <li>Decisions made based on AI-generated content</li>
              <li>Service interruptions or unavailability</li>
              <li>Unauthorized access to your account</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">13.2 Maximum Liability</h3>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-300 text-sm">
                Our total liability for all claims arising from or related to the App shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or fifty US dollars ($50), whichever is greater.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">13.3 Jurisdictional Limitations</h3>
            <p className="text-gray-300">
              Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Indemnification</h2>
            <p className="text-gray-300 mb-3">
              You agree to defend, indemnify, and hold harmless AceIt AI, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your violation of these Terms</li>
              <li>Your content uploaded to or created in the App</li>
              <li>Your misuse of the App or its features</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">15. Termination</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">15.1 Termination by Us</h3>
            <p className="text-gray-300">
              We may suspend or terminate your access to the App at any time, with or without cause, with or without notice, for any violation of these Terms or for any other reason at our sole discretion.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">15.2 Termination by You</h3>
            <p className="text-gray-300">
              You may delete your account at any time through the App settings or by contacting us at support@aceitai.app.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">15.3 Effect of Termination</h3>
            <p className="text-gray-300 mb-3">Upon termination:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your license to use the App ends immediately</li>
              <li>You may lose access to your content and data</li>
              <li>Active subscriptions will not be refunded (except as required by law)</li>
              <li>Provisions that by their nature should survive will remain in effect (including disclaimers, limitation of liability, and indemnification)</li>
            </ul>
          </section>

          {/* Section 16 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">16. Governing Law</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">16.1 Applicable Law</h3>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">16.2 Dispute Resolution</h3>
            <p className="text-gray-300">
              Before initiating any formal dispute proceeding, you agree to first contact us at support@aceitai.app to attempt to resolve the dispute amicably for at least 30 days.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">16.3 Jurisdiction</h3>
            <p className="text-gray-300">
              Any disputes that cannot be resolved amicably shall be resolved in the appropriate courts with jurisdiction.
            </p>
          </section>

          {/* Section 17 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">17. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Section 18 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">18. Entire Agreement</h2>
            <p className="text-gray-300">
              These Terms, together with our Privacy Policy and any additional terms for specific features, constitute the entire agreement between you and AceIt AI regarding the App and supersede all prior agreements, understandings, and communications.
            </p>
          </section>

          {/* Section 19 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">19. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions, concerns, or feedback about these Terms, please contact us:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white font-semibold mb-2">AceIt AI</p>
              <p className="text-gray-300">
                Email: <a href="mailto:support@aceitai.app" className="text-purple-400 hover:text-purple-300 transition-colors">support@aceitai.app</a>
              </p>
            </div>
            <p className="text-gray-300 mt-4">
              We aim to respond to all inquiries within a reasonable timeframe.
            </p>
          </section>

          {/* Section 20 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">20. Apple-Specific Terms</h2>
            <p className="text-gray-300 mb-3">You acknowledge and agree that:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>These Terms are between you and AceIt AI only, not with Apple Inc.</li>
              <li>Apple has no obligation to provide maintenance or support for the App</li>
              <li>Apple is not responsible for addressing any claims relating to the App</li>
              <li>Apple is not responsible for any third-party claims of intellectual property infringement</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of these Terms</li>
              <li>Upon your acceptance of these Terms, Apple has the right to enforce them against you as a third-party beneficiary</li>
            </ul>
          </section>

          {/* Acknowledgment */}
          <section className="mb-12">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-3">Acknowledgment</h2>
              <p className="text-gray-300">
                BY DOWNLOADING, INSTALLING, OR USING ACEIT AI, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE APP.
              </p>
            </div>
          </section>

          <hr className="border-white/10 my-8" />

          <p className="text-gray-500 text-sm">
            © 2026 AceIt AI. All rights reserved.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to AceIt AI
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
