import type { Metadata } from 'next';
import styles from '../privacy/privacy.module.css';

export const metadata: Metadata = {
  title: 'Términos de Servicio - ¿Tas Morido?',
  description: 'Términos de Servicio de la aplicación ¿Tas Morido?',
};

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>💀</div>
        <h1>Términos de Servicio</h1>
        <a href="/" className={styles.backLink}>← Volver al inicio</a>
      </header>

      <div className={styles.content}>
        <p className={styles.updated}><strong>Última actualización:</strong> 18/06/2026</p>

        <h2>1. Aceptación de los Términos</h2>
        <p>
          ¿Tas Morido? (&quot;la App&quot;, &quot;nosotros&quot;, &quot;el Servicio&quot;) es operada por Baney Links / Oscar Campos Baltazar (&quot;el Desarrollador&quot;). Al descargar, instalar o usar la App, aceptas estos Términos de Servicio (&quot;Términos&quot;) en su totalidad. Si no estás de acuerdo, no debes usar la App.
        </p>
        <p>Estos Términos se aplican junto con nuestra <a href="/privacy">Política de Privacidad</a>.</p>

        <h2>2. Qué es ¿Tas Morido?</h2>
        <p>
          ¿Tas Morido? es una herramienta de seguridad personal tipo &quot;check-in&quot;. Permite que el usuario confirme periódicamente su bienestar; si no lo hace dentro del intervalo configurado, la App intenta enviar una alerta automática por WhatsApp a un contacto de emergencia designado por el usuario.
        </p>
        <p><strong>¿Tas Morido? NO es:</strong></p>
        <ul>
          <li>Un servicio de emergencia médica, policial o de rescate.</li>
          <li>Un sustituto para llamar a servicios de emergencia (como el 911 o equivalente local).</li>
          <li>Un dispositivo médico ni un sistema de monitoreo de salud certificado.</li>
          <li>Una garantía de que alguien recibirá o responderá a la alerta a tiempo, o de ningún modo.</li>
        </ul>

        <h2>3. Elegibilidad</h2>
        <p>Para usar la App, debes:</p>
        <ul>
          <li>Tener al menos 18 años de edad. ¿Tas Morido? no está diseñada para menores de edad, dada la naturaleza crítica del servicio y la responsabilidad que implica para terceros (contactos de emergencia).</li>
          <li>Tener la capacidad legal para aceptar estos Términos.</li>
          <li>Proporcionar información de contacto de emergencia precisa y actualizada.</li>
        </ul>

        <h2>4. Responsabilidades del Usuario</h2>
        <p>Tú eres responsable de:</p>
        <ul>
          <li>Mantener actualizada la información de tu contacto de emergencia (nombre y número de WhatsApp válido).</li>
          <li>Realizar tus check-ins de manera oportuna según el intervalo que configures.</li>
          <li>Verificar periódicamente que la App funcione correctamente en tu dispositivo (permisos de notificaciones, conexión a internet, etc.).</li>
          <li>Informar a tu contacto de emergencia que ha sido designado como tal, para que reconozca y actúe ante una alerta.</li>
          <li>No depender exclusivamente de la App como tu único mecanismo de seguridad personal.</li>
        </ul>
        <p>El incumplimiento de estas responsabilidades puede afectar directamente la efectividad del Servicio, y el Desarrollador no es responsable por las consecuencias de dicho incumplimiento.</p>

        <h2>5. Pago y Facturación</h2>
        <p>
          La App tiene un costo único de descarga de <strong>$2.50 USD</strong> (precio aproximado, sujeto a cambios y a la conversión de moneda local aplicada por Google Play), procesado de forma segura a través de <strong>Google Play Billing</strong>. El Desarrollador no recibe ni almacena tu información de pago directamente.
        </p>
        <p><strong>Política de reembolsos</strong>: los reembolsos se rigen por las políticas estándar de Google Play. El Desarrollador no garantiza reembolsos fuera de lo que Google Play permita en su plataforma.</p>
        <p>El precio de descarga puede cambiar en el futuro para nuevos usuarios; los cambios de precio no afectan retroactivamente a quienes ya hayan descargado la App.</p>

        <h2>6. Disponibilidad del Servicio y Dependencia de Terceros</h2>
        <p>El funcionamiento de la App depende de servicios de terceros que el Desarrollador no controla, incluyendo pero no limitado a:</p>
        <ul>
          <li>Conexión a internet del usuario y del contacto de emergencia.</li>
          <li>Servicios de Twilio Inc. para el envío de mensajes.</li>
          <li>La plataforma de WhatsApp Business (Meta) para la entrega final del mensaje.</li>
          <li>El sistema operativo Android y sus servicios de notificaciones en segundo plano.</li>
        </ul>
        <p>
          <strong>El Desarrollador no garantiza</strong> que el Servicio funcionará de manera ininterrumpida, libre de errores, o que las alertas se entregarán siempre de manera oportuna o exitosa. Fallas en cualquiera de los servicios de terceros mencionados, cortes de energía, fallas de red, restricciones del sistema operativo (como la optimización de batería que puede pausar procesos en segundo plano) o circunstancias fuera del control razonable del Desarrollador pueden impedir o retrasar el envío de una alerta.
        </p>

        <h2>7. Exclusión de Garantías</h2>
        <p>
          LA APP SE PROPORCIONA &quot;TAL COMO ES&quot; Y &quot;SEGÚN DISPONIBILIDAD&quot;, SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, O QUE EL SERVICIO SERÁ ININTERRUMPIDO, OPORTUNO, SEGURO, O LIBRE DE ERRORES.
        </p>
        <p>
          EL DESARROLLADOR NO GARANTIZA QUE LAS ALERTAS DE EMERGENCIA SERÁN ENTREGADAS, RECIBIDAS O ATENDIDAS POR EL CONTACTO DESIGNADO EN NINGÚN PLAZO ESPECÍFICO, NI EN ABSOLUTO.
        </p>

        <h2>8. Limitación de Responsabilidad</h2>
        <p>
          EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EL DESARROLLADOR, SUS AFILIADOS, EMPLEADOS Y COLABORADORES NO SERÁN RESPONSABLES POR NINGÚN DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE, O PUNITIVO QUE SURJA DEL USO O LA IMPOSIBILIDAD DE USAR LA APP, INCLUYENDO PERO NO LIMITADO A:
        </p>
        <ul>
          <li>Lesiones personales, daños a la salud o muerte relacionados con una alerta no entregada, retrasada o entregada incorrectamente.</li>
          <li>Pérdidas económicas, daños emocionales o cualquier otro perjuicio derivado de la confianza depositada en el Servicio.</li>
          <li>Fallas de terceros (Twilio, Meta/WhatsApp, proveedores de internet, fabricantes de dispositivos, sistemas operativos).</li>
          <li>Pérdida de datos almacenados localmente en el dispositivo del usuario.</li>
        </ul>
        <p><strong>El usuario reconoce y acepta expresamente que usa la App bajo su propio riesgo</strong>, y que la App es una herramienta complementaria de tranquilidad, no un sistema de respuesta a emergencias garantizado.</p>
        <p>Si, a pesar de lo anterior, se determina que el Desarrollador es responsable ante el usuario bajo la ley aplicable, dicha responsabilidad total se limitará al monto pagado por el usuario por la App (es decir, $2.50 USD o el precio vigente al momento de la compra).</p>

        <h2>9. Indemnización</h2>
        <p>El usuario acuerda defender, indemnizar y mantener indemne al Desarrollador frente a cualquier reclamo, pérdida, daño o costo (incluyendo honorarios legales razonables) que surja de: (a) el uso indebido de la App por parte del usuario; (b) el incumplimiento de estos Términos; o (c) información de contacto de emergencia inexacta o desactualizada proporcionada por el usuario.</p>

        <h2>10. Privacidad y Datos</h2>
        <p>El uso de la App está también sujeto a nuestra <a href="/privacy">Política de Privacidad</a>, la cual explica qué información se recopila y cómo se utiliza. La mayoría de la información se almacena localmente en el dispositivo del usuario; el Desarrollador no mantiene una base de datos central de usuarios.</p>

        <h2>11. Modificaciones al Servicio y a estos Términos</h2>
        <p>El Desarrollador se reserva el derecho de modificar, suspender o discontinuar la App (o cualquier parte de ella) en cualquier momento, con o sin previo aviso. También podemos actualizar estos Términos ocasionalmente; el uso continuado de la App después de publicada una actualización constituye tu aceptación de los nuevos Términos.</p>

        <h2>12. Terminación</h2>
        <p>Puedes dejar de usar la App y desinstalarla en cualquier momento, lo cual eliminará la información almacenada localmente en tu dispositivo. El Desarrollador puede, a su discreción, restringir o suspender el acceso de un usuario al Servicio en caso de uso indebido o violación de estos Términos.</p>

        <h2>13. Ley Aplicable y Jurisdicción</h2>
        <p>Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa relacionada con estos Términos o el uso de la App se someterá a los tribunales competentes de Guanajuato, México, salvo que la ley aplicable en tu jurisdicción de residencia disponga lo contrario de forma obligatoria.</p>

        <h2>14. Fuerza Mayor</h2>
        <p>Ninguna de las partes será responsable por incumplimientos o retrasos causados por circunstancias fuera de su control razonable, incluyendo pero no limitado a desastres naturales, fallas generalizadas de telecomunicaciones o internet, fallas de proveedores externos (Twilio, Meta/WhatsApp, Google Play), cortes de energía, o actos gubernamentales.</p>

        <h2>15. Divisibilidad</h2>
        <p>Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.</p>

        <h2>16. Contacto</h2>
        <p>Para preguntas sobre estos Términos de Servicio:</p>
        <p>
          <strong>Correo:</strong> <a href="mailto:hola@ozcampos.com">hola@ozcampos.com</a><br />
          <strong>Sitio web:</strong> <a href="https://tasmorido.com">tasmorido.com</a>
        </p>

        <hr className={styles.divider} />
        <p className={styles.note}>Al usar ¿Tas Morido?, confirmas que has leído, entendido, y aceptado estos Términos de Servicio en su totalidad, incluyendo las secciones de Exclusión de Garantías y Limitación de Responsabilidad.</p>
      </div>
    </div>
  );
}
