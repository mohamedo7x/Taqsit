import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "ar";

type Dict = typeof en;

const en = {
  brand: "Taqsit",
  nav: { features: "Features", how: "How it works", pricing: "Pricing", faq: "FAQ", signin: "Sign in", getStarted: "Get Started" },
  hero: {
    title: "Manage merchants' installations — simply",
    desc: "Taqsit brings everything together: schedules, tracking, and updates. A clear, modern experience inspired by the best booking platforms.",
    primary: "Get Started",
    secondary: "Contact Sales",
    note: "No credit card required.",
    stats: { merchants: "Active merchants", ontime: "On‑time schedules", satisfaction: "Satisfaction" },
  },
  features: {
    title: "Everything you need — nothing you don’t",
    desc: "Built to be clear and fast, using a familiar, booking‑style experience.",
    items: {
      dashboard: { title: "Unified dashboard", desc: "Track all merchant installations in one clear, simple view." },
      insights: { title: "Smart insights", desc: "Understand performance with clean metrics and trends." },
      reminders: { title: "On-time reminders", desc: "Automated nudges that keep schedules on track." },
      team: { title: "Team ready", desc: "Invite teammates and manage roles effortlessly." },
      secure: { title: "Secure by default", desc: "Best practices baked in to keep your data safe." },
      fast: { title: "Fast setup", desc: "Get started in minutes with zero heavy lifting." },
    },
  },
  how: { title: "How it works", steps: ["Add merchants", "Set installations", "Track progress"] },
  testimonials: { title: "Trusted by modern teams", desc: "A few words from companies keeping installations on track with Taqsit.", quote: "We replaced spreadsheets with Taqsit. Our team finally sees everything in one place.", author: "Ops Lead, Northline", headline: "Clean and straightforward." },
  pricing: { title: "Simple pricing", tiers: ["Starter", "Team", "Business"], cta: (tier: string) => `Choose ${tier}` },
  faq: {
    title: "Frequently asked questions",
    desc: "Quick answers about Taqsit and how it helps manage merchants' installations.",
    items: [
      { q: "What is Taqsit?", a: "Taqsit is a simple platform to manage merchants' installations — timelines, tracking, and coordination all in one place." },
      { q: "Is this connected to a database?", a: "No. This demo uses only dummy data and local UI — no backend setup required." },
      { q: "Can I customize the workflow?", a: "Yes. Adjust statuses, labels, and views to match how your merchants operate." },
      { q: "How much does it cost?", a: "We offer a free trial with simple pricing as you grow. Contact us for details." },
    ],
  },
  cta: { title: "Ready to streamline installations?", desc: "Start free. Bring clarity to every merchant installation.", primary: "Get Started" },
  footer: {
    product: "Product",
    company: "Company",
    resources: "Resources",
    about: "About",
    careers: "Careers",
    contact: "Contact",
    docs: "Docs",
    guides: "Guides",
    support: "Support",
    terms: "Terms",
    privacy: "Privacy",
    tagline: "Simple platform for managing merchants' installations.",
    rights: (year: number) => `© ${year} Taqsit. All rights reserved.`,
  },
  seo: {
    title: "Taqsit — Simple Merchant Installations Platform",
    desc: "Manage merchants' installations with a clean, simple workflow. Fast setup, clear tracking, and effortless control.",
  },
};

const ar: Dict = {
  brand: "تقسِط",
  nav: { features: "الميزات", how: "كيف يعمل", pricing: "الأسعار", faq: "الأسئلة", signin: "تسجيل الدخول", getStarted: "ابدأ الآن" },
  hero: {
    title: "إدارة عمليات تركيب التجار — ببساطة",
    desc: "تجمع تقسِط كل شيء معًا: الجداول، التتبع، والتحديثات. تجربة عصرية واضحة مستوحاة من أفضل منصات الحجز.",
    primary: "ابدأ الآن",
    secondary: "تواصل مع المبيعات",
    note: "لا حاجة لبطاقة ائتمان.",
    stats: { merchants: "تجار نشطون", ontime: "الجداول في الوقت المحدد", satisfaction: "الرضا" },
  },
  features: {
    title: "كل ما تحتاجه — دون تعقيد",
    desc: "مصمم ليكون واضحًا وسريعًا بأسلوب شبيه بمنصات الحجز.",
    items: {
      dashboard: { title: "لوحة موحدة", desc: "تابع جميع عمليات التركيب في واجهة واحدة بسيطة." },
      insights: { title: "تحليلات ذكية", desc: "افهم الأداء بمؤشرات واتجاهات واضحة." },
      reminders: { title: "تذكيرات في موعدها", desc: "تنبيهات تلقائية تبقي الجداول على المسار." },
      team: { title: "جاهز للفِرق", desc: "ادعُ زملاءك وأدر الأدوار بسهولة." },
      secure: { title: "أمان افتراضي", desc: "أفضل الممارسات لحماية بياناتك." },
      fast: { title: "بدء سريع", desc: "ابدأ خلال دقائق دون عناء." },
    },
  },
  how: { title: "كيف يعمل", steps: ["أضف التجار", "حدد التركيبات", "تابع التقدم"] },
  testimonials: { title: "موثوق به من فرق حديثة", desc: "آراء من شركات تعتمد تقسِط للالتزام بالجداول.", quote: "استغنينا عن الجداول. كل شيء واضح في مكان واحد.", author: "قائد العمليات، نورث لاين", headline: "بسيط وواضح." },
  pricing: { title: "أسعار بسيطة", tiers: ["البدء", "الفريق", "الأعمال"], cta: (tier: string) => `اختر ${tier}` },
  faq: {
    title: "الأسئلة المتكررة",
    desc: "إجابات سريعة حول تقسِط وكيف تساعد في إدارة التركيبات.",
    items: [
      { q: "ما هي تقسِط؟", a: "منصة بسيطة لإدارة عمليات تركيب التجار — الجداول والتتبع والتنسيق في مكان واحد." },
      { q: "هل هناك قاعدة بيانات؟", a: "لا. هذا العرض يستخدم بيانات تجريبية وواجهة محلية فقط." },
      { q: "هل يمكن تخصيص سير العمل؟", a: "نعم. عدّل الحالات والعناوين والعروض كما يناسب عملك." },
      { q: "ما هي التكلفة؟", a: "تجربة مجانية مع أسعار بسيطة عند التوسع. تواصل معنا للتفاصيل." },
    ],
  },
  cta: { title: "جاهز لتبسيط التركيبات؟", desc: "ابدأ مجانًا. اجعل كل عملية واضحة.", primary: "ابدأ الآن" },
  footer: {
    product: "المنتج",
    company: "الشركة",
    resources: "الموارد",
    about: "من نحن",
    careers: "الوظائف",
    contact: "اتصل بنا",
    docs: "الوثائق",
    guides: "أدلة",
    support: "الدعم",
    terms: "الشروط",
    privacy: "الخصوصية",
    tagline: "منصة بسيطة لإدارة عمليات تركيب التجار.",
    rights: (year: number) => `© ${year} تقسِط. جميع الحقوق محفوظة.`,
  },
  seo: {
    title: "تقسِط — منصة بسيطة لإدارة تركيب التجار",
    desc: "أدر عمليات التركيب بوضوح وسهولة. إعداد سريع وتتبع واضح وتحكم سلس.",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({ lang: "en", setLang: () => {}, t: en });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => (typeof window !== "undefined" ? ((localStorage.getItem("lang") as Lang) || "en") : "en"));

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => (lang === "ar" ? ar : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
