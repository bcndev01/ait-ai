import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">
            <strong>AceIt AI</strong> | Effective Date: January 10, 2026 | Last Updated: January 10, 2026
          </p>

          <hr className="border-white/10 my-8" />

          {/* Section 1: Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.1 Who We Are</h3>
            <p className="text-gray-300 leading-relaxed">
              Welcome to AceIt AI ("we," "us," or "our"). We are an AI-powered educational study companion designed to help students achieve academic success. AceIt AI provides intelligent tools for learning, studying, and mastering educational content.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.2 What This Policy Covers</h3>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use the AceIt AI mobile application ("App") available on iOS devices (iPhone and iPad). It describes your privacy rights and how the law protects you.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">1.3 When This Policy Applies</h3>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy applies whenever you use our App, create an account, access our services, or interact with our features. By using AceIt AI, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.1 Information You Provide Directly</h3>

            <p className="text-gray-300 mb-3"><strong>Account Data:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Email address (for account creation and communication)</li>
              <li>Password (stored in encrypted/hashed format)</li>
              <li>Apple ID identifier (if using Apple Sign-In)</li>
              <li>Profile information such as display name and preferences</li>
            </ul>

            <p className="text-gray-300 mt-4 mb-3"><strong>User-Generated Content:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Flashcard decks and individual cards you create</li>
              <li>Study notes you save or generate with AI assistance</li>
              <li>Mind maps and visual concept diagrams</li>
              <li>Quiz attempts, answers, and scores</li>
              <li>Documents you scan and extracted text</li>
              <li>Conversation history with the AI Tutor</li>
              <li>Solutions saved from Question Solver</li>
              <li>Library items and folder organization</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.2 Information Collected Automatically</h3>

            <p className="text-gray-300 mb-3"><strong>Learning & Progress Data:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Study session duration and frequency</li>
              <li>Quiz performance and accuracy rates</li>
              <li>Flashcard mastery levels and review patterns</li>
              <li>Topics and subjects you study</li>
              <li>XP earned and level progression</li>
              <li>Achievements unlocked</li>
              <li>Study streak information</li>
            </ul>

            <p className="text-gray-300 mt-4 mb-3"><strong>Technical Data:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Device type and model (iPhone, iPad)</li>
              <li>iOS version</li>
              <li>App version</li>
              <li>Crash logs and performance diagnostics</li>
              <li>General usage patterns and feature interactions</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">2.3 Information from Third-Party Services</h3>

            <p className="text-gray-300 mb-3"><strong>Subscription Data:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Subscription status (Free or Pro tier)</li>
              <li>Subscription type and renewal date</li>
              <li>Purchase history (managed and processed by Apple)</li>
            </ul>
            <p className="text-gray-300 mt-3">
              Note: We do not receive or store your payment card information. All payment processing is handled securely by Apple through the App Store.
            </p>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use the information we collect for the following purposes:</p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.1 Provide and Improve Our Services</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Create and manage your account</li>
              <li>Deliver core App features and functionality</li>
              <li>Store and sync your content across sessions</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Continuously improve and optimize the App</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.2 Personalize Your Experience</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Customize AI responses based on your learning context</li>
              <li>Provide personalized study recommendations</li>
              <li>Adapt difficulty levels based on your performance</li>
              <li>Display relevant achievements and progress milestones</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.3 Process AI Requests and Generate Content</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Answer questions through the AI Tutor</li>
              <li>Generate practice quizzes based on topics you specify</li>
              <li>Create comprehensive study notes</li>
              <li>Build mind maps and visual concept diagrams</li>
              <li>Provide step-by-step solutions to problems</li>
              <li>Extract and process text from scanned documents</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.4 Track Learning Progress and Statistics</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Calculate and display your study statistics</li>
              <li>Track XP, levels, and achievements</li>
              <li>Maintain study streak records</li>
              <li>Generate insights in your Analytics Dashboard</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.5 Communication and Notifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Send important service updates and announcements</li>
              <li>Notify you about subscription changes</li>
              <li>Remind you about study sessions (if enabled)</li>
              <li>Respond to support requests</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.6 Analytics and Improvement</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Analyze usage patterns to improve features</li>
              <li>Identify and fix technical issues</li>
              <li>Measure App performance and stability</li>
              <li>Develop new features based on user behavior</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">3.7 Security and Fraud Prevention</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Detect and prevent unauthorized access</li>
              <li>Identify suspicious or abusive behavior</li>
              <li>Protect the integrity of our services</li>
              <li>Enforce our Terms of Service</li>
            </ul>
          </section>

          {/* Section 4: AI Processing and Your Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">4. AI Processing and Your Data</h2>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
              <p className="text-gray-300 text-sm">
                <strong className="text-blue-400">AI Processing Notice:</strong> To provide AI-powered features, your content may be processed by third-party AI service providers. These providers have their own privacy policies governing data handling. We select providers that meet industry-standard security and privacy requirements.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.1 How AI Features Work</h3>
            <p className="text-gray-300 leading-relaxed">
              AceIt AI uses advanced artificial intelligence to power features like the AI Tutor, Quiz Generator, Study Notes, Mind Maps, and Question Solver. When you use these features, your input is processed by secure cloud-based AI services to generate helpful educational content.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.2 What Data Is Sent to AI Services</h3>
            <p className="text-gray-300 mb-3">When you use AI features, we send:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Your questions, prompts, or topic requests</li>
              <li>Text extracted from scanned documents (for processing)</li>
              <li>Context necessary to generate relevant responses</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.3 Data Used for Generating Responses</h3>
            <p className="text-gray-300 leading-relaxed">
              AI responses are generated based solely on your input and general educational knowledge. We do not use your personal data to train AI models. Your conversations and content remain private to your account.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">4.4 AI Limitations and Accuracy</h3>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-3">
              <p className="text-gray-300 text-sm">
                <strong className="text-yellow-400">Important:</strong> AI-generated content is provided for educational assistance only. While we strive for accuracy, AI responses may contain errors or outdated information. Always verify important information through official sources, textbooks, or qualified educators. AI content should not be submitted as your own original work.
              </p>
            </div>
          </section>

          {/* Section 5: Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Storage and Security</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.1 Secure Cloud Storage</h3>
            <p className="text-gray-300 leading-relaxed">
              Your data is stored on secure cloud servers provided by reputable infrastructure providers. We use industry-leading cloud services that maintain strict security certifications and compliance standards.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.2 Encryption</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>In Transit:</strong> All data transmitted between your device and our servers is encrypted using HTTPS/TLS protocols</li>
              <li><strong>At Rest:</strong> Sensitive data stored on our servers is encrypted using industry-standard encryption algorithms</li>
              <li><strong>Passwords:</strong> User passwords are securely hashed and never stored in plain text</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.3 Access Controls</h3>
            <p className="text-gray-300 leading-relaxed">
              Access to user data is strictly limited to authorized personnel who require it for legitimate operational purposes. We implement role-based access controls and maintain audit logs of data access.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.4 Security Measures</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Regular security assessments and vulnerability testing</li>
              <li>Secure development practices and code reviews</li>
              <li>Incident response procedures</li>
              <li>Regular backups with secure storage</li>
              <li>Monitoring for suspicious activities</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">5.5 Security Limitations</h3>
            <p className="text-gray-300 leading-relaxed">
              While we implement robust security measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data using industry best practices.
            </p>
          </section>

          {/* Section 6: Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing</h2>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
              <p className="text-gray-300 text-sm">
                <strong className="text-green-400">We do not sell your personal data.</strong> Your information is never sold to third parties for advertising, marketing, or any other purposes.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">6.1 Service Providers</h3>
            <p className="text-gray-300 mb-3">We share data with trusted service providers who assist in operating our App:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Cloud Infrastructure Providers:</strong> For secure data storage and processing</li>
              <li><strong>AI Processing Services:</strong> To power intelligent features and generate educational content</li>
              <li><strong>Analytics Providers:</strong> To understand usage patterns and improve the App</li>
              <li><strong>Payment Processors:</strong> Apple handles all subscription payments through the App Store</li>
            </ul>
            <p className="text-gray-300 mt-3">
              These providers are contractually obligated to protect your data and may only use it for the specific purposes we authorize.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">6.2 Legal Requirements</h3>
            <p className="text-gray-300 leading-relaxed">
              We may disclose your information if required by law, regulation, legal process, or governmental request. We may also disclose information to protect our rights, privacy, safety, or property, or that of our users or the public.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">6.3 Business Transfers</h3>
            <p className="text-gray-300 leading-relaxed">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and the choices you may have.
            </p>
          </section>

          {/* Section 7: Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.1 How Long We Keep Your Data</h3>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information and user-generated content for as long as your account is active and as necessary to provide our services. Your flashcards, notes, mind maps, and other content remain accessible until you choose to delete them or your account.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.2 Deletion Upon Account Termination</h3>
            <p className="text-gray-300 leading-relaxed">
              When you delete your account, we will delete or anonymize your personal information within 30 days. Some information may be retained longer if required for legal compliance, dispute resolution, or legitimate business purposes.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">7.3 Backup Retention</h3>
            <p className="text-gray-300 leading-relaxed">
              Backup copies of data may be retained for a limited period (typically up to 90 days) for disaster recovery purposes, after which they are automatically purged.
            </p>
          </section>

          {/* Section 8: Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">You have control over your personal data:</p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.1 Access Your Data</h3>
            <p className="text-gray-300 leading-relaxed">
              You can view your account information, content, and learning statistics directly within the App. You may also request a copy of your personal data by contacting us.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.2 Correct Inaccurate Data</h3>
            <p className="text-gray-300 leading-relaxed">
              You can update your profile information, display name, and preferences through the App settings. For other corrections, contact us at support@aceitai.app.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.3 Delete Your Account and Data</h3>
            <p className="text-gray-300 leading-relaxed">
              You can delete your account at any time through the App settings. This will permanently remove your account and all associated content, including flashcards, notes, mind maps, quiz history, and progress data.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.4 Export Your Data</h3>
            <p className="text-gray-300 leading-relaxed">
              You may request a copy of your data in a portable format by contacting us at support@aceitai.app. We will provide your data within a reasonable timeframe.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.5 Opt-Out of Analytics</h3>
            <p className="text-gray-300 leading-relaxed">
              You can opt out of analytics collection through the App settings. Note that some basic usage data may still be collected for essential App functionality and security.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">8.6 Manage Notification Preferences</h3>
            <p className="text-gray-300 leading-relaxed">
              You can control which notifications you receive through the App settings and your device's notification settings.
            </p>
          </section>

          {/* Section 9: Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.1 Age Rating</h3>
            <p className="text-gray-300 leading-relaxed">
              AceIt AI is rated 4+ on the App Store, meaning it is suitable for all ages. The App is designed for students, including high school, college, university students, and lifelong learners.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.2 Not Designed for Children Under 13</h3>
            <p className="text-gray-300 leading-relaxed">
              While our App is family-friendly, it is not specifically designed for or targeted at children under 13 years of age. We do not knowingly collect personal information from children under 13 without verifiable parental consent.
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">9.3 Parental Contact</h3>
            <p className="text-gray-300 leading-relaxed">
              If you are a parent or guardian and believe your child under 13 has provided us with personal information without your consent, please contact us immediately at support@aceitai.app. We will take steps to remove such information from our systems.
            </p>
          </section>

          {/* Section 10: International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information, including standard contractual clauses and other legally recognized transfer mechanisms.
            </p>
          </section>

          {/* Section 11: Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Services</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">11.1 Service Categories</h3>
            <p className="text-gray-300 mb-3">We use the following categories of third-party services:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Cloud Service Providers:</strong> Secure infrastructure for data storage and application hosting</li>
              <li><strong>AI Processing Services:</strong> Advanced language models for educational content generation</li>
              <li><strong>Analytics Providers:</strong> Tools to understand App usage and improve performance</li>
              <li><strong>Payment Processors:</strong> Apple App Store for subscription management</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">11.2 External Links</h3>
            <p className="text-gray-300 leading-relaxed">
              The App may contain links to external websites or services not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party sites. We encourage you to review the privacy policies of any external services you visit.
            </p>
          </section>

          {/* Section 12: GDPR Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">12. GDPR Rights (European Users)</h2>
            <p className="text-gray-300 mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the General Data Protection Regulation (GDPR):
            </p>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">12.1 Lawful Basis for Processing</h3>
            <p className="text-gray-300 mb-3">We process your data based on:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Consent:</strong> When you agree to specific data processing (which you may withdraw at any time)</li>
              <li><strong>Contract:</strong> When processing is necessary to provide our services to you</li>
              <li><strong>Legitimate Interests:</strong> When we have a valid business reason that doesn't override your rights</li>
              <li><strong>Legal Obligation:</strong> When we must comply with legal requirements</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">12.2 Your GDPR Rights</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
            </ul>

            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at support@aceitai.app. You also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          {/* Section 13: CCPA Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">13. CCPA Rights (California Users)</h2>
            <p className="text-gray-300 mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information. Note: We do not sell your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
            </ul>

            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at support@aceitai.app or use the account deletion feature in the App.
            </p>
          </section>

          {/* Section 14: Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to This Policy</h2>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">14.1 How We Notify You</h3>
            <p className="text-gray-300 mb-3">We may update this Privacy Policy from time to time. When we make changes, we will:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Update the "Last Updated" date at the top of this policy</li>
              <li>Post the updated policy in the App</li>
              <li>Send you a notification for material changes (via email or in-app notification)</li>
            </ul>

            <h3 className="text-xl font-medium text-purple-400 mt-6 mb-3">14.2 Acceptance</h3>
            <p className="text-gray-300 leading-relaxed">
              Your continued use of AceIt AI after any changes to this Privacy Policy constitutes your acceptance of the updated terms. If you do not agree with the changes, please discontinue use of the App and delete your account.
            </p>
          </section>

          {/* Section 15: Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-white font-semibold mb-2">AceIt AI</p>
              <p className="text-gray-300">
                Email: <a href="mailto:support@aceitai.app" className="text-purple-400 hover:text-purple-300 transition-colors">support@aceitai.app</a>
              </p>
            </div>
            <p className="text-gray-300 mt-4">
              We aim to respond to all inquiries within 30 days. For urgent matters related to your account security, please indicate this in your message subject line.
            </p>
          </section>

          <hr className="border-white/10 my-8" />

          <p className="text-gray-400 text-sm italic">
            This Privacy Policy is provided in English. If translated into other languages, the English version shall prevail in case of any inconsistencies.
          </p>

          <p className="text-gray-500 text-sm mt-8">
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

export default PrivacyPolicy;
