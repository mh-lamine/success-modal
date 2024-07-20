import "./index.css";

export default function Modal({ title = "", content = "", closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          <Cross size={20} />
        </span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

module.exports = Modal;

function Cross({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      color={"#fff"}
      fill={"none"}
    >
      <path
        d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
