/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_FIREBASE_API_KEY: string
  // mais variáveis de ambiente...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
