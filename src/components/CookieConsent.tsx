import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cityfarma-cookie-consent";

const updateConsent = (granted: boolean) => {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  }
  gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "accepted" : "rejected");
    } catch {
      /* ignore */
    }
    updateConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed top-0 inset-x-0 z-50 p-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-4 md:p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Cookie className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
          <p className="text-sm text-muted-foreground flex-1">
            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site, conforme a
            LGPD. Você pode aceitar ou recusar os cookies de análise. Saiba mais na nossa{" "}
            <Link to="/politica-de-privacidade" className="text-primary underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={() => decide(false)}>
              Recusar
            </Button>
            <Button size="sm" onClick={() => decide(true)}>
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
