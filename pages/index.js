import styled from 'styled-components';
import db from '../db.json';
import {useRouter} from 'next/router';

import Head from 'next/head';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno do useState ', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Random Quiz
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit ={function(infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}>
              <Input 
                name="nomeDoUsuario"
                onChange={function(infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Qual seu nome?" 
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Bora lá ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h2>
              Quizes da Galera
            </h2>
            <p>
              Abacatão é Bão
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaopaulocampospereira/RandomQuiz" />
    </QuizBackground>
  );
}
