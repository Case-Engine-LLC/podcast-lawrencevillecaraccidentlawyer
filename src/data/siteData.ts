/**
 * Site Data — Lawson Personal Injury Attorneys
 * Sourced from the firm's Podcast Show Bible (zip_195524) on 2026-04-30.
 * Fields flagged "NEEDS CONFIRMATION" in the Bible are left at neutral defaults
 * rather than fabricated.
 */

export const siteConfig = {
  "podcastName": "Lawrenceville Car Accident Law w. Yari Lawson",
  "tagline": "We Don't Flinch",
  "podcastUrl": "https://podcast-lawrencevillecaraccidentlawyer.vercel.app",
  "platformLinks": {
    "apple": "#",
    "spotify": "#"
  },
  "formCTA": {
    "text": "Free Consultation",
    "href": "#form"
  }
};

export const episode = {
  "number": 1,
  "title": "What to Do After a Car Accident in Lawrenceville, Georgia",
  "date": "01.15.24",
  "duration": "00:45:30",
  "description": "Yari Lawson, founder of Lawson Personal Injury Attorneys and a former prosecutor with 20+ years of trial experience, walks through the practical first steps for anyone injured in a car wreck on I-85, I-285, or anywhere in Gwinnett County. She breaks down what to say to the insurance adjuster who calls the next day, how Georgia's comparative negligence rule changes the calculus, and the documentation mistakes that quietly cost people thousands."
};

export const attorney = {
  "name": "Yari Lawson",
  "firm": "Lawson Personal Injury Attorneys",
  "title": "Principal Trial Attorney & Founder",
  "bio": [
    "Yari Lawson is the Principal Trial Attorney and founder of Lawson Personal Injury Attorneys in Lawrenceville, Georgia. With 20+ years of trial experience and a background as a former prosecutor, Yari has spent her career studying how the other side builds and attacks injury cases. That perspective shapes how the firm represents clients in Gwinnett County and the broader metro Atlanta area: every case is built the way a prosecutor builds a case, knowing exactly how the defense and the insurance company will come at it.",
    "Lawson Personal Injury Attorneys handles serious injury and wrongful death matters across Georgia, including car accidents, truck accidents, motorcycle crashes, traumatic brain injuries, catastrophic injuries, slip and fall cases, dog bites, pedestrian and rideshare incidents, premises liability, and product liability. The firm's brand line, \"Serious Injuries Demand Relentless Lawyers. We Don't Flinch,\" reflects how Yari approaches insurance carriers, trucking companies, and defense firms on behalf of clients.",
    "Yari created this podcast as part of an owned-funnel approach to client communication. Rather than buying billboards or rented leads, she puts plain-language injury education in front of the people who need it most, scared, in pain, and trying to figure out whether they have a case at 11pm from their couch. Episodes treat Spanish-speaking listeners with the same depth and respect as English-speakers, reflecting the multilingual client base the firm serves in metro Atlanta."
  ],
  "signature": "/images/signature.png",
  "photo": "/images/attorney.jpg"
};

export const contact = {
  "address": "320 South Perry Street, Lawrenceville, GA 30046",
  "phone": "(678) 446-3655",
  "email": "contact@lawsonfirm.com",
  "website": "https://www.lawsonfirm.com/en"
};

export const compliance: {
  jurisdiction: string
  firm: string
  responsibleAttorneys: { name: string; barNumber: string }[]
  disclaimers: { kind: string; text: string }[]
} = {
  "jurisdiction": "GA",
  "firm": "Lawson Personal Injury Attorneys",
  "responsibleAttorneys": [
    { "name": "Yari Lawson", "barNumber": "" }
  ],
  "disclaimers": [
    {
      "kind": "advertising",
      "text": "This podcast is attorney advertising under the Georgia Rules of Professional Conduct. The information presented is for general educational purposes only and is not legal advice. Listening to this podcast does not create an attorney-client relationship with Yari Lawson or Lawson Personal Injury Attorneys."
    },
    {
      "kind": "no-results-guarantee",
      "text": "Past results do not guarantee similar outcomes. Every case is unique and must be evaluated on its own facts. Hiring a lawyer is an important decision that should not be based solely on advertising."
    },
    {
      "kind": "jurisdiction",
      "text": "Lawson Personal Injury Attorneys is licensed to practice law in Georgia. Out-of-state matters are handled in association with locally licensed counsel where required by Georgia Rule of Professional Conduct 5.5."
    }
  ]
};

