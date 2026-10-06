export type Project = {
  slug: string;
  name: string;
  place: string;
  year: string;
  kind: "House" | "Heritage" | "Hospitality";
  image: string;
  alt: string;
  line: string;
  study: string[];
  changes: string[];
  facts: { label: string; value: string }[];
};

export const FEATURED: Project = {
  slug: "low-house",
  name: "Low House",
  place: "Wolsingham",
  year: "2024",
  kind: "House",
  image: "/images/low-house.jpg",
  alt: "Low House, Wolsingham: a long limestone farmhouse with a pale limewashed wing.",
  line: "A long limestone house. A limewashed wing for the kitchen. The old rooms left alone.",
  study: [
    "The house sits on the edge of Wolsingham, one room deep, facing the lane. The family wanted somewhere to cook and sit, and a room to work, without opening the old house into a single space.",
    "The wing is set back from the front wall and kept lower than the existing eaves. It is limewashed, so it reads as a later piece rather than a pretence of the original stone. The junction, where new work meets old, took longer than the planning application.",
    "The old rooms were repaired: floors, windows, the fireplaces left where they were. We stayed with the job from the feasibility through to completion.",
  ],
  changes: [
    "A limewashed wing, lower than the old eaves.",
    "A kitchen, and a room to work.",
    "The original rooms repaired and left as rooms.",
  ],
  facts: [
    { label: "Place", value: "Wolsingham, Weardale" },
    { label: "Completed", value: "2024" },
    { label: "Work", value: "Extension and repair" },
    { label: "For", value: "A private house" },
  ],
};

export const FURTHER: Project[] = [
  {
    slug: "chapel",
    name: "The Chapel",
    place: "Romaldkirk",
    year: "2021",
    kind: "Heritage",
    image: "/images/chapel.jpg",
    alt: "The Chapel, Romaldkirk: a small limestone chapel with a repaired slate roof.",
    line: "Listed. The slate roof repaired, and the building still used.",
    study: [
      "A small listed chapel in the village. The slate had failed and water was sitting in the roof. The room was still used, and the brief was to keep it that way.",
      "We wrote the repair specification and the listed building consent. The roof was stripped and relaid in the same slate, with leadwork only where the old lead had already gone. No new openings.",
      "The interior was dried out, the plaster repaired where it had failed, and then left. There is no new use hiding inside an old one.",
    ],
    changes: [
      "The slate roof stripped and relaid.",
      "Listed building consent for the repair.",
      "The interior dried out and still used.",
    ],
    facts: [
      { label: "Place", value: "Romaldkirk, Teesdale" },
      { label: "Completed", value: "2021" },
      { label: "Work", value: "Listed repair" },
      { label: "For", value: "A chapel still in use" },
    ],
  },
  {
    slug: "black-bull",
    name: "Black Bull",
    place: "Eggleston",
    year: "2019",
    kind: "Hospitality",
    image: "/images/black-bull.jpg",
    alt: "Black Bull, Eggleston: a two-storey stone inn with sash windows.",
    line: "A stone inn. The dining room opened to the yard, and a few rooms above.",
    study: [
      "The inn was still trading, from a small bar and a kitchen that could not serve the room next to it. The building is a two-storey stone house with sash windows, on the green at Eggleston.",
      "The dining room was opened toward the yard with a stone pier and a timber screen, not a wall of glass. Upstairs, three rooms were repaired for guests. The bar stayed where it was.",
      "We did not take another hospitality job until this one was open. The work ran from the first feasibility to the end of the building contract.",
    ],
    changes: [
      "The dining room opened to the yard.",
      "Three rooms upstairs repaired for guests.",
      "The bar and the front left as they were.",
    ],
    facts: [
      { label: "Place", value: "Eggleston, Teesdale" },
      { label: "Completed", value: "2019" },
      { label: "Work", value: "Dining room and bedrooms" },
      { label: "For", value: "An inn, still trading" },
    ],
  },
  {
    slug: "lartington-barn",
    name: "Barn at Lartington",
    place: "Lartington",
    year: "2023",
    kind: "House",
    image: "/images/barn.jpg",
    alt: "Barn at Lartington: a stone barn with new timber window openings.",
    line: "A barn made into a house. New timber windows in the old openings.",
    study: [
      "A stone barn in the village, not standing alone in a field. The brief was a house for two, using the volume that was already there.",
      "New timber windows sit in the old openings. One new opening was made on the yard side, where the cart door had been. The outside walls are the old walls. Nothing was added into the field.",
      "The upper floor is a sleeping room under the existing roof. The ground floor is for cooking and sitting. Planning turned on that restraint, not on a larger house.",
    ],
    changes: [
      "Timber windows in the existing openings.",
      "One new opening, where the cart door was.",
      "No extension beyond the old walls.",
    ],
    facts: [
      { label: "Place", value: "Lartington" },
      { label: "Completed", value: "2023" },
      { label: "Work", value: "Barn conversion" },
      { label: "For", value: "A house for two" },
    ],
  },
];

