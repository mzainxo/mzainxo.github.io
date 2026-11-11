const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* Language ------------------------------------------------------------ */
const languageStorageKey = 'language-preference';
const language = {
  value: document.documentElement.getAttribute('data-language') === 'de' ||
    localStorage.getItem(languageStorageKey) === 'de' ? 'de' : 'en'
};
const germanText = {
  'Home': 'Startseite',
  'About': 'Über mich',
  'Portfolio': 'Portfolio',
  'Contact': 'Kontakt',
  'MSc Computer Science @ TU Dresden': 'M.Sc. Informatik an der TU Dresden',
  "I'm Muhammad Zain": 'Ich bin Muhammad Zain',
  'Computer Science master’s student at TU Dresden with experience in cybersecurity. I focus on healthcare security and AI/LLM security.': 'Masterstudent der Informatik an der TU Dresden mit Erfahrung in Cybersicherheit. Mein Fokus liegt auf Sicherheit im Gesundheitswesen sowie auf KI- und LLM-Sicherheit.',
  'View projects': 'Projekte ansehen',
  'Get in touch': 'Kontakt aufnehmen',
  'About Me': 'Über mich',
  'I am a Computer Science master\'s student at TU Dresden with experience in cybersecurity, focusing on healthcare security and AI/LLM security. I enjoy tackling complex technical challenges, learning quickly, and turning ideas into practical solutions that create meaningful impact in technology and society.': 'Ich bin Masterstudent der Informatik an der TU Dresden und verfüge über Erfahrung im Bereich Cybersicherheit, insbesondere mit den Schwerpunkten Healthcare Security sowie KI- und LLM-Sicherheit. Ich beschäftige mich gerne mit komplexen technischen Herausforderungen, lerne mich schnell in neue Themen ein und setze Ideen in praxisorientierte Lösungen um, die einen nachhaltigen Mehrwert für Technologie und Gesellschaft schaffen.',
  'Python, C, Bash, C#, Java, and SQL': 'Python, C, Bash, C#, Java und SQL',
  ', as well as Linux, cloud platforms, and security tools. I have worked on projects involving intrusion detection, secure networking, and incident response, and am dedicated to utilizing technology to drive positive impact in the tech sector.': ' sowie Linux, Cloud-Plattformen und Sicherheitstools. Ich habe an Projekten zur Angriffserkennung, sicheren Netzwerken und zur Reaktion auf Sicherheitsvorfälle gearbeitet und möchte mit Technologie einen positiven Beitrag zur Tech-Branche leisten.',
  'My Toolkit': 'Meine Werkzeuge',
  'Frameworks & Libraries': 'Frameworks und Bibliotheken',
  'NIST Cybersecurity Framework': 'NIST-Cybersicherheitsframework',
  'Experience': 'Berufserfahrung',
  'Education': 'Ausbildung',
  'Certifications': 'Zertifizierungen',
  'Bachelors, Software Engineering': 'Bachelor in Softwaretechnik',
  'CGPA: 3.74 out of 4.00': 'Notendurchschnitt: 3,74 von 4,00',
  'Intermediate, Pre-Engineering': 'Höhere Schulbildung, Schwerpunkt Ingenieurwissenschaften',
  'Grade: A-1': 'Note: A-1',
  'Matriculation, Science Group': 'Mittlere Reife, naturwissenschaftlicher Zweig',
  'Grade: A': 'Note: A',
  'Primary, Science Group': 'Grundschule, naturwissenschaftlicher Zweig',
  'Cyber Security Analyst': 'Cybersicherheitsanalyst',
  'Best Bank of Pakistan': 'Beste Bank Pakistans',
  'ISO 27000 Family': 'ISO-27000-Normenfamilie',
  'Cybersecurity': 'Cybersicherheit',
  'Final Year Project': 'Abschlussprojekt',
  'Oct 2024 - Jun 2025 | Final Year Project': 'Okt. 2024 – Juni 2025 | Abschlussprojekt',
  'FYDP': 'Abschlussprojekt',
  'Governance': 'Governance',
  'Risk Assessments': 'Risikobewertungen',
  'InfoSec': 'Informationssicherheit',
  'Vulnerability Management': 'Schwachstellenmanagement',
  'Vulnerability Remediation': 'Behebung von Sicherheitslücken',
  'LLM Security': 'LLM-Sicherheit',
  'AI Governance': 'KI-Governance',
  'Data Analysis': 'Datenanalyse',
  'Automation': 'Automatisierung',
  'API Security': 'API-Sicherheit',
  'PCI DSS': 'PCI-Datensicherheit (PCI DSS)',
  'GRC': 'Governance, Risk & Compliance (GRC)',
  'Security Assessments': 'Sicherheitsbewertungen',
  'Access Control': 'Zugriffskontrolle',
  'Security Consultancy and Forensics Intern': 'Praktikum in Sicherheitsberatung und Forensik',
  'During my internship at Trillium Information Security Systems, I gained practical experience in Digital Forensics and Governance, Risk, and Compliance (GRC). I worked on various projects that involved analyzing security incidents, conducting risk assessments, and ensuring compliance with industry standards. This opportunity allowed me to apply my skills in a collaborative environment and contribute to a meaningful project.': 'Während meines Praktikums bei Trillium Information Security Systems sammelte ich praktische Erfahrung in digitaler Forensik sowie Unternehmensführung, Risikomanagement und Compliance (GRC). Ich arbeitete an Projekten zur Analyse von Sicherheitsvorfällen, führte Risikobewertungen durch und unterstützte die Einhaltung von Industriestandards. Dabei konnte ich meine Fähigkeiten im Team einsetzen und zu einem wichtigen Projekt beitragen.',
  '.NET Intern': '.NET-Praktikant',
  'During my two-month internship at NexinIT, I gained practical experience in back-end development using .NET Core and MVC architecture while working on a Customer Invoicing Application. I utilized Entity Framework for data management and SQL Server to ensure data integrity and performance. Additionally, I crafted responsive user interfaces with Razor UI, jQuery, AJAX, Bootstrap, HTML, CSS, and JavaScript, enhancing the application\'s interactivity and overall user experience. This opportunity allowed me to apply my skills in a collaborative environment and contribute to a meaningful project.': 'Während meines zweimonatigen Praktikums bei NexinIT sammelte ich praktische Erfahrung in der Backend-Entwicklung mit .NET Core und MVC-Architektur. Dabei arbeitete ich an einer Anwendung zur Kundenabrechnung, nutzte Entity Framework für die Datenverwaltung und SQL Server, um Datenintegrität und Leistung sicherzustellen. Außerdem entwickelte ich responsive Benutzeroberflächen mit Razor UI, jQuery, AJAX, Bootstrap, HTML, CSS und JavaScript und verbesserte so Interaktivität und Benutzerfreundlichkeit. Ich konnte meine Fähigkeiten im Team einsetzen und zu einem wichtigen Projekt beitragen.',
  'IBM - Application Security for Developers and DevOps Professionals': 'IBM – Anwendungssicherheit für Entwickler und DevOps-Fachkräfte',
  'Issued March 2025': 'Ausgestellt im März 2025',
  'This certification focuses on secure application development and DevOps practices. It covers topics like threat modeling, vulnerability assessment, secure coding, and CI/CD pipeline security. Participants gain hands-on experience with tools and frameworks to enhance application security in modern development environments.': 'Diese Zertifizierung behandelt die sichere Entwicklung von Anwendungen und DevOps-Praktiken. Themen sind unter anderem Bedrohungsmodellierung, Schwachstellenbewertung, sicheres Programmieren und die Sicherheit von CI/CD-Pipelines. Teilnehmende sammeln praktische Erfahrung mit Werkzeugen und Frameworks, um die Anwendungssicherheit in modernen Entwicklungsumgebungen zu verbessern.',
  'Application Security': 'Anwendungssicherheit',
  'Secure Development': 'Sichere Entwicklung',
  'Threat Modeling': 'Bedrohungsmodellierung',
  'Vulnerability Assessment': 'Schwachstellenbewertung',
  'Risk Management': 'Risikomanagement',
  'Secure Coding': 'Sicheres Programmieren',
  'CI/CD Security': 'CI/CD-Sicherheit',
  'Cloud Security': 'Cloud-Sicherheit',
  'Penetration Testing': 'Penetrationstests',
  'ISC2 - Certified in Cybersecurity (CC)': 'ISC2 – Zertifizierung in Cybersicherheit (CC)',
  'The ISC2 - Certified in Cybersecurity (CC) certification is an entry-level credential designed to validate foundational knowledge in cybersecurity. It covers essential topics such as risk management, network security, incident response, and access controls. This certification is ideal for individuals starting their careers in cybersecurity, providing a strong foundation for roles like Cybersecurity Analyst, SOC Analyst, and more.': 'Das ISC2-Zertifikat in Cybersicherheit (CC) ist ein Einstiegsnachweis für grundlegende Kenntnisse der Cybersicherheit. Es behandelt wichtige Themen wie Risikomanagement, Netzwerksicherheit, Reaktion auf Sicherheitsvorfälle und Zugriffskontrollen. Das Zertifikat eignet sich für den Einstieg in die Cybersicherheit und schafft eine solide Grundlage für Positionen wie Cybersicherheitsanalyst oder SOC-Analyst.',
  'Network Security': 'Netzwerksicherheit',
  'Incident Response': 'Reaktion auf Sicherheitsvorfälle',
  'Access Controls': 'Zugriffskontrollen',
  'Threat Analysis': 'Bedrohungsanalyse',
  'Security Operations': 'Sicherheitsbetrieb',
  'SIEM Tools': 'SIEM-Werkzeuge',
  'Intrusion Detection Systems (IDS)': 'Angriffserkennungssysteme (IDS)',
  'Cryptography': 'Kryptografie',
  'Security Frameworks': 'Sicherheitsframeworks',
  'Data Protection': 'Datenschutz',
  'Information Security': 'Informationssicherheit',
  'Google Cybersecurity Professional Certificate': 'Google-Zertifikat für Cybersicherheit',
  'The Google Cybersecurity Professional Certificate is an online program designed to equip learners with essential skills for entry-level roles in cybersecurity. Developed by Google experts, this comprehensive course covers critical topics such as risk management, network security, and incident response, utilizing hands-on learning with industry-standard tools like Python and Linux. No prior experience is required, making it accessible to anyone interested in the field. Graduates will be prepared for various roles, including Cybersecurity Analyst and SOC Analyst, and will have the opportunity to take the CompTIA Security+ exam, enhancing their career prospects in a rapidly growing job market.': 'Das Google-Zertifikat für Cybersicherheit ist ein Onlineprogramm, das grundlegende Kompetenzen für Einstiegspositionen in der Cybersicherheit vermittelt. Der von Google-Fachleuten entwickelte Kurs behandelt unter anderem Risikomanagement, Netzwerksicherheit und die Reaktion auf Sicherheitsvorfälle. Mit branchenüblichen Werkzeugen wie Python und Linux werden die Inhalte praxisnah vermittelt. Vorkenntnisse sind nicht erforderlich. Absolventinnen und Absolventen sind auf verschiedene Positionen vorbereitet und können außerdem die CompTIA-Security+-Prüfung ablegen.',
  'NIST Cybersecurity Framework': 'NIST-Cybersicherheitsframework',
  'Assets, Threats, and Vulnerabilities': 'Schutzgüter, Bedrohungen und Schwachstellen',
  'SIEM tools': 'SIEM-Werkzeuge',
  'MathWorks - Medical Image Processing': 'MathWorks – Medizinische Bildverarbeitung',
  'Issued Sept 2025': 'Ausgestellt im September 2025',
  'This certification, offered by MathWorks on Coursera, covers the fundamentals of medical image processing using MATLAB. It explores key concepts such as image enhancement, segmentation, feature extraction, and analysis of medical images. Participants gain hands-on experience applying MATLAB tools and techniques to real-world medical imaging datasets, preparing them for practical applications in healthcare, research, and biomedical engineering.': 'Diese von MathWorks über Coursera angebotene Zertifizierung vermittelt Grundlagen der medizinischen Bildverarbeitung mit MATLAB. Sie behandelt zentrale Themen wie Bildverbesserung, Segmentierung, Merkmalsextraktion und medizinische Bildanalyse. Teilnehmende wenden MATLAB-Werkzeuge und -Techniken praktisch auf reale medizinische Bilddatensätze an und bereiten sich so auf Anwendungen im Gesundheitswesen, in der Forschung und in der Biomedizintechnik vor.',
  'Medical Image Processing': 'Medizinische Bildverarbeitung',
  'Image Enhancement': 'Bildverbesserung',
  'Feature Extraction': 'Merkmalsextraktion',
  'Image Analysis': 'Bildanalyse',
  'Healthcare': 'Gesundheitswesen',
  'Image Registration': 'Bildregistrierung',
  'Data Visualization': 'Datenvisualisierung',
  'Pattern Recognition': 'Mustererkennung',
  'Deep Learning': 'Deep Learning',
  'Medical Imaging': 'Medizinische Bildgebung',
  'Computer Vision': 'Maschinelles Sehen',
  'UNAP x Toyota - Japanese 5S Methodology Training': 'UNAP x Toyota – Schulung zur japanischen 5S-Methode',
  'Issued Dec 2020': 'Ausgestellt im Dezember 2020',
  'The Japanese 5S Methodology Training by Toyota Indus and the United Nations Association of Pakistan (UNAP) focuses on the principles of workplace organization and efficiency. The 5S methodology—Sort, Set in Order, Shine, Standardize, and Sustain—aims to improve productivity, reduce waste, and create a safe and organized work environment. This training equips participants with practical tools to implement the 5S framework in various industries, fostering a culture of continuous improvement and operational excellence.': 'Die Schulung zur japanischen 5S-Methode von Toyota Indus und der United Nations Association of Pakistan (UNAP) vermittelt Grundsätze für Ordnung und Effizienz am Arbeitsplatz. Die fünf Schritte – Sortieren, Systematisieren, Säubern, Standardisieren und Selbstdisziplin – steigern die Produktivität, reduzieren Verschwendung und schaffen ein sicheres, organisiertes Arbeitsumfeld. Die Schulung vermittelt praktische Werkzeuge zur Umsetzung in verschiedenen Branchen und fördert kontinuierliche Verbesserung und operative Exzellenz.',
  '5S Methodology': '5S-Methode',
  'Workplace Organization': 'Arbeitsplatzorganisation',
  'Lean Manufacturing': 'Schlanke Produktion',
  'Process Improvement': 'Prozessverbesserung',
  'Operational Excellence': 'Operative Exzellenz',
  'Continuous Improvement': 'Kontinuierliche Verbesserung',
  'Waste Reduction': 'Abfallreduzierung',
  'Productivity': 'Produktivität',
  'Safety': 'Sicherheit',
  'Standardization': 'Standardisierung',
  'Sustainability': 'Nachhaltigkeit',
  'Intelligent Cyber Attacks Detection System (ICADS)': 'Intelligentes System zur Erkennung von Cyberangriffen (ICADS)',
  'This project integrates a machine learning-based anomaly detection model with Suricata IDS to enhance real-time detection of sophisticated DDoS attacks. Utilizing pandas, seaborn, and scikit-learn, the Random Forest model is trained on large-scale DDoS datasets (CIC-DDoS2019, LR-HR DDoS 2024) for robust traffic classification. Real-time Suricata logs are processed and visualized via a Streamlit dashboard, enabling actionable analytics and live monitoring for network administrators. The system achieved 99% accuracy in offline testing and 78–94% accuracy in live network environments. By embedding adaptive learning into the IDS, it reduces reliance on static signature rules and manual updates, offering a more dynamic and resilient approach to intrusion detection.': 'Dieses Projekt kombiniert ein auf maschinellem Lernen basierendes Anomalieerkennungsmodell mit Suricata IDS, um komplexe DDoS-Angriffe in Echtzeit besser zu erkennen. Das Random-Forest-Modell wird mit umfangreichen DDoS-Datensätzen trainiert und klassifiziert den Netzwerkverkehr. Suricata-Protokolle werden in Echtzeit verarbeitet und in einem Streamlit-Dashboard visualisiert, das Netzwerkadministratoren Analysen und Live-Überwachung ermöglicht. Das System erreichte in Offline-Tests eine Genauigkeit von 99 % und in Live-Netzwerken 78–94 %. Durch adaptives Lernen ist es weniger auf statische Signaturregeln und manuelle Aktualisierungen angewiesen und ermöglicht so eine dynamischere und robustere Angriffserkennung.',
  'Real-time': 'Echtzeit',
  'Final Year Project': 'Abschlussprojekt',
  'Phishing Emails Detection System': 'System zur Erkennung von Phishing-E-Mails',
  'This project is a real-time phishing email detection system developed as part of a Natural Language Processing (NLP) coursework. It leverages a TF-IDF vectorizer to extract textual features from email content and employs a Random Forest classifier to accurately distinguish between phishing and legitimate emails, achieving a 95% accuracy rate. The system is designed to connect to email inboxes using the IMAP protocol, automatically scanning and classifying incoming messages. By integrating machine learning and NLP techniques, the project enhances cybersecurity by providing proactive protection against phishing attacks, reducing the risk of credential theft and data breaches. The application features a user-friendly Streamlit web interface for live monitoring and visualization of detection results, making it accessible for both technical and non-technical users.': 'Dieses Projekt ist ein Echtzeit-System zur Erkennung von Phishing-E-Mails, das im Rahmen eines Kurses zur Verarbeitung natürlicher Sprache (NLP) entwickelt wurde. Ein TF-IDF-Vektorisierer extrahiert Textmerkmale aus E-Mails; ein Random-Forest-Klassifikator unterscheidet Phishing-Nachrichten mit einer Genauigkeit von 95 % von legitimen E-Mails. Das System verbindet sich über IMAP mit Postfächern und scannt und klassifiziert eingehende Nachrichten automatisch. Die Kombination aus maschinellem Lernen und NLP schützt proaktiv vor Phishing und verringert das Risiko von Zugangsdiebstahl und Datenlecks. Eine benutzerfreundliche Streamlit-Weboberfläche ermöglicht die Live-Überwachung und Visualisierung der Ergebnisse.',
  'Natural Language Processing': 'Verarbeitung natürlicher Sprache',
  'Web Application': 'Webanwendung',
  "Don't Blink Game": '„Nicht blinzeln“-Spiel',
  'The Don’t Blink Game is an intelligent Android-based game that utilizes computer vision and real-time facial recognition to create an engaging and interactive experience. Players are challenged to keep their eyes open for as long as possible, with the app continuously monitoring eye movements using the device’s camera and Google Vision API. The game logic is seamlessly integrated, automatically detecting blinks and accurately timing each session. Players can compete for the longest streak, track their progress, and view high scores through a user-friendly Material UI interface. Cloud integration with Firebase Realtime Database enables persistent score tracking and multiplayer features, allowing users to challenge friends and compare results globally. Designed for both entertainment and skill development, Don’t Blink offers a unique blend of fun, technology, and competition, making it suitable for all ages.': '„Nicht blinzeln“ ist ein intelligentes Android-Spiel, das maschinelles Sehen und Gesichtserkennung in Echtzeit für ein interaktives Spielerlebnis nutzt. Ziel ist es, die Augen möglichst lange offen zu halten. Die App überwacht die Augenbewegungen über die Gerätekamera und die Google Vision API, erkennt Blinzeln automatisch und misst jede Runde präzise. Eine benutzerfreundliche Material-UI-Oberfläche zeigt Bestwerte und Fortschritte. Durch die Anbindung an Firebase Realtime Database bleiben Punktestände gespeichert und Mehrspielerfunktionen ermöglichen weltweite Vergleiche. Das Spiel verbindet Unterhaltung, Technik und Wettbewerb für alle Altersgruppen.',
  'Mobile App Dev.': 'App-Entwicklung',
  'Data Mining': 'Datengewinnung',
  'Drowsiness Detection System': 'System zur Erkennung von Müdigkeit',
  'The DDS is an intelligent safety application designed to reduce road accidents caused by driver fatigue. Using computer vision, the system is trained to recognize facial features, specifically focusing on the eyes.': 'Das DDS ist eine intelligente Sicherheitsanwendung, die Verkehrsunfälle durch Müdigkeit am Steuer reduzieren soll. Mithilfe maschinellen Sehens wird das System darauf trainiert, Gesichtsmerkmale und insbesondere die Augen zu erkennen.',
  'Data Science': 'Datenwissenschaft',
  'Eye-tracking': 'Blickverfolgung',
  'Enterprise Network Design for Airports': 'Unternehmensnetzwerk für Flughäfen',
  "This network design for Dubai Int'l Airport creates a secure, scalable infrastructure using VLANs & access controls to enhance departmental communication & provide guest internet access while isolating internal systems.": 'Dieser Netzwerkentwurf für den Dubai International Airport schafft eine sichere, skalierbare Infrastruktur. VLANs und Zugriffskontrollen verbessern die Kommunikation zwischen Abteilungen und ermöglichen Gästen den Internetzugang, während interne Systeme abgeschirmt bleiben.',
  'DHCP Server': 'DHCP-Server',
  'Access Points': 'WLAN-Zugangspunkte',
  'Computer Networks': 'Computernetzwerke',
  'Parallel Matrix Operations Application': 'Anwendung für parallele Matrixoperationen',
  'This Bash Application utilizes multithreading and OpenMP to enhance matrix computations, overcoming the inefficiencies of sequential operations. This project aims to provide faster and more efficient processing for large matrices.': 'Diese Bash-Anwendung nutzt Multithreading und OpenMP, um Matrixberechnungen zu beschleunigen und die Ineffizienz sequenzieller Abläufe zu überwinden. Das Projekt ermöglicht eine schnellere und effizientere Verarbeitung großer Matrizen.',
  'Threads': 'Threads',
  'Operating Systems': 'Betriebssysteme',
  'Vehicle Trading System': 'Fahrzeughandelssystem',
  'A state-of-the-art vehicle management system designed to streamline operations and optimize data management. This project focuses on creating a robust database infrastructure for managing critical information, including vehicle details, maintenance logs, repair costs, and profit/loss analysis.': 'Ein modernes Fahrzeugverwaltungssystem zur Optimierung von Abläufen und Datenverwaltung. Das Projekt schafft eine robuste Datenbankinfrastruktur für wichtige Informationen wie Fahrzeugdetails, Wartungsprotokolle, Reparaturkosten sowie Gewinn- und Verlustanalysen.',
  'Design Patterns': 'Entwurfsmuster',
  'Maze Rush Game': 'Maze-Rush-Spiel',
  'Maze Rush is a labyrinth maze game where players race against the clock to navigate through mazes filled with obstacles. Using quick thinking & problem-solving skills, players compete for high scores & unlock achievements in this thrilling maze adventure featuring multiple levels of increasing difficulty.': 'Maze Rush ist ein Labyrinthspiel gegen die Zeit. Mit schnellem Denken und Problemlösungsfähigkeiten navigieren Spielende durch Hindernisse, erzielen Bestwerte und schalten Erfolge frei. Das Abenteuer bietet mehrere Level mit steigendem Schwierigkeitsgrad.',
  'Filing': 'Dateiverwaltung',
  'A* algorithm': 'A*-Algorithmus',
  'Data Structures & Algorithms': 'Datenstrukturen und Algorithmen',
  'Space Battle Game': 'Space-Battle-Spiel',
  'SPACE BATTLE is a single-player strategy game developed in assembly language, inspired by classic arcade games. Players navigate through obstacles, improve their logical thinking, and enhance reaction times while aiming for high scores. The game features engaging visuals, player and enemy mechanics, and is compatible with all Windows devices.': 'SPACE BATTLE ist ein Einzelspieler-Strategiespiel in Assemblersprache, inspiriert von klassischen Arcade-Spielen. Spielende weichen Hindernissen aus, trainieren logisches Denken und Reaktionsvermögen und versuchen, Bestwerte zu erzielen. Das Spiel bietet eine ansprechende Grafik sowie Spieler- und Gegnermechaniken und läuft auf allen Windows-Geräten.',
  'Game': 'Spiel',
  'Computer Architecture': 'Rechnerarchitektur',
  'Logic Design': 'Digitaltechnik',
  'Color Mania Game': 'Color-Mania-Spiel',
  'COLOR MANIA is a single-player strategy game inspired by classic puzzle games like Candy Crush developed on Unity Engine, while focusing on logical thinking and planning. Players match colorful dots to clear the board, enhancing their reaction time while enjoying engaging visuals and multiple game modes that are Timer mode & Moves mode.': 'COLOR MANIA ist ein Einzelspieler-Strategiespiel, inspiriert von klassischen Puzzlespielen wie Candy Crush und entwickelt mit der Unity Engine. Es fördert logisches Denken und Planung: Spielende verbinden farbige Punkte, räumen das Spielfeld ab und verbessern ihr Reaktionsvermögen. Es gibt mehrere Spielmodi, darunter Zeit- und Zugmodus.',
  'Object Oriented Programming': 'Objektorientierte Programmierung',
  'Game Dev.': 'Spieleentwicklung',
  'CUBRO Game': 'CUBRO-Spiel',
  'CUBRO is a single-player strategy game inspired by Subway Surfers, where players navigate through obstacles to achieve the highest score without collisions. This game emphasizes logical thinking and reaction time, providing an engaging experience for players.': 'CUBRO ist ein Einzelspieler-Strategiespiel, inspiriert von Subway Surfers. Spielende weichen Hindernissen aus und versuchen, ohne Zusammenstöße die höchste Punktzahl zu erreichen. Das Spiel fördert logisches Denken und Reaktionsvermögen.',
  'Computer Programming': 'Programmierung',
  'Karachi Tour Guide': 'Karachi-Reiseführer',
  "Karachi Tour Guide is a Mobile Application developed using no-code/drag-and-drop platform 'Thunkable', and is compatible with both Android and iOS devices. It provides all the information about landmarks to explore in Karachi.": 'Karachi Tour Guide ist eine mobile Anwendung, die mit der No-Code-Plattform Thunkable entwickelt wurde und auf Android- und iOS-Geräten läuft. Sie bietet Informationen zu Sehenswürdigkeiten in Karachi.',
  'Drag-and-Drop': 'Drag-and-drop',
  'No-code': 'No-Code',
  'Mobile Application': 'Mobile Anwendung',
  'Academic CV': 'Akademischer Lebenslauf',
  'Submit': 'Absenden',
  'Your Name': 'Ihr Name',
  'Your Message': 'Ihre Nachricht',
  'Sorry for the inconvenience, the CV is currently disabled by the owner.': 'Entschuldigung, der Lebenslauf wurde vom Eigentümer derzeit deaktiviert.',
  'Read more': 'Mehr anzeigen',
  'Show less': 'Weniger anzeigen',
  'Show topics': 'Themen anzeigen',
  'Hide topics': 'Themen ausblenden',
  'Present': 'Heute',
  'Dresden University of Technology': 'Technische Universität Dresden',
  'Masters, Computer Science': 'Masterstudium in Informatik',
  'Led security assessments and governance across digital banking, applications, APIs, third parties, and AI-enabled services. Coordinated vulnerability remediation and executive reporting, supported ISO 27001 and PCI compliance, and advanced access governance, secure AI adoption, and cybersecurity awareness.': 'Leitete Sicherheitsbewertungen und Governance-Maßnahmen in den Bereichen Digital Banking, Anwendungen, APIs, Drittanbieter und KI-gestützte Dienste. Koordinierte die Behebung von Sicherheitslücken und das Management von Berichten für die Geschäftsleitung, unterstützte die Einhaltung von ISO 27001 und PCI-Standards und förderte die Zugriffskontrolle, die sichere Einführung von KI sowie das Cybersicherheitsbewusstsein.',
};
const originalText = new WeakMap();
function translatePhrase(phrase) {
  if (language.value !== 'de') return phrase;
  if (germanText[phrase]) return germanText[phrase];
  if (/^\+\d+ more$/.test(phrase)) return phrase.replace(' more', ' weitere');
  return phrase
    .replace(/\bOctober\b/g, 'Oktober').replace(/\bOct\b/g, 'Okt.')
    .replace(/\bNovember\b/g, 'November').replace(/\bNov\b/g, 'Nov.')
    .replace(/\bDecember\b/g, 'Dezember').replace(/\bDec\b/g, 'Dez.')
    .replace(/\bSeptember\b/g, 'September').replace(/\bSept\b/g, 'Sept.')
    .replace(/\bAugust\b/g, 'August').replace(/\bAug\b/g, 'Aug.')
    .replace(/\bJuly\b/g, 'Juli').replace(/\bJune\b/g, 'Juni')
    .replace(/\bJun\b/g, 'Juni').replace(/\bMay\b/g, 'Mai')
    .replace(/\bApril\b/g, 'April').replace(/\bApr\b/g, 'Apr.')
    .replace(/\bMarch\b/g, 'März').replace(/\bMar\b/g, 'März')
    .replace(/\bFebruary\b/g, 'Februar').replace(/\bFeb\b/g, 'Feb.')
    .replace(/\bJanuary\b/g, 'Januar').replace(/\bJan\b/g, 'Jan.')
    .replace(/^Issued\b/, 'Ausgestellt im');
}
function applyLanguage() {
  const isGerman = language.value === 'de';
  document.documentElement.lang = isGerman ? 'de' : 'en';
  document.documentElement.setAttribute('data-language', language.value);
  document.title = isGerman
    ? 'Muhammad Zain | Cybersicherheitsanalyst und Softwareentwickler'
    : 'Muhammad Zain | Cybersecurity Analyst & Software Engineer';
  $('meta[name="description"]').content = isGerman
    ? 'Muhammad Zain: Softwareentwickler und Cybersecurity-Analyst. VAPT, digitale Forensik, GRC und KI-gestützte Bedrohungserkennung.'
    : 'Muhammad Zain: Software Engineering graduate and Cybersecurity Analyst. VAPT, digital forensics, GRC and AI-driven threat detection.';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: node => node.parentElement.closest('#dynamic-header')
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const phrase = source.trim().replace(/\s+/g, ' ');
    if (!phrase) continue;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    node.nodeValue = leading + translatePhrase(phrase) + trailing;
  }

  const heroName = $('.header-name');
  if (heroName) {
    heroName.textContent = isGerman ? 'Ich bin Muhammad Zain' : "I'm Muhammad Zain";
    heroName.setAttribute('aria-label', heroName.textContent);
  }
  $$('.row > .cardskill .op-sk .tag-sk.more').forEach(button => {
    const expanded = button.dataset.open === '1';
    button.textContent = expanded
      ? (isGerman ? 'Weniger anzeigen' : 'Show less')
      : `+${button.dataset.count} ${isGerman ? 'weitere' : 'more'}`;
  });
  $$('.card .description + .readmore').forEach(button => {
    button.textContent = button.previousElementSibling.classList.contains('open')
      ? (isGerman ? 'Weniger anzeigen' : 'Show less')
      : (isGerman ? 'Mehr anzeigen' : 'Read more');
  });
  $$('#cert .cardskill .description + .readmore').forEach(button => {
    button.textContent = button.closest('.cardskill').classList.contains('open')
      ? (isGerman ? 'Themen ausblenden' : 'Hide topics')
      : (isGerman ? 'Themen anzeigen' : 'Show topics');
  });

  const setLabel = (selector, english, german) => {
    const element = $(selector);
    if (element) element.setAttribute('aria-label', isGerman ? german : english);
  };
  setLabel('nav', 'Main navigation', 'Hauptnavigation');
  setLabel('#theme-toggle',
    `Switch to ${document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'} mode`,
    `Zum ${document.documentElement.dataset.theme === 'dark' ? 'hellen' : 'dunklen'} Modus wechseln`);
  setLabel('#language-toggle', 'Switch language to German', 'Sprache auf Englisch umstellen');
  setLabel('#sidemenu .close', 'Close menu', 'Menü schließen');
  setLabel('.menu-btn', 'Open menu', 'Menü öffnen');
  $('#language-toggle').textContent = isGerman ? 'ENG' : 'DEU';
  $('#name').placeholder = isGerman ? 'Ihr Name' : 'Your Name';
  $('#message').placeholder = isGerman ? 'Ihre Nachricht' : 'Your Message';
  $('#name').name = isGerman ? 'Name' : 'Name';
  $('#message').name = isGerman ? 'Nachricht' : 'Message';
  $('#visit-counter img')?.setAttribute('title', isGerman ? 'Besucherzähler' : 'Counter Widget');
}