export const chapters = [
  {
    "number": 1,
    "title": "First Moves at the Scene of a Crash",
    "active": false
  },
  {
    "number": 2,
    "title": "How Georgia's Comparative Negligence Rule Works",
    "active": false
  },
  {
    "number": 3,
    "title": "What to Say (and Not Say) to the Insurance Adjuster",
    "active": false
  },
  {
    "number": 4,
    "title": "Why the Defense Will Argue You Caused Your Own Injuries",
    "active": false
  },
  {
    "number": 5,
    "title": "When a Case Settles and When It Goes to Trial",
    "active": false
  }
];

export const faqGroups = [
  {
    "label": "About the Podcast",
    "description": "How this show is structured and who it's for",
    "questions": [
      {
        "question": "What does Yari Lawson cover on this podcast?",
        "level": "h2",
        "answer": "Each episode takes one real injury scenario, a car wreck on I-85, a truck collision on I-285, a slip and fall at a big box store, a dog bite in a Lawrenceville neighborhood, and walks through it completely. Yari, a former prosecutor with 20+ years of trial experience, explains how the defense will attack the case, what the injured client should do this week, and how Georgia law applies. Topics include car accidents, truck accidents, motorcycle crashes, wrongful death, traumatic brain injuries, slip and falls, dog bites, pedestrian and rideshare cases, premises liability, and product liability."
      },
      {
        "question": "How often are new episodes released?",
        "level": "h3",
        "answer": "New episodes drop weekly. The full format runs 60-90 minutes; shorter extension episodes run 20-30 minutes when the topic is tighter."
      },
      {
        "question": "Who is this podcast for?",
        "level": "h3",
        "answer": "People in Lawrenceville, Gwinnett County, and the broader metro Atlanta area who have just been injured in an accident, family members researching options on their behalf, and Spanish-speaking residents trying to understand the legal system. Adjacent attorneys and medical providers who refer or treat injury patients also use the show as a reference for how cases actually move through the Georgia system."
      },
      {
        "question": "Does Yari speak Spanish on the show?",
        "level": "h3",
        "answer": "The firm serves a multilingual client base in metro Atlanta and publishes Spanish-language client testimonials. Episodes are produced in English with Spanish-accessible distribution, and listeners who need a Spanish-speaking team member at the firm can reach Lawson Personal Injury Attorneys directly at (678) 446-3655."
      }
    ]
  },
  {
    "label": "Personal Injury Law in Georgia",
    "description": "Common questions about how injury cases actually work in Lawrenceville and Gwinnett County",
    "questions": [
      {
        "question": "How long do I have to file a personal injury claim in Georgia?",
        "level": "h2",
        "answer": "Georgia's statute of limitations for most personal injury cases is two years from the date of the injury (O.C.G.A. § 9-3-33). Shorter deadlines apply to claims against government entities and longer deadlines apply to certain wrongful death scenarios. Because evidence and witness memory degrade quickly, the firm recommends speaking with an attorney as soon as you are medically able rather than waiting near the deadline."
      },
      {
        "question": "What can I recover in a Lawrenceville personal injury case?",
        "level": "h2",
        "answer": "Georgia injury victims may recover medical expenses (past and future), lost wages and lost earning capacity, pain and suffering, property damage, and in catastrophic cases punitive damages where the defendant's conduct shows willful or reckless disregard. In wrongful death claims, surviving family members may recover the full value of the decedent's life under O.C.G.A. § 51-4-2."
      },
      {
        "question": "Do I need a lawyer to handle my car accident in Gwinnett County?",
        "level": "h3",
        "answer": "It is not legally required, but unrepresented claimants typically settle for less. Insurance companies move fast on first offers because they know an unrepresented person does not yet know what their case is worth, what future medical care will cost, or how Georgia's comparative negligence rule will be argued. Yari's prosecutorial background means she anticipates defense moves before the carrier makes them."
      },
      {
        "question": "What should I do immediately after an accident in Georgia?",
        "level": "h3",
        "answer": "Get medical attention even if you feel \"mostly okay,\" call the police and get a report number, photograph the scene and the vehicles, collect contact information from any witnesses, and avoid recorded statements with the other driver's insurance company until you have spoken with a lawyer. If you can, contact Lawson Personal Injury Attorneys before the adjuster from the at-fault carrier reaches you."
      }
    ]
  }
];

