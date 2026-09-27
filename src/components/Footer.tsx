import Brand from "./ui/Brand";
export default function Footer() {
  return (
    <footer className="container footer">
      <div>
        <a href="#home" aria-label="Nova Studio 返回顶部">
          <Brand />
        </a>
        <p>Good ideas deserve great websites.</p>
      </div>
      <span>© {new Date().getFullYear()} Nova Studio</span>
      <a className="back-top" href="#home">
        Back to top ↑
      </a>
    </footer>
  );
}
