import React, { useState, useEffect, useRef } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot/Chatbot';
import './HomePage.css';

const trendingProducts = [
  {
    id: 1,
    name: 'HD-NVR-4328H8-4K',
    code: '32 CHANNEL 8 SATA NETWORK VIDEO RECORDER',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'HC-IPC-SDQ41620L',
    code: '4K Network Camera',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'HF-SGGFS04-65W',
    code: 'PTZ Security Camera',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'HD-XVR-5108QL',
    code: 'Hybrid Video Recorder',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'HF-EST108',
    code: '8 PORT ETHERNET SWITCH',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop',
  },
];

const weOffer = [
  {
    title: 'CCTV Installation',
    description: 'Professional CCTV installation services for homes and businesses. Our expert technicians ensure proper setup, configuration, and integration with your existing security infrastructure.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
  },
  {
    title: 'Vending Machine Solutions',
    description: 'Complete vending machine setup and maintenance services. We provide end-to-end solutions including installation, payment integration, and ongoing support for seamless operations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
  },
  {
    title: 'Security Systems',
    description: 'Comprehensive security solutions tailored to your needs. From access control to alarm systems, we design and implement complete security infrastructure for your property.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
  },
  {
    title: 'Maintenance & Support',
    description: '24/7 maintenance and technical support for all systems. Our dedicated support team ensures your security systems operate at peak performance with proactive monitoring and rapid response.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
  },
  {
    title: 'Consultation Services',
    description: 'Expert consultation to design the perfect security setup. Our security consultants analyze your requirements and provide customized solutions that fit your budget and security needs.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
  },
  {
    title: 'Remote Monitoring',
    description: 'Advanced remote monitoring and surveillance solutions. Access your security systems from anywhere with our cloud-based monitoring platform and mobile applications.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  }
];

// Product category hover items
const networkCamerasHoverItems = [
  {
    id: 'nc01',
    label: 'IP Dome Cameras',
    icon: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'nc02',
    label: 'IP Bullet Cameras',
    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'nc03',
    label: 'PTZ Cameras',
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'nc04',
    label: 'Fisheye Cameras',
    icon: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'nc05',
    label: 'Thermal Cameras',
    icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'nc06',
    label: 'Night Vision Cameras',
    icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format'
  }
];

const cellularCamerasHoverItems = [
  {
    id: 'cc01',
    label: '4G LTE Cameras',
    icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'cc02',
    label: '5G Cameras',
    icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'cc03',
    label: 'Wireless IP Cameras',
    icon: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'cc04',
    label: 'Solar Powered Cameras',
    icon: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&h=200&fit=crop&auto=format'
  }
];

const accessControlHoverItems = [
  {
    id: 'ac01',
    label: 'Biometric Access Control',
    icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ac02',
    label: 'Card Access Systems',
    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ac03',
    label: 'Keypad Systems',
    icon: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ac04',
    label: 'Turnstile Systems',
    icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ac05',
    label: 'Visitor Management',
    icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format'
  }
];

const alarmSystemsHoverItems = [
  {
    id: 'as01',
    label: 'Intrusion Alarm Systems',
    icon: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'as02',
    label: 'Fire Alarm Systems',
    icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'as03',
    label: 'Motion Detectors',
    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'as04',
    label: 'Glass Break Sensors',
    icon: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'as05',
    label: 'Wireless Alarm Systems',
    icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format'
  }
];

const storageSolutionsHoverItems = [
  {
    id: 'ss01',
    label: 'NVR Systems',
    icon: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ss02',
    label: 'DVR Systems',
    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ss03',
    label: 'Cloud Storage',
    icon: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ss04',
    label: 'NAS Systems',
    icon: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&auto=format'
  },
  {
    id: 'ss05',
    label: 'HDD Storage',
    icon: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format'
  }
];

const productsCatalog = [
  {
    category: 'Network Cameras',
    hoverItems: networkCamerasHoverItems
  },
  {
    category: '4G/5G Cameras',
    hoverItems: cellularCamerasHoverItems
  },
  {
    category: 'Access Control',
    hoverItems: accessControlHoverItems
  },
  {
    category: 'Alarm Systems',
    hoverItems: alarmSystemsHoverItems
  },
  {
    category: 'Storage Solutions',
    hoverItems: storageSolutionsHoverItems
  }
];

const solutions = [
  {
    title: 'Surveillance for Classroom',
    description: 'Comprehensive surveillance systems for schools and colleges provide complete campus security. With features like motion detection, remote access, two-way communications and 24/7 monitoring, we help safeguard students, staff, and valuable assets, creating a safer learning environment.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
  },
  {
    title: 'Surveillance for Corporate',
    description: 'Safeguard your workplace with our corporate surveillance solutions. Our enterprise-grade CCTV cameras ensure seamless monitoring of high-traffic areas, employee safety, and intellectual property protection, helping your business run smoothly and securely',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  },
  {
    title: 'Surveillance for Parking Area',
    description: 'Ensure parking lot security with our surveillance systems. Our smart solutions offer real-time footage to prevent unauthorized access, track vehicle movements, reduce theft, and enhance safety. Streamline operations and protect your facilities with advanced, reliable technology.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
  },
  {
    title: 'Surveillance for Home Security',
    description: 'Our home security systems offer robust protection with wireless cameras, motion detectors, and smart home integration. Stay connected and secure from anywhere, ensuring peace of mind for your family. Our solutions combine advanced technology, affordability, and user-friendly interfaces.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
  },
  {
    title: 'Surveillance for Retail',
    description: 'Protect your retail business with our comprehensive surveillance solutions. Monitor store activities, prevent theft, and ensure customer safety with our advanced CCTV systems. Real-time monitoring and analytics help optimize operations and enhance security.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
  },
];

const customers = [
  {
    quote: 'My experience with Retina is too good. All type of security and surveillance services are good in quality with best price. The company was well organized and staff also good and friendly.',
    name: 'Shri Balaji',
    rating: 5,
  },
  {
    quote: 'Retina company all product solution provider security services and all services good quality and service support excellent.',
    name: 'Giriraj AAI INTERNET',
    rating: 5,
  },
  {
    quote: 'Very good company. The quality of products at lowest price is excellent. I highly recommend Retina to all.',
    name: 'Nandkishor Saini',
    rating: 5,
  },
  {
    quote: 'Reliable and Durable products. The longevity and performance of Retina\'s products is really so good. Affordable and easy installation of services.',
    name: 'Zoya Fathima',
    rating: 5,
  },
  {
    quote: 'I have been purchasing products from Retina since 2013 and from the last 3 years I\'ve been working with Retina technology.',
    name: 'Rakesh Agarwal',
    rating: 5,
  },
];

const supportHighlights = [
  {
    title: '24x7 Support Desk',
    description: 'Dedicated support engineers monitoring your security systems round the clock.',
  },
  {
    title: 'Proactive Maintenance',
    description: 'Regular system checks, updates, and automated monitoring keep your security reliable.',
  },
  {
    title: 'Expert Installation',
    description: 'Certified technicians embedded with your team to ensure proper setup and configuration.',
  },
];

const faqs = [
  {
    question: 'How do you engage with new security installations?',
    answer:
      'We begin with a consultation focused on understanding your security needs, desired outcomes, and current infrastructure. From there, we create a customized roadmap that blends consultation, installation, and ongoing support tailored to your requirements.',
  },
  {
    question: 'Do you offer custom security solutions?',
    answer:
      'Yes. Our security architects design solutions aligned to your specific needs and budget. We deliver installations onsite, supported by training, documentation, and ongoing support.',
  },
  {
    question: 'Can you work with our existing security systems?',
    answer:
      'Absolutely. We integrate with popular security platforms and systems. When upgrading, we respect current investments while introducing modern solutions that enhance your security posture.',
  },
];

const pressHighlights = [
  {
    title: 'Retina Unveils the Largest Range of Government-Approved & Cyber-Secured Smart Home Wi-Fi Cameras',
    date: '09/02/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    title: 'Retina Sets the Stage for Security Future: From Commercial to Residential Resilience',
    date: '09/02/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    title: 'Retina Honored for Excellence in Strategic Security Manufacturing at Industry Awards 2025',
    date: '09/02/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
  },
  {
    title: 'Retina Takes Strong Legal Action Against Counterfeit Security Equipment Operations',
    date: '09/11/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
  },
  {
    title: 'Retina Unveils its latest Security Store in Major City, Inaugurated by Industry Leaders',
    date: '09/02/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  },
  {
    title: 'Retina Sets the Stage for Security Future: From Commercial to Residential Resilience',
    date: '09/02/2025',
    time: '00:00:00',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
];

const contactChannels = [
  {
    title: 'Raise a Project Enquiry',
    description: 'Share your security requirements and we will assemble the right experts within 24 hours.',
    action: 'Project Consultation',
  },
  {
    title: 'Schedule Security Audit',
    description: 'Get a holistic review of your current security setup, vulnerabilities, and improvement opportunities.',
    action: 'Book an Assessment',
  },
  {
    title: 'Talk to Sales',
    description: 'Explore custom security solutions, product catalogs, and pricing options.',
    action: 'Connect with Sales',
  },
];

export default function HomePage() {
  const [selectedProductCategoryIndex, setSelectedProductCategoryIndex] = useState(0);
  const [clickedProductCategory, setClickedProductCategory] = useState('network-cameras');
  const productsDropdownRef = useRef(null);
  
  const [weOfferIndex, setWeOfferIndex] = useState(0);
  const [isWeOfferDragging, setIsWeOfferDragging] = useState(false);
  const [weOfferStartX, setWeOfferStartX] = useState(0);
  const [weOfferCurrentX, setWeOfferCurrentX] = useState(0);
  const weOfferCarouselRef = useRef(null);
  
  const [solutionsIndex, setSolutionsIndex] = useState(0);
  const [customersIndex, setCustomersIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const customersCarouselRef = useRef(null);
  
  const [isSolutionsDragging, setIsSolutionsDragging] = useState(false);
  const [solutionsStartX, setSolutionsStartX] = useState(0);
  const [solutionsCurrentX, setSolutionsCurrentX] = useState(0);
  const solutionsCarouselRef = useRef(null);
  
  const [pressIndex, setPressIndex] = useState(0);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const trendingIntervalRef = useRef(null);
  
  // Auto-scroll trending products
  useEffect(() => {
    trendingIntervalRef.current = setInterval(() => {
      setTrendingIndex((prev) => (prev + 1) % trendingProducts.length);
    }, 3000); // Change product every 3 seconds

    return () => {
      if (trendingIntervalRef.current) {
        clearInterval(trendingIntervalRef.current);
      }
    };
  }, [trendingProducts.length]);
  
  const handleDragEnd = () => {
    if (!isDragging || !customersCarouselRef.current) return;
    const dragDistance = currentX - startX;
    const cardWidth = customersCarouselRef.current.offsetWidth / 3;
    const threshold = cardWidth * 0.3;
    
    let newIndex = customersIndex;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        newIndex = Math.max(0, customersIndex - 1);
      } else {
        const maxIndex = Math.max(0, customers.length - 3);
        newIndex = Math.min(maxIndex, customersIndex + 1);
      }
    }
    
    setCustomersIndex(newIndex);
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };
  
  const handleWeOfferDragEnd = () => {
    if (!isWeOfferDragging || !weOfferCarouselRef.current) return;
    const dragDistance = weOfferCurrentX - weOfferStartX;
    const cardWidth = weOfferCarouselRef.current.offsetWidth / 4;
    const threshold = cardWidth * 0.3;
    
    let newIndex = weOfferIndex;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        newIndex = Math.max(0, weOfferIndex - 1);
      } else {
        const maxIndex = Math.max(0, weOffer.length - 4);
        newIndex = Math.min(maxIndex, weOfferIndex + 1);
      }
    }
    
    setWeOfferIndex(newIndex);
    setIsWeOfferDragging(false);
    setWeOfferStartX(0);
    setWeOfferCurrentX(0);
  };
  
  const handleSolutionsDragEnd = () => {
    if (!isSolutionsDragging || !solutionsCarouselRef.current) return;
    const dragDistance = solutionsCurrentX - solutionsStartX;
    const cardWidth = solutionsCarouselRef.current.offsetWidth / 4;
    const threshold = cardWidth * 0.3;
    
    let newIndex = solutionsIndex;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        newIndex = Math.max(0, solutionsIndex - 1);
      } else {
        const maxIndex = Math.max(0, solutions.length - 4);
        newIndex = Math.min(maxIndex, solutionsIndex + 1);
      }
    }
    
    setSolutionsIndex(newIndex);
    setIsSolutionsDragging(false);
    setSolutionsStartX(0);
    setSolutionsCurrentX(0);
  };

  return (
    <div className="homepage">
      <TopNavigation />
      <MainNavigation />
      
      <main>
        <section className="homepage-hero" id="home">
          {/* <div className="homepage-hero__overlay" /> */}
          <div className="homepage-hero__content">
            <span className="badge">Professional Security Solutions</span>
            <h1>Advanced CCTV & Security Solutions for Complete Protection</h1>
            <p>
              Retina delivers end-to-end security services, professional installations, and platform enablement tailored to
              your security needs. Accelerate innovation while staying reliable, secure, and cost-efficient.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#products">
                Explore Products
              </a>
              <a className="btn btn-secondary" href="#solutions">
                View Solutions
              </a>
          </div>
        </div>
      </section>

        <section className="we-offer" id="we-offer">
          <div className="section-header">
            <h2>We Offer</h2>
          </div>
          <div className="we-offer__carousel">
            <button 
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => {
                const maxIndex = Math.max(0, weOffer.length - 4);
                setWeOfferIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
              }}
              aria-label="Previous offer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              className="we-offer__slides-container"
              ref={weOfferCarouselRef}
              onMouseDown={(e) => {
                setIsWeOfferDragging(true);
                setWeOfferStartX(e.pageX);
                setWeOfferCurrentX(e.pageX);
              }}
              onMouseLeave={() => {
                if (isWeOfferDragging) {
                  handleWeOfferDragEnd();
                }
              }}
              onMouseUp={() => {
                if (isWeOfferDragging) {
                  handleWeOfferDragEnd();
                }
              }}
              onMouseMove={(e) => {
                if (!isWeOfferDragging) return;
                e.preventDefault();
                setWeOfferCurrentX(e.pageX);
              }}
            >
              <div 
                className="we-offer__slides-wrapper"
                style={{ 
                  transform: `translateX(calc(-${weOfferIndex} * (100% / 4) + ${isWeOfferDragging ? (weOfferCurrentX - weOfferStartX) : 0}px))`,
                  cursor: isWeOfferDragging ? 'grabbing' : 'grab',
                  transition: isWeOfferDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {weOffer.map((offer, index) => (
                  <article className="we-offer-card" key={offer.title}>
                    <div className="we-offer-card__image">
                      <img src={offer.image} alt={offer.title} />
                    </div>
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <button 
              className="carousel__arrow carousel__arrow--next"
              onClick={() => {
                const maxIndex = Math.max(0, weOffer.length - 4);
                setWeOfferIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
              }}
              aria-label="Next offer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>

        <section className="trending-section" id="trending">
          <div className="trending-section__container">
            <div className="trending-section__content">
              <h2 className="trending-section__title">Highlight of our products</h2>
              <p className="trending-section__description">
                CMOS progressive scan, perfectly capturing the moving object Support OSD menu. High-speed, long distance, and real-time transmission
              </p>
            </div>
            <div className="trending-section__carousel-wrapper">
              <div className="trending-section__carousel">
                {trendingProducts.map((product, index) => {
                  const position = (index - trendingIndex + trendingProducts.length) % trendingProducts.length;
                  const isFirst = position === 0;
                  const isSecond = position === 1;
                  const isThird = position === 2;
                  const isFourth = position === 3;
                  
                  // Calculate offset: first product at 0, others offset by their position with gaps
                  const gap = 20; // Gap between products
                  let offsetX = 0;
                  if (isFirst) {
                    offsetX = 0;
                  } else if (isSecond) {
                    offsetX = 320 + gap; // Width of first product + gap
                  } else if (isThird) {
                    offsetX = 320 + gap + 280 + gap; // First + gap + second + gap
                  } else if (isFourth) {
                    offsetX = 320 + gap + 280 + gap + 280 + gap; // First + gap + second + gap + third + gap
                  } else {
                    offsetX = 320 + gap + 280 + gap + 280 + gap + 280 + gap; // Off-screen right
                  }
                  
                  return (
                    <div
                      key={product.id}
                      className={`trending-product ${isFirst ? 'trending-product--active' : ''} ${isSecond ? 'trending-product--second' : ''} ${isThird ? 'trending-product--third' : ''}`}
                      style={{
                        transform: `translateX(${offsetX}px)`,
                        zIndex: trendingProducts.length - position,
                      }}
                    >
                      <div className="trending-product__image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="trending-product__info">
                        <div className="trending-product__code">{product.code}</div>
                        <div className="trending-product__name">{product.name}</div>
                      </div>
            </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

        <section className="products-section cloud-devops" id="products">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Comprehensive range of security products for every need</p>
                </div>
          <div className="cloud-devops__container">
            <aside className="cloud-devops__sidebar">
              <ul className="cloud-devops__category-list">
                {productsCatalog.map((category, index) => {
                  const categoryKeys = ['network-cameras', 'cellular-cameras', 'access-control', 'alarm-systems', 'storage-solutions'];
                  const categoryKey = categoryKeys[index];
                  return (
                    <li 
                      key={category.category}
                      className="cloud-devops__category-item"
                      ref={index === 0 ? productsDropdownRef : null}
                    >
                      <button
                        className={`cloud-devops__category-btn ${clickedProductCategory === categoryKey ? 'active' : ''}`}
                        onClick={() => {
                          const newCategory = clickedProductCategory === categoryKey ? null : categoryKey;
                          setClickedProductCategory(newCategory || 'network-cameras');
                          setSelectedProductCategoryIndex(newCategory ? index : 0);
                        }}
                      >
                        {category.category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>
            <div className="cloud-devops__content">
              {clickedProductCategory && productsCatalog[selectedProductCategoryIndex] && (
                <div className="cloud-devops__hover-dropdown cloud-devops__hover-dropdown--support">
                  <div className="cloud-devops__hover-grid">
                    {productsCatalog[selectedProductCategoryIndex].hoverItems.map((item) => (
                      <div key={item.id} className="cloud-devops__hover-item">
                        <div className="cloud-devops__hover-icon">
                          <img src={item.icon} alt={item.label} onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = 'flex';
                            }
                          }} />
                          <div className="cloud-devops__hover-icon-placeholder" style={{ display: 'none' }}>
                            {item.label.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                </div>
                        </div>
                        <span className="cloud-devops__hover-label">{item.label}</span>
              </div>
            ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>

        <section className="solutions" id="solutions">
          <div className="section-header">
            <h2>Solution Options</h2>
                </div>
          <div className="solutions__carousel">
            <button 
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => {
                const maxIndex = Math.max(0, solutions.length - 4);
                setSolutionsIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
              }}
              aria-label="Previous solution"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              className="solutions__slides-container"
              ref={solutionsCarouselRef}
              onMouseDown={(e) => {
                setIsSolutionsDragging(true);
                setSolutionsStartX(e.pageX);
                setSolutionsCurrentX(e.pageX);
              }}
              onMouseLeave={() => {
                if (isSolutionsDragging) {
                  handleSolutionsDragEnd();
                }
              }}
              onMouseUp={() => {
                if (isSolutionsDragging) {
                  handleSolutionsDragEnd();
                }
              }}
              onMouseMove={(e) => {
                if (!isSolutionsDragging) return;
                e.preventDefault();
                setSolutionsCurrentX(e.pageX);
              }}
            >
              <div 
                className="solutions__slides-wrapper"
                style={{ 
                  transform: `translateX(calc(-${solutionsIndex} * (100% / 4) + ${isSolutionsDragging ? (solutionsCurrentX - solutionsStartX) : 0}px))`,
                  cursor: isSolutionsDragging ? 'grabbing' : 'grab',
                  transition: isSolutionsDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {solutions.map((solution, index) => (
                  <article className="solution-card" key={solution.title}>
                    <div className="solution-card__image">
                      <img src={solution.image} alt={solution.title} />
                </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </article>
                ))}
              </div>
          </div>
            <button 
              className="carousel__arrow carousel__arrow--next"
              onClick={() => {
                const maxIndex = Math.max(0, solutions.length - 4);
                setSolutionsIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
              }}
              aria-label="Next solution"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
        </div>
      </section>

        <section className="support-center" id="support">
          <div className="section-header">
            <h2>Support that Scales with You</h2>
            <p>
              Embedded support teams, real-time monitoring, and proactive maintenance inspired by global Retina
              engagements.
            </p>
          </div>
          <div className="support-center__grid">
            {supportHighlights.map((item) => (
              <article className="support-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
        </div>
      </section>

        <section className="happy-customers">
          <div className="section-header">
            <h2>Happy Customers</h2>
          </div>
          <div className="happy-customers__carousel">
            <button 
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => setCustomersIndex((prev) => (prev === 0 ? Math.max(0, customers.length - 3) : prev - 1))}
              aria-label="Previous customer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div 
              className="happy-customers__slides-container"
              ref={customersCarouselRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                setStartX(e.pageX);
                setCurrentX(e.pageX);
              }}
              onMouseLeave={() => {
                if (isDragging) {
                  handleDragEnd();
                }
              }}
              onMouseUp={() => {
                if (isDragging) {
                  handleDragEnd();
                }
              }}
              onMouseMove={(e) => {
                if (!isDragging) return;
                e.preventDefault();
                setCurrentX(e.pageX);
              }}
            >
              <div 
                className="happy-customers__slides-wrapper"
                style={{ 
                  transform: `translateX(calc(-${customersIndex} * (100% / 3) + ${isDragging ? (currentX - startX) : 0}px))`,
                  cursor: isDragging ? 'grabbing' : 'grab',
                  transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {customers.map((customer, index) => (
                  <div className="happy-customers__card" key={index}>
                    <div className="happy-customers__quote-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="#6b7280"/>
                      </svg>
                    </div>
                    <p className="happy-customers__quote">{customer.quote}</p>
                    <div className="happy-customers__stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill={i < customer.rating ? "#FF8C00" : "#E5E7EB"}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="happy-customers__name">{customer.name}</p>
              </div>
            ))}
          </div>
        </div>
            <button 
              className="carousel__arrow carousel__arrow--next"
              onClick={() => setCustomersIndex((prev) => (prev >= customers.length - 3 ? 0 : prev + 1))}
              aria-label="Next customer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
        </div>
      </section>

        <section className="contact-us" id="contact-us">
          <div className="contact-us__inner">
            <div className="contact-us__content">
              <h2>Contact Retina Experts</h2>
              <p>
                Connect with our security consultants or sales team. We are available across global timezones with
                rapid turnaround.
              </p>
              <div className="contact-details">
                <div className="contact-details__card">
                  <strong>Global HQ</strong>
                  <span>Retina Tower, 45 Security Ave, San Jose, CA 95110</span>
                </div>
                <div className="contact-details__card">
                  <strong>Phone</strong>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
                <div className="contact-details__card">
                  <strong>Email</strong>
                  <a href="mailto:hello@retina.com">hello@retina.com</a>
                </div>
                <div className="contact-details__card">
                  <strong>Support Hours</strong>
                  <span>Mon - Sat: 9:00 AM – 8:00 PM (IST)</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <label htmlFor="contact-name">Full Name</label>
              <input id="contact-name" type="text" placeholder="Enter your name" required />

              <label htmlFor="contact-email">Work Email</label>
              <input id="contact-email" type="email" placeholder="Enter your work email" required />

              <label htmlFor="contact-topic">I am interested in</label>
              <select id="contact-topic" required>
                <option value="">Select an option</option>
                <option value="security-services">Security Services</option>
                <option value="product-catalog">Product Catalog</option>
                <option value="partnerships">Partnership Opportunities</option>
              </select>

              <label htmlFor="contact-message">How can we help?</label>
              <textarea id="contact-message" rows="4" placeholder="Share your goals or challenges" />

              <button type="submit">Submit Enquiry</button>
            </form>
          </div>

          <div className="contact-channels">
            {contactChannels.map((channel) => (
              <article className="contact-channel" key={channel.title}>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <a href="#contact-us">{channel.action} →</a>
              </article>
            ))}
        </div>
      </section>

        <section className="press">
          <div className="press__header">
            <div className="press__header-left">
              <h2>Print & Press</h2>
              <p className="press__header-description">Latest Retina news to keep you updated about the security and surveillance industry.</p>
                </div>
            <div className="press__header-right">
              <div className="press__navigation">
                <button 
                  className="press__nav-button press__nav-button--prev"
                  onClick={() => {
                    const maxIndex = Math.max(0, Math.ceil(pressHighlights.length / 3) - 1);
                    setPressIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
                  }}
                  aria-label="Previous press"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="press__nav-button press__nav-button--next"
                  onClick={() => {
                    const maxIndex = Math.max(0, Math.ceil(pressHighlights.length / 3) - 1);
                    setPressIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
                  }}
                  aria-label="Next press"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="press__carousel">
            <div className="press__slides-container">
              <div 
                className="press__slides-wrapper"
                style={{ transform: `translateX(-${pressIndex * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(pressHighlights.length / 3) }).map((_, groupIndex) => (
                  <div key={groupIndex} className="press__slide-group" style={{ minWidth: '100%', display: 'flex', gap: '20px' }}>
                    {pressHighlights.slice(groupIndex * 3, groupIndex * 3 + 3).map((press, index) => (
                      <article className="press-card" key={`${groupIndex}-${index}`}>
                        <div className="press-card__pic">
                          <img 
                            src={press.image} 
                            alt={press.title}
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <div className="press-card__dscb">
                            <div className="press-card__date-box">
                              <div className="press-card__date">{press.date}</div>
                              <div className="press-card__time">{press.time}</div>
                            </div>
                            <div className="press-card__title-box">
                              <div className="press-card__title">{press.title}</div>
                            </div>
                            <div className="press-card__social-icons">
                              <a href="#" className="press-card__social-icon press-card__social-icon--facebook" aria-label="Facebook">
                                <svg style={{ color: 'white' }} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="currentColor"/>
                                </svg>
                              </a>
                              <a href="#" className="press-card__social-icon press-card__social-icon--twitter" aria-label="Twitter">
                                <svg style={{ color: 'white' }} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" fill="currentColor"/>
                                </svg>
                              </a>
                              <a href="#" className="press-card__social-icon press-card__social-icon--linkedin" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"/>
                                  <path d="M8 7C8.82843 7 9.5 7.67157 9.5 8.5C9.5 9.32843 8.82843 10 8 10C7.17157 10 6.5 9.32843 6.5 8.5C6.5 7.67157 7.17157 7 8 7Z" fill="white"/>
                                  <path d="M6.5 17V11H9.5V17H6.5Z" fill="white"/>
                                  <path d="M11 17V13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5V17H17V13C17 11.3431 15.6569 10 14 10C13.0444 10 12.1931 10.4468 11.6438 11.1429H11.5V11H9.5V17H11Z" fill="white"/>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

        <section className="stay-updated" id="stay-updated">
          <div className="stay-updated__col stay-updated__col--1">
            <h2>Stay Updated!</h2>
            <p>Sign up for our newsletter, and get the latest from Retina inboxed</p>
          </div>
          <div className="stay-updated__col stay-updated__col--2">
            <form className="stay-updated__form">
              <input type="email" placeholder="Enter Email Address" required />
              <button type="submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
          <div className="stay-updated__col stay-updated__col--3">
            <h2>Follow Us</h2>
            <p>We want to hear from you!</p>
          </div>
          <div className="stay-updated__col stay-updated__col--4">
            <div className="stay-updated__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28446C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61232 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"/>
                  <path d="M8 7C8.82843 7 9.5 7.67157 9.5 8.5C9.5 9.32843 8.82843 10 8 10C7.17157 10 6.5 9.32843 6.5 8.5C6.5 7.67157 7.17157 7 8 7Z" fill="white"/>
                  <path d="M6.5 17V11H9.5V17H6.5Z" fill="white"/>
                  <path d="M11 17V13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5V17H17V13C17 11.3431 15.6569 10 14 10C13.0444 10 12.1931 10.4468 11.6438 11.1429H11.5V11H9.5V17H11Z" fill="white"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.105 2.291 18.907 2.469 19.637 2.767C20.5 3.125 21.188 3.613 21.817 4.242C22.386 4.812 22.875 5.5 23.233 6.363C23.531 7.093 23.709 7.895 23.767 9.15C23.825 10.416 23.837 10.796 23.837 14C23.837 17.204 23.825 17.584 23.767 18.85C23.709 20.105 23.531 20.907 23.233 21.637C22.875 22.5 22.386 23.188 21.817 23.817C21.188 24.386 20.5 24.875 19.637 25.233C18.907 25.531 18.105 25.709 16.85 25.767C15.584 25.825 15.204 25.837 12 25.837C8.796 25.837 8.416 25.825 7.15 25.767C5.895 25.709 5.093 25.531 4.363 25.233C3.5 24.875 2.812 24.386 2.183 23.817C1.614 23.188 1.125 22.5 0.767 21.637C0.469 20.907 0.291 20.105 0.233 18.85C0.175 17.584 0.163 17.204 0.163 14C0.163 10.796 0.175 10.416 0.233 9.15C0.291 7.895 0.469 7.093 0.767 6.363C1.125 5.5 1.614 4.812 2.183 4.242C2.812 3.613 3.5 3.125 4.363 2.767C5.093 2.469 5.895 2.291 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.132 4.902 0.333 4.14 0.63C3.335 0.935 2.638 1.34 2.054 1.925C1.47 2.51 1.065 3.207 0.76 4.012C0.463 4.774 0.262 5.647 0.202 6.925C0.144 8.205 0.13 8.613 0.13 11.872C0.13 15.131 0.144 15.539 0.202 16.819C0.262 18.097 0.463 18.97 0.76 19.732C1.065 20.537 1.47 21.234 2.054 21.818C2.638 22.403 3.335 22.808 4.14 23.113C4.902 23.41 5.775 23.611 7.053 23.671C8.333 23.729 8.741 23.743 12 23.743C15.259 23.743 15.667 23.729 16.947 23.671C18.225 23.611 19.098 23.41 19.86 23.113C20.665 22.808 21.362 22.403 21.946 21.818C22.53 21.234 22.935 20.537 23.24 19.732C23.537 18.97 23.738 18.097 23.798 16.819C23.856 15.539 23.87 15.131 23.87 11.872C23.87 8.613 23.856 8.205 23.798 6.925C23.738 5.647 23.537 4.774 23.24 4.012C22.935 3.207 22.53 2.51 21.946 1.925C21.362 1.34 20.665 0.935 19.86 0.63C19.098 0.333 18.225 0.132 16.947 0.072C15.667 0.014 15.259 0 12 0Z" fill="currentColor"/>
                  <path d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="currentColor"/>
                  <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186C23.251 5.28 22.546 4.576 21.64 4.329C19.844 3.833 12 3.833 12 3.833C12 3.833 4.156 3.833 2.36 4.329C1.454 4.576 0.749 5.28 0.502 6.186C0.006 7.982 0.006 12 0.006 12C0.006 12 0.006 16.018 0.502 17.814C0.749 18.72 1.454 19.424 2.36 19.671C4.156 20.167 12 20.167 12 20.167C12 20.167 19.844 20.167 21.64 19.671C22.546 19.424 23.251 18.72 23.498 17.814C23.994 16.018 23.994 12 23.994 12C23.994 12 23.994 7.982 23.498 6.186Z" fill="currentColor"/>
                  <path d="M9.545 15.568L15.818 12L9.545 8.432V15.568Z" fill="white"/>
                </svg>
              </a>
          </div>
        </div>
      </section>
      </main>

      <Chatbot />
      <Footer />
    </div>
  );
}
