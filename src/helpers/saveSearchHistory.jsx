function saveSearchHistory(searchKeyword) {
  // Get the current search history from localStorage or initialize an empty string
  let history = localStorage.getItem("history_search") || "";

  // Split the history into an array of keywords
  let historyArray = history.split("#").filter(Boolean);

  // Add the new search keyword to the beginning of the array
  historyArray.unshift(searchKeyword);

  // Limit the history to the last 10 searches (optional)
  if (historyArray.length > 10) {
    historyArray = historyArray.slice(0, 10);
  }

  // Join the array back into a string with '#' as separator
  let updatedHistory = historyArray.join("#");

  // Save the updated history back to localStorage
  localStorage.setItem("history_search", updatedHistory);
}
function getSearchHistory() {
  // Get the search history from localStorage
  let history = localStorage.getItem("history_search") || "";

  // Split the history into an array of keywords
  let historyArray = history.split("#").filter(Boolean);

  return historyArray;
}
export { saveSearchHistory, getSearchHistory };
