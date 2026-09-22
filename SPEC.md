# Anki card app

## Concept

Infinite feed of the anki cards to study from. A session ends when every card has been marked successful.

## Deck source

- The deck is a single YAML file in the following format:

```yaml
cards:
  number <e.g. 1>:
    category: "category"
    question: "question"
    answer: "answer"
```

- `citizenship-anki-cards.yaml` (repo root) is the sample deck for reference only — it is never mounted into or served by the app
- The app has no backend. The user uploads the YAML file via an upload button on the initial screen; it is parsed entirely in the browser
- Nothing is persisted: all deck state lives in browser memory, so a page refresh wipes it and returns to the upload screen
- An invalid file (unparseable YAML, missing `cards`, or a card without `category` / `question` / `answer`) shows an error message on the upload screen; the deck does not start

## Requirement

- Minimal anki card web app
- Uses DESIGN.md for the design. Do not deviate
- After a successful upload, generate the list of anki cards and start display in randomized order
- Every anki card has a category. Display it at the top
- When anki card is present, only question is visible to the user
- Answer to a particular card is hidden behind the blur and a button "show answer"; the three buttons appear only after the answer is revealed
- Below answer there are three buttons:
  - "green checkmark" -> goes to the next anki card (successful, do not show the card again until next reset)
  - "red cross" -> failed to answer, move the card to the end of the deck
  - "Reset" -> re-randomize the order of the same loaded deck from scratch and clear session stats. No re-upload; a fresh upload is only required after a page refresh
- While studying, show a tiny counter of cards remaining (e.g. `7 / 12 left`); full statistics are shown only at the end of the session
- When every card has been marked successful, show a completion screen with:
  - heading "Session complete"
  - number of successes and total failures in the session
  - the most-failed card with its failure count (on a tie: the card that accumulated them first)
  - a primary "Reset" button -> re-randomizes the same loaded deck from scratch and clears stats
- Must be a web app accessible via the browser at the port 3333
- Built with Vite + React + TypeScript, latest versions; zero backend code
- Always follow YAGNI and KISS principles, do not write code for the sake of writing code. Every line must have a reason, every function must have a reason

## Development

- Host OS is immutable linux, no local installations
- Run everything via podman containers using `podman-compose` or `podman` cli commands
- A single compose file provides two profiles; both serve the app at port 3333 (only one can run at a time):
  - dev: `podman-compose up --build dev` — Vite dev server with hot reload, source mounted
  - prod: `podman-compose up --build prod` — pre-built static bundle from an nginx image, no mounts
- Stop: `podman-compose down`