export const content = {
  "heroTitle": "Lawrenceville Car Accident Law w. Yari Lawson",
  "heroDescription": "A weekly conversation with Yari Lawson, Principal Trial Attorney and former prosecutor, about how serious injury cases actually move through the Georgia courts. Episodes are recorded in Lawrenceville and built for people in Gwinnett County and the broader metro Atlanta area who have just been hurt and need to understand what happens next.",
  "articleTitle": "Plain-Language Injury Education for Gwinnett County and Metro Atlanta",
  "articleParagraphs": [
    "Most legal content in metro Atlanta either reads like a textbook or sounds like a sales pitch. This show fills the gap. Each episode takes one specific Georgia situation, a wreck on I-85, a slip and fall at a big box store, a dog bite in a Lawrenceville neighborhood, and walks through what the injured person actually needs to know. Not five tips. Not vague theory. The real thing.",
    "Yari Lawson's prosecutorial background is what makes this show different from every other PI podcast in the Atlanta market. She has spent her career studying how cases are attacked from every angle, and she explains those attacks in advance so listeners can protect themselves before the defense ever takes a shot. The firm serves a multilingual client base, and the show treats Spanish-speaking listeners with the same depth as English-speakers."
  ],
  "featuredQuote": "Serious injuries demand relentless lawyers. We don't flinch.",
  "additionalParagraphs": []
};

export const testimonials = [
  {
    "id": 1,
    "name": "Michael T.",
    "initials": "MT",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "Yari Lawson and the team at Lawson Personal Injury Attorneys handled my car accident case with professionalism and compassion. They kept me informed every step of the way and secured a settlement that exceeded my expectations. I highly recommend them to anyone in Lawrenceville dealing with a personal injury."
  },
  {
    "id": 2,
    "name": "Jennifer R.",
    "initials": "JR",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "After my truck accident, I was overwhelmed and didn't know where to turn. Yari Lawson took the time to explain the legal process and fought hard for my rights. The settlement allowed me to focus on recovery without financial stress. I'm grateful for their dedication."
  },
  {
    "id": 3,
    "name": "David M.",
    "initials": "DM",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "The Lawson firm handled my slip and fall case with expertise and care. Yari Lawson personally made sure I understood my options and worked tirelessly to hold the property owner accountable. Their attention to detail made all the difference in my case outcome."
  },
  {
    "id": 4,
    "name": "Sarah K.",
    "initials": "SK",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "I cannot say enough good things about Yari Lawson and the entire team. They handled my motorcycle accident case with such professionalism and secured compensation that covered all my medical bills and lost wages. They truly care about their clients in Lawrenceville."
  },
  {
    "id": 5,
    "name": "Robert P.",
    "initials": "RP",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "Yari Lawson is an outstanding attorney who genuinely fights for justice. After my pedestrian accident, the insurance company tried to deny my claim, but Yari didn't back down. The result was a fair settlement that changed my life. Highly recommended for anyone needing a personal injury lawyer."
  },
  {
    "id": 6,
    "name": "Amanda L.",
    "initials": "AL",
    "role": "Google Reviewer",
    "rating": 5,
    "text": "Working with Lawson Personal Injury Attorneys was the best decision I made after my accident. Yari Lawson is knowledgeable, responsive, and truly cares about clients. They made a difficult time much easier and delivered results that exceeded what I thought was possible."
  }
];

