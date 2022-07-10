const submitEl = document.getElementById("submit")
const winRateEl = document.getElementById("win-rate")
const resetEl = document.getElementById("reset-btn")

let tickets
let points

document.addEventListener('DOMContentLoaded', ()=>{
    submitEl.addEventListener('click', dataResult)
    resetEl.addEventListener('click', resetForm)
})

const resetForm = (ev) =>{
     ev.preventDefault()
     document.querySelector("form").reset()
     winRateEl.innerHTML = `<p>Club Win Rate: </p>`
}




const dataResult = (ev) =>{
    ev.preventDefault()
    tickets = document.getElementById("tickets").value
    points = document.getElementById("points").value
    

    let pobedi
    let zagubi
    let procenti

    const zapomnqneFloat = parseFloat(tickets/2)
    const zapomnqneInt = Math.floor(tickets/2)

     if (tickets % 2 === 0)
        {
            if ((((zapomnqneInt) * 9) - points) % 4 === 0)
            {
                zagubi = Math.floor(((((zapomnqneInt) * 9) - points) / 4));
                pobedi = parseFloat(((zapomnqneInt) - zagubi));
                procenti = ((pobedi / zapomnqneFloat) * 100);
                
            }
            else if ((((zapomnqneInt) * 9) - points) % 4 === 1)
            {
                zagubi = Math.floor((((((zapomnqneInt) * 9) - points) / 4) - 1));
                pobedi = parseFloat((((zapomnqneInt) - zagubi)));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
            else if ((((zapomnqneInt) * 9) - points) % 4 === 2)
            {
                zagubi = Math.floor((((((zapomnqneInt) * 9) - points) / 4) - 2));
                pobedi = parseFloat((((zapomnqneInt) - zagubi)));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
            else
            {
                zagubi = Math.floor((((((zapomnqneInt) * 9) - points) / 4) - 3));
                pobedi = parseFloat((((zapomnqneInt) - zagubi)));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
        }
        else
        {
            if (((((zapomnqneInt) * 9) + 3) - points) % 4 === 0)
            {
                zagubi = Math.floor((((((zapomnqneInt) * 9) + 3) - points) / 4));
                pobedi = parseFloat((((zapomnqneInt) - zagubi) + 0.5));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
            else if (((((zapomnqneInt) * 9) + 3) - points) % 4 === 1)
            {
                zagubi = Math.floor(((((((zapomnqneInt) * 9) + 3) - points) / 4) - 1));
                pobedi = parseFloat((((zapomnqneInt) - zagubi) + 0.5));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
            else if (((((zapomnqneInt) * 9) + 3) - points) % 4 === 2)
            {
                zagubi = Math.floor(((((((zapomnqneInt) * 9) + 3) - points) / 4) - 2));
                pobedi = parseFloat((((zapomnqneInt) - zagubi) + 0.5));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
            else
            {
                zagubi = Math.floor(((((((zapomnqneInt) * 9) + 3) - points) / 4) - 3));
                pobedi = parseFloat((((zapomnqneInt) - zagubi) + 0.5));
                procenti = ((pobedi / zapomnqneFloat) * 100);
            }
        }

        winRateEl.innerHTML = `<p>Club Win Rate: ${procenti.toFixed(2)}%</p>`
    }