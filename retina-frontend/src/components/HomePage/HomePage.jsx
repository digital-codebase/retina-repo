import React, { useState, useEffect, useRef } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import Chatbot from '../Chatbot/Chatbot';
import './HomePage.css';

const trendingProducts = [
  {
    id: 1,
    name: 'Dome CCTV Camera',
    code: '3MP 3K Pro HD Wi-Fi Smart Home Security Dome Camera',
    image: '/assets/img/trending/dome.avif',
  },
  {
    id: 2,
    name: 'IP CCTV Camera',
    code: '5MP IP CCTV 4 Camera',
    image: '/assets/img/trending/ip.avif',
  },
  
 
  {
    id: 3,
    name: 'WIFI CCTV Camera',
    code: 'Wi-Fi Security Camera 1080p',
    image: '/assets/img/trending/wifi.avif',
  },

  {
    id: 4,
    name: 'Solar CCTV Camera',
    code: '3+3Mp Wireless 4G Cellular Solar Powered Security Camera',
    image: '/assets/img/trending/solar.avif',
  },

  {
    id: 5,
    name: 'Bike Camera',
    code: 'Smart Bike Cam Pro | 2K Resolution 3MP 1296p',
    image: '/assets/img/trending/bike2.avif',
  },

 {
    id: 6,
    name: 'Car Dash Camera',
    code: 'Car Dash Camera Pro 2K Resolution QHD Dash Cam',
    image: '/assets/img/trending/car2.avif',
  },
];

const weOffer = [
  {
    title: 'CCTV Installation Service',
    description: 'Professional CCTV installation services for homes and businesses. Our expert technicians ensure proper setup, configuration, and integration with your existing security infrastructure.',
    image: '/assets/img/offer/install.avif',
  },
  {
    title: 'CCTV Videos Maintenance & Backup Service',
    description: 'Complete vending machine setup and maintenance services. We provide end-to-end solutions including installation, payment integration, and ongoing support for seamless operations.',
    image: '/assets/img/offer/backup.avif',
  },
  {
    title: 'CCTV Consultation Service',
    description: 'Comprehensive security solutions tailored to your needs. From access control to alarm systems, we design and implement complete security infrastructure for your property.',
    image: '/assets/img/offer/consult.avif',
  },
  {
    title: 'Remote Monitoring Service',
    description: '24/7 maintenance and technical support for all systems. Our dedicated support team ensures your security systems operate at peak performance with proactive monitoring and rapid response.',
    image: '/assets/img/offer/remote.avif',
  },
  {
    title: 'Digital Lock Services',
    description: 'Expert consultation to design the perfect security setup. Our security consultants analyze your requirements and provide customized solutions that fit your budget and security needs.',
    image: '/assets/img/offer/door.avif',
  },
];




// Product category hover items
const networkCamerasHoverItems = [
  {
    id: 'nc01',
    label: '2 MegaPixel Network Camera',
    icon: '/assets/img/nc/c01.avif',
  },
  {
    id: 'nc02',
    label: '4 MegaPixel Network Camera',
    icon: '/assets/img/nc/c01.avif',
  },
  {
    id: 'nc03',
    label: '6 MegaPixel Network Camera',
    icon: '/assets/img/nc/c01.avif',
  },
  {
    id: 'nc04',
    label: '8 MegaPixel Network Camera',
    icon: '/assets/img/nc/c01.avif',
  },
];

const cellularCamerasHoverItems = [
  {
    id: 'cc01',
    label: '2 MegaPixel Analog Camera',
    icon: '/assets/img/analog/c01.avif',
  },
  {
    id: 'cc02',
    label: '4 MegaPixel Analog Camera',
    icon: '/assets/img/analog/c01.avif',
  },
  {
    id: 'cc03',
    label: '6 MegaPixel Analog Camera',
    icon: '/assets/img/analog/c01.avif',
  },

  {
    id: 'cc04',
    label: '8 MegaPixel Analog Camera',
    icon: '/assets/img/analog/c01.avif',
  },

];





const accessControlHoverItems = [
  {
    id: 'ac01',
    label: 'Secureye S‑BW15 Body Worn Camera',
    icon: '/assets/img/floating/bodyworn.avif',
  },


  {
    id: 'ac02',
    label: 'Ggcam Professional Premium Action Helmet Camera 4K',
    icon: '/assets/img/floating/helmet.avif',
  },


  {
    id: 'ac03',
    label: 'Qubo Smart Bike Cam Pro',
    icon: '/assets/img/floating/bike01.avif',
  },

  {
    id: 'ac04',
    label: 'Qubo Car Dash Cam Pro 2.7K',
    icon: '/assets/img/floating/car01.avif',
  },


];




