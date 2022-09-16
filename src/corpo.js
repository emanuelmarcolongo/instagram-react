import Posts from "./posts";
import SideBar from "./sidebar";
import Stories from "./stories";

export default function Corpo() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}