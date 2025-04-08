import data from "../api/data.json";
import { Tweet } from "./Tweet";
import { getWizards } from "../api/wizard";
import { useEffect, useState } from "react";

export default function TweetFeed() {
  const [wizards, setWizards] = useState<any[]>([]);

  useEffect(() => {
    getWizards()
      .then((wizards) => {
        setWizards(wizards);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return wizards?.length > 0 ? (
    <div className="tweet-feed">
      {wizards.slice(0,1).map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  ) : (
    <div>loading...</div>
  );

  // <div className="tweet-feed">
  //   {wizards?.length > 0 &&
  //     wizards.map(
  //       (tweet, index) => (
  //         console.log(tweet), (<Tweet key={index} tweet={tweet} />)
  //       )
  //     )}
  //     </div>

  //     <div>
  //            loading...
  //     </div>

  // <div className="tweet-feed">
  // {data.slice(0,1).map((tweet, index) => (
  // console.log(tweet),
  // <Tweet key={index} tweet={tweet} />
  // ))}
  // </div>
}
