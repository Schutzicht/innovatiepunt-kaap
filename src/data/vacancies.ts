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
    image: string;
}

export const vacancies: Record<string, Vacancy[]> = {
    nl: [
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
                    "Ervaring met projectmatig werken in een dynamic omgeving.",
                    "Een sterke affiniteit met innovatie en duurzaamheid.",
                    "Uitstekende communicatieve vaardigheden in Nederlands (en Engels is een pre).",
                    "Beschikbaar voor 24 uur per week (0,6 FTE)."
                ],
                offer: [
                    "Een unieke werkplek in het hart van de Kenniswerf: Innovatiepunt KAAP.",
                    "De kans om direct bij te drage aan maatschappelijke transities.",
                    "Een hecht team (Jorik, Marc, Phaedra) dat barst van de energie.",
                    "Veel vrijheid en verantwoordelijkheid om je rol in te vullen.",
                    "Marktconform salaris en goede secundaire arbeidsvoorwaarden."
                ]
            }
        }
    ],
    en: [
        {
            slug: 'projectcoordinator',
            title: 'Project Coordinator',
            subtitle: 'The spider in the web for innovative transitions',
            fte: '0.6 FTE',
            department: 'Team KAAP',
            location: 'Vlissingen',
            shortDescription: 'You ensure our complex innovation projects around Water, Food, and Energy run smoothly. A role for a structured connector.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
            content: {
                intro: `At Innovatiepunt KAAP, we work on the future of Zeeland. We are not a standard office, but a vibrant incubator where entrepreneurs, education, and government collaborate on transitions in Water, Food, and Energy. 
                
                As Project Coordinator, you are the indispensable link that ensures these collaborations do not stall in plans but lead to action. You keep the overview, monitor progress, and ensure everyone remains connected.`,
                responsibilities: [
                    "Coordinating ongoing innovation projects within the Water, Food, and Energy themes.",
                    "Being the point of contact for project partners (companies, HZ University, Scalda, Dockwize).",
                    "Monitoring schedules, budgets, and deliverables.",
                    "Organizing project consultations and stakeholder meetings in our own inspiring spaces.",
                    "Supporting the preparation of reports and grant applications."
                ],
                requirements: [
                    "Bachelor/Master thinking level, preferably in a field such as Business Administration, Project Management or similar.",
                    "Experience with project-based work in a dynamic environment.",
                    "A strong affinity with innovation and sustainability.",
                    "Excellent communication skills in Dutch and English.",
                    "Available for 24 hours per week (0.6 FTE)."
                ],
                offer: [
                    "A unique workplace in the heart of the Kenniswerf: Innovatiepunt KAAP.",
                    "The opportunity to contribute directly to societal transitions.",
                    "A close-knit team (Jorik, Marc, Phaedra) bursting with energy.",
                    "Lots of freedom and responsibility to fulfill your role.",
                    "Market-competitive salary and good secondary employment conditions."
                ]
            }
        }
    ]
};
