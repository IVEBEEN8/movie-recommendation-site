import { API_URL } from "../app/constants";
import styles from "../ styles/movie-videos.module.css";

async function getVideos(id) {
  console.log(`fetcing videos: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({id}) {
  const videos = await getVideos(id);
  return <div className={styles.container}>
    {videos.map((video)=>(<iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`}
    title={video.name}
    ></iframe>
    ))}
  </div>;
}