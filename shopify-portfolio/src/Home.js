import React from "react";
import styled from "styled-components";

import DaveSrc from "./images/self_portfolio.jpg"; // Tell webpack this JS file uses this image
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Home() {
  console.log("About");

  return (
    <HomeWrapper>
      <IntroStatement>
        <displayXlarge>
          Hey there - I'm <NameText> Dave Elliott,</NameText> and I'm determined
          to start an internship at Shopify in January.
        </displayXlarge>
      </IntroStatement>
      <ItemDetailsImage image_source={DaveSrc}>
        <ProfileButtons>
          <ProfileButton>
            <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>
          <ProfileButton>
            <AiFillLinkedin size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>

          <ProfileButton>
            <AiFillTwitterCircle
              size={50}
              style={{ verticalAlign: "middle" }}
            />
          </ProfileButton>

          <ProfileButton>
            <AiFillInstagram size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>
        </ProfileButtons>
      </ItemDetailsImage>
      <Pitch>
        <TLDR>
          <displayMedium>
            TLDR ; Here's my
            <TLDRBtn>App</TLDRBtn>
            and this is my
            <TLDRBtn>Story</TLDRBtn>.
          </displayMedium>
        </TLDR>
        <Details>
          <body>
            Ok, so that's a big, literally bold statement...here's what
            happened.
          </body>
          <body>
            On September 25th, I attended a great online webinar that Paul gave.
            I got to meet some of the team, and hear about the day to day at
            Shopify, and it convinced me that I should apply for the January
            internship program.
          </body>
          <body>
            Since then, I've been coding up a cool personal project to include
            with my application.
          </body>

          <body>
            Podcasting is a passion of mine, so I thought I would would take the
            great Shopify Masters podcast and see if I could add some value to
            it.
          </body>
          <body>
            <StandOutBox>
              <StandOut>
                I deciced to try something ambitious - could I produce an
                interactive french version of the podcast using NodeJS, React
                and Redux?
              </StandOut>
            </StandOutBox>
          </body>
          <body>
            I wanted an interactive transcript that would offer french
            translations, line per line, that I could skip if I wanted to, but
            hear repeated back to me as well.
          </body>

          <body>I sat down and figured out what I would need to do -</body>
          <ol>
            <li>
              Align the text transcript to the timeline of the mp3 with a cool
              tool called Gengle Aligner, to figure out where each sentence
              occurs in the waveform. This would give me a JSON Object with each
              word of the transcript aligned to a timecode.
            </li>
            <li>
              Translate the english transcript using the Google Language API to
              produce a french transcript with Node JS.
            </li>
            <li>
              Combine the aligned english text from (1) with the french text
              from (2) to produce a bilingual JSON array.
            </li>
            <li>Use that array as a navigation instrument for the mp3.</li>
            <li>Wire it all up in React and Redux.</li>
          </ol>
          <body>
            <FinalStandOut>
              It took a lot of hacking away, but here it is - A super snazzy
              clickable React App that let's you hear each speaker in English,
              and then in French!
            </FinalStandOut>
          </body>
        </Details>
      </Pitch>
      Some other interesting tidbits behind the making of this app -
      <ol>
        <li>I'm running my own Node Express server to serve out the data.</li>
        <li>
          The app uses the SpeechSynthesis feature of modern desktop browsers -
          so a mobile version of the app would require a different strategy (I'm
          thinking of just recording a web speech synth version right from the
          browser output and serving out a seperate MP3 for mobile)
        </li>

        <li>
          GIF OF APP HERE STORY POINTS HERE HERE IS A TIME-LOCKED VERSION AS OF
          SEPT 8, 9 AM HERE IS WHAT I'VE BEEN IMRPOVING ON IT SINCE THEN
        </li>
      </ol>
    </HomeWrapper>
  );
}

const Pitch = styled.div`
  padding-top: 20px;
  max-width: 800px;
`;

const FinalStandOut = styled.div`
  font-weight: bold;
  color: black;
`;

const StandOut = styled.div`
  font-weight: bold;
  color: black;
  background-color: #e0f5f5;
  padding: 5px;
`;

const StandOutBox = styled.div`
  padding: 10px;
`;

const Details = styled.div`
  padding-top: 40px;
  margin-left: -8px;
`;

const TLDR = styled.div`
  /* background-color: #f4f6f8;
  border-radius: 15px; */
`;

const HomeWrapper = styled.div`
  padding: 20px;
`;

const ProfileButton = styled.button`
  background-color: transparent;
  color: #e0f5f5;
  :hover {
    cursor: pointer;
  }
  vertical-align: middle;
  padding: 2px;
  align-self: left;
  width: 50px;
  margin-bottom: 10px;
`;

const TLDRBtn = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  padding-left: 5px;
  padding-right: 5px;
  border: 1px dashed #003135;
  padding-bottom: 5px;
  padding-top: 0px;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }
  :hover {
    cursor: pointer;
  }
`;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

const ItemDetailsImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 300px;
  max-width: 800px;

  background-position: middle;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 15px;
  border: none;
  transition: all 0.4s ease-in-out;
  z-index: 1;
`;

const IntroStatement = styled.div`
  margin-bottom: 20px;
`;

const NameText = styled.text`
  color: #00848e;
`;
export default Home;
