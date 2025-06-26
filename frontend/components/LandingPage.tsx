import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import WhoItsFor from './WhoItsFor';
import TechStack from './TechStack';
import Benefits from './Benefits';
import Preview from './Preview';
import CTA from './CTA';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    // Animate sections on scroll
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      const el = element as HTMLElement;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.1,
        }
      );
    });

    // Animate card grids
    gsap.utils.toArray('.animate-cards').forEach((element) => {
      const container = element as HTMLElement;
      const cards = container.querySelectorAll(
        '.card-item'
      ) as NodeListOf<HTMLElement>;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // ROI Section Animation
    gsap.utils.toArray('.animate-roi-section').forEach((element) => {
      const container = element as HTMLElement;

      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const title = container.querySelector('.roi-title') as HTMLElement | null;
      if (title) {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const stats = container.querySelectorAll(
        '.roi-stat-item'
      ) as NodeListOf<HTMLElement>;
      if (stats.length > 0) {
        gsap.fromTo(
          stats,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.2,
            delay: 0.4,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Additional Benefits Animation
    gsap.utils.toArray('.animate-additional-benefits').forEach((element) => {
      const container = element as HTMLElement;

      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const title = container.querySelector(
        '.benefits-title'
      ) as HTMLElement | null;
      if (title) {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const items = container.querySelectorAll(
        '.benefit-item'
      ) as NodeListOf<HTMLElement>;
      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.4,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <TechStack />
      <Benefits />
      <Preview />
      <CTA />
    </div>
  );
}

export default LandingPage;
