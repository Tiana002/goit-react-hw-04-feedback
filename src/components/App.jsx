import { Component } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Container } from "./Container.styled";
import { Statistics } from "./Statistics/Statistics";
import { OptionsFeedback } from "./OptionsFeedback/OptionsFeedback";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
	};

  handleBtnClick = event => {
    const value = event.target.value;

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (total, prevState) => total + prevState,
      0
    );

    countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce(
          (total, feedback) => total + feedback,
          0
        )) *
        100
    );
   

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
        <OptionsFeedback
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={this.handleBtnClick}
          />
          </Section>
          <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
        <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
            ) : (
              <Notification message="There is no feedback" />
            )}
            </Section>
        <GlobalStyle />
      </Container>
    );
  }
}