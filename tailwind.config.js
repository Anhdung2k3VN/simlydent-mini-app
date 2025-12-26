// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #13a4ec)",
        "primary-dark": "var(--color-primary-dark, #0e8ac7)",
        background: "var(--color-background, #f6f7f8)",
        surface: "var(--color-surface, #ffffff)",
        "text-primary": "var(--color-text-primary, #0d171b)",
        "text-secondary": "var(--color-text-secondary, #4c809a)",
        danger: "var(--color-danger, #E11D48)",
        success: "var(--color-success, #16A34A)",
        warning: "var(--color-warning, #F59E0B)",
        
        // Keep legacy for safety until full migration
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2c35",
        "text-main": "#0d171b",
        "text-sub": "#4c809a",
        "border-light": "#cfdfe7",
        "border-dark": "#2a4250",
      },
      fontFamily: {
        sans: ["var(--font-family-display, sans-serif)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-family-display, sans-serif)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
        card: "var(--radius-card, 12px)",
        button: "var(--radius-button, 10px)",
      },
      boxShadow: {
        card: "var(--shadow-card, 0 2px 8px 0 rgba(0,0,0,0.05))",
        modal: "var(--shadow-modal, 0 4px 16px 0 rgba(0,0,0,0.1))",
      },
      spacing: {
        "safe-top": "var(--zaui-safe-area-inset-top, env(safe-area-inset-top))",
        "safe-bottom": "var(--zaui-safe-area-inset-bottom, env(safe-area-inset-bottom))",
        "safe-left": "var(--zaui-safe-area-inset-left, env(safe-area-inset-left))",
        "safe-right": "var(--zaui-safe-area-inset-right, env(safe-area-inset-right))",
      },
    },
  },
  plugins: [],
};
