# Schemat łączności: Mars → Ziemia

Proponowany łańcuch transmisji sygnału:

```text
baza na Marsie
      ↓
orbiter Marsa
      ↓
przekaźnik w przestrzeni
      ↓
stacja kosmiczna / punkt Lagrange
      ↓
Ziemia
```

Wersja diagramu:

```mermaid
flowchart TD
    A[Baza na Marsie] --> B[Orbiter Marsa]
    B --> C[Przekaźnik w przestrzeni]
    C --> D[Stacja kosmiczna / punkt Lagrange]
    D --> E[Ziemia]
```
