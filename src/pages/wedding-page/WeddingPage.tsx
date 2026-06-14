import React from 'react';
import '../../index.css';
import './weddingPage.css';

const WeddingPage: React.FC = () => {
    return (
        <div className="wedding-page">
            <div className="wedding-card">
                <header className="wedding-header">
                    <h1>Vår Store Dag</h1>
                    <p className="welcome-text">
                        Vi gleder oss utrolig mye til å feire sammen med familie og venner! Her finner du litt praktisk
                        informasjon i forkant av den store dagen.
                    </p>
                </header>

                <hr className="divider" />

                <section className="info-section">
                    <h3>Gode Hjelpere</h3>
                    <p>
                        Den fantastiske toastmasteren vår for dagen er <strong>Kenny Kristiansen</strong>. Om du ønsker
                        å holde tale eller har andre innslag, er det bare å ta kontakt med ham.
                    </p>
                    <p>
                        De fine forloverne våre er
                        <br />
                        <strong>Andreas Frafjord</strong> (for Martin) og <strong>Pauli Riveland</strong> (for Vilde).
                    </p>
                </section>

                <section className="info-section wishlist-section">
                    <h3>Ønskeliste</h3>
                    <p className="wishlist-intro">
                        Vi har samlet noen av ønskene våre digitalt. Du kan enten bruke knappen under, eller klikke
                        direkte på denne tekstlenken:{' '}
                        <a
                            href="https://www.onskelister.no/liste?id=k1p7ksFoDth60V2b9tHs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                        >
                            https://www.onskelister.no/liste?id=k1p7ksFoDth60V2b9tHs
                        </a>
                        .
                    </p>
                    <a
                        href="https://www.onskelister.no/liste?id=k1p7ksFoDth60V2b9tHs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wishlist-btn"
                    >
                        Åpne Ønskeliste
                    </a>
                    <p />
                    <i>Om du ønsker å kjøpe noe som ikke er på ønskelisten så går selvfølgelig det fint.</i>
                </section>

                <section className="info-section dresscode-section">
                    <h3>Kleskode</h3>
                    <p>
                        Det hadde vært utrolig gøy og koselig om dere vil kle dere i
                        <span className="autumn-colors"> vakre høstfarger</span>! Dette er selvfølgelig helt valgfritt –
                        det aller viktigste for oss er at dere kommer og deler dagen med oss akkurat som dere er.
                    </p>
                </section>

                <footer className="wedding-footer">
                    <p>Hjertelig velkommen!</p>
                </footer>
            </div>
        </div>
    );
};

export default WeddingPage;
