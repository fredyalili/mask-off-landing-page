export interface Mask {
  id: string
  name: string
  origin: string
  description: string
  image: string
}

export const masks: Mask[] = [
  {
    id: "bamileke",
    name: "Bamileke Mask",
    origin: "Cameroon",
    description: "From Cameroon, this mask is used by the Bamileke people in royal events. Inspired by animals like elephants, it symbolizes power, protection, and status within the community.",
    image: "/masks/bamileke-mask.svg"
  },
  {
    id: "kyogen",
    name: "Kyogen Mask",
    origin: "Japan",
    description: "From Japan, this mask is used in Kyogen, the comedic part of Noh theatre. It shows exaggerated expressions and brings humor through silly and ironic characters.",
    image: "/masks/kyogen-mask.svg"
  },
  {
    id: "elvisi",
    name: "Elvisi Mask",
    origin: "Congo",
    description: "Made by the Lega people of Congo, the Elvisi mask is used in Bwami rituals. It teaches morals and wisdom through its simple form, guiding members in social and spiritual life.",
    image: "/masks/elvisi-mask.svg"
  },
  {
    id: "maori",
    name: "Maori Mask",
    origin: "New Zealand",
    description: "Inspired by Maori moko tattoos, these masks reflect identity, ancestry, and rank. They connect to sacred traditions and are often used in dances today.",
    image: "/masks/maori-mask.svg"
  },
  {
    id: "vuvi",
    name: "Vuvi Mask",
    origin: "Gabon",
    description: "From the Vuvi people of Gabon, this mask is used in funerals and rituals. Its round face connects the living with ancestors, symbolizing peace and protection.",
    image: "/masks/vuvi-mask.svg"
  },
  {
    id: "oldest",
    name: "Oldest Mask",
    origin: "Judean Desert",
    description: "Over 9,000 years old, this mask was found in the Judean Desert. It likely had ritual use by early Neolithic people, showing early spiritual or social beliefs.",
    image: "/masks/oldest-mask.svg"
  },
  {
    id: "bamana",
    name: "Bamana Mask",
    origin: "Mali",
    description: "From Mali's Bamana people, this mask is worn during dances and rites. It teaches values like respect and balance, reflecting farming life and spiritual beliefs.",
    image: "/masks/bamana-mask.svg"
  },
  {
    id: "kwakwaka",
    name: "Kwakwaka Mask",
    origin: "Canada",
    description: "Made by the Kwakwaka'wakw people of Canada, this mask has moving parts and bright colors. It's used in dances to tell stories of spirits and ancestors.",
    image: "/masks/kwakwaka-mask.svg"
  },
  {
    id: "tlaloc",
    name: "Tlaloc Mask",
    origin: "Aztec",
    description: "This Aztec mask honors Tlaloc, the rain god. With big eyes and fangs, it was used in ceremonies for rain and crops, showing the power of nature and gods.",
    image: "/masks/tlaloc-mask.svg"
  },
  {
    id: "boes",
    name: "Boes Mask",
    origin: "Sardinia, Italy",
    description: "This wild-looking mask from Sardinia, Italy, is used in carnivals. It's meant to scare away evil spirits and bring in spring through noise and celebration.",
    image: "/masks/boes-mask.svg"
  }
]