export const stats = {
  "rating": 0,
  "reviewCount": 0,
  "satisfactionRate": 0,
  "satisfactionLabel": "",
  "satisfactionVerbalization": "TODO: Populate from verified third-party review platform data (Google Business Profile, Avvo) before launch. Per the Georgia Rules of Professional Conduct, numeric claims about client satisfaction require substantiation.",
  "casesHandled": 20,
  "casesLabel": "20+ Years of Trial Experience",
  "casesVerbalization": "Yari Lawson brings more than 20 years of Georgia trial experience and a former-prosecutor's perspective on how the defense will attack every case. Past results do not guarantee similar outcomes.",
  "ratingVerbalization": "TODO: Populate rating and review count from Lawson Personal Injury Attorneys' verified Google Business Profile. Per Georgia RPC 7.1, star-rating claims require citation to the verifiable source."
};

export const navigation = {
  "logo": "Lawson Personal Injury Attorneys",
  "items": [
    {
      "name": "Episodes",
      "href": "#episodes"
    },
    {
      "name": "About",
      "href": "#about"
    },
    {
      "name": "Contact",
      "href": "#contact"
    }
  ],
  "ctaText": "Subscribe",
  "ctaHref": "#subscribe"
};

export const footer = {
  "logo": "Lawson Personal Injury Attorneys",
  "description": "Lawrenceville Car Accident Law w. Yari Lawson is the firm's owned-funnel podcast. Yari is the Principal Trial Attorney at Lawson Personal Injury Attorneys, a former prosecutor with 20+ years of courtroom experience serving Lawrenceville, Gwinnett County, and the broader metro Atlanta area. Serious injuries demand relentless lawyers.",
  "copyright": "Lawson Personal Injury Attorneys",
  "socialLinks": {
    "twitter": "#",
    "linkedin": "#",
    "facebook": "#",
    "instagram": "#",
    "youtube": "#"
  }
};

export const awards = [
  {
    "name": "Principal Trial Attorney",
    "description": "Yari Lawson founded Lawson Personal Injury Attorneys to bring trial-tested representation to injury victims in Gwinnett County and metro Atlanta."
  },
  {
    "name": "Former Prosecutor",
    "description": "Yari spent years as a prosecutor before founding the firm, an experience that informs how she anticipates defense strategy in every injury matter."
  },
  {
    "name": "20+ Years of Trial Experience",
    "description": "Two decades of courtroom work spanning both sides of the aisle, with a focus on serious injury and wrongful death cases under Georgia law."
  }
];

export const about = {
  "title": "About Yari Lawson and Lawrenceville Car Accident Law",
  "description": "Yari Lawson is the Principal Trial Attorney and founder of Lawson Personal Injury Attorneys, a Lawrenceville-based firm representing injury and wrongful death clients across Gwinnett County and metro Atlanta. With 20+ years of trial experience and a former-prosecutor's perspective on how the other side attacks cases, Yari created this podcast to give plain-language injury education to the people who need it most, the scared, in-pain, 11pm-on-the-couch listener trying to figure out whether they even have a case. The firm serves a multilingual client base and treats Spanish-speaking listeners with the same depth as English-speakers.",
  "highlights": [
    "Hosted by a former prosecutor with 20+ years of trial experience in Georgia",
    "Single-topic episodes covering car, truck, motorcycle, and pedestrian accidents in Gwinnett County",
    "Plain-language explanations of Georgia comparative negligence, statute of limitations, and damages",
    "Practical first steps for anyone injured in metro Atlanta: what to say, what to document, who to call",
    "Strategic preview of how the defense and insurance companies will attack a case",
    "Bilingual-accessible content for the firm's Spanish-speaking client base in metro Atlanta"
  ],
  "showReadMore": false
};

