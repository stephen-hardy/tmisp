export default json => json.item.map(i => ({ mac: i.macaddr[0] }));