const residenza = {
    "Abruzzo": {
        "L'Aquila": [
            "L'Aquila", "Avezzano", "Sulmona", "Scoppito", "Pescasseroli", "Celano", "Fossa", "Barisciano", "Civitella Roveto", "Gioia dei Marsi"
        ],
        "Teramo": [
            "Teramo", "Giulianova", "Martinsicuro", "Roseto degli Abruzzi", "Castellalto", "Alba Adriatica", "Notaresco", "Silvi", "Civitella del Tronto", "Pineto"
        ],
        "Pescara": [
            "Pescara", "Montesilvano", "Spoltore", "Cepagatti", "Cappelle sul Tavo", "Carpineto della Nora", "Elice", "Scafa"
        ],
        "Chieti": [
            "Chieti", "Vasto", "Lanciano", "Ortona", "Francavilla al Mare", "Castrovalva", "Pietranico"
        ]
    },
    "Basilicata": {
        "Potenza": [
            "Potenza", "Melfi", "Lagonegro", "Avigliano", "Rionero in Vulture", "Marsico Nuovo", "Pignola", "Bella", "Satriano di Lucania"
        ],
        "Matera": [
            "Matera", "Bernalda", "Pomarico", "Ferrandina", "Irsina", "Stigliano", "Montalbano Jonico"
        ]
    },
    "Calabria": {
        "Catanzaro": [
            "Catanzaro", "Lamezia Terme", "Soverato", "Montauro", "Soveria Mannelli", "Taverna", "Girifalco", "Borgia", "Cardinale"
        ],
        "Cosenza": [
            "Cosenza", "Rende", "Scalea", "Cetraro", "Castrovillari", "Corigliano Calabro", "Rossano", "Mendicino"
        ],
        "Reggio Calabria": [
            "Reggio Calabria", "Taurianova", "Siderno", "Locri", "Melito di Porto Salvo", "Villa San Giovanni", "Polistena"
        ],
        "Crotone": [
            "Crotone", "Cirò Marina", "Cutro", "Strongoli", "Isola di Capo Rizzuto"
        ],
        "Vibo Valentia": [
            "Vibo Valentia", "Tropea", "Sant'Onofrio", "Pizzo", "Soriano Calabro"
        ]
    },
    "Campania": {
        "Napoli": [
            "Napoli", "Pompei", "Ercolano", "Giugliano in Campania", "Torre del Greco", "Castellammare di Stabia", "Afragola", "Marano di Napoli"
        ],
        "Salerno": [
            "Salerno", "Battipaglia", "Cava de' Tirreni", "Eboli", "Sapri", "Capaccio Paestum"
        ],
        "Avellino": [
            "Avellino", "Mercogliano", "Ariano Irpino", "Solofra", "Lioni"
        ],
        "Caserta": [
            "Caserta", "Marcianise", "Aversa", "Santa Maria Capua Vetere", "Capua"
        ],
        "Benevento": [
            "Benevento", "San Giorgio del Sannio", "Montesarchio", "Solopaca"
        ]
    },
    "Emilia-Romagna": {
        "Bologna": [
            "Bologna", "Imola", "Castel Maggiore", "San Lazzaro di Savena", "Zola Predosa"
        ],
        "Modena": [
            "Modena", "Carpi", "Sassuolo", "Mirandola", "Vignola"
        ],
        "Parma": [
            "Parma", "Fidenza", "Borgo Val di Taro", "Langhirano"
        ],
        "Reggio Emilia": [
            "Reggio Emilia", "Correggio", "Castelnovo ne' Monti", "Scandiano"
        ],
        "Ferrara": [
            "Ferrara", "Comacchio", "Copparo", "Portomaggiore"
        ],
        "Ravenna": [
            "Ravenna", "Faenza", "Cervia", "Bagnacavallo"
        ],
        "Forlì-Cesena": [
            "Forlì", "Cesena", "Savignano sul Rubicone", "Forlimpopoli"
        ],
        "Piacenza": [
            "Piacenza", "Fiorenzuola d'Arda", "Castel San Giovanni", "Vigolzone"
        ]
    },
    "Friuli Venezia Giulia": {
        "Trieste": [
            "Trieste", "Muggia", "Monfalcone", "Duino Aurisina", "Sistiana"
        ],
        "Udine": [
            "Udine", "Cividale del Friuli", "Gemona del Friuli", "San Daniele del Friuli", "Palmanova"
        ],
        "Pordenone": [
            "Pordenone", "Sacile", "Cordenons", "Spilimbergo", "Fontanafredda"
        ],
        "Gorizia": [
            "Gorizia", "Nova Gorica", "Sagrado"
        ]
    },
    "Lazio": {
        "Roma": [
            "Roma", "Fiumicino", "Civitavecchia", "Guidonia Montecelio", "Velletri", "Tivoli", "Albano Laziale", "Ciampino"
        ],
        "Frosinone": [
            "Frosinone", "Cassino", "Sora", "Ceccano", "Alatri"
        ],
        "Latina": [
            "Latina", "Terracina", "Formia", "Sperlonga", "Gaeta"
        ],
        "Rieti": [
            "Rieti", "Cittaducale", "Fara in Sabina", "Leonessa"
        ]
    },
    "Liguria": {
        "Genova": [
            "Genova", "Rapallo", "Chiavari", "Sestri Levante", "Nervi"
        ],
        "Imperia": [
            "Imperia", "Sanremo", "Ventimiglia", "Diano Marina", "Taggia"
        ],
        "La Spezia": [
            "La Spezia", "Sarzana", "Carrara", "Lerici"
        ],
        "Savona": [
            "Savona", "Albisola", "Finale Ligure", "Borghetto Santo Spirito"
        ]
    },
    "Lombardia": {
        "Milano": [
            "Milano", "Sesto San Giovanni", "Bollate", "Rho", "Cinisello Balsamo", "Legnano", "Magenta", "Paderno Dugnano"
        ],
        "Bergamo": [
            "Bergamo", "Treviglio", "Seriate", "Dalmine", "Grumello del Monte"
        ],
        "Brescia": [
            "Brescia", "Desenzano del Garda", "Lumezzane", "Botticino", "Chiari"
        ],
        "Como": [
            "Como", "Cantù", "Lecco", "Erba", "Olgiate Comasco"
        ],
        "Cremona": [
            "Cremona", "Crema", "Casalmaggiore", "Castelverde", "Pizzighettone"
        ],
        "Lecco": [
            "Lecco", "Merate", "Oggiono", "Calolziocorte"
        ],
        "Lodi": [
            "Lodi", "Casalpusterlengo", "Codogno", "Sant'Angelo Lodigiano"
        ],
        "Mantova": [
            "Mantova", "Gonzaga", "Castiglione delle Stiviere", "Ostiglia"
        ],
        "Monza e Brianza": [
            "Monza", "Seregno", "Desio", "Lissone"
        ],
        "Pavia": [
            "Pavia", "Voghera", "Casorate Primo", "Cava Manara"
        ],
        "Sondrio": [
            "Sondrio", "Tirano", "Morbegno", "Chiavenna"
        ],
        "Varese": [
            "Varese", "Busto Arsizio", "Gallarate", "Tradate"
        ]
    },
    "Marche": {
        "Ancona": [
            "Ancona", "Fabriano", "Jesi", "Osimo", "Senigallia"
        ],
        "Pesaro e Urbino": [
            "Pesaro", "Urbino", "Fano", "Mondolfo", "Gabicce Mare"
        ],
        "Macerata": [
            "Macerata", "Civitanova Marche", "Recanati", "Pollenza"
        ],
        "Fermo": [
            "Fermo", "Porto San Giorgio", "Sant'Elpidio a Mare", "Fermo"
        ],
        "Ascoli Piceno": [
            "Ascoli Piceno", "San Benedetto del Tronto", "Grottammare", "Castel di Lama"
        ]
    },
    "Molise": {
        "Campobasso": [
            "Campobasso", "Termoli", "Isernia", "Campomarino"
        ],
        "Isernia": [
            "Isernia", "Venafro", "Sesto Campano", "Montenero di Bisaccia"
        ]
    },
    "Piemonte": {
        "Torino": [
            "Torino", "Collegno", "Nichelino", "Settimo Torinese", "Moncalieri"
        ],
        "Alessandria": [
            "Alessandria", "Casale Monferrato", "Tortona", "Novi Ligure"
        ],
        "Asti": [
            "Asti", "Canelli", "Nizza Monferrato", "Agliano Terme"
        ],
        "Biella": [
            "Biella", "Cossato", "Valle Mosso", "Quaregna"
        ],
        "Cuneo": [
            "Cuneo", "Alba", "Bra", "Fossano", "Mondovì"
        ],
        "Novara": [
            "Novara", "Arona", "Oleggio", "Ghemme"
        ],
        "Verbano-Cusio-Ossola": [
            "Verbania", "Omegna", "Domodossola", "Baveno"
        ]
    },
    "Puglia": {
        "Bari": [
            "Bari", "Bitonto", "Molfetta", "Terlizzi", "Giovinazzo"
        ],
        "Lecce": [
            "Lecce", "Gallipoli", "Maglie", "Taurisano", "Nardò"
        ],
        "Taranto": [
            "Taranto", "Massafra", "Martina Franca", "Grottaglie"
        ],
        "Brindisi": [
            "Brindisi", "Ostuni", "Francavilla Fontana", "San Vito dei Normanni"
        ],
        "Foggia": [
            "Foggia", "Manfredonia", "San Severo", "Cerignola"
        ],
        "Barletta-Andria-Trani": [
            "Barletta", "Andria", "Trani", "Bisceglie"
        ]
    },
    "Sardegna": {
        "Cagliari": [
            "Cagliari", "Quartu Sant'Elena", "Selargius", "Pula"
        ],
        "Sassari": [
            "Sassari", "Alghero", "Olbia", "Tempio Pausania"
        ],
        "Nuoro": [
            "Nuoro", "Siniscola", "Bosa", "Orgosolo"
        ],
        "Oristano": [
            "Oristano", "Cabras", "Ghilarza", "San Vero Milis"
        ]
    },
    "Sicilia": {
        "Palermo": [
            "Palermo", "Monreale", "Bagheria", "Carini", "Partinico", "Boccadifalco", "Villabate"
        ],
        "Catania": [
            "Catania", "Acireale", "Giarre", "Linguaglossa", "Paternò", "Nicolosi"
        ],
        "Messina": [
            "Messina", "Milazzo", "Taormina", "Barcellona Pozzo di Gotto", "Lipari"
        ],
        "Agrigento": [
            "Agrigento", "Favara", "Sciacca", "Licata", "Ribera"
        ],
        "Caltanissetta": [
            "Caltanissetta", "Gela", "Niscemi", "Vallelunga Pratameno"
        ],
        "Enna": [
            "Enna", "Piazza Armerina", "Nicosia", "Calascibetta"
        ],
        "Trapani": [
            "Trapani", "Marsala", "Mazara del Vallo", "Custonaci"
        ],
        "Siracusa": [
            "Siracusa", "Avola", "Noto", "Pachino"
        ]
    },
    "Toscana": {
        "Firenze": [
            "Firenze", "Prato", "Empoli", "Sesto Fiorentino", "Scandicci"
        ],
        "Arezzo": [
            "Arezzo", "Castiglion Fiorentino", "Cortona", "Sansepolcro"
        ],
        "Grosseto": [
            "Grosseto", "Follonica", "Orbetello", "Castiglione della Pescaia"
        ],
        "Livorno": [
            "Livorno", "Rosignano Marittimo", "Collesalvetti", "Cecina"
        ],
        "Lucca": [
            "Lucca", "Viareggio", "Castelnuovo di Garfagnana", "Pietrasanta"
        ],
        "Pisa": [
            "Pisa", "San Giuliano Terme", "Vecchiano", "Pontedera"
        ],
        "Pistoia": [
            "Pistoia", "Montecatini Terme", "Pescia", "Agliana"
        ],
        "Siena": [
            "Siena", "Montepulciano", "Poggibonsi", "Colle di Val d'Elsa"
        ]
    },
    "Trentino-Alto Adige": {
        "Trento": [
            "Trento", "Rovereto", "Tione di Trento", "Arco"
        ],
        "Bolzano": [
            "Bolzano", "Merano", "Laives", "Bressanone"
        ]
    },
    "Umbria": {
        "Perugia": [
            "Perugia", "Terni", "Gubbio", "Città di Castello", "Foligno"
        ],
        "Terni": [
            "Terni", "Narni", "Amelia", "Orvieto"
        ]
    },
    "Valle d'Aosta": {
        "Aosta": [
            "Aosta", "Saint-Vincent", "Courmayeur", "Verres"
        ]
    },
    "Veneto": {
        "Venezia": [
            "Venezia", "Mestre", "Chioggia", "Mirano"
        ],
        "Verona": [
            "Verona", "Legnago", "Bussolengo", "San Giovanni Lupatoto"
        ],
        "Vicenza": [
            "Vicenza", "Thiene", "Schio", "Valdagno"
        ],
        "Treviso": [
            "Treviso", "Castelfranco Veneto", "Conegliano", "Mogliano Veneto"
        ],
        "Padova": [
            "Padova", "Abano Terme", "Monselice", "Este"
        ],
        "Rovigo": [
            "Rovigo", "Adria", "Lendinara", "Villadose"
        ]
    }
};

export default residenza;