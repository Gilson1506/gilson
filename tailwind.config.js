/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
                 primary: {
           DEFAULT: "hsl(var(--primary))",
           foreground: "hsl(var(--primary-foreground))",
           50: "hsl(217, 91%, 97%)",
           100: "hsl(217, 91%, 94%)",
           200: "hsl(217, 91%, 88%)",
           300: "hsl(217, 91%, 78%)",
           400: "hsl(217, 91%, 68%)",
           500: "hsl(217, 91%, 65%)",
           600: "hsl(217, 91%, 57%)",
           700: "hsl(217, 91%, 49%)",
           800: "hsl(217, 91%, 41%)",
           900: "hsl(217, 91%, 33%)",
           950: "hsl(217, 91%, 25%)",
         },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 2px)",
        "2xl": "calc(var(--radius) + 4px)",
      },
             boxShadow: {
         'soft': '0 6px 8px -1px hsl(var(--primary) / 0.12), 0 3px 6px -1px hsl(var(--primary) / 0.08)',
         'glow': '0 0 30px hsl(var(--primary) / 0.4)',
         'inner-glow': 'inset 0 2px 4px 0 hsl(var(--primary) / 0.1)',
         'card': '0 4px 6px -1px hsl(217, 91%, 65% / 0.1), 0 2px 4px -1px hsl(217, 91%, 65% / 0.06)',
         'footer': '0 -4px 6px -1px hsl(217, 91%, 25% / 0.1)',
       },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-gentle': 'pulseGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
             backgroundImage: {
         'gradient-primary': 'linear-gradient(135deg, hsl(217, 91%, 65%) 0%, hsl(217, 91%, 55%) 100%)',
         'gradient-secondary': 'linear-gradient(135deg, hsl(214, 32%, 91%) 0%, hsl(214, 32%, 85%) 100%)',
         'gradient-radial': 'radial-gradient(ellipse at center, hsl(217, 91%, 65% / 0.1), transparent)',
         'gradient-footer': 'linear-gradient(135deg, hsl(217, 91%, 25%) 0%, hsl(217, 91%, 35%) 100%)',
         'gradient-card': 'linear-gradient(135deg, hsl(217, 91%, 65%) 0%, hsl(217, 91%, 55%) 100%)',
         'gradient-card-hover': 'linear-gradient(135deg, hsl(217, 91%, 70%) 0%, hsl(217, 91%, 60%) 100%)',
         'gradient-site': 'linear-gradient(135deg, hsl(217, 91%, 95%) 0%, hsl(217, 91%, 90%) 50%, hsl(217, 91%, 85%) 100%)',
         'gradient-main': 'linear-gradient(135deg, hsl(217, 91%, 98%) 0%, hsl(217, 91%, 95%) 100%)',
         'gradient-section': 'linear-gradient(135deg, hsl(217, 91%, 97%) 0%, hsl(217, 91%, 94%) 100%)',
         'gradient-hero': 'linear-gradient(135deg, hsl(217, 91%, 65%) 0%, hsl(217, 91%, 55%) 100%)',
         'gradient-nav': 'linear-gradient(135deg, hsl(217, 91%, 98%) 0%, hsl(217, 91%, 95%) 100%)',
         'gradient-sidebar': 'linear-gradient(180deg, hsl(217, 91%, 95%) 0%, hsl(217, 91%, 90%) 100%)',
         'app-bg': 'url("/backgraund.jpg") center center / cover no-repeat',
         'app-bg-overlay': 'linear-gradient(135deg, hsl(217, 91%, 95% / 0.9) 0%, hsl(217, 91%, 90% / 0.8) 50%, hsl(217, 91%, 85% / 0.7) 100%)',
         'app-bg-dark': 'linear-gradient(135deg, hsl(217, 91%, 15% / 0.9) 0%, hsl(217, 91%, 25% / 0.8) 50%, hsl(217, 91%, 35% / 0.7) 100%)',
       },
    },
  },
  plugins: [],
}
