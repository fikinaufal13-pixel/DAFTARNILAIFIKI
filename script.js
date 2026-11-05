let siswa = [
    {name: "Anies", score: 85},
    {name: "Jane", score: 72},
    {name: "Ucup", score: 95},
    {name: "Prabowo", score: 68},
    {name: "Gibran", score: 78},
    {name: "Jokowi", score: 91}
];

console.log("=== DATA AWAL SISWA ===");
console.log(siswa);


console.log("\n=== 1. forEach() ===");
let daftarSiswa = document.getElementById("semua-siswa");

siswa.forEach(function(siswa) {
    console.log("Nama Siswa: " + siswa.name + ", Nilai: " + siswa.score);
    
    let li = document.createElement("li");
    li.textContent = siswa.name + " - Nilai: " + siswa.score;
    daftarSiswa.appendChild(li);
});


console.log("\n=== 2. FILTER() ===");
let lulus = siswa.filter(function(siswa) {
    return siswa.score >= 75;
});

console.log(lulus);

let daftarLulus = document.getElementById("siswa-lulus");
lulus.forEach(function(siswa) {
    let li = document.createElement("li");
    li.innerHTML = siswa.name + " (<span class='pass'>Lulus</span> dengan nilai " + siswa.score + ")";
    daftarLulus.appendChild(li);
});


console.log("\n=== 3. MAP() ===");
let namaSiswa = siswa.map(function(siswa) {
    return siswa.name;
});

console.log(namaSiswa);

document.getElementById("nama-siswa").textContent = "[" + namaSiswa.join(", ") + "]";


console.log("\n=== 4. FIND() ===");
let siswaTertinggi = siswa.find(function(siswa) {
    return siswa.score >= 90;
});

console.log(siswaTertinggi);

let siswaTertinggiEl = document.getElementById("siswa-tinggi");
if (siswaTertinggi) {

    siswaTertinggiEl.innerHTML = "Siswa pertama dengan nilai minimal 90 adalah <span class='highlight'>" + siswaTertinggi.name + "</span> dengan nilai " + siswaTertinggi.score;
} else {
    siswaTertinggiEl.textContent = "Tidak ada siswa yang mencapai nilai 90.";
}


console.log("\n=== 5. REDUCE() ===");
let totalScore = siswa.reduce(function(total, item) {
    return total + item.score;
}, 0);
let average = totalScore / siswa.length;

console.log("Total nilai kelas: " + totalScore);
console.log("Rata-rata nilai kelas: " + average.toFixed(2));

document.getElementById("rata-rata").innerHTML = "Total nilai <b>" + siswa.length + "</b> siswa adalah <b>" + totalScore + "</b>, rata-rata <b>" + average.toFixed(1) + "</b>.";