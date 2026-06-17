'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      // Reset message after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>💀</div>
        <h1>¿Tas Morido?</h1>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Stay Connected. Stay Safe.</h2>
          <p>
            A dead man's switch app that keeps your loved ones in the loop. 
            Check in regularly, and if you miss a deadline, we'll automatically alert your emergency contact.
          </p>
          <p className={styles.subtitle}>
            Perfect for travelers, adventurers, and anyone who wants peace of mind.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⏰</div>
          <h3>Smart Reminders</h3>
          <p>Get notified before your deadline, so your contact never has to worry.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>📱</div>
          <h3>Easy Setup</h3>
          <p>Pick an emergency contact. Set your check-in interval. Done.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🚨</div>
          <h3>Instant Alerts</h3>
          <p>WhatsApp messages to your contact if you miss a check-in. Automatic and reliable.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Coming Soon to Google Play</h2>
        <p>¿Tas Morido? is launching for Android. Get notified when it's live.</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify Me</button>
        </form>

        {subscribed && (
          <p className={styles.success}>✅ Thanks! We'll let you know when we launch.</p>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>¿Tas Morido?</h4>
            <p>A safety check-in app for LatAm.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>
              Questions? Email us at{' '}
              <a href="mailto:contact@tasmorido.com">contact@tasmorido.com</a>
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <p>
              <a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms of Service</a>
            </p>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2026 ¿Tas Morido? All rights reserved.
        </p>
      </footer>
    </div>
  );
}
