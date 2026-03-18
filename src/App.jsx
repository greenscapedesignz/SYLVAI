import React, { useState, useEffect, useRef } from 'react';
import { 
  Leaf, Camera, Compass, Activity, Droplets, Sun, 
  ShoppingBag, Plus, Home, Store, FileText, MapPin, 
  Box, X, Maximize, Sparkles, HeartPulse, 
  ArrowLeft, Package, Wind, Zap, AlignCenter,
  Scan, ArrowRight, Mic, Info, Map, Cloud, Sliders, Volume2,
  Brain, Moon, Coffee, Frown, Smile, ShieldCheck, User, CheckCircle,
  MessageSquare, Lock, Thermometer
} from 'lucide-react';

// ==========================================
// 1. COMPREHENSIVE ECOLOGICAL DATABASE
// ==========================================
const PLANT_DB = [
  {
    id: "p1", name: "Snake Plant (Sansevieria)", price: 650, height: "2.5 - 3 ft", health_status: "Excellent (Nursery Quarantined)",
    ecology: { lux_min: 50, lux_opt_min: 200, lux_opt_max: 1500, lux_max: 5000, temp_min: 15, temp_max: 35, humidity_min: 20, humidity_max: 80 },
    design: { form: "Upright/Architectural", color: "Banded Green", texture: "Leathery", density: "Sparse", scent: "None", contrast: "High", size: "Medium" },
    education: { color: "Green bands reduce visual monotony.", texture: "Leathery leaves reflect light, brightening dark corners.", shape: "Vertical lines draw the eye up, expanding perceived room height.", size: "Medium footprint saves floor space." },
    health: { impact: "Sleep Optimization", mechanism: "CAM Photosynthesis", voc: ["Formaldehyde", "Benzene"], benefits: ["Nighttime oxygen release", "Stress reduction"] },
    care: { maintenance: "Low", base_water_days: 14, fertiliser: "NPK 3-1-2", frequency: "8 weeks" },
    placement_logic: "Bedroom Corner / Floor", vaastu_zones: ["S", "SW", "W"], co2_index: 2.5,
    keywords: ["sleep", "dark", "bedroom", "low maintenance", "air purifier", "snoring", "stress"],
    image: "https://images.unsplash.com/photo-1599598425947-330026292ad0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2", name: "Golden Pothos (Epipremnum)", price: 350, height: "Cascades 4 - 6 ft", health_status: "Vibrant (Active Growth)",
    ecology: { lux_min: 100, lux_opt_min: 400, lux_opt_max: 1200, lux_max: 3000, temp_min: 18, temp_max: 32, humidity_min: 40, humidity_max: 80 },
    design: { form: "Cascading/Trailing", color: "Variegated Green", texture: "Waxy", density: "Dense", scent: "Earthy", contrast: "Medium", size: "Small/Trailing" },
    education: { color: "Variegation stimulates light cognitive engagement.", texture: "Waxy finish repels dust.", shape: "Cascading vines break up harsh architectural right angles (softening).", size: "Perfect for high shelves." },
    health: { impact: "Cognitive Focus", mechanism: "High VOC Absorption", voc: ["Xylene", "Toluene"], benefits: ["Anxiety relief", "Productivity boost"] },
    care: { maintenance: "Low", base_water_days: 7, fertiliser: "NPK 10-10-10", frequency: "4 weeks" },
    placement_logic: "Shelf / Hanging", vaastu_zones: ["N", "E", "SE"], co2_index: 1.8,
    keywords: ["focus", "desk", "office", "shelf", "anxiety", "hanging"],
    image: "https://images.unsplash.com/photo-1614594851134-8b0f8b3e1c1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3", name: "Peace Lily (Spathiphyllum)", price: 850, height: "1.5 - 2 ft", health_status: "Pre-bloom Phase",
    ecology: { lux_min: 100, lux_opt_min: 300, lux_opt_max: 800, lux_max: 2000, temp_min: 18, temp_max: 28, humidity_min: 50, humidity_max: 90 },
    design: { form: "Clumping/Flowering", color: "Deep Green with White", texture: "Ribbed", density: "Medium", scent: "Subtle", contrast: "High", size: "Medium" },
    education: { color: "White spathes provide visual relief and calm.", texture: "Ribbed leaves increase surface area for humidity generation.", shape: "Clumping form grounds desktop spaces.", size: "Ideal tabletop presence." },
    health: { impact: "Respiratory Relief", mechanism: "Transpiration", voc: ["Ammonia"], benefits: ["Humidity support", "Airway comfort"] },
    care: { maintenance: "Medium", base_water_days: 5, fertiliser: "NPK 20-20-20", frequency: "6 weeks" },
    placement_logic: "Desk / Mid-level", vaastu_zones: ["N", "NE", "NW"], co2_index: 3.2,
    keywords: ["relax", "asthma", "dry air", "flowers", "desk", "calm"],
    image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4", name: "Monstera Deliciosa", price: 1400, height: "3 - 4 ft", health_status: "Robust (New Leaves Sprouting)",
    ecology: { lux_min: 500, lux_opt_min: 1000, lux_opt_max: 2500, lux_max: 6000, temp_min: 18, temp_max: 30, humidity_min: 60, humidity_max: 90 },
    design: { form: "Vining Focal Point", color: "Emerald Green", texture: "Perforated", density: "Vast", scent: "Tropical", contrast: "High", size: "Large" },
    education: { color: "Deep emerald evokes lush forest biomes.", texture: "Perforations (fenestrations) create complex fractal patterns that reduce mental fatigue.", shape: "Organic sprawling shapes contrast modern furniture.", size: "Acts as a room anchor." },
    health: { impact: "Mental Grounding", mechanism: "Fractal Complexity", voc: ["Benzene"], benefits: ["Sensory variation", "Nature connection"] },
    care: { maintenance: "Medium", base_water_days: 8, fertiliser: "Liquid Seaweed", frequency: "3 weeks" },
    placement_logic: "Living Room Anchor", vaastu_zones: ["N", "E"], co2_index: 2.9,
    keywords: ["statement", "living room", "fatigue", "bright", "tropical"],
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5", name: "ZZ Plant (Zamioculcas)", price: 750, height: "2 - 3 ft", health_status: "Excellent (Drought Hardy)",
    ecology: { lux_min: 10, lux_opt_min: 100, lux_opt_max: 500, lux_max: 2000, temp_min: 15, temp_max: 35, humidity_min: 10, humidity_max: 70 },
    design: { form: "Structural/Waxy", color: "Glossy Dark Green", texture: "Thick/Plastic", density: "Vertical", scent: "None", contrast: "Medium", size: "Medium" },
    education: { color: "Deep gloss reflects minimal ambient light.", texture: "Thick cuticles prevent moisture loss.", shape: "Vertical arching stems create structured geometry.", size: "Fits narrow hallways and corners." },
    health: { impact: "Executive Function", mechanism: "Resilience Modeling", voc: ["Toluene"], benefits: ["Visual stability", "Low-stress ownership"] },
    care: { maintenance: "Very Low", base_water_days: 21, fertiliser: "Balanced 10-10-10", frequency: "12 weeks" },
    placement_logic: "Office Cubicle / Hallway", vaastu_zones: ["S", "SW"], co2_index: 1.2,
    keywords: ["dark", "office", "cubicle", "forgetful", "indestructible"],
    image: "https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6", name: "Areca Palm (Chrysalidocarpus)", price: 1100, height: "4 - 6 ft", health_status: "Vibrant (High Transpiration)",
    ecology: { lux_min: 800, lux_opt_min: 1500, lux_opt_max: 3000, lux_max: 8000, temp_min: 18, temp_max: 28, humidity_min: 50, humidity_max: 85 },
    design: { form: "Fronded/Feathery", color: "Lush Yellow-Green", texture: "Fine/Soft", density: "Plumose", scent: "Fresh", contrast: "Low", size: "Large" },
    education: { color: "Yellow-green hues brighten heavy interior spaces.", texture: "Fine fronds diffuse harsh acoustic noise.", shape: "Feathery arching creates a soft psychological barrier.", size: "Excellent for room division." },
    health: { impact: "Humidification", mechanism: "High Transpiration Rate", voc: ["Xylene"], benefits: ["Natural humidifier", "Sound diffusion"] },
    care: { maintenance: "High", base_water_days: 4, fertiliser: "Palm Food", frequency: "4 weeks" },
    placement_logic: "Bright Corners", vaastu_zones: ["N", "NE"], co2_index: 4.1,
    keywords: ["dry", "humidifier", "noise", "large", "bright", "living room"],
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p7", name: "Fiddle Leaf Fig (Ficus Lyrata)", price: 1950, height: "5 - 7 ft", health_status: "Stable (Acclimated)",
    ecology: { lux_min: 1000, lux_opt_min: 2000, lux_opt_max: 4000, lux_max: 10000, temp_min: 18, temp_max: 27, humidity_min: 40, humidity_max: 70 },
    design: { form: "Tree-form Focal", color: "Deep Matte Green", texture: "Leathery/Large", density: "Columnar", scent: "Woody", contrast: "Bold", size: "Large" },
    education: { color: "Matte green absorbs harsh direct light.", texture: "Violin-shaped leaves act as dramatic visual anchors.", shape: "Tree-form elevates biophilia to eye level.", size: "Commands attention and awe." },
    health: { impact: "Creativity Boost", mechanism: "Visual Statement", voc: ["Formaldehyde"], benefits: ["Aesthetic pride", "Mental clarity"] },
    care: { maintenance: "High", base_water_days: 7, fertiliser: "High Nitrogen", frequency: "4 weeks" },
    placement_logic: "Near South-facing Windows", vaastu_zones: ["SE", "S"], co2_index: 3.5,
    keywords: ["statement", "tree", "bright", "window", "creativity", "luxury"],
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p8", name: "Spider Plant (Chlorophytum)", price: 450, height: "1 - 1.5 ft", health_status: "Excellent (Producing Pups)",
    ecology: { lux_min: 200, lux_opt_min: 800, lux_opt_max: 1500, lux_max: 4000, temp_min: 13, temp_max: 27, humidity_min: 30, humidity_max: 80 },
    design: { form: "Burst/Radiating", color: "Green/White Variegation", texture: "Grass-like", density: "Spiky", scent: "None", contrast: "High", size: "Small" },
    education: { color: "High contrast striping draws immediate visual attention.", texture: "Grass-like fronds mimic outdoor meadow environments.", shape: "Radiating bursts symbolize kinetic energy.", size: "Perfect for confined surfaces." },
    health: { impact: "Carbon Scrubbing", mechanism: "Rapid Growth", voc: ["Carbon Monoxide"], benefits: ["Safe for pets", "Air purification"] },
    care: { maintenance: "Low", base_water_days: 6, fertiliser: "Standard NPK", frequency: "4 weeks" },
    placement_logic: "Kitchen Shelves", vaastu_zones: ["E", "NE"], co2_index: 2.1,
    keywords: ["kitchen", "pets", "safe", "shelf", "air purifier", "small"],
    image: "https://images.unsplash.com/photo-1567331711402-509c13ee0f91?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p9", name: "Rubber Plant (Ficus Elastica)", price: 850, height: "3 - 5 ft", health_status: "Vibrant (Active Growth)",
    ecology: { lux_min: 400, lux_opt_min: 800, lux_opt_max: 2000, lux_max: 5000, temp_min: 15, temp_max: 35, humidity_min: 30, humidity_max: 80 },
    design: { form: "Tree-form Focal", color: "Burgundy/Dark Green", texture: "Glossy/Thick", density: "Medium", scent: "None", contrast: "High", size: "Large" },
    education: { color: "Deep burgundy hues provide a luxurious grounding effect.", texture: "High gloss leaves catch and scatter ambient light.", shape: "Broad leaves soften rigid architectural corners.", size: "Acts as a primary visual anchor." },
    health: { impact: "Air Detoxification", mechanism: "Phytoremediation", voc: ["Formaldehyde", "Airborne toxins"], benefits: ["Hypoallergenic", "Air purification"] },
    care: { maintenance: "Medium", base_water_days: 10, fertiliser: "Balanced Liquid", frequency: "6 weeks" },
    placement_logic: "Living Room Window / Corporate Lobbies", vaastu_zones: ["SE", "S"], co2_index: 3.0,
    keywords: ["bold", "dark", "statement", "living room", "air purifier", "tree", "commercial"],
    image: "https://images.unsplash.com/photo-1611145367651-e7ce0634e062?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p10", name: "Aloe Vera", price: 250, height: "1 - 2 ft", health_status: "Excellent (Mature)",
    ecology: { lux_min: 1000, lux_opt_min: 2000, lux_opt_max: 5000, lux_max: 10000, temp_min: 18, temp_max: 40, humidity_min: 10, humidity_max: 60 },
    design: { form: "Rosette/Spiky", color: "Silvery Green", texture: "Fleshy/Succulent", density: "Sparse", scent: "None", contrast: "High", size: "Small" },
    education: { color: "Silvery green offers a cooling visual temperature.", texture: "Fleshy leaves communicate resilience and water retention.", shape: "Spiky rosettes create dynamic focal points.", size: "Ideal for windowsills and desks." },
    health: { impact: "Skin & Sleep Support", mechanism: "CAM Photosynthesis", voc: ["Benzene", "Formaldehyde"], benefits: ["Nighttime oxygen", "Medicinal gel"] },
    care: { maintenance: "Very Low", base_water_days: 21, fertiliser: "Cactus Mix", frequency: "12 weeks" },
    placement_logic: "Sunny Windowsill", vaastu_zones: ["E", "N"], co2_index: 1.5,
    keywords: ["medicinal", "succulent", "sun", "window", "sleep", "bedroom", "home"],
    image: "https://images.unsplash.com/photo-1555037015-1498966bcd7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p11", name: "Aglaonema (Chinese Evergreen)", price: 550, height: "1.5 - 2 ft", health_status: "Lush (New Shoots)",
    ecology: { lux_min: 100, lux_opt_min: 300, lux_opt_max: 800, lux_max: 2000, temp_min: 18, temp_max: 30, humidity_min: 40, humidity_max: 80 },
    design: { form: "Bushy/Clumping", color: "Variegated Green/Pink", texture: "Smooth", density: "Dense", scent: "None", contrast: "Medium", size: "Medium" },
    education: { color: "Pink/Red variations boost mood and energy levels.", texture: "Smooth broad leaves collect minimal dust.", shape: "Bushy density creates a feeling of abundance.", size: "Perfect for office desks." },
    health: { impact: "Cognitive Focus", mechanism: "High Transpiration", voc: ["Benzene", "Formaldehyde"], benefits: ["Humidity control", "Productivity"] },
    care: { maintenance: "Low", base_water_days: 8, fertiliser: "Standard NPK", frequency: "6 weeks" },
    placement_logic: "Office Desk / Tabletop", vaastu_zones: ["N", "E"], co2_index: 2.2,
    keywords: ["color", "pink", "office", "desk", "low light", "focus", "commercial"],
    image: "https://images.unsplash.com/photo-1620127807580-10111f1857bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p12", name: "Boston Fern (Nephrolepis)", price: 400, height: "2 - 3 ft", health_status: "Excellent (High Moisture)",
    ecology: { lux_min: 200, lux_opt_min: 400, lux_opt_max: 1000, lux_max: 2500, temp_min: 15, temp_max: 30, humidity_min: 60, humidity_max: 90 },
    design: { form: "Arching/Cascading", color: "Bright Yellow-Green", texture: "Feathery", density: "Dense", scent: "Earthy", contrast: "Low", size: "Medium/Hanging" },
    education: { color: "Vibrant yellow-green signals vitality.", texture: "Highly divided fronds maximize sound wave diffusion (acoustic control).", shape: "Cascading form softens hard edges.", size: "Excellent for hanging baskets." },
    health: { impact: "Humidification & Acoustic", mechanism: "Hyper-Transpiration", voc: ["Formaldehyde", "Xylene"], benefits: ["Natural humidifier", "Noise reduction"] },
    care: { maintenance: "High", base_water_days: 3, fertiliser: "Liquid Houseplant", frequency: "4 weeks" },
    placement_logic: "Bathroom / Hanging Basket", vaastu_zones: ["N", "E"], co2_index: 3.5,
    keywords: ["fern", "hanging", "bathroom", "humidifier", "noise", "lush", "home"],
    image: "https://images.unsplash.com/photo-1629555132189-cd79ceeb3c18?auto=format&fit=crop&w=800&q=80"
  }
];

