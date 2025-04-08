import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to main pages', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Portfolio/)

    const blogLink = page.getByRole('link', { name: /blog/i })
    await blogLink.click()
    await expect(page).toHaveURL(/.*blog/)

    const chatLink = page.getByRole('link', { name: /chat/i })
    await chatLink.click()
    await expect(page).toHaveURL(/.*chat/)
  })

  test('should toggle theme', async ({ page }) => {
    await page.goto('/')
    const themeToggle = page.getByRole('button', { name: /toggle theme/i })
    await themeToggle.click()
    await expect(page.locator('html')).toHaveAttribute('class', /dark/)
  })
}) 