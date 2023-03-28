export const Header = ({viewer}) => {
    return (
      <header>
        <h1>My Agora States</h1>
        {viewer !== undefined ?
              <div className='avatar--wrapper'>
                <img 
                  src={viewer.avatarUrl} 
                  alt={`avatar of ${viewer.login}`}
                />
                <span>
                  {viewer.login}
                </span>
              </div>
            : null}
      </header>
    );
  };