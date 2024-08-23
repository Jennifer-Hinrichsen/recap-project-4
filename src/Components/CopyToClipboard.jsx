import { useState, useEffect } from "react";

function CopyToClipboard({ hexCode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopied(true);
    } catch (error) {
      console.error("Failed: ", error);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div>
      {copied ? (
        <button>Sucessfully Copied!</button>
      ) : (
        <button onClick={handleCopy}>Copy</button>
      )}
    </div>
  );
}

export default CopyToClipboard;