export const MORE: Project[] = [
  {
    slug: "mill-house",
    name: "Mill House",
    place: "Stanhope",
    year: "2022",
    kind: "House",
    image: "/images/mill-house.jpg",
    alt: "Mill House, Stanhope: a long sandstone house with a pale limewashed wing.",
    line: "A mill house above the Wear. A lower wing for the kitchen, the old rooms left as they were.",
    study: [
      "The house is long and one room deep, above the river at Stanhope. It had been a mill house, then a house, and the family wanted a kitchen they could sit in without taking down the wall between the old rooms.",
      "The wing is limewashed and kept below the existing eaves, so it reads as later work. The mill race is still in the ground. We did not build over it.",
      "The old windows were repaired. One new opening was made on the yard side, where a later lean-to had already broken the wall.",
    ],
    changes: [
      "A limewashed wing, lower than the old eaves.",
      "The mill race left in the ground.",
      "One new opening, where a lean-to had been.",
    ],
    facts: [
      { label: "Place", value: "Stanhope, Weardale" },
      { label: "Completed", value: "2022" },
      { label: "Work", value: "Extension and repair" },
      { label: "For", value: "A private house" },
    ],
  },
  {
    slug: "the-fold",
    name: "The Fold",
    place: "Middleton-in-Teesdale",
    year: "2020",
    kind: "House",
    image: "/images/the-fold.jpg",
    alt: "The Fold, Middleton-in-Teesdale: a small stone cottage in a farm yard.",
    line: "A cottage in a farm fold. Made fit to live in, without a new house beside it.",
    study: [
      "A small stone cottage at the back of a working fold. The brief was a house for two, using the building that was already there, and leaving the yard to the farm.",
      "New timber windows sit in the old openings. The roof was relaid in the same slate. A bathroom was made in a space that had been a store, not by pushing the wall out.",
      "We did not take the field. The fold still works as a fold.",
    ],
    changes: [
      "Timber windows in the existing openings.",
      "The slate roof relaid.",
      "No new building in the yard.",
    ],
    facts: [
      { label: "Place", value: "Middleton-in-Teesdale" },
      { label: "Completed", value: "2020" },
      { label: "Work", value: "Repair and alteration" },
      { label: "For", value: "A house beside a working farm" },
    ],
  },
  {
    slug: "west-cottage",
    name: "West Cottage",
    place: "Gainford",
    year: "2018",
    kind: "House",
    image: "/images/west-cottage.jpg",
    alt: "West Cottage, Gainford: a two-storey stone cottage with timber sash windows.",
    line: "A village cottage. New sashes, a repaired roof, and the plan left almost as it was.",
    study: [
      "A two-storey cottage on the edge of Gainford. The windows had been replaced with a later plastic frame, and the roof was tired. The rooms themselves were sound.",
      "Timber sashes went back into the old openings. The slate was sorted and relaid. Inside, the stair stayed where it was. A small kitchen was made from two cramped stores.",
      "The work was a feasibility first. The cottage did not need a planning application for most of what was done.",
    ],
    changes: [
      "Timber sashes in the old openings.",
      "The slate roof sorted and relaid.",
      "A kitchen made from two stores.",
    ],
    facts: [
      { label: "Place", value: "Gainford" },
      { label: "Completed", value: "2018" },
      { label: "Work", value: "Repair" },
      { label: "For", value: "A private house" },
    ],
  },
  {
    slug: "old-school",
    name: "The Old School",
    place: "Gainford",
    year: "2023",
    kind: "Heritage",
    image: "/images/old-school.jpg",
    alt: "The Old School, Gainford: a small stone school with a repaired slate roof.",
    line: "A listed schoolroom. The roof repaired, and the room still used by the village.",
    study: [
      "A small listed school, no longer a school, still used for the village. Water was coming through the slate, and the tall sashes had dropped.",
      "We wrote the repair specification and the listed building consent. The roof was stripped and relaid. The sashes were eased and reglazed, not replaced.",
      "No new use was invented for the room. It is still one room, with the same door.",
    ],
    changes: [
      "The slate roof stripped and relaid.",
      "The tall sashes repaired.",
      "Listed consent for the repair, and nothing else.",
    ],
    facts: [
      { label: "Place", value: "Gainford" },
      { label: "Completed", value: "2023" },
      { label: "Work", value: "Listed repair" },
      { label: "For", value: "A room the village still uses" },
    ],
  },
  {
    slug: "bridge-house",
    name: "Bridge House",
    place: "Startforth",
    year: "2017",
    kind: "Heritage",
    image: "/images/bridge-house.jpg",
    alt: "Bridge House, Startforth: a sandstone townhouse with sash windows beside the river.",
    line: "A listed townhouse by the bridge. The front left alone. The back made fit to live in.",
    study: [
      "A sandstone house of three storeys, listed, facing the bridge at Startforth. The front was sound. The back had been altered badly in the 1970s, and the lower floor was damp.",
      "The listed consent covered taking out the later porch and putting a timber sash back into an opening that had been widened. The front elevation was not touched.",
      "Inside, the stair stayed. The basement was tanked only where the river had already made it necessary, and then left as stores.",
    ],
    changes: [
      "A later porch removed.",
      "One sash put back into a widened opening.",
      "The front elevation left alone.",
    ],
    facts: [
      { label: "Place", value: "Startforth" },
      { label: "Completed", value: "2017" },
      { label: "Work", value: "Listed alteration" },
      { label: "For", value: "A private house" },
    ],
  },
  {
    slug: "vicarage",
    name: "The Vicarage",
    place: "Bowes",
    year: "2016",
    kind: "Heritage",
    image: "/images/vicarage.jpg",
    alt: "The Vicarage, Bowes: a plain two-storey stone house with a repaired slate roof.",
    line: "A former vicarage. The roof repaired, and the house split back into what it had been.",
    study: [
      "A plain stone house that had been the vicarage, then two flats, then empty. It is listed. The brief was one house again, without a new wing.",
      "The roof was the first job: slate sorted, lead only where lead had already failed. The flats were taken out. The original stair, which had been boxed in, was opened.",
      "Two later doorways in the garden wall were built back up in stone to match. That was the extent of the new work.",
    ],
    changes: [
      "The slate roof repaired.",
      "Two flats returned to one house.",
      "Later doorways in the garden wall built back up.",
    ],
    facts: [
      { label: "Place", value: "Bowes" },
      { label: "Completed", value: "2016" },
      { label: "Work", value: "Listed repair" },
      { label: "For", value: "A private house" },
    ],
  },
  {
    slug: "the-rose",
    name: "The Rose",
    place: "Romaldkirk",
    year: "2022",
    kind: "Hospitality",
    image: "/images/the-rose.jpg",
    alt: "The Rose, Romaldkirk: a two-storey stone inn with sash windows.",
    line: "A village inn. The dining room repaired, and four rooms upstairs made fit for guests.",
    study: [
      "The inn faces the green at Romaldkirk. It was still open, three nights a week, from a kitchen that could not serve more than the bar.",
      "The dining room was repaired rather than extended: the floor taken up, the old flags relaid, a new kitchen made in the room that had been the cellar store. No glass extension on the green.",
      "Four rooms upstairs were repaired for guests. We did not take a second hospitality job until these rooms were furnished.",
    ],
    changes: [
      "The dining room repaired, not extended.",
      "A kitchen made in the old store.",
      "Four rooms upstairs for guests.",
    ],
    facts: [
      { label: "Place", value: "Romaldkirk" },
      { label: "Completed", value: "2022" },
      { label: "Work", value: "Dining room and bedrooms" },
      { label: "For", value: "An inn, still open" },
    ],
  },
  {
    slug: "grey-house",
    name: "Grey House",
    place: "Reeth",
    year: "2018",
    kind: "Hospitality",
    image: "/images/grey-house.jpg",
    alt: "Grey House, Reeth: a two-storey stone house with sash windows on a village green.",
    line: "A house on the green, let as rooms. The front left as a house. The back opened to a yard.",
    study: [
      "A stone house on the green at Reeth, used for a few guest rooms and a breakfast room. It is not a large hotel, and the brief was to keep it looking like a house.",
      "The front and the sashes were repaired and left. At the back, a store was opened to the yard with a timber screen, so breakfast could be taken outside in the months that allow it.",
      "Five rooms upstairs. No function room. We were clear about that at the feasibility, and the job stayed that size.",
    ],
    changes: [
      "The front repaired and left as a house.",
      "A store opened to the yard.",
      "Five guest rooms, and no function room.",
    ],
    facts: [
      { label: "Place", value: "Reeth, Swaledale" },
      { label: "Completed", value: "2018" },
      { label: "Work", value: "Guest rooms" },
      { label: "For", value: "A house let as rooms" },
    ],
  },
];

