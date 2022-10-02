import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from '@faker-js/faker';

const App = () => {
  return (
    <div className="ui container comments" style={{ marginTop: '20px' }}>
      <ApprovalCard greenBtnText="Yes" redBtnText="No">
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.fullName()}
          timeAgo="Today at 5:21PM"
          commentText="Awsome!"
          srcAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.fullName()}
          timeAgo="Today at 5:22PM"
          commentText="Amazing!"
          srcAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.fullName()}
          timeAgo="Today at 5:23PM"
          commentText="Outstanding!"
          srcAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

console.log(faker.image.avatar());
