export default function calcPriceAndCount(state) {
  let sum = 0;
  let count = 0;
  let sumDisc = 0;
  state.bag.forEach((element) => {
    let discount = element.price - (element.price / 100) * element.discount;
    sum += element.price * element.count;
    count += element.count;
    sumDisc += discount * element.count;
  });
  state.realPrice = sum.toFixed(2);
  state.totalCount = count;
  state.discountPrice = sumDisc.toFixed(2);
  localStorage.setItem("bag", JSON.stringify(state.bag));
  localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
  localStorage.setItem("realPrice", JSON.stringify(state.realPrice));
  localStorage.setItem("discountPrice", JSON.stringify(state.discountPrice));
}
