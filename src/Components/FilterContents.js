import { Discussion } from './Discussion';

export const FilterContents = ({ filterContent }) => {
  return (
    <ul className="discussions__container">
      {filterContent.map((nodes) => {
        return <Discussion key={nodes.node.id} discussion={nodes.node} />;
      })}
    </ul>
  );
};