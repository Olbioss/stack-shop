/**
 * Default platform settings, inserted on first read if the table is empty.
 * Editing a value in the admin panel persists it; defaults never overwrite an
 * existing key (see getSettings' onConflictDoNothing).
 */
export const DEFAULT_SETTINGS: {
  key: string;
  value: string;
  description: string;
  category: string;
}[] = [
  {
    key: "site.name",
    value: "Stack Shop",
    description: "The name of the platform",
    category: "General",
  },
  {
    key: "site.description",
    value: "Multi-vendor e-commerce platform",
    description: "Platform description shown in meta tags",
    category: "General",
  },
  {
    key: "site.contact.email",
    value: "support@stackshop.com",
    description: "Primary contact email address",
    category: "Contact",
  },
  {
    key: "site.contact.phone",
    value: "+1 (555) 123-4567",
    description: "Primary contact phone number",
    category: "Contact",
  },
  {
    key: "payment.default.currency",
    value: "USD",
    description: "Default currency for transactions",
    category: "Payment",
  },
  {
    key: "payment.stripe.enabled",
    value: "true",
    description: "Enable Stripe payment gateway",
    category: "Payment",
  },
  {
    key: "shipping.default.method",
    value: "standard",
    description: "Default shipping method",
    category: "Shipping",
  },
  {
    key: "shipping.free.threshold",
    value: "50.00",
    description: "Minimum order value for free shipping",
    category: "Shipping",
  },
  {
    key: "email.smtp.host",
    value: "smtp.gmail.com",
    description: "SMTP server hostname",
    category: "Email",
  },
  {
    key: "email.smtp.port",
    value: "587",
    description: "SMTP server port",
    category: "Email",
  },
  {
    key: "security.session.timeout",
    value: "3600",
    description: "Session timeout in seconds",
    category: "Security",
  },
  {
    key: "security.password.min_length",
    value: "8",
    description: "Minimum password length",
    category: "Security",
  },
];
