export default function DeveloperMockup() {
  return (
    <div
      className="developer-mockup"
      role="img"
      aria-label="概念界面：stack 开发者工具官网，展示发布命令和完成状态。"
    >
      <div className="dev-nav">
        <b>
          <span>⌘</span> stack
        </b>
        <span>Docs &nbsp; Changelog &nbsp; GitHub ↗</span>
      </div>
      <div className="dev-content">
        <span className="dev-badge">
          <i /> BUILT FOR YOUR FLOW
        </span>
        <h3>
          From idea to shipped.
          <br />
          <span>Without the friction.</span>
        </h3>
        <p>Your next project starts with one command.</p>
        <div className="terminal">
          <div className="terminal-title">
            <span>Terminal</span>
            <span>⌘ 1</span>
          </div>
          <div className="terminal-code">
            <p>
              <span>~</span> npx create-stack my-next-idea
            </p>
            <p className="terminal-muted">◆ Setting up your workspace...</p>
            <p>
              <span>✓</span> Project initialized
            </p>
            <p>
              <span>✓</span> Dependencies installed
            </p>
            <p>
              <span>✓</span> Ready to build something great.
            </p>
            <p className="terminal-last">
              ➜ <span>localhost:3000</span>
              <i />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