export const subscribeCTA = {
  "title": "Never Miss an Episode",
  "description": "Subscribe to Lawrenceville Car Accident Law w. Yari Lawson to get a working knowledge of how Georgia personal injury cases actually move from incident to resolution. Each episode is a single deep topic, recorded in Lawrenceville, hosted by a Principal Trial Attorney who has spent 20+ years inside Georgia courtrooms.",
  "highlights": [
    "Get notified when new weekly episodes drop",
    "Hear how the defense and insurance companies build attacks before they happen",
    "Understand your rights under Georgia law and the Gwinnett County process",
    "Practical first steps you can take this week if you have just been injured",
    "Direct line to the firm at (678) 446-3655 for a free consultation"
  ]
};

export const episodes = [
  {
    "id": 1,
    "number": 1,
    "title": "What to Do After a Car Accident in Lawrenceville, Georgia",
    "subtitle": "Episode 1 • Lawson Personal Injury Attorneys",
    "description": "Yari Lawson breaks down the practical first steps every injured driver should take after a wreck in Gwinnett County, from documenting the scene on I-85 to handling the call you are about to get from the at-fault driver's insurance carrier. She also explains the early mistakes that quietly tank otherwise strong cases.",
    "duration": "28 min",
    "date": "January 15, 2025",
    "category": "Car Accidents",
    "featured": true,
    "topic": "Car Accident Rights",
    "concepts": [
      "Georgia statute of limitations",
      "Recorded statements and adjusters",
      "Comparative negligence",
      "Medical documentation"
    ],
    "chapters": [
      "First moves at the scene of a Gwinnett County crash",
      "What to say (and not say) to the adjuster",
      "How Georgia's comparative negligence rule cuts your recovery",
      "When to call a lawyer and what to expect",
      "Common early mistakes that tank an injury case"
    ],
    "logo": "/images/logo.svg"
  },
  {
    "id": 2,
    "number": 2,
    "title": "Truck Accidents on I-85 and I-285: Why They Are Different",
    "subtitle": "Episode 2 • Lawson Personal Injury Attorneys",
    "description": "Truck accident cases involve federal regulations, multiple liable parties, and time-sensitive evidence that disappears within days. Yari explains how the firm preserves black box and ELD data, identifies every defendant from driver to broker, and counters the trucking-defense playbook from the moment a wreck happens on a Georgia interstate.",
    "duration": "32 min",
    "date": "January 22, 2025",
    "category": "Truck Accidents",
    "featured": false,
    "topic": "Commercial Vehicle Accidents",
    "concepts": [
      "FMCSA regulations",
      "Multiple defendants",
      "Black box and ELD evidence",
      "Catastrophic injury damages"
    ],
    "chapters": [
      "Why truck cases are different from car cases under Georgia law",
      "Federal Motor Carrier Safety Regulations and how they create liability",
      "Identifying every defendant: driver, carrier, broker, shipper",
      "Preserving electronic logging data and black box evidence",
      "Building damages in a catastrophic injury or wrongful death claim"
    ],
    "logo": "/images/logo.svg"
  }
];

export const podcastTeam = [
  {
    "name": "Yari Lawson",
    "role": "Host & Principal Trial Attorney",
    "photo": "/images/team-member.jpg",
    "slug": "yari-lawson",
    "bio": "Yari Lawson is the founder of Lawson Personal Injury Attorneys and a former prosecutor with 20+ years of trial experience. She hosts every episode and grounds each conversation in real Lawrenceville, Gwinnett County, and metro Atlanta cases.",
    "episodes": "Host of all episodes"
  }
];

