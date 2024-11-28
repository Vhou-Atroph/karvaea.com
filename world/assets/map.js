var map = L.map('worldmap').setView([78, -80], 3);

map.setMaxBounds([[87.5, -180], [62, 21.6]]);

var ocnmap = L.tileLayer('./assets/tiles/water/{z}/{x}/{y}.png', {
        center: [0,0],
        minZoom: 3,
        maxZoom: 5,
        noWrap: true
}).addTo(map);

var rgnmap = L.tileLayer('./assets/tiles/regions/{z}/{x}/{y}.png', {
        center: [0,0],
        minZoom: 3,
        maxZoom: 5,
        noWrap: true
}).addTo(map);

var worldmap = L.tileLayer('./assets/tiles/world/{z}/{x}/{y}.png', {
        center: [0,0],
        minZoom: 3,
        maxZoom: 5,
        noWrap: true
});

var rvrmtnmap = L.tileLayer('./assets/tiles/rvrsmtns/{z}/{x}/{y}.png', {
        center: [0,0],
        minZoom: 3,
        maxZoom: 5,
        noWrap: true
}).addTo(map);

var rgnmrkrs = L.layerGroup().addTo(map);

var layertypes = {
    "Region map": rgnmap,
    "World map": worldmap
};

var overlays = {
    "Region markers": rgnmrkrs,
    "Rivers and Mountains": rvrmtnmap
};

L.control.layers(layertypes, overlays).addTo(map);

// Markers

var lupinemarker = new L.Icon({
    iconUrl: '../resources/img/LupineMrker.png',
    iconSize:    [30, 41]
});

var callamarker = new L.Icon({
    iconUrl: '../resources/img/CallaMrker.png',
    iconSize:    [30, 41]
});

var dayglaremarker = new L.Icon({
    iconUrl: '../resources/img/DayglareMrker.png',
    iconSize:    [30, 41]
});

var antirimarker = new L.Icon({
    iconUrl: '../resources/img/AntiriMrker.png',
    iconSize:    [30, 41]
});

var tiptopmarker = new L.Icon({
    iconUrl: '../resources/img/TiptopMrker.png',
    iconSize:    [30, 41]
});

var droseramarker = new L.Icon({
    iconUrl: '../resources/img/DroseraMrker.png',
    iconSize:    [30, 41]
});

var dolosmarker = new L.Icon({
    iconUrl: '../resources/img/DolosMrker.png',
    iconSize:    [30, 41]
});

var godspinemarker = new L.Icon({
    iconUrl: '../resources/img/GodspineMrker.png',
    iconSize:    [30, 41]
});

var dragonmawmarker = new L.Icon({
    iconUrl: '../resources/img/DragonmawMrker.png',
    iconSize:    [30, 41]
});

var arisaerelmarker = new L.Icon({
    iconUrl: '../resources/img/ArisaerelMrker.png',
    iconSize:    [30, 41]
});

var prososmarker = new L.Icon({
    iconUrl: '../resources/img/PrososMrker.png',
    iconSize:    [30, 41]
});

var lilieaetamarker = new L.Icon({
    iconUrl: '../resources/img/LilieaetaMrker.png',
    iconSize:    [30, 41]
});

var minamarker = new L.Icon({
    iconUrl: '../resources/img/MinaMrker.png',
    iconSize:    [30, 41]
});

var sanguinalmarker = new L.Icon({
    iconUrl: '../resources/img/SanguinalMrker.png',
    iconSize:    [30, 41]
});

var aquatosmarker = new L.Icon({
    iconUrl: '../resources/img/AquatosMrker.png',
    iconSize:    [30, 41]
});

var petiolamarker = new L.Icon({
    iconUrl: '../resources/img/PetiolaMrker.png',
    iconSize:    [30, 41]
});

var goceanmarker = new L.Icon({
    iconUrl: '../resources/img/GreatOceanMrker.png',
    iconSize:    [30, 41]
});

var edroseramarker = new L.Icon({
    iconUrl: '../resources/img/EastDroseraOceanMrker.png',
    iconSize:    [30, 41]
});

var socallamarker = new L.Icon({
    iconUrl: '../resources/img/SouthCallaOceanMrker.png',
    iconSize:    [30, 41]
});

var ntipmarker = new L.Icon({
    iconUrl: '../resources/img/TiptopOceanMrker.png',
    iconSize:    [30, 41]
});

// Points

var lupine = L.marker(
    L.latLng([78.95, -13]),
    {
        title: "The Lupine",
        icon: lupinemarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('The Lupine');

var calla = L.marker(
    L.latLng([77, -50]),
    {
        title: "Calla",
        icon: callamarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Calla');

var dayglare = L.marker(
    L.latLng([81, -33]),
    {
        title: "Dayglare",
        icon: dayglaremarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Dayglare');

var antiri = L.marker(
    L.latLng([82, -63]),
    {
        title: "Antiri",
        icon: antirimarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Antiri');

var tiptop = L.marker(
    L.latLng([83.6, -26]),
    {
        title: "Tiptop",
        icon: tiptopmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Tiptop');

var drosera = L.marker(
    L.latLng([79.33, 0]),
    {
        title: "Drosera",
        icon: droseramarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Drosera');

var dolos = L.marker(
    L.latLng([74.9, -34]),
    {
        title: "Dolos",
        icon: dolosmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Dolos');

var godspine = L.marker(
    L.latLng([66.6, -63]),
    {
        title: "Godspine",
        icon: godspinemarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Godspine');

var arisaerel = L.marker(
    L.latLng([83.9, -125]),
    {
        title: "The Arisaerel",
        icon: arisaerelmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('The Arisaerel');

var prosos = L.marker(
    L.latLng([81.9, -138]),
    {
        title: "Prosos",
        icon: prososmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Prosos');

var lilieaeta = L.marker(
    L.latLng([79.6, -126]),
    {
        title: "The Lilieaeta",
        icon: lilieaetamarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('The Lilieaeta');

var mina = L.marker(
    L.latLng([80.6, -113]),
    {
        title: "Mina",
        icon: minamarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Mina');

var dragonmaw = L.marker(
    L.latLng([80.7, -100]),
    {
        title: "Dragonmaw",
        icon: dragonmawmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Dragonmaw');

var sanguinal = L.marker(
    L.latLng([77, -143]),
    {
        title: "Sanguinal",
        icon: sanguinalmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Sanguinal');

var aquatos = L.marker(
    L.latLng([73.95, -156]),
    {
        title: "Aquatos",
        icon: aquatosmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Aquatos');

var petiola = L.marker(
    L.latLng([72.33, -126]),
    {
        title: "Petiola",
        icon: petiolamarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Petiola');

var edroseraocean = L.marker(
    L.latLng([80.5, 8]),
    {
        title: "East Drosera Ocean",
        icon: edroseramarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('East Drosera<br>Ocean');

var greatocean = L.marker(
    L.latLng([78, -86]),
    {
        title: "Great Ocean",
        icon: goceanmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Great Ocean');

var ntipocean = L.marker(
    L.latLng([83.5, -50]),
    {
        title: "Tiptop Ocean",
        icon: ntipmarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('Tiptop Ocean');

var scallaocean = L.marker(
    L.latLng([70.4, -56]),
    {
        title: "South Calla Ocean",
        icon: socallamarker
    }
)
.addTo(rgnmrkrs)
.bindPopup('South Calla Ocean');
