export const Modal = ({ filterText, onClickHandler }) => {
    return (
      <div className='container'>
        <div>{`${filterText} Content가 존재하지 않습니다.`}</div>
        <button onClick={onClickHandler}>확인</button>
      </div>
    );
  };