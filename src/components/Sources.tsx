import React from 'react';

const sources = [
    { id: 1, title: 'NRK: «Slik fungerer løsepengeviruset som rammet Hydro» (13. april 2019)', url: 'https://www.nrk.no/norge/slik-fungerer-losepengeviruset-som-rammet-hydro-1.14481782' },
    { id: 2, title: 'NRK: «Teknologipessimist ble helt etter dataangrep» (11. april 2019)', url: 'https://www.nrk.no/norge/teknologipessimist-ble-helt-etter-dataangrep-1.14509963' },
    { id: 3, title: 'NRK: «Hydro-hacking kan ha kostet 350 millioner» (26. mars 2019)', url: 'https://www.nrk.no/norge/hydro-hacking-kan-ha-kostet-350-millioner-1.14491443' },
    { id: 4, title: 'Dagens Næringsliv: «Hackerangrepet mot Hydro enda dyrere enn tidligere antatt» (23. oktober 2020)', url: 'https://www.dn.no/bors/hydro/brasil/norsk-hydro/hackerangrepet-mot-hydro-enda-dyrere-enn-tidligere-antatt-ny-prislapp-pa-800-millioner-kroner/2-1-898620' },
    { id: 5, title: 'Dagens Næringsliv: «Kripos vet fortsatt ikke hvem som står bak» (21. august 2019)', url: 'https://www.dn.no/marked/hydro/kripos/knut-jostein-satnan/kripos-vet-fortsatt-ikke-hvem-som-star-bak-hydro-angrepet/2-1-656927' },
    { id: 6, title: 'Aftenposten: «Dataangrepet kostet Hydro 800 millioner kroner» (29. oktober 2021)', url: 'https://www.aftenposten.no/norge/i/47WR3o/dataangrepet-kostet-hydro-800-millioner-kroner-naa-er-det-kriminelle-nettverket-avdekket' },
    { id: 7, title: 'E24: «Vi måtte gå tilbake til penn, papir og kalkulator» (19. mars 2019)', url: 'https://e24.no/boers-og-finans/i/6nmawo/' },
    { id: 8, title: 'TU.no: «Vi har heldigvis ansatte som husker...» (17. november 2019)', url: 'https://www.tu.no/artikler/vi-har-heldigvis-ansatte-som-husker-hvordan-man-skal-handtere-produksjonen-manuelt-de-ble-vare-helter/479110' },
    { id: 9, title: 'TU.no: «Stans i produksjon: Hydro utsatt for stort dataangrep» (19. mars 2019)', url: 'https://www.tu.no/artikler/hydro-utsatt-for-stort-cyberangrep/460733' },
    { id: 10, title: 'VG: «Kripos med på storaksjon i Ukraina» (28. november 2023)', url: 'https://www.vg.no/nyheter/i/dwA3do/kripos-med-paa-storaksjon-i-ukraina-hackerliga-tatt-etter-hydro-angrep' },
    { id: 11, title: 'Hydro.com: «Cyberangrep på Hydro»', url: 'https://www.hydro.com/no-NO/media/pa-dagsorden/cyberangrep-pa-hydro/' },
    { id: 12, title: 'Hydro.com: «Oppdatering på cyber-angrep 21. mars»', url: 'https://www.hydro.com/no-NO/media/news/2019/oppdatering-pa-cyber-angrep-21-mars/' },
    { id: 13, title: 'Hydro.com: «Update on cyber attack March 26»', url: 'https://www.hydro.com/en/global/media/news/2019/update-on-cyber-attack-march-26/' },
    { id: 14, title: 'Hydro.com: «Hydro tildeles pris for åpenhet etter cyberangrep»', url: 'https://www.hydro.com/no-NO/media/news/2019/hydro-tildeles-pris-for-apenhet-etter-cyberangrep/' },
    { id: 15, title: 'Politiet.no: «Kripos: Flere personer i kriminelt nettverk pågrepet» (26. november 2023)', url: 'https://www.politiet.no/en/aktuelt-tall-og-fakta/aktuelt/news/2023/11/26/kripos-flere-personer-i-kriminelt-nettverk-pagrepet/' },
    { id: 16, title: 'Microsoft Source: «Hackers hit Norsk Hydro with ransomware» (Desember 2019)', url: 'https://news.microsoft.com/source/features/digital-transformation/hackers-hit-norsk-hydro-ransomware-company-responded-transparency/' },
    { id: 17, title: 'Reuters: «Aluminium producer Hydro hit by cyber attack» (19. mars 2019)', url: 'https://www.cnbc.com/2019/03/19/reuters-america-update-7-aluminium-producer-hydro-hit-by-cyber-attack-shuts-some-plants.html' },
    { id: 18, title: 'Bleeping Computer: «LockerGoga Ransomware Sends Norsk Hydro Into Manual Mode» (22. mars 2019)', url: 'https://www.bleepingcomputer.com/news/security/lockergoga-ransomware-sends-norsk-hydro-into-manual-mode/' },
    { id: 19, title: 'TechCrunch: «Europol detains hackers behind 2019 Norsk Hydro ransomware attack» (29. oktober 2021)', url: 'https://techcrunch.com/2021/10/29/europol-hackers-norsk-hydro/' },
    { id: 20, title: 'TIME: «How One Company Refused to Let Its Cyberattackers Win» (14. juli 2021)', url: 'https://time.com/6080293/norsk-hydro-ransomware-attack/ ' },
    { id: 21, title: 'J.P. Morgan: «Follow Norsk Hydro\'s gold standard response»', url: 'https://www.jpmorgan.com/insights/treasury/treasury-management/norsk-hydros-gold-standard-response' },
    { id: 22, title: 'SecurityWeek: «Industry Reactions to Norsk Hydro Breach»', url: 'https://www.securityweek.com/industry-reactions-norsk-hydro-breach-feedback-friday/' },
    { id: 23, title: 'Help Net Security: «Norsk Hydro cyber attack: What happened?» (20. mars 2019)', url: 'https://www.helpnetsecurity.com/2019/03/20/norsk-hydro-cyber-attack/' },
    { id: 24, title: 'Nozomi Networks: «Breaking Research: LockerGoga Ransomware Impacts Norsk Hydro»', url: 'https://www.nozominetworks.com/blog/breaking-research-lockergoga-ransomware-impacts-norsk-hydro' },
    { id: 25, title: 'Control Engineering: «Throwback Attack: Norsk Hydro gets hit by LockerGoga» (Januar 2025)', url: 'https://www.controleng.com/throwback-attack-norsk-hydro-gets-hit-by-lockergoga-ransomware/' },
    { id: 26, title: 'Swimlane: «The Norsk Hydro Lockergoga Ransomware Cyber Attacks»', url: 'https://swimlane.com/blog/norsk-hydro-ransomware-attack/' },
    { id: 27, title: 'MITRE/DTIC: «Cyber Risk to Mission Case Study: Norsk Hydro»', url: 'https://apps.dtic.mil/sti/trecms/pdf/AD1183007.pdf' },
];

const Sources: React.FC = () => {
    return (
        <section style={{ padding: '4rem 2rem', backgroundColor: '#000', color: '#888', fontSize: '0.9rem', borderTop: '1px solid #333' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h3 style={{ color: '#fff', marginBottom: '2rem', fontSize: '1.2rem' }}>Kilder</h3>
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    {sources.map((source) => (
                        <li key={source.id} id={`source-${source.id}`} style={{ marginBottom: '0.5rem' }}>
                            <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#4da6ff'}
                                onMouseOut={(e) => e.currentTarget.style.color = '#888'}
                            >
                                {source.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Sources;
