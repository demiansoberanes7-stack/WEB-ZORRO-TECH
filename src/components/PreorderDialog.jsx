import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';
import './PreorderDialog.css';

export default function PreorderDialog({ open, onClose }) {
  const ref = useRef(null);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const dialog = ref.current;
    if (open) { dialog.showModal(); window.__zorroScroll?.stop(); }
    else { dialog.close(); window.__zorroScroll?.start(); }
    return () => window.__zorroScroll?.start();
  }, [open]);
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const endpoint = import.meta.env.VITE_PREORDER_ENDPOINT || 'https://formsubmit.co/ajax/ventas@zorrotech.online';
    const values = Object.fromEntries(new FormData(form));
    values._subject = 'Nuevo mensaje desde zorrotech.online';
    setBusy(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      setMessage('¡Gracias! Hemos recibido tu mensaje.');
    } catch { setMessage('Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.'); }
    finally { setBusy(false); }
  }
  return <dialog ref={ref} className="preorder-dialog" aria-labelledby="preorder-heading" onCancel={onClose} onClose={onClose} onClick={e => { if (e.target === ref.current) onClose(); }}>
    <div className="preorder-dialog__content">
      <button className="preorder-dialog__close" aria-label="Cerrar" onClick={onClose}>×</button>
      <Brand />
      <form onSubmit={submit}>
        <h2 id="preorder-heading">Contáctanos</h2>
        <p>Déjanos tus datos y te ayudamos a crecer tu negocio.</p>
        <label>Nombre<input name="name" autoComplete="name" placeholder="Tu nombre" required /></label>
        <label>Correo electrónico<input name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required /></label>
        <button className="button" disabled={busy}>{busy ? 'Enviando…' : 'Enviar'}</button>
        <p role="status">{message}</p>
      </form>
    </div>
  </dialog>;
}
