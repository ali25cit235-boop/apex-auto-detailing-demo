/**
 * APEX AUTO DETAILING — Master Script
 * Pure Vanilla JavaScript • High-Impact Animations & Interactive Handlers
 * Portfolio Demo created by Ali Web Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  const initIcons = () => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  };
  initIcons();

  // 2. Sticky Navbar & Active Section Tracking
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 140;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen.toString());
      mobileToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
      initIcons();
    });

    document.querySelectorAll('.mobile-link, .mobile-drawer .btn').forEach((item) => {
      item.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
        initIcons();
      });
    });
  }

  // 4. HERO CAR SWITCHER MAIN BAR
  // Allows users to switch showcase cars directly in the hero section!
  const carSwitchBtns = document.querySelectorAll('.car-switch-btn');
  const heroImg = document.querySelector('.hero-img');
  const heroGlossTag = document.querySelector('.glass-tag-orange');
  const heroFinishCardTitle = document.querySelector('.glass-card-title-row .glass-card-title');

  const heroCars = [
    {
      name: "Porsche 911 GT3 RS",
      img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85",
      gloss: "99.8% Gloss",
      tag: "Obsidian Ceramic"
    },
    {
      name: "Mercedes-AMG GT Coupe",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85",
      gloss: "99.5% Hydrophobic",
      tag: "Diamond 9H Nano"
    },
    {
      name: "Audi R8 V10 Spyder",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85",
      gloss: "99.9% Depth Score",
      tag: "Jewel Polish"
    },
    {
      name: "BMW M4 Competition",
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=85",
      gloss: "100% Spotless Cured",
      tag: "Graphene Matrix"
    }
  ];

  carSwitchBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.carIdx || '0', 10);
      const car = heroCars[idx];
      if (!car) return;

      carSwitchBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      if (heroImg) {
        heroImg.style.opacity = '0.35';
        heroImg.style.transform = 'scale(1.08)';

        setTimeout(() => {
          heroImg.src = car.img;
          heroImg.style.opacity = '1';
          heroImg.style.transform = 'scale(1.03)';
        }, 220);
      }

      if (heroGlossTag) {
        heroGlossTag.textContent = car.gloss;
      }
    });
  });

  // 5. BEFORE / AFTER INTERACTIVE SLIDER
  // Bulletproof Dual Control: Transparent Range Input + Pointer Events + Presets Bar
  const comparisonSets = [
    {
      title: 'Paint Correction & High-Gloss Clarity',
      subtitle: 'Swirl-Mark Removal & Nano-Ceramic Mirror Reflection',
      beforeLabel: 'BEFORE (OXIDIZED & SWIRLED)',
      afterLabel: 'AFTER (APEX CERAMIC FINISH)',
      beforeImg: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      desc: 'Elimination of deep automatic-car-wash swirl marks, restoring obsidian depth and razor-sharp light reflections.'
    },
    {
      title: 'Cockpit & Leather Deep Rejuvenation',
      subtitle: 'Steam Extraction, Oil Removal & Matte Leather Reset',
      beforeLabel: 'BEFORE (DIRTY & DUSTY)',
      afterLabel: 'AFTER (FACTORY MATTE RESET)',
      beforeImg: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      desc: 'Removal of greasy body oils and ground-in dust from perforated leather seats, leaving an authentic factory matte finish.'
    },
    {
      title: 'Wheel & Brake Caliper Decontamination',
      subtitle: 'Iron Deposition Dissolution & High-Temp Ceramic Seal',
      beforeLabel: 'BEFORE (BAKED BRAKE DUST)',
      afterLabel: 'AFTER (SATIN CERAMIC SEAL)',
      beforeImg: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      desc: 'Heavy iron fallout and corrosive metallic brake dust chemically dissolved without stripping painted caliper finishes.'
    }
  ];

  const baStage = document.querySelector('.ba-stage');
  const baRangeInput = document.querySelector('.ba-slider-range');
  const baDivider = document.querySelector('.ba-divider');
  const baBeforeWrapper = document.querySelector('.ba-before-wrapper');
  const baImgBefore = document.querySelector('.ba-img-before');
  const baImgAfter = document.querySelector('.ba-img-after');
  const baBadgeBefore = document.querySelector('.ba-badge-before');
  const baBadgeAfter = document.querySelector('.ba-badge-after');
  const baHeaderTitle = document.querySelector('.ba-header-title');
  const baHeaderSub = document.querySelector('.ba-header-sub');
  const baDesc = document.querySelector('.ba-desc');
  const baPresetBtns = document.querySelectorAll('.ba-preset-btn');
  const sliderPercentageText = document.getElementById('slider-percentage-text');
  const tabButtons = document.querySelectorAll('.tabs-switcher .tab-btn');

  const updateSlider = (value) => {
    const val = Math.max(0, Math.min(100, parseFloat(value)));
    if (baStage) {
      baStage.style.setProperty('--slider-pos', `${val}%`);
    }
    if (baRangeInput) {
      baRangeInput.value = val;
    }
    if (sliderPercentageText) {
      if (val === 50) {
        sliderPercentageText.textContent = '50% / 50% Split';
      } else if (val < 50) {
        sliderPercentageText.textContent = `${Math.round(val)}% Before / ${Math.round(100 - val)}% After`;
      } else {
        sliderPercentageText.textContent = `${Math.round(val)}% Before / ${Math.round(100 - val)}% After`;
      }
    }
  };

  // 1) Range input listener
  if (baRangeInput) {
    baRangeInput.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });
  }

  // 2) Pointer / Touch event listener directly on the stage container
  if (baStage) {
    let isDragging = false;

    const handlePointerAction = (e) => {
      const rect = baStage.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      updateSlider(percentage);
    };

    baStage.addEventListener('pointerdown', (e) => {
      isDragging = true;
      try {
        baStage.setPointerCapture(e.pointerId);
      } catch (_) {}
      handlePointerAction(e);
    });

    baStage.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      handlePointerAction(e);
    });

    const endPointer = (e) => {
      if (isDragging) {
        isDragging = false;
        try {
          baStage.releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
    };

    baStage.addEventListener('pointerup', endPointer);
    baStage.addEventListener('pointercancel', endPointer);

    // Keyboard support
    baStage.addEventListener('keydown', (e) => {
      const currentPos = parseFloat(baRangeInput?.value || '50');
      if (e.key === 'ArrowLeft') {
        updateSlider(currentPos - 5);
      } else if (e.key === 'ArrowRight') {
        updateSlider(currentPos + 5);
      }
    });
  }

  // 3) Preset buttons
  baPresetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      baPresetBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const presetVal = parseFloat(btn.dataset.preset || '50');
      updateSlider(presetVal);
    });
  });

  // 4) Switch Comparison Sets Tabs
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.setIndex || '0', 10);
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const data = comparisonSets[index];
      if (data) {
        if (baHeaderTitle) baHeaderTitle.textContent = data.title;
        if (baHeaderSub) baHeaderSub.textContent = data.subtitle;
        if (baDesc) baDesc.textContent = `"${data.desc}"`;
        if (baBadgeBefore) baBadgeBefore.textContent = data.beforeLabel;
        if (baBadgeAfter) baBadgeAfter.textContent = data.afterLabel;
        if (baImgBefore) baImgBefore.src = data.beforeImg;
        if (baImgAfter) baImgAfter.src = data.afterImg;

        updateSlider(50);
        baPresetBtns.forEach((b) => {
          if (b.dataset.preset === '50') b.classList.add('active');
          else b.classList.remove('active');
        });
      }
    });
  });

  // 5) Slider Auto-Teaser animation when scrolling into view
  let teaserTriggered = false;
  const sliderObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !teaserTriggered) {
        teaserTriggered = true;
        // Smoothly tease the slider so user sees it is interactive
        let startTime = null;
        const duration = 1200; // ms
        const animateTeaser = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(1, elapsed / duration);
          // Wave: 50 -> 32 -> 68 -> 50
          const wave = Math.sin(progress * Math.PI * 2) * 18;
          updateSlider(50 + wave);

          if (progress < 1) {
            requestAnimationFrame(animateTeaser);
          } else {
            updateSlider(50);
          }
        };
        setTimeout(() => requestAnimationFrame(animateTeaser), 300);
      }
    });
  }, { threshold: 0.35 });

  if (baStage) {
    sliderObserver.observe(baStage);
  }

  // 6. PACKAGE PRICING VEHICLE SELECTOR
  const segButtons = document.querySelectorAll('.segmented-group .seg-btn');
  const pkgPrices = document.querySelectorAll('.pkg-price');
  const pkgRateNotes = document.querySelectorAll('.pkg-rate-note');

  const basePrices = [75, 150, 300];

  segButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      segButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const size = btn.dataset.size;
      let multiplier = 1;
      let note = 'base rate';

      if (size === 'suv') {
        multiplier = 1.25;
        note = 'adjusted for midsize/crossover';
      } else if (size === 'truck') {
        multiplier = 1.4;
        note = 'adjusted for large truck/van';
      }

      pkgPrices.forEach((priceEl, idx) => {
        const finalPrice = Math.round(basePrices[idx] * multiplier);
        priceEl.textContent = `$${finalPrice}`;
      });

      pkgRateNotes.forEach((noteEl) => {
        noteEl.textContent = note;
      });
    });
  });

  // Pre-fill Package to Booking
  const choosePkgButtons = document.querySelectorAll('.choose-pkg-btn');
  const serviceInput = document.getElementById('service-select');
  const activeSelectionBanner = document.getElementById('active-selection-banner');
  const activeSelectionText = document.getElementById('active-selection-text');

  choosePkgButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pkgName = btn.dataset.pkgName || 'Full Transformation';
      const activeSeg = document.querySelector('.seg-btn.active')?.dataset.size || 'sedan';
      const activePriceEl = btn.closest('.pricing-card')?.querySelector('.pkg-price')?.textContent || '$300';
      
      const selectionValue = `Package: ${pkgName} (${activePriceEl} - ${activeSeg.toUpperCase()})`;

      if (serviceInput) {
        let exists = false;
        for (let i = 0; i < serviceInput.options.length; i++) {
          if (serviceInput.options[i].value.includes(pkgName)) {
            serviceInput.selectedIndex = i;
            exists = true;
            break;
          }
        }
        if (!exists) {
          const opt = document.createElement('option');
          opt.value = selectionValue;
          opt.textContent = selectionValue;
          opt.selected = true;
          serviceInput.appendChild(opt);
        }
      }

      if (activeSelectionBanner && activeSelectionText) {
        activeSelectionText.textContent = selectionValue;
        activeSelectionBanner.style.display = 'flex';
      }

      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Clear Selection Banner Button
  const clearSelectionBtn = document.getElementById('clear-selection-btn');
  if (clearSelectionBtn && activeSelectionBanner) {
    clearSelectionBtn.addEventListener('click', () => {
      activeSelectionBanner.style.display = 'none';
      if (serviceInput) serviceInput.selectedIndex = 0;
    });
  }

  // 7. SERVICE DETAIL MODAL
  const servicesData = {
    'exterior-detail': {
      number: '01',
      title: 'Exterior Detail',
      duration: '2 - 3 Hours',
      price: '$120',
      desc: 'A surgical exterior restoration process designed to strip road grime, industrial fallout, and brake dust without inducing micro-scratches. Finished with high-slickness hydrophobics.',
      idealFor: 'Vehicles with surface contamination needing a showroom reset',
      features: [
        'pH-neutral high-density snow foam bath',
        'Two-bucket wash with ultra-plush microfiber mitts',
        'Deep wheel barrel, caliper & arch agitation',
        'Chemical iron decontamination & clay bar prep',
        'Si02 hydrophobic spray sealant (3-month protection)',
        'Streak-free glass & satin tire nourishment'
      ]
    },
    'deep-interior-cleaning': {
      number: '02',
      title: 'Deep Interior Cleaning',
      duration: '2.5 - 3.5 Hours',
      price: '$160',
      desc: 'Every surface from the floorboards to the headliner is methodically purified. We extract embedded sand, sweat, oils, and pet dander while restoring factory matte leather texture.',
      idealFor: 'Daily drivers, family haulers, and vehicles requiring deep cabin sanitation',
      features: [
        'Compressed air blowout of crevices & seat tracks',
        'High-temp 220°F dry steam sanitization',
        'Hot water extraction on floor carpets & mats',
        'pH-balanced leather cleanse & UV matte seal',
        'Precision vent, console, and button detail',
        'Odor neutralizing antimicrobial ozone treatment'
      ]
    },
    'paint-enhancement': {
      number: '03',
      title: 'Paint Enhancement',
      duration: '4 - 5 Hours',
      price: '$240',
      desc: 'Utilizing professional dual-action polishers and micro-fine diminishing abrasives, we refine your clear coat to eliminate 60-80% of wash scratches and dramatically heighten gloss.',
      idealFor: 'Enthusiasts seeking brilliant mirror reflections without wet sanding',
      features: [
        'Digital paint depth gauge measurement inspection',
        'Single-stage finishing polish with Rupes/Flex machines',
        'Elimination of moderate swirl marks & spider-webbing',
        'Restoration of rich color depth and dark gloss',
        'Panel wipe isopropyl alcohol prep',
        'Polymer sealant base foundation'
      ]
    },
    'ceramic-coating': {
      number: '04',
      title: 'Ceramic Coating',
      duration: 'Full Day / 6 - 8 Hours',
      price: '$450',
      desc: 'Molecularly bonds to automotive clear coat, forming an ultra-slick sacrificial barrier against bird etchings, tree sap, UV oxidation, and road salts. Water flies off automatically at 35+ mph.',
      idealFor: 'New cars, exotic vehicles, and owners demanding permanent gloss with easy maintenance',
      features: [
        'Full multi-stage paint decontamination & clay',
        'Single or dual-stage paint enhancement polish',
        'Application of professional-grade 9H ceramic matrix',
        '3 to 5 years certified hydrophobic durability',
        'Infrared curing acceleration treatment',
        'Windshield & wheel face ceramic infusion'
      ]
    },
    'headlight-restoration': {
      number: '05',
      title: 'Headlight Restoration',
      duration: '1.5 Hours',
      price: '$90',
      desc: 'Oxidized polycarbonate reduces night visibility by up to 75%. We mechanically shave away yellowed plastic, polish the lens to optical clarity, and bake in durable UV hardeners.',
      idealFor: 'Vehicles aged 3+ years with cloudy, foggy, or weathered headlamp lenses',
      features: [
        'Gentle adjacent bumper & hood masking prep',
        'Step-graduated wet sanding (800 to 3000 grit)',
        'High-speed optical compounding & jewel polish',
        'Ceramic UV-inhibitor clear coat application',
        'Guaranteed zero haze recurrence for 12+ months',
        'Beam projection & lux intensity restoration'
      ]
    },
    'full-vehicle-transformation': {
      number: '06',
      title: 'Full Vehicle Transformation',
      duration: '1 - 2 Days',
      price: '$550',
      desc: 'Our flagship commission. No surface is overlooked: engine bay dressed, wheel arches scrubbed, clear coat corrected to mirror finish, interior steam-sanitized, and leather conditioned.',
      idealFor: 'Pre-sale maximization, car show concours prep, or new-car delivery perfection',
      features: [
        'Everything in Exterior Detail & Deep Interior Cleaning',
        'Dual-stage paint correction (cutting compound + jewel polish)',
        'Engine bay degreasing, steam clean & matte satin dress',
        'Under-chassis and suspension flush',
        'All leather cleansed with Swissvax conditioners',
        '12-month Graphene/Ceramic protective topcoat'
      ]
    }
  };

  const serviceModal = document.getElementById('service-detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalNum = document.getElementById('modal-service-num');
  const modalDur = document.getElementById('modal-service-dur');
  const modalTitle = document.getElementById('modal-service-title');
  const modalDesc = document.getElementById('modal-service-desc');
  const modalIdeal = document.getElementById('modal-service-ideal');
  const modalFeatures = document.getElementById('modal-service-features');
  const modalPrice = document.getElementById('modal-service-price');
  const modalBookBtn = document.getElementById('modal-book-btn');

  let currentModalServiceName = '';

  const openServiceModal = (serviceId) => {
    const data = servicesData[serviceId];
    if (!data || !serviceModal) return;

    currentModalServiceName = data.title;
    if (modalNum) modalNum.textContent = `SERVICE ${data.number}`;
    if (modalDur) modalDur.textContent = data.duration;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;
    if (modalIdeal) modalIdeal.textContent = data.idealFor;
    if (modalPrice) modalPrice.textContent = data.price;

    if (modalFeatures) {
      modalFeatures.innerHTML = data.features
        .map((f) => `<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;font-size:13px;color:#e5e7eb;"><span style="color:#ff5e1a;font-weight:bold;">✓</span><span>${f}</span></div>`)
        .join('');
    }

    serviceModal.classList.add('active');
  };

  const closeServiceModal = () => {
    serviceModal?.classList.remove('active');
  };

  document.querySelectorAll('.open-service-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.dataset.serviceId;
      openServiceModal(serviceId);
    });
  });

  modalCloseBtn?.addEventListener('click', closeServiceModal);
  serviceModal?.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });

  modalBookBtn?.addEventListener('click', () => {
    closeServiceModal();
    if (serviceInput && currentModalServiceName) {
      for (let i = 0; i < serviceInput.options.length; i++) {
        if (serviceInput.options[i].value === currentModalServiceName) {
          serviceInput.selectedIndex = i;
          break;
        }
      }
      if (activeSelectionBanner && activeSelectionText) {
        activeSelectionText.textContent = currentModalServiceName;
        activeSelectionBanner.style.display = 'flex';
      }
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Direct Book Button from Service Card
  document.querySelectorAll('.book-service-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sName = btn.dataset.serviceName;
      if (serviceInput && sName) {
        for (let i = 0; i < serviceInput.options.length; i++) {
          if (serviceInput.options[i].value === sName) {
            serviceInput.selectedIndex = i;
            break;
          }
        }
        if (activeSelectionBanner && activeSelectionText) {
          activeSelectionText.textContent = sName;
          activeSelectionBanner.style.display = 'flex';
        }
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 8. GALLERY FILTER & LIGHTBOX MODAL
  const galleryItems = [
    {
      id: 'g1',
      category: 'paint',
      title: 'Obsidian Black Mirror Reflection',
      caption: 'Single-stage enhancement polish followed by two layers of 9H ceramic coating.',
      src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85'
    },
    {
      id: 'g2',
      category: 'process',
      title: 'Snow Foam Contactless Bath',
      caption: 'High-density active foam encapsulating dirt particles before physical contact.',
      src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g3',
      category: 'interior',
      title: 'Precision Cockpit & Leather Treatment',
      caption: 'Gentle boar-bristle brush agitation and natural matte leather nourishment.',
      src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g4',
      category: 'wheels',
      title: 'Forged Alloy Wheel Decontamination',
      caption: 'High-temperature ceramic coated wheel faces and gloss red Brembo brake calipers.',
      src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85'
    },
    {
      id: 'g5',
      category: 'paint',
      title: 'Hydrophobic Water Beading Magic',
      caption: '115-degree water contact angle repelling road contaminants with effortless slide.',
      src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g6',
      category: 'paint',
      title: 'Showroom Delivery Presentation',
      caption: 'Concours-ready presentation under natural light following our flagship service.',
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'
    }
  ];

  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryDomItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentLightboxIdx = 0;

  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      galleryDomItems.forEach((domItem) => {
        const itemCat = domItem.dataset.category;
        if (filter === 'all' || itemCat === filter) {
          domItem.style.display = 'block';
        } else {
          domItem.style.display = 'none';
        }
      });
    });
  });

  const openLightbox = (index) => {
    currentLightboxIdx = index;
    const item = galleryItems[index];
    if (!item || !lightboxModal) return;

    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;

    lightboxModal.classList.add('active');
  };

  const closeLightbox = () => {
    lightboxModal?.classList.remove('active');
  };

  galleryDomItems.forEach((domItem) => {
    domItem.addEventListener('click', () => {
      const idx = parseInt(domItem.dataset.index || '0', 10);
      openLightbox(idx);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIdx = (currentLightboxIdx - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentLightboxIdx);
  });

  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIdx = (currentLightboxIdx + 1) % galleryItems.length;
    openLightbox(currentLightboxIdx);
  });

  // 9. FAQ ACCORDION TOGGLE
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.faq-item');
      if (!parent) return;
      const isOpen = parent.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('open');
      });

      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });

  // 10. BOOKING FORM VALIDATION & CONFIRMATION
  const bookingForm = document.getElementById('booking-form');
  const confirmationScreen = document.getElementById('confirmation-screen');
  const submitAnotherBtn = document.getElementById('submit-another-btn');
  const demoAlertBanner = document.getElementById('quick-demo-alert');

  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      const nameVal = document.getElementById('client-name')?.value.trim();
      const phoneVal = document.getElementById('client-phone')?.value.trim();
      const vehicleVal = document.getElementById('client-vehicle')?.value.trim();
      const serviceVal = document.getElementById('service-select')?.value;
      const dateVal = document.getElementById('preferred-date')?.value;
      const notesVal = document.getElementById('client-notes')?.value.trim();

      const setError = (id, msg) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(`${id}-error`);
        if (input) input.classList.add('error');
        if (errEl) errEl.textContent = msg;
        hasError = true;
      };

      const clearError = (id) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(`${id}-error`);
        if (input) input.classList.remove('error');
        if (errEl) errEl.textContent = '';
      };

      clearError('client-name');
      clearError('client-phone');
      clearError('client-vehicle');
      clearError('service-select');
      clearError('preferred-date');

      if (!nameVal) setError('client-name', 'Full name is required');
      if (!phoneVal || phoneVal.length < 7) setError('client-phone', 'Please enter a valid phone number');
      if (!vehicleVal) setError('client-vehicle', 'Vehicle Year, Make & Model is required');
      if (!serviceVal) setError('service-select', 'Please select a package or service');
      if (!dateVal) setError('preferred-date', 'Please select a preferred date');

      if (hasError) return;

      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Processing Demo Request...</span>';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        document.getElementById('receipt-name').textContent = nameVal;
        document.getElementById('receipt-phone').textContent = phoneVal;
        document.getElementById('receipt-vehicle').textContent = vehicleVal;
        document.getElementById('receipt-service').textContent = serviceVal;
        document.getElementById('receipt-date').textContent = dateVal;

        const notesRow = document.getElementById('receipt-notes-row');
        const notesEl = document.getElementById('receipt-notes');
        if (notesVal && notesRow && notesEl) {
          notesEl.textContent = `"${notesVal}"`;
          notesRow.style.display = 'flex';
        } else if (notesRow) {
          notesRow.style.display = 'none';
        }

        bookingForm.style.display = 'none';
        if (confirmationScreen) confirmationScreen.style.display = 'block';

        if (submitBtn) {
          submitBtn.innerHTML = '<span>REQUEST A DETAIL</span><i data-lucide="sparkles"></i>';
          submitBtn.disabled = false;
          initIcons();
        }
      }, 400);
    });
  }

  submitAnotherBtn?.addEventListener('click', () => {
    bookingForm?.reset();
    if (bookingForm) bookingForm.style.display = 'block';
    if (confirmationScreen) confirmationScreen.style.display = 'none';
    if (activeSelectionBanner) activeSelectionBanner.style.display = 'none';
  });

  window.triggerDemoContact = (type) => {
    if (!demoAlertBanner) return;
    if (type === 'call') {
      demoAlertBanner.textContent = 'DEMO ACTION: In production, this dials our mobile concierge at (555) 839-APEX.';
    } else {
      demoAlertBanner.textContent = 'DEMO ACTION: In production, this opens WhatsApp for direct photo condition estimates.';
    }
    demoAlertBanner.style.display = 'block';
    setTimeout(() => {
      demoAlertBanner.style.display = 'none';
    }, 4500);
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      closeLightbox();
    }
  });

  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 11. SCROLL REVEAL & DYNAMIC STATISTICS ANIMATIONS
  // Works instantly across all browsers without external dependencies
  const revealElements = document.querySelectorAll(
    '.service-card, .pricing-card, .why-card, .process-card, .gallery-item, .proof-card, .faq-item, .booking-info-box'
  );

  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    const delayClass = `stagger-${(index % 4) + 1}`;
    el.classList.add(delayClass);
  });

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    scrollObserver.observe(el);
  });

  // Dynamic Animated Statistics Counter for Why Apex
  const statsElements = document.querySelectorAll('.why-stat-num');
  let statsTriggered = false;

  const countUp = (element, targetNumber, suffix = '', decimals = 0) => {
    let start = 0;
    const duration = 1400; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const current = start + (targetNumber - start) * easeProgress;

      element.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.round(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = (decimals > 0 ? targetNumber.toFixed(decimals) : targetNumber) + suffix;
      }
    };

    requestAnimationFrame(update);
  };

  const statsSection = document.querySelector('.why-grid');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsTriggered) {
          statsTriggered = true;
          if (statsElements[0]) countUp(statsElements[0], 100, '%', 0);
          if (statsElements[1]) countUp(statsElements[1], 99.8, '%', 1);
          if (statsElements[2]) countUp(statsElements[2], 0, ' PPM', 0);
          if (statsElements[3]) countUp(statsElements[3], 120, '+', 0);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  // 12. GSAP Fallback Enhancement (if GSAP loaded)
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-kicker', { opacity: 0, y: -20, duration: 0.8, ease: 'power2.out', delay: 0.1 });
    gsap.from('.hero-title', { opacity: 0, y: 35, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.from('.hero-subtext', { opacity: 0, y: 25, duration: 0.8, ease: 'power2.out', delay: 0.4 });
    gsap.from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.55 });
    gsap.from('.hero-badges-row', { opacity: 0, y: 15, duration: 0.8, ease: 'power2.out', delay: 0.7 });
    gsap.from('.hero-car-switcher-bar', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.85 });
  }
});
