// Configuration utility to access global app config

export const getConfig = () => {
  if (typeof window !== "undefined" && window.APP_CONFIG) {
    return window.APP_CONFIG;
  }

  // Fallback values for development
  return {
    API_BASE_URL: "http://localhost:5000/api/v1",
    SOCKET_IO_BASE_URL: "http://localhost:5000",
    SOCKET_IO_PATH: "/socket.io",
    FIREBASE_API_KEY: "",
    FIREBASE_APP_ID: "",
    FIREBASE_AUTH_DOMAIN: "",
    FIREBASE_DATABASE_URL: "",
    FIREBASE_MESSAGING_SENDER_ID: "",
    FIREBASE_PROJECT_ID: "",
    FIREBASE_STORAGE_BUCKET: "",
    FIREBASE_VAPID_KEY: "",
    STRIPE_PUBLISHABLE_KEY: "",
    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_UPLOAD_PRESET: "",
  };
};

export default getConfig;
