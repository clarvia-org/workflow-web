import { type Lang, l } from "@/lib/i18n";

export type LocalisedText = {
  en: string;
  fr: string;
  de: string;
  lu?: string;
};

export type DonationLandingVariant = {
  id: string;
  headline: LocalisedText;
  summary: LocalisedText;
  impactPoints: LocalisedText[];
  defaultFrequency: "onetime" | "monthly";
  defaultAmount: number;
  showImage: boolean;
  showBankTransfer: boolean;
};

export interface DonationTier {
  amount: number;
  label: string;
  default?: boolean;
}

export function getMonthlyTiers(lang: Lang): DonationTier[] {
  return [
    {
      amount: 10,
      label: l(
        lang,
        "Keep the service free",
        "Aider à garder le service gratuit",
        "Helfen, den Dienst kostenlos zu halten",
        "De Service gratis halen"
      ),
    },
    {
      amount: 25,
      label: l(
        lang,
        "Support multilingual maintenance",
        "Soutenir la maintenance multilingue",
        "Mehrsprachige Pflege unterstützen",
        "Déi méisproocheg Fleeg ënnerstëtzen"
      ),
      default: true,
    },
    {
      amount: 50,
      label: l(
        lang,
        "Fund source-backed updates",
        "Financer les mises à jour fondées sur des sources officielles",
        "Quellenbasierte Aktualisierungen finanzieren",
        "Aktualiséierungen op Basis vun offiziellen Quelle finanzéieren"
      ),
    },
    {
      amount: 100,
      label: l(
        lang,
        "Founding Circle supporter",
        "Membre du Cercle fondateur",
        "Unterstützer im Gründerkreis",
        "Ënnerstëtzer am Grënnerkrees"
      ),
    },
  ];
}

export function getOnetimeTiers(lang: Lang): DonationTier[] {
  return [
    {
      amount: 35,
      label: l(
        lang,
        "Help maintain official-source references",
        "Aider à maintenir les références aux sources officielles",
        "Bei der Pflege offizieller Quellenverweise helfen",
        "Hëllefen, Referenzen op offiziell Quellen aktuell ze halen"
      ),
    },
    {
      amount: 75,
      label: l(
        lang,
        "Support workflow validation",
        "Soutenir la validation des parcours",
        "Die Validierung der Abläufe unterstützen",
        "D'Validéierung vun den Ofleef ënnerstëtzen"
      ),
    },
    {
      amount: 150,
      label: l(
        lang,
        "Fund translation and accessibility work",
        "Financer le travail de traduction et d'accessibilité",
        "Übersetzungs- und Barrierefreiheitsarbeit finanzieren",
        "Iwwersetzungs- an Accessibilitéitsaarbecht finanzéieren"
      ),
    },
    {
      amount: 500,
      label: l(
        lang,
        "Support a public-service module",
        "Soutenir un module de service public",
        "Ein gemeinnütziges Servicemodul unterstützen",
        "E Modul am ëffentlechen Interessi ënnerstëtzen"
      ),
    },
  ];
}

export const DEFAULT_CONFIG: DonationLandingVariant = {
  id: "support",
  headline: {
    en: "Support Clarvia",
    fr: "Soutenir Clarvia",
    de: "Clarvia unterstützen",
    lu: "Clarvia ënnerstëtzen",
  },
  summary: {
    en: "When a loved one dies, families are often expected to handle paperwork, institutions, deadlines, and cross-border questions while they are still grieving.",
    fr: "Lorsqu’un proche décède, les familles doivent souvent s’occuper de démarches administratives, contacter des institutions, respecter des délais et parfois gérer des questions entre plusieurs pays, alors même qu’elles traversent une période difficile.",
    de: "Wenn ein geliebter Mensch stirbt, müssen Familien oft Formulare, Behörden, Fristen und manchmal auch grenzüberschreitende Fragen klären, während sie noch mitten in der Trauer stehen.",
    lu: "Wann een nooste Mënsch stierft, gi Familljen dacks erwaart, sech ëm Pabeieren, Institutiounen, Fristen a grenziwwerschreidend Froen ze këmmeren, wärend si nach an der Trauer sinn.",
  },
  impactPoints: [
    {
      en: "keep the checklists free for everyone",
      fr: "garder les listes de démarches gratuites pour tous",
      de: "die Checklisten für alle kostenlos halten",
      lu: "d'Checklëschte fir jiddereen gratis halen",
    },
    {
      en: "explain difficult admin tasks in plain language",
      fr: "expliquer les démarches administratives complexes dans un langage simple",
      de: "schwierige administrative Aufgaben in verständlicher Sprache erklären",
      lu: "schwiereg administrativ Démarchen an einfacher Sprooch erklären",
    },
    {
      en: "translate the guidance into more languages",
      fr: "traduire les conseils dans plus de langues",
      de: "die Orientierungshilfen in weitere Sprachen übersetzen",
      lu: "d'Orientéierung an nach méi Sproochen iwwersetzen",
    },
  ],
  defaultFrequency: "monthly",
  defaultAmount: 25,
  showImage: true,
  showBankTransfer: true,
};

export const ADS_KEEP_FREE_V1: DonationLandingVariant = {
  id: "ads-keep-free-v1",
  headline: {
    en: "Keep practical bereavement guidance free",
    fr: "Garder l'accompagnement gratuit",
    de: "Praktische Orientierung im Trauerfall kostenlos halten",
    lu: "Praktesch Orientéierung am Trauerfall gratis halen",
  },
  summary: {
    en: "Clarvia turns scattered official information into free, open-source checklists for families handling administration after a death.",
    fr: "Clarvia transforme les informations officielles éparpillées en listes d'étapes gratuites pour les familles après un décès.",
    de: "Clarvia macht aus verstreuten offiziellen Informationen kostenlose Open-Source-Checklisten für Familien.",
    lu: "Clarvia mécht aus verstreeten offiziellen Informatiounen gratis Open-Source-Checklëschten fir Familljen.",
  },
  impactPoints: [
    {
      en: "Reviewed against official sources",
      fr: "Vérifié par rapport aux sources officielles",
      de: "Geprüft anhand offizieller Quellen",
      lu: "Iwwerpréift op Basis vun offiziellen Quellen",
    },
    {
      en: "Free and open to everyone",
      fr: "Gratuit et accessible à tous",
      de: "Kostenlos und für jeden zugänglich",
      lu: "Gratis a fir jidderee zougänglech",
    },
    {
      en: "Maintained by a Luxembourg nonprofit",
      fr: "Géré par une association sans but lucratif luxembourgeoise",
      de: "Gepflegt von einer luxemburgischen Non-Profit-Organisation",
      lu: "Gepflegt vun enger Lëtzebuerger ASBL",
    },
  ],
  defaultFrequency: "onetime",
  defaultAmount: 25,
  showImage: false,
  showBankTransfer: false,
};
