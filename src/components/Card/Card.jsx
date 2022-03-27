export default function Card({ children, className, ...props }) {
  return (
    <div className={`p-6 shadow-lg rounded-xl ${className}`} {...props}>
      {children}
    </div>
  );
}
