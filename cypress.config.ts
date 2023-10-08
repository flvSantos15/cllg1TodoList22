import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'y7g9ij',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173'
  }
})
