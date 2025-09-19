import React from 'react';

const ItemAligner = (WrappedComponent, idName) => {
  const AlignSection = (props) => {
    return (
      <section id={idName} className="min-h-screen my-10">
        <WrappedComponent {...props} />
      </section>
    );
  };

  AlignSection.displayName = `ItemAligner(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AlignSection;
};

export default ItemAligner;
