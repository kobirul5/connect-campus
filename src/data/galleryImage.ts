export interface ICollageImage{
    id: number;
    src: string;
    alt:string;
    caption: string;
    tags: string[]
}


export const galleryImages:ICollageImage[] = [
    {
      id: 1,
      src: '/class/1.jpg',
      alt: 'Computer Science Graduates 2023',
      caption: 'Computer Science Class of 2023',
      tags: ['#Technology', '#Graduation', '#Alumni']
    },
    {
      id: 2,
      src: '/class/2.jpg',
      alt: 'Medical School Graduation',
      caption: 'Medical School Graduates',
      tags: ['#Medicine', '#WhiteCoat', '#Healthcare']
    },
    {
      id: 3,
      src: '/class/3.jpg',
      alt: 'Business School Celebration',
      caption: 'Business School Achievers',
      tags: ['#MBA', '#Leadership', '#Entrepreneurship']
    },
    {
      id: 4,
      src: '/class/4.jpg',
      alt: 'Engineering Department',
      caption: 'Engineering Graduates 2023',
      tags: ['#STEM', '#Innovation', '#Future']
    },
    {
      id: 5,
      src: '/class/5.jpg',
      alt: 'Arts and Humanities',
      caption: 'Arts Faculty Celebration',
      tags: ['#Creativity', '#Humanities', '#Culture']
    },
    {
      id: 6,
      src: '/class/6.jpg',
      alt: 'Sports Team Graduation',
      caption: 'Champion Athletes Graduating',
      tags: ['#Sports', '#Teamwork', '#Victory']
    }
  ];