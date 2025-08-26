'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Droplet, Flame, Wind, Leaf, Upload, ArrowLeft } from "lucide-react";
import "@/styles/globals.css";

const SERVICES = {
  water: {
    icon: Droplet,
    title: "Water Damage Restoration",
    subtitle: "Rapid extraction, structural drying & moisture verification",
    intro:
      "Burst pipe, storm ingress or overflows — our certified techs make safe, extract, and dry to industry standards with daily monitoring and documentation.",
    bullets: [
      "Emergency make-safe & water extraction",
      "Thermal imaging & moisture mapping",
      "Desiccant/LGR dehumidification & air movement",
      "Antimicrobial application & odour control",
      "Daily psychrometric readings & reports",
    ],
    process: [
      "Assess, make safe & isolate services",
      "Extract standing water, remove unsalvageable materials",
      "Install drying system; set drying goals",
      "Daily monitoring & adjustments",
      "Sanitise, verify dryness & handover report",
    ],
    faqs: [
      {
        q: "How long does drying take?",
        a: "Drying time varies by materials and site conditions; we set clear drying targets and monitor daily until verified dry.",
      },
      {
        q: "Do you work with insurers?",
        a: "Yes. We can supply moisture logs, photos and a scope to support your claim.",
      },
    ],
  },
  fire: {
    icon: Flame,
    title: "Fire & Smoke Restoration",
    subtitle: "Soot removal, corrosion control & deodorisation",
    intro:
      "From small kitchen fires to major loss, we stabilise the site, remove residues, treat corrosion and neutralise smoke odours for safe reoccupation.",
    bullets: [
      "Site make-safe & contents triage",
      "Soot/smoke residue removal & corrosion control",
      "HEPA filtration & fine particle cleaning",
      "Thermal fogging / hydroxyl / ozone (as appropriate)",
      "Deodorisation & post-clean validation",
    ],
    process: [
      "Assess safety & protect unaffected areas",
      "Remove debris & heavy residues",
      "Clean structures & contents with correct chemistry",
      "Deodorise & air scrub",
      "Quality check & handover",
    ],
    faqs: [
      { q: "Is the smell permanent?", a: "No. With proper removal of residues and advanced deodorisation, odours can be neutralised." },
      { q: "Can you restore contents?", a: "Where viable, yes — we clean, deodorise and inventory." },
    ],
  },
  mould: {
    icon: Leaf,
    title: "Mould Remediation",
    subtitle: "Containment, removal & source moisture control",
    intro:
      "We follow industry best practices for safe remediation: containment, negative pressure, HEPA, removal of impacted materials and source moisture correction.",
    bullets: [
      "Assessment & moisture diagnosis",
      "Engineering controls (containment & negative pressure)",
      "HEPA air filtration & surface cleaning",
      "Selective removal & disposal of affected materials",
      "Antimicrobial treatment & verification",
    ],
    process: [
      "Identify source moisture & scope",
      "Install containment & negative air",
      "HEPA vacuum & damp wipe",
      "Remove impacted materials as needed",
      "Final clean & verification",
    ],
    faqs: [
      { q: "Is it safe to stay during works?", a: "For small, contained areas it may be possible; we’ll advise case‑by‑case with safety as the priority." },
      { q: "Will it come back?", a: "Not if the moisture source is corrected and humidity managed." },
    ],
  },
  storm: {
    icon: Wind,
    title: "Storm & Impact Damage",
    subtitle: "Make-safe, water ingress control & temporary works",
    intro: "When severe weather hits, we secure the structure, prevent further loss and fast‑track drying and repairs.",
    bullets: [
      "Roof tarping & board‑ups",
      "Tree/impact make‑safe",
      "Water extraction & structural drying",
      "Debris removal & sanitisation",
      "Temporary power & environmental controls",
    ],
    process: [
      "Emergency attendance & risk control",
      "Weatherproof & secure",
      "Remove water/debris & stabilise",
      "Dry, clean & document",
      "Repair coordination & handover",
    ],
    faqs: [
      { q: "Can you attend after hours?", a: "Yes, we operate 24/7 with priority triage during events." },
      { q: "Do you cover regional areas?", a: "We service metro and selected regional areas — call for ETAs." },
    ],
  },
};

