import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight">{t.brand}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">{t.nav.features}</a>
          <a href="#how" className="hover:text-foreground transition-colors">{t.nav.how}</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">{t.nav.pricing}</a>
          <a href="#faq" className="hover:text-foreground transition-colors">{t.nav.faq}</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 pr-2 mr-2 border-r">
            <Globe className="h-4 w-4" aria-hidden />
            <Button variant={lang === "en" ? "secondary" : "ghost"} size="sm" onClick={() => setLang("en")}>EN</Button>
            <Button variant={lang === "ar" ? "secondary" : "ghost"} size="sm" onClick={() => setLang("ar")}>AR</Button>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex">{t.nav.signin}</Button>
          <Button>{t.nav.getStarted}</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
