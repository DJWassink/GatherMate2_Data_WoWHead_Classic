//This file simply merges map data from GatherMate2 with data from WoWHead, they each use different id's for zones
//This file isn't really needed anymore since the output is saved in map-data.js

const worldMap = {
    1411: "Durotar",
    1412: "Mulgore",
    1413: "The Barrens",
    // 1414: "Kalimdor",
    // 1415: "Eastern Kingdoms",
    1416: "Alterac Mountains",
    1417: "Arathi Highlands",
    1418: "Badlands",
    1419: "Blasted Lands",
    1420: "Tirisfal Glades",
    1421: "Silverpine Forest",
    1422: "Western Plaguelands",
    1423: "Eastern Plaguelands",
    1424: "Hillsbrad Foothills",
    1425: "The Hinterlands",
    1426: "Dun Morogh",
    1427: "Searing Gorge",
    1428: "Burning Steppes",
    1429: "Elwynn Forest",
    1430: "Deadwind Pass",
    1431: "Duskwood",
    1432: "Loch Modan",
    1433: "Redridge Mountains",
    1434: "Stranglethorn Vale",
    1435: "Swamp of Sorrows",
    1436: "Westfall",
    1437: "Wetlands",
    1438: "Teldrassil",
    1439: "Darkshore",
    1440: "Ashenvale",
    1441: "Thousand Needles",
    1442: "Stonetalon Mountains",
    1443: "Desolace",
    1444: "Feralas",
    1445: "Dustwallow Marsh",
    1446: "Tanaris",
    1447: "Azshara",
    1448: "Felwood",
    1449: "Un'Goro Crater",
    1450: "Moonglade",
    1451: "Silithus",
    1452: "Winterspring",
    1453: "Stormwind City",
    1454: "Orgrimmar",
    1455: "Ironforge",
    1456: "Thunder Bluff",
    1457: "Darnassus",
    1458: "Undercity",
    1459: "Alterac Valley",
    1460: "Warsong Gulch",
    1461: "Arathi Basin"
}
const wowheadZones = [
    {
      "id": 1584,
      "name": "Blackrock Depths"
    },
    {
      "id": 2100,
      "name": "Maraudon"
    },
    {
      "id": 1337,
      "name": "Uldaman"
    },
    {
      "id": 796,
      "name": "Scarlet Monastery"
    },
    {
      "id": 2557,
      "name": "Dire Maul"
    },
    {
      "id": 491,
      "name": "Razorfen Kraul"
    },
    {
      "id": 1176,
      "name": "Zul'Farrak"
    },
    {
      "id": 3,
      "name": "Badlands"
    },
    {
      "id": 8,
      "name": "Swamp of Sorrows"
    },
    {
      "id": 1477,
      "name": "The Temple of Atal'Hakkar"
    },
    {
      "id": 722,
      "name": "Razorfen Downs"
    },
    {
      "id": 47,
      "name": "The Hinterlands"
    },
    {
      "id": 361,
      "name": "Felwood"
    },
    {
      "id": 2017,
      "name": "Stratholme"
    },
    {
      "id": 2717,
      "name": "Molten Core"
    },
    {
      "id": 405,
      "name": "Desolace"
    },
    {
      "id": 490,
      "name": "Un'Goro Crater"
    },
    {
      "id": 16,
      "name": "Azshara"
    },
    {
      "id": 139,
      "name": "Eastern Plaguelands"
    },
    {
      "id": 493,
      "name": "Moonglade"
    },
    {
      "id": 2057,
      "name": "Scholomance"
    },
    {
      "id": 719,
      "name": "Blackfathom Deeps"
    },
    {
      "id": 618,
      "name": "Winterspring"
    },
    {
      "id": 15,
      "name": "Dustwallow Marsh"
    },
    {
      "id": 209,
      "name": "Shadowfang Keep"
    },
    {
      "id": 357,
      "name": "Feralas"
    },
    {
      "id": 51,
      "name": "Searing Gorge"
    },
    {
      "id": 1583,
      "name": "Blackrock Spire"
    },
    {
      "id": 28,
      "name": "Western Plaguelands"
    },
    {
      "id": 46,
      "name": "Burning Steppes"
    },
    {
      "id": 718,
      "name": "Wailing Caverns"
    },
    {
      "id": 721,
      "name": "Gnomeregan"
    },
    {
      "id": 331,
      "name": "Ashenvale"
    },
    {
      "id": 4,
      "name": "Blasted Lands"
    },
    {
      "id": 33,
      "name": "Stranglethorn Vale"
    },
    {
      "id": 45,
      "name": "Arathi Highlands"
    },
    {
      "id": 1377,
      "name": "Silithus"
    },
    {
      "id": 2437,
      "name": "Ragefire Chasm"
    },
    {
      "id": 440,
      "name": "Tanaris"
    },
    {
      "id": 1581,
      "name": "The Deadmines"
    },
    {
      "id": 267,
      "name": "Hillsbrad Foothills"
    },
    {
      "id": 400,
      "name": "Thousand Needles"
    },
    {
      "id": 717,
      "name": "The Stockade"
    },
    {
      "id": 406,
      "name": "Stonetalon Mountains"
    },
    {
      "id": 17,
      "name": "The Barrens"
    },
    {
      "id": 10,
      "name": "Duskwood"
    },
    {
      "id": 2677,
      "name": "Blackwing Lair"
    },
    {
      "id": 11,
      "name": "Wetlands"
    },
    {
      "id": 36,
      "name": "Alterac Mountains"
    },
    {
      "id": 2159,
      "name": "Onyxia's Lair"
    },
    {
      "id": 44,
      "name": "Redridge Mountains"
    },
    {
      "id": 130,
      "name": "Silverpine Forest"
    },
    {
      "id": 148,
      "name": "Darkshore"
    },
    {
      "id": 85,
      "name": "Tirisfal Glades"
    },
    {
      "id": 12,
      "name": "Elwynn Forest"
    },
    {
      "id": 40,
      "name": "Westfall"
    },
    {
      "id": 38,
      "name": "Loch Modan"
    },
    {
      "id": 1519,
      "name": "Stormwind City"
    },
    {
      "id": 1637,
      "name": "Orgrimmar"
    },
    {
      "id": 1977,
      "name": "Zul'Gurub"
    },
    {
      "id": 1,
      "name": "Dun Morogh"
    },
    {
      "id": 3456,
      "name": "Naxxramas"
    },
    {
      "id": 41,
      "name": "Deadwind Pass"
    },
    {
      "id": 1638,
      "name": "Thunder Bluff"
    },
    {
      "id": 1657,
      "name": "Darnassus"
    },
    {
      "id": 1537,
      "name": "Ironforge"
    },
    {
      "id": 215,
      "name": "Mulgore"
    },
    {
      "id": 1417,
      "name": "Sunken Temple"
    },
    {
      "id": 1497,
      "name": "Undercity"
    },
    {
      "id": 14,
      "name": "Durotar"
    },
    {
      "id": 141,
      "name": "Teldrassil"
    },
    {
      "id": 25,
      "name": "Blackrock Mountain"
    },
    {
      "id": 3429,
      "name": "Ruins of Ahn'Qiraj"
    },
    {
      "id": 3428,
      "name": "Ahn'Qiraj"
    },
    {
      "id": 2597,
      "name": "Alterac Valley"
    },
    {
      "id": 2257,
      "name": "Deeprun Tram"
    },
    {
      "id": 3277,
      "name": "Warsong Gulch"
    },
    {
      "id": 3358,
      "name": "Arathi Basin"
    },
    {
      "id": 457,
      "name": "The Veiled Sea"
    },
    {
      "id": 1941,
      "name": "Caverns of Time"
    },
    {
      "id": 1397,
      "name": "Emerald Forest"
    },
    {
      "id": 207,
      "name": "The Great Sea"
    }
  ]


Object.keys(worldMap).map(key => {
    const name = worldMap[key];
    const match = wowheadZones.find(zone => zone.name.trim() === name.trim());
    return {
        id: key,
        name,
        wowheadId: match ? match.id : undefined
    }
});