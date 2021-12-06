const selectedDogPicture = document.querySelector(".selectedDogPicture");
const selectPart = document.querySelector(".selectPart");

async function getSelectedDogImgUrl(breed) {
  try {
    const selectedDog = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await selectedDog.json();
    return data.message;
  } catch (err) {
    console.log(err);
  }
}

selectPart.addEventListener("change", async function (event) {
  try {
    if (event.target.value != "select") {
      let url = await getSelectedDogImgUrl(event.target.value).then(
        (url) => url
      );
      selectedDogPicture.style.backgroundImage = `url(${url})`;
    }
  } catch (err) {
    console.log(err);
  }
});
