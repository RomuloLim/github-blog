import { Header } from "../Header";
import { Card, ProfileImage, TitleRow, Link } from "./styles";

export function ProfileHeader() {
    return (
        <Header>
            <Card>
                <ProfileImage src="https://avatars.githubusercontent.com/u/37809622?v=4" />
                <TitleRow>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <h1>RômuloLim</h1>
                        <Link>Github</Link>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam cupiditate culpa cumque odit consequatur quasi, sint a repellat, quaerat assumenda, voluptatem ipsa tempore. Tempora accusantium ipsam quam. Dolor, consectetur!</p>
                    </div>
                </TitleRow>
            </Card>
        </Header>
    );
}
