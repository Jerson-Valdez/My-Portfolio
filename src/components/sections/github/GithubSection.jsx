import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./github-section.css";

export default function GithubSection() {
  const calendarFrameRef = useRef(null);
  const [blockSize, setBlockSize] = useState(12);
  const [colorScheme, setColorScheme] = useState(() =>
    document.body.dataset.theme === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setColorScheme(document.body.dataset.theme === "dark" ? "dark" : "light");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = calendarFrameRef.current;
    if (!frame) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const availableWidth = entry.contentRect.width;
      if (availableWidth >= 640) {
        setBlockSize(12);
        return;
      }

      const blockMargin = 1;
      const fittedBlockSize = (availableWidth - 52 * blockMargin) / 53;
      setBlockSize(Math.max(4, Math.min(12, fittedBlockSize)));
    });

    resizeObserver.observe(frame);
    return () => resizeObserver.disconnect();
  }, []);

  const systemTheme = {
    light: [
      "var(--github-activity-0)",
      "var(--github-activity-1)",
      "var(--github-activity-2)",
      "var(--github-activity-3)",
      "var(--github-activity-4)",
    ],
    dark: [
      "var(--github-activity-0)",
      "var(--github-activity-1)",
      "var(--github-activity-2)",
      "var(--github-activity-3)",
      "var(--github-activity-4)",
    ],
  };

  return (
    <div className="github-activity">
      <div className="github-activity-header">
        <h3>GitHub Activity</h3>
      </div>
      
      <div className="github-calendar-frame" ref={calendarFrameRef}>
        <GitHubCalendar
          username="Jerson-Valdez"
          theme={systemTheme}
          colorScheme={colorScheme}
          errorMessage="GitHub activity is currently unavailable."
          blockSize={blockSize}
          blockMargin={blockSize < 8 ? 1 : 2}
          blockRadius={Math.min(6, blockSize / 3)}
          showColorLegend={false}
          showTotalCount={false}
          showMonthLabels={false}
        />
      </div>
      
      <Tooltip id="react-tooltip" /> 
    </div>
  );
}
