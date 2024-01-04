# React-Typescript

## Usare 'Use this template' per partire da questa base!

Questo progetto fornisce uno scaffolding basato su Vite, React e TypeScript, arricchito con ulteriori funzionalità per accelerare lo sviluppo di nuove applicazioni. Le caratteristiche principali includono:

- **Base Vite React TypeScript:** Impostazione rapida e moderna con Vite per applicazioni React scritte in TypeScript.
- **Service per le Chiamate API:** Un service pre-configurato per gestire le chiamate API in modo efficiente.
- **Gestione dello Stato Globale:** Utilizzo di Zustand per una gestione semplice e potente dello stato globale dell'applicazione.
- **Routing Preimpostato:** Alcune rotte di base già configurate per facilitare lo sviluppo.


## Configurazione del Progetto

1. **Clone e Installazione delle Dipendenze:**

   Dopo aver clonato il repository, esegui `npm install` per installare tutte le dipendenze necessarie.

2. **Utilizzo dei File .env per i Diversi Ambienti:** 

   All'interno del progetto, troverai i file `.env` già predisposti per diversi ambienti (ad esempio, `.env.` (development), `.env.staging`, `.env.testing`). Se decidi di utilizzare questi file e di personalizzarli con le tue specifiche configurazioni, assicurati di aggiungere questi file personalizzati al `.gitignore` del tuo progetto per evitare di esporre informazioni sensibili.

3. **Esecuzione del Progetto:**

   Utilizza `npm run dev` per avviare il server di sviluppo locale.

4. **Build e Deployment:**

   Scegli tra `npm run build-staging` e `npm run build-testing` per eseguire la build dell'applicazione. Segui le istruzioni post-build per servire l'applicazione localmente.

## Comandi da Terminale

- **Build Produzione:** 
  ```bash
  npm run build
Prepara l'applicazione per il deployment, utilizzando le configurazioni di produzione.

- **Build Staging:** 
  ```bash
  npm run build-staging
Esegue una build con l'ambiente di staging, seguita da istruzioni post-build per avviare un server locale.

- **Build Testing:** 
  ```bash
  npm run build-testing
Esegue una build con l'ambiente di testing, seguita da istruzioni post-build per avviare un server locale.

## Collaborazione e Contributi

Questo progetto è pensato per essere un punto di partenza flessibile per lo sviluppo di applicazioni React. Sei invitato a contribuire o a personalizzarlo secondo le tue esigenze.
