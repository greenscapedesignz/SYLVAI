# SYLVAI
Bring Ecology Indoors, Living Intelligence for Your Space
🌿 SYLVAI

Bring Ecology Indoors. A smart biophilic design engine that bridges the gap between human psychology, indoor microclimates, and botanical science.

📖 The Meaning of SYLVAI

The name SYLVAI is a portmanteau of two powerful concepts:

Sylva (or Silva): Derived from Latin, meaning "forest," "woodland," or "trees." It represents the natural world, botany, and the deep-rooted human need for biophilia.

AI (Artificial Intelligence): Representing the computational logic, spatial sensing, and algorithmic matching that powers the system.

SYLVAI stands at the intersection of nature and technology—an intelligent system designed to curate the perfect indoor forest tailored specifically to your physical space and mental wellbeing.

🚀 About the Project

SYLVAI is a modern web application designed to optimize indoor environments for human health and productivity. Rather than treating plants as mere decorations, SYLVAI treats them as biological interventions.

By analyzing the user's psychological state (stress, fatigue, intent) and utilizing device hardware to scan the physical room environment (light levels in Lux, acoustic load in decibels, temperature, and humidity), the SYLVAI Fusion Engine prescribes exact botanical setups to improve cognitive focus, respiratory health, and stress recovery.

✨ Key Features

Real-Time Spatial Profiling: Uses your device's camera and microphone to actively scan the room's illuminance (Lux) and acoustic noise (dB).

Live Telemetry: Integrates with browser geolocation and live weather APIs to establish an environmental baseline.

Human-Centric Assessment: Tailors plant recommendations based on your current mood (stressed, fatigued, balanced) and primary intent (focus, sleep optimization, relaxation).

AI Fusion Engine: Matches spatial data with a comprehensive botanical database, considering plant height, VOC absorption, fractal complexity (texture/shape), and transpiration rates.

Augmented Reality (AR) Simulator: Leverages your rear-facing camera to dynamically visualize biological units (plants) in your actual space before procurement.

Automated Care Intelligence: Calculates highly accurate watering and nutrient schedules dynamically adjusted to your specific room's temperature and light exposure.

Cloud Telemetry Sync: Seamlessly syncs spatial data, human assessments, and procurement orders to a secure cloud database (via Google Apps Script).

🛠️ Technology Stack

Frontend Framework: React 18 (Vite)

Styling & UI: Tailwind CSS

Icons: Lucide React

APIs: * Open-Meteo API (Live Weather)

WebRTC / MediaDevices API (Hardware Camera & Audio Sensing)

Web Audio API (Decibel approximation)

Cloud Integration: Google Sheets / Google Apps Script API (No-CORS data sync)

💻 Local Setup & Installation

If you want to run SYLVAI on your local machine, follow these steps:

Clone the repository:

git clone [https://github.com/your-username/sylvai.git](https://github.com/your-username/sylvai.git)
cd sylvai


Install dependencies:
Make sure you have Node.js installed, then run:

npm install


Start the development server:

npm run dev


Open the app:
Open your browser and navigate to http://localhost:5173.
(Note: Hardware sensors like the Camera and Microphone require the app to be served over localhost or a secure https connection).

👨‍🎨 Credits

Developed & Designed by Anirban Pal, Greenscape Designz.
