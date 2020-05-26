// const navSlide = () => {
//     const toggle = document.querySelector('.toggle');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.right_side .nav-links li');

//     toggle.addEventListener('click', ()=>{
//         nav.classList.toggle('nav-active');

//         /**Animate nav-links */
//         navLinks.forEach((link, index) =>{

//             if(link.style.animation){
//                 link.style.animation = '';
//             }else{
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.1}s`;
//             }
//         });
//         toggle.classList.toggle('cancel');
//     });
// }
// navSlide();
var recordings = document.querySelector("#recordings-table > tbody");


const getdata = () =>{
    
    fetch("js/data.json")
    .then(res=> res.json())
    .then(data => {

        let counter = 1, counts = 1;
        while(recordings.firstChild){
            recordings.removeChild(recordings.firstChild);
        }

        data.forEach(element => {
            const tr = document.createElement("tr");
                element.forEach(cell=>{
                        console.log(cell.length);
                        const count = document.createElement("th");
                        count.textContent = counter;
        
                        const date = document.createElement("td");
                        date.setAttribute("data-label", "Date");
                        date.textContent = cell.Date;
        
                        const time = document.createElement("td");
                        time.setAttribute("data-label", "Time");
                        time.textContent = cell.Time;
        
                        const speed = document.createElement("td");
                        speed.setAttribute("data-label", "Speed");
                        speed.textContent = cell.Speed;
        
                        const longitude = document.createElement("td");
                        longitude.setAttribute("data-label", "Longitude");
                        longitude.textContent = cell.Longitude;
        
                        const latitude = document.createElement("td");
                        latitude.setAttribute("data-label", "Latitude");
                        latitude.textContent = cell.Latitude;
        
                        const speedlimit = document.createElement("td");
                        speedlimit.setAttribute("data-label", "Speed Limit");
                        speedlimit.textContent = cell.Speed_Limit;
        
                        const status = document.createElement("td");
                        status.setAttribute("data-label", "Status");
                        status.textContent = cell.Status;
        
                        tr.append(count, date, time, speed, longitude, latitude, speedlimit, status);
                        counter++;
                        
               counts++;
            });
            
            
            recordings.appendChild(tr);
        });
        
     
        

        
    })
    .catch();
}
document.addEventListener("DOMContentLoaded", ()=>{getdata();});