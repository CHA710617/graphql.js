import { useState, useEffect } from 'react';
import { Discussion } from './Discussion';
import { Modal } from './Modal';

export const AllContents = ({ filterText, filterContent, discussions }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (filterContent.length === 0) {
      setIsOpen(true);
    }
  }, [filterContent]);

  const onClickHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className='discussions__wrapper'>
      <ul className='discussions__container'>
        {isOpen && (
          <div className='modal-back-drop'>
            <Modal filterText={filterText} onClickHandler={onClickHandler} />
          </div>
        )}
        {discussions.edges.map((edge) => {
          return <Discussion key={edge.node.id} discussion={edge.node} />;
        })}
      </ul>
    </div>
  );
};