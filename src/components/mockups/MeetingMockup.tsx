import {
  AudioLines,
  Check,
  ChevronDown,
  Circle,
  LayoutGrid,
  Mic,
  Plus,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
export default function MeetingMockup({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={`meeting-mockup ${compact ? "compact" : ""}`}
      role="img"
      aria-label="概念界面：Orbit AI 会议助手，展示会议摘要和行动项。界面内控件仅作视觉演示。"
    >
      <div className="browser-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>orbit.app / workspace</span>
        <span className="browser-right">↗</span>
      </div>
      <div className="meeting-body">
        <aside className="mock-sidebar">
          <div className="orbit-brand">
            <AudioLines size={19} />
            <b>orbit</b>
          </div>
          <div className="workspace-avatar">
            N<span>Nova workspace</span>
            <ChevronDown size={10} />
          </div>
          <div className="mock-nav-item">
            <Search /> Search <span>⌘ K</span>
          </div>
          <div className="mock-nav-item active">
            <LayoutGrid /> Overview
          </div>
          <div className="mock-nav-item">
            <Video /> My meetings
          </div>
          <div className="mock-nav-item">
            <Circle /> Integrations
          </div>
          <div className="mock-sidebar-bottom">
            <span className="avatar">N</span> Nova Team <span>⌄</span>
          </div>
        </aside>
        <div className="mock-main">
          <div className="mock-topline">
            <span>
              Workspace <span>/ Overview</span>
            </span>
            <span className="avatar small-avatar">N</span>
          </div>
          <div className="mock-welcome">
            <div>
              <span className="mock-overline">YOUR DAY, IN FOCUS</span>
              <h3>
                Good morning, Alex <span>✦</span>
              </h3>
              <p>Less note-taking. More moving forward.</p>
            </div>
            <span className="mock-button">
              <Plus size={11} /> New meeting
            </span>
          </div>
          <div className="mock-stats">
            <div>
              <span>Meetings this week</span>
              <b>
                12 <small>+3 this week</small>
              </b>
            </div>
            <div>
              <span>Time saved</span>
              <b>
                8.5 <small>hours</small>
              </b>
            </div>
            <div>
              <span>Action items</span>
              <b>
                24 <small>18 completed</small>
              </b>
            </div>
          </div>
          <div className="mock-summary">
            <div className="summary-title">
              <span className="summary-icon">
                <Sparkles size={17} />
              </span>
              <div>
                <h4>Product sync</h4>
                <p>Today, 10:00 AM · 32 min · 4 participants</p>
              </div>
              <span className="ready-label">Summary ready</span>
            </div>
            <div className="summary-tabs">
              <b>AI Summary</b>
              <span>Transcript</span>
              <span>
                Action items <em>3</em>
              </span>
            </div>
            <div className="summary-content">
              <span className="mini-label">KEY TAKEAWAYS</span>
              <p>
                The team aligned on the next product release, with a focus on a
                simpler onboarding experience.
              </p>
              <div className="summary-check">
                <Check /> Finalize the new onboarding flow
              </div>
              <div className="summary-check">
                <Check /> Share the launch checklist with the team
              </div>
              <div className="summary-check">
                <span className="empty-check" /> Review feedback before Friday
              </div>
            </div>
            <div className="audio-strip">
              <span>
                <Mic size={12} /> Meeting recording
              </span>
              <div className="waveform">
                {Array.from({ length: 40 }, (_, i) => (
                  <i
                    key={i}
                    style={{ height: `${6 + ((i * 13 + 7) % 21)}px` }}
                  />
                ))}
              </div>
              <span>32:08</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
