import { test, expect } from "@playwright/test";

test("test inactivity monitoring", async ({ page }) => {
  await page.clock.install();
  await page.goto("http://localhost:5173/timer");

  await expect(page.getByText("Flash offer")).toBeVisible();

  await page.clock.fastForward("05:00");

  await expect(page.getByText("Offer Expired")).toBeVisible();
});