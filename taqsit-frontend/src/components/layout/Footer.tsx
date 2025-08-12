import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-foreground" aria-hidden />
            <span className="text-base font-semibold tracking-tight">{t.brand}</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">{t.footer.product}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">{t.nav.features}</a></li>
            <li><a href="#pricing" className="hover:text-foreground">{t.nav.pricing}</a></li>
            <li><a href="#faq" className="hover:text-foreground">{t.nav.faq}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">{t.footer.company}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">{t.footer.about}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.careers}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">{t.footer.resources}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">{t.footer.docs}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.guides}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.support}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between text-xs text-muted-foreground">
          <p>{t.footer.rights(year)}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">{t.footer.terms}</a>
            <a href="#" className="hover:text-foreground">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
