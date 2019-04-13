const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes is:', banner.hasChildNodes());

// Clone a node with all nested content too
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);