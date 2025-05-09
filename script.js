document.getElementById("bewertungsForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const preis = document.getElementById("preis").value;
    const grund = document.getElementById("grund").value;
    let text = "Vielen Dank! ";

    if (grund === "verkaufen") {
        text += "Wir setzen uns bald mit Ihnen in Verbindung.";
    } else if (grund === "interesse") {
        text += "Wir freuen uns über Ihr Interesse!";
    } else {
        text += "Schön, dass Sie unseren Preisservice genutzt haben.";
    }

    document.getElementById("ergebnis").textContent = text;
});
