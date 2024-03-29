const agregarProductosLocalStorage = () =>
{
    const arrayProductos = [
        {
            id: 1,
            nombre: "Camisa blanca",
            precio: "$4800",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd85d82659c6ac98a29/previews/659c9cd95d82659c6ac98ed6/download/8372060250_2_1_1.jpg",
            descripcion:"Camisa confeccionada con tejido en mezcla de algodón. Cuello solapa con escote pico y manga larga. Cierre frontal con botones."
        },
        {
            id: 2,
            nombre: "Remera un hombro",
            precio: "$7500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd7e64462e9d143cdbc/previews/659c9cd7e64462e9d143cdfe/download/5644858251_2_1_1.jpg",
            descripcion:"Camiseta de escote asimétrico y manga corta."
        },
        {
            id: 3,
            nombre: "Chaleco lana gris",
            precio: "$5500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd520d6314f0674950b/previews/659c9cd620d6314f0674955a/download/5536157803_2_1_1.jpg",
            descripcion:"Chaleco con escote pico y manga sisa. Falsos bolsillos delanteros de vivo."
        },
        {
            id: 4,
            nombre: "Campera de cuero",
            precio: "$15000",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd49d6145864f4f66eb/previews/659c9cd59d6145864f4f6744/download/5427413803_2_1_1.jpg",
            descripcion:"Cazadora de cuello solapa y manga larga con trabillas en hombro. Bolsillos delanteros con cremallera metálica."
        },
        {
            id: 5,
            nombre: "Vestido negro",
            precio: "$18000",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd2370a6c249fd916c8/previews/659c9cd3370a6c249fd9180a/download/3067279800_2_1_1.jpg",
            descripcion:"Vestido de cuello redondo y manga larga. Cierre en espada con cremallera."
        },
    
        {
            id: 6,
            nombre: "Pollera cuero tiro alto",
            precio: "$9000",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd13d9b48300df28dc4/previews/659c9cd23d9b48300df28def/download/3046246800_2_2_1.jpg",
            descripcion:"Falda de cuero de tiro alto. Falsos bolsillos de vivo en delantero. Cierre lateral con cremallera oculta en costura."
        },
        {
            id: 7,
            nombre: "Vestido Minmay",
            precio: "$8000",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd0fac4f9490f9ccfbc/previews/659c9cd1fac4f9490f9ccfd4/download/2245717507_2_1_1.jpg",
            descripcion:"Vestido de cuello redondo y manga sisa. Detalle de espalda descubierta. Cierre en espalda con botón."
        },
        {
            id: 8,
            nombre: "Vestido largo color hueso",
            precio: "$7500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccf6209b0f619971961/previews/659c9cd06209b0f61997198b/download/2149010710_2_1_1.jpg",
            descripcion:"Vestido de escote pico con cuello.Manga larga"
        },
        {
            id: 9,
            nombre: "Buzo gris lana",
            precio: "$5500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cce9d6145864f4f57c9/previews/659c9cce9d6145864f4f5ae3/download/2144187800_2_3_1.jpg",
            descripcion:"Jersey de cuello redondo y manga larga de lana."
        },
        {
            id: 10,
            nombre: "Pollera tableada tiro bajo",
            precio: "$8000",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccb0f7190eeeb4aed51/previews/659c9ccc0f7190eeeb4aed64/download/2055583800_2_2_1.jpg",
            descripcion:"Falda tipo skort cinturilla elástica con cierre botón frontal y aplique. Detalle tablas."
        },
        {
            id: 11,
            nombre: "Short cuero tiro alto",
            precio: "$5500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccaef1ca4530cdfb2fa/previews/659c9ccbef1ca4530cdfb314/download/8372322800_2_1_1.jpg",
            descripcion:"Bermudas de cuero tiro alto con bolsillos en delantero. Cierre lateral con cremallera. Cierre lateral con cremallera oculta en costura."
        },
        {
            id: 12,
            nombre: "Camisa top blanca",
            precio: "$4500",
            img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccc85db741c6d1aba8d/previews/659c9ccd85db741c6d1abaff/download/2131231250_2_1_1.jpg",
            descripcion:"Camisa corta de cuello solapa y manga sisa amplia. Bajo ajustable con cordones en mismo tejido. Cierre frontal con botones."
        },
    ];
    
    
    localStorage.setItem('productos', JSON.stringify(arrayProductos));
    

}

export default agregarProductosLocalStorage;