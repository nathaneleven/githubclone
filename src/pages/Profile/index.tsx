import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


const Profile: React.FC = () => {
  const { username = 'nathaneleven'} = useParams();

  useEffect(() => {
    Promise.all([
      // fetch(`https://api.github.com/users/${username}`),
      // fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {

    });
  }, [username]);

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
  <Container>
    <Tab className="desktop">
      <div className="wrapper">
        <span className="offset"/>
      <TabContent />
      </div>
      <span className="line" />
    </Tab>
      <Main>
        <LeftSide>
          <ProfileData
          username={'nathaneleven'}
          name={'Nathan Martins'}
          avatarUrl={'https://avatars.githubusercontent.com/u/88350406?v=4'}
          followers={123}
          following={7}
          company={'ElevenRush'}
          location={'São Paulo, Brasil'}
          email={'nathan.martins@elevenrush.com'}
          blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
          <h2>Random Repos</h2>

          <div>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <RepoCard
                key={n}
                username={'nathaneleven'}
                reponame={'youtube-content'}
                description={'Contains all of my youtube lessons code'}
                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars={8}
                forks={4}
              />
            ))}
          </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />

        </RightSide>
      </Main>
  </Container>
  );
};

export default Profile;