const Accordion: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ title, isOpen, onClick, children }) => (
  <div cx="wrapper">
    <button type="button" cx="accordion" onClick={onClick}>
      <p cx="lead">{title}</p>
      <svg viewBox="0 0 24 24" cx="chevron" style={isOpen ? { transform: 'rotate(-180deg)' } : {}}>
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          points="2,7 12,17 22,7"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <div cx="content" aria-expanded={isOpen}>
      <p cx="desc">{children}</p>
    </div>
  </div>
);

export default Accordion;
