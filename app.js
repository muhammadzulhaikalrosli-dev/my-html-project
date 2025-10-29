// ========== SAMSUNG OFFICIAL STORE SCRIPT ==========

// Senarai produk Samsung
const products = [
  {
    name: "Galaxy S24 Ultra",
    price: "RM 5,299",
    description: "Flagship terbaru dengan kamera AI 200MP.",
    image: "images/s24ultra.jpg"   // 👈 guna folder 'images'
  },
  {
    name: "Galaxy Z Fold6",
    price: "RM 7,299",
    description: "Telefon lipat generasi baru.",
    image: "images/zfold6.jpg"
  },
  {
    name: "Galaxy Watch7",
    price: "RM 1,399",
    description: "Jam pintar elegan.",
    image: "images/watch7.jpg"
  },
  {
    name: "Galaxy Buds3 Pro",
    price: "RM 899",
    description: "Fon telinga tanpa wayar premium.",
    image: "images/buds3pro.jpg"
  }
];

// Paparkan produk ke dalam halaman utama
const productList = document.getElementById("product-list");

products.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "col-md-3 col-sm-6";

    card.innerHTML = `
        <div class="product-card shadow-sm p-3 rounded">
            <img src="${p.image}" alt="${p.name}">
            <h5>${p.name}</h5>
            <p><strong>${p.price}</strong></p>
            <button class="btn btn-primary btn-sm" onclick="showDetails(${index})">View Details</button>
        </div>
    `;

    productList.appendChild(card);
});

// Fungsi untuk tunjuk modal produk
function showDetails(index) {
    const product = products[index];

    document.getElementById("detailModalLabel").textContent = product.name;
    document.getElementById("modal-image-container").innerHTML = `<img src="${product.image}" alt="${product.name}" class="img-fluid rounded">`;
    document.getElementById("modal-price").textContent = product.price;
    document.getElementById("modal-description").textContent = product.description;

    // Buka modal (Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById("productDetailModal"));
    modal.show();
}
