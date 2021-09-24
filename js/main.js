const dailyBtn = document.getElementById("btn-daily");
const weeklyBtn = document.getElementById("btn-weekly");
const monthlyBtn = document.getElementById("btn-monthly");

const hours = document.querySelectorAll(".card__time");
const lastWeek = document.querySelectorAll(".card__description");

const getData = async () => {
  const res = await fetch("../data.json");
  const data = await res.json();
  return data;
};

const renderData = async (type) => {
  const data = await getData();
  data.forEach((item, index) => {
    const { current, previous } = item.timeframes[type];
    hours[index].textContent = `${current}hrs`;
    lastWeek[index].textContent = `Last Week - ${previous}hrs`;
  });
};

renderData("weekly");

dailyBtn.addEventListener("click", (e) => {
  dailyBtn.classList.add("card--profile__button--active");
  weeklyBtn.classList.remove("card--profile__button--active");
  monthlyBtn.classList.remove("card--profile__button--active");
  renderData("daily");
});

weeklyBtn.addEventListener("click", (e) => {
  dailyBtn.classList.remove("card--profile__button--active");
  weeklyBtn.classList.add("card--profile__button--active");
  monthlyBtn.classList.remove("card--profile__button--active");
  renderData("weekly");
});

monthlyBtn.addEventListener("click", (e) => {
  dailyBtn.classList.remove("card--profile__button--active");
  weeklyBtn.classList.remove("card--profile__button--active");
  monthlyBtn.classList.add("card--profile__button--active");
  renderData("monthly");
});
