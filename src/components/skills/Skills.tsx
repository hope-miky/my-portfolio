import { useEffect } from 'react';
import React from 'react';


function Skills(props: any) {
  useEffect(() => {
    import('../../assets/js/TagCloud').then(response => {
      const tagCloud = response.default;
      // Todo color each type of skill (web, data science, coding concepts)
      // Todo replace text with svg icons
      tagCloud(
        '.tagcloud-container',
        [
          'Python',
          'Pandas',
          'Django',
          'Typescript',
          'Javascript',
          'Express',
          'SQL',
          'Node',
          'React',
          'Redux-Saga',
          'Next.js',
          'Tailwind CSS',
          'Bootstrap',
          'Sass',
          'CSS',
          'HTML',
          'Docker',
          'Git',
          'MongoDB'
        ],
        {
          radius: screen.width > 500 ? 300 : 100,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          direction: 100,
          keep: false,
          useContainerInlineStyles: false,
          sectionContainer: 'about',
        },
      );
    });
    return () => {
      let tagClouds = document.getElementsByClassName('tagcloud');
      for (let i = 0; i < tagClouds.length; i++) {
        tagClouds[0].remove();
      }
    };
  }, []);

  return (
    // todo: add hand holding sphere
    <div
      className={
        'h-full font-ubuntu bg-antique flex justify-around items-center px-10 md:min-h-700'
      }
      id={'about'}>
      <div
        className={
          'w-1/2 flex z-1 flex-col justify-center items-start h-full '
        }>
        <h1 className={'about-title text-5xl w-full pl-12 mb-12 relative'}>
          About me
        </h1>
        <p className={'pl-12 pt-10'}>
          Briefly, I'm 17, I'm a geek and I like to build web apps.
        </p>
      </div>
      <div
        className={
          'tagcloud-container z-1 w-1/2 flex justify-center items-center h-full'
        }
      />
    </div>
  );
}

export default Skills;