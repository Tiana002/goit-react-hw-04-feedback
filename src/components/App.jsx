import { useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Container } from "./Container.styled";
import { Statistics } from "./Statistics/Statistics";
import { OptionsFeedback } from "./OptionsFeedback/OptionsFeedback";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const feedback = { good, neutral, bad };

  const handleBtnClick = ({ target: { value }}) => {
    switch (value) {
      case 'good':
        return setGood(s => s + 1);
      case 'neutral':
        return setNeutral(s => s + 1);
      case 'bad':
        return setBad(s => s + 1); 
    
      default:
        return;
    }
  };

 const countTotalFeedback = () =>
    Object.values(feedback).reduce(
      (total, prevState) => total + prevState,
      0
    );

 const countPositiveFeedbackPercentage = () =>
    Math.round(
      (good / countTotalFeedback()) * 100
    );
  
  return (
    <Container>
      <Section title={'Please leave feedback'}>
      <OptionsFeedback
          options={Object.keys(feedback)}
          onLeaveFeedback={handleBtnClick}
        />
        </Section>
        <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
      <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
          ) : (
            <Notification message="There is no feedback" />
          )}
          </Section>
      <GlobalStyle />
    </Container>
  );
}



