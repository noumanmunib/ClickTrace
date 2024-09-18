let callStack = [];

// Function to delay execution by some milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to log messages on the page
function logToPage(message) {
  const logContainer = document.getElementById("log");
  const logEntry = document.createElement("div");
  logEntry.textContent = message;
  logContainer.appendChild(logEntry);
}

// Utility function to measure execution time and handle delays
async function executeWithTiming(functionName, fn, delayTime) {
  callStack.push(functionName); // Adding function to call stack
  logToPage(`Function called: ${functionName}`);

  // For better visibility of current call stack
  const callStackString = callStack.join(" -> ");
  logToPage(`Current Call Stack: ${callStackString}`);

  const startTime = performance.now();
  await delay(delayTime); // Simulate the task's delay
  const result = await fn(); // Execute the actual function logic
  const endTime = performance.now();

  logToPage(
    `Execution time for ${functionName}: ${(endTime - startTime).toFixed(2)} ms`
  );

  // Don't pop the call stack until all functions are complete
  return result;
}

// Individual task functions
async function initializeUserSession() {
  console.log("User session initialized");
}

async function fetchUserData() {
  console.log("User data fetched");
}

async function validateData() {
  console.log("Data validation completed");
}

async function renderDashboard() {
  console.log("Dashboard rendered");
}

async function trackUserActions() {
  console.log("User actions tracked");
}

async function updateStatistics() {
  console.log("Statistics updated");
}

async function initiateReportGeneration() {
  console.log("Report generation initiated");
}

async function generateReport() {
  console.log("Report generated");
}

async function notifyUser() {
  console.log("User notified");
}

async function closeSession() {
  console.log("Session closed");
}

// Execute all functions in sequence with their delays and log timings.
async function executeAllFunctionsSequentially() {
  await executeWithTiming("initializeUserSession", initializeUserSession, 500);
  await executeWithTiming("fetchUserData", fetchUserData, 1000);
  await executeWithTiming("validateData", validateData, 800);
  await executeWithTiming("renderDashboard", renderDashboard, 600);
  await executeWithTiming("trackUserActions", trackUserActions, 400);
  await executeWithTiming("updateStatistics", updateStatistics, 700);
  await executeWithTiming(
    "initiateReportGeneration",
    initiateReportGeneration,
    900
  );
  await executeWithTiming("generateReport", generateReport, 600);
  await executeWithTiming("notifyUser", notifyUser, 500);
  await executeWithTiming("closeSession", closeSession, 400);

  // Pop and show the stack after all the function calls are finished.
  while (callStack.length > 0) {
    callStack.pop();
    logToPage(
      `Current Call Stack after pop: ${callStack.join(" -> ") || "Empty"}`
    );
  }
}

document
  .getElementById("myButton")
  .addEventListener("click", executeAllFunctionsSequentially);
