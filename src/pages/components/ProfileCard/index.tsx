
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa6";

import { Card, ProfileImage, TitleRow, Link, ProfileInfoContainer, TitleContent, ProfileFooter, IconInfo } from "./styles";
import { useTheme } from "styled-components";

export function ProfileCard() {
    const theme = useTheme();

    return (
        <Card>
            <ProfileImage src="https://avatars.githubusercontent.com/u/37809622?v=4" />
            <ProfileInfoContainer>
                <TitleRow>
                    <TitleContent>
                        <h1>Rômulo Lima</h1>
                        <Link href="https://github.com/RomuloLim">
                            GITHUB
                            <HiExternalLink
                                size="1.4rem"
                            />
                        </Link>
                    </TitleContent>
                </TitleRow>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias deleniti nostrum officiis, eos placeat accusamus aut praesentium sapiente natus blanditiis eum quod nobis id ipsum amet unde iusto quasi!</p>
                </div>
                <ProfileFooter>
                    <IconInfo>
                        <FaGithub
                            size="1.4rem"
                            color={theme.label}
                        />
                        <span>RomuloLim</span>
                    </IconInfo>
                    <IconInfo>
                        <FaBuilding
                            size="1.4rem"
                            color={theme.label}
                        />
                        <span>RomuloLim</span>
                    </IconInfo>
                    <IconInfo>
                        <HiUsers
                            size="1.4rem"
                            color={theme.label}
                        />
                        <span>RomuloLim</span>
                    </IconInfo>
                </ProfileFooter>
            </ProfileInfoContainer>
        </Card>
    );
}
