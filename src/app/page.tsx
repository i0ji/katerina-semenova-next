'use client';

import { useEffect } from 'react';

import { Header, Slides, Footer, Loader } from '@/components/index';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchProjects } from 'store/projectAction';

import { nanoid } from 'nanoid';

export default function Home() {
  const dispatch = useAppDispatch();
  const { projects, pending, error, loaded } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
      dispatch(fetchProjects());
  }, [dispatch]);

  if (!loaded) return <Loader />;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <>
      {!pending && (
        <>
          <Header />
          {projects.map((project) => (
            <Slides
              key={nanoid()}
              slides={project.slides}
              description={project.description}
            />
          ))}
          <Footer />
        </>
      )}
    </>
  );
}
