import * as React from "react"
import * as ReactDOM from "react-dom"
import {ListMovies} from "../application";

function NewMovieForm() {
    return <form>
        <h1>Add new movie</h1>
        <div>
            Title: <input/>
        </div>
        <div>
            Year: <input/>
        </div>
        <div>
            Plot:
            <div><textarea/></div>
        </div>
    </form>
}

describe("movies application", () => {

    it("shows movie list", () => {
        const element = document.createElement("div");
        ReactDOM.render(<ListMovies/>, element);
        expect(element.querySelector("h1").innerHTML)
            .toEqual("List movies");
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("shows new movie form", () => {
        const element = document.createElement("div");
        ReactDOM.render(<NewMovieForm/>, element);
        expect(element.innerHTML).toMatchSnapshot();
    })
})