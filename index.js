function loadLevel() {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then((data) => displayLevel(data.data));
}
// display part
function displayLevel(level) {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML='';
    for (let i of level) {
        const levelDiv = document.createElement("div");
        levelDiv.innerHTML = `
       
         <button class="btn btn-outline btn-primary">
                   <img src="assets/fa-book-open.png" alt="" srcset="" class="hover:text-white ">Lesson-${i.level_no}</button>
                  `;
        levelContainer.append(levelDiv);
    }
}
loadLevel();