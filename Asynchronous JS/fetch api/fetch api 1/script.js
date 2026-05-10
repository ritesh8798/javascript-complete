//basic fetch

// fetch("https://catfact.ninja/facts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//access the actual data

async function getCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Failed to fetch!");
    }

    const data = await response.json();

    // Now access the actual facts array
    console.log(data.fact);
    
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getCatFact();

//next page access

async function  getCatFactsByPage(pageNumber) {
    try {
        const response = await fetch(
          `https://catfact.ninja/facts?page=${pageNumber}`,
        );
        if (!response.ok) {
            throw new Error("failed to fetch");
        }

        const data = await response.json();

        const facts = data.data;

        console.log(`--- Page ${data.current_page} of ${data.last_page} ---`);

        facts.forEach((item, index) => {
            console.log(`Fact ${index+1} : ${item.fact}`);
            
        })

        console.log("Next page URL:", data.next_page_url);
        
    } catch (error) {
        console.log("Error : ",error.message);
        
    }
};

// getCatFactsByPage(2);