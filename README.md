## PetPalace

Minimal, modern pet adoption experience built with **Next.js** and **Tailwind CSS**.

### Tech stack

- **Next.js** (App Router, TypeScript)
- **React**
- **Tailwind CSS**

### Available pages

- `/` · Homepage with hero, featured pets, how it works, and chatbot teaser
- `/pets` · Pet listings grid with a minimalist search and filter bar
- `/pets/[id]` · Pet details page with large image, traits, health, and call to action

### Running the project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Next steps / API integration

- Wire the chatbot UI in `components/ChatbotSection.tsx` to the **OpenAI API**
- Replace `MOCK_PETS` in `data/pets.ts` with a real pet API or database
- Add authentication and admin tools for managing pets and applications

