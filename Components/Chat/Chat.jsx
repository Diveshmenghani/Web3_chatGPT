export const Chat = () => {
  const handleSubmit = async (prompt) => {
    try {
      // Sending the input prompt to the server
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log("API Response:", data.bot);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { handleSubmit }; // Return handleSubmit
};