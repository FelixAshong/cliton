import Link from "next/link";
import {
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronRight,
  FileText,
  Handshake,
  Home,
  Map,
  MapPin,
  Notebook,
  Package,
  Truck,
  User,
} from "lucide-react";
import styles from "./TrackOrderDetails.module.css";

const steps = [
  { label: "Order Placed", icon: Notebook, status: "done" as const },
  { label: "Packaging", icon: Package, status: "current" as const },
  { label: "On The Road", icon: Truck, status: "upcoming" as const },
  { label: "Delivered", icon: Handshake, status: "upcoming" as const },
];

type ActivityTone = "success" | "info";

const activities: {
  message: string;
  time: string;
  tone: ActivityTone;
  Icon: typeof CheckCheck;
}[] = [
  {
    message: "Your order has been delivered. Thank you for shopping at techassure!",
    time: "23 Jan, 2021 at 7:32 PM",
    tone: "success",
    Icon: CheckCheck,
  },
  {
    message: "Our delivery man (John Wick) has picked-up your order for delivery.",
    time: "23 Jan, 2021 at 2:00 PM",
    tone: "info",
    Icon: User,
  },
  {
    message: "Your order has reached at last mile hub.",
    time: "22 Jan, 2021 at 8:00 AM",
    tone: "info",
    Icon: MapPin,
  },
  {
    message: "Your order on the way to (last mile) hub.",
    time: "21 Jan, 2021 at 5:32 AM",
    tone: "info",
    Icon: Map,
  },
  {
    message: "Your order is successfully verified.",
    time: "20 Jan, 2021 at 7:32 PM",
    tone: "success",
    Icon: CheckCircle2,
  },
  {
    message: "Your order has been confirmed.",
    time: "19 Jan, 2021 at 2:61 PM",
    tone: "info",
    Icon: FileText,
  },
];

export function TrackOrderDetails() {
  const currentIndex = steps.findIndex((s) => s.status === "current");

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbInner}`}>
          <Link href="/" className={styles.crumb}>
            <Home size={18} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumb}>Pages</span>
          <ChevronRight size={12} />
          <Link href="/track-order" className={styles.crumb}>
            Track Order
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Details</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <div className={styles.card}>
          <div className={styles.tracking}>
            <div className={styles.heading}>
              <div className={styles.headingMeta}>
                <p className={styles.orderId}>#96459761</p>
                <div className={styles.funFact}>
                  <span>4 Products</span>
                  <span aria-hidden>•</span>
                  <span>Order Placed in 17 Jan, 2021 at 7:32 PM</span>
                </div>
              </div>
              <p className={styles.price}>$1199.00</p>
            </div>

            <p className={styles.arrival}>
              <span className={styles.arrivalLabel}>Order expected arrival </span>
              <span className={styles.arrivalDate}>23 Jan, 2021</span>
            </p>

            <div className={styles.progress}>
              <div className={styles.progressTrack} aria-hidden>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `calc(${(currentIndex / (steps.length - 1)) * 100}% )`,
                  }}
                />
                {steps.map((step, index) => (
                  <span
                    key={step.label}
                    className={[
                      styles.dot,
                      step.status === "done" && styles.dotDone,
                      step.status === "current" && styles.dotCurrent,
                      step.status === "upcoming" && styles.dotUpcoming,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
                  >
                    {step.status === "done" ? <Check size={12} strokeWidth={3} /> : null}
                  </span>
                ))}
              </div>

              <div className={styles.steps}>
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className={[
                        styles.step,
                        step.status === "upcoming" && styles.stepMuted,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className={
                          step.status === "current"
                            ? styles.stepIconCurrent
                            : step.status === "done"
                              ? styles.stepIconDone
                              : styles.stepIconMuted
                        }
                      />
                      <p>{step.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.activity}>
            <h2>Order Activity</h2>
            <ul className={styles.activityList}>
              {activities.map((item) => {
                const Icon = item.Icon;
                return (
                  <li key={item.time + item.message} className={styles.activityItem}>
                    <span
                      className={[
                        styles.activityIcon,
                        item.tone === "success"
                          ? styles.activityIconSuccess
                          : styles.activityIconInfo,
                      ].join(" ")}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <div className={styles.activityText}>
                      <p>{item.message}</p>
                      <time>{item.time}</time>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
