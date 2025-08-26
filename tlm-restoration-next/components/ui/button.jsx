export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl transition focus:outline-none focus:ring ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
