import cardHtml from '../../public/card.html?raw';

export default function TarjetaDigital() {
  return (
    <iframe
      srcDoc={cardHtml}
      title="Axel Soberanes · Zorro Tech"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 999999,
        background: '#FFFEFC'
      }}
    />
  );
}
