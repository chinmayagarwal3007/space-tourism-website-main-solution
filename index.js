function toHome() { location.href = "index.html" }

function toCrew() { location.href = "Crew_Page.html" }

function toDestination() { location.href = "Destination_Page.html" }

function toTechnology() { location.href = "Technology_Page.html" }



function flightCrew1() {
    document.getElementById('crew_post').innerHTML = "FLIGHT COMMANDER"
    document.getElementById('crew_name').innerHTML = "DOUGLAS HURLEY"
    document.getElementById('crew_potrait').src = "assets/crew/image-douglas-hurley.png"
    document.getElementById('crew_achivement').innerHTML = "Douglas Gerald Hurley Is an American Engineer, Former Marine Corps Pilot and Former Nasa Astronaut. He Launched Into Space for the Third Time as Commander of Crew Dragon Demo-2."
    document.getElementById('btn1').style.borderColor = "white"
    document.getElementById('btn2').style.borderColor = "#696969"
    document.getElementById('btn3').style.borderColor = "#696969"
    document.getElementById('btn4').style.borderColor = "#696969"
}

function flightCrew2() {
    document.getElementById('crew_post').innerHTML = "FLIGHT ENGINEER"
    document.getElementById('crew_name').innerHTML = "ANOUSHEH ANSARI"
    document.getElementById('crew_achivement').innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    document.getElementById('crew_potrait').src = "assets/crew/image-anousheh-ansari.png"
    document.getElementById('btn1').style.borderColor = "#696969"
    document.getElementById('btn2').style.borderColor = "white"
    document.getElementById('btn3').style.borderColor = "#696969"
    document.getElementById('btn4').style.borderColor = "#696969"
}

function flightCrew3() {
    document.getElementById('crew_post').innerHTML = "FLIGHT PILOT"
    document.getElementById('crew_name').innerHTML = "VICTOR GLOVER"
    document.getElementById('crew_achivement').innerHTML = "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    document.getElementById('crew_potrait').src = "assets/crew/image-victor-glover.png"
    document.getElementById('btn1').style.borderColor = "#696969"
    document.getElementById('btn2').style.borderColor = "#696969"
    document.getElementById('btn3').style.borderColor = "white"
    document.getElementById('btn4').style.borderColor = "#696969"
}

function flightCrew4() {
    document.getElementById('crew_post').innerHTML = "MISSION SPECIALIST"
    document.getElementById('crew_name').innerHTML = "MARK SHUTTLEWORTH"
    document.getElementById('crew_achivement').innerHTML = "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    document.getElementById('crew_potrait').src = "assets/crew/image-mark-shuttleworth.png"
    document.getElementById('btn1').style.borderColor = "#696969"
    document.getElementById('btn2').style.borderColor = "#696969"
    document.getElementById('btn3').style.borderColor = "#696969"
    document.getElementById('btn4').style.borderColor = "white"
}

function onMoon() {
    document.getElementById('destination_name').innerHTML = "MOON"
    document.getElementById('destination_activity').innerHTML = "  See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    document.getElementById('planet_img').src = "assets/destination/image-moon.png"
    document.getElementById('mars').style.borderBottom = "none"
    document.getElementById('moon').style.borderBottom = "2px solid white"
    document.getElementById('europa').style.borderBottom = "none"
    document.getElementById('titan').style.borderBottom = "none"
    document.getElementById('travel_time').innerHTML = "384,400 KM"
    document.getElementById('avg_distance').innerHTML = "3 DAYS"
}

function onMars() {
    document.getElementById('destination_name').innerHTML = "MARS"
    document.getElementById('destination_activity').innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    document.getElementById('planet_img').src = "assets/destination/image-mars.png"
    document.getElementById('mars').style.borderBottom = "2px solid white"
    document.getElementById('moon').style.borderBottom = "none"
    document.getElementById('europa').style.borderBottom = "none"
    document.getElementById('titan').style.borderBottom = "none"
    document.getElementById('travel_time').innerHTML = "225 MIL. KM"
    document.getElementById('avg_distance').innerHTML = "9 MONTHS"
}

function onEuropa() {
    document.getElementById('destination_name').innerHTML = "EUROPA"
    document.getElementById('destination_activity').innerHTML = "  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    document.getElementById('planet_img').src = "assets/destination/image-europa.png"
    document.getElementById('mars').style.borderBottom = "none"
    document.getElementById('moon').style.borderBottom = "none"
    document.getElementById('europa').style.borderBottom = "2px solid white"
    document.getElementById('titan').style.borderBottom = "none"
    document.getElementById('travel_time').innerHTML = "628 MIL. KM"
    document.getElementById('avg_distance').innerHTML = "3 YEARS"
}

function onTitan() {
    document.getElementById('destination_name').innerHTML = "TITAN"
    document.getElementById('destination_activity').innerHTML = "  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    document.getElementById('planet_img').src = "assets/destination/image-titan.png"
    document.getElementById('mars').style.borderBottom = "none"
    document.getElementById('moon').style.borderBottom = "none"
    document.getElementById('europa').style.borderBottom = "none"
    document.getElementById('titan').style.borderBottom = "2px solid white"
    document.getElementById('travel_time').innerHTML = "1.6 BIL. KM"
    document.getElementById('avg_distance').innerHTML = "7 YEARS"
}

function spaceCapsule() {
    document.getElementById('technology_name').innerHTML = "SPACE CAPSULE"
    document.getElementById('technology_power').innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    document.getElementById('technology_pic').src = "assets/technology/image-space-capsule-portrait.jpg"
    document.getElementById('btn1').style.color = "black"
    document.getElementById('btn1').style.backgroundColor = "white"
    document.getElementById('btn2').style.color = "white"
    document.getElementById('btn2').style.backgroundColor = "rgb(255, 255, 255, 0)"
    document.getElementById('btn3').style.color = "white"
    document.getElementById('btn3').style.backgroundColor = "rgb(255, 255, 255, 0)"
}

function spacePort() {
    document.getElementById('technology_name').innerHTML = "SPACEPORT"
    document.getElementById('technology_power').innerHTML = "  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    document.getElementById('technology_pic').src = "assets/technology/image-spaceport-portrait.jpg"
    document.getElementById('btn2').style.color = "black"
    document.getElementById('btn2').style.backgroundColor = "white"
    document.getElementById('btn1').style.color = "white"
    document.getElementById('btn1').style.backgroundColor = "rgb(255, 255, 255, 0)"
    document.getElementById('btn3').style.color = "white"
    document.getElementById('btn3').style.backgroundColor = "rgb(255, 255, 255, 0)"
}

function spaceVehicle() {
    document.getElementById('technology_name').innerHTML = "LAUNCH VEHICLE"
    document.getElementById('technology_power').innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,it's quite an awe-inspiring sight on the launch pad!"
    document.getElementById('technology_pic').src = "assets/technology/image-launch-vehicle-portrait.jpg"
    document.getElementById('btn3').style.color = "black"
    document.getElementById('btn3').style.backgroundColor = "white"
    document.getElementById('btn2').style.color = "white"
    document.getElementById('btn2').style.backgroundColor = "rgb(255, 255, 255, 0)"
    document.getElementById('btn1').style.color = "white"
    document.getElementById('btn1').style.backgroundColor = "rgb(255, 255, 255, 0)"
}
