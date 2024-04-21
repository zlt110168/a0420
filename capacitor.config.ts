import type {CapacitorConfig} from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "one",
  webDir: "dist",
  server: {
    url: "https://a0420.webone.club",
    cleartext: true,
  },
};

export default config;
