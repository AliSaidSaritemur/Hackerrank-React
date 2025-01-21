import React, { useState } from "react";

const FeedbackSystem = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Readability', Upvotes: 0, Downvotes: 0 },
    { id: 2, name: 'Performance', Upvotes: 0, Downvotes: 0 },
    { id: 3, name: 'Security', Upvotes: 0, Downvotes: 0 },
    { id: 4, name: 'Documentation', Upvotes: 0, Downvotes: 0 },
    { id: 5, name: 'Testing', Upvotes: 0, Downvotes: 0 }
  ]); 

  const IncraseUpVotes=(itemID)=>{
    const increasedItem =items.map((item)=>item.id===itemID?{...item,Upvotes:item.Upvotes+1}:item)
    setItems(increasedItem);
  }
  const IncraseDownVotes=(itemID)=>{
    const increasedItem =items.map((item)=>item.id===itemID?{...item,Downvotes:item.Downvotes+1}:item)
    setItems(increasedItem);
  }
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
      {items.map((item, idx) => (
        <div key={item.id} className="pa-10 w-300 card">
          <h2>{item.name}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15"    data-testid={`upvote-btn-${idx}`}
              onClick={() => IncraseUpVotes(item.id)}
           >
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" d data-testid={`downvote-btn-${idx}`}
             onClick={() => IncraseDownVotes(item.id)}
           >
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${idx}`}>
            Upvotes: <strong>{item.Upvotes}</strong>
          </p>
          <p className="my-10 mx-0"  data-testid={`downvote-count-${idx}`}>
            Downvotes: <strong>{item.Downvotes}</strong>
          </p>
        </div>
         ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
