
const themeInput = document.getElementById("themeInput");
const shayariOutput = document.getElementById("shayariOutput");


const theme = themeInput.value;
const moodselect = document.getElementById("sel")







const ClickHereele = document.getElementById("ClickHere")
ClickHereele.addEventListener("click", GenerateOnce)

function GenerateOnce() {
  fetch(`http://localhost:8080/openai/get?Val=${moodselect.value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: theme })
  }).then((res) => res.json())
    .then((data) => {
      // console.log(data);
      shayariOutput.textContent = data.content;
    })
    .catch(e => console.log(e))
}