function ServicePage({ data, serviceKey, onBack, onQuote }) {
  const Icon = data.icon;
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
        </div>
        <p className="text-lg text-gray-700 mb-2">{data.subtitle}</p>
        <p className="text-gray-600 mb-8">{data.intro}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Key Capabilities</h2>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                {data.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Our Process</h2>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                {data.process.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {data.faqs.map((f, i) => (
            <Card key={i} className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="tel:+61403676345" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2">
              <Phone size={20} /> Call 0403 676 345 – 24/7
            </Button>
          </a>
          <Button
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-2xl"
            onClick={() => onQuote(serviceKey)}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [page, setPage] = useState("home");
  const [prefillService, setPrefillService] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleQuoteFromService = (label) => {
    setPrefillService(label || "");
    goQuote();
  };

  const goQuote = () => {
    if (page !== "home") {
      setPage("home");
      setTimeout(() => {
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#/", "");
      if (["water", "fire", "mould", "storm"].includes(h)) setPage(h);
      else setPage("home");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    if (page === "home") window.location.hash = "/";
    else window.location.hash = "/" + page;
  }, [page]);

  const goHome = () => setPage("home");
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const Home = (
    <>
      <section className="relative bg-[url('https://images.unsplash.com/photo-1581091012184-5c1f7e86aa0a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-3xl">
          <img src="/TLM%20BLUE.png" alt="TLM Logo" className="mx-auto w-40 mb-6" loading="lazy" decoding="async" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Restoring Properties. Restoring Peace of Mind.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            24/7 Emergency Restoration Services – Backed by TLM Services Group
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+61403676345" className="flex-1 md:flex-none">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-2xl flex items-center gap-2">
                <Phone size={20} /> Call 0403 676 345 – 24/7
              </Button>
            </a>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 text-lg rounded-2xl"
              onClick={() => { setPrefillService(""); goQuote(); }}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: "water", icon: <Droplet className="w-10 h-10 text-blue-600" />, title: "Water Damage", desc: "Rapid extraction & structural drying." },
              { key: "fire", icon: <Flame className="w-10 h-10 text-red-600" />, title: "Fire & Smoke", desc: "Soot removal & deodorisation." },
              { key: "mould", icon: <Leaf className="w-10 h-10 text-green-600" />, title: "Mould Remediation", desc: "Containment & safe removal." },
              { key: "storm", icon: <Wind className="w-10 h-10 text-gray-600" />, title: "Storm Damage", desc: "Make‑safe & weatherproofing." },
            ].map((service, idx) => (
              <motion.div whileHover={{ scale: 1.05 }} key={idx}>
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center justify-between h-full">
                    <div>
                      <div className="mb-4 flex justify-center">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                    </div>
                    <Button className="mt-2 bg-blue-600 text-white rounded-xl" onClick={() => setPage(service.key)}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Before & After</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={`https://picsum.photos/seed/before${item}/800/500`} alt="Before" className="w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl">Before</div>
              </div>
            ))}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={`https://picsum.photos/seed/after${item}/800/500`} alt="After" className="w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-xl">After</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            {[
              { name: "Sarah J.", text: "TLM responded within the hour and restored our home beautifully after storm damage." },
              { name: "Mark W.", text: "Professional, fast and reliable. The mould remediation was flawless." },
              { name: "Emily R.", text: "We couldn’t believe the transformation after fire damage. Highly recommend TLM Restoration." },
            ].map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-gray-50 p-6 rounded-2xl shadow">
                <p className="text-lg mb-4 italic">“{t.text}”</p>
                <p className="font-semibold">- {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Google Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "K. Singh", rating: 5, text: "Rapid response and daily updates. Highly recommend!" },
              { name: "L. Taylor", rating: 5, text: "Professional mould remediation – safe and thorough." },
              { name: "R. Chen", rating: 4.8, text: "Water damage dried and verified – smooth insurance process." },
            ].map((r, i) => (
              <Card key={i} className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <p className="font-semibold mb-1">{r.name}</p>
                  <p className="text-yellow-500 mb-2">{"★".repeat(Math.round(r.rating))} <span className="text-gray-500">{r.rating.toFixed(1)}</span></p>
                  <p className="text-gray-700">{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TLM Restoration",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "124"
              }
            })
          }}
        />
      </section>

      <section id="service-area" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Area</h2>
          <p className="text-lg text-gray-600 mb-8">
            We proudly service all of <strong>Greater Melbourne</strong> and regional <strong>Victoria</strong>.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {!mapLoaded ? (
              <div className="relative h-[450px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=1400&q=60')] opacity-20" aria-hidden="true"></div>
                <div className="z-10 text-center">
                  <p className="mb-4 text-gray-700">Load the interactive map (saves data & speeds up page load)</p>
                  <Button onClick={() => setMapLoaded(true)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 py-3">Load Map</Button>
                </div>
              </div>
            ) : (
              <iframe
                title="Victoria Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316203.2165743626!2d144.5937418!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3f5ddef2efb!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1700000000000&hl=en"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">
            Map is indicative only. Call <a className="underline" href="tel:+61403676345">0403 676 345</a> for ETAs outside metro areas.
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["CBD","Northern Suburbs","Eastern Suburbs","South‑East","Western Suburbs","Geelong","Ballarat","Bendigo","Gippsland","Surf Coast","Mornington Peninsula","Yarra Ranges","Macedon Ranges","High Country","Greater Shepparton"].map((area) => (
              <span key={area} className="px-3 py-1 rounded-full bg-white border text-gray-700">{area}</span>
            ))}
          </div>
          <noscript>
            <iframe
              title="Victoria Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316203.2165743626!2d144.5937418!3d-37.8136276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3f5ddef2efb!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1700000000000&hl=en"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </noscript>
        </div>
      </section>

      <section id="quote" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Request a Quote</h2>
          <form className="space-y-6" onSubmit={(e)=>{
            e.preventDefault();
            const form = e.target;
            const name = form[0].value.trim();
            const email = form[1].value.trim();
            const phone = form[2].value.trim();
            const service = form[3].value;
            const message = form[4].value.trim();
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const phoneOk = /^(\+?61|0)[2-478]\d{8}$/.test(phone.replace(/\s+/g, ""));
            const token = (typeof window !== 'undefined' && window.grecaptcha) ? window.grecaptcha.getResponse() : "";
            if (!name || !emailOk || !phoneOk || !service || message.length < 10) {
              alert("Please complete all fields with valid details.");
              return;
            }
            if (!token) {
              alert("Please complete the reCAPTCHA.");
              return;
            }
            alert("Thanks! Your request has been submitted.");
          }}>
            <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-4" required />
            <input type="email" placeholder="Email Address" className="w-full border rounded-xl p-4" required />
            <input type="tel" placeholder="Phone Number" className="w-full border rounded-xl p-4" required />
            <select className="w-full border rounded-xl p-4" defaultValue={prefillService || ""} required>
              <option value="" disabled>
                Select Service
              </option>
              <option>Water Damage</option>
              <option>Fire & Smoke</option>
              <option>Mould Remediation</option>
              <option>Storm & Impact</option>
            </select>
            <textarea placeholder="Describe the damage (when it happened, rooms affected, insurance details)" className="w-full border rounded-xl p-4" rows={4} required></textarea>
            <div className="flex items-center gap-2">
              <Upload className="text-gray-500" />
              <input type="file" className="w-full" />
            </div>
            <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            <Button type="submit" className="bg-blue-600 text-white w-full py-4 rounded-xl text-lg">Submit Request</Button>
          </form>
        </div>
      </section>
    </>
  );

  return (
    <div className="font-sans text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={goHome}>
            <img src="/TLM%20BLUE.png" alt="TLM Logo" className="w-10 h-10 object-contain" loading="lazy" decoding="async" />
            <span className="font-semibold">TLM Restoration</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="hover:text-blue-600" onClick={goHome}>Home</button>
            <button className="hover:text-blue-600" onClick={()=>setPage("water")}>Water</button>
            <button className="hover:text-blue-600" onClick={()=>setPage("fire")}>Fire</button>
            <button className="hover:text-blue-600" onClick={()=>setPage("mould")}>Mould</button>
            <button className="hover:text-blue-600" onClick={()=>setPage("storm")}>Storm</button>
            <button className="hover:text-blue-600" onClick={()=>scrollToId('service-area')}>Service Area</button>
            <button className="hover:text-blue-600" onClick={()=>{ setPrefillService(""); goQuote(); }}>Quote</button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {page === "home" && Home}
        {page === "water" && (<ServicePage data={SERVICES.water} serviceKey="Water Damage" onBack={goHome} onQuote={handleQuoteFromService} />)}
        {page === "fire" && (<ServicePage data={SERVICES.fire} serviceKey="Fire & Smoke" onBack={goHome} onQuote={handleQuoteFromService} />)}
        {page === "mould" && (<ServicePage data={SERVICES.mould} serviceKey="Mould Remediation" onBack={goHome} onQuote={handleQuoteFromService} />)}
        {page === "storm" && (<ServicePage data={SERVICES.storm} serviceKey="Storm & Impact" onBack={goHome} onQuote={handleQuoteFromService} />)}
      </main>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-blue-600 text-white flex justify-center items-center py-3 shadow-lg z-30">
        <a href="tel:+61403676345" className="flex items-center gap-2 text-lg font-semibold"><Phone size={20} /> Call 0403 676 345</a>
      </div>

      <div className="hidden md:flex fixed bottom-4 right-4 z-30">
        <div className="bg-white/95 backdrop-blur border shadow-lg rounded-2xl flex items-center gap-3 px-4 py-2">
          <a href="tel:+61403676345" className="flex items-center gap-2 font-semibold text-blue-700"><Phone size={18} /> 0403 676 345</a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl" onClick={()=>{ setPrefillService(""); goQuote(); }}>Quote</Button>
        </div>
      </div>

      <footer className="py-8 bg-gray-900 text-gray-300 text-center text-sm mt-20">
        <p>© {new Date().getFullYear()} TLM Restoration – Part of TLM Services Group. All rights reserved.</p>
      </footer>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TLM Restoration",
            url: "https://www.tlmrestoration.com.au",
            telephone: "+61 403 676 345",
            areaServed: ["Greater Melbourne", "Victoria"],
            parentOrganization: { "@type": "Organization", name: "TLM Services Group" },
            serviceArea: [{ "@type": "Place", name: "Victoria, Australia" }],
            makesOffer: [
              { "@type": "Offer", name: "Water Damage Restoration" },
              { "@type": "Offer", name: "Fire & Smoke Restoration" },
              { "@type": "Offer", name: "Mould Remediation" },
              { "@type": "Offer", name: "Storm Damage Response" }
            ]
          }),
        }}
      />
    </div>
  );
}
