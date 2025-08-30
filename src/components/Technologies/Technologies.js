import React from "react";
import { DiDatabase, DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiFillCode, AiOutlineTool, AiTwotoneRocket, AiOutlineOpenAI } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the following technologies in the web development world. Now I'm focused towards React and Next.js.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile/Web</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native - CLI & Expo, React, Redux, Context API, Hook, Next, Xamarin, Flutter, JavaScript/TypeScript, HTML/CSS, SCSS/SASS/LESS, Tailwind CSS, Bootstrap, MUI, Ant-design, NativeBase, React-native-paper, C#, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel, Node.js, Django <br />
            MySQL, MongoDB, PostgreSQL, Firebase Cloud Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineOpenAI size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            AI/ML, openAI, chatGPT, LLM, Big Data, LangChain, Claude, DeepSeek, Azure, Pytorch, Tensorflow <br />
            AI Speech-to-Text, AI Text-to-Image, AI video generation, AI Agent Development <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Skils</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git: Gtihub, GitLab, Bitbucket <br />
            API: REST, Stripe, GraphQL(Apollo, Helix, AWS Amplify) <br />
            Cloud Server: AWS(S3, EC2, Lambda), Azure, Firebase, Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
