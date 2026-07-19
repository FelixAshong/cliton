"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import styles from "./SiteGate.module.css";

const CONSENT_KEY = "ta_consent";

type ConsentValue = "accepted" | "declined" | null;

export function SiteGate() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    const consentFlag = localStorage.getItem(CONSENT_KEY) as ConsentValue;
    setConsent(
      consentFlag === "accepted" || consentFlag === "declined" ? consentFlag : null,
    );
    setReady(true);
  }, []);

  const showConsent = ready && !consent;

  useEffect(() => {
    if (!showConsent) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showConsent]);

  function saveConsent(value: "accepted" | "declined") {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  if (!showConsent) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} />

      <div className={styles.modal} aria-labelledby="consent-title">
        <div className={styles.iconWrap}>
          <ShieldCheck size={28} />
        </div>
        <h2 id="consent-title">We value your privacy</h2>
        <p className={styles.copy}>
          We use cookies and similar tech to run techassure — shopping, support, and
          site improvements. You can accept or decline non-essential cookies.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondary}
            onClick={() => saveConsent("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className={`btn btn-primary ${styles.submit}`}
            onClick={() => saveConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
