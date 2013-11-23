function OddOrEven() {
            var number = parseInt(document.getElementById("textIn").value);
            if (number % 5 == 0 && number % 7 == 0) {
                document.getElementById("textOut").value = "Divides without remainder.";
            }
            else {
                document.getElementById("textOut").value = "Divides with remainder.";
            }
        }