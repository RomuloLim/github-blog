import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ProfileCard } from "../components/ProfileCard";

import { HomeContainer, ProfileContainer, SearchContainer, Separator } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <ProfileContainer>
          <ProfileCard />
        </ProfileContainer>

        <Separator />

        <SearchContainer>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>

          <Input placeholder="Buscar conteúdo" />
        </SearchContainer>
      </HomeContainer>
    </>
  );
}
