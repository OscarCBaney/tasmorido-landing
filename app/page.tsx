'use client';

import React, { useState } from 'react';
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
          <h2>Vive Conectado. Mantente Seguro.</h2>
          <p>
            Una app de seguridad que mantiene informados a tus seres queridos. 
            Reporta que estás bien periódicamente, y si no lo haces a tiempo, alertaremos automáticamente a tu contacto de emergencia vía WhatsApp.
          </p>
          <p className={styles.subtitle}>
            Perfecto para viajeros, los que viven solos, y aquellos que buscan un poco de tranquilidad.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⏰</div>
          <h3>Recordatorios Inteligentes</h3>
          <p>Recibe un aviso antes de tu fecha límite, así tu contacto estará tranquilo.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>📱</div>
          <h3>Configuración Sencilla</h3>
          <p>Elige un contacto de emergencia. <br />Define cada cuánto te recordaremos reportarte. <br />Listo.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🚨</div>
          <h3>Alertas Instantáneas</h3>
          <p>Enviaremos un mensaje de WhatsApp a tu contacto si no te reportas a tiempo. <br />Automático y confiable.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Próximamente en Google Play y App Store.</h2>
        <p>¿Tas Morido? App está por llegar a Android. Recibe un aviso cuando esté disponible.</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="hola@ozcampos.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Avísame</button>
        </form>

        {subscribed && (
          <p className={styles.success}>✅ ¡Gracias! Te avisaremos cuando lancemos la app.</p>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>¿Tas Morido? App</h4>
            <p>Una app de seguridad y check-in para México y Latinoamérica.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contacto</h4>
            <p>
              ¿Preguntas? Escríbenos a{' '}
              <a href="mailto:hola@ozcampos.com">hola@ozcampos.com</a>
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <p>
              <a href="/privacy">Política de Privacidad</a> • <a href="/terms">Términos de Servicio</a>
            </p>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2026 ¿Tas Morido? - Baney Links - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
