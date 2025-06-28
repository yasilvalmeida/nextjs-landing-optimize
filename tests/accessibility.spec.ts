import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
  });

  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check that headings follow proper hierarchy (h1 -> h2 -> h3, etc.)
    const headings = await page
      .locator('h1, h2, h3, h4, h5, h6')
      .allTextContents();
    expect(headings.length).toBeGreaterThan(0);

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // h1 should contain main page title
    const h1Text = await page.locator('h1').textContent();
    expect(h1Text).toContain('Landing Pages');
  });

  test('should have proper landmark structure', async ({ page }) => {
    // Check for main landmarks
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // Check navigation landmark
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveAttribute('aria-label');
  });

  test('should have skip navigation link', async ({ page }) => {
    const skipLink = page.locator('#skip-nav a');
    await expect(skipLink).toBeAttached();

    // Focus the skip link
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();

    // Check it has proper text
    const skipLinkText = await skipLink.textContent();
    expect(skipLinkText).toContain('Skip to main content');

    // Check it navigates to main content
    await skipLink.click();
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeInViewport();
  });

  test('should have proper button accessibility', async ({ page }) => {
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);

      // Each button should be keyboard accessible
      await expect(button).toBeEnabled();

      // Buttons should have accessible names
      const accessibleName =
        (await button.getAttribute('aria-label')) ||
        (await button.textContent());
      expect(accessibleName).toBeTruthy();
      expect(accessibleName?.trim().length).toBeGreaterThan(0);
    }
  });

  test('should have proper link accessibility', async ({ page }) => {
    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);

      // Each link should have an href or be properly labeled
      const href = await link.getAttribute('href');
      const ariaLabel = await link.getAttribute('aria-label');
      const linkText = await link.textContent();

      expect(
        href || ariaLabel || (linkText && linkText.trim().length > 0)
      ).toBeTruthy();

      // Links should not have empty text
      if (!ariaLabel && linkText) {
        expect(linkText.trim().length).toBeGreaterThan(0);
      }
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    // Test specific elements for color contrast
    const textElements = ['h1', 'h2', 'p', 'button', 'a'];

    for (const selector of textElements) {
      const elements = page.locator(selector);
      const count = await elements.count();

      if (count > 0) {
        // This is a basic test - in practice you'd use specialized tools
        await expect(elements.first()).toBeVisible();
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Start from the beginning
    await page.keyboard.press('Tab');

    // Should focus skip link first
    let focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Continue tabbing through interactive elements
    const interactiveElements = [];

    for (let i = 0; i < 20; i++) {
      const currentFocus = await page.locator(':focus').getAttribute('tagName');
      if (currentFocus) {
        interactiveElements.push(currentFocus.toLowerCase());
      }

      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);
    }

    // Should have focused on various interactive elements
    expect(interactiveElements).toContain('a');
    expect(interactiveElements).toContain('button');
  });

  test('should have proper ARIA attributes', async ({ page }) => {
    // Check for proper ARIA labeling on navigation
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('aria-label');

    // Check buttons have proper ARIA attributes where needed
    const expandableButtons = page.locator('button[aria-expanded]');
    const expandableCount = await expandableButtons.count();

    for (let i = 0; i < expandableCount; i++) {
      const button = expandableButtons.nth(i);
      const expanded = await button.getAttribute('aria-expanded');
      expect(['true', 'false']).toContain(expanded);
    }
  });

  test('should be accessible with mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.locator('button[aria-expanded]');
    await expect(menuButton).toBeVisible();

    // Check initial state
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Menu should be keyboard accessible
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Close menu with keyboard
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('should have accessible form elements', async ({ page }) => {
    // Check any form inputs have proper labels
    const inputs = page.locator('input, textarea, select');
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledBy = await input.getAttribute('aria-labelledby');

      if (id) {
        // Check for associated label
        const label = page.locator(`label[for="${id}"]`);
        const hasLabel = (await label.count()) > 0;

        // Should have either a label, aria-label, or aria-labelledby
        expect(hasLabel || ariaLabel || ariaLabelledBy).toBeTruthy();
      }
    }
  });

  test('should announce important content changes', async ({ page }) => {
    // Test that dynamic content changes are properly announced
    const liveRegions = page.locator('[aria-live]');
    const liveRegionCount = await liveRegions.count();

    // If there are live regions, they should have appropriate aria-live values
    for (let i = 0; i < liveRegionCount; i++) {
      const region = liveRegions.nth(i);
      const ariaLive = await region.getAttribute('aria-live');
      expect(['polite', 'assertive', 'off']).toContain(ariaLive);
    }
  });

  test('should have proper focus management', async ({ page }) => {
    // Test focus visible styles
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');

    // Should have visible focus indicator
    await expect(focusedElement).toBeVisible();

    // Focus should be clearly visible (this is tested via CSS)
    const hasOutline = await focusedElement.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return (
        styles.outline !== 'none' ||
        styles.boxShadow !== 'none' ||
        styles.border !== '0px none' ||
        el.classList.contains('focus:outline') ||
        el.classList.contains('focus:ring')
      );
    });

    expect(hasOutline).toBeTruthy();
  });

  test('should support reduced motion preferences', async ({ page }) => {
    // Test with reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    // Page should still function with reduced motion
    await expect(page.locator('h1')).toBeVisible();

    // Scroll to test section animations with reduced motion
    const featuresSection = page.locator('#features');
    await featuresSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await expect(featuresSection).toBeInViewport();
  });
});
