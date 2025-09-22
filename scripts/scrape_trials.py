import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def scrape_participation_criteria(nct_id: str):
    url = f"https://clinicaltrials.gov/study/{nct_id}"

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(url, timeout=60000)

        # Click Participation Criteria tab
        await page.wait_for_selector("text=Participation Criteria", timeout=60000)
        await page.click("text=Participation Criteria")

        # Wait for the eligibility criteria container
        await page.wait_for_selector("div#eligibility-criteria-description", timeout=60000)

        # Extract the eligibility criteria section
        html_content = await page.inner_html("div#eligibility-criteria-description")

        await browser.close()

    # Parse with BeautifulSoup
    soup = BeautifulSoup(html_content, "html.parser")

    inclusion, exclusion = [], []
    section = None

    for el in soup.find_all(["p", "li"]):
        text = el.get_text(strip=True)
        if not text:
            continue
        if "Key Inclusion Criteria" in text:
            section = "inclusion"
            continue
        elif "Key Exclusion Criteria" in text:
            section = "exclusion"
            continue
        elif "NOTE" in text:
            break  # Stop at NOTE if present

        if section == "inclusion":
            inclusion.append(text)
        elif section == "exclusion":
            exclusion.append(text)

    return {
        "Inclusion Criteria": inclusion,
        "Exclusion Criteria": exclusion
    }

# ✅ Jupyter/Colab usage
async def main():
    nct_number = "NCT02484547"
    criteria = await scrape_participation_criteria(nct_number)
    
    print("\n--- Inclusion Criteria ---")
    for item in criteria["Inclusion Criteria"]:
        print("•", item)
    
    print("\n--- Exclusion Criteria ---")
    for item in criteria["Exclusion Criteria"]:
        print("•", item)

if __name__ == '__main__':
    asyncio.run(main())
