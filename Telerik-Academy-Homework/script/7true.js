 function ThirdDigitIsSeven() {
            var number = parseInt(document.getElementById("textIn").value);
            number = Math.floor(number / 100);
            if (number % 10 == 7) {
                document.getElementById("textOut").value = "True";
            }
            else {
                document.getElementById("textOut").value = "False";
            }
        }