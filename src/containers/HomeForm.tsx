import React from 'react';

export default function HomeForm() {
  return (
    <section className="grid auto-cols-[0.75fr] place-content-center px-12 min-w-[100vw] md:min-w-[auto]">
      <div className="grid w-full gap-8">
        <HomeTitle view={currentView} />
        {currentView[formState.selectedForm].node}
      </div>
      <ChangeFormComponent view={currentView} />
    </section>
  );
}
