// Define some sample songs with associated moods
const songs = {
    happy: ["Happy - Pharrell Williams", "Can't Stop the Feeling! - Justin Timberlake", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Shut Up and Dance - Walk the Moon", "I Gotta Feeling - The Black Eyed Peas", "Happy Together - The Turtles", "Walking on Sunshine - Katrina and the Waves", "Best Day of My Life - American Authors", "Good Vibrations - The Beach Boys", "Don't Worry, Be Happy - Bobby McFerrin"],
    sad: ["Someone Like You - Adele", "Hurt - Johnny Cash", "Yesterday - The Beatles", "Everybody Hurts - R.E.M.", "Nothing Compares 2 U - Sinead O'Connor", "Tears in Heaven - Eric Clapton", "Un-Break My Heart - Toni Braxton", "Yesterday Once More - The Carpenters", "Cry Me a River - Justin Timberlake", "Say Something - A Great Big World"],
    energetic: ["Eye of the Tiger - Survivor", "Don't Stop Believin' - Journey", "Thunderstruck - AC/DC", "We Will Rock You - Queen", "Wake Me Up - Avicii", "Livin' on a Prayer - Bon Jovi", "Dancing Queen - ABBA", "Born to Run - Bruce Springsteen", "I Love Rock 'n' Roll - Joan Jett & The Blackhearts", "Jump - Van Halen"],
    calm: ["Someone You Loved - Lewis Capaldi", "All of Me - John Legend", "Stay With Me - Sam Smith", "Hallelujah - Jeff Buckley", "Let It Be - The Beatles", "Make You Feel My Love - Adele", "Skinny Love - Bon Iver", "The Scientist - Coldplay", "Fix You - Coldplay", "Fast Car - Tracy Chapman"]
};

// Function to analyze mood based on user input
function analyzeMood(message) {
    // Convert message to lowercase for case-insensitive matching
    const lowerCaseMessage = message.toLowerCase();
    
    // Check for keywords to determine mood
    if (lowerCaseMessage.includes("happy") || lowerCaseMessage.includes("joy")) {
        return "happy";
    } else if (lowerCaseMessage.includes("sad") || lowerCaseMessage.includes("cry")) {
        return "sad";
    } else if (lowerCaseMessage.includes("energetic") || lowerCaseMessage.includes("excited")) {
        return "energetic";
    } else if (lowerCaseMessage.includes("calm") || lowerCaseMessage.includes("relax")) {
        return "calm";
    } else {
        return "unknown";
    }
}

// Function to recommend a song based on mood
function recommendSong(mood) {
    const moodSongs = songs[mood];
    if (moodSongs) {
        const shuffledSongs = moodSongs.sort(() => Math.random() - 0.5); // Shuffle songs
        const selectedSongs = shuffledSongs.slice(0, 10); // Select first 10 shuffled songs
        return selectedSongs;
    } else {
        return "Sorry, I couldn't find any songs for that mood.";
    }
}

// Example interaction with the chatbot
const userInput = "I'm feeling happy today!";
const mood = analyzeMood(userInput);
const songRecommendations = recommendSong(mood);
console.log("Chatbot: Based on your mood, I recommend listening to:", songRecommendations);
