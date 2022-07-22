import React, {useState} from 'react';
import IndividualAnswer from './IndividualAnswer.jsx';
import styled from 'styled-components';

// add Individual Answer
export default function AnswerList ({answerList}) {

  var answer = [];
  for (var key in answerList) {
    answer.push(answerList[key])
  };

  var ascending = (a, b) => {
    return b.helpfulness - a.helpfulness
  };

  var sortAnswer = answer.sort(ascending);

  const [len, setLen] = useState(2)

  var showMoreAnswers = (e) => {
    e.preventDefault();
    setLen(sortAnswer.length)
  }

  var collapseAnswers = (e) => {
    e.preventDefault();
    setLen(2)
  }
  return (
    <AnswerListContainer>
      <AnswerSpan> A: </AnswerSpan>
      <ScrollAnswers>
        {sortAnswer.slice(0, len).map((each) => {
          return (
            <IndividualAnswer len={len} key={each.id} answer={each} />
          )
        })}
        {sortAnswer.length > 2 && len < sortAnswer.length && <LoadMoreAnswersButton onClick={showMoreAnswers} > Load More Answers </LoadMoreAnswersButton>}
       </ScrollAnswers>
       {len > 2 && <CollapseAnswerButton onClick={collapseAnswers}> Collapse Answers </CollapseAnswerButton> }
    </AnswerListContainer>
  )
};

// styled components
var ScrollAnswers = styled.div`
  display:flex;
  flex-direction: column;
  height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 10px;
  height: 275px;
`;

var AnswerListContainer = styled.div`

`;

var AnswerSpan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  height: 1rem;
  font-weight: bold;

`;

var CollapseAnswerButton = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  padding-bottom: 9px;
  border: none;
  background: none;
  width: 9%;
  text-decoration: underline;
  color: #007185;
  :hover {
    cursor: pointer;
    color: #007185;
  };
`;

var LoadMoreAnswersButton = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  border: none;
  background: none;
  padding-bottom: 9px;
  width: 20%;
  text-decoration: underline;
  color: #007185;
  :hover {
    cursor: pointer;
    color: #007185;
  };
`;

