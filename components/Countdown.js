"use client";

import { useEffect, useState } from "react";

function getCountdown(targetTime) {
  const remaining = targetTime - Date.now();
  if (remaining <= 0) return null;

  const totalHours = Math.floor(remaining / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  if (days > 0) {
    return `Starts in ${days} ${days === 1 ? "day" : "days"} ${hours} ${hours === 1 ? "hr" : "hrs"}`;
  }
  if (totalHours > 0) {
    return `Starts in ${totalHours} ${totalHours === 1 ? "hr" : "hrs"}`;
  }
  const minutes = Math.max(1, Math.floor(remaining / (1000 * 60)));
  return `Starts in ${minutes} ${minutes === 1 ? "min" : "mins"}`;
}

export default function Countdown({ date, time }) {
  const targetTime = new Date(`${date}T${time}`).getTime();
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    function updateCountdown() {
      setCountdown(getCountdown(targetTime));
    }

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(intervalId);
  }, [targetTime]);

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
      <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
      {countdown || "This event has started"}
    </span>
  );
}
