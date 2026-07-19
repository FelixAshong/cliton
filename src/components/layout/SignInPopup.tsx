"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, User } from "lucide-react";
import styles from "./SignInPopup.module.css";

type PanelPos = {
  top: number;
  right: number;
};

export function SignInPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pos, setPos] = useState<PanelPos>({ top: 0, right: 16 });
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const panelHeight = panelRef.current?.offsetHeight ?? 420;
      const gap = 12;
      const preferredTop = rect.bottom + gap;
      const maxTop = window.innerHeight - panelHeight - 16;
      const top = Math.max(16, Math.min(preferredTop, maxTop));

      setPos({
        top,
        right: Math.max(16, window.innerWidth - rect.right),
      });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    emailRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  const popup =
    open && mounted
      ? createPortal(
          <>
            <div className={styles.backdrop} aria-hidden onClick={close} />
            <div
              ref={panelRef}
              className={styles.panel}
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${panelId}-title`}
              style={{ top: pos.top, right: pos.right }}
            >
              <form
                className={styles.formBlock}
                onSubmit={(event) => {
                  event.preventDefault();
                  close();
                }}
              >
                <h2 className={styles.title} id={`${panelId}-title`}>
                  Sign in to your account
                </h2>

                <div className={styles.fields}>
                  <label className={styles.field}>
                    <span className={styles.label}>Email Address</span>
                    <input
                      ref={emailRef}
                      className={styles.input}
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <div className={styles.field}>
                    <div className={styles.labelRow}>
                      <label className={styles.label} htmlFor={`${panelId}-password`}>
                        Password
                      </label>
                      <Link
                        href="/forgot-password"
                        className={styles.forgot}
                        onClick={close}
                      >
                        Forget Password
                      </Link>
                    </div>
                    <div className={styles.inputWrap}>
                      <input
                        id={`${panelId}-password`}
                        className={`${styles.input} ${styles.inputWithIcon}`}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        required
                      />
                      <button
                        type="button"
                        className={styles.eye}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((value) => !value)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button type="submit" className={styles.login}>
                  Login
                  <ArrowRight size={20} aria-hidden />
                </button>
              </form>

              <div className={styles.createBlock}>
                <div className={styles.divider}>
                  <span>Don&apos;t have account</span>
                </div>
                <Link href="/sign-up" className={styles.create} onClick={close}>
                  Create account
                </Link>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div className={styles.wrap}>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-label="Account"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <User size={28} strokeWidth={1.5} />
      </button>
      {popup}
    </div>
  );
}
