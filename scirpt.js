document.addEventListener("DOMContentLoaded", function () {

    window.showMenu = function(menuId) {
        let menus = document.querySelectorAll('.menu');
        menus.forEach(menu => menu.classList.remove('active'));

        let target = document.getElementById(menuId);
        if (target) {
            target.classList.add('active');
        }
    }

    window.hitungSkor = function() {
        let skor = 0;

        if (document.querySelector('input[name="q1"]:checked')?.value === 'b') skor++;
        if (document.querySelector('input[name="q2"]:checked')?.value === 'c') skor++;
        if (document.querySelector('input[name="q3"]:checked')?.value === 'd') skor++;
        if (document.querySelector('input[name="q4"]:checked')?.value === 'b') skor++;
        if (document.querySelector('input[name="q5"]:checked')?.value === 'a') skor++;

        document.getElementById("hasil").innerText = "Skor Anda: " + skor + " / 5";
    }

});