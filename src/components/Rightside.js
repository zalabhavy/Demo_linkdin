import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <NewsCard>
        <Title>
          <h2>LinkedIn News</h2>
        </Title>
        <NewsList>
          <li>
            <NewsItem>
              <h4>The top B-schools for career growth</h4>
              <span>13h ago • 93,340 readers</span>
            </NewsItem>
          </li>
          <li>
            <NewsItem>
              <h4>India dazzles with 29 medals</h4>
              <span>13h ago • 20,269 readers</span>
            </NewsItem>
          </li>
          <li>
            <NewsItem>
              <h4>What's next for Applied AI?</h4>
              <span>12h ago • 1,348 readers</span>
            </NewsItem>
          </li>
          <li>
            <NewsItem>
              <h4>A peek into life at the Paralympics</h4>
              <span>9h ago • 565 readers</span>
            </NewsItem>
          </li>
          <li>
            <NewsItem>
              <h4>Air India to hire aviation engineers</h4>
              <span>13h ago • 9,487 readers</span>
            </NewsItem>
          </li>
        </NewsList>

        <ShowMore>
          Show more
          <img src="/images/down-icon.svg" alt="arrow" />
        </ShowMore>
      </NewsCard>

      <GamesCard>
        <GamesTitle>Today's games</GamesTitle>
        <GamesList>
          <li>
            <Game>
              <GameIcon src="/images/game1.svg" alt="Queens" />
              <GameInfo>
                <h4>Queens</h4>
                <span>13 connections played</span>
              </GameInfo>
            </Game>
          </li>
          <li>
            <Game>
              <GameIcon src="/images/game2.svg" alt="Pinpoint" />
              <GameInfo>
                <h4>Pinpoint</h4>
                <span>9 connections played</span>
              </GameInfo>
            </Game>
          </li>
          <li>
            <Game>
              <GameIcon src="/images/game3.svg" alt="Crossclimb" />
              <GameInfo>
                <h4>Crossclimb</h4>
                <span>4 connections played</span>
              </GameInfo>
            </Game>
          </li>
        </GamesList>
      </GamesCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const NewsCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
  margin-bottom: 8px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

const NewsList = styled.ul`
  margin-top: 12px;
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 8px;
  }
`;

const NewsItem = styled.div`
  h4 {
    font-size: 14px;
    margin-bottom: 4px;
  }
  span {
    font-size: 12px;
    color: gray;
  }
`;

const ShowMore = styled.a`
  color: #0a66c2;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;

  img {
    margin-left: 4px;
    width: 12px;
    height: 12px;
  }
`;

const GamesCard = styled(NewsCard)`
  padding: 16px;
`;

const GamesTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const GamesList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }
`;

const Game = styled.div`
  display: flex;
  align-items: center;
`;

const GameIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

const GameInfo = styled.div`
  h4 {
    font-size: 14px;
    margin: 0;
  }
  span {
    font-size: 12px;
    color: gray;
  }
`;

export default Rightside;
