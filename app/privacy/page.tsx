import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Política de Privacidad - ¿Tas Morido?',
  description: 'Política de Privacidad de la aplicación ¿Tas Morido?',
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>💀</div>
        <h1>Política de Privacidad</h1>
        <a href="/" className={styles.backLink}>← Volver al inicio</a>
      </header>

      <div className={styles.content}>
        <p className={styles.updated}><strong>Última actualización:</strong> 18/06/2026</p>

        <h2>1. Introducción</h2>
        <p>
          ¿Tas Morido? (&quot;la App&quot;, &quot;nosotros&quot;) es una aplicación de seguridad personal tipo &quot;check-in&quot; que notifica a un contacto de emergencia si el usuario no confirma su bienestar dentro de un intervalo de tiempo configurado. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos, y cómo la protegemos.
        </p>
        <p>Al usar la App, aceptas las prácticas descritas en este documento.</p>

        <h2>2. Información que Recopilamos</h2>

        <h3>2.1 Información que tú proporcionas directamente</h3>
        <ul>
          <li><strong>Tu nombre</strong>: usado para identificarte en el mensaje de alerta enviado a tu contacto de emergencia.</li>
          <li><strong>Nombre y número de teléfono de tu contacto de emergencia</strong>: usado únicamente para enviarle una alerta por WhatsApp si no confirmas tu bienestar a tiempo.</li>
        </ul>

        <h3>2.2 Información de la libreta de contactos del dispositivo</h3>
        <p>
          Si eliges la opción &quot;Elegir de mis contactos&quot;, la App accede temporalmente a tu lista de contactos del teléfono <strong>únicamente para que puedas buscar y seleccionar</strong> a tu contacto de emergencia. No copiamos, almacenamos, ni transmitimos tu libreta de contactos completa — solo se guarda el nombre y número del contacto que tú selecciones.
        </p>

        <h3>2.3 Información generada por el uso de la App</h3>
        <ul>
          <li>Fecha y hora de tu último check-in.</li>
          <li>Intervalo de tiempo configurado entre check-ins.</li>
          <li>Preferencias de recordatorio (cuántas horas antes del límite quieres ser notificado).</li>
        </ul>

        <h3>2.4 Información que NO recopilamos</h3>
        <ul>
          <li>No recopilamos tu ubicación.</li>
          <li>No recopilamos mensajes, fotos, ni contenido multimedia.</li>
          <li>
            No recopilamos información de pago directamente. La App tiene un costo único de descarga ($2.50 USD aproximadamente, sujeto a cambios), procesado de forma segura por <strong>Google Play Billing</strong>. Nosotros no recibimos ni almacenamos tu información de tarjeta de crédito/débito — esa información es manejada exclusivamente por Google conforme a su propia política de privacidad: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
          </li>
          <li>No utilizamos cookies de rastreo ni identificadores publicitarios.</li>
        </ul>

        <h2>3. Cómo Almacenamos tu Información</h2>
        <p>
          Toda la información mencionada en las secciones 2.1 y 2.3 se almacena <strong>localmente en tu dispositivo</strong>, utilizando el almacenamiento seguro propio del sistema operativo (AsyncStorage). <strong>No mantenemos una base de datos central ni un servidor donde se almacene tu información personal.</strong>
        </p>
        <p>Esto significa que:</p>
        <ul>
          <li>Si desinstalas la App, toda tu información almacenada se elimina permanentemente.</li>
          <li>Nadie más que tú tiene acceso directo a esta información mientras está en tu dispositivo.</li>
        </ul>

        <h2>4. Cómo y Cuándo Compartimos tu Información</h2>
        <p>La única situación en la que tu información (tu nombre y el número de tu contacto de emergencia) se transmite fuera de tu dispositivo es:</p>
        <p><strong>Cuando no confirmas tu bienestar (&quot;check-in&quot;) dentro del tiempo límite que configuraste.</strong></p>
        <p>
          En ese momento, la App envía tu nombre y el número de tu contacto de emergencia a <strong>Twilio Inc.</strong>, un proveedor externo de servicios de mensajería, que a su vez transmite el mensaje de alerta a través de la plataforma de <strong>WhatsApp Business (Meta)</strong> para que tu contacto reciba la notificación.
        </p>
        <p>No compartimos, vendemos, ni alquilamos tu información a terceros para fines publicitarios o de marketing.</p>

        <h3>4.1 Proveedores externos involucrados</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Función</th>
              <th>Información que recibe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Twilio Inc.</td>
              <td>Envío del mensaje de alerta</td>
              <td>Tu nombre, número del contacto de emergencia</td>
            </tr>
            <tr>
              <td>Meta / WhatsApp Business</td>
              <td>Entrega del mensaje al contacto</td>
              <td>Número del contacto de emergencia, contenido del mensaje</td>
            </tr>
            <tr>
              <td>Google Play Billing</td>
              <td>Procesamiento del pago único de descarga</td>
              <td>Información de pago (tarjeta, método de pago) — nosotros no la recibimos ni almacenamos</td>
            </tr>
          </tbody>
        </table>

        <p>Estos proveedores procesan la información únicamente para cumplir la función de envío del mensaje, conforme a sus propias políticas de privacidad:</p>
        <ul>
          <li>Twilio: <a href="https://www.twilio.com/en-us/legal/privacy" target="_blank" rel="noopener noreferrer">twilio.com/en-us/legal/privacy</a></li>
          <li>Google Play: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
          <li>WhatsApp/Meta: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">whatsapp.com/legal/privacy-policy</a></li>
        </ul>

        <h2>5. Notificaciones Push</h2>
        <p>La App utiliza notificaciones locales (no remotas) para recordarte que debes hacer check-in. Estas notificaciones se generan y procesan completamente en tu dispositivo, sin pasar por servidores externos.</p>

        <h2>6. Seguridad de tu Información</h2>
        <p>Implementamos las siguientes medidas para proteger tu información:</p>
        <ul>
          <li>Los datos personales se almacenan localmente en tu dispositivo, reduciendo el riesgo de filtraciones masivas.</li>
          <li>La comunicación con Twilio se realiza mediante conexiones cifradas (HTTPS/TLS).</li>
          <li>Las credenciales de acceso a servicios externos (API keys) no están expuestas en el código de la aplicación distribuida.</li>
        </ul>
        <p>Ninguna transmisión de datos por internet es 100% segura. Aunque implementamos medidas razonables, no podemos garantizar la seguridad absoluta de la información.</p>

        <h2>7. Tus Derechos</h2>
        <p>Como tus datos se almacenan localmente en tu dispositivo, tú tienes control directo sobre ellos:</p>
        <ul>
          <li><strong>Modificar</strong>: puedes cambiar tu nombre, contacto de emergencia, o preferencias en cualquier momento desde la App.</li>
          <li><strong>Eliminar</strong>: puedes eliminar tu contacto de emergencia desde la App, o desinstalar la App para eliminar toda la información almacenada.</li>
          <li><strong>Acceder</strong>: toda tu información está visible directamente en las pantallas de la App.</li>
        </ul>

        <h2>8. Menores de Edad</h2>
        <p>La App no está dirigida a menores de 13 años (o la edad mínima aplicable según tu país). No recopilamos intencionalmente información de menores de edad.</p>

        <h2>9. Cambios a esta Política</h2>
        <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Notificaremos cambios significativos a través de la App o actualizando la fecha en la parte superior de este documento.</p>

        <h2>10. Contacto</h2>
        <p>Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:</p>
        <p>
          <strong>Correo:</strong> <a href="mailto:hola@ozcampos.com">hola@ozcampos.com</a><br />
          <strong>Sitio web:</strong> <a href="https://tasmorido.com">tasmorido.com</a>
        </p>

        <hr className={styles.divider} />
        <p className={styles.note}>English summary available upon request. This policy is provided primarily in Spanish as the app&apos;s primary market is Spanish-speaking Latin America.</p>
      </div>
    </div>
  );
}
