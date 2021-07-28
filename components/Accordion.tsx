const Accordion: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ title, isOpen, onClick, children }) => (
  <div cx="wrapper">
    <button cx="accordion" type="button" onClick={onClick}>
      <p cx="lead">{title}</p>
      <svg
        aria-expanded={isOpen}
        aria-label="chevron"
        cx="chevron"
        role="button"
        viewBox="0 0 24 24"
      >
        <polyline
          fill="none"
          points="2,7 12,17 22,7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </button>
    <div aria-expanded={isOpen} cx="content">
      <p cx="desc">{children}</p>
    </div>
  </div>
);

export default Accordion;
