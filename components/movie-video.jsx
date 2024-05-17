import { API_URL } from "../constants";


async function getVideos(id) {
  console.log(`fetcing videos: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({id}) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}