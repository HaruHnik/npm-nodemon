let url = "http://localhost:3000/media";

const uploadFile = async () => {
  const inputTag = document.getElementById("inputFile");

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ test: "nct" }),
  });
  console.log(await response.json());
};
uploadFile();
