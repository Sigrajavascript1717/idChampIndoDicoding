const users = [
    { username: "sigra", password: 123456, role: "administrator" },
    { username: "budi", password: 654321, role: "user" },
    { username: "sari", password: 789012, role: "user" },
    { username: "andi", password: 210987, role: "user" },
    { username: "lisa", password: 345678, role: "user" }
];

// login
function Login(username,password,role) {
    const DatabaseLogin=users.find(cek=>cek.username===username && cek.password===password && cek.role===role)
    if (DatabaseLogin) {
        return `selamat datang ${username} anda sudah kembali`
    }else{
        return `akun anda tidak terdaftar ${username} di sistem kami`
    }
}

// sign up
function daftar(username,password,role="user,suport") {
    const fail = users.some(cek=>cek.username===username)
    if (fail) {
        return `harap ganti nama username ${username} karna sudah di miliki oleh orang lain`
    }else{
        users.push({username:username,password:password,role:role})
        return `hai ${username} akun kamu berhasil terdftar role kamu adalah ${role}`
    }
}

//daftar
console.log(daftar("sigra",123456,"administartor"))
console.log(daftar("epri",123456,"manajemen"))

// login
console.log(Login("sigra",123456,"administrator"))//berhasil
console.log(Login("riska",12116,"user"))//gagal
