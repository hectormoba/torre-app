import regeneratorRuntime from "regenerator-runtime";

const init = {
    method: 'GET',
    headers: {
      "Content-Type": 'application/json',
    }
}

export async function getUserBio(url, name, fn) {
  let obj = {
    headline: "",
    id: "",
    numberStrengths: 0,
    strengths: "",
    picture: "",
    name: ""
  };
  const fetchURL = `https://infinite-meadow-89307.herokuapp.com/${url}/${name}`
  const response = await fetch(fetchURL, init);
  const data = await response.json();
  obj = {
    headline: data.person.professionalHeadline || null,
    id: data.person.ggId || null,
    numberStrengths: data.stats.strengths || 0,
    strengths: data.strengths,
    picture: data.person.picture || null,
    name: data.person.name || null
  }
  fn(obj)
}