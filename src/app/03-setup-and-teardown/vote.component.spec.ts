import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // eg1
  // it('should increment totalVotes when upvoted ', () => {
  //   let component = new VoteComponent;
  //   component.upVote();
  //   expect(component.totalVotes).toBe(1);
  // });

  // it('should decrement totalVotes when downvoteds ', () => {
  //   let component = new VoteComponent;
  //   component.downVote();
  //   expect(component.totalVotes).toBe(-1);
  // });

  // eg2
  let component: VoteComponent;

  beforeEach(() => {
    let component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted ', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoteds ', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});