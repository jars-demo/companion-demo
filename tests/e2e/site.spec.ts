import { expect, test, type Page } from '@playwright/test'

async function expectNoSidewaysScroll(page: Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  expect(overflow, 'page scrolls sideways').toBeLessThanOrEqual(0)
}

test('the landing page introduces the kit and fits the screen', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('little friend')
  await expect(page.getByRole('link', { name: 'Meet the companions' })).toBeVisible()
  await expectNoSidewaysScroll(page)
})

test('the site companion opens, answers and closes with Escape', async ({ page }) => {
  await page.goto('/')
  const companion = page.getByRole('button', { name: 'Ask Recei' })
  await companion.click()
  const dialog = page.getByRole('dialog', { name: 'Questions for Recei' })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Does it make things up?' }).click()
  await expect(dialog).toContainText('It only shows the answers you give it.')
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(companion).toBeFocused()
})

test('choosing a companion in the directory swaps the site companion', async ({ page }) => {
  await page.goto('/companions')
  await expect(page.getByRole('heading', { level: 2, name: 'Mochi' })).toBeVisible()
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Mochi' })
    .getByRole('button', { name: 'Make it my companion' })
    .click()
  await expect(page.getByRole('button', { name: 'Ask Mochi' })).toBeVisible()
  await expectNoSidewaysScroll(page)
})

test('the playground writes code for the chosen options', async ({ page }) => {
  await page.goto('/playground')
  await page.getByRole('button', { name: 'Toast' }).click()
  await page.getByRole('button', { name: 'Strolls now and then' }).click()
  await expect(page.locator('pre')).toContainText('character={toast}')
  await expect(page.locator('pre')).toContainText('stroll={false}')
  await expectNoSidewaysScroll(page)
})

test('the workshop lists ten chapters and each one reads', async ({ page }) => {
  await page.goto('/workshop')
  const chapters = page.getByRole('main').getByRole('link').filter({ hasText: 'minutes' })
  await expect(chapters).toHaveCount(10)
  await chapters.first().click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Why a companion?')
  await page.getByRole('link', { name: /Next/ }).click()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Set up the kit')
  await expectNoSidewaysScroll(page)
})