/* Theme -------------------------------------------------------------- */
const storageKey = 'theme-preference';
const theme = {
  value: localStorage.getItem(storageKey) ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};
function reflectTheme() {
  document.documentElement.setAttribute('data-theme', theme.value);
  const isGerman = language.value === 'de';
  $('#theme-toggle')?.setAttribute('aria-label', isGerman
    ? `Zum ${theme.value === 'dark' ? 'hellen' : 'dunklen'} Modus wechseln`
    : `Switch to ${theme.value === 'dark' ? 'light' : 'dark'} mode`);
  const logo = $('#logo-image');
  if (logo) logo.src = theme.value === 'dark' ? 'images/zain_logo_black_background.png' : 'images/zain_logo_white_background.png';
}
reflectTheme();
$('#theme-toggle')?.addEventListener('click', () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem(storageKey, theme.value);
  reflectTheme();
});
$('#language-toggle')?.addEventListener('click', () => {
  language.value = language.value === 'en' ? 'de' : 'en';
  localStorage.setItem(languageStorageKey, language.value);
  applyLanguage();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
  if (localStorage.getItem(storageKey)) return; // respect an explicit choice
  theme.value = matches ? 'dark' : 'light';
  reflectTheme();
});

/* Nav: mobile menu, scroll progress, active section ------------------ */
const nav = $('nav');
const setMenu = open => {
  nav.classList.toggle('open', open);
  $('.menu-btn').setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
$('.menu-btn')?.addEventListener('click', () => setMenu(true));
$('#sidemenu .close')?.addEventListener('click', () => setMenu(false));
$$('#sidemenu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));

const bar = $('#progress');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  nav.classList.toggle('scrolled', scrollY > 20);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const links = $$('#sidemenu a[href^="#"]');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => { const s = $(a.getAttribute('href')); s && spy.observe(s); });

/* Tabs with a sliding indicator -------------------------------------- */
const tabs = $$('.tab-links');
const ind = document.createElement('span');
ind.className = 'tab-ind';
$('.tab-titles').prepend(ind);
tabs.forEach(t => t.setAttribute('role', 'tab'));
$('.tab-titles').setAttribute('role', 'tablist');
function moveInd(t) {
  ind.style.width = t.offsetWidth + 'px';
  ind.style.transform = `translateX(${t.offsetLeft - 5}px)`;
}
function openTab(tab) {
  tabs.forEach(t => { t.classList.toggle('active-link', t === tab); t.setAttribute('aria-selected', t === tab); });
  $$('.tab-contents').forEach(c => c.classList.toggle('active-tab', c.id === tab.dataset.tab));
  moveInd(tab);
}
tabs.forEach(t => {
  t.tabIndex = 0;
  t.addEventListener('click', () => openTab(t));
  t.addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), openTab(t)));
});
addEventListener('load', () => moveInd($('.tab-links.active-link')));
addEventListener('resize', () => moveInd($('.tab-links.active-link')));