// ==========================================
// 2. ENGINES
// ==========================================
const Engines = {
  inferMicroclimate: (env) => {
    let co2Index = (env.occupancy * 2) - (env.ventilation === 'High' ? 2 : env.ventilation === 'Medium' ? 1 : 0);
    let co2Risk = co2Index > 3 ? 'High' : co2Index > 1 ? 'Medium' : 'Low';
    return { co2Risk };
  },
  
  scorePlant: (env, plant, userState) => {
    let score = 0;
    if (env.lux >= plant.ecology.lux_opt_min && env.lux <= plant.ecology.lux_opt_max) score += 40;
    else if (env.lux >= plant.ecology.lux_min && env.lux <= plant.ecology.lux_max) score += 15;
    
    if (userState.intent === 'focus' && plant.health.impact.includes('Cognitive')) score += 25;
    if (userState.intent === 'sleep' && plant.health.impact.includes('Sleep')) score += 25;
    if (userState.intent === 'relax' && (plant.health.impact.includes('Relief') || plant.health.impact.includes('Grounding'))) score += 25;
    
    if (userState.mood === 'stressed' && plant.health.benefits.some(b => b.toLowerCase().includes('stress'))) score += 15;
    if (userState.mood === 'fatigued' && plant.design.texture.includes('Perforated')) score += 15; 

    if (env.audioLevel > 65 && plant.design.size === 'Large') score += 10; 
    
    return Math.min(99, Math.round(score));
  },

  composeSpace: (rankedPlants) => {
    const layout = { anchor: null, desktop: null, trailing: null };
    const usedIds = new Set();
    let anchor = rankedPlants.find(p => p.design.size === "Large" && !usedIds.has(p.id));
    if (anchor) { layout.anchor = anchor; usedIds.add(anchor.id); }
    let desktop = rankedPlants.find(p => p.design.size === "Medium" && !usedIds.has(p.id));
    if (desktop) { layout.desktop = desktop; usedIds.add(desktop.id); }
    let trailing = rankedPlants.find(p => p.design.form.includes("Cascading") && !usedIds.has(p.id));
    if (trailing) { layout.trailing = trailing; usedIds.add(trailing.id); }
    return layout;
  },

  analyzeHealth: (env, myPlants, audioLevel) => {
    let baseScore = 40;
    let issues = []; let impact = [];
    const { co2Risk } = Engines.inferMicroclimate(env);
    if (env.lux < 200) { issues.push("Deficient natural light"); impact.push("Circadian disruption & Fatigue"); } 
    if (co2Risk === 'High') { issues.push("CO₂ accumulation risk"); impact.push("Reduced cognitive focus"); }
    if (audioLevel > 65) { issues.push("High ambient noise"); impact.push("Cortisol elevation (Stress)"); }
    if (myPlants.length === 0) { issues.push("Zero biological presence"); impact.push("Visual monotony & low recovery"); }
    
    const co2Mitigation = myPlants.reduce((acc, p) => acc + (p.co2_index || 0), 0);
    const greenerySoftness = myPlants.length * 8;
    let currentScore = Math.min(100, baseScore + co2Mitigation * 2 + greenerySoftness);
    if (audioLevel > 65) currentScore -= 10;
    let improvementDelta = 100 - currentScore;
    return { score: Math.round(currentScore), issues, impact, co2Risk, improvementDelta: improvementDelta > 0 ? `+${Math.round(improvementDelta)}` : '0' };
  },

  calculateCare: (env, plant) => {
    let days = plant.care.base_water_days;
    let lightMod = env.lux > 1000 ? 0.8 : (env.lux < 200 ? 1.3 : 1.0);
    let tempMod = env.temp > 28 ? 0.8 : 1.0;
    let adjustedDays = Math.max(2, Math.round(days * lightMod * tempMod));
    return `Every ${adjustedDays} days`;
  }
};

