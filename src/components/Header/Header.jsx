export default function Header({ className, ...props }) {
  return (
    <header {...props}>
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          <span>Brand</span>
        </a>
      </div>
    </header>
  );
}
