const Chatbot = {
  defaultResponses: {
    'hello hi hey greetings': function() {
      const responses = [
        'Hello! How can I help you today?',
        'Hi there! What can I do for you?',
        'Hey! How may I assist you?',
        'Greetings! What brings you here today?',
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'how are you doing': function() {
      const responses = [
        "I'm doing great, thank you for asking! How can I help you today?",
        "I'm functioning perfectly! What can I do for you?",
        "I'm having a wonderful day helping people! How about you?",
        "All systems running smoothly! What brings you here?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'what is your name who are you': function() {
      const responses = [
        "I'm your friendly AI chatbot assistant! You can call me Chatbot.",
        "I'm an AI assistant here to help you with various tasks!",
        "I'm Chatbot, your virtual assistant. Nice to meet you!",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'what can you do help capabilities features': function() {
      return "I can help you with many things: 🪙 flip a coin, 🎲 roll dice, 📅 tell the date/time, 🧮 solve math, 😄 tell jokes, 🤓 share facts, 🎮 play games (guess the number, riddles, trivia), 💡 give advice, 🎵 recommend music, 🍕 suggest food, 🌍 share country info, and more! What interests you?";
    },
    'flip coin toss': function () {
      const randomNumber = Math.random();
      const headsResponses = [
        'Sure! You got heads 🪙',
        'The coin landed on heads!',
        'Flipping... It\'s heads!',
      ];
      const tailsResponses = [
        'Sure! You got tails 🪙',
        'The coin landed on tails!',
        'Flipping... It\'s tails!',
      ];
      if (randomNumber < 0.5) {
        return headsResponses[Math.floor(Math.random() * headsResponses.length)];
      } else {
        return tailsResponses[Math.floor(Math.random() * tailsResponses.length)];
      }
    },
    'roll dice die': function() {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      const emojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const responses = [
        `Sure! You rolled a ${diceResult} ${emojis[diceResult - 1]}`,
        `Rolling the dice... You got ${diceResult}! ${emojis[diceResult - 1]}`,
        `The dice shows ${diceResult} ${emojis[diceResult - 1]}`,
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'date today calendar': function () {
      const now = new Date();
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const month = months[now.getMonth()];
      const day = now.getDate();
      const year = now.getFullYear();
      const dayOfWeek = days[now.getDay()];
      return `Today is ${dayOfWeek}, ${month} ${day}, ${year} 📅`;
    },
    'time clock': function() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      return `The current time is ${displayHours}:${minutes}:${seconds} ${ampm} ⏰`;
    },
    'joke funny laugh tell me give': function() {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything! 😄",
        "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
        "What do you call a fake noodle? An impasta! 🍝",
        "Why don't skeletons fight each other? They don't have the guts! 💀",
        "What do you call a bear with no teeth? A gummy bear! 🐻",
        "Why did the bicycle fall over? Because it was two-tired! 🚲",
        "What do you call cheese that isn't yours? Nacho cheese! 🧀",
        "Why couldn't the leopard play hide and seek? Because he was always spotted! 🐆",
        "What did the ocean say to the beach? Nothing, it just waved! 🌊",
        "Why did the coffee file a police report? It got mugged! ☕",
        "What do you call a dinosaur with extensive vocabulary? A thesaurus! 🦕",
        "Why don't eggs tell jokes? They'd crack each other up! 🥚",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    },
    'fact interesting trivia knowledge fun tell me give': function() {
      const facts = [
        "Did you know? Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs that's still edible! 🍯",
        "Fun fact: Octopuses have three hearts and blue blood! 🐙",
        "Interesting: A group of flamingos is called a 'flamboyance'! 🦩",
        "Did you know? Bananas are berries, but strawberries aren't! 🍌",
        "Fun fact: The Eiffel Tower can be 15 cm taller during summer due to thermal expansion! 🗼",
        "Interesting: Dolphins have names for each other and can call out to specific dolphins! 🐬",
        "Did you know? There are more stars in the universe than grains of sand on all Earth's beaches! ⭐",
        "Fun fact: A day on Venus is longer than a year on Venus! 🪐",
        "Interesting: Wombat poop is cube-shaped! 💩",
        "Did you know? The unicorn is the national animal of Scotland! 🦄",
        "Fun fact: A group of crows is called a 'murder'! 🐦‍⬛",
        "Interesting: Cows have best friends and get stressed when separated! 🐮",
      ];
      return facts[Math.floor(Math.random() * facts.length)];
    },
    'riddle puzzle brain teaser tell me give': function() {
      const riddles = [
        "What has keys but no locks, space but no room, and you can enter but can't go inside? 🤔\n(Answer: A keyboard!)",
        "I'm tall when I'm young and short when I'm old. What am I? 🕯️\n(Answer: A candle!)",
        "What has hands but can't clap? 👏\n(Answer: A clock!)",
        "What gets wet while drying? 🧴\n(Answer: A towel!)",
        "What has a head and tail but no body? 🪙\n(Answer: A coin!)",
        "The more you take, the more you leave behind. What am I? 👣\n(Answer: Footsteps!)",
        "What can travel around the world while staying in a corner? 📮\n(Answer: A stamp!)",
        "What has many teeth but can't bite? 🪥\n(Answer: A comb!)",
      ];
      return riddles[Math.floor(Math.random() * riddles.length)];
    },
    'quote inspiration motivational tell me give': function() {
      const quotes = [
        "\"The only way to do great work is to love what you do.\" - Steve Jobs 💪",
        "\"Believe you can and you're halfway there.\" - Theodore Roosevelt 🌟",
        "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" - Winston Churchill 🎯",
        "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt ✨",
        "\"It does not matter how slowly you go as long as you do not stop.\" - Confucius 🚶",
        "\"Everything you've ever wanted is on the other side of fear.\" - George Addair 🦁",
        "\"The only impossible journey is the one you never begin.\" - Tony Robbins 🛤️",
        "\"Your time is limited, don't waste it living someone else's life.\" - Steve Jobs ⏳",
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },
    'advice tip suggestion tell me give': function() {
      const tips = [
        "💡 Stay hydrated! Drink at least 8 glasses of water a day for better health and energy.",
        "💡 Take breaks every hour when working. A 5-minute walk can boost productivity!",
        "💡 Practice gratitude daily. Write down 3 things you're thankful for each morning.",
        "💡 Get 7-9 hours of sleep for optimal mental and physical performance.",
        "💡 Learn something new every day, even if it's just one small fact!",
        "💡 Spend time in nature. Even 20 minutes outside can improve your mood.",
        "💡 Call a friend or family member today. Social connections are vital for happiness!",
        "💡 Practice deep breathing when stressed. Inhale for 4, hold for 4, exhale for 4.",
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    },
    'number game guess': function() {
      const number = Math.floor(Math.random() * 100) + 1;
      return `🎮 I'm thinking of a number between 1 and 100! Can you guess it? (Hint: The number is ${number}... oops, I told you! 😄)`;
    },
    'color favourite favorite': function() {
      const colors = ['Red ❤️', 'Blue 💙', 'Green 💚', 'Yellow 💛', 'Purple 💜', 'Orange 🧡', 'Pink 🩷', 'Black 🖤'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return `My favorite color today is ${color}! What's yours?`;
    },
    'food hungry eat meal': function() {
      const foods = [
        'How about some pizza? 🍕',
        'A nice burger sounds good! 🍔',
        'Maybe try some sushi? 🍣',
        'Tacos are always a great choice! 🌮',
        'Pasta is delicious and filling! 🍝',
        'A fresh salad could be refreshing! 🥗',
        'How about some ramen? 🍜',
        'Breakfast for dinner? Pancakes! 🥞',
      ];
      return foods[Math.floor(Math.random() * foods.length)];
    },
    'music song recommend': function() {
      const genres = [
        'Try some upbeat pop music to boost your mood! 🎵',
        'Classical music is great for focus and relaxation! 🎻',
        'Rock music can give you energy! 🎸',
        'Jazz is perfect for a chill evening! 🎷',
        'Electronic/EDM is great for workouts! 🎧',
        'Indie music has some hidden gems! 🎼',
        'R&B is smooth and soulful! 🎤',
        'Country music tells great stories! 🤠',
      ];
      return genres[Math.floor(Math.random() * genres.length)];
    },
    'movie film watch': function() {
      const suggestions = [
        'How about a comedy to make you laugh? 😂',
        'A thriller could keep you on the edge of your seat! 😱',
        'Science fiction can expand your imagination! 🚀',
        'A feel-good drama might be perfect! 🎭',
        'Action movies are always exciting! 💥',
        'An animated film is fun for all ages! 🎨',
        'A documentary can teach you something new! 📚',
        'A romantic comedy is light and enjoyable! 💕',
      ];
      return suggestions[Math.floor(Math.random() * suggestions.length)];
    },
    'age old how old': function() {
      return "I was created recently, but in computer terms, I'm ancient! I exist in the eternal now. 🤖⏰";
    },
    'birthday born when': function() {
      return "I don't have a traditional birthday, but every conversation with you feels like a celebration! 🎂🎉";
    },
    'calculate math addition subtraction': function() {
      return "I can help with simple math! Try asking something like 'what is 15 plus 23' or 'what is 100 minus 37'. 🧮";
    },
    'weather temperature': function() {
      return "I don't have access to real-time weather data, but you can check weather.com or your local weather app for current conditions! ⛅";
    },
    'country capital city': function() {
      const countries = [
        'France - Paris 🇫🇷',
        'Japan - Tokyo 🇯🇵',
        'Brazil - Brasília 🇧🇷',
        'Egypt - Cairo 🇪🇬',
        'Australia - Canberra 🇦🇺',
        'Canada - Ottawa 🇨🇦',
        'India - New Delhi 🇮🇳',
        'Germany - Berlin 🇩🇪',
      ];
      const country = countries[Math.floor(Math.random() * countries.length)];
      return `Here's a random country and its capital: ${country}`;
    },
    'count number random': function() {
      const num = Math.floor(Math.random() * 1000) + 1;
      return `Here's a random number for you: ${num} 🎲`;
    },
    'compliment nice sweet': function() {
      const compliments = [
        "You're doing great! Keep up the excellent work! 🌟",
        "You have great taste in chatbots! 😄",
        "Your curiosity is admirable! 💡",
        "You're awesome for taking the time to chat with me! 🎉",
        "You seem like a really thoughtful person! 💭",
        "I bet you brighten people's days! ☀️",
      ];
      return compliments[Math.floor(Math.random() * compliments.length)];
    },
    'sad unhappy down depressed': function() {
      return "I'm sorry you're feeling down. Remember: tough times don't last, but tough people do. You've got this! 💪 Would you like to hear a joke or a fun fact to cheer you up?";
    },
    'happy excited great awesome': function() {
      const responses = [
        "That's wonderful! Your positive energy is contagious! 😄",
        "I'm so glad to hear that! Keep riding that happy wave! 🌊",
        "Fantastic! It's great to chat with someone in such good spirits! ✨",
        "Your enthusiasm is amazing! What's making you so happy? 🎉",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'language speak translate': function() {
      return "I primarily communicate in English! I can understand various ways people express themselves, though. 🗣️🌍";
    },
    'sleep tired sleepy': function() {
      return "Sounds like you need some rest! Good sleep is important for your health. Sweet dreams! 😴💤";
    },
    'exercise workout fitness': function() {
      const tips = [
        "Regular exercise is great! Try to get at least 30 minutes of activity most days. 🏃",
        "Mix cardio and strength training for the best results! 💪",
        "Don't forget to stretch before and after workouts! 🧘",
        "Even a short walk can make a big difference in your health! 🚶",
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    },
    'goodbye bye see you later farewell': function() {
      const responses = [
        'Goodbye! Have a wonderful day! 👋',
        'See you later! Take care! 😊',
        'Bye! Feel free to come back anytime! 👋',
        'Farewell! It was nice chatting with you! 🙂',
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'thank thanks appreciate grateful': function() {
      const responses = [
        "You're very welcome! Happy to help! 😊",
        'No problem at all! Let me know if you need anything else!',
        "My pleasure! I'm here whenever you need assistance!",
        "Glad I could help! Feel free to ask me anything else! 🙂",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'yes yeah sure ok okay': function() {
      const responses = [
        "Great! What would you like to do?",
        "Awesome! How can I help you?",
        "Perfect! What's next?",
        "Sounds good! What can I do for you?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'no nope not really': function() {
      const responses = [
        "No worries! Is there something else I can help with?",
        "That's okay! Let me know if you need anything else.",
        "Understood! Feel free to ask if you change your mind.",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'love like enjoy': function() {
      const responses = [
        "That's wonderful! I'm glad you're enjoying our conversation! 😊",
        "I'm so happy to hear that! What else can I do for you?",
        "That makes me happy! How else can I assist you today?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    'bored boring nothing': function() {
      return "Let me help with that! I can tell you a joke, share a fun fact, give you a riddle, suggest a movie, or play a game. What sounds interesting? 🎲";
    },
    'smart intelligent clever': function() {
      return "Thank you! I try my best to be helpful. But remember, you're the smart one for knowing how to use me effectively! 🧠✨";
    },
    'stupid dumb idiot': function() {
      return "I'm sorry if I didn't understand correctly. I'm always learning! Could you rephrase your question? I'll do my best to help! 🤖";
    },
  },
  additionalResponses: {},
  unsuccessfulResponse: `I'm not quite sure how to respond to that. I can help you with things like: flipping a coin 🪙, rolling a dice 🎲, telling the date 📅 or time ⏰, sharing jokes 😄, fun facts 🤓, riddles 🧩, quotes 💬, advice 💡, and basic math 🧮. What would you like to try?`,
  emptyMessageResponse: `Oops! It looks like you didn't type anything. Please send me a message and I'll be happy to help! 💬`,
  addResponses: function (additionalResponses) {
    this.additionalResponses = {
      ...this.additionalResponses,
      ...additionalResponses
    };
  },
  getResponse: function (message) {
    if (!message || !message.trim()) {
      return this.emptyMessageResponse;
    }
    
    const lowerMessage = message.toLowerCase().trim();
    
    const exactMatches = {
      'hi': 'hello hi hey greetings',
      'hey': 'hello hi hey greetings',
      'hello': 'hello hi hey greetings',
      'yo': 'hello hi hey greetings',
      'sup': 'hello hi hey greetings',
      'bye': 'goodbye bye see you later farewell',
      'ok': 'yes yeah sure ok okay',
      'yes': 'yes yeah sure ok okay',
      'no': 'no nope not really',
      'thanks': 'thank thanks appreciate grateful',
      'thx': 'thank thanks appreciate grateful',
    };
    
    if (exactMatches[lowerMessage]) {
      const responseKey = exactMatches[lowerMessage];
      const responses = {
        ...this.defaultResponses,
        ...this.additionalResponses,
      };
      const response = responses[responseKey];
      if (typeof response === 'function') {
        return response();
      } else {
        return response;
      }
    }
    
    const mathPatterns = [
      /what (?:is|are|equals?) (\d+\.?\d*) (?:\+|plus|add|added to) (\d+\.?\d*)/i,
      /what (?:is|are|equals?) (\d+\.?\d*) (?:\-|minus|subtract|subtracted from|take away) (\d+\.?\d*)/i,
      /what (?:is|are|equals?) (\d+\.?\d*) (?:\*|times|multiply|multiplied by|x) (\d+\.?\d*)/i,
      /what (?:is|are|equals?) (\d+\.?\d*) (?:\/|divided by|divide|over) (\d+\.?\d*)/i,
      /(\d+\.?\d*) (?:\+|plus) (\d+\.?\d*)/i,
      /(\d+\.?\d*) (?:\-|minus) (\d+\.?\d*)/i,
      /(\d+\.?\d*) (?:\*|times|x) (\d+\.?\d*)/i,
      /(\d+\.?\d*) (?:\/|divided by) (\d+\.?\d*)/i,
    ];
    
    for (let i = 0; i < mathPatterns.length; i++) {
      const match = message.match(mathPatterns[i]);
      if (match) {
        const num1 = parseFloat(match[1]);
        const num2 = parseFloat(match[2]);
        let result;
        const operation = i % 4;
        
        if (operation === 0) result = num1 + num2;
        else if (operation === 1) result = num1 - num2;
        else if (operation === 2) result = num1 * num2;
        else if (operation === 3) {
          if (num2 === 0) return "Oops! I can't divide by zero. Try a different number! ❌";
          result = num1 / num2;
          result = Math.round(result * 100) / 100;
        }
        
        return `${num1} ${operation === 0 ? '+' : operation === 1 ? '-' : operation === 2 ? '×' : '÷'} ${num2} = ${result} ✅`;
      }
    }
    
    const percentagePattern = /what (?:is|are) (\d+\.?\d*)(?:%|\s*percent) (?:of) (\d+\.?\d*)/i;
    const percentMatch = message.match(percentagePattern);
    if (percentMatch) {
      const percent = parseFloat(percentMatch[1]);
      const number = parseFloat(percentMatch[2]);
      const result = (percent / 100) * number;
      return `${percent}% of ${number} = ${Math.round(result * 100) / 100} ✅`;
    }
    
    const squarePattern = /what (?:is|are) (?:the )?square (?:of )?(\d+\.?\d*)/i;
    const squareMatch = message.match(squarePattern);
    if (squareMatch) {
      const num = parseFloat(squareMatch[1]);
      const result = num * num;
      return `The square of ${num} = ${result} ✅`;
    }
    
    const responses = {
      ...this.defaultResponses,
      ...this.additionalResponses,
    };
    
    const {
      ratings,
      bestMatchIndex,
    } = this.stringSimilarity(lowerMessage, Object.keys(responses));
    
    const bestResponseRating = ratings[bestMatchIndex].rating;
    
    if (bestResponseRating <= 0.25) {
      return this.unsuccessfulResponse;
    }
    
    const bestResponseKey = ratings[bestMatchIndex].target;
    const response = responses[bestResponseKey];
    
    if (typeof response === 'function') {
      return response();
    } else {
      return response;
    }
  },
  getResponseAsync: function (message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getResponse(message));
      }, 1000);
    });
  },
  compareTwoStrings: function (first, second) {
    first = first.replace(/\s+/g, '');
    second = second.replace(/\s+/g, '');
    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;
    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram)
        ? firstBigrams.get(bigram) + 1
        : 1;
      firstBigrams.set(bigram, count);
    }
    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram)
        ? firstBigrams.get(bigram)
        : 0;
      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }
    return (2.0 * intersectionSize) / (first.length + second.length - 2);
  },
  stringSimilarity: function (mainString, targetStrings) {
    const ratings = [];
    let bestMatchIndex = 0;
    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = this.compareTwoStrings(mainString, currentTargetString);
      ratings.push({target: currentTargetString, rating: currentRating});
      if (currentRating > ratings[bestMatchIndex].rating) {
        bestMatchIndex = i;
      }
    }
    const bestMatch = ratings[bestMatchIndex];
    return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
  },
};

function uuidPolyfill() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
    const randomNumber = Math.random() * 16 | 0;
    const result = char === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
    return result.toString(16);
  });
}

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    if (typeof root.crypto === 'undefined') {
      try {
        root.crypto = {};
      } catch (e) {}
    }
    if (root.crypto && typeof root.crypto.randomUUID !== 'function') {
      try {
        root.crypto.randomUUID = uuidPolyfill;
      } catch (e) {}
    }
    root.Chatbot = factory();
    root.chatbot = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return Chatbot;
}));