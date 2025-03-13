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

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  for (let cate of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;
    categoriesContainer.appendChild(div);
  }
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p> </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `;
    videoContainer.appendChild(videoCard);
  });
};
loadCategories();
loadVideos();
