function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (user && pass) {
    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} berhasil login`);
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('mainBox').style.display = 'block';
  } else {
    alert("Isi semua kolom login!");
  }
}

function hitungTotal() {
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const harga = parseInt(document.getElementById('harga').value);
  const total = jumlah * harga;

  document.getElementById('totalLabel').innerText = `Total: Rp ${total.toLocaleString()}`;
}

document.getElementById('kasbon').addEventListener('change', function () {
  const kasbonForm = document.getElementById('kasbonForm');
  if (this.value === "ya") {
    kasbonForm.style.display = 'block';
  } else {
    kasbonForm.style.display = 'none';
  }
});

function simpanTransaksi() {
  const barang = document.getElementById('barang').value;
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const harga = parseInt(document.getElementById('harga').value);
  const total = jumlah * harga;
  const kasbon = document.getElementById('kasbon').value;
  const namaPelanggan = document.getElementById('namaPelanggan').value;

  let struk = `===== STRUK PEMBELIAN =====
Barang     : ${barang}
Jumlah     : ${jumlah}
Harga      : Rp ${harga.toLocaleString()}
-----------------------------
Total      : Rp ${total.toLocaleString()}
Metode     : ${kasbon === 'ya' ? 'KASBON' : 'Tunai'}
`;

  if (kasbon === 'ya') {
    struk += `Nama Pelanggan : ${namaPelanggan}\n`;
  }

  struk += "=============================\nTerima kasih telah berbelanja.";

  document.getElementById('outputBox').innerText = struk;
}
