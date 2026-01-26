import { useEffect, useRef, useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import { shopInfo, shopProducts, shopFeatures } from '../content/myShop';
import './MyShop.css';

const MyShop = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Load Elfsight script for Instagram feed
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleShopClick = () => {
    window.open(shopInfo.instagramUrl, '_blank');
  };

  return (
    <main className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <img src={shopInfo.logo} alt={`${shopInfo.brandName} Logo`} />
            </div>
            <h1>
              <AnimatedText>Bahrain's </AnimatedText>
              <AnimatedText className="accent-text" delay={0.4}>Anime</AnimatedText>
            </h1>
            <p className="hero-description">
              Your destination for authentic anime-inspired clothing in Bahrain.
              Express your love for anime through fashion.
            </p>
            <p className="instagram-handle">{shopInfo.instagramHandle}</p>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="deco-circle deco-circle-1"></div>
          <div className="deco-circle deco-circle-2"></div>
          <div className="deco-circle deco-circle-3"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className={`shop-about ${isVisible['about-section'] ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current['about-section'] = el)}
      >
        <div className="container">
          <div className="about-content">
            <h2>
              <AnimatedText>About </AnimatedText>
              <AnimatedText className="accent-text" delay={0.25}>The Shop</AnimatedText>
            </h2>
            <p>
              Bahrain's Anime was born from a passion for anime culture and fashion.
              What started as a love for anime has grown into a mission to bring
              high-quality anime-inspired clothing to fellow fans in Bahrain.
            </p>
            <p>
              Every piece in our collection is carefully selected to help you express
              your unique style while celebrating the anime characters and series you love.
              From classic designs to trending styles, we've got something for every anime enthusiast.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products-section"
        className={`shop-products ${isVisible['products-section'] ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current['products-section'] = el)}
      >
        <div className="container">
          <h2>
            <AnimatedText>What We </AnimatedText>
            <AnimatedText className="accent-text" delay={0.35}>Offer</AnimatedText>
          </h2>
          <p className="section-subtitle">Explore our collection of anime-inspired fashion</p>

          <div className="products-grid">
            {shopProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ '--stagger-delay': `${index * 0.1}s` }}
              >
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="product-placeholder">
                      <span className="placeholder-icon">👕</span>
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="product-category">{product.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="products-cta">
            <button className="shop-cta secondary" onClick={handleShopClick}>
              View Full Collection on Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features-section"
        className={`shop-features ${isVisible['features-section'] ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current['features-section'] = el)}
      >
        <div className="container">
          <h2>
            <AnimatedText>Why Shop </AnimatedText>
            <AnimatedText className="accent-text" delay={0.4}>With Us</AnimatedText>
          </h2>

          <div className="features-grid">
            {shopFeatures.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  className="feature-card"
                  style={{ '--stagger-delay': `${index * 0.1}s` }}
                >
                  <div className="feature-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section
        id="instagram-section"
        className={`shop-instagram ${isVisible['instagram-section'] ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current['instagram-section'] = el)}
      >
        <div className="container">
          <h2>
            <AnimatedText>Follow Us on </AnimatedText>
            <AnimatedText className="accent-text" delay={0.55}>Instagram</AnimatedText>
          </h2>
          <p className="section-subtitle">Check out our latest posts and collections</p>

          <div className="instagram-feed-wrapper">
            <div
              className={`elfsight-app-${shopInfo.elfsightAppId}`}
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta-section"
        className={`shop-cta-section ${isVisible['cta-section'] ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current['cta-section'] = el)}
      >
        <div className="container">
          <div className="cta-content">
            <h2>
              <AnimatedText>Ready to Level Up Your </AnimatedText>
              <AnimatedText className="accent-text" delay={0.95}>Style?</AnimatedText>
            </h2>
            <p>Visit our Instagram shop and find your perfect anime-inspired look today!</p>
            <button className="shop-cta large" onClick={handleShopClick}>
              <span className="cta-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
              Visit {shopInfo.instagramHandle}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyShop;
