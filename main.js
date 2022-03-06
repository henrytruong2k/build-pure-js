let seatArr = [
    {
        id: 1,
        hasSeat: false,
        user: null
    },
    {
        id: 2,
        hasSeat: true,
        user: {
            name: "Teo",
        }
    },
    {
        id: 3,
        hasSeat: true,
        user: {
            name: "Nam",
        }
    },
    {
        id: 4,
        hasSeat: false,
        user: null
    },
    {
        id: 5,
        hasSeat: false,
        user: null
    },
    {
        id: 6,
        hasSeat: false,
        user: null
    },
];

const renderSeats = (seatArr) => {
    const seatList = document.querySelector(".seat-list");
    seatArr.forEach(ele => {
        const seatContainer = document.createElement("div");
        seatContainer.classList.add("seat-container");
        seatContainer.setAttribute("onclick", `bookSeat(${ele.id})`);
        seatContainer.innerText = ele.id;
        if(ele.hasSeat) {
            seatContainer.classList.add("booked");
        }
        seatList.appendChild(seatContainer);
    });
}

renderSeats(seatArr);

const modal = document.getElementById("myModal");


const span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let nameVal = document.getElementById("name");
const saveBtn = document.getElementById("save");

const seatContainer = document.querySelectorAll(".seat-container");
saveBtn.addEventListener('click', () => {
    const index = seatArr.findIndex(x => x.id == seatID.value);
    if(index !== -1) {
        seatArr[index] = {
            ...seatArr[index], 
            hasSeat: true,
            user: {
                name: nameVal.value
            }
        };
        seatContainer[index].classList.add("booked");
        nameVal.value = "";
        modal.style.display = "none";
    }
})

const title = document.getElementById("title");
const seatID = document.getElementById("seatID");
const bookSeat = (id) => {
    modal.style.display = "block";
    seatID.value = id;

    let seatObj = seatArr.find(x => x.id == id);
    if(seatObj.hasSeat && seatObj.user != null) {
        title.innerText = "This seat have been booked";
        nameVal.value = seatObj.user.name;
        saveBtn.setAttribute("disabled", "true");
    } 
    else {
        title.innerText = "Book a seat";
        nameVal.value = "";
        saveBtn.removeAttribute("disabled");
    }
}