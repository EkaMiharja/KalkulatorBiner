// Fungsi umum untuk mengambil nilai input dan validasi
function getInput(id, isBinary = false) {
    const value = document.getElementById(id).value;
    if (value === '') { //untuk memvalidasi agar input tidak kosong
        alert(`Masukkan bilangan ${isBinary ? 'biner' : 'desimal'} terlebih dahulu!`);
        return null;
    }
    if (isBinary && !/^[01]+$/.test(value)) { //untuk memvalidasi agar input hanya bisa 0 dan 1
        alert('Masukkan bilangan biner yang valid (hanya 0 dan 1)!');
        return null;
    }
    return value; //mengembalikan nilai input yang valid
}

// Konversi desimal ke biner
function decimalToBinary() {
    const decimal = getInput('decimal');
    if (decimal !== null) {
        document.getElementById('binaryResult').innerText = `Hasil Biner: ${parseInt(decimal, 10).toString(2)}`; //mengubah desimal dengan basis 10 ke biner dengan basis 2
    }
}

// Konversi biner ke desimal
function binaryToDecimal() {
    const binary = getInput('binary', true);
    if (binary !== null) {
        document.getElementById('decimalResult').innerText = `Hasil Desimal: ${parseInt(binary, 2)}`;
    }
}

// Fungsi untuk operasi biner (penjumlahan/pengurangan)
function binaryOperation(operation) {
    const binary1 = getInput('binary1', true);
    const binary2 = getInput('binary2', true);
    if (binary1 !== null && binary2 !== null) {
        let result = operation(parseInt(binary1, 2), parseInt(binary2, 2));
        if (result < 0) { //untuk memvalidasi jika hasil inputan bernilai negatif
            alert('Hasil pengurangan negatif! Coba lagi.');
            return;
        }
        document.getElementById('operationResult').innerText = `Hasil: ${result.toString(2)}`;
    }
}

// Penjumlahan biner
function addBinary() {
    binaryOperation((a, b) => a + b);
}

// Pengurangan biner
function subtractBinary() {
    binaryOperation((a, b) => a - b);
}
