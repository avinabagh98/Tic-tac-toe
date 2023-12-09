let boxes = document.querySelectorAll(".box");
let turnX = true;
let msg = document.querySelector("h2");
let newGamebtn = document.querySelector("#newGameBtn");
let btnContainer = document.querySelector(".btnContainer");

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2,5,8], [0,4,8], [2,4,6]]

// boxes.forEach((box)=>{
//     box.addEventListener("click", ()=>{
//         console.log("Box was clicked");
//     })
// });


for (let box of boxes) {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnX) {
            box.innerText = "x";
            turnX = false;
            winChk();

        }
        else {
            box.innerText = "o";
            turnX = true;
            winChk();
        }

        box.disabled = true;

    });
};

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
            }
        }
        
    }
};





// let newGame = () =>{
//     newGamebtn.style.display = "block";
//     newGamebtn.addEventListener('click', ()=>{
//         window.location.reload();
//     });
// };