import { useState, useEffect } from 'react';
import { Discussions, Category, Footer, Header, Loading } from './Components';
import getRepository from './getRepository';

function App() {
  const [discussionObject, setDiscussionsObj] = useState({});
  const [viewer, setViewer] = useState({});
  let [filterText, setFilterText] = useState('React');
  const { discussionCategories, discussions } = discussionObject;
  let filterContent = '';

  useEffect(() => {
    getRepository()
      .then((data) => {
        if (data) {
          setDiscussionsObj(data.repository);
          setViewer(data.viewer);
        }
      })
      .catch((error) => {
        console.log(Error, error);
      });
  }, []);

  const handleCategoryClick = (e) => {
    setFilterText(e.target.textContent);
  };

  if (discussions !== undefined) {
    filterContent = discussions.edges.filter(
      (edge) => edge.node.category.name === filterText
    );
  }

  return (
    <>
      <div className="main">
        {discussions !== undefined ? (
          <>
            <Header viewer={viewer} />
            <div className='main-wrapper'>
              <Category
                handleClick={handleCategoryClick}
                categories={discussionCategories}
              ></Category>
              <Discussions
                filterText={filterText}
                filterContent={filterContent}
                discussions={discussions}
              ></Discussions>
            </div>
            <Footer />
          </>
        ):<Loading />}
      </div>
    </>
  );
}

export default App;