export const topicalEntryGrid = {
  "title": "Explore Georgia Personal Injury Topics",
  "tabs": [
    {
      "label": "Car Accidents",
      "links": [
        {
          "title": "Rear-End Collision Claims in Georgia",
          "description": "How fault is proved in a rear-end crash on I-85 or surface streets in Lawrenceville, and why the at-fault carrier still tries to argue comparative negligence.",
          "href": "#rear-end-collisions"
        },
        {
          "title": "Intersection Accidents",
          "description": "Liability in Gwinnett County intersection crashes, how Georgia traffic statutes assign fault, and what the police report does and does not prove.",
          "href": "#intersection-accidents"
        },
        {
          "title": "Hit and Run Cases",
          "description": "Recovery options when the at-fault driver flees, including how Georgia uninsured motorist coverage applies and what to document immediately.",
          "href": "#hit-and-run"
        },
        {
          "title": "Distracted Driving Accidents",
          "description": "How phone records, dash cam, and Georgia's hands-free law combine to prove negligence in metro Atlanta distracted-driving crashes.",
          "href": "#distracted-driving"
        }
      ]
    },
    {
      "label": "Truck Accidents",
      "links": [
        {
          "title": "Federal Trucking Regulations",
          "description": "How FMCSA hours-of-service, maintenance, and driver-qualification rules create liability against the trucking company, not just the driver.",
          "href": "#truck-regulations"
        },
        {
          "title": "Trucking Company Liability",
          "description": "When the carrier, broker, or shipper can be on the hook in Georgia for negligent hiring, training, supervision, or maintenance.",
          "href": "#trucking-company-liability"
        },
        {
          "title": "Black Box and ELD Evidence",
          "description": "How to preserve electronic logging device data, ECM downloads, and dashcam footage before the trucking-defense team destroys or overwrites it.",
          "href": "#black-box-evidence"
        },
        {
          "title": "Jackknife and Rollover Crashes",
          "description": "Catastrophic-injury cases on I-85 and I-285, why these wrecks usually involve catastrophic injury or wrongful death damages.",
          "href": "#jackknife-rollover"
        }
      ]
    },
    {
      "label": "Motorcycle Accidents",
      "links": [
        {
          "title": "Motorcycle Bias in Georgia Claims",
          "description": "How insurance carriers use rider stereotypes to discount motorcycle claims and how Lawson Personal Injury Attorneys counters them.",
          "href": "#motorcycle-bias"
        },
        {
          "title": "Lane Splitting and Georgia Law",
          "description": "Georgia prohibits lane splitting; how that statute affects liability when a passenger vehicle changes lanes into a rider.",
          "href": "#lane-splitting"
        },
        {
          "title": "Road Hazard and Premises Cases",
          "description": "When government entities or property owners can be held liable for dangerous road conditions that bring a motorcycle down.",
          "href": "#road-hazards"
        },
        {
          "title": "Helmets, Gear, and Damages",
          "description": "How protective equipment use influences both the injury picture and the legal arguments insurers raise about comparative fault.",
          "href": "#protective-gear"
        }
      ]
    },
    {
      "label": "Premises Liability",
      "links": [
        {
          "title": "Slip and Fall on Commercial Property",
          "description": "What Lawrenceville business owners must do to maintain safe premises and when they are liable for an invitee's injury under O.C.G.A. § 51-3-1.",
          "href": "#commercial-slip-fall"
        },
        {
          "title": "Inadequate Security and Negligent Security",
          "description": "When a property owner is responsible for criminal attacks because of poor lighting, unrepaired access controls, or ignored prior incidents.",
          "href": "#inadequate-security"
        },
        {
          "title": "Dog Bite Liability in Georgia",
          "description": "Georgia's dog bite statute (O.C.G.A. § 51-2-7), the \"first bite\" rule, and the evidence Lawson Personal Injury Attorneys gathers to prove the owner knew.",
          "href": "#dog-bite-liability"
        },
        {
          "title": "Swimming Pool and Drowning Cases",
          "description": "Premises liability for drownings and near-drownings tied to inadequate fencing, supervision, or warning signage.",
          "href": "#swimming-pool-accidents"
        }
      ]
    },
    {
      "label": "Wrongful Death",
      "links": [
        {
          "title": "Who Can File a Wrongful Death Claim",
          "description": "Georgia's wrongful death statute, the order of standing among surviving spouses, children, and parents, and how the estate's separate claim works.",
          "href": "#wrongful-death-standing"
        },
        {
          "title": "Damages: The Full Value of the Life",
          "description": "How Georgia juries are instructed to value the decedent's life, including economic and non-economic components.",
          "href": "#wrongful-death-damages"
        },
        {
          "title": "Fatal Accident Investigations",
          "description": "How the firm works with reconstruction experts and medical examiners to prove fault in fatal car, truck, and motorcycle crashes.",
          "href": "#fatal-investigations"
        },
        {
          "title": "Wrongful Death Time Limits",
          "description": "The Georgia statute of limitations for wrongful death and why early action protects evidence and witness memory.",
          "href": "#wrongful-death-timeline"
        }
      ]
    }
  ]
};

