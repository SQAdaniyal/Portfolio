import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import GeneralContactForm from '@/components/GeneralContactForm';
import HireMeForm from '@/components/HireMeForm';
import Image from 'next/image';

const projects = [
  'Warehouse Management System',
  'E-commerce Platform',
  'Digital Analytics (Grafana)',
  'Inventory Management System',
  'Fintech Applications',
  'Bank Islami',
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-700 to-purple-800 py-20 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image src="/profile.svg" alt="profile" width={192} height={192} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold">Muhammad Daniyal Asif</h1>
            <h2 className="mt-3 text-2xl font-semibold text-blue-200">Executive SQA Engineer | Manual & Automation Tester</h2>
            <p className="mt-5 text-lg text-blue-100 max-w-2xl">
              Driving QA Excellence in Web, Mobile & FinTech applications. Expert in Test Strategy, Cypress, Appium, and performance testing.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://linkedin.com/in/muhammad-daniyal-asif-6b99b1204" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-700 transition duration-300 shadow-md">
                Connect on LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition duration-300 shadow-md">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <section>
          <SectionTitle>About Me 💡</SectionTitle>
          <Card className="leading-relaxed">
            Results-driven <strong>Executive SQA Engineer</strong> with 3+ years of experience in <strong>manual testing</strong>, <strong>automation frameworks</strong> (Cypress, Appium), and <strong>API & performance testing</strong>. Skilled in Agile practices and known for improving QA processes.
          </Card>
        </section>

        <section>
          <SectionTitle>Major Projects (sample)</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card key={p} className="border-l-4 border-blue-500">
                <h5 className="font-semibold text-lg text-gray-800">{p}</h5>
                <p className="mt-2 text-sm text-gray-600">Led QA, built regression suites, and improved release confidence.</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact">
          <SectionTitle>Contact Me 📧</SectionTitle>
          <p className="text-center text-gray-700 text-lg font-medium mb-10">
            Phone/WhatsApp: <span className="font-extrabold text-indigo-700">+92 342-2909366</span>
            <span className="mx-4 text-gray-400">|</span>
            Direct Email: <a href="mailto:mailtodaniyal11@gmail.com" className="text-indigo-600 hover:text-indigo-800 font-extrabold">mailtodaniyal11@gmail.com</a>
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <GeneralContactForm />
            <HireMeForm />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-12">
        <p className="text-lg font-medium">Muhammad Daniyal Asif</p>
        <p className="text-sm mt-1">Executive SQA Engineer</p>
        <p className="text-xs mt-3">© {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