const alarmSystemsHoverItems = [
  {
    id: 'as01',
    label: 'Smart Door Lock',
    icon: '/assets/img/doors/door01.avif',
  },
  
  {
    id: 'as02',
    label: 'Smart Door Lock with AI Face Recognition',
    icon: '/assets/img/doors/door02.avif',
  },
  {
    id: 'as03',
    label: 'Smart Door Lock Essential',
    icon: '/assets/img/doors/door03.avif',
  },
  {
    id: 'as04',
    label: 'Touchless Biometric Attendance Device Fingerprint/FaceRecognition',
    icon: '/assets/img/doors/door04.avif',
  },


];







const productsCatalog = [
  {
    category: 'Network Cameras',
    hoverItems: networkCamerasHoverItems
  },
  {
    category: 'Analog Cameras',
    hoverItems: cellularCamerasHoverItems
  },
  {
    category: 'Floating Cameras',
    hoverItems: accessControlHoverItems
  },
  {
    category: 'Digital DoorLocks',
    hoverItems: alarmSystemsHoverItems
  },
];



const solutions = [
  {
    title: 'Surveillance for Classroom',
    description: 'Comprehensive surveillance systems for schools and colleges provide complete campus security. With features like motion detection, remote access, two-way communications and 24/7 monitoring, we help safeguard students, staff, and valuable assets, creating a safer learning environment.',
    image: '/assets/img/solutions/classroom.avif',
  },
  {
    title: 'Surveillance for Hospitals',
    description: 'Safeguard your workplace with our corporate surveillance solutions. Our enterprise-grade CCTV cameras ensure seamless monitoring of high-traffic areas, employee safety, and intellectual property protection, helping your business run smoothly and securely',
    image: '/assets/img/solutions/hospitals.avif',
  },
  {
    title: 'Surveillance for Parking Area',
    description: 'Ensure parking lot security with our surveillance systems. Our smart solutions offer real-time footage to prevent unauthorized access, track vehicle movements, reduce theft, and enhance safety. Streamline operations and protect your facilities with advanced, reliable technology.',
    image: '/assets/img/solutions/parking.avif',
  },
  {
    title: 'Surveillance for Home Security',
    description: 'Our home security systems offer robust protection with wireless cameras, motion detectors, and smart home integration. Stay connected and secure from anywhere, ensuring peace of mind for your family. Our solutions combine advanced technology, affordability, and user-friendly interfaces.',
    image: '/assets/img/solutions/home.avif',
  },
  {
    title: 'Surveillance for Offices',
    description: 'Protect your retail business with our comprehensive surveillance solutions. Monitor store activities, prevent theft, and ensure customer safety with our advanced CCTV systems. Real-time monitoring and analytics help optimize operations and enhance security.',
    image: '/assets/img/solutions/office.avif',
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
  {
    question: 'What types of CCTV cameras do you offer?',
    answer:
      'We offer a comprehensive range of CCTV cameras including dome cameras, bullet cameras, wireless Wi-Fi cameras, solar cameras, PTZ cameras, video doorbells, and hidden cameras. All cameras come with various resolution options from 1MP to 8MP.',
  },
  {
    question: 'Do you provide installation services?',
    answer:
      'Yes, we provide professional CCTV installation services for both residential and commercial properties. Our certified technicians ensure proper setup, configuration, and integration with your existing security infrastructure.',
  },
  {
    question: 'What is the warranty period for your products?',
    answer:
      'Our products come with warranty options ranging from 1 year to 3 years depending on the product. All warranty details are clearly mentioned with each product listing.',
  },
  {
    question: 'Do your cameras support night vision?',
    answer:
      'Yes, most of our cameras support night vision capabilities including IR Night Vision, Full-Color Night Vision, and Starlight Vision technologies. You can filter products by these features on our products page.',
  },
  {
    question: 'Can I access my cameras remotely?',
    answer:
      'Yes, our IP cameras and Wi-Fi cameras support remote access through mobile apps and web interfaces. Many models also support cloud storage for easy access to recorded footage from anywhere.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit cards, debit cards, net banking, UPI, and cash on delivery for select locations. All transactions are secure and encrypted.',
  },
  {
    question: 'Do you offer maintenance services?',
    answer:
      'Yes, we provide comprehensive maintenance and backup services including regular system checks, updates, automated monitoring, and 24/7 technical support to ensure your security systems operate at peak performance.',
  },
];

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹2,999',
    period: 'per month',
    description: 'Perfect for small homes and offices',
    features: [
      'Up to 4 cameras',
      '7 days cloud storage',
      'Mobile app access',
      'Email alerts',
      'Basic support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹5,999',
    period: 'per month',
    description: 'Ideal for medium-sized businesses',
    features: [
      'Up to 16 cameras',
      '30 days cloud storage',
      'Mobile & web access',
      'Email & SMS alerts',
      'AI motion detection',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '₹12,999',
    period: 'per month',
    description: 'For large enterprises and institutions',
    features: [
      'Unlimited cameras',
      '90 days cloud storage',
      'Multi-user access',
      'Advanced analytics',
      'Custom integrations',
      '24/7 dedicated support',
      'On-site maintenance',
    ],
    popular: false,
  },
];




const pressHighlights = [
  {
    title: 'Safeguarding Your Surveillance: 10 Essential Tips to Prevent CCTV Camera Hacking',
    description: 'Ensuring Peace of Mind with Cutting-Edge CCTV Security Solutions',
    date: '09/02/2025',
    time: '00:00:00',
    image: '/assets/img/cs/hacking.avif',
  },
  {
    title: 'How AI-Powered Video Analytics Reduced Security Incidents by 65% in Commercial Buildings',
    description: 'Smart monitoring, real-time threat detection, and automated security alerts',
    date: '09/02/2025',
    time: '00:00:00',
    image: '/assets/img/cs/modern.avif',
  },
  {
    title: 'Transforming Residential Security: Smart CCTV Integration With Cloud and Mobile Access',
    description: 'Empowering homeowners with remote monitoring and smart automation',
    date: '09/02/2025',
    time: '00:00:00',
    image: '/assets/img/cs/cloud.avif',
  },
  {
    title: 'Boosting Industrial Safety: Preventing Theft & Unauthorized Access With ANPR and PTZ Surveillance',
    description: 'Advanced vehicle tracking & wide-area monitoring for factories and warehouses',
    date: '09/02/2025',
    time: '00:00:00',
    image: '/assets/img/cs/theft.avif',
  },
  {
    title: 'Upgrading Legacy CCTV Systems to Ultra-HD IP Surveillance: A Real Customer Journey From Analog to Digital',
    description: 'Improving clarity, scalability, and reliability with modern IP cameras',
    date: '09/02/2025',
    time: '00:00:00',
    image: '/assets/img/cs/journey.avif',
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
  const [expandedFAQ, setExpandedFAQ] = useState({});
  const [chatbotOpen, setChatbotOpen] = useState(false);
  
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
                  const categoryKeys = ['network-cameras', 'cellular-cameras', 'access-control', 'alarm-systems'];
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
          <div />
          <div style={{ marginTop: '40px', textAlign: 'center', width: '100%' }}>
            <a href="/products" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              View All Products
            </a>
          </div>
        </div>
      </section>

        <section className="pricing-section" id="pricing">
          <div className="section-header">
            <h2>Pricing Plans</h2>
            <p>Choose the perfect plan for your security needs</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}>
                {plan.popular && <div className="pricing-card__badge">Most Popular</div>}
                <div className="pricing-card__header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{plan.price}</span>
                    <span className="pricing-card__period">/{plan.period}</span>
                  </div>
                  <p className="pricing-card__description">{plan.description}</p>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`pricing-card__button ${plan.popular ? 'pricing-card__button--primary' : ''}`}>
                  Get Started
              </button>
          </div>
            ))}
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

        <section id="press" className="press">
          <div className="press__header">
            <div className="press__header-left">
              <h2>Explore Our Case Studies</h2>
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
                        <div>{press.description}</div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

        <section className="faq-section" id="faq">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our products and services</p>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFAQ(prev => ({
                    ...prev,
                    [index]: !prev[index]
                  }))}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={expandedFAQ[index] ? 'faq-icon faq-icon--expanded' : 'faq-icon'}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                {expandedFAQ[index] && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
          </div>
                )}
              </div>
            ))}
        </div>
      </section>

      </main>

      <Chatbot externalOpen={chatbotOpen} onOpenChange={setChatbotOpen} />
      <Footer onChatWithSalesClick={() => setChatbotOpen(true)} />
    </div>
  );
}
