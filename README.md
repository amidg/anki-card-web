# anki-card-web

Simple web frontend for studying Anki cards from YAML. Upload a deck, study
shuffled cards, mark success/failure — failed cards cycle back to the end of
the queue. React + TypeScript + Vite, packaged with Docker.

## Run

Dev (Vite + HMR on :3333):
    podman-compose up --build dev

Prod (static build served by nginx on :3333):
    podman-compose up --build prod

One profile at a time — both use port 3333. Stop with `podman-compose down`.

## Deck format

YAML: top-level `cards` mapping, each card has string fields `category`,
`question`, `answer`. Example: `citizenship-anki-cards.yaml`.
