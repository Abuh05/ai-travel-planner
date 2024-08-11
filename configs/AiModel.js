

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: " Generate Travel Plan for Location: Yenagoa, Nigeria for 3 Day and 2 night for a A Couple with s Moderate \nbudget with a flight details, flight with booking url, Hotel options list with hotelname, Hotel address, price, hotel image url, geo coordinate, rating descriptions and places to visit nearby with placeName, Place Image url, Geop cordinate, ticket pricing, time to travel each of the location for 3 day and 2 night with best time to \nvisit in JSON"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip\": {\n    \"destination\": \"Yenagoa, Nigeria\",\n    \"duration\": \"3 days, 2 nights\",\n    \"budget\": \"Moderate\",\n    \"travelers\": \"Couple\"\n  },\n  \"flights\": [\n    {\n      \"airline\": \"Air Peace\",\n      \"flightNumber\": \"P4723\",\n      \"departureAirport\": \"Lagos (LOS)\",\n      \"arrivalAirport\": \"Yenagoa (YNG)\",\n      \"departureDate\": \"2023-12-01\",\n      \"arrivalDate\": \"2023-12-01\",\n      \"bookingUrl\": \"https://www.flyairpeace.com/\",\n      \"price\": \"$150\"\n    }\n  ],\n  \"hotels\": [\n    {\n      \"name\": \"The Bay Resort Yenagoa\",\n      \"address\": \"121 Isaac Boro Exp Way, Yenagoa 560101, Nigeria\",\n      \"price\": \"$80 per night\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1571015966008-070256d32956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2523, 6.2673\",\n      \"rating\": \"4.5 stars\",\n      \"description\": \"Modern resort with an outdoor pool, a restaurant, and bar.  Offers spacious rooms with a private balcony or patio.\"\n    },\n    {\n      \"name\": \"Grand Hotel Yenagoa\",\n      \"address\": \"16 Azikwe Road, Yenagoa, Nigeria\",\n      \"price\": \"$60 per night\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1571015966008-070256d32956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2527, 6.2679\",\n      \"rating\": \"4 stars\",\n      \"description\": \"Classic hotel with a restaurant, a bar, and a rooftop terrace with city views.  Rooms are comfortable and well-equipped.\"\n    },\n    {\n      \"name\": \"Prestige Hotel\",\n      \"address\": \"22 Isaac Boro Exp Way, Yenagoa, Nigeria\",\n      \"price\": \"$50 per night\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1571015966008-070256d32956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2529, 6.2681\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"Budget-friendly hotel with clean and comfortable rooms. Offers a simple breakfast and free Wi-Fi.\"\n    }\n  ],\n  \"placesToVisit\": [\n    {\n      \"name\": \"Ox-Bow Lake\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1554851879-5865a93d685f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2531, 6.2683\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"2 hours\",\n      \"description\": \"Beautiful natural lake with scenic views.  Perfect for a relaxing walk or picnic.\"\n    },\n    {\n      \"name\": \"Yenagoa City Market\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1504711395641-0b778208d941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2528, 6.2678\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1 hour\",\n      \"description\": \"Vibrant and bustling market where you can find a variety of local goods, souvenirs, and fresh produce.\"\n    },\n    {\n      \"name\": \"Ijaw Cultural Centre\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1563878837-2c854c878548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2535, 6.2687\",\n      \"ticketPricing\": \"$5\",\n      \"timeToTravel\": \"2 hours\",\n      \"description\": \"Learn about the rich history and culture of the Ijaw people, the indigenous group of Yenagoa.  Offers exhibits, cultural performances, and craft demonstrations.\"\n    },\n    {\n      \"name\": \"Azikwe Road\",\n      \"imageUrl\": \"https://images.unsplash.com/photo-1571015966008-070256d32956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80\",\n      \"geoCoordinates\": \"5.2530, 6.2680\",\n      \"ticketPricing\": \"Free\",\n      \"timeToTravel\": \"1 hour\",\n      \"description\": \"Explore the heart of Yenagoa, lined with shops, restaurants, and historical buildings.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"activities\": [\n        {\n          \"name\": \"Arrive in Yenagoa and check into hotel\",\n          \"time\": \"Morning\"\n        },\n        {\n          \"name\": \"Lunch at a local restaurant\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"name\": \"Visit Ox-Bow Lake\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"name\": \"Dinner at a restaurant in Yenagoa\",\n          \"time\": \"Evening\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"activities\": [\n        {\n          \"name\": \"Visit Yenagoa City Market\",\n          \"time\": \"Morning\"\n        },\n        {\n          \"name\": \"Lunch at a local restaurant\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"name\": \"Visit Ijaw Cultural Centre\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"name\": \"Dinner at a restaurant in Yenagoa\",\n          \"time\": \"Evening\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"activities\": [\n        {\n          \"name\": \"Explore Azikwe Road\",\n          \"time\": \"Morning\"\n        },\n        {\n          \"name\": \"Lunch at a local restaurant\",\n          \"time\": \"Afternoon\"\n        },\n        {\n          \"name\": \"Depart from Yenagoa\",\n          \"time\": \"Evening\"\n        }\n      ]\n    }\n  ],\n  \"bestTimeToVisit\": \"The best time to visit Yenagoa is during the dry season, from November to April, when the weather is pleasant and sunny. The rainy season, from May to October, can be quite hot and humid, with frequent rainfall.\"\n}\n```\n\n**Please Note:**\n\n* This itinerary is just a suggestion and can be customized based on your preferences and interests.\n* The flight details and prices are subject to change.\n* Hotel prices are approximate and can vary depending on the time of year and availability.\n* Ticket prices for places of interest may vary depending on the time of year and specific attraction.\n* It's always a good idea to book your flights and accommodation in advance, especially if you're traveling during peak season. \n* Be sure to check the visa requirements for Nigeria before you travel. \n* Remember to pack accordingly for the climate and be prepared for potential changes in weather. \n* Stay safe and enjoy your trip to Yenagoa!\n\nI've included a placeholder image URL for each hotel and place to visit, as I don't have access to specific images for each location. I suggest you use Google Images or other search engines to find relevant images for your trip."},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 
  
  