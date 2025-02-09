//Questions array

let questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris", numb: 1 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7", numb: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars", numb: 3 },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Austen", "Dickens"], answer: "Shakespeare", numb: 4 },
    { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Peso"], answer: "Yen", numb: 5 },
    { question: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au", numb: 6 },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", numb: 7 },
    { question: "What is the largest organ in the human body?", options: ["Skin", "Heart", "Liver", "Brain"], answer: "Skin", numb: 8 },
    { question: "What part of the cell contains genetic material?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"], answer: "Nucleus", numb: 9 },
    { question: "Which vitamin is produced when the skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D", numb: 10 },
    { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: "Bill Gates", numb: 11 },
    { question: "Which programming language is primarily used for web development?", options: ["Java", "Python", "C++", "JavaScript"], answer: "JavaScript", numb: 12 },
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Central Processing Utility"], answer: "Central Processing Unit", numb: 13 },
    { question: "Which company developed the Android OS?", options: ["Apple", "Google", "Microsoft", "IBM"], answer: "Google" },
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Modern Language", "Hyper Transfer Markup Language"], answer: "HyperText Markup Language", numb: 14 },
    { question: "What is 7 × 8?", options: ["54", "56", "48", "64"], answer: "56", numb: 15 },
    { question: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12", numb: 16 },
    { question: "What is 15% of 200?", options: ["30", "35", "40", "45"], answer: "30", numb: 17 },
    { question: "What is the perimeter of a rectangle with length 10 and width 5?", options: ["20", "25", "30", "40"], answer: "30", numb: 18 },
    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6", numb: 19 },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington", numb: 20 },
    { question: "What year did World War II end?", options: ["1942", "1945", "1948", "1950"], answer: "1945", numb: 21 },
    { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Vasco da Gama", "Magellan"], answer: "Christopher Columbus", numb: 22 },
    { question: "Which ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Aztecs"], answer: "Egyptians", numb: 23 },
    { question: "Who was known as the Iron Lady?", options: ["Angela Merkel", "Margaret Thatcher", "Hillary Clinton", "Indira Gandhi"], answer: "Margaret Thatcher", numb: 24 },
    { question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France", numb: 25 },
    { question: "How many players are on a soccer team?", options: ["9", "10", "11", "12"], answer: "11", numb: 26 },
    { question: "What sport is played at Wimbledon?", options: ["Tennis", "Golf", "Cricket", "Badminton"], answer: "Tennis", numb: 27 },
    { question: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"], answer: "Michael Phelps", numb: 28 },
    { question: "How many points is a touchdown worth in American football?", options: ["3", "5", "6", "7"], answer: "6", numb: 29 },
    { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific", numb: 30 },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], answer: "Nile", numb: 31 },
    { question: "Which country has the most population?", options: ["USA", "India", "China", "Russia"], answer: "China", numb: 32 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa", numb: 33 },
    { question: "Mount Everest is located in which country?", options: ["India", "China", "Nepal", "Pakistan"], answer: "Nepal", numb: 34 },
    { question: "Which movie won the Oscar for Best Picture in 2020?", options: ["Joker", "Parasite", "1917", "Ford v Ferrari"], answer: "Parasite", numb: 35 },
    { question: "Who is the creator of Star Wars?", options: ["Steven Spielberg", "James Cameron", "George Lucas", "J.J. Abrams"], answer: "George Lucas", numb: 36 },
    { question: "What is the highest-grossing movie of all time?", options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars"], answer: "Avatar", numb: 37 },
    { question: "Who played Iron Man in the Marvel movies?", options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"], answer: "Robert Downey Jr.", numb: 38 },
    { question: "Which singer is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Bieber"], answer: "Michael Jackson", numb: 39 },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mars", "Mercury", "Pluto"],
        answer: "Mercury",numb:40
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",numb:41
    },
    {
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Gold", "Iron", "Copper"],
        answer: "Gold",numb:42
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12",numb:43
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",numb:44
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
        answer: "Alexander Fleming",numb:45
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide",numb:46
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa",numb:47
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["4", "5", "6", "8"],
        answer: "6",numb:48
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1905", "1912", "1923", "1931"],
        answer: "1912",numb:49
    },
    {
        question: "Which country is famous for sushi?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan",numb:50
    }


];
