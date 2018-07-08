import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js"

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar/>
        <div className = "container content-container">
          <div className = "row">
              <div className = "col-md-8 offset-md-2">
              <div className = "book-info">
              <img src = "https://images-eu.ssl-images-amazon.com/images/I/511FKJbgXjL.jpg" className = "book-cover" />
                Title : Ender's Game (The Ender Quintet)
                <br/>Author : Orson Scott Card 
                <br/>Publisher : Tor Teen
                <br/> Genre : Science Fiction , Fantasy      
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              "I've watched through his eyes, I've listened through his ears, and I tell you he's the one. Or at least as close as we're going to get." 
              <br/>"That's what you said about the brother." 
              <br/>"The brother tested out impossible. For other reasons. Nothing to do with his ability." 
              <br/>"Same with the sister. And there are doubts about him. He's too malleable. 
              <br/>Too willing to submerge himself in someone else's will." 
              <br/>"Not if the other person is his enemy." 
              <br/>"So what do we do? Surround him with enemies all the time?" 
              <br/>"If we have to." 
              <br/>"I thought you said you liked this kid." 
              <br/>"If the buggers get him, they'll make me look like his favorite uncle." 
              <br/>"All right. We're saving the world, after all. Take him." 
              <br/> <br/>
              … 
              <br/> <br/>
              The monitor lady smiled very nicely and tousled his hair and said, "Andrew, I suppose by now you're just absolutely sick of having that horrid monitor. Well, I have good news for you. That monitor is going to come out today. We're going to take it right out, and it won't hurt a bit." 
              <br/> <br/>Ender nodded. It was a lie, of course, that it wouldn't hurt a bit. But since adults always said it when it was going to hurt, he could count on that statement as an accurate prediction of the future. Sometimes lies were more dependable than the truth. 
              <br/> <br/>"So if you'll just come over here, Andrew, just sit right up here on the examining table. The doctor will be in to see you in a moment." 
              <br/> <br/>The monitor gone. Ender tried to imagine the little device missing from the back of his neck. I'll roll over on my back in bed and it won't be pressing there. I won't feel it tingling and taking up the heat when I shower. 
              <br/> <br/> And Peter won't hate me anymore. I'll come home and show him that the monitor's gone, and he'll see that I didn't make it, either. That I'll just be a normal kid now, like him. That won't be so bad then. He'll forgive me that I had my monitor a whole year longer than he had his. We'll be— 
              <br/> <br/>Not friends, probably. No, Peter was too dangerous. Peter got so angry. Brothers, though. Not enemies, not friends, but brothers -- able to live in the same house. He won't hate me, he'll just leave me alone. And when he wants to play buggers and astronauts, maybe I won't have to play, maybe I can just go read a book.
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
