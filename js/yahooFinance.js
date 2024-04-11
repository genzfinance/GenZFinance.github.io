// Function to fetch data from Yahoo Finance API
async function fetchYahooFinanceData(stockSymbol) {
  // Define the API endpoint URL for the desired stock symbol
  //   const apiUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stockSymbol}`;
  const apiUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL`;

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check for HTTP error codes
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Received data:", data);

    // Parse the data and display it
    // if (data.quoteResponse && data.quoteResponse.result) {
    //   const stockInfo = data.quoteResponse.result[0];
    //   const stockDiv = document.getElementById("stock-info");

    if (
      data.quoteResponse &&
      data.quoteResponse.result &&
      data.quoteResponse.result.length > 0
    ) {
      const stockInfo = data.quoteResponse.result[0];
      const stockDiv = document.getElementById("stock-info");

      // Display stock information
      stockDiv.innerHTML = `
          <h2>${stockInfo.shortName} (${stockInfo.symbol})</h2>
          <p>Current Price: $${stockInfo.regularMarketPrice}</p>
          <p>Change: ${stockInfo.regularMarketChange} (${stockInfo.regularMarketChangePercent}%)</p>
        `;
    } else {
      console.error("No data found for the provided stock symbol.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function with a specific stock symbol (e.g., AAPL for Apple Inc.)
fetchYahooFinanceData("AAPL");
