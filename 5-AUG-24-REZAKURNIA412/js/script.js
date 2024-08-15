function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi ke meter
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (isNaN(weight) || isNaN(height)) {
        alert('Harap masukkan angka yang valid untuk berat dan tinggi badan.');
        return;
    }

    const bmi = weight / (height ** 2);
    let category = '';
    let advice = '';

    if (bmi < 18.5) {
        category = 'Kurus';
        advice = 'Anda perlu menambah berat badan dengan mengkonsumsi makanan yang kaya protein dan karbohidrat seperti Nasi merah, jagung, ubi, kentang, nasi. Dan protein seperti Dada ayam, Daging sapi, telur, Ikan, susu, dan kacang kacangan.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
        advice = 'Berat badan Anda normal. Pertahankan pola makan dan olahraga yang sehat.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        advice = 'Anda masuk dalam kategori KELEBIHAN BERAT BADAN. Hal yang perlu dilakukan untuk menurunkan berat badan adalah dengan diet sehat seperti makan sayur Bayam, Jamur, Brokoli, Wortel, dan olahraga yang teratur.';
    } else {
        category = 'Obesitas';
        advice = 'Anda masuk dalam kategori OBESITAS dan disarankan untuk konsultasi dengan dokter atau ahli gizi guna mengatasi masalah OBESITAS anda.';
    }

    document.getElementById('result').innerText = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
    document.getElementById('advice').innerText = advice;
}