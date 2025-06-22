// Global configuration types
export interface AppConfig {
  API_BASE_URL: string;
  SOCKET_IO_BASE_URL: string;
  SOCKET_IO_PATH: string;
  FIREBASE_API_KEY: string;
  FIREBASE_APP_ID: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_DATABASE_URL: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_VAPID_KEY: string;
  STRIPE_PUBLISHABLE_KEY: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_UPLOAD_PRESET: string;
}

declare global {
  interface Window {
    APP_CONFIG: AppConfig;
  }
}

export {};
