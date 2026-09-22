const tokens = `
:root {
  --color-primary: #c98a1e;
  --color-on-primary: #ffffff;
  --color-background: #ffffff;
  --color-surface: #e7e7e5;
  --color-border: #e7e7e5;
  --color-text: #0e0e0e;
  --color-text-muted: #6b6b6b;
  --color-success: #3a6b4d;
  --color-danger: #a34a3f;

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --spacing-base: 4px;
  --radius-sm: 4px;
  --radius-md: 5px;
  --radius-lg: 6px;

  --shadow-hard: 3px 3px 0 0 rgb(107, 107, 107);
  --shadow-hover: 4px 4px 0 0 rgb(107, 107, 107);

  --duration-fast: 120ms;
  --duration-base: 150ms;
  --duration-slow: 200ms;
  --easing: ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-background);
  min-height: 100vh;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 16px;
}

.screen {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background: var(--color-surface);
  box-shadow: var(--shadow-hard);
  border-radius: var(--radius-lg);
  padding: 40px;
  width: 100%;
}

.btn {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: var(--radius-md);
  padding: 16px 20px;
  cursor: pointer;
  box-shadow: var(--shadow-hard);
  transition: box-shadow var(--duration-base) var(--easing),
              transform var(--duration-base) var(--easing);
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn:hover {
  box-shadow: var(--shadow-hover);
}

.btn:active {
  transform: translate(3px, 3px);
  box-shadow: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-text);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.btn-success {
  background: var(--color-success);
  color: var(--color-on-primary);
}

.btn-danger {
  background: var(--color-danger);
  color: var(--color-on-primary);
}

.btn-icon {
  padding: 12px;
}

.btn-reset {
  background: var(--color-text);
  color: var(--color-on-primary);
}

h1 {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}

h2 {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}

.mono {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
}

.muted {
  color: var(--color-text-muted);
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
}

.card-content {
  font-size: 14px;
  line-height: 1.5;
}

.answer {
  filter: blur(10px);
  transition: filter var(--duration-base) var(--easing);
}

.answer.revealed {
  filter: blur(0);
}

.buttons-row {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.stat-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  width: 100%;
}

.stat-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.error-msg {
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  text-align: center;
}

.file-label {
  display: inline-block;
  cursor: pointer;
}

.file-input {
  display: none;
}

@media (max-width: 800px) {
  .card {
    padding: 24px;
  }

  h1, h2 {
    font-size: 32px;
  }

  .buttons-row {
    flex-direction: column;
    width: 100%;
  }

  .buttons-row .btn {
    width: 100%;
  }
}
`

export function Stylesheet() {
  return <style dangerouslySetInnerHTML={{ __html: tokens }} />
}
