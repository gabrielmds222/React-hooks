import { ThemeContext } from "./hooks/Context/index";

export default function Message(){
    return(
        <>
            <ThemeContext.Consumer>
                {(value) => (
                    <div
                    style={{
                        padding: 20,
                        borderRadius: 10,
                        backgroundColor: value.theme === 'light' ? "#eee" : "#333",
                        color: value.theme === 'dark' ? "#eee" : "#333",
                    }}
                    >
                    <h1>Hello World!</h1>
                    </div>
                )}
            </ThemeContext.Consumer>
        </>
    );
}