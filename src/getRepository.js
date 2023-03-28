import { graphql } from '@octokit/graphql';
const { REACT_APP_GITHUB_AGORA_STATES_TOKEN, NODE_ENV } = process.env;

async function getRepository() {
  let token;
  if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    token = REACT_APP_GITHUB_AGORA_STATES_TOKEN;
  }

  const { repository, viewer } = await graphql(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussionCategories(first: 100) {
            edges {
              node {
                id
                name
              }
            }
          }
          discussions(first: 100) {
            edges {
              node {
                category {
                  name
                }
                author {
                  login
                  avatarUrl
                }
                createdAt
                title
                id
                updatedAt
                bodyHTML
                url
                answer {
                  author {
                    login
                    avatarUrl
                  }
                  bodyHTML
                  createdAt
                  id
                }
              }
            }
          }
        },
        viewer{
          login
          avatarUrl
        }
      }
    `,
    {
      headers: {
        // 아래 레퍼런스를 잘 읽고, 환경 변수를 활용합니다.
        // https://create-react-app.dev/docs/adding-custom-environment-variables
        authorization: `token ${token}`,
      },
    }
  );
  return {repository, viewer};
}

export default getRepository;
