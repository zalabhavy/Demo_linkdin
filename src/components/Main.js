import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Start a post, try writing with AI</button>
        </div>

        <div>
          <button>
            <img src="/images/media1.png" alt="media" />
            <span>Media</span>
          </button>

          <button>
            <img src="/images/job.png" alt="job" />
            <span>Job</span>
          </button>

          <button>
            <img src="/images/article.png" alt="write article" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>

      <div>
        <Article>
          <SharedActor>
            <a href="" alt="">
              <img src="/images/user.svg" alt="user" />
              <div>
                <span>React</span>
                <span>India</span>
                <span>10/9/24</span>
              </div>
            </a>
            <button>
              <img src="/images/threedot.png" alt="ellipsis" />
            </button>
          </SharedActor>
          <Description>This is my first post.</Description>
          <SharedImage>
            <a href="">
              <img src="/images/react-post.jpg" alt="job post image" />
            </a>
          </SharedImage>
          <SocialCounts>
               <li>
                   <button>
                       <img src='/images/like.png' alt=''/>
                       <span>101</span>
                   </button> 
               </li>
               <li>
                 <a>10 comments</a>
               </li>
          </SocialCounts>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  padding: 8px;

  div:first-child {
    display: flex;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }

    button {
      flex-grow: 1;
      padding-left: 16px;
      border: none;
      padding: 8px 16px;
      border-radius: 50px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.6);
      text-align: left;
      font-size: 16px;
      line-height: 1.5;
      cursor: pointer;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      padding: 8px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
      }

      span {
        font-size: 14px;
        font-weight: 550;
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  padding-bottom: 12px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow:hidden;
  color:rgba(0,0,0,0.9);
  font-size : 14px;
  text-align : left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position :relative;
  background-color:#f9fafb;
    img {
      object-fit : contain;
      width: 100%;
      height: 100%;
      
    }
  a {
    display: block;
    width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    a {
      margin-top: 3px; 
      display: block;
      text-decoration: none;
    }

    button {
      display: flex;

      img {
        height: 20px;
        width: 20px;
      }

      span {
        margin-top: 2px;
      }
    }
  }
`;


export default Main;
