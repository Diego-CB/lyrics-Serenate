import Lyric from "./components/Lyric";
import { songs } from "./data";

export default function App() {
  return (
    // Mobile-first: plain black text on white background
    <div className="min-h-dvh bg-white text-black">
      <main className="mx-auto w-full max-w-screen-sm px-4 py-6 sm:px-6">
        <ul className="space-y-8">
          {songs.map((song) => (
            <Lyric key={song.id} song={song} />
          ))}
        </ul>
      </main>
    </div>
  );
}
