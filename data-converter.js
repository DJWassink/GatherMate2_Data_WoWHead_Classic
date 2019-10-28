const mapData = require('./map-data');
const nodes = require('./nodes');

function encodeWowheadLoc(x,y) {
	return [Math.floor(x * 10000 + 0.5) * 10000 + Math.floor(y * 10000 + 0.5)]
}

function convertData(crawledData, gatherMate2Name) {
  const data = {};

  Object.keys(crawledData).map(nodeName => {
    const nodeId = nodes[nodeName];
    if (!nodeId) {
      console.log('no id found for:', nodeName);
    }
  
    const g_mapperData = crawledData[nodeName];
    Object.keys(g_mapperData).forEach(zoneId => {
      const thisMapData = mapData.find(data => data.wowheadId == zoneId);
      const coords = g_mapperData[zoneId][0].coords;
      coords.forEach(coords => {
        data[thisMapData.id] = [
          ...(data[thisMapData.id] || []), 
          {location: encodeWowheadLoc(coords[0], coords[1]), nodeId}
        ]
      });
    });  
  });
  
  let result = `${gatherMate2Name} = {
  `;
  
  Object.keys(data).forEach(mapId => {
      result += '\t' + `[${mapId}] = {
`;
      data[mapId].forEach(loc => {
        if (loc.nodeId) {
          result += '\t\t' + `[${loc.location}] = ${loc.nodeId},
`;
        }
      });
      result += '\t' + `},
`;
  });
  
  result += `}`;
  
  return result;
}

module.exports = convertData;