export const trustBadges = [
  {
    "id": 1,
    "title": "20+ Years Trial Experience",
    "tooltip": "Yari Lawson, founder of Lawson Personal Injury Attorneys, has spent more than 20 years in Georgia courtrooms, including time as a prosecutor, before building the firm's plaintiff-side personal injury practice in Lawrenceville.",
    "badge": "/badges/placeholder.avif",
    "href": "#trial-experience"
  },
  {
    "id": 2,
    "title": "Former Prosecutor",
    "tooltip": "Yari's prosecutorial background informs how the firm anticipates and counters defense strategy in serious-injury and wrongful-death cases throughout Gwinnett County and metro Atlanta.",
    "badge": "/badges/placeholder.avif",
    "href": "#former-prosecutor"
  },
  {
    "id": 3,
    "title": "Lawrenceville-Based",
    "tooltip": "The firm's office at 320 South Perry Street in Lawrenceville is the anchor for clients across Gwinnett County and the broader metro Atlanta area.",
    "badge": "/badges/placeholder.avif",
    "href": "#location"
  },
  {
    "id": 4,
    "title": "Bilingual Client Service",
    "tooltip": "Lawson Personal Injury Attorneys serves a multilingual client base in metro Atlanta and supports Spanish-speaking clients throughout the case.",
    "badge": "/badges/placeholder.avif",
    "href": "#bilingual"
  },
  {
    "id": 5,
    "title": "Owned-Funnel Authority",
    "tooltip": "Yari built the firm on owned authority rather than billboards or rented leads. The podcast is part of that philosophy: education that earns trust without gatekeeping it behind a free consultation.",
    "badge": "/badges/placeholder.avif",
    "href": "#owned-authority"
  }
];

export const chaptersDescription = "This first-episode breakdown covers the practical sequence: scene documentation, the adjuster call, Georgia's comparative negligence rule, defense strategy, and how cases either settle in negotiation or move to trial."

export const reviewsInstruction = "Client testimonials reflect actual experiences of clients of Lawson Personal Injury Attorneys. Past results do not guarantee similar outcomes; every case is unique. The firm complies with Georgia Rules of Professional Conduct on attorney advertising."

export const episodeTopics = [
  "All",
  "Car Accidents",
  "Truck Accidents",
  "Motorcycle Accidents",
  "Pedestrian Accidents",
  "Slip and Fall",
  "Wrongful Death",
  "Insurance Claims",
  "Trial Strategy"
];

export const episodeLocations = [
  "All",
  "Georgia",
  "Lawrenceville",
  "Gwinnett County",
  "Atlanta Metro"
];

