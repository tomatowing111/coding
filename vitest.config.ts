import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,   // <-- enable describe/it/expect without imports
  },
})
