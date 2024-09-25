const users = [
    { username: "admin", password: 170800, role: "administrator" },
    { username: "ega", password: 117700, role: "user" },
    { username: "rahmat", password: 190920, role: "user" },
    { username: "indra", password: 123456, role: "user" },
    { username: "novi", password: 123789, role: "user" }
];

// Fungsi Login
function Login(username, password, role) {
    const data = users.find(cek => cek.username === username && cek.password === password && cek.role === role);
    if (data) {
        return `Selamat datang ${username} di sistem kami`;
    } else {
        return `${username} mohon maaf anda tidak terdaftar di sistem kami`;
    }
}

// Fungsi Signup
function Signup(username, password, role = "user") {
    const ceklist = users.find(cek => cek.username === username);
    
    if (ceklist) {
        return `${username}, harap ganti username anda karena sudah dipakai oleh orang lain`;
    } else {
        users.push({ username: username, password: password, role: role });
        return `Selamat, anda berhasil terdaftar sebagai ${role}`;
    }
}

// Tes fungsi Login
console.log(Login("admin", 170800, "administrator"));  // berhasil
console.log(Login("rafli", 1330800, "user"));          // gagal login

// Tes fungsi Signup
console.log(Signup("ega", 1209090, "user"));  // gagal daftar (sudah ada)
console.log(Signup("sigra", 1212121, "user"));  // berhasil daftar
console.log(Signup("novi", 999999, "admin"));  // berhasil daftar sebagai admin
