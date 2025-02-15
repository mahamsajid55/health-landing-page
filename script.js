// Mood Tracker Function
function saveMood() {
    let mood = document.getElementById("moodSelect").value;
    localStorage.setItem("userMood", mood);
    document.getElementById("moodHistory").innerText = "Your last mood: " + mood;
}

// Journal Saving Function
function saveJournal() {
    localStorage.setItem("journal", document.getElementById("journalText").value);
}
