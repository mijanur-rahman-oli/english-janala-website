const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLesson(json.data))
};




const loadLevelword = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelword(data.data))
};

const displayLevelword = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words == 0) {
        wordContainer.innerHTML = `<div class="grid grid-cols-1 text-center col-span-full">
                <img class="mx-auto"
                src="./assets/alert-error.png">
                <p class="text-gray-500 py-4 font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class=" text-4xl font-semibold font-bangla">নেক্সট Lesson এ যান</h2>
            </div>`

        return;
    }

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
           <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-semibold">Meaning / pronounciation </p>
                <div class="text-4xl font-bangla font-medium">${word.meaning} / ${word.pronunciation} </div>
                <div class=" flex justify-between items-center px-3">
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF60]"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF60]"><i class="fa-solid fa-volume-high"></i></button>

                </div>

            </div>
         `;
        wordContainer.append(card);
    });
}



const displayLesson = (lessons) => {
    // get the container.
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = ""

    // get into every lessons.
    for (let lesson of lessons) {

        // create elements
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = ` <button onclick="loadLevelword(${lesson.level_no})" 
    class="btn btn-outline btn-primary">
     <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no} </button>

     `;
        // append into container
        levelContainer.append(btnDiv);

    }

}


loadLesson();