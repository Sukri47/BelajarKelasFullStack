// Insertion Sort tanpa function
let data = [4, 0, 5, 3, 2];

console.log("=== PROGRAM PENGURUTAN INSERTION SORT ===");
console.log("Data sebelum diurutkan: " + data);

// Proses pengurutan
for (let i = 1; i < data.length; i++) {
  let v = data[i];
  let j = i - 1;

  while (j >= 0 && data[j] > v) {
    data[j + 1] = data[j];
    j = j - 1;
  }

  data[j + 1] = v;
}

console.log("Data setelah diurutkan: " + data);
console.log("Hasil akhir: [" + data.join(", ") + "]");