/* Long tag lists collapse; long descriptions clamp ------------------- */
$$('.row > .cardskill .op-sk').forEach(box => {
  const chips = $$('.tag-sk', box), keep = 12;
  if (chips.length <= keep + 3) return;
  chips.slice(keep).forEach(c => c.classList.add('hid'));
  const b = document.createElement('button');
  b.className = 'tag-sk more'; b.type = 'button';
  const count = chips.length - keep;
  b.dataset.count = count;
  const label = '+' + count + (language.value === 'de' ? ' weitere' : ' more');
  b.textContent = label;
  b.addEventListener('click', () => {
    const open = b.dataset.open !== '1';
    chips.slice(keep).forEach(c => c.classList.toggle('hid', !open));
    b.dataset.open = open ? '1' : '0';
    b.textContent = open
      ? (language.value === 'de' ? 'Weniger anzeigen' : 'Show less')
      : label;
  });
  box.appendChild(b);
});

$$('.card .description').forEach(p => {
  p.classList.add('clamp');
  if (p.scrollHeight <= p.clientHeight + 2) { p.classList.remove('clamp'); return; }
  const b = document.createElement('button');
  b.className = 'readmore'; b.type = 'button';
  b.textContent = language.value === 'de' ? 'Mehr anzeigen' : 'Read more';
  b.addEventListener('click', () => {
    const open = p.classList.toggle('open');
    b.textContent = open
      ? (language.value === 'de' ? 'Weniger anzeigen' : 'Show less')
      : (language.value === 'de' ? 'Mehr anzeigen' : 'Read more');
  });
  p.after(b);
});

