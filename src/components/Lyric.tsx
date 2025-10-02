import type { Song } from "../types";

type Props = {
  song: Song;
};

const Lyric: React.FC<Props> = ({ song }) => {
  return (
    <li key={song.id}>
      <h2 className="text-xl font-semibold leading-tight">{song.title}</h2>
      <p className="text-sm">{song.artist}</p>
      <div className="w-full h-[2px] bg-black mb-3" />
      <pre className="whitespace-pre-wrap text-base leading-6">
        {song.lyrics}
      </pre>
    </li>
  );
};

export default Lyric;
