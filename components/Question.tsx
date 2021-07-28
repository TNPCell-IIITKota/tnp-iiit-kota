const Question: React.FC<{ onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({
  children,
  onClick: handleClick,
}) => (
  <div cx="wrapper">
    <button cx="btn" type="button" onClick={handleClick}>
      <span cx="question">{children}</span>
      <svg
        cx="icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  </div>
);

export default Question;