// ==========================================
// 3. MAIN APPLICATION
// ==========================================
export default function SYLVAIApp() {
  const [userId] = useState(() => "U-" + Math.random().toString(36).substr(2, 9));
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);
  const [identityCompleted, setIdentityCompleted] = useState(false);
  const [view, setView] = useState('dashboard');
  
  const [userState, setUserState] = useState({ mood: 'neutral', intent: 'aesthetics' });
  const [env, setEnv] = useState({ lux: 380, temp: 26, humidity: 42, occupancy: 2, ventilation: 'Medium', audioLevel: 45 });
  
  const [myPlants, setMyPlants] = useState([]); 
  const [cart, setCart] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null); 
  const [arPlant, setArPlant] = useState(null); 
  
  const [location, setLocation] = useState({ loaded: false, city: 'Locating...' });
  const [weather, setWeather] = useState({ loaded: false, desc: '', temp: null });
  
  const [scanMode, setScanMode] = useState('auto'); 
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({ lux: 0, db: 0 });
  const [audioBars, setAudioBars] = useState(Array(15).fill(10));
  const [isSyncing, setIsSyncing] = useState(false);
  
  // OTP & Identity State
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [otpStep, setOtpStep] = useState('input'); // input, sent, verified
  const [otpCode, setOtpCode] = useState('');
  
  // Market AI State & UI Tabs State
  const [aiQuery, setAiQuery] = useState('');
  const [reportTab, setReportTab] = useState('prescription');

  // Refs
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scanIntervalRef = useRef(null);
  const arVideoRef = useRef(null);
  const arStreamRef = useRef(null);

  const [healthData, setHealthData] = useState(() => Engines.analyzeHealth(env, myPlants, env.audioLevel));

  useEffect(() => { setHealthData(Engines.analyzeHealth(env, myPlants, env.audioLevel)); }, [env, myPlants]);

  // Clean up Hardware Sensors when leaving views
  useEffect(() => {
    if (view !== 'scan') stopHardwareSensors();
  }, [view, scanMode]);

  // Manage AR Camera Lifecycle at the root to avoid breaking React hooks rules
  useEffect(() => {
    if (arPlant) {
      startARCamera();
    } else {
      stopARCamera();
    }
    return () => stopARCamera();
  }, [arPlant]);

  // Track View Changes
  useEffect(() => {
    if (identityCompleted) {
      syncToGoogleSheets('Track_Event', {
        user_id: userId,
        event_type: 'Navigation',
        payload: { view }
      });
    }
  }, [view, identityCompleted]);

  const switchView = (v) => { window.scrollTo(0,0); setView(v); };
  
  // --- GOOGLE SHEETS UNIFIED SYNC ---
  const syncToGoogleSheets = async (type, data) => {
    setIsSyncing(true);
    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPVe2V0cknwxBl5__jawo_tkn_5fOys6l3R2ivUcZsJRTPKOX94ee7efLilJJRmgwp/exec"; 
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ type, data })
      });
    } catch (e) { console.warn("Cloud Sync Note: Operating offline or CORS suppressed."); } 
    finally { setIsSyncing(false); }
  };

  const handleSendOTP = () => {
    if (contactInfo.phone.length < 10) return alert("Please enter a valid phone number.");
    setOtpStep('sent');
    // Simulated OTP delivery
    setTimeout(() => {
      alert("Simulated SYLVAI OTP: 1234");
    }, 1000);
  };

  const verifyOTPAndProceed = () => {
    if (otpCode === '1234') {
      setOtpStep('verified');
      setTimeout(() => {
        setIdentityCompleted(true);
        syncToGoogleSheets('User_Init', { user_id: userId, userProfile: contactInfo });
      }, 500);
    } else {
      alert("Invalid OTP. Try 1234.");
    }
  };

  const fetchLiveWeather = async (lat, lon) => {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const data = await res.json();
      setWeather({ loaded: true, temp: data.current_weather.temperature, desc: "Live Weather" });
      setEnv(prev => ({ ...prev, temp: data.current_weather.temperature }));
    } catch (err) {
      setWeather({ loaded: true, temp: 26, desc: "Simulated" });
    }
  };

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ loaded: true, city: "Geo-Locked" });
          fetchLiveWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          setLocation({ loaded: true, city: "Location Disabled" });
          setWeather({ loaded: true, temp: 24, desc: "Default" });
        }
      );
    }
  };

  // --- HARDWARE ENGINES ---
  const startHardwareSensors = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      source.connect(analyserRef.current);
      processAudio();
    } catch (err) { setScanMode('manual'); }
  };

  const stopHardwareSensors = () => {
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') audioContextRef.current.close();
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);
  };

  const processAudio = () => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const bars = []; let sum = 0;
    for (let i = 0; i < 15; i++) { const val = dataArray[i] || 10; bars.push(Math.max(10, val * 0.8)); sum += val; }
    setAudioBars(bars);
    const estimatedDb = Math.min(100, Math.max(30, 30 + ((sum / 15) * 0.4)));
    setLiveMetrics(prev => ({ ...prev, db: Math.round(estimatedDb) }));
    if (scanning) animationFrameRef.current = requestAnimationFrame(processAudio);
  };

  const executeAutoScan = () => {
    if (scanning) return;
    setScanning(true); setScanProgress(0);
    if (!streamRef.current) startHardwareSensors();
    processAudio();
    let step = 0;
    scanIntervalRef.current = setInterval(() => {
      step += 5; setScanProgress(step);
      setLiveMetrics(prev => ({ ...prev, lux: Math.floor(Math.random() * 600) + 150 }));
      if (step >= 100) {
        clearInterval(scanIntervalRef.current); cancelAnimationFrame(animationFrameRef.current);
        setTimeout(() => {
          setScanning(false);
          setEnv(prev => ({ ...prev, lux: liveMetrics.lux, audioLevel: liveMetrics.db }));
          syncToGoogleSheets('Track_Event', { user_id: userId, event_type: 'Spatial_Scan', payload: { lux: liveMetrics.lux, db: liveMetrics.db, userState } });
          switchView('report'); 
        }, 500);
      }
    }, 200);
  };

  const startARCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      arStreamRef.current = stream;
      if (arVideoRef.current) arVideoRef.current.srcObject = stream;
    } catch (err) { console.error("AR Camera blocked", err); }
  };

  const stopARCamera = () => {
    if (arStreamRef.current) { arStreamRef.current.getTracks().forEach(t => t.stop()); arStreamRef.current = null; }
  };

  const simulateIntervention = () => {
    setMyPlants([{ ...PLANT_DB[0], daysLeft: 4, fertDaysLeft: 14 }]);
    syncToGoogleSheets('Track_Event', { user_id: userId, event_type: 'Simulated_Intervention' });
  };

  const addToCart = (item) => {
    if (item.isLayoutBundle) {
      const bundleItems = Object.values(item.layout).filter(Boolean);
      setCart([...cart, ...bundleItems]);
    } else {
      setCart([...cart, item]);
    }
    if (view === 'plant_detail') switchView('shop');
  };

  const checkout = () => {
    const newOwned = cart.filter(item => !item.items).map(item => ({ ...item, daysLeft: 5, fertDaysLeft: 14 }));
    setMyPlants([...myPlants, ...newOwned]);
    syncToGoogleSheets('Procurement_Order', { user_id: userId, userProfile: contactInfo, items: cart.map(i => i.name), totalValue: cart.reduce((s, p) => s + p.price, 0), userState });
    setCart([]); setView('dashboard');
  };

  // --- UI VIEWS ---

  const renderOnboarding = () => (
    <div className="fixed inset-0 bg-[#0f1a14] z-50 flex flex-col justify-center px-8 animate-in fade-in duration-700 overflow-y-auto py-10">
      <div className="w-16 h-16 bg-[#2e7d32]/20 border border-[#2e7d32]/50 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(46,125,50,0.3)] shrink-0">
        <Leaf className="w-8 h-8 text-[#4ade80]" />
      </div>
      <h1 className="text-5xl font-light text-white tracking-tight leading-tight mb-2">SYLVAI</h1>
      <p className="text-[#4ade80] text-sm font-bold uppercase tracking-widest mb-6">Bring Ecology Indoors</p>
      
      <div className="bg-[#16241c]/50 p-6 rounded-3xl border border-white/5 mb-8">
        <h2 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-yellow-400"/> What's in it for you?</h2>
        <ul className="space-y-4 text-gray-400 text-sm font-medium">
          <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5"/> <div><span className="text-white">Cognitive Optimization:</span> Plants reduce visual fatigue by 14% and increase focus.</div></li>
          <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5"/> <div><span className="text-white">Physiological Stability:</span> Natural cooling and air detoxification for deeper sleep.</div></li>
          <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5"/> <div><span className="text-white">Precision Care:</span> SYLVAI models exact care schedules based on your real-time light and humidity.</div></li>
        </ul>
      </div>

      <button onClick={() => { setOnboardingCompleted(true); requestLocation(); }} className="w-full bg-white text-black p-4 rounded-2xl text-sm font-bold uppercase tracking-widest flex justify-between items-center transition-transform active:scale-95 shadow-xl">
        Enter System <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  );

  const renderIdentityInit = () => (
    <div className="fixed inset-0 bg-[#0f1a14] z-50 flex flex-col justify-center px-8 animate-in slide-in-from-right duration-500">
      <h2 className="text-3xl font-bold text-white mb-2">Initialize Profile</h2>
      <p className="text-gray-400 text-sm mb-10 font-medium">We securely link spatial data to your identity for personalized ecological tracking.</p>
      
      <div className="space-y-4 mb-8">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Full Name" value={contactInfo.name} onChange={e => setContactInfo({...contactInfo, name: e.target.value})} disabled={otpStep !== 'input'} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors disabled:opacity-50" />
        </div>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="tel" placeholder="Phone Number" value={contactInfo.phone} onChange={e => setContactInfo({...contactInfo, phone: e.target.value})} disabled={otpStep !== 'input'} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors disabled:opacity-50" />
        </div>
        <div className="relative">
          <Cloud className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="email" placeholder="Email Address" value={contactInfo.email} onChange={e => setContactInfo({...contactInfo, email: e.target.value})} disabled={otpStep !== 'input'} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors disabled:opacity-50" />
        </div>
      </div>

      {otpStep === 'input' && (
        <button disabled={!contactInfo.name || contactInfo.phone.length < 10} onClick={handleSendOTP} className="w-full p-4 rounded-2xl text-sm font-bold uppercase tracking-widest bg-[#2e7d32] text-white disabled:bg-gray-800 disabled:text-gray-500">
          Send Verification OTP
        </button>
      )}

      {otpStep === 'sent' && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Enter OTP (Hint: 1234)" value={otpCode} onChange={e => setOtpCode(e.target.value)} className="w-full bg-[#16241c] border border-[#4ade80]/50 rounded-2xl p-4 pl-12 text-[#4ade80] text-center font-bold tracking-[0.5em] outline-none" />
          </div>
          <button onClick={verifyOTPAndProceed} className="w-full p-4 rounded-2xl text-sm font-bold uppercase tracking-widest bg-[#4ade80] text-black shadow-[0_0_20px_rgba(74,222,128,0.3)]">
            Verify & Enter System
          </button>
        </div>
      )}

      {otpStep === 'verified' && (
        <div className="text-center text-[#4ade80] flex flex-col items-center gap-2 animate-in zoom-in">
          <ShieldCheck className="w-12 h-12" />
          <span className="font-bold uppercase tracking-widest text-xs">Identity Secured</span>
        </div>
      )}
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6 animate-in fade-in duration-500 pb-24">
      <div className="flex items-center justify-between bg-[#16241c]/60 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Map className="w-5 h-5 text-indigo-400"/>
          <div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Telemetry</div><div className="text-xs text-white font-medium">{location.city}</div></div>
        </div>
        <div className="flex items-center gap-3 text-right">
          <div><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Live Ambient</div><div className="text-xs text-white font-medium">{weather.loaded ? `${weather.temp}°C` : 'Syncing...'}</div></div>
          <Thermometer className="w-5 h-5 text-orange-400"/>
        </div>
      </div>

      <div className="bg-[#16241c]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <h2 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Indoor Wellbeing Score</h2>
          <span className="bg-[#2e7d32]/20 border border-[#2e7d32]/50 text-[#4ade80] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
            Delta: {healthData.improvementDelta}
          </span>
        </div>
        <div className="flex items-end gap-3 mb-6 relative z-10">
          <span className="text-7xl font-light text-white tracking-tighter">{healthData.score}</span>
          <span className="text-xl text-gray-500 font-medium mb-2">/100</span>
        </div>
        <div className="grid grid-cols-4 gap-2 py-5 border-t border-white/5 relative z-10">
          <div className="text-center"><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Lux</div><div className="text-sm font-medium text-white">{env.lux}</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Temp</div><div className="text-sm font-medium text-white">{env.temp}°C</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Acoustic</div><div className="text-sm font-medium text-white">{env.audioLevel}dB</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">CO₂ Risk</div><div className={`text-sm font-medium ${healthData.co2Risk === 'High' ? 'text-red-400' : 'text-emerald-400'}`}>{healthData.co2Risk}</div></div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-bold mb-4 text-white uppercase tracking-widest flex items-center gap-2"><Wind className="w-4 h-4 text-[#4ade80]"/> Active Biophilic Interventions</h2>
        {myPlants.length === 0 ? (
          <div className="text-center p-8 bg-[#16241c]/50 rounded-3xl border border-white/5 text-gray-500 shadow-inner">
            <Brain className="w-8 h-8 mx-auto mb-3 opacity-30"/>
            <p className="text-sm font-medium mb-5">System awaiting biological integration.</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => switchView('assessment')} className="bg-[#4ade80] text-black px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(74,222,128,0.3)]">Begin Assessment</button>
              <button onClick={simulateIntervention} className="bg-transparent border border-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest">Simulate Demo</button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {myPlants.map((plant, idx) => (
              <div key={idx} className="bg-[#16241c]/80 p-4 rounded-3xl border border-white/5 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img src={plant.image} className="w-14 h-14 rounded-2xl object-cover shadow-md" alt="" />
                  <div className="flex-1"><h3 className="font-bold text-sm text-white">{plant.name}</h3><p className="text-[10px] text-[#4ade80] font-bold uppercase mt-1">Status: {plant.health_status}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className={`p-3 rounded-2xl border flex items-center gap-3 ${plant.daysLeft <= 1 ? 'bg-blue-900/20 border-blue-500/30 text-blue-300' : 'bg-[#0f1a14] border-white/5 text-gray-400'}`}>
                    <Droplets className={`w-5 h-5 shrink-0 ${plant.daysLeft <= 1 ? 'text-blue-400 animate-pulse' : 'text-gray-500'}`} />
                    <div><div className="text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5">Hydration</div><div className="text-xs font-medium">{plant.daysLeft <= 1 ? 'Due Today' : `In ${plant.daysLeft} days`}</div></div>
                  </div>
                  <div className="p-3 rounded-2xl border bg-[#0f1a14] border-white/5 text-gray-400 flex items-center gap-3">
                    <Activity className="w-5 h-5 shrink-0 text-orange-400/70" />
                    <div><div className="text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5">Nutrients</div><div className="text-xs font-medium">In {plant.fertDaysLeft} days</div></div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => switchView('assessment')} className="w-full mt-4 bg-white/5 text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10">Re-Assess Space</button>
          </div>
        )}
      </div>
      <div className="pt-8 pb-2 text-center text-gray-500"><div className="text-[9px] uppercase tracking-[0.2em] font-bold mb-1">Developed & Designed by</div><div className="text-xs font-bold uppercase text-gray-400">Anirban Pal, Greenscape Designz</div></div>
    </div>
  );

  const renderHumanAssessment = () => (
    <div className="space-y-8 animate-in slide-in-from-right duration-500 pb-24">
      <div className="mb-6"><h2 className="text-2xl font-bold text-white tracking-tight mb-2">How are you feeling?</h2><p className="text-xs text-gray-400 font-medium">SYLVAI identifies biological solutions based on your baseline state.</p></div>
      <div className="grid grid-cols-2 gap-3">
        {[{ id: 'stressed', icon: Frown, label: 'Stressed' }, { id: 'fatigued', icon: Moon, label: 'Fatigued' }, { id: 'neutral', icon: Smile, label: 'Balanced' }].map(m => {
          const Icon = m.icon;
          return (
          <button key={m.id} onClick={() => setUserState({...userState, mood: m.id})} className={`p-4 rounded-2xl border flex flex-col items-center gap-3 ${userState.mood === m.id ? 'bg-[#2e7d32]/20 border-[#4ade80] text-[#4ade80]' : 'bg-[#16241c]/60 border-white/5 text-gray-400'}`}>
            <Icon className="w-6 h-6"/><span className="text-xs font-bold">{m.label}</span>
          </button>
        )})}
      </div>
      <div className="space-y-3">
        {[{ id: 'focus', icon: Coffee, label: 'Deep Work & Focus' }, { id: 'sleep', icon: Moon, label: 'Sleep Optimization' }, { id: 'relax', icon: Brain, label: 'Stress Recovery' }].map(intent => {
          const Icon = intent.icon;
          return (
          <button key={intent.id} onClick={() => setUserState({...userState, intent: intent.id})} className={`w-full p-4 rounded-2xl border flex items-center gap-4 ${userState.intent === intent.id ? 'bg-[#2e7d32]/20 border-[#4ade80]' : 'bg-[#16241c]/60 border-white/5'}`}>
            <div className={`p-3 rounded-xl ${userState.intent === intent.id ? 'bg-[#4ade80] text-black' : 'bg-white/5'}`}><Icon className="w-5 h-5"/></div>
            <div className={`text-sm font-bold ${userState.intent === intent.id ? 'text-[#4ade80]' : 'text-white'}`}>{intent.label}</div>
          </button>
        )})}
      </div>
      <button onClick={() => switchView('scan')} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase tracking-widest flex justify-between items-center mt-8">Proceed to Scan <ArrowRight className="w-5 h-5"/></button>
    </div>
  );

  const renderScanner = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
      <h2 className="text-sm font-bold flex items-center gap-2 text-white uppercase tracking-widest"><MapPin className="w-5 h-5 text-[#4ade80]" /> Spatial Profiling</h2>
      <div className="flex bg-[#0a110d] rounded-xl p-1 border border-white/10">
        <button onClick={() => {setScanMode('auto'); startHardwareSensors();}} className={`flex-1 py-2 text-xs font-bold rounded-lg ${scanMode === 'auto' ? 'bg-[#2e7d32] text-white' : 'text-gray-500'}`}>Hardware Scan</button>
        <button onClick={() => {setScanMode('manual'); stopHardwareSensors();}} className={`flex-1 py-2 text-xs font-bold rounded-lg ${scanMode === 'manual' ? 'bg-[#16241c] text-white' : 'text-gray-500'}`}>Manual Override</button>
      </div>
      {scanMode === 'auto' ? (
        <div className="bg-[#16241c]/80 p-6 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          {scanning && <div className="absolute top-0 left-0 h-1 bg-[#4ade80]" style={{ width: `${scanProgress}%` }} />}
          <div className="w-full aspect-[4/3] bg-black rounded-2xl border border-white/10 relative overflow-hidden mb-6 flex items-center justify-center">
             <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover opacity-60" />
             {scanning && <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500/20 border border-red-500/50 px-2 py-1 rounded text-[9px] font-bold text-red-500 uppercase tracking-widest animate-pulse"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Recording</div>}
             <div className="absolute top-3 left-3 bg-black/60 p-1 px-2 rounded-lg text-[10px] text-yellow-400 font-mono flex items-center gap-1"><Sun className="w-3 h-3"/> {liveMetrics.lux} lx</div>
             <div className="absolute bottom-3 right-3 flex items-end gap-[2px] h-10 w-24 bg-black/60 p-2 rounded-lg">
               {audioBars.map((h, i) => <div key={i} className={`w-full rounded-t-sm ${h > 70 ? 'bg-red-400' : 'bg-[#4ade80]'}`} style={{ height: `${h}%` }}/>)}
               <span className="absolute -top-5 right-1 text-[9px] text-[#4ade80] font-mono">{liveMetrics.db} dB</span>
             </div>
             {scanning && <div className="z-20 text-center animate-pulse"><div className="text-white text-3xl font-light tabular-nums">{scanProgress}%</div></div>}
          </div>
          <button onClick={streamRef.current ? executeAutoScan : startHardwareSensors} disabled={scanning} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase">
            {scanning ? "Processing..." : streamRef.current ? "Execute Diagnostics" : "Enable Camera/Mic"}
          </button>
        </div>
      ) : (
        <div className="bg-[#16241c]/80 p-6 rounded-3xl border border-white/5 space-y-6">
          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">Illuminance (Lux): {env.lux}</label>
          <input type="range" min="50" max="3000" value={env.lux} onChange={e => setEnv({...env, lux: parseInt(e.target.value)})} className="w-full accent-[#4ade80] h-1 bg-white/10 rounded-lg appearance-none" />
          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">Acoustic Noise (dB): {env.audioLevel}</label>
          <input type="range" min="30" max="100" value={env.audioLevel} onChange={e => setEnv({...env, audioLevel: parseInt(e.target.value)})} className="w-full accent-blue-400 h-1 bg-white/10 rounded-lg appearance-none" />
          
          <button onClick={() => {
            syncToGoogleSheets('Track_Event', { user_id: userId, event_type: 'Manual_Data_Override', payload: { lux: env.lux, audioDb: env.audioLevel, userState } });
            switchView('report');
          }} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase mt-4">Generate Prescription</button>
        </div>
      )}
    </div>
  );

  const renderReport = () => {
    return (
      <div className="space-y-6 animate-in slide-in-from-right duration-500 pb-24">
        <h2 className="text-sm font-bold flex items-center gap-2 text-white uppercase tracking-widest"><FileText className="w-5 h-5 text-[#4ade80]" /> Intelligence Output</h2>
        
        <div className="bg-[#16241c]/80 rounded-3xl border border-white/5 shadow-xl overflow-hidden">
          <div className="flex border-b border-white/5">
            <button onClick={() => setReportTab('state')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest ${reportTab === 'state' ? 'bg-white/5 text-[#4ade80]' : 'text-gray-500'}`}>Human</button>
            <button onClick={() => setReportTab('telemetry')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-l border-white/5 ${reportTab === 'telemetry' ? 'bg-white/5 text-blue-400' : 'text-gray-500'}`}>Space</button>
            <button onClick={() => setReportTab('prescription')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border-l border-white/5 ${reportTab === 'prescription' ? 'bg-white/5 text-purple-400' : 'text-gray-500'}`}>Logic</button>
          </div>
          <div className="p-5">
            {reportTab === 'state' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between"><span className="text-gray-500">Baseline Mood:</span><span className="text-[#4ade80]">{userState.mood.toUpperCase()}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Primary Intent:</span><span className="text-[#4ade80]">{userState.intent.toUpperCase()}</span></div>
                <p className="text-gray-400 mt-4 leading-relaxed bg-black/20 p-3 rounded-lg">System will bias plant selection towards species with known positive impacts on {userState.intent}.</p>
              </div>
            )}
            {reportTab === 'telemetry' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between"><span className="text-gray-500">Illuminance:</span><span className="text-yellow-400">{env.lux} Lux</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Acoustic Load:</span><span className="text-blue-400">{env.audioLevel} dB</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Temperature:</span><span className="text-orange-400">{env.temp} °C</span></div>
                <p className="text-gray-400 mt-4 leading-relaxed bg-black/20 p-3 rounded-lg">High acoustic load detected. Recommending dense, large-leaf species for sound diffusion.</p>
              </div>
            )}
            {reportTab === 'prescription' && (
              <div className="space-y-4">
                <div className="flex gap-3 items-center p-3 bg-purple-900/10 border border-purple-500/20 rounded-xl">
                  <Brain className="w-5 h-5 text-purple-400 shrink-0"/>
                  <p className="text-xs text-purple-200 leading-relaxed font-medium">SYLVAI Fusion Engine has successfully mapped your psychological needs to the measured physical microclimate.</p>
                </div>
                <div className="text-[10px] text-gray-500 font-mono">Status: READY_FOR_DEPLOYMENT</div>
              </div>
            )}
          </div>
        </div>

        <button onClick={() => switchView('shop')} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase flex justify-between items-center shadow-[0_0_20px_rgba(46,125,50,0.3)]">
          View Engineered Setup <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  const renderShop = () => {
    const keywords = aiQuery.toLowerCase().split(' ').filter(w => w.length > 2);
    let filteredDB = PLANT_DB;
    if (keywords.length > 0) {
      filteredDB = PLANT_DB.filter(p => keywords.some(kw => p.name.toLowerCase().includes(kw) || p.keywords.some(k => k.includes(kw)) || p.health.impact.toLowerCase().includes(kw)));
      if (filteredDB.length === 0) filteredDB = PLANT_DB;
    }

    let recs = filteredDB.map(p => ({ ...p, score: Engines.scorePlant(env, p, userState) })).filter(p => p.score > 20).sort((a,b) => b.score - a.score);
    const layout = Engines.composeSpace(recs);
    const layoutPrice = Object.values(layout).filter(Boolean).reduce((s,p) => s + p.price, 0);

    return (
      <div className="space-y-8 pb-24 animate-in slide-in-from-right duration-500">
        
        <div className="relative">
          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="text" placeholder="AI: Describe your mood or space..." value={aiQuery} onChange={e => setAiQuery(e.target.value)} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors shadow-lg placeholder:text-gray-600" />
        </div>

        {!aiQuery && (
          <div className="bg-gradient-to-br from-[#16241c] to-[#0a110d] rounded-3xl p-6 border border-[#4ade80]/20 shadow-xl relative">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5 text-[#4ade80]" /> Room Upgrade Plan</h3>
            <p className="text-[10px] text-gray-400 mb-6 font-medium">Composed for your {env.lux}lx light level and {userState.intent} intent.</p>
            <div className="space-y-2 mb-6">
              {Object.entries(layout).map(([zone, p]) => p && (
                <div key={zone} className="flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/5">
                  <img src={p.image} className="w-10 h-10 rounded-xl object-cover" alt="" />
                  <div className="flex-1">
                    <div className="text-[9px] text-[#4ade80] font-bold uppercase mb-0.5">{zone} Layer</div>
                    <div className="text-xs font-bold text-white">{p.name}</div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => addToCart({ name: "Complete Upgrade", price: layoutPrice, isLayoutBundle: true, layout })} className="w-full py-4 bg-[#4ade80] text-black rounded-xl text-xs font-bold uppercase shadow-[0_0_20px_rgba(74,222,128,0.4)]">Deploy Entire Setup (₹{layoutPrice})</button>
          </div>
        )}

        <div className="grid gap-4">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-2">Individual Biological Units</h3>
          {recs.map(p => (
            <div key={p.id} onClick={() => { setSelectedPlant(p); switchView('plant_detail'); }} className="bg-[#16241c]/80 rounded-3xl p-4 flex gap-4 border border-white/5 relative group cursor-pointer active:scale-95 transition-transform">
              <div className="relative w-24 h-24 shrink-0">
                <img src={p.image} className="w-full h-full rounded-2xl object-cover" alt="" />
                <div className="absolute -top-2 -right-2 bg-[#0a110d] text-[#4ade80] text-[9px] font-bold px-2 py-1 rounded-lg border border-[#4ade80]/30">{p.score}% Fit</div>
              </div>
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">{p.name}</h4>
                  <div className="text-[9px] text-gray-400 font-medium p-2 bg-black/20 rounded-lg border border-white/5 mt-1">Height: {p.height}</div>
                </div>
                <div className="flex justify-between items-end mt-2"><span className="text-[9px] text-gray-300 uppercase tracking-widest">{p.care.maintenance} Care</span><span className="text-sm font-bold text-white">₹{p.price}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderARSimulator = () => {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in zoom-in-95 duration-300">
        <video ref={arVideoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 p-6 z-50 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pt-safe">
          <button onClick={() => setArPlant(null)} className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-white transition-transform hover:scale-105"><X className="w-5 h-5"/></button>
          <div className="bg-[#4ade80]/90 text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg"><Maximize className="w-3 h-3" /> Live Spatial Map</div>
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-32 pointer-events-none">
          <div className="relative animate-[float_4s_ease-in-out_infinite]">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/80 rounded-full blur-xl" />
            <img src={arPlant.image} className="w-72 h-72 object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-white/10" alt="AR Projection" />
          </div>
          <p className="mt-12 text-[#4ade80] text-[10px] font-mono uppercase tracking-widest bg-black/80 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">Point at flat surface</p>
        </div>
      </div>
    );
  };

  const renderCart = () => {
    const total = cart.reduce((s, p) => s + p.price, 0);
    return (
      <div className="space-y-6 pb-24">
        <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2"><Package className="w-5 h-5 text-[#4ade80]" /> Procurement Engine</h2>
        {cart.length === 0 ? <div className="text-center py-24 text-gray-500 text-sm font-medium">Cart is empty.</div> : (
          <>
            <div className="bg-[#16241c]/80 p-5 rounded-3xl border border-white/5 space-y-3 shadow-xl">
              {cart.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#0a110d] p-3 rounded-2xl border border-white/5">
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-sm font-bold text-white">₹{item.price}</div>
                </div>
              ))}
              <div className="border-t border-white/10 pt-4 flex justify-between items-center"><span className="text-[10px] text-gray-400 font-bold uppercase">Total</span><span className="text-2xl font-bold text-[#4ade80]">₹{total}</span></div>
            </div>
            
            <div className="bg-[#16241c]/80 p-5 rounded-3xl border border-white/5 shadow-xl flex items-center gap-4">
              <User className="w-8 h-8 text-[#4ade80] opacity-50"/>
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Billing Identity Linked</div>
                <div className="text-sm font-bold text-white">{contactInfo.name}</div>
                <div className="text-xs text-gray-400">{contactInfo.phone}</div>
              </div>
            </div>

            <button onClick={checkout} className={`w-full p-4 rounded-2xl text-sm font-bold uppercase transition-all shadow-xl bg-[#2e7d32] text-white hover:bg-[#3b9e40]`}>
              Confirm & Automate Care
            </button>
          </>
        )}
      </div>
    );
  };

  if (!onboardingCompleted) return renderOnboarding();
  if (!identityCompleted) return renderIdentityInit();

  return (
    <div className="min-h-screen text-[#e6efe9] bg-[#0f1a14] selection:bg-[#2e7d32] pb-20 antialiased">
      {arPlant && renderARSimulator()}
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative bg-[#0f1a14] shadow-2xl">
        <header className="px-6 py-5 flex justify-between items-center z-10 sticky top-0 bg-[#0f1a14]/90 backdrop-blur-xl border-b border-white/5 pt-safe">
          <div className="flex items-center gap-2.5"><Leaf className="w-5 h-5 text-[#4ade80]" /><span className="font-bold text-white uppercase tracking-widest">SYLVAI</span></div>
          <div className="flex items-center gap-4">
            {isSyncing && <div className="text-[9px] font-bold text-blue-400 uppercase tracking-widest animate-pulse flex items-center gap-1"><Cloud className="w-3 h-3"/> Cloud Sync</div>}
            <button onClick={() => { setIdentityCompleted(false); setOnboardingCompleted(false); }} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400"><Info className="w-4 h-4"/></button>
          </div>
        </header>
        <main className="flex-1 px-6 py-8 overflow-y-auto">
          {view === 'dashboard' && renderDashboard()}
          {view === 'assessment' && renderHumanAssessment()}
          {view === 'scan' && renderScanner()}
          {view === 'report' && renderReport()}
          {view === 'shop' && renderShop()}
          {view === 'cart' && renderCart()}
          {view === 'plant_detail' && selectedPlant && <div className="animate-in slide-in-from-right duration-500 pb-24 bg-[#0a110d] -mx-6 -mt-6 px-6 pt-6 min-h-screen relative z-30">
            <button onClick={() => switchView('shop')} className="absolute top-6 left-6 z-40 p-2.5 bg-black/40 rounded-full text-white backdrop-blur-md border border-white/10"><ArrowLeft className="w-5 h-5"/></button>
            <div className="h-80 -mx-6 -mt-6 relative mb-8"><img src={selectedPlant.image} className="w-full h-full object-cover" alt="" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a110d] via-transparent to-transparent" /></div>
            <div className="mb-8"><h2 className="text-3xl font-bold text-white mb-2">{selectedPlant.name}</h2><div className="text-xs text-[#4ade80] font-bold uppercase tracking-[0.2em]">{selectedPlant.health.impact}</div></div>
            
            <div className="grid grid-cols-2 gap-3 mb-10">
              <button onClick={() => setArPlant(selectedPlant)} className="py-4 bg-[#16241c] border border-white/10 text-white rounded-2xl text-xs font-bold uppercase">View AR</button>
              <button onClick={() => addToCart(selectedPlant)} className="py-4 bg-[#2e7d32] text-white rounded-2xl text-xs font-bold uppercase">Add to Cart</button>
            </div>

            <div className="space-y-6">
              {/* Educational UI Section */}
              <section className="bg-[#16241c]/60 rounded-3xl border border-white/5 p-5">
                <h3 className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest mb-4 flex items-center gap-2"><Brain className="w-4 h-4"/> Why this works for you</h3>
                <div className="space-y-4 text-xs font-medium text-gray-300">
                  <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0"/><p><span className="text-white">Color ({selectedPlant.design.color}):</span> {selectedPlant.education.color}</p></div>
                  <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1 shrink-0"/><p><span className="text-white">Texture ({selectedPlant.design.texture}):</span> {selectedPlant.education.texture}</p></div>
                  <div className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0"/><p><span className="text-white">Shape ({selectedPlant.design.form}):</span> {selectedPlant.education.shape}</p></div>
                </div>
              </section>

              <section className="bg-[#16241c]/60 rounded-3xl border border-white/5 p-5 space-y-4">
                <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sensing & Care</h3>
                <div className="flex justify-between items-center text-sm font-medium text-white"><span>Water Frequency</span><span className="text-[#4ade80]">{Engines.calculateCare(env, selectedPlant)}</span></div>
                <div className="flex justify-between items-center text-sm font-medium text-white"><span>Nutrients</span><span className="text-orange-400">{selectedPlant.care.fertiliser}</span></div>
                <div className="flex justify-between items-center text-sm font-medium text-white border-t border-white/10 pt-4 mt-2"><span>Height Target</span><span className="text-gray-400">{selectedPlant.height}</span></div>
              </section>
            </div>
          </div>}
        </main>
        <nav className="fixed bottom-0 left-0 right-0 bg-[#0a110d]/95 backdrop-blur-2xl border-t border-white/5 pb-safe max-w-md mx-auto z-50">
          <div className="flex justify-around items-center p-4">
            <button onClick={() => switchView('dashboard')} className={`flex flex-col items-center gap-1 ${view === 'dashboard' ? 'text-[#4ade80]' : 'text-gray-500'}`}><Home className="w-5 h-5" /><span className="text-[8px] uppercase font-bold">Home</span></button>
            <button onClick={() => switchView('assessment')} className={`flex flex-col items-center gap-1 ${['assessment','scan','report'].includes(view) ? 'text-[#4ade80]' : 'text-gray-500'}`}><Scan className="w-5 h-5" /><span className="text-[8px] uppercase font-bold">Scan</span></button>
            <button onClick={() => switchView('shop')} className={`flex flex-col items-center gap-1 ${['shop','plant_detail'].includes(view) ? 'text-[#4ade80]' : 'text-gray-500'}`}><Store className="w-5 h-5" /><span className="text-[8px] uppercase font-bold">Market</span></button>
            <button onClick={() => switchView('cart')} className={`flex flex-col items-center gap-1 relative ${view === 'cart' ? 'text-[#4ade80]' : 'text-gray-500'}`}>
              <ShoppingBag className="w-5 h-5" />{cart.length > 0 && <span className="absolute -top-1 -right-2 bg-[#4ade80] text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">{cart.length}</span>}<span className="text-[8px] uppercase font-bold">Cart</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
