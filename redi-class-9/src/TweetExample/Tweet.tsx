export const Tweet = ({ tweet }: any) => (
  <div className="tweet">
    <Avatar avatar={tweet.avatar} />
    <div>
      <Author wizard={tweet.wizard} handle={tweet.handle} />
      <Time posted={tweet.posted} />
      <Message message={tweet.text} />
      <div className="buttons">
        <ReplyButton />
        <RetweetButton />
        <LikeButton />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
);

const Avatar = ({ avatar }: any) => (
  console.log(avatar), (<img src={avatar} className="avatar" alt="avatar" />)
);

const Author = ({ wizard, handle }: any) => (
  <span>
    <span className="name">{wizard}</span>
    <span className="handle">{handle}</span>
  </span>
);

const Time = ({posted}: any) => <span className="time">{posted}</span>;

const Message = ({ message }: any) => (
  <div className="message"> {message} </div>
);

const ReplyButton = () => <i className="fa fa-reply" />;

const RetweetButton = () => <i className="fa fa-retweet" />;

const LikeButton = () => <i className="fa fa-heart" />;

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h" />;
