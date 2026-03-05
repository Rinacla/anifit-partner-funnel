"use client";

import { useState, useEffect } from "react";

export default function StartbonusTimer() {
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    setDeadline(d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" }));
  }, []);

  if (!deadline) return null;

  return (
    <p className="text-sm text-amber-800 mt-3 font-medium">
      ⏰ Registrierst du dich heute, hast du bis <strong>{deadline}</strong> Zeit für den Startbonus.
    </p>
  );
}
