export interface Event {
    id: string;
    title: string;
    date: string; // ISO String or formatted string
    time: string;
    location: string;
    category: 'Netwerk' | 'Kennis' | 'Pitch' | 'Workshop' | 'Overig';
    image: string;
    description?: string;
    registrationLink?: string;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    category: 'Water' | 'Voedsel' | 'Energie' | 'Algemeen';
    image: string;
    summary: string;
    content?: string;
}

// Mock Data for Events
const MOCK_EVENTS: Event[] = [
    {
        id: '1',
        title: "Innovatiecafé: Waterstof",
        date: "2026-05-15",
        time: "16:00 - 18:00",
        location: "Auditorium KAAP",
        category: "Netwerk",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
        description: "Ontmoet experts en pioniers op het gebied van waterstoftechnologie.",
        registrationLink: "/contact?subject=Aanmelden%20Waterstof"
    },
    {
        id: '2',
        title: "Masterclass: Circulair Bouwen",
        date: "2026-05-22",
        time: "09:00 - 13:00",
        location: "Vergaderruimte 1",
        category: "Kennis",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        description: "Leer de nieuwste technieken voor modulair en circulair bouwen.",
        registrationLink: "/contact?subject=Aanmelden%20Masterclass"
    },
    {
        id: '3',
        title: "Start-up Pitch Event",
        date: "2026-06-02",
        time: "19:00 - 22:00",
        location: "KAAP Café",
        category: "Pitch",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        description: "Drie veelbelovende startups pitchen hun idee voor een panel van investeerders.",
        registrationLink: "/contact?subject=Aanmelden%20Pitch"
    },
    {
        id: '4',
        title: "Hackathon: Smart Energy Grids",
        date: "2026-06-15",
        time: "09:00 - 21:00",
        location: "Makerspace",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        description: "24 uur lang werken aan oplossingen voor slimme energienetwerken.",
        registrationLink: "/contact?subject=Aanmelden%20Hackathon"
    }
];

// Mock Data for News
const MOCK_NEWS: NewsItem[] = [
    {
        id: '1',
        title: "KAAP Officieel Geopend door Koning",
        date: "2026-04-01",
        category: "Algemeen",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800",
        summary: "Een feestelijke dag voor Zeeland: Innovatiepunt KAAP opent haar deuren voor de toekomst."
    },
    {
        id: '2',
        title: "Doorbraak in Zilte Teelt",
        date: "2026-04-10",
        category: "Voedsel",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
        summary: "Onderzoekers bij KAAP tonen succesvolle oogst van aardappelen op zilte grond."
    },
    {
        id: '3',
        title: "Nieuwe Waterstofpilot in de Haven",
        date: "2026-04-15",
        category: "Energie",
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
        summary: "Een samenwerking tussen KAAP-partners leidt tot eerste waterstofbunkerstation."
    }
];

export async function getEvents(): Promise<Event[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_EVENTS;
}

export async function getNews(): Promise<NewsItem[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_NEWS;
}
