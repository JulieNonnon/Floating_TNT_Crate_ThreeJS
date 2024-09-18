import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Floating_TNT_Crate_ThreeJS/',  // Nom du dépôt GitHub
  build: {
    outDir: 'dist',  // Dossier où le build sera généré
  },
  resolve: {
    alias: {
      'three': 'three'  // Assure que 'three' est correctement résolu
    }
  }
});