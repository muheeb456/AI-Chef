import ReactMarkdown from "react-markdown";
export default function Recipe(props) {
    return (
        <section className={"recipe_container"}>
            <h2 className={"recipe_heading"}>Ai chef recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}