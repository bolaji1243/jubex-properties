let properties = [];

fetch('data/properties.json')
  .then(res => res.json())
  .then(data => {
    properties = data;
    render(properties);
  });

function render(list) {
  const container = document.getElementById('propertyList');
  container.innerHTML = '';

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <div class="property-info">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <p class="price">₦${p.price.toLocaleString()}</p>
        <a class="btn" href="https://wa.me/${p.phone || '2348012345678'}" target="_blank">Contact</a>
      </div>
    `;
    container.appendChild(card);
  });
}

function applyFilters() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const type = document.getElementById('typeFilter').value;

  const filtered = properties.filter(p => {
    const matchText = p.title.toLowerCase().includes(input) || p.location.toLowerCase().includes(input);
    const matchType = type === '' || p.type === type;
    return matchText && matchType;
  });

  render(filtered);
}
