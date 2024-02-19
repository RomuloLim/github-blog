import { FaGithub } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";

import { DetailCard } from "../DetailCard";
import { Link } from "../Link";
import { HeaderCard } from "../HeaderCard";

export function ProfileCard() {

    return (
        <HeaderCard>
            <DetailCard.Root
                image="https://avatars.githubusercontent.com/u/37809622?v=4"
            >
                <DetailCard.Header>
                    <h1>Rômulo Lima</h1>
                    <Link href="https://github.com/RomuloLim">
                        GITHUB
                        <HiExternalLink
                            size="1rem"
                        />
                    </Link>
                </DetailCard.Header>

                <DetailCard.Content>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias deleniti nostrum officiis, eos placeat accusamus aut praesentium sapiente natus blanditiis eum quod nobis id ipsum amet unde iusto quasi!</p>
                </DetailCard.Content>

                <DetailCard.Footer>
                    <DetailCard.Icon
                        icon={FaGithub}
                        label="RomuloLim"
                    />

                    <DetailCard.Icon
                        icon={FaBuilding}
                        label="Multintegrada"
                    />

                    <DetailCard.Icon
                        icon={HiUsers}
                        label="32 seguidores"
                    />

                </DetailCard.Footer>
            </DetailCard.Root>
        </HeaderCard>
    );
}
