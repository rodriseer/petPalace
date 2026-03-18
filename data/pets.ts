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

export const MOCK_PETS: Pet[] = [
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
      "A gentle, people-oriented companion who loves slow walks and cozy evenings on the couch.",
    personalityTraits: ["Gentle", "Affectionate", "Apartment-friendly"],
    imageUrl:
      "https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    personalityTraits: ["Calm", "Independent", "Low-maintenance"],
    imageUrl:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    personalityTraits: ["Playful", "Family-friendly", "Active"],
    imageUrl:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/979503/pexels-photo-979503.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    personalityTraits: ["Gentle", "Quiet", "Low-noise"],
    imageUrl:
      "https://images.pexels.com/photos/247373/pexels-photo-247373.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isVaccinated: true,
    isNeutered: false,
    isGoodWithKids: true,
    isGoodWithOtherPets: true,
    status: "available"
  }
];

