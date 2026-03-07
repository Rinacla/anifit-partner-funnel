"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f9fafb" }}>
        <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
          <div style={{ maxWidth: "28rem", textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
              Da ist etwas schiefgelaufen
            </h1>
            <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
              Bitte lade die Seite neu oder kontaktiere uns per WhatsApp.
            </p>
            <button
              onClick={reset}
              style={{
                background: "#16a34a", color: "white", fontWeight: 600,
                padding: "0.75rem 1.5rem", borderRadius: "0.75rem", border: "none",
                cursor: "pointer", fontSize: "1rem",
              }}
            >
              Seite neu laden
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