export const formConfig = {
  webhookUrl: process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || "",
  notifyEmails: process.env.NEXT_PUBLIC_FORM_NOTIFY_EMAILS || "contact@lawsonfirm.com",
  fields: [
    { name: "name", label: "NAME", type: "text" as const, placeholder: "Enter Your Name", required: true, halfWidth: true },
    { name: "email", label: "EMAIL", type: "email" as const, placeholder: "Enter Your Email", required: true, halfWidth: true },
    { name: "phone", label: "PHONE", type: "tel" as const, placeholder: "Enter Your Phone Number", required: false, halfWidth: true },
    { name: "caseType", label: "CASE TYPE", type: "select" as const, placeholder: "Select Case Type", required: false, halfWidth: true, options: [
      "Car Accident",
      "Wrongful Death",
      "Truck Accident",
      "Motorcycle Accident",
      "Pedestrian Accident",
      "Premises Liability",
      "Other",
    ]},
    { name: "message", label: "MESSAGE", type: "textarea" as const, placeholder: "Briefly describe your situation", required: true, halfWidth: false },
  ],
  heading: "Get in touch now!",
  submitText: "Send Message",
  successMessage: "Thank you for reaching out. The Lawson Personal Injury Attorneys team will be in touch within one business day.",
  errorMessage: "Something went wrong. Please call us directly at (678) 446-3655.",
  source: "podcast-website",
  campaign: "lawrenceville-car-accident-law",
}

export const authorProfiles: Record<string, {
  name: string
  slug: string
  title: string
  role: string
  photo: string
  barNumber: string
  barUrl: string
  education: { degree: string; school: string; year: string; honors?: string }[]
  admissions: { jurisdiction: string; year: string }[]
  awards: { name: string; years: string; description: string }[]
  practiceAreas: string[]
  bio: string[]
  memberships: string[]
  socialLinks: { platform: string; url: string }[]
  episodeAppearances: string
}> = {
  "yari-lawson": {
    name: "Yari Lawson",
    slug: "yari-lawson",
    title: "Principal Trial Attorney & Founder",
    role: "Host & Principal Trial Attorney",
    photo: "/images/attorney.jpg",
    barNumber: "",
    barUrl: "",
    education: [],
    admissions: [
      { jurisdiction: "Georgia", year: "" }
    ],
    awards: [],
    practiceAreas: [
      "Car Accidents",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Wrongful Death",
      "Traumatic Brain Injuries",
      "Catastrophic Injuries",
      "Slip and Fall",
      "Dog Bites",
      "Pedestrian Accidents",
      "Uber and Lyft Accidents",
      "Premises Liability",
      "Product Liability"
    ],
    bio: [
      "Yari Lawson is the Principal Trial Attorney and founder of Lawson Personal Injury Attorneys in Lawrenceville, Georgia. With 20+ years of trial experience and a background as a former prosecutor, Yari has spent her career studying how the other side builds and attacks injury cases. That perspective shapes how the firm represents clients in Gwinnett County and the broader metro Atlanta area: every case is built the way a prosecutor builds a case, knowing exactly how the defense and the insurance company will come at it.",
      "Lawson Personal Injury Attorneys handles serious injury and wrongful death matters across Georgia, including car accidents, truck accidents, motorcycle crashes, traumatic brain injuries, catastrophic injuries, slip and fall cases, dog bites, pedestrian and rideshare incidents, premises liability, and product liability. The firm's brand line, \"Serious Injuries Demand Relentless Lawyers. We Don't Flinch,\" reflects how Yari approaches insurance carriers, trucking companies, and defense firms on behalf of clients.",
      "Yari created this podcast as part of an owned-funnel approach to client communication. Rather than buying billboards or rented leads, she puts plain-language injury education in front of the people who need it most, scared, in pain, and trying to figure out whether they have a case at 11pm from their couch. Episodes treat Spanish-speaking listeners with the same depth and respect as English-speakers, reflecting the multilingual client base the firm serves in metro Atlanta."
    ],
    memberships: [],
    socialLinks: [],
    episodeAppearances: "Host of all episodes",
  },
}
