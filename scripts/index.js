const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

const loadCategoryVideo = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedbtn = document.getElementById(`btn-${id}`);
      clickedbtn.classList.add("active");
      console.log(clickedbtn);
      displayVideos(data.category);
    });
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  for (let cate of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="btn-${cate.category_id}" onclick="loadCategoryVideo(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;
    categoriesContainer.appendChild(div);
  }
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  if (videos.length === 0) {
    videoContainer.innerHTML = `
    <div class="py-24 col-span-full text-center flex flex-col         justify-center items-center">
            <img class="w-[120px]" src="assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
    `;
  }
  videos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
            <figure class="relative">
              <img
                class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-[#000000c9] px-2 text-sm rounded">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div>
                    <h2 class="font-semibold text-lg">${video.title}</h2>
                    <p class="text-sm text-gray-500 flex gap-1">${video.authors[0].profile_name}
                        <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=eZo3c88c63il&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-500">${video.others.views} views</p>
                </div>
            </div>
          </div>
    `;
    videoContainer.appendChild(videoCard);
  });
};
loadCategories();
