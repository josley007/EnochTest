const form = document.querySelector("form");
const responseTextarea = document.querySelector(".response");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const prompt = form.elements.prompt.value;

  fetch("https://api.openai.com/v1/engines/davinci/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      temperature: 0.5
    })
  })
    .then(response => response.json())
    .then(data => {
      responseTextarea.value = data.choices[0].text;
    });
});
