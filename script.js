let boxes = document.querySelectorAll(".box");
let turnX = true;
let win = false;
let clk = 0;
let msg = document.querySelector("h2");
let newGamebtn = document.querySelector("#newGameBtn");
let btnContainer = document.querySelector(".btnContainer");

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2,5,8], [0,4,8], [2,4,6]]

// boxes.forEach((box)=>{
//     box.addEventListener("click", ()=>{
//         console.log("Box was clicked");
//     })
// });

let drawChk = ()=>{
    if(win==false && clk==9){
        console.log("Inside if");
        msg.innerText = "Match is draw";
        btnContainer.classList.remove("hide");
        newGamebtn.addEventListener("click", ()=>{
                        window.location.reload();
                    });
    }}


function winChk(){
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1!=='' && pos2 !== '' && pos3!==''){         // winning condition 1
            if(pos1 === pos2 && pos2 === pos3){             // winning condition 2
                msg.innerText = `Congratulations!! Winner is ${pos1}`;     // winning msg
                boxes.forEach((box)=>{                      // after gettiing winner disabled other box
                    box.disabled = true;
                });
                btnContainer.classList.remove("hide");
                newGamebtn.addEventListener("click", ()=>{
                    window.location.reload();
                });
                win = true;
                
            }
        }
        
    }
};


//Game Logic

for (let box of boxes) {
    box.addEventListener("click", () => {
        clk++
        if (turnX) {
            box.innerText = "x";
            turnX = false;
            winChk();
            drawChk();

        }
        else {
            box.innerText = "o";
            turnX = true;
            winChk();
            drawChk();
        }

        box.disabled = true;

    });
};







