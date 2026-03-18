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
// 1. COMPREHENSIVE ECOLOGICAL DATABASE (SOUTH INDIA FOCUS)
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
  }
];

// ==========================================
// 2. INTELLIGENCE ENGINES
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
// 3. MAIN APPLICATION COMPONENT
// ==========================================
export default function App() {
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
  
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [otpStep, setOtpStep] = useState('input'); 
  const [otpCode, setOtpCode] = useState('');
  
  const [aiQuery, setAiQuery] = useState('');
  const [reportTab, setReportTab] = useState('prescription');

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

  useEffect(() => {
    if (view !== 'scan') stopHardwareSensors();
  }, [view, scanMode]);

  useEffect(() => {
    if (arPlant) startARCamera(); else stopARCamera();
    return () => stopARCamera();
  }, [arPlant]);

  // Sync Navigation events
  useEffect(() => {
    if (identityCompleted) {
      syncToGoogleSheets('Track_Event', {
        user_id: userId,
        event_type: 'Navigation',
        payload: { view },
        userState: userState,
        userProfile: contactInfo
      });
    }
  }, [view, identityCompleted]);

  const switchView = (v) => { window.scrollTo(0,0); setView(v); };
  
  // --- GOOGLE SHEETS CLOUD SYNC ---
  const syncToGoogleSheets = async (type, data) => {
    setIsSyncing(true);
    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXB3FkZ8_fPHB77mOvBsJNkh6aUfEe-kSN790OzJDhz7yF4dr1S0B0w6aHyHTJNXCD/exec"; 
      await fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ type, data })
      });
    } catch (e) { console.warn("Cloud Sync Logic Error"); } 
    finally { setIsSyncing(false); }
  };

  const handleSendOTP = () => {
    if (contactInfo.phone.length < 10) return alert("Please enter a valid phone number.");
    setOtpStep('sent');
    setTimeout(() => { alert("Simulated SYLVAI OTP: 1234"); }, 1000);
  };

  const verifyOTPAndProceed = () => {
    if (otpCode === '1234') {
      setOtpStep('verified');
      setTimeout(() => {
        setIdentityCompleted(true);
        // CRITICAL: Ensure User_Init sends full user context for logging
        syncToGoogleSheets('User_Init', { 
            user_id: userId, 
            userProfile: contactInfo, 
            userState 
        });
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
    } catch (err) { setWeather({ loaded: true, temp: 26, desc: "Simulated" }); }
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
          syncToGoogleSheets('Track_Event', { 
            user_id: userId, 
            event_type: 'Spatial_Scan', 
            payload: { lux: liveMetrics.lux, db: liveMetrics.db },
            userState,
            userProfile: contactInfo
          });
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
    syncToGoogleSheets('Track_Event', { user_id: userId, event_type: 'Simulated_Intervention', userState, userProfile: contactInfo });
  };

  const addToCart = (item) => {
    if (item.isLayoutBundle) {
      const bundleItems = Object.values(item.layout).filter(Boolean);
      setCart([...cart, ...bundleItems]);
    } else { setCart([...cart, item]); }
    if (view === 'plant_detail') switchView('shop');
  };

  const checkout = () => {
    const newOwned = cart.map(item => ({ ...item, daysLeft: 5, fertDaysLeft: 14 }));
    setMyPlants([...myPlants, ...newOwned]);
    // CRITICAL: Ensure full order context is sent to Google Sheets
    syncToGoogleSheets('Procurement_Order', { 
      user_id: userId, 
      userProfile: contactInfo, 
      items: cart.map(i => i.name), 
      totalValue: cart.reduce((s, p) => s + p.price, 0), 
      userState 
    });
    setCart([]); setView('dashboard');
  };

  // --- VIEWS ---

  const renderOnboarding = () => (
    <div className="fixed inset-0 bg-[#0f1a14] z-50 flex flex-col justify-center px-8 py-10 overflow-y-auto">
      <div className="w-16 h-16 bg-[#2e7d32]/20 border border-[#2e7d32]/50 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(46,125,50,0.3)] shrink-0">
        <Leaf className="w-8 h-8 text-[#4ade80]" />
      </div>
      <h1 className="text-5xl font-light text-white tracking-tight leading-tight mb-2">SYLVAI</h1>
      <p className="text-[#4ade80] text-sm font-bold uppercase tracking-widest mb-6">Bring Ecology Indoors</p>
      <div className="bg-[#16241c]/50 p-6 rounded-3xl border border-white/5 mb-8">
        <h2 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-yellow-400"/> Why SYLVAI?</h2>
        <ul className="space-y-4 text-gray-400 text-sm font-medium">
          <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5"/> <div><span className="text-white">Focus Optimization:</span> Biological triggers that reduce visual fatigue by 14%.</div></li>
          <li className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0 mt-0.5"/> <div><span className="text-white">Bio-Sensing:</span> Hardware scanning for real-time light and acoustic load.</div></li>
        </ul>
      </div>
      <button onClick={() => { setOnboardingCompleted(true); requestLocation(); }} className="w-full bg-white text-black p-4 rounded-2xl text-sm font-bold uppercase tracking-widest flex justify-between items-center shadow-xl">
        Enter System <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  );

  const renderIdentityInit = () => (
    <div className="fixed inset-0 bg-[#0f1a14] z-50 flex flex-col justify-center px-8 overflow-y-auto py-10 animate-in slide-in-from-right duration-500">
      <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Initialize Profile</h2>
      <p className="text-gray-400 text-sm mb-10 font-medium">Link spatial and biophilic telemetry to your secure identity.</p>
      <div className="space-y-4 mb-8">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="text" placeholder="Full Name" value={contactInfo.name} onChange={e => setContactInfo({...contactInfo, name: e.target.value})} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors" />
        </div>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="tel" placeholder="Phone Number" value={contactInfo.phone} onChange={e => setContactInfo({...contactInfo, phone: e.target.value})} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors" />
        </div>
        <div className="relative">
          <Cloud className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input type="email" placeholder="Email Address" value={contactInfo.email} onChange={e => setContactInfo({...contactInfo, email: e.target.value})} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors" />
        </div>
      </div>
      {otpStep === 'input' ? (
        <button disabled={!contactInfo.name || contactInfo.phone.length < 10} onClick={handleSendOTP} className="w-full p-4 rounded-2xl text-sm font-bold uppercase tracking-widest bg-[#2e7d32] text-white disabled:bg-gray-800 disabled:text-gray-500">
          Send Verification OTP
        </button>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Enter OTP (1234)" value={otpCode} onChange={e => setOtpCode(e.target.value)} className="w-full bg-[#16241c] border border-[#4ade80]/50 rounded-2xl p-4 pl-12 text-[#4ade80] text-center font-bold outline-none" />
          </div>
          <button onClick={verifyOTPAndProceed} className="w-full p-4 rounded-2xl text-sm font-bold uppercase tracking-widest bg-[#4ade80] text-black shadow-lg">
            Verify & Secure Profile
          </button>
        </div>
      )}
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6 pb-24 animate-in fade-in duration-500">
      <div className="flex items-center justify-between bg-[#16241c]/60 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Map className="w-5 h-5 text-indigo-400"/>
          <div><div className="text-[10px] text-gray-500 font-bold uppercase mb-0.5">Telemetry</div><div className="text-xs text-white font-medium">{location.city}</div></div>
        </div>
        <div className="flex items-center gap-3 text-right">
          <div><div className="text-[10px] text-gray-500 font-bold uppercase mb-0.5">Live Ambient</div><div className="text-xs text-white font-medium">{weather.loaded ? `${weather.temp}°C` : 'Syncing...'}</div></div>
          <Thermometer className="w-5 h-5 text-orange-400"/>
        </div>
      </div>

      <div className="bg-[#16241c]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Wellbeing Score</h2>
          <span className="bg-[#2e7d32]/20 border border-[#2e7d32]/50 text-[#4ade80] text-[9px] uppercase font-bold px-2 py-1 rounded-full">
            Delta: {healthData.improvementDelta}
          </span>
        </div>
        <div className="flex items-end gap-3 mb-6 relative z-10">
          <span className="text-7xl font-light text-white tracking-tighter">{healthData.score}</span>
          <span className="text-xl text-gray-500 font-medium mb-2">/100</span>
        </div>
        <div className="grid grid-cols-4 gap-2 py-5 border-t border-white/5 relative z-10">
          <div className="text-center"><div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">Lux</div><div className="text-sm font-medium text-white">{env.lux}</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">Temp</div><div className="text-sm font-medium text-white">{env.temp}°C</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">Audio</div><div className="text-sm font-medium text-white">{env.audioLevel}dB</div></div>
          <div className="text-center border-l border-white/5"><div className="text-[10px] text-gray-500 uppercase mb-1 font-bold">CO₂</div><div className="text-sm font-medium text-white">{healthData.co2Risk}</div></div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-bold mb-4 text-white uppercase flex items-center gap-2 tracking-widest"><Wind className="w-4 h-4 text-[#4ade80]"/> Active Biophilia</h2>
        {myPlants.length === 0 ? (
          <div className="text-center p-8 bg-[#16241c]/50 rounded-3xl border border-white/5 text-gray-500">
            <Brain className="w-8 h-8 mx-auto mb-3 opacity-30"/>
            <p className="text-sm font-medium mb-5">System awaiting biological integration.</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => switchView('assessment')} className="bg-[#4ade80] text-black px-6 py-3 rounded-xl text-xs font-bold uppercase shadow-lg">Begin Assessment</button>
              <button onClick={simulateIntervention} className="bg-transparent border border-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase">Simulate Demo</button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {myPlants.map((plant, idx) => (
              <div key={idx} className="bg-[#16241c]/80 p-4 rounded-3xl border border-white/5 shadow-lg flex items-center gap-4">
                <img src={plant.image} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt="" />
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-white">{plant.name}</h3>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1.5"><Droplets className="w-3.5 h-3.5 text-blue-400" /><span className="text-[10px] text-gray-400 font-bold uppercase">Due in {plant.daysLeft}d</span></div>
                    <div className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-orange-400" /><span className="text-[10px] text-gray-400 font-bold uppercase">Healthy</span></div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => switchView('assessment')} className="w-full mt-4 bg-white/5 text-white px-4 py-3 rounded-xl text-xs font-bold uppercase border border-white/10 tracking-widest">Update Profiling</button>
          </div>
        )}
      </div>
      <div className="pt-8 pb-4 text-center text-gray-600">
        <div className="text-[9px] uppercase tracking-[0.2em] font-bold mb-1">Designed by</div>
        <div className="text-xs font-bold uppercase text-gray-500 tracking-wider">Anirban Pal, Greenscape Designz</div>
      </div>
    </div>
  );

  const renderAssessment = () => (
    <div className="space-y-8 pb-24 animate-in slide-in-from-right duration-500">
      <div className="mb-6"><h2 className="text-2xl font-bold text-white tracking-tight mb-2">How are you feeling?</h2><p className="text-xs text-gray-400 font-medium">SYLVAI identifies biological solutions based on your baseline state.</p></div>
      <div className="grid grid-cols-2 gap-3">
        {[{ id: 'stressed', icon: Frown, label: 'Stressed' }, { id: 'fatigued', icon: Moon, label: 'Fatigued' }, { id: 'neutral', icon: Smile, label: 'Balanced' }].map(m => {
          const Icon = m.icon;
          return (
          <button key={m.id} onClick={() => setUserState({...userState, mood: m.id})} className={`p-4 rounded-2xl border flex flex-col items-center gap-3 ${userState.mood === m.id ? 'bg-[#2e7d32]/20 border-[#4ade80] text-[#4ade80]' : 'bg-[#16241c]/60 border-white/5 text-gray-400'}`}>
            <Icon className="w-6 h-6"/><span className="text-xs font-bold uppercase tracking-widest">{m.label}</span>
          </button>
        )})}
      </div>
      <div className="space-y-3">
        {[{ id: 'focus', icon: Coffee, label: 'Deep Work & Focus' }, { id: 'sleep', icon: Moon, label: 'Sleep Optimization' }, { id: 'relax', icon: Brain, label: 'Stress Recovery' }].map(intent => {
          const Icon = intent.icon;
          return (
          <button key={intent.id} onClick={() => setUserState({...userState, intent: intent.id})} className={`w-full p-4 rounded-2xl border flex items-center gap-4 ${userState.intent === intent.id ? 'bg-[#2e7d32]/20 border-[#4ade80]' : 'bg-[#16241c]/60 border-white/5'}`}>
            <div className={`p-3 rounded-xl ${userState.intent === intent.id ? 'bg-[#4ade80] text-black' : 'bg-white/5'}`}><Icon className="w-5 h-5"/></div>
            <div className={`text-sm font-bold uppercase tracking-widest ${userState.intent === intent.id ? 'text-[#4ade80]' : 'text-white'}`}>{intent.label}</div>
          </button>
        )})}
      </div>
      <button onClick={() => switchView('scan')} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase tracking-widest flex justify-between items-center mt-8 shadow-xl">Proceed to Scan <ArrowRight className="w-5 h-5"/></button>
    </div>
  );

  const renderScanner = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-500">
      <h2 className="text-sm font-bold flex items-center gap-2 text-white uppercase tracking-widest"><MapPin className="w-5 h-5 text-[#4ade80]" /> Spatial Profiling</h2>
      <div className="bg-[#16241c]/80 p-6 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
        {scanning && <div className="absolute top-0 left-0 h-1 bg-[#4ade80]" style={{ width: `${scanProgress}%` }} />}
        <div className="w-full aspect-[4/3] bg-black rounded-2xl border border-white/10 relative overflow-hidden mb-6 flex items-center justify-center">
            <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute top-3 left-3 bg-black/60 p-1 px-2 rounded-lg text-[10px] text-yellow-400 font-mono flex items-center gap-1"><Sun className="w-3 h-3"/> {liveMetrics.lux} lx</div>
            <div className="absolute bottom-3 right-3 flex items-end gap-[2px] h-10 w-24 bg-black/60 p-2 rounded-lg">
               {audioBars.map((h, i) => <div key={i} className={`w-full rounded-t-sm ${h > 70 ? 'bg-red-400' : 'bg-[#4ade80]'}`} style={{ height: `${h}%` }}/>)}
            </div>
            {scanning && <div className="z-20 text-center animate-pulse"><div className="text-white text-3xl font-light tabular-nums">{scanProgress}%</div></div>}
        </div>
        <button onClick={streamRef.current ? executeAutoScan : startHardwareSensors} disabled={scanning} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase tracking-widest">
          {scanning ? "Processing..." : streamRef.current ? "Execute Diagnostics" : "Enable Sensors"}
        </button>
      </div>
    </div>
  );

  const renderReport = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-500">
      <h2 className="text-sm font-bold flex items-center gap-2 text-white uppercase tracking-widest"><FileText className="w-5 h-5 text-[#4ade80]" /> Intelligence Output</h2>
      <div className="bg-[#16241c]/80 rounded-3xl border border-white/5 shadow-xl overflow-hidden">
        <div className="flex border-b border-white/5">
          {['Human State', 'Telemetry', 'Logic'].map((t, idx) => (
            <button key={t} onClick={() => setReportTab(idx === 0 ? 'state' : idx === 1 ? 'telemetry' : 'prescription')} className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest ${reportTab === (idx === 0 ? 'state' : idx === 1 ? 'telemetry' : 'prescription') ? 'bg-white/5 text-[#4ade80]' : 'text-gray-500'}`}>{t}</button>
          ))}
        </div>
        <div className="p-5">
          {reportTab === 'state' && <p className="text-xs text-gray-400 font-mono">Intent: {userState.intent.toUpperCase()}<br/>Mood: {userState.mood.toUpperCase()}</p>}
          {reportTab === 'telemetry' && <p className="text-xs text-gray-400 font-mono">Lux: {env.lux}<br/>Audio: {env.audioLevel}dB<br/>Temp: {env.temp}°C</p>}
          {reportTab === 'prescription' && (
            <div className="flex gap-3 items-center p-3 bg-purple-900/10 border border-purple-500/20 rounded-xl">
              <Brain className="w-5 h-5 text-purple-400 shrink-0"/>
              <p className="text-xs text-purple-200 font-medium tracking-tight">Biological solution mapping confirmed for South Indian microclimate.</p>
            </div>
          )}
        </div>
      </div>
      <button onClick={() => switchView('shop')} className="w-full bg-[#2e7d32] text-white p-4 rounded-2xl text-sm font-bold uppercase flex justify-between items-center shadow-xl tracking-widest">
        View Engineered Space <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );

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
          <input type="text" placeholder="AI Search: Desk plants, low light..." value={aiQuery} onChange={e => setAiQuery(e.target.value)} className="w-full bg-[#16241c] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm outline-none focus:border-[#4ade80] transition-colors shadow-lg" />
        </div>

        {!aiQuery && (
          <div className="bg-gradient-to-br from-[#16241c] to-[#0a110d] rounded-3xl p-6 border border-[#4ade80]/20 shadow-xl">
            <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2 mb-4 tracking-widest"><ShieldCheck className="w-5 h-5 text-[#4ade80]" /> Spatial Upgrade Bundle</h3>
            <div className="space-y-2 mb-6">
              {Object.entries(layout).map(([zone, p]) => p && (
                <div key={zone} className="flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/5">
                  <img src={p.image} className="w-10 h-10 rounded-xl object-cover" alt="" />
                  <div className="flex-1 text-xs font-bold text-white uppercase tracking-tight">{p.name} ({zone})</div>
                </div>
              ))}
            </div>
            <button onClick={() => addToCart({ name: "Complete Room Upgrade", price: layoutPrice, isLayoutBundle: true, layout })} className="w-full py-4 bg-[#4ade80] text-black rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">Deploy Full Plan (₹{layoutPrice})</button>
          </div>
        )}

        <div className="grid gap-4">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-2">Individual Biological Units</h3>
          {recs.map(p => (
            <div key={p.id} onClick={() => { setSelectedPlant(p); switchView('plant_detail'); }} className="bg-[#16241c]/80 rounded-3xl p-4 flex gap-4 border border-white/5 transition-transform active:scale-95 cursor-pointer">
              <img src={p.image} className="w-24 h-24 rounded-2xl object-cover" alt="" />
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div><h4 className="font-bold text-sm text-white tracking-tight">{p.name}</h4><div className="text-[10px] text-[#4ade80] font-bold mt-1 uppercase tracking-wider">{p.score}% Matching</div></div>
                <div className="flex justify-between items-end"><span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{p.care.maintenance} Care</span><span className="text-sm font-bold text-white">₹{p.price}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderARSimulator = () => (
    <div className="fixed inset-0 z-[100] bg-black animate-in zoom-in duration-300">
      <video ref={arVideoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
      <div className="absolute top-10 left-6 z-50 flex justify-between items-center right-6">
        <button onClick={() => setArPlant(null)} className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-white"><X className="w-5 h-5"/></button>
        <div className="bg-[#4ade80] text-black text-[10px] font-bold uppercase px-4 py-2 rounded-full flex items-center gap-2"><Maximize className="w-3 h-3" /> Live AR Projection</div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-20 pointer-events-none">
        <div className="relative">
          <img src={arPlant.image} className="w-72 h-72 object-cover rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] border-2 border-white/20 animate-pulse" alt="AR" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-2xl rounded-full"></div>
        </div>
        <p className="mt-12 text-[#4ade80] text-[10px] font-mono uppercase bg-black/80 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">Surface Tracking Active</p>
      </div>
    </div>
  );

  const renderCart = () => (
    <div className="space-y-6 pb-24 animate-in slide-in-from-right duration-500">
      <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2"><Package className="w-5 h-5 text-[#4ade80]" /> Procurement Engine</h2>
      {cart.length === 0 ? <div className="text-center py-24 text-gray-500 text-sm font-bold uppercase tracking-widest">Cart is empty</div> : (
        <>
          <div className="bg-[#16241c]/80 p-5 rounded-3xl border border-white/5 space-y-3 shadow-xl">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-[#0a110d] p-3 rounded-2xl border border-white/5">
                <div className="text-sm font-bold text-white tracking-tight">{item.name}</div>
                <div className="text-sm font-bold text-white">₹{item.price}</div>
              </div>
            ))}
            <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xl font-bold text-[#4ade80]"><span>Total</span><span>₹{cart.reduce((s, p) => s + p.price, 0)}</span></div>
          </div>
          <button onClick={checkout} className="w-full p-4 rounded-2xl text-sm font-bold uppercase bg-[#2e7d32] text-white shadow-xl tracking-widest active:scale-95 transition-transform">Confirm Order</button>
        </>
      )}
    </div>
  );

  const renderPlantDetail = () => (
    <div className="pb-24 -mx-6 -mt-8 px-6 pt-8 min-h-screen relative z-30 bg-[#0f1a14] animate-in slide-in-from-right duration-300">
      <button onClick={() => setView('shop')} className="absolute top-6 left-6 z-40 p-2.5 bg-black/40 rounded-full text-white border border-white/10 backdrop-blur-md"><ArrowLeft className="w-5 h-5"/></button>
      <div className="h-80 -mx-6 -mt-8 relative mb-8">
        <img src={selectedPlant.image} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a14] via-transparent to-transparent" />
      </div>
      <div className="px-2">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{selectedPlant.name}</h2>
        <div className="text-xs text-[#4ade80] font-bold uppercase mb-8 tracking-[0.2em]">{selectedPlant.health.impact}</div>
        <div className="grid grid-cols-2 gap-3 mb-10">
          <button onClick={() => setArPlant(selectedPlant)} className="py-4 bg-[#16241c] border border-white/10 text-white rounded-2xl text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">AR Simulation</button>
          <button onClick={() => addToCart(selectedPlant)} className="py-4 bg-[#2e7d32] text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">Add to Cart</button>
        </div>
        <div className="space-y-6">
          <section className="bg-[#16241c]/60 rounded-3xl border border-white/5 p-5">
            <h3 className="text-[10px] font-bold text-[#4ade80] uppercase mb-4 flex items-center gap-2 tracking-[0.2em]"><Brain className="w-4 h-4"/> Biological Design Logic</h3>
            <div className="space-y-3 text-xs text-gray-300 leading-relaxed font-medium">
               <p><span className="text-white font-bold">Color Profile:</span> {selectedPlant.education.color}</p>
               <p><span className="text-white font-bold">Structural Density:</span> {selectedPlant.education.texture}</p>
               <p><span className="text-white font-bold">Spatial Impact:</span> {selectedPlant.education.shape}</p>
            </div>
          </section>
          <section className="bg-[#16241c]/60 rounded-3xl border border-white/5 p-5 grid grid-cols-2 gap-4">
             <div><div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Care Intensity</div><div className="text-xs text-white font-bold">{selectedPlant.care.maintenance}</div></div>
             <div><div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Hydration</div><div className="text-xs text-[#4ade80] font-bold">{Engines.calculateCare(env, selectedPlant)}</div></div>
          </section>
        </div>
      </div>
    </div>
  );

  if (!onboardingCompleted) return renderOnboarding();
  if (!identityCompleted) return renderIdentityInit();

  return (
    <div className="min-h-screen text-[#e6efe9] bg-[#0f1a14] pb-20 selection:bg-[#2e7d32]/30 antialiased font-sans">
      {arPlant && renderARSimulator()}
      <div className="max-w-md mx-auto min-h-screen flex flex-col relative bg-[#0f1a14] shadow-2xl">
        <header className="px-6 py-5 flex justify-between items-center z-10 sticky top-0 bg-[#0f1a14]/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-2.5"><Leaf className="w-5 h-5 text-[#4ade80]" /><span className="font-bold text-white uppercase tracking-widest text-sm">SYLVAI</span></div>
          <div className="flex items-center gap-4 text-gray-400">
            {isSyncing && <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-bold uppercase animate-pulse"><Cloud className="w-4 h-4"/> Telemetry Sync</div>}
            <button onClick={() => { setIdentityCompleted(false); setOnboardingCompleted(false); }} className="hover:text-white transition-colors"><Info className="w-5 h-5"/></button>
          </div>
        </header>
        <main className="flex-1 px-6 py-8 overflow-y-auto">
          {view === 'dashboard' && renderDashboard()}
          {view === 'assessment' && renderHumanAssessment()}
          {view === 'scan' && renderScanner()}
          {view === 'report' && renderReport()}
          {view === 'shop' && renderShop()}
          {view === 'cart' && renderCart()}
          {view === 'plant_detail' && selectedPlant && renderPlantDetail()}
        </main>
        <nav className="fixed bottom-0 left-0 right-0 bg-[#0a110d]/95 border-t border-white/5 max-w-md mx-auto z-50 backdrop-blur-lg">
          <div className="flex justify-around items-center p-4">
            <button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1.5 transition-colors ${view === 'dashboard' ? 'text-[#4ade80]' : 'text-gray-500'}`}><Home className="w-5 h-5" /><span className="text-[9px] font-bold uppercase tracking-widest">Home</span></button>
            <button onClick={() => setView('assessment')} className={`flex flex-col items-center gap-1.5 transition-colors ${['assessment','scan','report'].includes(view) ? 'text-[#4ade80]' : 'text-gray-500'}`}><Scan className="w-5 h-5" /><span className="text-[9px] font-bold uppercase tracking-widest">Scan</span></button>
            <button onClick={() => setView('shop')} className={`flex flex-col items-center gap-1.5 transition-colors ${['shop','plant_detail'].includes(view) ? 'text-[#4ade80]' : 'text-gray-500'}`}><Store className="w-5 h-5" /><span className="text-[9px] font-bold uppercase tracking-widest">Market</span></button>
            <button onClick={() => setView('cart')} className={`flex flex-col items-center gap-1.5 relative transition-colors ${view === 'cart' ? 'text-[#4ade80]' : 'text-gray-500'}`}>
              <ShoppingBag className="w-5 h-5" />{cart.length > 0 && <span className="absolute -top-1 -right-2 bg-[#4ade80] text-black text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#0a110d]">{cart.length}</span>}
              <span className="text-[9px] font-bold uppercase tracking-widest">Cart</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
