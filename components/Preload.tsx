const Preload: React.FC<{ font: string }> = ({ font }) => (
  <link
    rel="preload"
    href={`/fonts/${font}.woff2`}
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
);

export default Preload;
