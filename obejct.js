const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    const employe={
        name:name,
        email:email,
        joinYear:joinYear
    }
    
     employees.push(employe)
  }
  addEmployee("sigramaulana","ega@gmail.com",2024)
  console.log(employees)
  
const DataMahasiswa=[{
    nama:"ega",
    kelamin:"pria",
    perkerjaan:"presiden"
}]

function programsiswa(a,b,c) {
    const listBaru={
        nama:a,
        kelamin:b,
        perkerjaan:c
    }
    DataMahasiswa.push(listBaru)
}
programsiswa("rafli","wanita","psk")
console.log(DataMahasiswa)


const dataDosen =[]

function addDosen(nama,nip,pangkat) {
    const listDosen={
        nama:"admin",
        nip:199212,
        pangkat:"pengatur muda V"
    }

    dataDosen.push(listDosen)
}

addDosen("salsa",1202012,"cpnsmuda2023")
console.log(dataDosen)
