"use client";

import { FormEvent, useEffect, useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";
import styles from "./SiteGate.module.css";

const UNLOCK_KEY = "ta_site_unlocked";
const CONSENT_KEY = "ta_consent";

/** Change this or set NEXT_PUBLIC_SITE_PASSWORD in .env.local */
const SITE_PASSWORD =
  process.env.NEXT_PUBLIC_SITE_PASSWORD?.trim() || "techassure";

type ConsentValue = "accepted" | "necessary" | null;

export function SiteGate() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [termsOk, setTermsOk] = useState(false);
  const [privacyOk, setPrivacyOk] = useState(false);
  const [marketingOk, setMarketingOk] = useState(false);

  useEffect(() => {
    const unlockedFlag = localStorage.getItem(UNLOCK_KEY) === "1";
    const consentFlag = localStorage.getItem(CONSENT_KEY) as ConsentValue;
    setUnlocked(unlockedFlag);
    setConsent(consentFlag === "accepted" || consentFlag === "necessary" ? consentFlag : null);
    setReady(true);
  }, []);

  const showPassword = ready && !unlocked;
  const showConsent = ready && unlocked && !consent;
  const blocking = showPassword || showConsent;

  useEffect(() => {
    if (!blocking) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [blocking]);

  function handleUnlock(e: FormEvent) {
    e.preventDefault();
    if (password.trim() === SITE_PASSWORD) {
      localStorage.setItem(UNLOCK_KEY, "1");
      setUnlocked(true);
      setError("");
      setPassword("");
      return;
    }
    setError("Incorrect password. Try again.");
  }

  function saveConsent(value: "accepted" | "necessary") {
    if (!termsOk || !privacyOk) {
      setError("Please agree to the Terms and Privacy Policy.");
      return;
    }
    localStorage.setItem(CONSENT_KEY, value);
    if (marketingOk) localStorage.setItem("ta_marketing", "1");
    setConsent(value);
    setError("");
  }

  if (!blocking) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} />

      {showPassword && (
        <div className={styles.modal} aria-labelledby="pwd-title">
          <div className={styles.iconWrap}>
            <Lock size={28} />
          </div>
          <h2 id="pwd-title">Enter password</h2>
          <p className={styles.copy}>
            This shop is currently private. Enter the access password to continue.
          </p>
          <form className={styles.form} onSubmit={handleUnlock}>
            <label className={styles.label} htmlFor="site-password">
              Password
            </label>
            <input
              id="site-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className={styles.input}
              placeholder="Enter password"
              autoFocus
            />
            {error && !showConsent ? <p className={styles.error}>{error}</p> : null}
            <button type="submit" className={`btn btn-primary ${styles.submit}`}>
              Unlock shop
            </button>
          </form>
        </div>
      )}

      {showConsent && (
        <div className={styles.modal} aria-labelledby="consent-title">
          <div className={styles.iconWrap}>
            <ShieldCheck size={28} />
          </div>
          <h2 id="consent-title">Privacy & consent</h2>
          <p className={styles.copy}>
            We use cookies and process data to run techassure — shopping, support, and
            (if you allow) marketing updates in Ghana.
          </p>

          <div className={styles.checks}>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={termsOk}
                onChange={(e) => {
                  setTermsOk(e.target.checked);
                  setError("");
                }}
              />
              <span>
                I agree to the <a href="#terms">Terms of Service</a>
              </span>
            </label>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={privacyOk}
                onChange={(e) => {
                  setPrivacyOk(e.target.checked);
                  setError("");
                }}
              />
              <span>
                I agree to the <a href="#privacy">Privacy Policy</a>
              </span>
            </label>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={marketingOk}
                onChange={(e) => setMarketingOk(e.target.checked)}
              />
              <span>Send me deals and product updates (optional)</span>
            </label>
          </div>

          {error ? <p className={styles.error}>{error}</p> : null}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => saveConsent("necessary")}
            >
              Necessary only
            </button>
            <button
              type="button"
              className={`btn btn-primary ${styles.submit}`}
              onClick={() => saveConsent("accepted")}
            >
              Accept & continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
