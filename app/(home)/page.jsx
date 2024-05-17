import { API_URL } from "../constants";
export const metadata = {
  title: "Home",
};
async function getMovie() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Homepage() {
  const movies = await getMovie();
  return (
    <div>
      <h1>{JSON.stringify(movies)}</h1>
    </div>
  );
}
