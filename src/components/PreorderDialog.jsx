import { useEffect, useRef } from 'react';
import Brand from './Brand';
import './PreorderDialog.css';

export default function PreorderDialog({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) { dialog.showModal(); window.__zorroScroll?.stop(); }
    else { dialog.close(); window.__zorroScroll?.start(); }
    return () => window.__zorroScroll?.start();
  }, [open]);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const requirement = formData.get('requirement') || '';

    const text = `Hola, mi nombre es ${name}. Requiero: ${requirement}`;
    const whatsappUrl = `https://wa.me/526645495385?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
    form.reset();
    onClose();
  }

  return (
    <dialog
      ref={ref}
      className="preorder-dialog"
      aria-labelledby="preorder-heading"
      onCancel={onClose}
      onClose={onClose}
      onClick={e => { if (e.target === ref.current) onClose(); }}
    >
      <div className="preorder-dialog__content">
        <button className="preorder-dialog__close" aria-label="Cerrar" onClick={onClose}>×</button>
        <Brand />
        <form onSubmit={submit}>
          <h2 id="preorder-heading">Contáctanos</h2>
          <p>Déjanos tus datos y te ayudamos a crecer tu negocio.</p>
          <label>
            Nombre
            <input name="name" autoComplete="name" placeholder="Tu nombre" required />
          </label>
          <label>
            Lo que requiere
            <textarea name="requirement" placeholder="Describe lo que necesitas..." rows={3} required />
          </label>
          <button className="button" type="submit">Enviar por WhatsApp</button>
        </form>
      </div>
    </dialog>
  );
}
