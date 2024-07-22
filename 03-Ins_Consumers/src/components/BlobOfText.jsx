import { useTheme } from '../utils/ThemeContext';

export default function BlobOfText() {
    const { darkTheme } = useTheme();
    const styles = {
        background: darkTheme ? "black" : "white",
        color: darkTheme ? "white": "black"
    };
    return <div style={styles}>Here is a whole bunch of test that you probable Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum et porro! Aut vel asperiores facilis mollitia ullam, sunt, qui, recusandae hic velit possimus earum numquam eos. Consequatur, sequi inventore!</div>
}