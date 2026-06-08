$(document).ready(readJSON);

function readJSON() {
    $.getJSON('resources/cards.json', showCards);
    
    function showCards(cards) {
        var content = $("#content");

        cards.forEach(card);
        function card(project) {
            var card = `
                <div class="cards">
                    <div>
                        <img src="${project.img}" class="img-cards">
                        <p class="name-cards">${project.name}</p>
                        <p class="desc-cards">${project.desc}</p>
                    </div>
                    <p>
                        <a class="img-links-web ${project.flagmr}" target="_blank" href="https://modrinth.com/${project.linkmr}">
                            <img src="https://raw.githubusercontent.com/intergrav/devins-badges/refs/heads/v3/assets/cozy-minimal/available/modrinth_64h.png"/>
                        </a>
                        <a class="img-links-web ${project.flagcf}" target="_blank" href="https://www.curseforge.com/${project.linkcf}">
                            <img src="https://raw.githubusercontent.com/intergrav/devins-badges/refs/heads/v3/assets/cozy-minimal/available/curseforge_64h.png"/>
                        </a>
                    </p>
                </div>
            `;
            content.append(card);
        }
    }
}