export const PROJECTS: Project[] = [FEATURED, ...FURTHER, ...MORE];

export const GALLERY: Record<string, { image: string; alt: string }[]> = {
  "low-house": [
    { image: "/images/low-house-2.jpg", alt: "Low House from the gable end, with the limewashed wing along the side." },
    { image: "/images/low-house-3.jpg", alt: "The front door and nearest windows of Low House." },
  ],
  chapel: [
    { image: "/images/chapel-2.jpg", alt: "The Chapel at Romaldkirk, seen closer from the front corner." },
    { image: "/images/chapel-3.jpg", alt: "The entrance door of the Chapel and the stone around it." },
  ],
  "black-bull": [
    { image: "/images/black-bull-2.jpg", alt: "The Black Bull from the yard side, showing the length of the inn." },
    { image: "/images/black-bull-3.jpg", alt: "The front door and ground-floor sash windows of the Black Bull." },
  ],
  "lartington-barn": [
    { image: "/images/barn-2.jpg", alt: "The barn at Lartington, closer, with the timber windows in the old openings." },
    { image: "/images/barn-3.jpg", alt: "A timber window set in the stone wall of the barn at Lartington." },
  ],
  "mill-house": [
    { image: "/images/mill-house-2.jpg", alt: "Mill House from along the front, with the pale wing still visible." },
    { image: "/images/mill-house-3.jpg", alt: "The entrance and stone quoins of Mill House." },
  ],
  "the-fold": [
    { image: "/images/the-fold-2.jpg", alt: "The Fold from inside the farm yard, closer to the cottage door." },
    { image: "/images/the-fold-3.jpg", alt: "The cottage door and a small timber window at The Fold." },
  ],
  "west-cottage": [
    { image: "/images/west-cottage-2.jpg", alt: "West Cottage from the side, showing the depth of the house." },
    { image: "/images/west-cottage-3.jpg", alt: "The front door and sash windows of West Cottage." },
  ],
  "old-school": [
    { image: "/images/old-school-2.jpg", alt: "The Old School closer to the entrance and the tall windows." },
    { image: "/images/old-school-3.jpg", alt: "The school entrance and one tall sash window." },
  ],
  "bridge-house": [
    { image: "/images/bridge-house-2.jpg", alt: "Bridge House from along the street, an oblique view of the front." },
    { image: "/images/bridge-house-3.jpg", alt: "The front door and ground-floor windows of Bridge House." },
  ],
  vicarage: [
    { image: "/images/vicarage-2.jpg", alt: "The Vicarage from the garden side." },
    { image: "/images/vicarage-3.jpg", alt: "The front door and sash windows of the Vicarage." },
  ],
  "the-rose": [
    { image: "/images/the-rose-2.jpg", alt: "The Rose from the gable end." },
    { image: "/images/the-rose-3.jpg", alt: "The entrance and nearest windows of The Rose." },
  ],
  "grey-house": [
    { image: "/images/grey-house-2.jpg", alt: "Grey House from the side, towards the yard." },
    { image: "/images/grey-house-3.jpg", alt: "The front door and ground-floor windows of Grey House." },
  ],
};
