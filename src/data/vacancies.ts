export interface Vacancy {
    slug: string;
    title: string;
    subtitle: string;
    fte: string;
    department: 'Team KAAP' | 'Events' | 'Facilitair';
    location: string;
    shortDescription: string;
    content: {
        intro: string;
        responsibilities: string[];
        requirements: string[];
        offer: string[];
    };
    image: string; // URL for now, or import
}

export const vacancies: Vacancy[] = [
    {
        slug: 'projectcoordinator',
        title: 'Projectcoördinator',
        subtitle: 'De spin in het web voor innovatieve transities',
        fte: '0,6 FTE',
        department: 'Team KAAP',
        location: 'Vlissingen',
        shortDescription: 'Jij zorgt dat onze complexe innovatieprojecten rondom Water, Voedsel en Energie op rolletjes lopen. Een rol voor een gestructureerde verbinder.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
        content: {
            intro: `Bij Innovatiepunt KAAP werken we aan de toekomst van Zeeland. We zijn geen standaard kantoor, maar een bruisende broedplaats waar ondernemers, onderwijs en overheid samenwerken aan transities in Water, Voedsel en Energie. 
            
            Als Projectcoördinator ben jij de onmisbare schakel die zorgt dat deze samenwerkingen niet verzanden in plannen, maar leiden tot actie. Jij houdt het overzicht, bewaakt de voortgang en zorgt dat iedereen aangesloten blijft.`,
            responsibilities: [
                "Coördineren van lopende innovatieprojecten binnen de thema's Water, Voedsel en Energie.",
                "Aanspreekpunt zijn voor projectpartners (bedrijven, HZ University, Scalda, Dockwize).",
                "Bewaken van planningen, budgetten en deliverables.",
                "Organiseren van projectoverleggen en stakeholdermeetings in onze eigen inspirerende ruimtes.",
                "Ondersteunen bij het opstellen van rapportages en subsidieaanvragen."
            ],
            requirements: [
                "HBO/WO werk- en denkniveau, bij voorkeur in een richting als Bedrijfskunde, Projectmanagement of vergelijkbaar.",
                "Ervaring met projectmatig werken in een dynamische omgeving.",
                "Een sterke affiniteit met innovatie en duurzaamheid.",
                "Uitstekende communicatieve vaardigheden in Nederlands (en Engels is een pre).",
                "Beschikbaar voor 24 uur per week (0,6 FTE)."
            ],
            offer: [
                "Een unieke werkplek in het hart van de Kenniswerf: Innovatiepunt KAAP.",
                "De kans om direct bij te dragen aan maatschappelijke transities.",
                "Een hecht team (Jorik, Marc, Phaedra) dat barst van de energie.",
                "Veel vrijheid en verantwoordelijkheid om je rol in te vullen.",
                "Marktconform salaris en goede secundaire arbeidsvoorwaarden."
            ]
        }
    }
];
