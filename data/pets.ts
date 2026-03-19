export type PetType = "dog" | "cat" | "rabbit" | "other";

export type PetSize = "small" | "medium" | "large";

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  ageYears: number;
  size: PetSize;
  gender: "male" | "female";
  city: string;
  state: string;
  description: string;
  personalityTraits: string[];
  imageUrl: string;
  isVaccinated: boolean;
  isNeutered: boolean;
  isGoodWithKids: boolean;
  isGoodWithOtherPets: boolean;
  status: "available" | "pending" | "adopted-soon";
}

function getPetPlaceholderImage(seed: string) {
  const initials = seed.trim().slice(0, 1).toUpperCase() || "P";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="640" viewBox="0 0 900 640">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F7F5F2"/>
          <stop offset="100%" stop-color="#E9F5EE"/>
        </linearGradient>
      </defs>
      <rect width="900" height="640" rx="56" fill="url(#g)"/>
      <circle cx="160" cy="160" r="110" fill="#6BA48A" opacity="0.16"/>
      <circle cx="720" cy="420" r="160" fill="#6BA48A" opacity="0.10"/>
      <text x="50%" y="52%" text-anchor="middle" font-family="Arial, sans-serif" font-size="140" font-weight="700" fill="#0F172A" opacity="0.75">${initials}</text>
      <text x="50%" y="68%" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#0F172A" opacity="0.55">PetPalace</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// NOTE: We intentionally do not use `public/` pet images.
// Each pet gets a lightweight data URL placeholder image so the dataset stays realistic without relying on separate image files.
const MOCK_PETS_RAW: Pet[] = [
  {
    id: "1",
    name: "Milo",
    type: "dog",
    breed: "Cavalier King Charles Spaniel",
    ageYears: 2,
    size: "small",
    gender: "male",
    city: "Austin",
    state: "TX",
    description:
      "A gentle, people oriented companion who loves slow walks and cozy evenings on the couch.",
    personalityTraits: ["Gentle", "Affectionate", "Apartment friendly"],
    imageUrl:
      "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "2",
    name: "Luna",
    type: "cat",
    breed: "Domestic Short Hair",
    ageYears: 3,
    size: "small",
    gender: "female",
    city: "Seattle",
    state: "WA",
    description:
      "Calm, curious, and independent. Luna loves sun spots and quiet homes.",
    personalityTraits: ["Calm", "Independent", "Low maintenance"],
    imageUrl:
      "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: false,
    status: "available"
  },
  {
    id: "3",
    name: "Oliver",
    type: "dog",
    breed: "Labrador Retriever",
    ageYears: 4,
    size: "large",
    gender: "male",
    city: "Denver",
    state: "CO",
    description:
      "Playful and patient family dog who loves kids and outdoor adventures.",
    personalityTraits: ["Playful", "Family friendly", "Active"],
    imageUrl:
      "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "4",
    name: "Willow",
    type: "cat",
    breed: "Ragdoll",
    ageYears: 1,
    size: "medium",
    gender: "female",
    city: "Portland",
    state: "OR",
    description:
      "Soft, cuddly, and relaxed. Willow is happiest curled up next to you.",
    personalityTraits: ["Affectionate", "Calm", "Indoor"],
    imageUrl:
      "/2.jpeg",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "adopted-soon"
  },
  {
    id: "5",
    name: "Hazel",
    type: "rabbit",
    breed: "Mini Lop",
    ageYears: 1,
    size: "small",
    gender: "female",
    city: "San Diego",
    state: "CA",
    description:
      "A quiet, gentle rabbit who enjoys calm environments and soft blankets.",
    personalityTraits: ["Gentle", "Quiet", "Low noise"],
    imageUrl:
      "/1.jpeg",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  }
  ,
  {
    id: "6",
    name: "Bella",
    type: "dog",
    breed: "Golden Retriever",
    ageYears: 5,
    size: "large",
    gender: "female",
    city: "Austin",
    state: "TX",
    description:
      "Warm and gentle with a calm demeanor. Bella enjoys leisurely walks and quiet mornings with her favorite person.",
    personalityTraits: ["Gentle", "Patient", "Affectionate", "Leash trained"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "7",
    name: "Charlie",
    type: "dog",
    breed: "Beagle",
    ageYears: 3,
    size: "medium",
    gender: "male",
    city: "Seattle",
    state: "WA",
    description:
      "Curious and bright. Charlie loves sniffing new trails and turning playtime into a joyful daily ritual.",
    personalityTraits: ["Curious", "Friendly", "Sniffy", "Playful"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "pending"
  },
  {
    id: "8",
    name: "Nora",
    type: "cat",
    breed: "Siamese",
    ageYears: 4,
    size: "small",
    gender: "female",
    city: "Portland",
    state: "OR",
    description:
      "Silly in the best way. Nora greets you with soft chirps and settles into cozy lap naps when the day slows down.",
    personalityTraits: ["Affectionate", "Vocal", "Calm", "Curious"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: false,
    status: "available"
  },
  {
    id: "9",
    name: "Max",
    type: "dog",
    breed: "Shiba Inu",
    ageYears: 2,
    size: "small",
    gender: "male",
    city: "Denver",
    state: "CO",
    description:
      "Independent and charming. Max enjoys short adventures, then rewards you with sweet cuddles at home.",
    personalityTraits: ["Independent", "Clever", "Affectionate", "Low drama"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: false,
    status: "available"
  },
  {
    id: "10",
    name: "Daisy",
    type: "cat",
    breed: "American Shorthair",
    ageYears: 2,
    size: "small",
    gender: "female",
    city: "San Diego",
    state: "CA",
    description:
      "Easygoing and sweet. Daisy follows you around when she wants company and enjoys quiet corners when she does not.",
    personalityTraits: ["Easygoing", "Affectionate", "Quiet", "Low maintenance"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "11",
    name: "Rocky",
    type: "dog",
    breed: "Boxer",
    ageYears: 6,
    size: "large",
    gender: "male",
    city: "Columbus",
    state: "OH",
    description:
      "Big energy with a steady heart. Rocky is affectionate, enjoys family time, and takes breaks like a pro during home days.",
    personalityTraits: ["Playful", "Family friendly", "Loyal", "Calm indoors"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "12",
    name: "Sophie",
    type: "cat",
    breed: "Maine Coon",
    ageYears: 5,
    size: "medium",
    gender: "female",
    city: "Boston",
    state: "MA",
    description:
      "Majestic but gentle. Sophie loves slow petting, warm blankets, and soft company in the evenings.",
    personalityTraits: ["Gentle", "Affectionate", "Calm", "Indoor"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "pending"
  },
  {
    id: "13",
    name: "Pepper",
    type: "rabbit",
    breed: "Holland Lop",
    ageYears: 1,
    size: "small",
    gender: "female",
    city: "Raleigh",
    state: "NC",
    description:
      "Soft, curious, and calm. Pepper enjoys gentle handling and relaxing in a quiet space with fresh hay and safe toys.",
    personalityTraits: ["Gentle", "Quiet", "Curious", "Low noise"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "14",
    name: "Leo",
    type: "dog",
    breed: "Catahoula Leopard Dog",
    ageYears: 4,
    size: "large",
    gender: "male",
    city: "Phoenix",
    state: "AZ",
    description:
      "Focused and friendly. Leo thrives with active families and loves working puzzles that keep his mind engaged.",
    personalityTraits: ["Active", "Smart", "Playful", "Confident"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "15",
    name: "Mimi",
    type: "cat",
    breed: "Russian Blue",
    ageYears: 3,
    size: "small",
    gender: "female",
    city: "Chicago",
    state: "IL",
    description:
      "Reserved at first, then deeply affectionate. Mimi enjoys calm routines and gentle attention once she feels safe.",
    personalityTraits: ["Calm", "Quiet", "Loyal", "Low maintenance"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: false,
    status: "pending"
  },
  {
    id: "16",
    name: "Chester",
    type: "dog",
    breed: "French Bulldog",
    ageYears: 2,
    size: "small",
    gender: "male",
    city: "Austin",
    state: "TX",
    description:
      "Sweet and steady. Chester loves short strolls, cozy naps, and a quick check-in with his favorite person.",
    personalityTraits: ["Gentle", "Affectionate", "Apartment friendly", "Low noise"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "17",
    name: "Zoe",
    type: "dog",
    breed: "Cocker Spaniel",
    ageYears: 3,
    size: "medium",
    gender: "female",
    city: "Tampa",
    state: "FL",
    description:
      "Happy and affectionate. Zoe enjoys family time, gentle training sessions, and relaxing after play.",
    personalityTraits: ["Affectionate", "Playful", "Family friendly", "Calm indoors"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "18",
    name: "Oscar",
    type: "cat",
    breed: "Tabby",
    ageYears: 6,
    size: "medium",
    gender: "male",
    city: "Seattle",
    state: "WA",
    description:
      "Relaxed and observant. Oscar watches the world from comfy perches and enjoys slow blinks and soft pets.",
    personalityTraits: ["Calm", "Quiet", "Low maintenance", "Indoor"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "adopted-soon"
  },
  {
    id: "19",
    name: "Lola",
    type: "dog",
    breed: "Shetland Sheepdog",
    ageYears: 4,
    size: "medium",
    gender: "female",
    city: "Portland",
    state: "OR",
    description:
      "Bright and eager to learn. Lola loves gentle games, tidy routines, and family adventures with a clear purpose.",
    personalityTraits: ["Smart", "Active", "Playful", "Affectionate"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "pending"
  },
  {
    id: "20",
    name: "Nibbles",
    type: "other",
    breed: "Guinea Pig",
    ageYears: 1,
    size: "small",
    gender: "male",
    city: "Phoenix",
    state: "AZ",
    description:
      "Gentle and curious. Nibbles loves the comfort of steady routines and enjoys safe chew toys and soft bedding.",
    personalityTraits: ["Gentle", "Quiet", "Curious", "Low noise"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "21",
    name: "Roxy",
    type: "dog",
    breed: "Chihuahua Mix",
    ageYears: 2,
    size: "small",
    gender: "female",
    city: "Chicago",
    state: "IL",
    description:
      "Small but full of confidence. Roxy enjoys short walks, warm blankets, and calm companionship at home.",
    personalityTraits: ["Confident", "Affectionate", "Low noise", "Quick learner"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: false,
    status: "available"
  },
  {
    id: "22",
    name: "Atlas",
    type: "dog",
    breed: "German Shepherd",
    ageYears: 4,
    size: "large",
    gender: "male",
    city: "Denver",
    state: "CO",
    description:
      "Protective and kind. Atlas loves structure, calm leadership, and long walks with a steady pace.",
    personalityTraits: ["Loyal", "Smart", "Active", "Confident"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "23",
    name: "Harper",
    type: "cat",
    breed: "Tortoiseshell",
    ageYears: 2,
    size: "small",
    gender: "female",
    city: "Columbus",
    state: "OH",
    description:
      "Playful and thoughtful. Harper enjoys interactive toys, window watching, and cozy chats with her trusted people.",
    personalityTraits: ["Playful", "Affectionate", "Curious", "Indoor"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "24",
    name: "Mochi",
    type: "rabbit",
    breed: "Mini Rex",
    ageYears: 2,
    size: "small",
    gender: "female",
    city: "San Diego",
    state: "CA",
    description:
      "Soft and gentle. Mochi enjoys relaxed handling and calm environments with plenty of space to hop safely.",
    personalityTraits: ["Gentle", "Quiet", "Low noise", "Curious"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "pending"
  },
  {
    id: "25",
    name: "Sasha",
    type: "dog",
    breed: "Cavalier King Charles Spaniel",
    ageYears: 1,
    size: "small",
    gender: "female",
    city: "Boston",
    state: "MA",
    description:
      "Tender and affectionate. Sasha loves cuddles, gentle walks, and being close during quiet evenings.",
    personalityTraits: ["Gentle", "Affectionate", "Apartment friendly", "Calm indoors"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "26",
    name: "Toby",
    type: "dog",
    breed: "Corgi",
    ageYears: 3,
    size: "medium",
    gender: "male",
    city: "Tampa",
    state: "FL",
    description:
      "Friendly and fun. Toby enjoys family playtime, easy training, and relaxing naps after a good day.",
    personalityTraits: ["Playful", "Family friendly", "Affectionate", "Active"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "27",
    name: "Willow II",
    type: "cat",
    breed: "Domestic Longhair",
    ageYears: 7,
    size: "medium",
    gender: "female",
    city: "Raleigh",
    state: "NC",
    description:
      "Sweet and calm. Willow II enjoys steady routines, warm blankets, and slow mornings with her favorite people.",
    personalityTraits: ["Calm", "Gentle", "Low maintenance", "Indoor"],
    imageUrl: "/1.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "adopted-soon"
  },
  {
    id: "28",
    name: "Rufus",
    type: "dog",
    breed: "Husky",
    ageYears: 5,
    size: "large",
    gender: "male",
    city: "Columbus",
    state: "OH",
    description:
      "Energized and social. Rufus loves activity, can be vocal, and enjoys a dedicated routine with time for play.",
    personalityTraits: ["Active", "Playful", "Social", "Smart"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: true,
    status: "available"
  },
  {
    id: "29",
    name: "Sadie",
    type: "dog",
    breed: "Poodle",
    ageYears: 2,
    size: "medium",
    gender: "female",
    city: "Seattle",
    state: "WA",
    description:
      "Gentle and clever. Sadie enjoys structured walks, learning new tricks, and calm affection at home.",
    personalityTraits: ["Smart", "Gentle", "Low maintenance", "Calm indoors"],
    imageUrl: "/3.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "pending"
  },
  {
    id: "30",
    name: "Kiwi",
    type: "cat",
    breed: "Sphynx",
    ageYears: 1,
    size: "small",
    gender: "female",
    city: "Austin",
    state: "TX",
    description:
      "Affectionate and curious. Kiwi loves warm laps, gentle handling, and short bursts of playful exploration.",
    personalityTraits: ["Affectionate", "Curious", "Low maintenance", "Indoor"],
    imageUrl: "/2.jpeg",
    isVaccinated: true,
    isNeutered: true,
    isGoodWithKids: false,
    isGoodWithOtherPets: true,
    status: "available"
  }
];

function appendCacheBuster(url: string, seed: number) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}cachebust=${seed}`;
}

// Direct Unsplash photo URLs (not `source.unsplash.com`), so images are stable.
// Each pet still receives a unique URL by appending `cachebust`.
const DOG_IMAGE_BASES: string[] = [
  "https://images.unsplash.com/photo-1685891982758-200fc8f61352?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1656166141133-f97c0267f519?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622964430174-052069e0e1ad?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1510993397587-b144e950b887?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const CAT_IMAGE_BASES: string[] = [
  "https://images.unsplash.com/photo-1772744199511-599b22472a91?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709398668435-bc1222eb405e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1741383766260-657878cd1d90?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const RABBIT_IMAGE_BASES: string[] = [
  "https://images.unsplash.com/photo-1716996784266-5bb3961eabb4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551102450-62aec75cd0bc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1696089622129-7466db52e7af?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const OTHER_IMAGE_BASES: string[] = [
  // Using guinea pig images for small pets in the current mock dataset.
  "https://images.unsplash.com/photo-1658938821728-1b31dc0ef4c1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1743611146293-621807011dab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function getPetUnsplashImageUrl(pet: Pet, seed: number) {
  const index = (seed - 1) % 3;

  if (pet.type === "dog") {
    const base = DOG_IMAGE_BASES[(seed - 1) % DOG_IMAGE_BASES.length];
    return appendCacheBuster(base, seed);
  }

  if (pet.type === "cat") {
    const base = CAT_IMAGE_BASES[index];
    return appendCacheBuster(base, seed);
  }

  if (pet.type === "rabbit") {
    const base = RABBIT_IMAGE_BASES[index];
    return appendCacheBuster(base, seed);
  }

  const base = OTHER_IMAGE_BASES[(seed - 1) % OTHER_IMAGE_BASES.length];
  return appendCacheBuster(base, seed);
}

export const MOCK_PETS: Pet[] = MOCK_PETS_RAW.map((pet, index) => ({
  ...pet,
  imageUrl: getPetUnsplashImageUrl(pet, index + 1)
}));