// Certifications: tags tuck away until the card is opened
$$('#cert .cardskill').forEach(c => {
  const b = document.createElement('button');
  b.className = 'readmore'; b.type = 'button';
  b.textContent = language.value === 'de' ? 'Themen anzeigen' : 'Show topics';
  b.addEventListener('click', () => {
    const open = c.classList.toggle('open');
    b.textContent = open
      ? (language.value === 'de' ? 'Themen ausblenden' : 'Hide topics')
      : (language.value === 'de' ? 'Themen anzeigen' : 'Show topics');
  });
  $('.description', c).after(b);
});

/* Toast, CV button, contact form ------------------------------------- */
const toast = document.createElement('div');
toast.id = 'toast'; toast.setAttribute('role', 'status');
document.body.appendChild(toast);
function say(msg) {
  toast.textContent = translatePhrase(msg);
  if (toast.firstChild) originalText.set(toast.firstChild, msg);
  toast.classList.add('show');
  clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('show'), 3200);
}
$('#cv-btn')?.addEventListener('click', () => say('Sorry for the inconvenience, the CV is currently disabled by the owner.'));

function sendEmail() {
  const name = $('#name').value, message = $('#message').value;
  window.location.href = 'mailto:mzainjed@gmail.com?subject=' +
    encodeURIComponent(language.value === 'de'
      ? 'Kontaktanfrage von ' + name + ' über das Portfolio'
      : 'Contact request from ' + name + ' via Portfolio') +
    '&body=' + encodeURIComponent(message);
  return false;
}

/* Visit notification (unchanged behaviour; inactive until emailjs.init is enabled) */
addEventListener('load', () => {
  // emailjs.init("YOUR_PUBLIC_KEY");
  if (typeof emailjs === 'undefined') return;
  const ua = navigator.userAgent;
  emailjs.send('service_my_portfolio', 'template_portfolio_visit', {
    to_email: 'mzainjed@gmail.com', site_name: 'Portfolio Website',
    visit_time: new Date().toLocaleString(), user_agent: ua,
    visitor_info: JSON.stringify({ userAgent: ua, language: navigator.language, screenResolution: `${screen.width}x${screen.height}` })
  }).then(r => console.log('Visit notification sent!', r.status))
    .catch(err => console.error('Failed to send visit notification:', err));
});

/* Background video (path kept from the original) --------------------- */
const vid = $('#bgvideo');
if (vid) {
  vid.src = 'images/compvideo.mp4';
  vid.onerror = () => console.error('Error loading video. Please check the file path.');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) vid.removeAttribute('autoplay');
}

applyLanguage();