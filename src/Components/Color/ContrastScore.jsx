import "./Color.css";
import "./Buttons.css";
import { useEffect, useState } from "react";

function ContrastDisplay({ hex, contrastText }) {
  const [fetchResult, setFetchResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [hex, contrastText] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const contrastData = await response.json();
        const contrastScore = contrastData.overall;
        setFetchResult(contrastScore);
      } catch (error) {
        console.error(error);
        return "error fetching";
      }
    }
    fetchData();
  }, [contrastText, hex]);

  return (
    <>
      <p>ContrastScore: {fetchResult}</p>
    </>
  );
}
export default ContrastDisplay;
