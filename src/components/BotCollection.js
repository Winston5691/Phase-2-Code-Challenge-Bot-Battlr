import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,handleClick,handleDelete}) {
  const botCollection=bots.map(bot=>
    <Botcard
    key={bot.id}
    bot={bot}
    handledelete={handleDelete}
    handleClick={handleClick}
    />)
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {displayBotCards}
        Collection of all bots

      </div>
    </div>
  )
  }
export default BotCollection;