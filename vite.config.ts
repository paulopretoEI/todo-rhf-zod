import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
	plugins: [react()],
});
