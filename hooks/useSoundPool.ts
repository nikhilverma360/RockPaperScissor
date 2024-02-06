import useSound from "use-sound";

const useSoundPool = () => {
  const [clickSound] = useSound("/click.mp3");

  return { clickSound  };
};

export default useSoundPool;