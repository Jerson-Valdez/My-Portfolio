import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./github-section.css";

export default function GithubSection() {
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
      
      <GitHubCalendar
        username="Jerson-Valdez"
        theme={systemTheme}
        colorScheme={colorScheme}
        errorMessage="GitHub activity is currently unavailable."
        blockSize={12}
        blockMargin={2}
        blockRadius={7}

        showColorLegend={false}
        showTotalCount={false}
        showMonthLabels={false}
      />
      
      <Tooltip id="react-tooltip" /> 
    </div>
  );
}