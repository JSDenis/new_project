import { getContent } from "./actions";

document.body.innerHTML = `
    <main>
       <div class="header" id="header"></div>
       <div id="content">
            testksdjhfjksdkf
       </div> 
       <div class="fixed__player">
    <div class="audio-player">

        <audio id="audio">
          
        </audio>
      
        <div class="player-controls">
      
          <div id="radioIcon"></div>
      
          <button id="playAudio"> <i class="material-icons small">play_arrow</i></button>
      
          <div id="seekObjContainer">
            <div id="seekObj">
              <div id="percentage"></div>
            </div>
          </div>
      
          <p><small id="currentTime">00:00</small></p>
      
        </div>
      </div>
    </div>
    </main>
`;

window.addEventListener('load', getContent);
window.addEventListener('hashchange', getContent);









