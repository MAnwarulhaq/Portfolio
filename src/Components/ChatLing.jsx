import { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    // Config
    window.chtlConfig = {
      chatbotId: "3243268235",
    };

    // Script create
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default Chatbot;