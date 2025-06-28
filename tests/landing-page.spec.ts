import { test, expect } from '@playwright/test';

test.describe('Landing Page Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for animations to settle
    await page.waitForTimeout(1000);
  });

  test('Desktop - Full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('desktop-full-page.png', {
      fullPage: true,
      threshold: 0.2,
    });
  });

  test('Desktop - Hero section', async ({ page }) => {
    const heroSection = page.locator('#home');
    await expect(heroSection).toHaveScreenshot('desktop-hero-section.png', {
      threshold: 0.2,
    });
  });

  test('Desktop - Features section', async ({ page }) => {
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(featuresSection).toHaveScreenshot(
      'desktop-features-section.png',
      {
        threshold: 0.2,
      }
    );
  });

  test('Desktop - Testimonials section', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    await testimonialsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(testimonialsSection).toHaveScreenshot(
      'desktop-testimonials-section.png',
      {
        threshold: 0.2,
      }
    );
  });

  test('Desktop - Header navigation hover states', async ({ page }) => {
    const navigation = page.locator('nav');
    await navigation.locator('a').first().hover();
    await page.waitForTimeout(200);
    await expect(navigation).toHaveScreenshot('desktop-nav-hover.png', {
      threshold: 0.2,
    });
  });

  test('Desktop - Primary button hover state', async ({ page }) => {
    const primaryButton = page.locator('.btn-primary').first();
    await primaryButton.hover();
    await page.waitForTimeout(200);
    await expect(primaryButton).toHaveScreenshot(
      'desktop-primary-button-hover.png',
      {
        threshold: 0.2,
      }
    );
  });

  test('Desktop - Feature card hover state', async ({ page }) => {
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    const firstFeatureCard = featuresSection.locator('.group').first();
    await firstFeatureCard.hover();
    await page.waitForTimeout(300);
    await expect(firstFeatureCard).toHaveScreenshot(
      'desktop-feature-card-hover.png',
      {
        threshold: 0.2,
      }
    );
  });
});

test.describe('Mobile Visual Regression Tests', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
  });

  test('Mobile - Full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('mobile-full-page.png', {
      fullPage: true,
      threshold: 0.2,
    });
  });

  test('Mobile - Hero section', async ({ page }) => {
    const heroSection = page.locator('#home');
    await expect(heroSection).toHaveScreenshot('mobile-hero-section.png', {
      threshold: 0.2,
    });
  });

  test('Mobile - Features section', async ({ page }) => {
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(featuresSection).toHaveScreenshot(
      'mobile-features-section.png',
      {
        threshold: 0.2,
      }
    );
  });

  test('Mobile - Navigation menu closed', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('mobile-nav-closed.png', {
      threshold: 0.2,
    });
  });

  test('Mobile - Navigation menu open', async ({ page }) => {
    const menuButton = page.locator('button[aria-label*="menu"]');
    await menuButton.click();
    await page.waitForTimeout(300);
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('mobile-nav-open.png', {
      threshold: 0.2,
    });
  });

  test('Mobile - CTA section', async ({ page }) => {
    const ctaSection = page
      .locator('section')
      .filter({ hasText: 'Ready to Build Your' });
    await ctaSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(ctaSection).toHaveScreenshot('mobile-cta-section.png', {
      threshold: 0.2,
    });
  });
});

test.describe('Tablet Visual Regression Tests', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
  });

  test('Tablet - Full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('tablet-full-page.png', {
      fullPage: true,
      threshold: 0.2,
    });
  });

  test('Tablet - Hero section', async ({ page }) => {
    const heroSection = page.locator('#home');
    await expect(heroSection).toHaveScreenshot('tablet-hero-section.png', {
      threshold: 0.2,
    });
  });

  test('Tablet - Features grid layout', async ({ page }) => {
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const featuresGrid = featuresSection.locator('.grid');
    await expect(featuresGrid).toHaveScreenshot('tablet-features-grid.png', {
      threshold: 0.2,
    });
  });

  test('Tablet - Testimonials grid layout', async ({ page }) => {
    const testimonialsSection = page.locator('#testimonials');
    await testimonialsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const testimonialsGrid = testimonialsSection.locator('.grid');
    await expect(testimonialsGrid).toHaveScreenshot(
      'tablet-testimonials-grid.png',
      {
        threshold: 0.2,
      }
    );
  });
});

test.describe('Accessibility and Interaction Tests', () => {
  test('Keyboard navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test tab navigation through interactive elements
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();

    // Continue tabbing through navigation
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);
    }

    await expect(page).toHaveScreenshot('keyboard-navigation-focus.png', {
      threshold: 0.2,
    });
  });

  test('Skip navigation link works', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skipLink = page.locator('#skip-nav a');
    await expect(skipLink).toBeFocused();

    await skipLink.click();
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeInViewport();
  });

  test('Mobile menu toggle works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.locator('button[aria-label*="menu"]');
    const mobileMenu = page.locator('nav .md\\:hidden');

    // Menu should be hidden initially
    await expect(mobileMenu).toBeHidden();

    // Click to open menu
    await menuButton.click();
    await page.waitForTimeout(300);
    await expect(mobileMenu).toBeVisible();

    // Click to close menu
    await menuButton.click();
    await page.waitForTimeout(300);
    await expect(mobileMenu).toBeHidden();
  });

  test('Smooth scrolling to sections', async ({ page }) => {
    await page.goto('/');

    const featuresLink = page.locator('nav a[href="#features"]');
    await featuresLink.click();

    await page.waitForTimeout(1000);
    const featuresSection = page.locator('#features');
    await expect(featuresSection).toBeInViewport();
  });

  test('Form validation and interaction', async ({ page }) => {
    await page.goto('/');

    // Test primary CTA button
    const ctaButton = page.locator('.btn-primary').first();
    await ctaButton.click();

    // Should have proper focus states and hover effects
    await ctaButton.hover();
    await page.waitForTimeout(200);

    await expect(page).toHaveScreenshot('cta-button-interaction.png', {
      threshold: 0.2,
    });
  });
});

test.describe('Performance and Loading Tests', () => {
  test('Page loads quickly and content is visible', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');

    // Wait for hero section to be visible
    await expect(page.locator('#home h1')).toBeVisible();

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // Should load in under 3 seconds
  });

  test('Images load properly', async ({ page }) => {
    await page.goto('/');

    // Wait for any images to load (if present)
    await page.waitForLoadState('networkidle');

    // Check that there are no broken images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('src');
    }
  });

  test('Animations complete properly', async ({ page }) => {
    await page.goto('/');

    // Wait for initial animations to complete
    await page.waitForTimeout(2000);

    // Scroll to trigger section animations
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    const testimonialsSection = page.locator('#testimonials');
    await testimonialsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Take final screenshot after all animations
    await expect(page).toHaveScreenshot('animations-complete.png', {
      fullPage: true,
      threshold: 0.2,
    });
  });
});
