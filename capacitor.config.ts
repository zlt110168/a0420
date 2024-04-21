import type {CapacitorConfig} from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "one",
  webDir: "dist",
  server: {
    url: "http://192.168.31.217:4321",
    cleartext: true,
  },
};

export default config;
