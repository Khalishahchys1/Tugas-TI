document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen dengan ID "submit" (tombol "Selesai")
    var submitButton = document.getElementById("submit");

    // Mendapatkan semua elemen dengan kelas "question-container"
    var questionContainers = document.querySelectorAll(".question-container");

    // Menambahkan event listener untuk tombol "Selesai"
    submitButton.addEventListener("click", function () {
        var correctAnswers = 0;

        // Loop melalui setiap kontainer pertanyaan
        questionContainers.forEach(function (container, index) {
            var inputElements = container.querySelectorAll('input[type="radio"]');
            var feedbackElement = container.querySelector('.feedback');

            // Mendapatkan jawaban yang benar
            var correctAnswer = "a";

            // Memeriksa jawaban yang dipilih oleh pengguna
            var userAnswer = "";
            inputElements.forEach(function (input) {
                if (input.checked) {
                    userAnswer = input.value;
                }
            });

            // Menampilkan feedback
            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Jawaban benar!";
                feedbackElement.classList.add("correct");
                correctAnswers++;
            } else {
                feedbackElement.textContent = "Jawaban salah.";
                feedbackElement.classList.add("incorrect");
            }
        });

        // Menampilkan hasil kuis
        var resultsElement = document.getElementById("results");
        resultsElement.innerHTML = "Jawaban Benar: " + correctAnswers + " dari " + questionContainers.length;
    });

     document.addEventListener("DOMContentLoaded", function () {
        var submitButton = document.getElementById("submit");
        var congratulationsText = document.getElementById("congratulations");
    
        submitButton.addEventListener("click", function () {
            // Lakukan perhitungan dan pengecekan hasil kuis di sini
            // Misalnya, jika hasil kuis benar atau salah:
            var hasilKuisBenar = true; // Ganti ini sesuai dengan hasil kuis yang benar atau salah
    
            if (hasilKuisBenar) {
                // Perubahan hasil kuis
                var resultsDiv = document.getElementById("results");
                resultsDiv.innerHTML = "Hasil Kuis: Benar";
                
                // Menampilkan teks "Yayy, kamu hebat!" setelah hasil kuis
                congratulationsText.style.display = "block";
            } else {
                // Perubahan hasil kuis
                var resultsDiv = document.getElementById("results");
                resultsDiv.innerHTML = "Hasil Kuis: Salah";
    
                // Menampilkan teks "Yayy, kamu hebat!" setelah hasil kuis
                congratulationsText.style.display = "block";
            }
        });
    });
});
