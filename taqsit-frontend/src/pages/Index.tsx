import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock3, Layout, ShieldCheck, TrendingUp, Users } from "lucide-react";
import IconBadge from "@/components/IconBadge";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const { t } = useLanguage();

  const featureItems = [
    { icon: <Layout />, title: t.features?.items?.dashboard?.title || "Unified dashboard", desc: t.features?.items?.dashboard?.desc || "Track all merchant installations in one clear, simple view." },
    { icon: <TrendingUp />, title: t.features?.items?.insights?.title || "Smart insights", desc: t.features?.items?.insights?.desc || "Understand performance with clean metrics and trends." },
    { icon: <Clock3 />, title: t.features?.items?.reminders?.title || "On-time reminders", desc: t.features?.items?.reminders?.desc || "Automated nudges that keep schedules on track." },
    { icon: <Users />, title: t.features?.items?.team?.title || "Team ready", desc: t.features?.items?.team?.desc || "Invite teammates and manage roles effortlessly." },
    { icon: <ShieldCheck />, title: t.features?.items?.secure?.title || "Secure by default", desc: t.features?.items?.secure?.desc || "Best practices baked in to keep your data safe." },
    { icon: <CheckCircle2 />, title: t.features?.items?.fast?.title || "Fast setup", desc: t.features?.items?.fast?.desc || "Get started in minutes with zero heavy lifting." },
  ];

  const faqItems = t.faq?.items && Array.isArray(t.faq.items) && t.faq.items.length > 0 ? t.faq.items : [
    { q: "What is Taqsit?", a: "Taqsit is a simple platform to manage merchants' installations — timelines, tracking, and coordination all in one place." },
    { q: "Is this connected to a database?", a: "No. This demo uses only dummy data and local UI — no backend setup required." },
    { q: "Can I customize the workflow?", a: "Yes. Adjust statuses, labels, and views to match how your merchants operate." },
    { q: "How much does it cost?", a: "We offer a free trial with simple pricing as you grow. Contact us for details." },
  ];

  const tiers = t.pricing?.tiers && t.pricing.tiers.length ? t.pricing.tiers : ["Starter", "Team", "Business"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={t.seo?.title || "Taqsit — Simple Merchant Installations Platform"}
        description={t.seo?.desc || "Manage merchants' installations with a clean, simple workflow. Fast setup, clear tracking, and effortless control."}
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: t.brand || "Taqsit",
          url: "/",
          description:
            t.seo?.desc || "Manage merchants' installations with a clean, simple workflow. Fast setup, clear tracking, and effortless control.",
        }}
      />

      <Header />

      <main>
        {/* Hero */}
        <motion.section className="relative" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted" />
          <div className="container mx-auto px-4 py-24 grid gap-8 md:grid-cols-2 items-center">
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">
                {t.hero?.title || "Manage merchants' installations — simply"}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-prose">
                {t.hero?.desc || "Taqsit brings everything together: schedules, tracking, and updates. A clear, modern experience inspired by the best booking platforms."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="">{t.hero?.primary || t.nav?.getStarted || "Get Started"}</Button>
                <Button variant="outline">{t.hero?.secondary || "Contact Sales"}</Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{t.hero?.note || "No credit card required."}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="md:pl-8">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "1.2k", label: t.hero?.stats?.merchants || "Active merchants" },
                    { value: "98%", label: t.hero?.stats?.ontime || "On-time schedules" },
                    { value: "4.9★", label: t.hero?.stats?.satisfaction || "Satisfaction" }
                  ].map((stat, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                      <div className="text-3xl font-semibold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="h-10 rounded-md border bg-muted" />
                  <div className="h-10 rounded-md border bg-muted" />
                  <div className="h-10 rounded-md border bg-muted" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section id="features" className="container mx-auto px-4 py-20" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <div className="mb-10 max-w-2xl">
            <motion.h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3" variants={fadeUp}>
              {t.features?.title || "Everything you need — nothing you don’t"}
            </motion.h2>
            <motion.p className="text-muted-foreground" variants={fadeUp}>
              {t.features?.desc || "Built to be clear and fast, using a familiar, booking-style experience."}
            </motion.p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((f, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.03 }}>
                <Card className="transition-transform duration-200 hover:-translate-y-0.5">
                  <CardHeader>
                    <div className="mb-2 text-foreground/80">
                      <IconBadge>{f.icon}</IconBadge>
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                    <CardDescription>{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How it works */}
        <motion.section
          id="how"
          className="bg-muted/50 border-y"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="container mx-auto px-4 py-20">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-10"
              variants={fadeUp}
            >
              {t.how?.title || "How it works"}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {(t.how?.steps || ["Add merchants", "Set installations", "Track progress"]).map(
                (step: string, i: number) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Step {i + 1}</CardTitle>
                        <CardDescription className="text-base text-foreground">
                          {step}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-24 rounded-md border bg-card" />
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mb-10 max-w-2xl">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
              variants={fadeUp}
            >
              {t.testimonials?.title || "Trusted by modern teams"}
            </motion.h2>
            <motion.p className="text-muted-foreground" variants={fadeUp}>
              {t.testimonials?.desc ||
                "A few words from companies keeping installations on track with Taqsit."}
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((tIdx) => (
              <motion.div key={tIdx} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">
                      {t.testimonials?.headline || "Clean and straightforward."}
                    </CardTitle>
                    <CardDescription>
                      {t.testimonials?.quote ||
                        "We replaced spreadsheets with Taqsit. Our team finally sees everything in one place."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-sm">
                      <SafeImage
                        src={undefined}
                        alt="Customer avatar"
                        className="h-8 w-8 rounded-full border bg-foreground/5 object-cover"
                      />
                      <div>
                        <div className="font-medium">
                          {t.testimonials?.author || "Ops Lead, Northline"}
                        </div>
                        <div className="text-muted-foreground">{t.brand || "Taqsit"}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          id="pricing"
          className="bg-muted/50 border-y"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="container mx-auto px-4 py-20">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-10"
              variants={fadeUp}
            >
              {t.pricing?.title || "Simple pricing"}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((tier: string, i: number) => (
                <motion.div key={tier} variants={fadeUp}>
                  <Card className="relative">
                    <CardHeader>
                      <CardTitle className="text-lg">{tier}</CardTitle>
                      <CardDescription>{"Everything you need to get going."}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <span className="text-3xl font-semibold">
                          {i === 0 ? "0" : i === 1 ? "29" : "79"}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Unlimited installations</li>
                        <li>• Team collaboration</li>
                        <li>• Email support</li>
                      </ul>
                      <div className="mt-6">
                        <Button className="w-full">
                          {t.pricing?.cta ? t.pricing.cta(tier) : `Choose ${tier}`}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="container mx-auto px-4 py-20 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="mb-10 max-w-7xl">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
              variants={fadeUp}
            >
              {t.faq?.title || "Frequently asked questions"}
            </motion.h2>
            <motion.p className="text-muted-foreground" variants={fadeUp}>
              {t.faq?.desc ||
                "Quick answers about Taqsit and how it helps manage merchants' installations."}
            </motion.p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="max-w-7xl divide-y rounded-lg border bg-card w-full"
          >
            {faqItems.map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger className="px-6 text-left">{f.q || "—"}</AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {f.a || "—"}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="border-t"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="container mx-auto px-4 py-20 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              {t.cta?.title || "Ready to streamline installations?"}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t.cta?.desc || "Start free. Bring clarity to every merchant installation."}
            </p>
            <Button size="lg">{t.cta?.primary || "Get Started"}</Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
