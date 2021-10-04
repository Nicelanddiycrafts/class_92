function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("Name1", player1Name);
    localStorage.setItem("Name2", player2Name);
    window.location = "game_page.html";
}