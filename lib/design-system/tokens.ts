export const designTokens = {
  colors: {
    brand: {
      primary: '#3b82f6', // Enterprise Blue
      secondary: '#10b981', // Success Emerald
      accent: '#8b5cf6', // Innovation Violet
    },
    neutral: {
      950: '#020617',
      900: '#0f172a',
      800: '#1e293b',
    }
  },
  animations: {
    spring: { type: "spring", stiffness: 260, damping: 20 },
    gentle: { type: "spring", stiffness: 100, damping: 30 }
  }
} as const;