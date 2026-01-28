import projectKies from '../assets/photos/project-kies.jpg';
import projectWinddock from '../assets/photos/project-winddock.jpg';
import projectTocardo from '../assets/photos/project-tocardo.jpg';
import projectProefkeuken from '../assets/photos/project-proefkeuken.jpg';

export const projects = [
    {
        slug: 'kaap-intelligent-energy-solutions-k-i-e-s',
        title: 'KAAP Intelligent Energy Solutions (K.I.E.S.)',
        theme: 'energie',
        description: 'Project K.I.E.S richt zich op de ontwikkeling van het Living Lab Energy: de plek waar kennis, onderwijs en bedrijfsleven samenkomen.',
        content: `
      <p>Het Living Lab Energy is een fysieke omgeving waar innovatieve energieoplossingen worden getest. Studenten werken hier samen met experts aan de energievoorziening van de toekomst.</p>
      <h3>Doelstellingen</h3>
      <ul>
        <li>Versnellen van de energietransitie</li>
        <li>Opleiden van technisch talent</li>
        <li>Stimuleren van samenwerking in de regio</li>
      </ul>
    `,
        image: projectKies
    },
    {
        slug: 'winddock',
        title: 'WindDock',
        theme: 'energie',
        description: 'De nieuwe generatie windenergie-specialisten opleiden in een realistische praktijkomgeving.',
        content: '<p>WindDock biedt een unieke locatie aan de haven waar onderhoudsmonteurs voor offshore windparken worden opgeleid.</p>',
        image: projectWinddock
    },
    {
        slug: 'tocardo',
        title: 'Tocardo',
        theme: 'water',
        description: 'Techbedrijf gespecialiseerd in getijdenstroom en groene elektriciteit uit water.',
        content: '<p>Tocardo test en ontwikkelt geavanceerde turbines die energie opwekken uit getijdenstromingen.</p>',
        image: projectTocardo
    },
    {
        slug: 'proefkeuken',
        title: 'De Proefkeuken',
        theme: 'voedsel',
        description: 'Experimenteren met nieuwe eiwitbronnen en duurzame voedselproductie.',
        content: '<p>In de proefkeuken werken chefs en voedseltechnologen aan de smaken van morgen, met focus op de eiwittransitie.</p>',
        image: projectProefkeuken
    }
];
