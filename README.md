# Sistem Ticketing Transport Bus

## Deskripsi
Sistem Ticketing Transport Bus adalah  memungkinkan pengguna untuk memesan tiket bus secara online. Sistem ini dirancang untuk mempermudah pengelolaan pemesanan tiket, melihat jadwal keberangkatan, serta pembayaran tiket secara digital.

## Fitur Utama
- **Registrasi dan Login**: Pengguna dapat membuat akun dan masuk ke sistem.
- **Pencarian Jadwal Bus**: Menampilkan daftar bus yang tersedia berdasarkan rute dan waktu keberangkatan.
- **Pemesanan Tiket**: Memilih kursi, memasukkan data penumpang, dan melakukan pemesanan tiket.
- **Pembayaran Online**: Mendukung berbagai metode pembayaran seperti e-wallet, transfer bank, dan kartu kredit.
- **Manajemen Tiket**: Pengguna dapat melihat tiket yang telah dibeli dan membatalkan jika diperlukan.
- **Dashboard Admin**: Mengelola jadwal bus, melihat data pemesanan, dan mengelola pengguna.

## Teknologi yang Digunakan
- **Backend**: Node.js dengan framework Express
- **Database**: MySQL
- **Frontend**: React.js
- **Autentikasi**: JSON Web Token (JWT)


## Instalasi dan Penggunaan
### Prerequisites
- Node.js dan npm/yarn terinstal di sistem
- MySQL database

### Cara Menjalankan Backend
1. Clone repository:
   ```sh
   git clone https://github.com/your-repo/sistem-ticketing-bus.git
   ```
2. Masuk ke direktori backend:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Konfigurasi database pada file `.env`
5. Jalankan server:
   ```sh
   npm start
   ```

### Cara Menjalankan Frontend
1. Masuk ke direktori frontend:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Jalankan aplikasi:
   ```sh
   npm start
   ```

## API Endpoint
| Method | Endpoint | Deskripsi |
|--------|----------|------------|
| GET | `/buses` | Mendapatkan daftar bus |
| GET | `/buses/:id` | Mendapatkan detail bus berdasarkan ID |
| POST | `/tickets` | Membuat pemesanan tiket |
| GET | `/tickets/:userId` | Mendapatkan daftar tiket berdasarkan user |
| DELETE | `/tickets/:id` | Membatalkan tiket |


