/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          900: "#07111f",
          800: "#0b1728",
          700: "#11223a"
        },
        neon: {
          cyan: "#58f2ff",
          blue: "#7aa2ff",
          mint: "#7bf7c7"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(88,242,255,0.18), 0 18px 60px rgba(10,19,40,0.65)",
        card: "0 24px 80px rgba(3, 8, 20, 0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(88,242,255,0.18), transparent 28%), radial-gradient(circle at top right, rgba(122,162,255,0.18), transparent 22%), linear-gradient(135deg, rgba(8,17,32,0.98), rgba(7,12,25,0.92))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseBorder: {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(88,242,255,0.14)" },
          "50%": { boxShadow: "0 0 0 1px rgba(123,247,199,0.35)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseBorder: "pulseBorder 3.2s ease-in-out infinite",
        shine: "shine 3s linear infinite"
      }
    }
  },
  plugins: []
};
