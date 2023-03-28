import { AllContents } from './AllContents';
import { FilterContents } from './FilterContents';

export const Discussions = ({ filterText, filterContent, discussions }) => {
  return (
    <section className="discussion__wrapper">
      {filterContent.length !== 0 ? (
        <FilterContents filterContent={filterContent} />
      ) : (
        <AllContents
          filterText={filterText}
          filterContent={filterContent}
          discussions={discussions}
        />
      )}
    </section>
  );
};