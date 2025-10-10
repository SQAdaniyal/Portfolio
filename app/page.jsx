'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Send, FileText, Download, CheckCircle, XCircle } from 'lucide-react'

const FORMSPREE_GENERAL_ENDPOINT = 'https://formspree.io/f/YOUR_GENERAL_ENDPOINT'
const FORMSPREE_HIRE_ENDPOINT = 'https://formspree.io/f/YOUR_HIRE_ENDPOINT'
const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1-2onM6k5-ZdUIZjoVDjOSORv7BDhDNiX'

export default function Page() {
  const [gData, setGData] = useState({ name: '', email: '', message: '' })
  const [gStatus, setGStatus] = useState(null)
  const [gLoading, setGLoading] = useState(false)

  const [hData, setHData] = useState({ name: '', email: '', projectDetails: '' })
  const [hFile, setHFile] = useState(null)
  const [hStatus, setHStatus] = useState(null)
  const [hLoading, setHLoading] = useState(false)

  const projects = [
    'Warehouse Management System',
    'E-commerce Platform',
    'Digital Analytics (Grafana)',
    'Inventory Management System',
    'Fintech Applications',
    'Bank Islami',
    'Aik Digital',
    'Hugo Bank',
    'Bank Alfalah',
    'Faysal Bank',
    'Gym Management System',
    'Salon Management System',
    'E-commerce (Saudi Clients)',
    'Alarm System Tracking',
    'Digital Track System',
    'Authenticator Based Application',
    'Maintenance Management System',
    'HR Payroll System',
    'Resume Deduction System'
  ]

  const projectBlurb = 'Led QA team, performed Manual + Semi-Automation testing, validated core features (functional, API, performance), and optimized regression cycles for reliable releases.'

  async function sendGeneral(e) {
    e.preventDefault()
    setGLoading(true); setGStatus(null)
    try {
      const res = await fetch(FORMSPREE_GENERAL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gData)
      })
      if (res.ok) { setGStatus('success'); setGData({ name: '', email: '', message: '' }) }
      else setGStatus('error')
    } catch (err) { setGStatus('error') }
    setGLoading(false); setTimeout(()=>setGStatus(null),5000)
  }

  async function sendHire(e) {
    e.preventDefault()
    setHLoading(true); setHStatus(null)
    try {
      const fd = new FormData()
      fd.append('name', hData.name)
      fd.append('email', hData.email)
      fd.append('projectDetails', hData.projectDetails)
      if (hFile) fd.append('attachment', hFile)
      const res = await fetch(FORMSPREE_HIRE_ENDPOINT, { method: 'POST', body: fd })
      if (res.ok) { setHStatus('success'); setHData({ name: '', email: '', projectDetails: '' }); setHFile(null) }
      else setHStatus('error')
    } catch (err) { setHStatus('error') }
    setHLoading(false); setTimeout(()=>setHStatus(null),7000)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 90 }}>
            <Image src="/profile-placeholder.svg" alt="profile" width={240} height={240} className="rounded-full object-cover border-4 border-white shadow-xl" />
          </motion.div>
          <div className="flex-1 text-center md:text-left">
            <motion.h1 className="text-4xl md:text-5xl font-bold" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>Muhammad Daniyal Asif</motion.h1>
            <motion.h2 className="mt-3 text-xl text-blue-100" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>Driving QA Excellence | Manual & Automation Tester | Test Strategy & Process Improvement</motion.h2>
            <p className="mt-4 text-blue-100 max-w-2xl">Executive SQA Engineer with expertise in Web, Mobile & FinTech QA — test strategy, Cypress, Appium, JMeter, API testing, and mentoring QA teams.</p>
            <div className="mt-6 flex justify-center md:justify-start gap-3">
              <a href="mailto:mailtodaniyal11@gmail.com" className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-md"> <Mail className="w-4 h-4"/> Email</a>
              <a href="https://linkedin.com/in/muhammad-daniyal-asif-6b99b1204" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white px-4 py-2 rounded-md"> <Linkedin className="w-4 h-4"/> LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* ABOUT */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">About Me — QA Engineer • Automation Specialist • Mentor</h3>
          <div className="bg-white p-6 rounded-xl shadow">
            <p>Results-driven SQA professional with 3+ years of experience in Manual Testing, Automation frameworks, API & Performance testing. Skilled in Cypress, Appium, JMeter and known for building test strategy, mentoring teams and improving QA processes.</p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Core Skills & Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-3">Testing & Automation</h4>
              <ul className="text-gray-700 space-y-1">
                <li>Cypress, Appium, Playwright</li>
                <li>Mobile App Testing (iOS/Android)</li>
                <li>Web UI & Cross-Browser Testing</li>
                <li>Test Case Design & Documentation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-3">Advanced QA & Tools</h4>
              <ul className="text-gray-700 space-y-1">
                <li>API Testing (Postman/REST)</li>
                <li>Performance & Load Testing (JMeter)</li>
                <li>Security Testing basics</li>
                <li>CI/CD integration awareness</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">Executive SQA Engineer — QBS Co.</h4>
              <p className="text-sm text-gray-600">May 2025 – Present · Karachi, Pakistan</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Led QA across multiple web & mobile products; built automation frameworks (Cypress, Appium) and performance suites (JMeter, Grafana).</li>
                <li>Mentored junior QA engineers and established QA standards & workflows for consistent delivery.</li>
                <li>Introduced QA metrics (defect leakage, regression cycle time) that improved release confidence.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">SQA Automation Consultant — Xcelliti</h4>
              <p className="text-sm text-gray-600">Oct 2024 – May 2025 · Karachi, Pakistan</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Directed QA activities for e-commerce and warehouse management systems (WMS).</li>
                <li>Implemented semi-automated regression suites to cut down manual effort by 30%.</li>
                <li>Guided team on test strategy for checkout & payment flows, improving release quality.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">SQA Engineer — Enterprise64</h4>
              <p className="text-sm text-gray-600">2022 – 2024 · Karachi, Pakistan</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Performed manual and semi-automated testing for enterprise-scale applications in banking, HR, and digital platforms.</li>
                <li>Collaborated with developers and product managers in Agile sprints to ensure timely and high-quality releases.</li>
                <li>Contributed to mobile app test automation (Appium) and regression test suites.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">QA Engineer — Harvv</h4>
              <p className="text-sm text-gray-600">2021 – 2022 · Karachi, Pakistan</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Conducted functional and regression testing for web applications and internal tools.</li>
                <li>Designed test cases and executed manual testing cycles with defect tracking in Jira.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">QA Manual Tester — Engro</h4>
              <p className="text-sm text-gray-600">2020 – 2021 · Karachi, Pakistan</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Performed detailed manual QA for enterprise-level applications at Engro.</li>
                <li>Executed test plans covering functionality, integration, and regression testing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Major Projects (19+)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-semibold">{p}</h5>
                <p className="text-sm text-gray-600">{projectBlurb}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">B.S. Computer Science</h4>
              <p className="text-sm text-gray-600">Sir Syed University of Engineering and Technology — Karachi</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">Intermediate (Pre-Engineering)</h4>
              <p className="text-sm text-gray-600">NCR-CET Intermediate College — Karachi</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">Matriculation (Science)</h4>
              <p className="text-sm text-gray-600">Practical Schooling System — Karachi</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold">Certifications</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Cypress Automation with JavaScript</li>
                <li>Appium Mobile Automation</li>
                <li>API Testing (Postman)</li>
                <li>Performance Testing (JMeter)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold mb-4">General Inquiry</h4>
              <form onSubmit={sendGeneral} className="space-y-4">
                <input type="text" name="name" required placeholder="Your name" value={gData.name} onChange={(e)=>setGData({...gData, name: e.target.value})} className="w-full p-3 border rounded" />
                <input type="email" name="email" required placeholder="Your email" value={gData.email} onChange={(e)=>setGData({...gData, email: e.target.value})} className="w-full p-3 border rounded" />
                <textarea name="message" rows="4" required placeholder="Message" value={gData.message} onChange={(e)=>setGData({...gData, message: e.target.value})} className="w-full p-3 border rounded" />
                {gStatus === 'success' && <p className="text-green-600 flex items-center gap-2"><CheckCircle/> Message sent — I will reply soon.</p>}
                {gStatus === 'error' && <p className="text-red-600 flex items-center gap-2"><XCircle/> Error sending message.</p>}
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded inline-flex items-center gap-2">{gLoading ? 'Sending...' : <><Send/> Send Message</>}</button>
              </form>
            </div>

            <div>
              {/* HireMeForm placeholder */}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="font-semibold">Muhammad Daniyal Asif</p>
        <p className="text-sm">Executive SQA Engineer</p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  )
}
