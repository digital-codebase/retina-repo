import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';
import TopNavigation from '../TopNavigation/TopNavigation';
import './ProductsPage.css';

// Product list with filter properties (same as in HomePage)
const allProducts = [
  {
    id: 1,
    name: 'Dome CCTV Camera',
    code: '3MP 3K Pro HD Wi-Fi Smart Home Security Dome Camera',
    image: '/assets/img/trending/dome.avif',
    price: 4500,
    availability: 'In Stock',
    category: 'Dome Camera',
    brand: 'Hikvision',
    resolution: '2MP',
    technology: ['IP Camera', 'Wi-Fi / Wireless', 'Night Vision', 'IR Night Vision'],
    specialFeatures: ['Two-Way Audio', 'AI Human Detection', 'SD Card Support', 'Cloud Storage Support'],
    powerType: 'DC 12V',
    warranty: '1 Year',
  },
  {
    id: 2,
    name: 'IP CCTV Camera',
    code: '5MP IP CCTV 4 Camera',
    image: '/assets/img/trending/ip.avif',
    price: 3200,
    availability: 'In Stock',
    category: 'Bullet Camera',
    brand: 'CP Plus',
    resolution: '4MP',
    technology: ['IP Camera', 'Night Vision', 'IR Night Vision'],
    specialFeatures: ['SD Card Support'],
    powerType: 'PoE',
    warranty: '2 Years',
  },
  {
    id: 3,
    name: 'WIFI CCTV Camera',
    code: 'Wi-Fi Security Camera 1080p',
    image: '/assets/img/trending/wifi.avif',
    price: 2800,
    availability: 'In Stock',
    category: 'Wireless Wi-Fi Camera',
    brand: 'Realme',
    resolution: '2MP',
    technology: ['Wi-Fi / Wireless', 'Night Vision', 'IR Night Vision'],
    specialFeatures: ['Two-Way Audio', 'SD Card Support', 'Cloud Storage Support'],
    powerType: 'DC 12V',
    warranty: '1 Year',
  },
  {
    id: 4,
    name: 'Solar CCTV Camera',
    code: '3+3Mp Wireless 4G Cellular Solar Powered Security Camera',
    image: '/assets/img/trending/solar.avif',
    price: 8500,
    availability: 'In Stock',
    category: 'Solar Camera',
    brand: 'Hikvision',
    resolution: '4MP',
    technology: ['IP Camera', 'Wi-Fi / Wireless', 'Night Vision', 'Full-Color Night Vision'],
    specialFeatures: ['AI Human Detection', 'SD Card Support', 'Cloud Storage Support'],
    powerType: 'Solar Power',
    warranty: '2 Years',
  },
  {
    id: 5,
    name: 'Bike Camera',
    code: 'Smart Bike Cam Pro | 2K Resolution 3MP 1296p',
    image: '/assets/img/trending/bike2.avif',
    price: 3500,
    availability: 'In Stock',
    category: '360° Rotating Camera',
    brand: 'Godrej',
    resolution: '2MP',
    technology: ['Wi-Fi / Wireless', 'Night Vision'],
    specialFeatures: ['SD Card Support'],
    powerType: 'Battery Powered',
    warranty: '1 Year',
  },
  {
    id: 6,
    name: 'Car Dash Camera',
    code: 'Car Dash Camera Pro 2K Resolution QHD Dash Cam',
    image: '/assets/img/trending/car2.avif',
    price: 4200,
    availability: 'In Stock',
    category: '360° Rotating Camera',
    brand: 'CP Plus',
    resolution: '4MP',
    technology: ['IP Camera', 'Night Vision', 'Starlight Vision'],
    specialFeatures: ['SD Card Support'],
    powerType: 'DC 12V',
    warranty: '2 Years',
  },
  {
    id: 7,
    name: 'Video Doorbell Camera',
    code: 'Smart Video Doorbell with AI Detection',
    image: '/assets/img/trending/dome.avif',
    price: 5500,
    availability: 'In Stock',
    category: 'Video Doorbell / Smart Door Camera',
    brand: 'Hikvision',
    resolution: '2MP',
    technology: ['IP Camera', 'Wi-Fi / Wireless', 'Night Vision', 'Full-Color Night Vision'],
    specialFeatures: ['Two-Way Audio', 'AI Human Detection', 'SD Card Support', 'Cloud Storage Support'],
    powerType: 'DC 12V',
    warranty: '2 Years',
  },
  {
    id: 8,
    name: 'Hidden Spy Camera',
    code: 'Mini Hidden Camera with Motion Detection',
    image: '/assets/img/trending/wifi.avif',
    price: 1800,
    availability: 'Out of Stock',
    category: 'Hidden / Spy Camera',
    brand: 'Realme',
    resolution: '1MP',
    technology: ['Wi-Fi / Wireless', 'Night Vision'],
    specialFeatures: ['SD Card Support'],
    powerType: 'Battery Powered',
    warranty: '1 Year',
  },
  {
    id: 9,
    name: 'Bullet CCTV Camera',
    code: '4MP Bullet Camera with IR Night Vision',
    image: '/assets/img/trending/ip.avif',
    price: 3800,
    availability: 'In Stock',
    category: 'Bullet Camera',
    brand: 'CP Plus',
    resolution: '4MP',
    technology: ['IP Camera', 'Night Vision', 'IR Night Vision'],
    specialFeatures: ['SD Card Support'],
    powerType: 'PoE',
    warranty: '2 Years',
  },
  {
    id: 10,
    name: 'PTZ Dome Camera',
    code: '8MP PTZ Dome Camera with 360° Rotation',
    image: '/assets/img/trending/solar.avif',
    price: 12000,
    availability: 'In Stock',
    category: '360° Rotating Camera',
    brand: 'Hikvision',
    resolution: '8MP',
    technology: ['IP Camera', 'Night Vision', 'Starlight Vision'],
    specialFeatures: ['AI Human Detection', 'SD Card Support', 'Cloud Storage Support'],
    powerType: 'PoE',
    warranty: '3 Years',
  },
  {
    id: 11,
    name: 'Analog HD Camera',
    code: '2MP Analog HD Camera AHD/TVI',
    image: '/assets/img/trending/dome.avif',
    price: 2200,
    availability: 'In Stock',
    category: 'Dome Camera',
    brand: 'Godrej',
    resolution: '2MP',
    technology: ['Analog HD (AHD / TVI / CVI)', 'Night Vision', 'IR Night Vision'],
    specialFeatures: [],
    powerType: 'DC 12V',
    warranty: '1 Year',
  },
  {
    id: 12,
    name: '6MP Network Camera',
    code: '6MP IP Network Camera Pro',
    image: '/assets/img/trending/ip.avif',
    price: 6500,
    availability: 'In Stock',
    category: 'Bullet Camera',
    brand: 'Hikvision',
    resolution: '6MP',
    technology: ['IP Camera', 'Night Vision', 'Starlight Vision'],
    specialFeatures: ['AI Human Detection', 'SD Card Support'],
    powerType: 'PoE',
    warranty: '2 Years',
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  
  const handleBackToProducts = () => {
    navigate('/');
    // Scroll to products section after navigation
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    availability: [],
    priceRange: [],
    category: [],
    brand: [],
    resolution: [],
    technology: [],
    specialFeatures: [],
    powerType: [],
    warranty: [],
  });
  const [expandedFilters, setExpandedFilters] = useState({
    price: false,
    category: false,
    brand: false,
    resolution: false,
    technology: false,
    specialFeatures: false,
    powerType: false,
    warranty: false,
  });

  const toggleFilter = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [filterType]: newValues };
    });
  };

  const toggleFilterGroup = (groupName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const clearFilter = (filterType) => {
    setFilters(prev => ({ ...prev, [filterType]: [] }));
  };

  const clearAllFilters = () => {
    setFilters({
      availability: [],
      priceRange: [],
      category: [],
      brand: [],
      resolution: [],
      technology: [],
      specialFeatures: [],
      powerType: [],
      warranty: [],
    });
    setSearchQuery('');
  };

  const matchesSearch = (product, query) => {
    if (!query) return true;
    try {
      const regex = new RegExp(query, 'i');
      return regex.test(product.name) || 
             regex.test(product.code) || 
             regex.test(product.brand) || 
             regex.test(product.category);
    } catch (e) {
      const lowerQuery = query.toLowerCase();
      return product.name.toLowerCase().includes(lowerQuery) ||
             product.code.toLowerCase().includes(lowerQuery) ||
             product.brand.toLowerCase().includes(lowerQuery) ||
             product.category.toLowerCase().includes(lowerQuery);
    }
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      if (!matchesSearch(product, searchQuery)) return false;
      if (filters.availability.length > 0 && !filters.availability.includes(product.availability)) return false;
      if (filters.priceRange.length > 0) {
        const matchesPrice = filters.priceRange.some(range => {
          const [min, max] = range.split('-').map(v => parseInt(v.replace(/[^\d]/g, '')));
          return product.price >= min && product.price <= max;
        });
        if (!matchesPrice) return false;
      }
      if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) return false;
      if (filters.resolution.length > 0 && !filters.resolution.includes(product.resolution)) return false;
      if (filters.technology.length > 0) {
        const hasMatchingTech = filters.technology.some(tech => product.technology.includes(tech));
        if (!hasMatchingTech) return false;
      }
      if (filters.specialFeatures.length > 0) {
        const hasMatchingFeature = filters.specialFeatures.some(feature => product.specialFeatures.includes(feature));
        if (!hasMatchingFeature) return false;
      }
      if (filters.powerType.length > 0 && !filters.powerType.includes(product.powerType)) return false;
      if (filters.warranty.length > 0 && !filters.warranty.includes(product.warranty)) return false;
      return true;
    });
  }, [searchQuery, filters]);

  return (
    <div className="products-page">
      <TopNavigation />
      <MainNavigation />
      
      <main className="products-page-main">
        <section className="products-filter-section">
          <div className="section-header">
            <button className="back-button" onClick={handleBackToProducts}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Products View
            </button>
            <h2>Our Products</h2>
            <p>Comprehensive range of security products for every need</p>
          </div>
          <div className="products-filter-container">
            <aside className="products-filter-sidebar">
              <div className="filter-header">
                <h3>Filters</h3>
                <button className="clear-all-filters" onClick={clearAllFilters}>Clear All</button>
              </div>

              <div className="filter-group">
                <div className="filter-search">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Availability</h4>
                  {filters.availability.length > 0 && (
                    <button className="clear-filter" onClick={() => clearFilter('availability')}>Clear</button>
                  )}
                </div>
                <div className="filter-options">
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.availability.includes('In Stock')}
                      onChange={() => toggleFilter('availability', 'In Stock')}
                    />
                    <span>In Stock</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={filters.availability.includes('Out of Stock')}
                      onChange={() => toggleFilter('availability', 'Out of Stock')}
                    />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Price Range</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('price')}>
                    {expandedFilters.price ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.price && (
                  <div className="filter-options">
                    <label>
                      <input
                        type="checkbox"
                        checked={filters.priceRange.includes('1000-2000')}
                        onChange={() => toggleFilter('priceRange', '1000-2000')}
                      />
                      <span>INR 1,000 – INR 2,000</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={filters.priceRange.includes('2000-3000')}
                        onChange={() => toggleFilter('priceRange', '2000-3000')}
                      />
                      <span>INR 2,000 – INR 3,000</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={filters.priceRange.includes('4000-5000')}
                        onChange={() => toggleFilter('priceRange', '4000-5000')}
                      />
                      <span>INR 4,000 – INR 5,000</span>
                    </label>
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Category / Camera Type</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('category')}>
                    {expandedFilters.category ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.category && (
                  <div className="filter-options">
                    {['Dome Camera', 'Bullet Camera', 'Wireless Wi-Fi Camera', 'Solar Camera', '360° Rotating Camera', 'Video Doorbell / Smart Door Camera', 'Hidden / Spy Camera'].map(cat => (
                      <label key={cat}>
                        <input
                          type="checkbox"
                          checked={filters.category.includes(cat)}
                          onChange={() => toggleFilter('category', cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Brand</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('brand')}>
                    {expandedFilters.brand ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.brand && (
                  <div className="filter-options">
                    {['Hikvision', 'CP Plus', 'Godrej', 'Realme'].map(brand => (
                      <label key={brand}>
                        <input
                          type="checkbox"
                          checked={filters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                        />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Resolution</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('resolution')}>
                    {expandedFilters.resolution ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.resolution && (
                  <div className="filter-options">
                    {['1MP', '2MP', '4MP', '6MP', '8MP'].map(res => (
                      <label key={res}>
                        <input
                          type="checkbox"
                          checked={filters.resolution.includes(res)}
                          onChange={() => toggleFilter('resolution', res)}
                        />
                        <span>{res}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Technology</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('technology')}>
                    {expandedFilters.technology ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.technology && (
                  <div className="filter-options">
                    {['IP Camera', 'Analog HD (AHD / TVI / CVI)', 'Wi-Fi / Wireless', 'Night Vision', 'IR Night Vision', 'Full-Color Night Vision', 'Starlight Vision'].map(tech => (
                      <label key={tech}>
                        <input
                          type="checkbox"
                          checked={filters.technology.includes(tech)}
                          onChange={() => toggleFilter('technology', tech)}
                        />
                        <span>{tech}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Special Features</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('specialFeatures')}>
                    {expandedFilters.specialFeatures ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.specialFeatures && (
                  <div className="filter-options">
                    {['Two-Way Audio', 'AI Human Detection', 'SD Card Support', 'Cloud Storage Support'].map(feature => (
                      <label key={feature}>
                        <input
                          type="checkbox"
                          checked={filters.specialFeatures.includes(feature)}
                          onChange={() => toggleFilter('specialFeatures', feature)}
                        />
                        <span>{feature}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Power Type</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('powerType')}>
                    {expandedFilters.powerType ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.powerType && (
                  <div className="filter-options">
                    {['PoE', 'DC 12V', 'Solar Power', 'Battery Powered'].map(power => (
                      <label key={power}>
                        <input
                          type="checkbox"
                          checked={filters.powerType.includes(power)}
                          onChange={() => toggleFilter('powerType', power)}
                        />
                        <span>{power}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-group">
                <div className="filter-group-header">
                  <h4>Warranty</h4>
                  <button className="filter-toggle" onClick={() => toggleFilterGroup('warranty')}>
                    {expandedFilters.warranty ? '−' : '+'}
                  </button>
                </div>
                {expandedFilters.warranty && (
                  <div className="filter-options">
                    {['1 Year', '2 Years', '3 Years'].map(warranty => (
                      <label key={warranty}>
                        <input
                          type="checkbox"
                          checked={filters.warranty.includes(warranty)}
                          onChange={() => toggleFilter('warranty', warranty)}
                        />
                        <span>{warranty}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </aside>

            <div className="products-grid-container">
              <div className="products-header">
                <p className="products-count">Showing {filteredProducts.length} products</p>
              </div>
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <div className="product-card__image">
                      <img src={product.image} alt={product.name} />
                      {product.availability === 'Out of Stock' && (
                        <div className="product-card__badge product-card__badge--out-of-stock">Out of Stock</div>
                      )}
                    </div>
                    <div className="product-card__content">
                      <h3 className="product-card__name">{product.name}</h3>
                      <p className="product-card__code">{product.code}</p>
                      <div className="product-card__details">
                        <span className="product-card__brand">{product.brand}</span>
                        <span className="product-card__resolution">{product.resolution}</span>
                      </div>
                      <div className="product-card__price">₹ {product.price.toLocaleString('en-IN')}</div>
                      <button className="product-card__button">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="no-products">
                  <p>No products found matching your filters.</p>
                  <button onClick={clearAllFilters}>Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

