function FindThirdBit()
 {
    var number = parseInt(document.getElementById("textIn").value);
    var mask = 1 << 3;
    var numberAndMask = number & mask;
    numberAndMask = numberAndMask >> 3;
    document.getElementById("textOut").value = numberAndMask;
  }